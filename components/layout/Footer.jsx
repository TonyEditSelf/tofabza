// components/layout/Footer.jsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import AdminPortalLink from "./AdminPortalLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-brand-500/10 bg-navy-900/50">
      <div className="section-divider" />
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="w-11 h-11 rounded-lg bg-brand-gradient flex items-center justify-center text-navy-900 font-display font-bold text-lg">
              TK
            </div> */}
            <div className="w-11 h-11 relative border rounded-sm  overflow-hidden">
              <Image
                src="/images/logo.webp"
                alt="TOFABZA logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-brand-gradient">
                {BRAND.shortName}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Operational Engineering for Growing Businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-brand-500 mb-4 tracking-wide uppercase">
            Explore
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.reduce(
              (acc, l) => (l.subLinks ? [...acc, ...l.subLinks] : [...acc, l]),
              [],
            ).map((l, idx) => {
              if (!l.href) console.log("Missing href in Footer:", l);
              return (
                <li key={l.href || `fallback-${idx}`}>
                  <Link
                    href={l.href || "#"}
                    className="text-muted-foreground hover:text-brand-500 transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-brand-500 mb-4 tracking-wide uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand-500" />
              {BRAND.email}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand-500" />
              {BRAND.phone}
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="h-4 w-4 mt-0.5 text-brand-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.84L.057 23.743a.5.5 0 0 0 .612.612l5.903-1.466A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.205-1.433l-.374-.223-3.865.96.976-3.866-.223-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-500" />
              {BRAND.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-500/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <AdminPortalLink className="hover:text-brand-500 transition-colors" />
            <span>Built by Tony Eappen.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
