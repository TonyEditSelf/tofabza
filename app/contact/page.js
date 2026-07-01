import ContactForm from "@/components/contact/ContactForm";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    className="h-5 w-5 text-brand-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.84L.057 23.743a.5.5 0 0 0 .612.612l5.903-1.466A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.205-1.433l-.374-.223-3.865.96.976-3.866-.223-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: BRAND.whatsapp,
    href: `https://wa.me/${BRAND.whatsapp}`,
  },
  { icon: MapPin, label: "Location", value: BRAND.location },
  { icon: Clock, label: "I'll reply within", value: "24 hours" },
];

const ContactPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="absolute border-b border-brand-500/30 top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-brand-400 font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Tell me what's{" "}
            <span className="text-brand-gradient font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold">
              broken.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Share what's slowing your business down. I'll get back to you within
            24 hours to set up a discovery call — no pitch, no pressure.
          </p>
        </div>

        <div className="full-bleed-divider" />

        <div className="mt-20 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {c.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {c.value}
                    </div>
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
