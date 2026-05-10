// components/plans/Cart.jsx
"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export default function Cart({ variant = "navy" }) {
  const { items, updateQty, removeItem, total, count } = useCart();
  const isCream = variant === "cream";
  const wrapperClass = isCream
    ? "cream-card rounded-2xl p-8"
    : "glass-card rounded-2xl p-8";
  const textColor = isCream ? "#0B1C2C" : "";
  const mutedColor = isCream ? "#5a6a7a" : "";

  if (count === 0) {
    return (
      <div className={`${wrapperClass} text-center`}>
        <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="h-7 w-7 text-gold-600" />
        </div>
        <h3
          className="font-display text-2xl font-semibold mb-2"
          style={isCream ? { color: textColor } : {}}
        >
          Your cart is empty
        </h3>
        <p
          style={isCream ? { color: mutedColor } : {}}
          className={`mb-6 ${!isCream ? "text-muted-foreground" : ""}`}
        >
          You haven't added any plans yet.
        </p>
        <a href="/plans">
          <button className="bg-gold-gradient text-navy-900 font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition">
            Browse Plans
          </button>
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="flex items-center justify-between mb-6">
        <h3
          className="font-display text-2xl font-semibold"
          style={isCream ? { color: textColor } : {}}
        >
          Your Cart
        </h3>
        <span className="text-sm" style={isCream ? { color: mutedColor } : {}}>
          {count} item{count > 1 ? "s" : ""}
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gold-500/15 last:border-0"
          >
            <div className="flex-1">
              <div
                className="font-semibold"
                style={isCream ? { color: textColor } : {}}
              >
                {item.name}
              </div>
              <div
                className="text-sm"
                style={isCream ? { color: mutedColor } : {}}
              >
                ₹{item.price.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 border-gold-500/30"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span
                  className="w-8 text-center font-semibold"
                  style={isCream ? { color: textColor } : {}}
                >
                  {item.qty}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 border-gold-500/30"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="font-semibold text-gold-600 min-w-[5rem] text-right">
                ₹{(item.price * item.qty).toLocaleString("en-IN")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gold-500/30 mb-6">
        <span
          className="text-lg font-semibold"
          style={isCream ? { color: textColor } : {}}
        >
          Total
        </span>
        <span className="font-display text-3xl font-semibold text-gold-gradient">
          ₹{total.toLocaleString("en-IN")}
        </span>
      </div>

      <CheckoutButton amount={total} items={items} />
    </div>
  );
}
