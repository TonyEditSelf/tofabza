// components/layout/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { authModalOpen, authRedirectPath, setAuthModalOpen, openAuthModal } =
    useAuth();
  const { count } = useCart();
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleCartClick = (e) => {
    e.preventDefault();
    if (
      count > 0 &&
      (status === "unauthenticated" ||
        (status === "authenticated" && !session?.user?.profileCompleted))
    ) {
      openAuthModal("/cart");
    } else {
      router.push("/cart");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-navy-900/70 border-b border-gold-500/10">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* this is the LOGO */}
          <div className="w-11 h-11 relative border rounded-sm  overflow-hidden">
            <Image
              src="/images/logo.webp"
              alt="TOFABZA logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gold-gradient">
              {BRAND.shortName}
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Build. Automate. Grow.
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-gold-500 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {/* Greeting Section */}
          <div className="hidden lg:flex flex-col items-end mr-2 border-r border-gold-500/10 pr-4 leading-tight">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Welcome
            </span>
            <span className="text-xs font-semibold text-gold-500 truncate max-w-[120px]">
              {status === "authenticated"
                ? session.user.name || "User"
                : "Guest"}
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleCartClick}
            className="text-gold-500 hover:text-gold-400 hover:bg-navy-800 relative inline-flex"
          >
            Cart
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold-gradient text-navy-900 text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </Button>

          {status === "authenticated" ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut()}
              className="hidden sm:inline-flex border-gold-500/20 text-gold-500 hover:bg-gold-500/10 h-9"
            >
              {/* <LogOut className="h-4 w-4 mr-2" /> */}
              Logout
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => openAuthModal()}
              className="hidden sm:inline-flex border-gold-500/20 text-gold-500 hover:bg-gold-500/10 h-9"
            >
              {/* <LogIn className="h-4 w-4 mr-2" /> */}
              Login
            </Button>
          )}

          {/* <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-9">
              Book a Call
            </Button>
          </Link> */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold-500/10 bg-navy-900/95 backdrop-blur-xl">
          <div className="container py-5 flex flex-col gap-4">
            {/* Mobile Greeting */}
            <div className="flex items-center gap-3 pb-4 border-b border-gold-500/10">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center border border-gold-500/20">
                <User className="w-5 h-5 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  Welcome
                </span>
                <span className="text-sm font-semibold text-gold-500">
                  {status === "authenticated"
                    ? session.user.name || "User"
                    : "Guest"}
                </span>
              </div>
            </div>

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-gold-500"
              >
                {l.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-2">
              {status === "authenticated" ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="w-full border-gold-500/20 text-gold-500 h-11"
                >
                  {/* <LogOut className="h-4 w-4 mr-2" /> */}
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => {
                    openAuthModal();
                    setOpen(false);
                  }}
                  className="w-full border-gold-500/20 text-gold-500 h-11"
                >
                  {/* <LogIn className="h-4 w-4 mr-2" /> */}
                  Login
                </Button>
              )}

              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gold-gradient text-navy-900 font-semibold cursor-pointer h-11">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onOpenChange={setAuthModalOpen}
        callbackUrl={authRedirectPath}
        onSuccess={() => router.push("/cart")}
      />
    </header>
  );
}
