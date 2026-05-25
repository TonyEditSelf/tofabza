import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "tk_digital_solutions";

async function seed() {
  if (!uri) {
    console.error("MONGO_URL is missing in environment variables.");
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB.");
    const db = client.db(dbName);

    // Clear existing data (optional, but good for a fresh seed)
    await db.collection("categories").deleteMany({});
    await db.collection("blogPosts").deleteMany({});

    // Ensure the requested admin user exists
    const adminEmail = "tonyeappen@tofabza.com";
    const plainPassword = "GodBiggestLie0!";
    // In a real script we would import bcrypt, but since this is a standalone script
    // we'll just require it dynamically if available, or generate a hash using node crypto
    // Wait, since we are in node, let's just use bcryptjs.
    const bcrypt = await import("bcryptjs");
    const hashedPassword = await bcrypt.default.hash(plainPassword, 10);

    let adminUser = await db.collection("users").findOne({ email: adminEmail });
    
    let authorId;
    if (!adminUser) {
      console.log(`Creating admin user: ${adminEmail}`);
      const res = await db.collection("users").insertOne({
        name: "Tony Eappen",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
        profileCompleted: true
      });
      authorId = res.insertedId;
    } else {
      console.log(`Updating existing admin user: ${adminEmail}`);
      await db.collection("users").updateOne(
        { _id: adminUser._id },
        { $set: { password: hashedPassword, role: "admin" } }
      );
      authorId = adminUser._id;
    }

    // 1. Create Categories
    const categoriesToInsert = [
      { name: "Web Development", slug: "web-development", description: "All about building for the web" },
      { name: "Automation", slug: "automation", description: "Streamlining workflows and processes" },
      { name: "Digital Marketing", slug: "digital-marketing", description: "Growing your online presence" }
    ];

    const categoryRes = await db.collection("categories").insertMany(categoriesToInsert);
    const categoryIds = Object.values(categoryRes.insertedIds);
    console.log(`Inserted ${categoryIds.length} categories.`);

    // 2. Create Blog Posts
    const blogPosts = [
      {
        title: "The Future of Next.js: What to Expect in 2024",
        slug: "future-of-nextjs-2024",
        excerpt: "A deep dive into the upcoming features of Next.js and how they will shape web development.",
        content: "<p>Next.js continues to evolve at a rapid pace. In 2024, we can expect major improvements in server components, caching strategies, and overall developer experience.</p><p>Stay ahead of the curve by understanding these architectural shifts.</p>",
        featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        categories: [categoryIds[0]],
        tags: ["Next.js", "React", "Frontend"],
        status: "published",
        author: authorId,
        publishedAt: new Date(new Date().setDate(new Date().getDate() - 10)),
        createdAt: new Date(),
        updatedAt: new Date(),
        seoTitle: "Future of Next.js in 2024 - A Complete Guide",
        seoDescription: "Learn about the new features coming to Next.js in 2024 including server components and advanced caching."
      },
      {
        title: "Automating Your Workflow with GitHub Actions",
        slug: "automating-workflow-github-actions",
        excerpt: "Learn how to save hours of manual work by setting up robust CI/CD pipelines with GitHub Actions.",
        content: "<p>Automation is the key to scaling your development process. GitHub actions provides a seamless way to integrate continuous integration and deployment directly into your repository.</p><p>Here is a step-by-step guide to get started.</p>",
        featuredImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
        categories: [categoryIds[1]],
        tags: ["CI/CD", "Automation", "GitHub"],
        status: "published",
        author: authorId,
        publishedAt: new Date(new Date().setDate(new Date().getDate() - 5)),
        createdAt: new Date(),
        updatedAt: new Date(),
        seoTitle: "GitHub Actions Tutorial: Automate Your Workflow",
        seoDescription: "A comprehensive tutorial on setting up GitHub Actions for automated testing and deployment."
      },
      {
        title: "10 SEO Strategies for E-commerce in 2024",
        slug: "10-seo-strategies-ecommerce-2024",
        excerpt: "Boost your online store's visibility with these proven e-commerce SEO tactics.",
        content: "<p>Driving organic traffic to your e-commerce store is more critical than ever. We explore 10 actionable strategies from optimizing product descriptions to mastering technical SEO.</p><p>Don't leave money on the table; optimize your store today.</p>",
        featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        categories: [categoryIds[2]],
        tags: ["SEO", "E-commerce", "Marketing"],
        status: "published",
        author: authorId,
        publishedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        seoTitle: "10 E-commerce SEO Strategies for 2024",
        seoDescription: "Improve your e-commerce website's search engine ranking with these 10 proven SEO strategies."
      },
      {
        title: "Understanding Serverless Architecture",
        slug: "understanding-serverless-architecture",
        excerpt: "Demystifying serverless computing: benefits, drawbacks, and when to use it.",
        content: "<p>Serverless computing allows developers to build and run applications without thinking about servers. But is it always the right choice?</p><p>This post breaks down the pros and cons of going serverless.</p>",
        featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        categories: [categoryIds[0], categoryIds[1]],
        tags: ["Serverless", "Cloud", "Architecture"],
        status: "scheduled",
        author: authorId,
        publishedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        seoTitle: "Guide to Serverless Architecture",
        seoDescription: "An in-depth look at serverless computing, its advantages, disadvantages, and ideal use cases."
      },
      {
        title: "The Ultimate Guide to TypeScript",
        slug: "ultimate-guide-typescript",
        excerpt: "Everything you need to know to write type-safe JavaScript applications.",
        content: "<p>TypeScript has become the standard for modern JavaScript development. In this guide, we cover everything from basic types to advanced generic utility types.</p><p>Start writing more robust code today.</p>",
        featuredImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
        categories: [categoryIds[0]],
        tags: ["TypeScript", "JavaScript", "Programming"],
        status: "draft",
        author: authorId,
        publishedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        seoTitle: "The Ultimate TypeScript Guide",
        seoDescription: "Learn TypeScript from scratch with this comprehensive guide covering basics to advanced concepts."
      }
    ];

    const postRes = await db.collection("blogPosts").insertMany(blogPosts);
    console.log(`Inserted ${postRes.insertedCount} blog posts.`);

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

seed();
