import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET(request) {
  // Ensure the request comes from Vercel by verifying the CRON_SECRET
  // Vercel sends `Authorization: Bearer <CRON_SECRET>` in cron requests
  const authHeader = request.headers.get("authorization");
  
  // If CRON_SECRET is configured on Vercel, validate it.
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const now = new Date();

    // Update all posts that are scheduled and whose publish time has arrived
    const result = await db.collection("blogPosts").updateMany(
      {
        status: "scheduled",
        publishedAt: { $lte: now }
      },
      {
        $set: { status: "published" }
      }
    );

    return NextResponse.json({
      success: true,
      message: `Published ${result.modifiedCount} scheduled post(s).`,
      timestamp: now.toISOString()
    });
  } catch (error) {
    console.error("[Cron Publish Error]", error);
    return NextResponse.json(
      { error: "Failed to publish scheduled posts" },
      { status: 500 }
    );
  }
}
