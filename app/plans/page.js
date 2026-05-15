import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLOTS_REMAINING = 5;

const REQUIREMENTS = [
  {
    number: "01",
    title: "Full implementation",
    body: "You actually deploy the system. Not just review it — run it. We track its real impact on your business so the results mean something.",
  },
  {
    number: "02",
    title: "Unfiltered feedback",
    body: "You tell me what's working and what isn't. Direct, honest, no sugarcoating. This is how I sharpen the system across every engagement.",
  },
  {
    number: "03",
    title: "A detailed case study",
    body: "If the system delivers what we planned, you let me document and share those results. Your growth becomes proof that this works.",
  },
];

const WHAT_YOU_GET = [
  "A custom-built digital system — website, automation, or content — scoped to your exact bottleneck",
  "Direct access to me throughout the entire build, not a project manager or junior staff",
  "Full handover with documentation so you actually understand what was built",
  "24-hour response guarantee during the active build period",
  "One refinement cycle after launch based on real performance data",
];

const PlansPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="absolute top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        {/* ── HERO ── */}
        <div className="text-center max-w-4xl mx-auto mb-20  animate-fade-up">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            Founding Member Program
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-8">
            I'm not charging a <span className="text-gold-gradient">fee.</span>
            <br />
            I'm asking for{" "}
            <span className="text-gold-gradient">three things.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I'm opening{" "}
            <span className="text-gold-500 font-semibold">5 slots</span> to
            build one focused digital system — a website, an automation setup,
            or a content system — at no cost. Not because the work isn't worth
            it — because I want{" "}
            <span className="text-gold-500 font-semibold">
              proof that it works
            </span>{" "}
            across different businesses. You get real, focused work. I get a
            real case study.
          </p>
        </div>

        {/* ── SLOTS INDICATOR ── */}
        <div className="flex justify-center mb-24">
          <div className="glass-card rounded-2xl px-10 py-6 flex items-center gap-8 border border-gold-500/20">
            <div className="text-center">
              <p className="font-display text-5xl font-semibold text-gold-gradient">
                {SLOTS_REMAINING}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                Slots remaining
              </p>
            </div>
            <div className="w-px h-12 bg-gold-500/20" aria-hidden="true" />
            <div className="text-center">
              <p
                className="font-display text-5xl font-semibold"
                style={{ color: "#F5EFE6" }}
              >
                ₹0
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                Monetary fee
              </p>
            </div>
            <div className="w-px h-12 bg-gold-500/20" aria-hidden="true" />
            <div className="text-center">
              <p
                className="font-display text-5xl font-semibold"
                style={{ color: "#F5EFE6" }}
              >
                3
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                Things I require
              </p>
            </div>
          </div>
        </div>

        <div className="full-bleed-divider" />

        {/* ── THE EXCHANGE ── */}
        <div className="py-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
              The exchange
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              <span style={{ color: "#F5EFE6" }}>No invoice. </span>
              <span className="text-gold-gradient">Just a commitment.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
              This is not charity and it's not free work for its own sake. It's
              a structured exchange — you get the system, I get the evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REQUIREMENTS.map((r) => (
              <div
                key={r.number}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col gap-5 border border-gold-500/15 transition-all duration-500"
              >
                <span className="font-display text-5xl font-semibold text-gold-gradient leading-none">
                  {r.number}
                </span>
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ color: "#F5EFE6" }}
                >
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="full-bleed-divider" />

        {/* ── WHAT YOU GET ── */}
        <div className="py-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
                What you actually get
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
                <span style={{ color: "#F5EFE6" }}>A real system. </span>
                <span className="text-gold-gradient">
                  Built for your business.
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This isn't a template drop or a generic setup. I scope the
                system to your exact bottleneck — then I build, integrate, and
                hand it over with full documentation.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      border: "1px solid rgba(212,175,55,0.4)",
                    }}
                  >
                    <CheckCircle2
                      className="h-3 w-3"
                      style={{ color: "#D4AF37" }}
                    />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#D6CBBA" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="full-bleed-divider" />

        {/* ── WHO THIS IS FOR ── */}
        <div className="py-24 max-w-3xl mx-auto text-center">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            Who this is for
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-10">
            <span style={{ color: "#F5EFE6" }}>Not everyone. </span>
            <span className="text-gold-gradient">Deliberately.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "You run a real business — not an idea you're still thinking about",
              "You're willing to actually use what I build, not just review it",
              "You can give structured feedback, not just vague opinions",
              "You understand this is an exchange — your results are my proof",
              "You're open to documenting the outcome as a case study",
              "You want a system that solves a specific problem, not a rebrand",
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl px-5 py-4 flex items-start gap-3 border border-gold-500/10"
              >
                <span className="text-gold-500 font-semibold text-sm shrink-0 mt-0.5">
                  ✓
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "#C8BFAD" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="full-bleed-divider" />

        {/* ── AFTER THE 5 SLOTS ── */}
        <div className="py-24 max-w-3xl mx-auto text-center">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            After the 5 slots
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            <span style={{ color: "#F5EFE6" }}>The price goes up. </span>
            <span className="text-gold-gradient">That's the plan.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Once these 5 slots are filled and the case studies are documented,
            pricing steps up to reflect the value delivered. The founding member
            window closes permanently.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {[
              {
                label: "Slots 1–5",
                note: "Founding member rate",
                price: "₹0 + 3 commitments",
                active: true,
              },
              {
                label: "Slots 6–10",
                note: "scoped per project",
                price: "Reduced rate,",
                active: false,
              },
              {
                label: "Slots 11+",
                note: "Full rate",
                price: "Based on value delivered",
                active: false,
              },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl px-6 py-5 text-center border transition-all ${
                  tier.active
                    ? "glass-card-hover border-gold-500/40 gold-border-glow"
                    : "glass-card border-gold-500/10 opacity-60"
                }`}
                style={{ minWidth: "160px" }}
              >
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2"
                  style={{ color: tier.active ? "#D4AF37" : "#6a7a8a" }}
                >
                  {tier.label}
                </p>
                <p
                  className="font-display text-lg font-semibold mb-1"
                  style={{ color: tier.active ? "#F5EFE6" : "#8a9aaa" }}
                >
                  {tier.price}
                </p>
                <p
                  className="text-xs"
                  style={{ color: tier.active ? "#C8BFAD" : "#5a6a7a" }}
                >
                  {tier.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="full-bleed-divider" />

        {/* ── FINAL CTA ── */}
        <div className="py-20">
          <div className="container">
            <div className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-16 text-center">
              <div className="absolute inset-0 animated-gradient-bg opacity-60" />
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/20 blur-[120px]" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px]" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-6">
                  {SLOTS_REMAINING} slots remaining
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6">
                  <span style={{ color: "#F5EFE6" }}>Apply for a </span>
                  <span className="text-gold-gradient">founding slot.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                  Tell me what's broken. I'll tell you within 24 hours if I can
                  fix it — and how. No pitch. No pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 h-14 text-base gold-border-glow"
                    >
                      Apply now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/builds">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gold-500/30 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold px-8 h-14 text-base"
                    >
                      View past builds
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;

// import PricingGrid from "@/components/plans/PricingGrid";

// const PlansPage = () => {
//   return (
//     <div className="pt-40 min-h-screen">
//       <div className="absolute top-20 left-0 right-0 h-[540px] animated-gradient-bg opacity-40 -z-10" />

//       <div className="container">
//         <div className="text-center max-w-4xl mx-auto mb-28 animate-fade-up">
//           <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
//             Pricing
//           </div>
//           <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
//             Simple systems.{" "}
//             <span className="text-gold-gradient">Real outcomes.</span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
//             I'm in the case study phase — first 5 partners get an 80% discount
//             in exchange for honest feedback and a review. After that, pricing
//             steps up as slots fill.
//           </p>
//         </div>
//         <div className="full-bleed-divider" />
//         <PricingGrid variant="cream" />
//       </div>
//     </div>
//   );
// };

// export default PlansPage;
