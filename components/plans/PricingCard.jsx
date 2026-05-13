// components/plans/PricingCard.jsx
"use client";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function PricingCard({ plan, variant = "navy" }) {
  const { addItem } = useCart();
  const isCream = variant === "cream";
  // In cream variant, the highlighted card flips to NAVY for max contrast
  const isInverted = isCream && plan.highlight;

  const handleAdd = () => {
    addItem({ id: plan.id, name: plan.name, price: plan.price });
    toast.success(`${plan.name} plan added to cart`);
  };

  // Card wrapper styling
  const cardClass = isInverted
    ? "glass-card-hover relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 scale-[1.04] gold-border-glow"
    : isCream
      ? "cream-card scale-[1.04] relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500"
      : plan.highlight
        ? "glass-card-hover bg-gradient-to-b from-gold-500/10 to-transparent border border-gold-500/40 gold-border-glow scale-[1.02] relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500"
        : "glass-card glass-card-hover relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500";

  // Inline style for inverted (navy) card so we don't need new utility classes
  const invertedStyle = isInverted
    ? {
        background: "linear-gradient(180deg, #0E2238 0%, #0B1C2C 100%)",
        border: "1px solid rgba(212, 175, 55, 0.5)",
        boxShadow:
          "0 0 60px rgba(212, 175, 55, 0.25), 0 20px 40px rgba(0,0,0,0.4)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    : {};

  // Text colors
  const priceColor = isInverted ? "#F8F3E8" : isCream ? "#0B1C2C" : undefined;
  const taglineColor = isInverted
    ? "rgba(248,243,232,0.7)"
    : isCream
      ? "#5a6a7a"
      : undefined;
  const featureColor = isInverted
    ? "rgba(248,243,232,0.9)"
    : isCream
      ? "#1a2c3c"
      : undefined;
  const periodColor = isInverted
    ? "rgba(248,243,232,0.6)"
    : isCream
      ? "#5a6a7a"
      : undefined;

  return (
    <div className={cardClass} style={invertedStyle}>
      {/* {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold-gradient text-navy-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-gold-500/40 whitespace-nowrap">
          <Sparkles className="h-3.5 w-3.5" /> Most Popular
        </div>
      )} */}

      <div className="mb-6">
        <div
          className="text-sm uppercase tracking-[0.25em] mb-3 font-semibold"
          style={{
            color: isInverted ? "#D4AF37" : isCream ? "#C9A227" : "#D4AF37",
          }}
        >
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-3">
          <span
            className={
              isInverted
                ? "font-display text-5xl md:text-6xl font-semibold text-gold-gradient"
                : "font-display text-5xl md:text-6xl font-semibold"
            }
            style={!isInverted && priceColor ? { color: priceColor } : {}}
          >
            {plan.priceLabel}
          </span>
          {plan.period && (
            <span
              style={periodColor ? { color: periodColor } : {}}
              className={!isCream && !isInverted ? "text-muted-foreground" : ""}
            >
              {plan.period}
            </span>
          )}
        </div>
        <p
          className="leading-relaxed"
          style={taglineColor ? { color: taglineColor } : {}}
        >
          <span
            className={!isCream && !isInverted ? "text-muted-foreground" : ""}
          >
            {plan.tagline}
          </span>
        </p>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <div
              className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: isInverted
                  ? "rgba(212,175,55,0.2)"
                  : "rgba(212,175,55,0.15)",
                border: `1px solid rgba(212,175,55,${isInverted ? 0.6 : 0.4})`,
              }}
            >
              <Check
                className="h-3 w-3"
                style={{ color: isInverted ? "#E6C766" : "#C9A227" }}
              />
            </div>
            <span
              className="text-sm"
              style={featureColor ? { color: featureColor } : {}}
            >
              {!isCream && !isInverted ? (
                <span className="text-foreground/90">{f}</span>
              ) : (
                f
              )}
            </span>
          </li>
        ))}
      </ul>

      {plan.buyable ? (
        <Link href="/contact" className="w-full">
          <Button
            size="lg"
            className={
              isInverted
                ? "w-full bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-12 gold-border-glow"
                : plan.highlight
                  ? "w-full bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-12"
                  : isCream
                    ? "w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12"
                    : "w-full bg-navy-800 border border-gold-500/30 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold h-12"
            }
          >
            {plan.cta}
          </Button>
        </Link>
      ) : (
        <Link href="/contact">
          <Button
            size="lg"
            className={
              isCream
                ? "w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12"
                : "w-full bg-navy-800 border border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold h-12"
            }
          >
            {plan.cta}
          </Button>
        </Link>
      )}
    </div>
  );
}
