import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import {
  buildPublicPostPipeline,
  escapeRegex,
  serializeCategory,
  serializeDate,
  serializePost,
  toObjectIdString,
} from "./blog-backend";

export function calculateReadingTime(html) {
  if (!html) return 1;

  const text = String(html).replace(/<[^>]+>/g, " ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export async function getCategories() {
  try {
    const db = await getDb();
    const categories = await db
      .collection("categories")
      .find({})
      .sort({ name: 1 })
      .toArray();

    return categories.map(serializeCategory);
  } catch (error) {
    console.error("[Blog Utils] Failed to fetch categories", error);
    return [];
  }
}

export async function getPublishedPosts({
  page = 1,
  limit = 9,
  categorySlug,
  search,
} = {}) {
  try {
    const db = await getDb();
    const query = { status: "published" };

    if (search) {
      const pattern = escapeRegex(search);
      query.$or = [
        { title: { $regex: pattern, $options: "i" } },
        { excerpt: { $regex: pattern, $options: "i" } },
        { content: { $regex: pattern, $options: "i" } },
      ];
    }

    if (categorySlug) {
      const category = await db
        .collection("categories")
        .findOne({ slug: categorySlug });

      if (!category) {
        return { posts: [], total: 0, totalPages: 0 };
      }

      query.categories = category._id;
    }

    const currentPage = Math.max(1, Number.parseInt(page, 10) || 1);
    const pageLimit = Math.min(50, Math.max(1, Number.parseInt(limit, 10) || 9));
    const skip = (currentPage - 1) * pageLimit;

    const [posts, total] = await Promise.all([
      db
        .collection("blogPosts")
        .aggregate(buildPublicPostPipeline(query, { skip, limit: pageLimit }))
        .toArray(),
      db.collection("blogPosts").countDocuments(query),
    ]);

    return {
      posts: posts.map(serializePublicPost),
      total,
      totalPages: Math.ceil(total / pageLimit),
    };
  } catch (error) {
    console.error("[Blog Utils] Failed to fetch published posts", error);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getPostBySlug(slug) {
  try {
    const db = await getDb();
    const posts = await db
      .collection("blogPosts")
      .aggregate(buildPublicPostPipeline({ slug, status: "published" }, { limit: 1 }))
      .toArray();

    if (!posts.length) return null;
    return serializePublicPost(posts[0]);
  } catch (error) {
    console.error(`[Blog Utils] Failed to fetch post ${slug}`, error);
    return null;
  }
}

export async function getRelatedPosts(categoryId, excludeSlug) {
  try {
    const id = toObjectIdString(categoryId);
    if (!id) return [];

    const db = await getDb();
    const posts = await db
      .collection("blogPosts")
      .aggregate(
        buildPublicPostPipeline(
          {
            status: "published",
            categories: new ObjectId(id),
            slug: { $ne: excludeSlug },
          },
          { limit: 3 },
        ),
      )
      .toArray();

    return posts.map(serializePublicPost);
  } catch (error) {
    console.error("[Blog Utils] Failed to fetch related posts", error);
    return [];
  }
}

function serializePublicPost(post) {
  const serializedPost = serializePost(post);

  return {
    ...serializedPost,
    authorDetails: post.authorDetails
      ? {
          name: post.authorDetails.name,
          image: post.authorDetails.image,
        }
      : null,
    categoryDetails: Array.isArray(post.categoryDetails)
      ? post.categoryDetails.map(serializeCategory)
      : [],
    readingTime: calculateReadingTime(post.content),
    publishedAt: serializeDate(post.publishedAt),
  };
}
