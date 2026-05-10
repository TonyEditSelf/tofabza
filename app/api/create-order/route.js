// app/api/create-order/route.js
// Razorpay order creation endpoint
import { NextResponse } from "next/server";
import { createRazorpayOrder, isPlaceholderKeys } from "@/lib/razorpay";
import { getDb } from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  try {
    const { amount, currency = "INR", items = [] } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const order = await createRazorpayOrder({
      amount, // paise
      currency,
      receipt: `rcpt_${Date.now()}`,
    });

    // Persist order intent
    try {
      const db = await getDb();
      await db.collection("orders").insertOne({
        id: uuidv4(),
        razorpay_order_id: order.id,
        amount,
        currency,
        items,
        status: "created",
        mock: !!order.mock,
        created_at: new Date().toISOString(),
      });
    } catch (dbErr) {
      console.warn("DB insert failed (non-fatal):", dbErr.message);
    }

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      mock: !!order.mock || isPlaceholderKeys(),
    });
  } catch (e) {
    console.error("create-order error:", e);
    return NextResponse.json({ error: e.message || "Order creation failed" }, { status: 500 });
  }
}
