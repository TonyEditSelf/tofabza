// app/contact/page.js
import ContactForm from "@/components/contact/ContactForm";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="absolute border-b  border-gold-500/30  top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Let's build something{" "}
            <span className="text-gold-gradient font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold ">
              premium.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your goals. We'll reply within 24 hours with tailored next
            steps — no pitch decks, no fluff.
          </p>
        </div>

        <div className="full-bleed-divider" />

        <div className="mt-20 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: BRAND.email },
              { icon: Phone, label: "Phone", value: BRAND.phone },
              { icon: MapPin, label: "Location", value: BRAND.location },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((c) => (
              <div
                key={c.label}
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-gold-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {c.label}
                  </div>
                  <div className="font-semibold text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
