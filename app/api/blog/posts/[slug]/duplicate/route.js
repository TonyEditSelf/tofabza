import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const slug = params.slug;
    const db = await getDb();
    
    const post = await db.collection("blogPosts").findOne({ slug });
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Prepare duplicate
    const duplicate = { ...post };
    delete duplicate._id;
    
    // Create new slug
    const suffix = uuidv4().split("-")[0]; // Use a short UUID segment to ensure uniqueness
    duplicate.slug = `${post.slug}-copy-${suffix}`;
    duplicate.title = `${post.title} (Copy)`;
    duplicate.status = "draft";
    duplicate.createdAt = new Date();
    duplicate.updatedAt = new Date();
    duplicate.publishedAt = null;

    const insertResult = await db.collection("blogPosts").insertOne(duplicate);
    
    return NextResponse.json({ _id: insertResult.insertedId, ...duplicate }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
