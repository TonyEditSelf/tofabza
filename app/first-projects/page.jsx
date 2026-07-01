import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "First Call: We talk about the problem, not the solution.",
    body: "I ask where your business actually slows down and what's costing you the most time.",
  },
  {
    number: "02",
    title: "Second Call: I map the solution.",
    body: "A plain-language breakdown of what to build, what to connect, and in what order. No technical brief required. If it's not something I can fix, I'll tell you in this call — before you spend any money.",
  },
  {
    number: "03",
    title: "I build it.",
    body: "You review at key checkpoints. I handle the integration, testing, and deployment. The build is finished when it's running.",
  },
  {
    number: "04",
    title: "It runs. I refine it.",
    body: "One refinement cycle is included after launch, based on real usage data — not guesswork.",
  },
];

const WHAT_YOU_GET = [
  "Direct access to me throughout — no account manager, no delays",
  "A full custom build scoped to your specific bottleneck",
  "Complete documentation and a full handover — you own what gets built",
  "One refinement cycle after launch, based on real usage data",
];

const TYPICAL_PROBLEMS = [
  "New enquiries slipping through the cracks",
  "Leads waiting too long for a response",
  "Follow-ups relying on memory/sticky notes",
  "Information spread across multiple systems",
  "Staff copying information between tools",
  "Reports built by hand every week",
  "Questions customers shouldn't need to ask",
  "Records falling out of sync",
  "Important information arriving too late",
];

const PRICING_TIERS = [
  {
    label: "Workflow Automation",
    example: "Notifications, approvals, task routing",
    range: "From ₹25k",
  },
  {
    label: "Integrated Business Systems",
    example: "Customer journeys, internal workflows, business operations",
    range: "From ₹70k",
  },
  {
    label: "AI Automation Systems",
    example: "AI assistants, document processing, intelligent workflows",
    range: "From ₹1L",
  },
];

const WHAT_I_NEED = [
  "A real operational bottleneck that's costing time, money, or customer experience",
  "Willingness to deploy and actually use what gets built",
  "Honest, specific feedback once it's in use",
];

const WHO_ITS_FOR = [
  "You run a real business — not an idea you're still thinking about",
  "You want a system that solves a specific problem",
  "You're ready to deploy and use what gets built",
  "You can provide honest, specific feedback after launch",
  "You're open to the project becoming a future case study",
];

const FirstProjectsPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="container">
        {/* ── HERO ── */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            First Projects
          </div>

          <h1
            className="font-display text-4xl md:text-6xl leading-[1.1] font-bold mb-7"
            style={{ color: "var(--cream-text)" }}
          >
            Tofabza is taking on <br></br>
            <span className="text-brand-500">
              its first client engagements.
            </span>
          </h1>

          <p
            className="text-lg leading-relaxed mb-4 text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            The work in my portfolio was built without client briefs — real
            systems designed to solve real problems.
          </p>
          <p
            className="text-lg leading-relaxed text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            I'm now taking on a small number of client projects. The goal isn't
            to automate everything — it's to solve the one bottleneck that's
            holding your business back. If inefficient processes, manual work,
            or disconnected systems are slowing your business down, let's talk.
          </p>
        </div>
        <div className="section-divider mb-20" />

        {/* ── HOW IT WORKS ── */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            The Process
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ color: "var(--cream-text)" }}
          >
            No lengthy briefs. No back-and-forth. <br />{" "}
            <span className="text-brand-500">Here's how it goes.</span>
          </h2>

          <div
            className="grid md:grid-cols-4 gap-px mt-12"
            style={{ background: "rgba(245,239,230,0.08)" }}
          >
            {PROCESS_STEPS.map((s) => (
              <div key={s.number} className="bg-navy-900 p-8">
                <span
                  className="font-display text-5xl font-bold"
                  style={{ color: "rgba(198,93,42,0.35)" }}
                >
                  {s.number}
                </span>
                <h3
                  className="font-display text-lg font-bold mt-5 mb-3.5 leading-snug"
                  style={{ color: "var(--cream-text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "var(--muted-warm)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* ── WHAT YOU GET ── */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
                <span className="block w-6 h-px bg-brand-500" />
                What You Get
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ color: "var(--cream-text)" }}
              >
                A real system, <br />{" "}
                <span className="text-brand-500">
                  scoped to your exact bottleneck.
                </span>
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--muted-warm)" }}
              >
                Not a template. Not a generic setup. Every build is scoped to
                the bottleneck that's actually slowing your business down.
              </p>
            </div>

            <ul className="flex flex-col gap-4 md:pt-14">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 mt-0.5"
                    style={{ color: "var(--brand-500)" }}
                  />
                  <span
                    className="text-[16px] leading-relaxed"
                    style={{ color: "var(--muted-warm)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* ── TYPICAL PROBLEMS I SOLVE ── */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            Typical Problems I Solve
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ color: "var(--cream-text)" }}
          >
            If you recognize any of these, <br />
            <span className="text-brand-500">
              you're exactly who this is for.
            </span>
          </h2>
          <p
            className="leading-relaxed max-w-2xl"
            style={{ color: "var(--muted-warm)" }}
          >
            These are some of the common patterns that cost businesses more than
            they realize.
          </p>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-12"
            style={{ background: "rgba(245,239,230,0.08)" }}
          >
            {TYPICAL_PROBLEMS.map((problem, i) => (
              <div key={i} className="bg-navy-900 p-8">
                {/* <span className="block w-8 h-px bg-brand-500 mb-5" /> */}
                <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "var(--cream-text)" }}
                >
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* ── PRICING ── */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            Pricing
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ color: "var(--cream-text)" }}
          >
            Priced by the problem, <br />
            <span className="text-brand-500">not the hours.</span>
          </h2>
          <p
            className="leading-relaxed max-w-2xl mb-12"
            style={{ color: "var(--muted-warm)" }}
          >
            No hourly billing. No pricing based on the technology behind the
            build. Projects are priced according to the business problem being
            solved.
          </p>

          <div className="max-w-2xl">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={tier.label}
                className="grid grid-cols-1 sm:grid-cols-[1fr_220px] items-center gap-3 sm:gap-8 py-7"
                style={{
                  borderBottom:
                    i !== PRICING_TIERS.length - 1
                      ? "1px solid rgba(245,239,230,0.08)"
                      : "none",
                }}
              >
                <div>
                  <h3
                    className="font-display text-xl font-bold mb-1.5"
                    style={{ color: "var(--cream-text)" }}
                  >
                    {tier.label}
                  </h3>

                  <p
                    className="text-[16px]"
                    style={{ color: "var(--muted-warm)" }}
                  >
                    {tier.example}
                  </p>
                </div>

                <div className="whitespace-nowrap text-left">
                  <span
                    className="font-display text-[18px] font-bold"
                    style={{ color: "var(--brand-500)" }}
                  >
                    {tier.range}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[14px] mt-8 max-w-4xl text-justify text-foreground/60">
            Websites and custom software are usually part of an automation
            build, not a separate one — priced within the relevant tier above.
          </p>

          <p
            className="text-[16px] mt-8 max-w-4xl text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            Exact pricing is determined after the second call, once the scope is
            fully defined. International projects are quoted separately — reach
            out directly. If the scope changes during the project, we'll discuss
            it before any additional work begins. Projects are quoted as
            fixed-price engagements, so you'll know the total cost before
            implementation begins. <br />
          </p>
          <p
            className="text-[16px] pl-3 mt-6 border-l border-brand-400 max-w-4xl text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            Not every project needs to start big. <br /> Solving one high-impact
            bottleneck is often the best first step.
          </p>
          <br />
          <p
            className="text-[16px] leading-relaxed max-w-4xl text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            Every project includes planning, implementation, complete
            documentation, a full handover, and one post-launch refinement based
            on real-world usage.
          </p>
          <div className="pl-6 relative mt-12 max-w-4xl">
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ background: "var(--brand-500)" }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-2">
              Project Guarantee
            </p>
            <p
              className="text-[16px] font-medium leading-relaxed max-w-4xl text-justify"
              style={{ color: "var(--cream-text)" }}
            >
              If the agreed workflow doesn't perform as specified at handover,
              I'll fix it at no extra cost. This is in addition to the included
              post-launch refinement.
            </p>
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* ── WHAT I NEED FROM YOU ── */}
        <div className="mb-24">
          <div className="grid md:grid-cols-[380px_1fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
                <span className="block w-6 h-px bg-brand-500" />
                What I Need From You
              </div>
              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight"
                style={{ color: "var(--cream-text)" }}
              >
                Three things. <br />{" "}
                <span className="text-brand-500">Nothing more.</span>
              </h2>
            </div>

            <div>
              <ul className="flex flex-col gap-4 mt-3 mb-8">
                {WHAT_I_NEED.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: "var(--brand-500)" }}
                    />
                    <span
                      className="text-[16px] leading-relaxed"
                      style={{ color: "var(--muted-warm)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pl-6 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ background: "var(--brand-500)" }}
                />
                {/* <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "var(--cream-text)" }}
                >
                  This isn't a discounted service. It's a deliberately small
                  first cohort — every project scoped smaller, not priced lower,
                  so it gets the full weight of my attention from first call to
                  final refinement.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* ── WHO THIS IS FOR ── */}
        <div className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            Before we work together
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold leading-tight "
            style={{ color: "var(--cream-text)" }}
          >
            Let's make sure{" "}
            <span className="text-brand-500">we're a good fit</span>
          </h2>
          <p className="mb-10" style={{ color: "var(--muted-warm)" }}>
            <i>If these sound like you, we'll probably work well together.</i>
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 mt-0.5"
                  style={{ color: "var(--brand-500)" }}
                />
                <span
                  className="text-[16px] leading-relaxed"
                  style={{ color: "var(--muted-warm)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider mb-20" />

        {/* ── FINAL CTA ── */}
        <section className="pt-10 pb-10">
          <div
            className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-10 md:p-14"
            style={{
              background: "rgba(11,28,44,0.6)",
              border: "1px solid rgba(198,93,42,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 0 1px rgba(198,93,42,0.1), 0 8px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[2rem] opacity-50"
              // style={{
              //   background:
              //     "radial-gradient(ellipse at 60% 0%, rgba(198,93,42,0.25) 0%, transparent 70%)",
              // }}
            />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-500 mb-6 text-center ">
                Let's Build
              </p>
              <h2
                className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-center "
                style={{ color: "var(--cream-text)" }}
              >
                Tell me what's broken.
              </h2>
              <p
                className="text-lg mb-10 leading-relaxed mx-auto max-w-2xl sm:text-justify md:text-center"
                style={{ color: "var(--muted-warm)" }}
              >
                We'll start with a discovery call. I'll then work on it and come
                back on a second call with a straight answer — whether it's
                fixable, and how I'd approach it. No pitch. No pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
                <Link href="/contact" className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-brand-500 hover:bg-brand-600 text-navy-900 font-semibold h-14 text-base"
                  >
                    Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/builds" className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-brand-500/30 text-foreground hover:bg-brand-500/10 hover:text-brand-500 font-semibold h-14 text-base"
                  >
                    View past builds
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstProjectsPage;
