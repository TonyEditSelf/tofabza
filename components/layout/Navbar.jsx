// components/layout/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const isWhatIBuildActive = [
    "/services/website-design",
    "/services/automation-systems",
  ].includes(pathname);

  const handleCartClick = (e) => {
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-900 border-b border-brand-500/10">
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
            <span className="text-sm font-semibold text-brand-gradient">
              {BRAND.shortName}
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.25em] text-muted-foreground">
              to businesses that are easier to run.
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
                    className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full border transition-colors ${
                      isWhatIBuildActive
                        ? "text-brand-500 border-brand-500/40"
                        : "text-foreground/80 border-brand-500/0 hover:text-brand-500 hover:border-brand-500/30"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isWhatIBuildActive ? "text-brand-500" : ""} group-hover:rotate-180`}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 px-3 py-1 rounded-full border ${pathname === l.href ? "text-brand-500 border-brand-500/40" : "text-foreground/80 border-brand-500/0"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/contact" className="hidden md:inline-flex">
            <Button className="bg-brand-500 hover:bg-brand-600 text-navy-900 font-semibold h-9">
              Start a conversation
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
        <div className="md:hidden border-t border-brand-500/10 bg-navy-900">
          <div className="container py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => {
              if (l.label === "What I Build") {
                return (
                  <div key={l.href}>
                    {/* Tap to toggle submenu */}
                    <button
                      onClick={() => setWhatIBuildOpen((prev) => !prev)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-full border transition-colors ${
                        isWhatIBuildActive
                          ? "text-brand-500 border-brand-500/40"
                          : "text-foreground/80 border-brand-500/0 hover:text-brand-500 hover:border-brand-500/30"
                      }`}
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isWhatIBuildActive ? "text-brand-500" : ""
                        } ${whatIBuildOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Submenu items */}
                    {whatIBuildOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-3 border-l border-brand-500/30 pl-4">
                        <Link
                          href="/services/website-design"
                          onClick={() => setOpen(false)}
                          className={`text-sm transition-colors ${
                            pathname === "/services/website-design"
                              ? "text-brand-500"
                              : "text-foreground/70 hover:text-brand-500"
                          }`}
                        >
                          Build
                        </Link>
                        <Link
                          href="/services/automation-systems"
                          onClick={() => setOpen(false)}
                          className={`text-sm transition-colors ${
                            pathname === "/services/automation-systems"
                              ? "text-brand-500"
                              : "text-foreground/70 hover:text-brand-500"
                          }`}
                        >
                          Automate
                        </Link>
                        <Link
                          href="/services/social-media-growth"
                          onClick={() => setOpen(false)}
                          className={`text-sm transition-colors ${
                            pathname === "/services/social-media-growth"
                              ? "text-brand-500"
                              : "text-foreground/70 hover:text-brand-500"
                          }`}
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
                  className={`hover:text-brand-500 transition-colors ${pathname === l.href ? "text-brand-500" : "text-foreground/80"}`}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-2 pt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-brand-500 hover:bg-brand-600 text-navy-900 font-semibold cursor-pointer h-11">
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
