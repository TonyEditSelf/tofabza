import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] uppercase text-brand-500">
      <span className="block w-6 h-px bg-brand-500" />
      {children}
    </div>
  );
}

function ThreadRule({ className = "" }) {
  return (
    <div
      className={`absolute left-0 top-0 bottom-0 w-[2px] bg-brand-500/40 ${className}`}
      aria-hidden="true"
    />
  );
}

function PrimaryButton({ children, href = "#contact" }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gradient px-7 font-semibold text-navy-900 transition-opacity hover:opacity-90 brand-border-glow"
    >
      {children}
      <ArrowRight
        size={17}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}

function SecondaryButton({ children, href = "#work", dark = false }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-lg px-7
  font-semibold text-cream-text border border-cream-text/20 bg-cream-text/[0.03] transition-all duration-300 hover:bg-cream-text/[0.06] hover:border-cream-text/40"
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────── HERO ─────────────────────────────── */

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container mx-auto max-w-7xl pt-36 pb-32 md:pt-40 md:pb-40">
        <div className="max-w-6xl">
          <Eyebrow>Operational Engineering for Growing Businesses.</Eyebrow>

          <h1 className="font-display font-bold text-[2.6rem] leading-[1.08] md:text-[4.2rem] md:leading-[1.04] tracking-tight text-cream-text mt-8">
            Your business <br />
            <span className="text-brand-500">
              should become easier to run <br />
            </span>
            as it grows.
          </h1>

          <p className="text-[17px] md:text-[18px] leading-relaxed text-muted-warm text-justify mt-8 max-w-4xl">
            At some point, most businesses aren’t held back by opportunity —
            they’re held back by how they operate. More customers, more
            conversations, and more tools shouldn’t lead to more manual work
            holding it all together.
            <br />
            <br />
            Tofabza studies how your business actually works, identifies and
            removes operational friction, then engineers the automation, AI
            systems and software that let you scale without the chaos.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <PrimaryButton href="/contact">Book a Call</PrimaryButton>
            <SecondaryButton href="/automatedworkflow">
              View Work
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "rgba(198,93,42,0.15)" }}
        aria-hidden="true"
      />
    </section>
  );
}

/* ─────────────────────────────── DIAGNOSIS ─────────────────────────────── */

function Diagnosis() {
  const items = [
    "One spreadsheet that became permanent.",
    "One person who became the only one who knows how something works.",
    "One process that made sense at ten customers and quietly broke at a hundred.",
  ];

  return (
    <section className="relative py-24 md:py-32 border-t border-cream-text/[0.06]">
      <div className="container mx-auto max-w-7xl">
        {/* Two-column content */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-14">
          <div className="md:col-span-5">
            <Eyebrow>The Diagnosis</Eyebrow>

            <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-tight text-cream-text mt-6">
              Nobody set out to build a complicated business. <br />
              <span className="text-brand-500">It just ended up that way.</span>
            </h2>
          </div>

          <div className="md:col-span-7 md:pt-2">
            <p className="text-[16.5px] font-bold leading-relaxed text-muted-warm mb-8">
              It happened gradually:
            </p>

            <ul className="space-y-5 mb-10">
              {items.map((text, i) => (
                <li key={i} className="relative pl-6">
                  <ThreadRule className="h-full" />
                  <span className="text-[16px] leading-relaxed text-cream-text/90">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[16.5px] leading-relaxed text-muted-warm">
              The business ends up depending on people remembering things,
              manual effort filling gaps that shouldn&rsquo;t exist, and the
              owner being the answer to everything.
            </p>
          </div>
        </div>

        {/* Closing statement — pulled out as a typographic moment */}
        <div className="pt-1">
          <p className="text-[0.55rem] font-extralight md:text-[1.1rem] leading-[1.2] text-cream-text max-w-6xl">
            That&rsquo;s not a people problem. It&rsquo;s an operational design
            problem.{" "}
            <span className="text-brand-500 font-bold">
              And it&rsquo;s fixable.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── REFRAME ─────────────────────────────── */

function Reframe() {
  return (
    <section className="cream-section py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <Eyebrow>The Approach</Eyebrow>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.75rem] leading-[1.12] tracking-tight mt-6">
            Technology <br />{" "}
            <span className="text-brand-500">
              isn&rsquo;t usually the first answer.
            </span>
          </h2>

          <div className="mt-8 space-y-5">
            <p
              className="text-[17px] leading-relaxed text-justify"
              style={{ color: "var(--muted-text)" }}
            >
              Most businesses don&rsquo;t need more software. They need the
              software they already have to actually work together — with
              processes behind it that hold up at scale.
            </p>
            <p
              className="text-[17px] leading-relaxed text-justify"
              style={{ color: "var(--muted-text)" }}
            >
              That&rsquo;s where every Tofabza project starts. Not with a tool
              recommendation, but with questions:
            </p>

            <ul className="mt-4 space-y-3 pl-9">
              <li className="flex items-center gap-3">
                <span className="text-navy-900 text-4xl leading-none">•</span>
                <span style={{ color: "var(--muted-text)" }}>
                  Where does the work slow down?
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-navy-900 text-4xl leading-none">•</span>
                <span style={{ color: "var(--muted-text)" }}>
                  Where does it get dropped?
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-navy-900 text-4xl leading-none">•</span>
                <span style={{ color: "var(--muted-text)" }}>
                  What&rsquo;s being done manually that shouldn&rsquo;t be?
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-navy-900 text-4xl leading-none">•</span>
                <span style={{ color: "var(--muted-text)" }}>
                  What steps keep repeating across different people and
                  software?
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-navy-900 text-4xl leading-none">•</span>
                <span style={{ color: "var(--muted-text)" }}>
                  What&rsquo;s only running because one person is holding it
                  together?
                </span>
              </li>
            </ul>

            <p
              className="text-[17px] leading-relaxed"
              style={{ color: "var(--muted-text)" }}
            >
              Only after that do we decide what to build — automation, custom
              software, an AI system, or a website. Sometimes all four.
            </p>
          </div>

          {/* Thread-rule pull quote — larger than before */}
          <div className="mt-12 pl-7 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-500" />
            <p className="font-display font-semibold text-[1.35rem] md:text-[1.65rem] leading-snug text-navy-900">
              The technology is never the point. A business that's easier to run
              is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── WHAT WE BUILD ─────────────────────────────── */

function WhatWeBuild() {
  const services = [
    {
      num: "01",
      title: "Automation Systems",
      desc: "The repetitive work eating your team's time — follow-ups, document processing, CRM updates, client communication — built into systems that run without anyone managing them.",
      note: "If it happens on a screen and follows a pattern, it can be automated.",
      accent: true,
    },
    {
      num: "02",
      title: "AI Systems",
      desc: "AI that does actual work — answering customer questions, processing documents, qualifying leads, handling conversations. Built on prompt architecture, RAG pipelines, and AI workflow design. Integrated into how your business operates, not bolted on top of it.",
    },
    {
      num: "03",
      title: "Custom Software & Applications",
      desc: "When off-the-shelf tools don't fit how your business actually works. Custom web applications, internal tools, dashboards, admin panels, client portals — built from scratch, no templates, no lock-in.",
    },
    {
      num: "04",
      title: "Websites & Customer-Facing Builds",
      desc: "Built to earn trust fast and turn visitors into enquiries — and connected to the systems running behind your business.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-cream-text/[0.06]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14">
          <Eyebrow>What We Build</Eyebrow>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-tight text-cream-text mt-6 max-w-5xl">
            The solution depends on the problem. <br />{" "}
            <span className="text-brand-500">
              Here's what we typically build.
            </span>
          </h2>
          <p className="text-[15px] text-muted-warm mt-4">
            Everything we build serves one goal: a business that's easier to
            run.
          </p>
        </div>

        {/* Horizontal row list — not a card grid */}
        <div>
          {services.map((s) => (
            <div
              key={s.num}
              className="relative grid md:grid-cols-12 gap-4 md:gap-10 py-10 border-t border-cream-text/[0.08] "
            >
              {/* Sienna top accent on primary service only */}
              {s.accent && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-500" />
              )}

              <div className="md:col-span-1 pt-0.5">
                <span className="font-display text-[30px] tracking-[0.18em] text-brand-500 font-semibold">
                  {s.num}
                </span>
              </div>

              <div className="md:col-span-10 max-w-4xl text-justify">
                <h3 className="font-display font-bold text-[20px] text-cream-text mb-3">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-warm">
                  {s.desc}
                </p>
                {s.note && (
                  <p className="text-[13px] leading-relaxed font-medium mt-3">
                    {s.note}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-cream-text/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── WORK ─────────────────────────────── */

function Work() {
  const builds = [
    {
      tag: "Hospitality · Automation",
      title: "Never Miss a Booking Enquiry",
      observation:
        "Guests don't stop booking because hotels close. They stop booking because nobody answered.",
      result:
        "A WhatsApp AI that handles guest enquiries at 3am — room rates, availability, check-in details — pulling live data from the actual booking system. No staff required.",
      stack: "n8n · WhatsApp API · Gemini · MySQL",
    },
    {
      tag: "Healthcare · Automation",
      title: "Medical Records Digitisation",
      observation:
        "If information already exists on paper, nobody should be typing it again.",
      result:
        "Scanned documents processed through an OCR pipeline, patient fields extracted automatically, structured data written straight into Sheets. No manual entry.",
      stack: "n8n · Mistral OCR · Google Sheets",
    },
    {
      tag: "Full-Stack · Build",
      title: "Ecommerce Store",
      observation:
        "Most small business stores are built on rigid templates that fight you the moment your needs don't fit the mould.",
      result:
        "A full-stack electronics store built from scratch — live payments, real admin panel, product management, order tracking. No Shopify. Complete control.",
      stack: "Next.js · Supabase · Razorpay",
    },
    {
      tag: "Product · Live",
      title: "Cosira",
      observation:
        "Designers waste hours switching between scattered colour tools with no perceptual accuracy.",
      result:
        "A suite of 11 precision colour instruments built on OKLCH. Palette generation, gradients, contrast checking, export to CSS, Tailwind, JSON.",
      stack: "Next.js · OKLCH Engine",
    },
  ];

  return (
    <section id="work" className="cream-section py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14">
          <Eyebrow>Selected Builds</Eyebrow>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-tight mt-6">
            Every build starts <br />{" "}
            <span className="text-brand-500">with an observation.</span>
          </h2>
          <p
            className="text-[16px] mt-4"
            style={{ color: "var(--muted-text)" }}
          >
            These are the problems that deserved a better answer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {builds.map((b) => (
            <div key={b.title} className="cream-card rounded-lg p-8 md:p-9">
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-brand-600">
                {b.tag}
              </span>
              <h3 className="font-display font-bold text-[21px] text-navy-900 mt-3 mb-4">
                {b.title}
              </h3>
              <p
                className="text-[15px] leading-relaxed italic mb-4 pl-4 border-l-2"
                style={{
                  borderColor: "var(--brand-500)",
                  color: "var(--navy-900)",
                }}
              >
                &ldquo;{b.observation}&rdquo;
              </p>
              <p
                className="text-[14.5px] leading-relaxed mb-5"
                style={{ color: "var(--muted-text)" }}
              >
                {b.result}
              </p>
              <p
                className="text-[12.5px] tracking-wide"
                style={{ color: "var(--muted-warm)" }}
              >
                {b.stack}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/automatedworkflow"
            className="inline-flex items-center gap-2 font-semibold text-[15px] text-brand-600 hover:text-brand-500 transition-colors"
          >
            See all builds
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PROCESS ─────────────────────────────── */

function Process() {
  const steps = [
    {
      n: "01",
      title: "First Call: We talk about the problem, not the solution.",
      desc: "I ask where your business actually slows down and what's costing you the most time.",
    },
    {
      n: "02",
      title: "Second Call: I map the solution.",
      desc: "A plain-language breakdown of what to build, what to connect, and in what order. No technical brief required. If it's not something I can fix, I'll tell you in this call — not after.",
    },
    {
      n: "03",
      title: "Design. Build. Deploy.",
      desc: "You review at key checkpoints. I handle the integration, testing, and deployment. The build is finished when it's running.",
    },
    {
      n: "04",
      title: "It runs. I refine it.",
      desc: "One refinement cycle is included after launch, based on real usage data — not guesswork.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-cream-text/[0.06]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14">
          <Eyebrow>The Process</Eyebrow>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] leading-[1.15] tracking-tight text-cream-text mt-6 max-w-4xl">
            No lengthy briefs. No back-and-forth. <br />{" "}
            <span className="text-brand-500">Here&rsquo;s how it goes.</span>
          </h2>
        </div>

        {/* Large decorative numbers + divide-x — more considered than gap-px fill */}
        <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream-text/[0.08]">
          {steps.map((s) => (
            <div
              key={s.n}
              className="px-0 md:px-8 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              <span
                className="font-display font-bold text-[3.5rem] leading-none select-none"
                style={{ color: "rgba(198,93,42,0.55)" }}
              >
                {s.n}
              </span>
              <h3 className="font-display font-bold text-[16.5px] text-cream-text mt-5 mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted-warm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── ABOUT ─────────────────────────────── */

function About() {
  return (
    <section id="about" className="cream-section py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <Eyebrow>About</Eyebrow>
            <h2 className="font-display font-bold text-[2rem] leading-[1.18] tracking-tight mt-6">
              Founder-led. <br />{" "}
              <span className="text-brand-500">
                Here&rsquo;s what it means for your project.
              </span>
            </h2>
          </div>

          <div className="md:col-span-8 md:pt-2">
            <div className="space-y-5 pr-12 mb-10">
              <p
                className="text-[16.5px] leading-relaxed text-justify"
                style={{ color: "var(--muted-text)" }}
              >
                Before Tofabza, I built software, automation systems, and AI
                tools — not for clients, but for problems I was actually living
                with.
              </p>

              <p
                className="text-[16.5px] leading-relaxed text-justify"
                style={{ color: "var(--muted-text)" }}
              >
                Hours spent on tasks that happened the same way every time.
                Information copied from one system and pasted into another,
                every single day. Reports built manually every week from the
                same sources. Updates done by hand because nothing was
                connected. Messages that needed a reply sitting unread because
                the day moved on.
              </p>

              <p
                className="text-[16.5px] leading-relaxed text-justify"
                style={{ color: "var(--muted-text)" }}
              >
                The hardest problems were never technical. They were
                operational. Software that didn’t fit. Processes that made sense
                early and quietly broke later.
              </p>
              <p
                className="text-[16.5px] leading-relaxed font-semibold"
                style={{ color: "var(--navy-900)" }}
              >
                That&rsquo;s the problem Tofabza exists to fix.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Image
                  src="/images/tony.png"
                  alt="Tony Eappen"
                  width={102}
                  height={102}
                  className="rounded-full object-cover border border-brand-500/20"
                  priority
                />

                <div className="flex items-center gap-3">
                  <span className="block w-8 h-px bg-brand-500 shrink-0" />
                  <p
                    className="font-sans font-light text-[12px]"
                    style={{ color: "var(--navy-900)" }}
                  >
                    Tony Eappen, Founder
                  </p>
                </div>
              </div>
            </div>

            {/* Attributes — mini sienna dash as accent instead of just bold */}
            <div
              className="grid sm:grid-cols-2 gap-8 pt-8 border-t"
              style={{ borderColor: "rgba(11,28,44,0.1)" }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="block w-4 h-px bg-brand-500 shrink-0" />
                  <h4 className="font-display font-bold text-[15px]">
                    No handoffs
                  </h4>
                </div>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "var(--muted-text)" }}
                >
                  The person you speak to on the first call is the person who
                  designs and builds your system.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="block w-4 h-px bg-brand-500 shrink-0" />
                  <h4 className="font-display font-bold text-[15px]">
                    Deliberately small
                  </h4>
                </div>
                <p
                  className="text-[14px] leading-relaxed pr-8"
                  style={{ color: "var(--muted-text)" }}
                >
                  A small number of projects at a time, so every one gets full
                  attention from first call to final refinement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FINAL CTA ─────────────────────────────── */

function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:pt-32 md:pb-10">
      <div className="container mx-auto max-w-7xl">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-10 text-center md:p-14"
          style={{
            background: "rgba(11,28,44,0.6)",
            border: "1px solid rgba(198,93,42,0.25)",
            backdropFilter: "blur(12px)",
            boxShadow:
              "0 0 0 1px rgba(198,93,42,0.1), 0 8px 40px rgba(0,0,0,0.3)",
          }}
        >
          <div className="absolute inset-0 rounded-[2rem] opacity-30" />
          <div className="relative z-10">
            <Eyebrow>Start Here</Eyebrow>
            <h2
              className="font-display font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-tight mt-6 mb-5"
              style={{ color: "var(--cream-text)" }}
            >
              If any of this sounds like your business, <br />{" "}
              <span className="text-brand-500">
                let’s figure out where the friction is.
              </span>
            </h2>
            <p
              className="text-[16.5px] leading-relaxed mx-auto max-w-xl mb-10"
              style={{ color: "var(--muted-warm)" }}
            >
              30 minutes. No pitch, no pressure — just a conversation about
              where your business slows down. If it's fixable, I'll come back
              with a plan on the next call.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Book a call</PrimaryButton>
              <SecondaryButton href="/blog">Tofabza blog</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

export default function TofabzaHomepage() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Diagnosis />
      <Reframe />
      <WhatWeBuild />
      <Work />
      <Process />
      <About />
      <FinalCTA />
    </div>
  );
}
