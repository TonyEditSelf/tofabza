import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import { blogPostSchema } from "@/lib/models/BlogPost";
import { ObjectId } from "mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status");
    const q = searchParams.get("q");
    
    const query = {};
    if (status) {
      query.status = status;
    }
    
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { content: { $regex: q, $options: "i" } }
      ];
    }

    const db = await getDb();
    
    const skip = (page - 1) * limit;
    const posts = await db.collection("blogPosts")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection("blogPosts").countDocuments(query);

    return NextResponse.json({
      posts,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // Attach author from session
    if (!body.author && session.user?.id) {
      body.author = session.user.id;
    }
    
    // Validate with Zod
    const result = blogPostSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const data = result.data;
    const db = await getDb();

    // Check if slug exists
    const existing = await db.collection("blogPosts").findOne({ slug: data.slug });
    if (existing) {
      return NextResponse.json({ error: "Post slug already exists" }, { status: 400 });
    }
    
    // Set author from session if not provided
    try {
      if (!data.author && session.user?.id) {
        data.author = new ObjectId(session.user.id);
      } else if (data.author) {
        data.author = new ObjectId(data.author);
      }

      if (data.categories) {
        data.categories = data.categories.map(c => new ObjectId(c));
      }
    } catch (err) {
      return NextResponse.json({ error: "Invalid ID format for author or categories" }, { status: 400 });
    }
    
    data.createdAt = new Date();
    data.updatedAt = new Date();

    const insertResult = await db.collection("blogPosts").insertOne(data);
    return NextResponse.json({ _id: insertResult.insertedId, ...data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
