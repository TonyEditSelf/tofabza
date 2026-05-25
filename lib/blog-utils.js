import { getDb } from "./mongodb";

export function calculateReadingTime(html) {
  if (!html) return 1;
  const text = html.replace(/<[^>]+>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return readingTime;
}

export async function getCategories() {
  try {
    const db = await getDb();
    const categories = await db.collection("categories").find({}).toArray();
    return categories.map(c => ({
      ...c,
      _id: c._id.toString()
    }));
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return [];
  }
}

export async function getPublishedPosts({ page = 1, limit = 9, categorySlug, search }) {
  try {
    const db = await getDb();
    const query = { status: "published" };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }

    if (categorySlug) {
      const category = await db.collection("categories").findOne({ slug: categorySlug });
      if (category) {
        query.categories = category._id;
      }
    }

    const skip = (page - 1) * limit;
    
    // Aggregation pipeline to join author and category details
    const pipeline = [
      { $match: query },
      { $sort: { publishedAt: -1 } },
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "authorDetails"
        }
      },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categoryDetails"
        }
      },
      {
        $unwind: {
          path: "$authorDetails",
          preserveNullAndEmptyArrays: true
        }
      }
    ];

    const posts = await db.collection("blogPosts").aggregate(pipeline).toArray();
    const total = await db.collection("blogPosts").countDocuments(query);

    return {
      posts: posts.map(p => ({
        ...p,
        _id: p._id.toString(),
        authorDetails: p.authorDetails ? { name: p.authorDetails.name, image: p.authorDetails.image } : null,
        categoryDetails: p.categoryDetails.map(c => ({ ...c, _id: c._id.toString() })),
        readingTime: calculateReadingTime(p.content)
      })),
      total,
      totalPages: Math.ceil(total / limit)
    };
  } catch (error) {
    console.error("Failed to fetch published posts", error);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getPostBySlug(slug) {
  try {
    const db = await getDb();
    
    const pipeline = [
      { $match: { slug, status: "published" } },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "authorDetails"
        }
      },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categoryDetails"
        }
      },
      {
        $unwind: {
          path: "$authorDetails",
          preserveNullAndEmptyArrays: true
        }
      }
    ];

    const posts = await db.collection("blogPosts").aggregate(pipeline).toArray();
    if (!posts || posts.length === 0) return null;
    
    const p = posts[0];
    return {
      ...p,
      _id: p._id.toString(),
      authorDetails: p.authorDetails ? { name: p.authorDetails.name, image: p.authorDetails.image } : null,
      categoryDetails: p.categoryDetails.map(c => ({ ...c, _id: c._id.toString() })),
      readingTime: calculateReadingTime(p.content)
    };
  } catch (error) {
    console.error(`Failed to fetch post ${slug}`, error);
    return null;
  }
}

export async function getRelatedPosts(categoryId, excludeSlug) {
  try {
    const db = await getDb();
    const posts = await db.collection("blogPosts").aggregate([
      { 
        $match: { 
          status: "published",
          categories: categoryId,
          slug: { $ne: excludeSlug }
        }
      },
      { $sort: { publishedAt: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categoryDetails"
        }
      }
    ]).toArray();

    return posts.map(p => ({
      ...p,
      _id: p._id.toString(),
      categoryDetails: p.categoryDetails.map(c => ({ ...c, _id: c._id.toString() })),
      readingTime: calculateReadingTime(p.content)
    }));
  } catch (error) {
    console.error("Failed to fetch related posts", error);
    return [];
  }
}
