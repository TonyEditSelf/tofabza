"use client";

import Cart from "@/components/plans/Cart";
import Link from "next/link";
import { Sparkles, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "@/components/layout/AuthModal";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
      </div>
    );
  }

  return (
    <div className="pt-40  min-h-screen relative">
      <div className="absolute top-20 left-0 right-0 h-[350px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="max-w-4xl  mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
              Checkout
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Your <span className="text-gold-gradient">Cart.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Review your selected plans before checking out.
          </p>
          <div className="mt-12 max-w-3xl flex flex-col sm:flex-row items-start gap-6">
            <Link
              href="/plans"
              className="text-md 
                 text-gold-500 hover:underline font-medium"
            >
              ← Continue browsing plans
            </Link>
          </div>
        </div>

        <div className="full-bleed-divider" />

        <div className="max-w-3xl mx-auto mt-28 pb-20">
          <Cart variant="cream" />
        </div>
      </div>
    </div>
  );
}
