// app/api/verify-payment/route.js
// Razorpay signature verification
import { NextResponse } from "next/server";
import crypto from "crypto";
import { getDb } from "@/lib/mongodb";
import { isPlaceholderKeys } from "@/lib/razorpay";

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (isPlaceholderKeys()) {
      return NextResponse.json({ success: true, mock: true });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const valid = expected === razorpay_signature;

    if (valid) {
      try {
        const db = await getDb();
        await db.collection("orders").updateOne(
          { razorpay_order_id },
          { $set: { status: "paid", payment_id: razorpay_payment_id, paid_at: new Date().toISOString() } }
        );
      } catch (e) {
        console.warn("DB update failed:", e.message);
      }
    }

    return NextResponse.json({ success: valid });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
