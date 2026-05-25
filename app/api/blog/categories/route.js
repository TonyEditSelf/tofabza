import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import { categorySchema } from "@/lib/models/Category";

export async function GET() {
  try {
    const db = await getDb();
    const categories = await db.collection("categories").find({}).toArray();
    return NextResponse.json(categories);
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
    
    // Validate with Zod
    const result = categorySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const data = result.data;
    const db = await getDb();

    // Check if slug exists
    const existing = await db.collection("categories").findOne({ slug: data.slug });
    if (existing) {
      return NextResponse.json({ error: "Category slug already exists" }, { status: 400 });
    }

    const insertResult = await db.collection("categories").insertOne(data);
    return NextResponse.json({ _id: insertResult.insertedId, ...data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
