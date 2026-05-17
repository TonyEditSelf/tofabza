// components/services/ServiceDescription.jsx
import {
  CheckCircle2,
  Package,
  Bot,
  Workflow,
  Database,
  FileText,
  BellRing,
  MessageSquare,
  Brain,
  TimerReset,
  Layout,
  PenTool,
  Target,
  Cog,
  Share2,
  Video,
} from "lucide-react";
import Image from "next/image";

const ICONS = {
  Bot,
  Workflow,
  Database,
  FileText,
  BellRing,
  MessageSquare,
  Brain,
  TimerReset,
  Layout,
  PenTool,
  Target,
  Cog,
  Share2,
  Video,
};

function SectionCard({ item, icon: iconName }) {
  const Icon = ICONS[iconName] || Workflow;
  return (
    <div className="cream-card rounded-2xl p-6 md:p-7 h-full border border-gold-500/10 shadow-[0_10px_30px_rgba(11,28,44,0.08)]">
      <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-500/20 mb-5">
        <Icon
          className="h-5 w-5"
          style={{ color: "#0B1C2C" }}
          strokeWidth={2.2}
        />
      </div>
      <h3
        className="font-display text-xl md:text-2xl font-semibold mb-3"
        style={{ color: "#0B1C2C" }}
      >
        {item.title}
      </h3>
      <p
        className="text-sm md:text-base leading-relaxed"
        style={{ color: "#1a2c3c" }}
      >
        {item.desc}
      </p>
    </div>
  );
}

function StackColumn({ title, items }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gold-500/15 bg-[linear-gradient(180deg,rgba(12,30,48,0.96),rgba(8,22,35,0.92))] p-6 md:p-7 shadow-[0_18px_45px_rgba(11,28,44,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_58%)] opacity-80" />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-5">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <span className="h-2.5 w-2.5 rounded-full bg-gold-500 shadow-[0_0_14px_rgba(212,175,55,0.55)]" />
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-foreground/85 backdrop-blur-sm transition-colors group-hover:border-gold-500/25 group-hover:bg-gold-500/8"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ item }) {
  return (
    <div className="cream-card rounded-2xl p-6 md:p-7 h-full border border-gold-500/10 shadow-[0_10px_30px_rgba(11,28,44,0.08)]">
      <div className="inline-block text-[10px] uppercase tracking-[0.28em] text-gold-500 mb-4 border border-gold-500/20 rounded-full px-3 py-1.5">
        {item.label}
      </div>
      <h4
        className="font-display text-xl md:text-2xl font-semibold mb-3"
        style={{ color: "#0B1C2C" }}
      >
        {item.title}
      </h4>
      <p
        className="text-sm md:text-base leading-relaxed"
        style={{ color: "#1a2c3c" }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function ServiceDescription({ service }) {
  const richSections = Array.isArray(service.sections) ? service.sections : [];
  const featureImage = service.featureImage;
  return (
    <section className="py-20">
      <div className="container max-w-6xl">
        {/* Overview */}
        <div className="max-w-6xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-5 border border-gold-500/30 rounded-full px-4 py-1.5">
            Overview
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6 max-w-6xl">
            What you <span className="text-gold-gradient">actually get.</span>
          </h2>
          <p className="text-lg text-justify text-muted-foreground leading-relaxed max-w-6xl">
            {service.description}
          </p>
        </div>

        {featureImage ? (
          <div className="mb-14">
            <div className="glass-card rounded-[2rem] p-4 md:p-6 border border-gold-500/15 shadow-[0_20px_60px_rgba(11,28,44,0.14)]">
              <div className="grid gap-5">
                <div className="flex items-center justify-between gap-4 px-1 md:px-2">
                  <div>
                    <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-3 border border-gold-500/30 rounded-full px-4 py-1.5">
                      {featureImage.eyebrow}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight max-w-6xl">
                      {featureImage.title}
                    </h3>
                  </div>
                  <div className="hidden md:block text-xs uppercase tracking-[0.28em] text-gold-500/70">
                    System map
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#071a2d] border border-gold-500/10">
                  <div className="absolute inset-0 animated-gradient-bg opacity-35" />
                  <div
                    className="absolute inset-0 opacity-[0.09]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(212,175,55,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.55) 1px, transparent 1px)",
                      backgroundSize: "64px 64px",
                    }}
                  />
                  <div className="relative aspect-[16/9] w-full p-3 md:p-5">
                    <Image
                      src={featureImage.src}
                      alt={featureImage.alt}
                      fill
                      priority
                      className="object-contain object-center drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-1 md:px-2">
                  <p className="text-muted-foreground max-w-6xl leading-relaxed">
                    {featureImage.caption}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-500/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    Lead flow example
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {richSections.length > 0 ? (
          <div className="space-y-14">
            {richSections.map((section) => {
              if (section.variant === "quote") {
                return (
                  <div
                    key={section.eyebrow || section.title}
                    className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 animated-gradient-bg opacity-50" />
                    <div className="relative z-10 max-w-6xl">
                      <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-5 border border-gold-500/30 rounded-full px-4 py-1.5">
                        {section.eyebrow}
                      </div>
                      <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5">
                        {section.title}
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  </div>
                );
              }

              if (section.variant === "stack") {
                const stackColumnsClass =
                  section.columnsClass || "md:grid-cols-2 lg:grid-cols-3";
                return (
                  <div
                    key={section.eyebrow || section.title}
                    className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gold-500/15 shadow-[0_20px_60px_rgba(11,28,44,0.14)]"
                  >
                    <div className="absolute inset-0 animated-gradient-bg opacity-25" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(19,43,71,0.85),transparent_40%)]" />
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                        <div className="max-w-4xl">
                          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
                            {section.eyebrow}
                          </div>
                          <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground max-w-5xl">
                            {section.text}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-navy-900/40 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-gold-300 backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                          Modern stack
                        </div>
                      </div>

                      <div className={`grid ${stackColumnsClass} gap-4 md:gap-5`}>
                        {section.items.map((column) => (
                          <StackColumn
                            key={column.title}
                            title={column.title}
                            items={column.items}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (section.variant === "caseStudy") {
                return (
                  <div
                    key={section.eyebrow || section.title}
                    className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 animated-gradient-bg opacity-35" />
                    <div className="relative z-10">
                      <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-5 border border-gold-500/30 rounded-full px-4 py-1.5">
                        {section.eyebrow}
                      </div>
                      <div className="max-w-6xl mb-8">
                        <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4">
                          {section.title}
                        </h3>
                        {section.text ? (
                          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                            {section.text}
                          </p>
                        ) : null}
                      </div>

                      <div className="grid md:grid-cols-3 gap-5">
                        {section.items.map((item) => (
                          <CaseStudyCard key={item.title} item={item} />
                        ))}
                      </div>

                      {Array.isArray(section.tags) && section.tags.length > 0 ? (
                        <div className="mt-7 flex flex-wrap gap-2">
                          {section.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-gold-500/20 bg-white/40 px-3 py-1 text-sm text-navy-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              }

              const items = section.items || [];
              const iconMap = section.iconMap || {};
              const gridClass =
                section.columnsClass ||
                (section.variant === "wideCards"
                  ? "md:grid-cols-2"
                  : section.variant === "listGrid"
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2");

              return (
                <div key={section.eyebrow || section.title}>
                  <div className="max-w-6xl mb-8">
                    <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
                      {section.eyebrow}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4">
                      {section.title}
                    </h3>
                    {section.text ? (
                      <p className="text-muted-foreground max-w-6xl">
                        {section.text}
                      </p>
                    ) : null}
                  </div>

                  <div className={`grid ${gridClass} gap-6`}>
                    {items.map((item) => (
                      <SectionCard
                        key={item.title}
                        item={item}
                        icon={iconMap[item.title] || item.icon}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="cream-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-500/30">
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "#0B1C2C" }}
                    strokeWidth={2.4}
                  />
                </div>
                <h3
                  className="font-display text-2xl font-semibold"
                  style={{ color: "#0B1C2C" }}
                >
                  Benefits
                </h3>
              </div>
              <ul className="space-y-3">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-gradient" />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "#1a2c3c" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cream-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-500/30">
                  <Package
                    className="h-5 w-5"
                    style={{ color: "#0B1C2C" }}
                    strokeWidth={2.4}
                  />
                </div>
                <h3
                  className="font-display text-2xl font-semibold"
                  style={{ color: "#0B1C2C" }}
                >
                  Key Deliverables
                </h3>
              </div>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-gradient" />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "#1a2c3c" }}
                    >
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
