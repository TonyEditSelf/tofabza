// context/CartContext.js
"use client";
import { createContext, useContext, useEffect, useMemo, useState, useRef } from "react";
import { useSession } from "next-auth/react";

const CartContext = createContext(null);
const CART_KEY = "tk_cart";
const GUEST_CART_KEY = "tk_guest_cart";

export function CartProvider({ children }) {
  const { data: session, status } = useSession();
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const initialLoadRef = useRef(false);

  // Sync with session
  useEffect(() => {
    if (status === "unauthenticated") {
      const guestCart = readCart(GUEST_CART_KEY);
      setItems(guestCart);
      setHydrated(true);
      initialLoadRef.current = false;
    } else if (status === "authenticated" && !initialLoadRef.current) {
      const guestCart = readCart(GUEST_CART_KEY);
      // Load from session or API
      if (session?.user?.cart) {
        setItems(mergeCartItems(session.user.cart, guestCart));
        setHydrated(true);
        initialLoadRef.current = true;
      } else {
        // Fallback fetch
        fetch("/api/cart")
          .then((res) => res.json())
          .then((data) => {
            setItems(mergeCartItems(data.items || [], guestCart));
            setHydrated(true);
            initialLoadRef.current = true;
          })
          .catch(() => setHydrated(true));
      }
    }
  }, [status, session]);

  // Sync to DB and LocalStorage
  useEffect(() => {
    if (!hydrated) return;

    if (status === "authenticated") {
      // Sync to DB
      fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      // Also keep in localStorage for immediate feedback on refresh before session loads
      localStorage.setItem(CART_KEY, JSON.stringify(items));
      localStorage.removeItem(GUEST_CART_KEY);
    } else {
      localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items));
    }
  }, [items, status, hydrated]);

  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const clear = () => {
    setItems([]);
  };

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

function mergeCartItems(primary = [], secondary = []) {
  const byId = new Map();

  [...primary, ...secondary].forEach((item) => {
    const existing = byId.get(item.id);
    byId.set(item.id, {
      ...item,
      qty: (existing?.qty || 0) + (item.qty || 1),
    });
  });

  return Array.from(byId.values());
}

function readCart(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
