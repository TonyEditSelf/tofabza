import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import {
  jsonError,
  normalizePostPayload,
  requireAdmin,
  serializePost,
} from "@/lib/blog-backend";

export async function GET(request, { params }) {
  try {
    const db = await getDb();
    const post = await db.collection("blogPosts").findOne({ slug: params.slug });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(serializePost(post));
  } catch (error) {
    console.error("[Blog Post GET]", error);
    return jsonError(error);
  }
}

export async function PUT(request, { params }) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    await requireAdmin(db, session);

    const existingPost = await db
      .collection("blogPosts")
      .findOne({ slug: params.slug });

    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const body = await request.json();
    const data = {
      ...normalizePostPayload(body, { existingPost }),
      updatedAt: new Date(),
    };

    if (data.slug !== params.slug) {
      const duplicate = await db.collection("blogPosts").findOne({
        slug: data.slug,
        _id: { $ne: existingPost._id },
      });

      if (duplicate) {
        return NextResponse.json(
          { error: "Post slug already exists" },
          { status: 400 },
        );
      }
    }

    await db
      .collection("blogPosts")
      .updateOne({ _id: existingPost._id }, { $set: data });

    const updatedPost = await db
      .collection("blogPosts")
      .findOne({ _id: existingPost._id });

    return NextResponse.json(serializePost(updatedPost));
  } catch (error) {
    console.error("[Blog Post PUT]", error);
    return jsonError(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    await requireAdmin(db, session);

    const result = await db
      .collection("blogPosts")
      .deleteOne({ slug: params.slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Blog Post DELETE]", error);
    return jsonError(error);
  }
}
