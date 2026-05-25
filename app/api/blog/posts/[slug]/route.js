import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import { blogPostSchema } from "@/lib/models/BlogPost";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const slug = params.slug;
    console.log("[GET Post] Fetching post for slug:", slug);
    const db = await getDb();
    
    const post = await db.collection("blogPosts").findOne({ slug });
    
    if (!post) {
      console.log("[GET Post] Post not found for slug:", slug);
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    console.log("[GET Post] Found post:", post.title);
    return NextResponse.json(post);
  } catch (error) {
    console.error("[GET Post] Error fetching post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const slug = params.slug;
    const body = await request.json();
    
    // Attach author from session
    if (!body.author && session.user?.id) {
      body.author = session.user.id;
    }
    
    // Partial schema validation for updates (ignoring required fields if they are missing in payload, 
    // or we can require full body. Assuming full body for PUT)
    const result = blogPostSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const data = result.data;
    const db = await getDb();
    
    // Check if updating to an existing slug
    if (data.slug !== slug) {
      const existing = await db.collection("blogPosts").findOne({ slug: data.slug });
      if (existing) {
        return NextResponse.json({ error: "Post slug already exists" }, { status: 400 });
      }
    }

    try {
      if (data.author) data.author = new ObjectId(data.author);
      if (data.categories) {
        data.categories = data.categories.map(c => new ObjectId(c));
      }
    } catch (err) {
      return NextResponse.json({ error: "Invalid ID format for author or categories" }, { status: 400 });
    }
    
    data.updatedAt = new Date();

    const updateResult = await db.collection("blogPosts").updateOne(
      { slug },
      { $set: data }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const slug = params.slug;
    const db = await getDb();
    
    const deleteResult = await db.collection("blogPosts").deleteOne({ slug });
    
    if (deleteResult.deletedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
