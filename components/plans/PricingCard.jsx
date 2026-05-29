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
    ? "glass-card-hover relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 scale-[1.04] brand-border-glow"
    : isCream
      ? "cream-card scale-[1.04] relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500"
      : plan.highlight
        ? "glass-card-hover bg-gradient-to-b from-brand-500/10 to-transparent border border-brand-500/40 brand-border-glow scale-[1.02] relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500"
        : "glass-card glass-card-hover relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500";

  // Inline style for inverted (navy) card so we don't need new utility classes
  const invertedStyle = isInverted
    ? {
        background: "linear-gradient(180deg, var(--navy-800) 0%, var(--navy-900) 100%)",
        border: "1px solid rgba(var(--brand-500-rgb), 0.5)",
        boxShadow:
          "0 0 60px rgba(var(--brand-500-rgb), 0.25), 0 20px 40px rgba(0,0,0,0.4)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    : {};

  // Text colors
  const priceColor = isInverted ? "var(--cream-bg)" : isCream ? "var(--navy-900)" : undefined;
  const taglineColor = isInverted
    ? "rgba(var(--cream-bg-rgb),0.7)"
    : isCream
      ? "var(--muted-text)"
      : undefined;
  const featureColor = isInverted
    ? "rgba(var(--cream-bg-rgb),0.9)"
    : isCream
      ? "#1a2c3c"
      : undefined;
  const periodColor = isInverted
    ? "rgba(var(--cream-bg-rgb),0.6)"
    : isCream
      ? "var(--muted-text)"
      : undefined;

  return (
    <div className={cardClass} style={invertedStyle}>
      <div className="mb-6">
        <div
          className="text-sm uppercase tracking-[0.25em] mb-3 font-semibold"
          style={{
            color: isInverted ? "var(--brand-500)" : isCream ? "var(--brand-600)" : "var(--brand-500)",
          }}
        >
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-3">
          <span
            className={
              isInverted
                ? "font-display text-5xl md:text-4xl font-semibold text-brand-gradient"
                : "font-display text-5xl md:text-4xl font-semibold"
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
                  ? "rgba(var(--brand-500-rgb),0.2)"
                  : "rgba(var(--brand-500-rgb),0.15)",
                border: `1px solid rgba(var(--brand-500-rgb),${isInverted ? 0.6 : 0.4})`,
              }}
            >
              <Check
                className="h-3 w-3"
                style={{ color: isInverted ? "var(--brand-400)" : "var(--brand-600)" }}
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
                ? "w-full bg-brand-gradient text-navy-900 hover:opacity-90 font-semibold h-12 brand-border-glow"
                : plan.highlight
                  ? "w-full bg-brand-gradient text-navy-900 hover:opacity-90 font-semibold h-12"
                  : isCream
                    ? "w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12"
                    : "w-full bg-navy-800 border border-brand-500/30 text-foreground hover:bg-brand-500/10 hover:text-brand-500 font-semibold h-12"
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
                : "w-full bg-navy-800 border border-brand-500/40 text-foreground hover:bg-brand-500/10 hover:text-brand-500 font-semibold h-12"
            }
          >
            {plan.cta}
          </Button>
        </Link>
      )}
    </div>
  );
}
