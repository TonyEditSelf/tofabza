// components/layout/Footer.jsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gold-500/10 bg-navy-900/50">
      <div className="section-divider" />
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center text-navy-900 font-display font-bold text-lg">
              TK
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-gold-gradient">
                {BRAND.shortName}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Build. Automate. Grow.
              </span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Websites, automation, and content systems that work together.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold-500 mb-4 tracking-wide uppercase">
            Navigate
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-muted-foreground hover:text-gold-500 transition-colors text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold-500 mb-4 tracking-wide uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold-500" />
              {BRAND.email}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold-500" />
              {BRAND.phone}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold-500" />
              {BRAND.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold-500/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span>Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
