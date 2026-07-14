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
    range: "From ₹20k",
  },
  {
    label: "Integrated Business Systems",
    example: "Customer journeys, internal workflows, business operations",
    range: "From ₹60k",
  },
  {
    label: "AI Automation Systems",
    example: "AI assistants, document processing, intelligent workflows",
    range: "From ₹90k",
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

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Do I need to know exactly what I want built?",
    answer:
      "No. You only need to explain the business problem. Figuring out the right solution is part of the process.",
  },
  {
    question: "Can you work with the software we already use?",
    answer:
      "Usually, yes. Wherever possible, I integrate with your existing tools instead of asking you to replace them.",
  },
  {
    question: "How long do projects usually take?",
    answer:
      "It depends on the scope. Smaller automation projects can take a couple of weeks, while larger systems naturally take longer. You'll receive a realistic timeline before any work begins.",
  },
  {
    question: "Do I own what gets built?",
    answer:
      "Yes. Every project includes complete documentation and a full handover. The finished system belongs to your business.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes one post-launch refinement based on real usage. If you need additional improvements after that, we can discuss a separate engagement.",
  },
  {
    question: "Can we start with a smaller project?",
    answer:
      "Absolutely. Many clients begin by solving one well-defined business problem before expanding into larger systems later.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. International projects are welcome and are quoted separately based on scope.",
  },
  {
    question: "What if you're not the right fit for my project?",
    answer:
      "I'll tell you before you spend any money. If I don't believe I'm the right person to solve your problem, I'll be upfront about it.",
  },
];

const FirstProjectsPage = () => {
  return (
    <div className="pt-40 min-h-screen">
      <div className="container">
        {/* ── HERO ── */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            Work With Me
          </div>

          <h1
            className="font-display text-4xl md:text-6xl leading-[1.1] font-bold mb-7"
            style={{ color: "var(--cream-text)" }}
          >
            Let's build something that <br></br>
            <span className="text-brand-500">
              actually solves your problem.
            </span>
          </h1>

          <p
            className="text-lg leading-relaxed mb-4 text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            I take on a small number of projects at a time so every build gets
            direct attention from first call to final handover.
          </p>
          <p
            className="text-lg leading-relaxed text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            If you're looking for someone to design, build, and integrate a
            system around a specific business problem, this page explains
            exactly how we'll work together.
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
                What every project <br />{" "}
                <span className="text-brand-500">includes.</span>
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "var(--muted-warm)" }}
              >
                Every project is planned around an agreed scope, with everything
                built specifically for your business.
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
            Typical Projects
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ color: "var(--cream-text)" }}
          >
            Examples of the kinds of operational problems{" "}
            <span className="text-brand-500">clients usually bring to me.</span>
          </h2>

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
            Fixed-price projects. <br />
            <span className="text-brand-500">Clear scope. Clear pricing.</span>
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
            Not every project needs to be large. <br /> Many clients start with
            one well-defined system and expand later if needed.
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
            Let's make sure <br />
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
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider mb-24" />

        {/* FAQ */}
        <section className="pt-5 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
                <span className="block w-6 h-px bg-brand-500" />
                Frequently Asked Questions
              </div>

              <h2
                className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4"
                style={{ color: "var(--cream-text)" }}
              >
                A few things
                <br />
                <span className="text-brand-500">people usually ask.</span>
              </h2>

              <p
                className="max-w-4xl leading-relaxed"
                style={{ color: "var(--muted-warm)" }}
              >
                Everything else is easier to discuss on the first call, but
                these are the questions that come up most often.
              </p>
            </div>

            <div className="border-t border-white/10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="py-10 border-b border-white/10 grid md:grid-cols-[320px_1fr] gap-8"
                >
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: "var(--cream-text)" }}
                  >
                    {faq.question}
                  </h3>

                  <p
                    className="leading-8 max-w-3xl"
                    style={{ color: "var(--muted-warm)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                Let's discuss your project.
              </h2>
              <p
                className="text-lg mb-10 leading-relaxed mx-auto max-w-2xl sm:text-justify md:text-center"
                style={{ color: "var(--muted-warm)" }}
              >
                We'll start with a discovery call. On the second call, I'll show
                you exactly what I'd build, how I'd approach it, and what it'll
                cost. If I'm not the right fit, I'll tell you before you spend
                anything.
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
                <Link href="/automatedworkflow" className="w-full">
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
