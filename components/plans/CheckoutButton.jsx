// components/plans/CheckoutButton.jsx
"use client";
import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutButton({ amount, items }) {
  const [loading, setLoading] = useState(false);
  const { clear } = useCart();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Create Razorpay order (amount in paise)
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100, currency: "INR", items }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to create order");

      if (data.mock) {
        toast.info("Razorpay keys not configured yet. Demo order created — plug real keys into .env to enable live checkout.", { duration: 6000 });
        setLoading(false);
        return;
      }

      const rzpKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded. Please refresh.");
        setLoading(false);
        return;
      }

      const rzp = new window.Razorpay({
        key: rzpKey,
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: "Tofabza",
        description: "Premium Digital Growth Plan",
        theme: { color: "#D4AF37" },
        handler: async (response) => {
          // Verify on server
          const verify = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const vdata = await verify.json();
          if (vdata.success) {
            toast.success("Payment successful! We'll reach out within 24 hours.");
            clear();
          } else {
            toast.error("Payment verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            toast.info("Checkout cancelled");
          },
        },
      });
      rzp.open();
    } catch (e) {
      toast.error(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <Button
        size="lg"
        onClick={handleCheckout}
        disabled={loading || amount <= 0}
        className="w-full bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-14 text-base gold-border-glow"
      >
        {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Lock className="mr-2 h-4 w-4" />}
        {loading ? "Processing..." : `Checkout — ₹${amount.toLocaleString("en-IN")}`}
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-3">Secure payment powered by Razorpay</p>
    </>
  );
}
