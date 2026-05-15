// components/layout/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  LogIn,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [whatIBuildOpen, setWhatIBuildOpen] = useState(false); // ← ADDED
  const { authModalOpen, authRedirectPath, setAuthModalOpen, openAuthModal } =
    useAuth();
  const { count } = useCart();
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleCartClick = (e) => {
    e.preventDefault();
    router.push("/cart");
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
          {NAV_LINKS.map((l) => {
            if (l.label === "What I Build") {
              return (
                <div key={l.href} className="relative group py-2">
                  <Link
                    href={l.href}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-gold-500 transition-colors"
                  >
                    {l.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="min-w-[160px] bg-navy-900/95 backdrop-blur-xl border border-gold-500/20 rounded-xl p-2 shadow-2xl shadow-black/50">
                      <Link
                        href="/services/website-design"
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
                      >
                        Build
                      </Link>
                      <Link
                        href="/services/automation-systems"
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
                      >
                        Automate
                      </Link>
                      <Link
                        href="/services/social-media-growth"
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-gold-500 hover:bg-gold-500/10 rounded-lg transition-all"
                      >
                        Grow
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 px-3 py-1 rounded-full border ${pathname === l.href ? "text-gold-500 border-gold-500/40" : "text-foreground/80 border-gold-500/0"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          {/* Greeting Section */}
          {/* <div className="hidden lg:flex flex-col items-end mr-2 border-r border-gold-500/10 pr-4 leading-tight">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Welcome
            </span>
            <span className="text-xs font-semibold text-gold-500 truncate max-w-[120px]">
              {status === "authenticated"
                ? session.user.name || "User"
                : "Guest"}
            </span>
          </div> */}

          {/* <Button
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
          </Button> */}

          {/* {status === "authenticated" ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut()}
              className="hidden sm:inline-flex border-gold-500/20 text-gold-500 hover:bg-gold-500/10 h-9"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => openAuthModal()}
              className="hidden sm:inline-flex border-gold-500/20 text-gold-500 hover:bg-gold-500/10 h-9"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          )} */}

          <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-9">
              Book a Free Slot
            </Button>
          </Link>
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
            {/* <div className="flex items-center gap-3 pb-4 border-b border-gold-500/10">
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
            </div> */}

            {NAV_LINKS.map((l) => {
              if (l.label === "What I Build") {
                return (
                  <div key={l.href}>
                    {/* Tap to toggle submenu */}
                    <button
                      onClick={() => setWhatIBuildOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full text-foreground/80 hover:text-gold-500 transition-colors"
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          whatIBuildOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu items */}
                    {whatIBuildOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-3 border-l border-gold-500/30 pl-4">
                        <Link
                          href="/services/website-design"
                          onClick={() => setOpen(false)}
                          className="text-sm text-foreground/70 hover:text-gold-500 transition-colors"
                        >
                          Build
                        </Link>
                        <Link
                          href="/services/automation-systems"
                          onClick={() => setOpen(false)}
                          className="text-sm text-foreground/70 hover:text-gold-500 transition-colors"
                        >
                          Automate
                        </Link>
                        <Link
                          href="/services/social-media-growth"
                          onClick={() => setOpen(false)}
                          className="text-sm text-foreground/70 hover:text-gold-500 transition-colors"
                        >
                          Grow
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`hover:text-gold-500 transition-colors ${pathname === l.href ? "text-gold-500" : "text-foreground/80"}`}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-2 pt-2">
              {/* {status === "authenticated" ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="w-full border-gold-500/20 text-gold-500 h-11"
                >
                  <LogOut className="h-4 w-4 mr-2" />
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
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )} */}

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
