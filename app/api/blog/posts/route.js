import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import {
  escapeRegex,
  jsonError,
  normalizePostPayload,
  parsePageParams,
  requireAdmin,
  serializePost,
} from "@/lib/blog-backend";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const { page, limit, skip } = parsePageParams(searchParams);
    const status = searchParams.get("status");
    const q = searchParams.get("q");

    const query = {};
    if (status && ["draft", "published", "scheduled"].includes(status)) {
      query.status = status;
    }

    if (q) {
      const pattern = escapeRegex(q);
      query.$or = [
        { title: { $regex: pattern, $options: "i" } },
        { excerpt: { $regex: pattern, $options: "i" } },
        { content: { $regex: pattern, $options: "i" } },
      ];
    }

    const db = await getDb();
    const [posts, total] = await Promise.all([
      db
        .collection("blogPosts")
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection("blogPosts").countDocuments(query),
    ]);

    return NextResponse.json({
      posts: posts.map(serializePost),
      total,
      page,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    });
  } catch (error) {
    console.error("[Blog Posts GET]", error);
    return jsonError(error);
  }
}

export async function POST(request) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    const adminUser = await requireAdmin(db, session);
    const body = await request.json();
    const now = new Date();

    const payload = normalizePostPayload(body, { authorId: adminUser._id });
    const data = {
      ...payload,
      createdAt: payload.publishedAt || now,
      updatedAt: now,
    };

    const existing = await db.collection("blogPosts").findOne({ slug: data.slug });
    if (existing) {
      return NextResponse.json(
        { error: "Post slug already exists" },
        { status: 400 },
      );
    }

    const insertResult = await db.collection("blogPosts").insertOne(data);
    const post = await db
      .collection("blogPosts")
      .findOne({ _id: insertResult.insertedId });

    return NextResponse.json(serializePost(post), { status: 201 });
  } catch (error) {
    console.error("[Blog Posts POST]", error);
    return jsonError(error);
  }
}
