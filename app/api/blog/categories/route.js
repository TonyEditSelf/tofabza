import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import {
  jsonError,
  normalizeCategoryPayload,
  requireAdmin,
  serializeCategory,
} from "@/lib/blog-backend";

export async function GET() {
  try {
    const db = await getDb();
    const categories = await db
      .collection("categories")
      .find({})
      .sort({ name: 1 })
      .toArray();

    return NextResponse.json(categories.map(serializeCategory));
  } catch (error) {
    console.error("[Blog Categories GET]", error);
    return jsonError(error);
  }
}

export async function POST(request) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    await requireAdmin(db, session);

    const body = await request.json();
    const data = normalizeCategoryPayload(body);

    const existing = await db.collection("categories").findOne({ slug: data.slug });
    if (existing) {
      return NextResponse.json(
        { error: "Category slug already exists" },
        { status: 400 },
      );
    }

    const now = new Date();
    const insertResult = await db.collection("categories").insertOne({
      ...data,
      createdAt: now,
      updatedAt: now,
    });

    const category = await db
      .collection("categories")
      .findOne({ _id: insertResult.insertedId });

    return NextResponse.json(serializeCategory(category), { status: 201 });
  } catch (error) {
    console.error("[Blog Categories POST]", error);
    return jsonError(error);
  }
}
