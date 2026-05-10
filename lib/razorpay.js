// lib/razorpay.js
// Razorpay server-side helper. In test mode with placeholder keys, returns a mock order
// so the UI flow remains fully functional until real keys are provided.

import Razorpay from "razorpay";

export const isPlaceholderKeys = () => {
  const id = process.env.RAZORPAY_KEY_ID || "";
  const secret = process.env.RAZORPAY_KEY_SECRET || "";
  return id.includes("PLACEHOLDER") || secret.includes("PLACEHOLDER") || !id || !secret;
};

export const getRazorpayClient = () => {
  if (isPlaceholderKeys()) return null;
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

export const createRazorpayOrder = async ({ amount, currency = "INR", receipt }) => {
  const client = getRazorpayClient();
  if (!client) {
    // Placeholder-mode mock order, marked clearly so frontend can handle gracefully
    return {
      id: `order_mock_${Date.now()}`,
      amount,
      currency,
      receipt,
      status: "created",
      mock: true,
    };
  }
  return await client.orders.create({
    amount,
    currency,
    receipt: receipt?.slice(0, 40) || `rcpt_${Date.now()}`,
    payment_capture: 1,
  });
};
