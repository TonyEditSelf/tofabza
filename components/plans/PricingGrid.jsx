"use client";
import { Button } from "@/components/ui/button";
import PricingCard from "./PricingCard";
import { PLANS } from "@/lib/constants";
import Link from "next/link";
import { TrendingUp, Inbox, Zap, ArrowRight, Eye, Layout } from "lucide-react";

const microPlan = PLANS.filter((p) => p.section === "micro");
const buildPlans = PLANS.filter((p) => p.section === "build");
const automatePlans = PLANS.filter((p) => p.section === "automate");
const growPlans = PLANS.filter((p) => p.section === "grow");

const OUTGROW = [
  {
    icon: TrendingUp,
    desc: "A website that converts.",
  },
  {
    icon: Inbox,
    desc: "Systems that capture leads.",
  },
  {
    icon: Zap,
    desc: "Automation that saves time.",
  },
];

export default function PricingGrid({ variant = "navy" }) {
  const isCream = variant === "cream";

  const sectionLabelClass = `inline-block text-xs uppercase tracking-[0.3em] mb-4 border rounded-full px-4 py-1.5`;
  const sectionLabelStyle = {
    color: isCream ? "#C9A227" : "#D4AF37",
    borderColor: isCream ? "rgba(201,162,39,0.3)" : "rgba(212,175,55,0.3)",
  };

  const headingStyle = { color: isCream ? "#0B1C2C" : "#F5EFE6" };

  // Taglines — slightly brighter than before
  const taglineStyle = { color: "#A8B8C8" };

  // Body notes — clearly visible
  const bodyNoteStyle = { color: isCream ? "#1a2c3c" : "#D6CBBA" };

  const dividerStyle = {
    borderColor: isCream ? "rgba(201,162,39,0.2)" : "rgba(212,175,55,0.15)",
  };

  // Dark lifted block — navy-800 on navy-900
  const darkBlockStyle = {
    background: isCream ? "#0B1C2C" : "#0E2238",
    border: `1px solid ${isCream ? "rgba(201,162,39,0.25)" : "rgba(212,175,55,0.2)"}`,
    borderRadius: "1rem",
    padding: "2rem",
  };

  // Inner nested block inside dark block
  const innerBlockStyle = {
    background: isCream ? "rgba(255,255,255,0.08)" : "rgba(19,43,71,0.7)",
    border: `1px solid rgba(212,175,55,0.12)`,
    borderRadius: "0.75rem",
    padding: "1.25rem",
  };

  return (
    <div className="max-w-5xl mx-auto space-y-14">
      {/* MICRO */}
      <div id="micro" className="text-center pt-28 pb-14 relative">
        <div className="max-w-5xl mb-16">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Micro — Starter Visibility System
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
            A <span className="text-gold-gradient">low-commitment </span>
            <span style={{ color: "#F5EFE6" }}>
              entry point before building a real system.{" "}
            </span>
          </h2>
          {/* Price — fully visible */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            This is NOT a growth system. It’s a basic visibility layer to stay
            active online. Ideal for businesses that just need to appear
            consistent online.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {microPlan.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>
      </div>

      {/* TRANSITION CALLOUT */}
      <div className="full-bleed-divider" />
      <div className="text-center py-10 bg-navy-900/40">
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
          Micro is a start. <br /> Real growth starts
          <span className="text-gold-gradient"> below.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {OUTGROW.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.desc}
                className="flex gap-3 items-center cream-card rounded-2xl p-5 text-left"
              >
                <div className="w-8 h-8 rounded-sm bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <Icon
                    className="h-5 w-5"
                    style={{ color: "#0B1C2C" }}
                    strokeWidth={2.2}
                  />
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5a6a7a" }}
                >
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BUILD */}
      <div className="full-bleed-divider" />
      <div id="build" className="flex flex-col gap-10 py-10">
        <div className="max-w-5xl mx-auto text-center mb-4">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Build — Web Systems
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
            <span style={{ color: "#F5EFE6" }}>Websites that convert — </span>{" "}
            <br />
            <span className="text-gold-gradient">not just impress.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            One-time project fee. Most businesses upgrade here when they want
            real structure and conversions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 lg:gap-14 ">
          {buildPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>

        <p className="mt-6">
          <Link
            href="/contact"
            className="text-xs md:text-sm font-mono uppercase tracking-wider text-gold-500/70 hover:text-gold-500 transition-colors"
            // style={{ color: "#D4AF37" }}
          >
            E-commerce, full stack applications, mobile apps or advanced
            systems? — Let's talk
          </Link>
        </p>
      </div>

      <div className="full-bleed-divider" />

      {/* AUTOMATE */}
      <div className="py-12">
        <div className="text-center max-w-5xl mx-auto mb-14">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Automate — Business Systems
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
            <span style={{ color: "#F5EFE6" }}>Systems that </span>
            <span className="text-gold-gradient">save time.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            One-time setup fee. Often combined with Web Systems for full
            operational setup.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 lg:gap-14 ">
          {automatePlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>
        <p className="mt-14">
          <Link
            href="/contact"
            className="text-xs md:text-sm font-mono uppercase tracking-wider text-gold-500/70 hover:text-gold-500 transition-colors"
            // style={{ color: "#D4AF37" }}
          >
            Payslip/invoice generation, appointment booking, notifications,
            form-to-CRM, report generation, advanced AI, or chatbots? — Let's
            talk
          </Link>
        </p>
      </div>

      <div className="full-bleed-divider" />

      {/* GROW */}
      <div className="py-12">
        <div className="text-center max-w-5xl mx-auto mb-14">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Grow — Content Systems
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
            <span style={{ color: "#F5EFE6" }}>Content that </span>
            <span className="text-gold-gradient">compounds.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Monthly retainer. Best used after Web + Automation systems are in
            place.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-14 lg:gap-14 ">
          {growPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>
        <p className="mt-14">
          <Link
            href="/contact"
            className="text-xs md:text-sm font-mono uppercase tracking-wider text-gold-500/70 hover:text-gold-500 transition-colors"
            // style={{ color: "#D4AF37" }}
          >
            Multi-platform or advanced content strategy — Let's talk
          </Link>
        </p>
      </div>

      <div className="full-bleed-divider" />

      {/* WHERE TO START — free section */}
      <div className="py-12">
        <div className="text-center max-w-5xl mx-auto mb-14">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Not sure where to start?
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-4">
            <span style={{ color: "#F5EFE6" }}>Most businesses fall into </span>
            <span className="text-gold-gradient">one of these.</span>
          </h2>
        </div>

        {/* Combined box — where to start list + final CTA */}

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              label: "Just want visibility",
              cta: "Start with Micro",
              icon: Eye,
            },
            {
              label: "Want to grow online",
              cta: "Start with Grow",
              icon: TrendingUp,
            },
            {
              label: "Want real structure",
              cta: "Start with Web System",
              icon: Layout,
            },
            {
              label: "Want full setup",
              cta: "Web + Automation",
              icon: Zap,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cream-card rounded-2xl py-8 pl-8 text-left hover:opacity-90 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 shadow-lg shadow-gold-500/30">
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "#0B1C2C" }}
                    strokeWidth={2.2}
                  />
                </div>
                <h3
                  className="font-display text-xl font-semibold mb-2"
                  style={{ color: "#0B1C2C" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5a6a7a" }}
                >
                  {item.cta}
                </p>
              </a>
            );
          })}
        </div>
      </div>
      <div className="full-bleed-divider" />

      <div className="flex flex-col gap-3 py-10">
        <p
          className="text-base text-center md:text-lg leading-relaxed"
          style={{ color: "#C8BFAD" }}
        >
          Still unsure? I'll tell you exactly what to build first.
        </p>

        <div className="container">
          <div className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-16 text-center">
            <div className="absolute inset-0 animated-gradient-bg opacity-60" />
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/20 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Let's build your{" "}
                <span className="text-gold-gradient">system.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                No guessing. No confusion. I'll look at your current setup and
                tell you what's missing, what to fix first, and what will
                actually grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 h-14 text-base gold-border-glow"
                  >
                    Book a Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
