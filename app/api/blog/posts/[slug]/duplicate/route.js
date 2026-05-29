import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import {
  jsonError,
  requireAdmin,
  serializePost,
  slugify,
} from "@/lib/blog-backend";

export async function POST(request, { params }) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    await requireAdmin(db, session);

    const post = await db.collection("blogPosts").findOne({ slug: params.slug });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const baseSlug = `${slugify(post.slug || post.title)}-copy`;
    let slug = baseSlug;
    let suffix = 2;

    while (await db.collection("blogPosts").findOne({ slug })) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    const now = new Date();
    const duplicate = {
      title: `${post.title} (Copy)`,
      slug,
      excerpt: post.excerpt || "",
      content: post.content || "",
      featuredImage: post.featuredImage || "",
      categories: Array.isArray(post.categories) ? post.categories : [],
      tags: Array.isArray(post.tags) ? post.tags : [],
      status: "draft",
      author: post.author,
      publishedAt: null,
      createdAt: now,
      updatedAt: now,
      seoTitle: post.seoTitle || "",
      seoDescription: post.seoDescription || "",
    };

    const insertResult = await db.collection("blogPosts").insertOne(duplicate);
    const createdPost = await db
      .collection("blogPosts")
      .findOne({ _id: insertResult.insertedId });

    return NextResponse.json(serializePost(createdPost), { status: 201 });
  } catch (error) {
    console.error("[Blog Post Duplicate]", error);
    return jsonError(error);
  }
}
