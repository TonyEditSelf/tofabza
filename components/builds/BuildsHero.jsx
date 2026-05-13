import { Layout } from "lucide-react";

export default function BuildsHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      <div className="absolute inset-0 animated-gradient-bg opacity-70" />
      <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-soft" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/40 px-4 py-2 backdrop-blur-sm">
            <Layout className="h-4 w-4 text-gold-500" />
            <span className="font-medium text-xs uppercase tracking-[0.2em] text-gold-400">
              Portfolio
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <h1 className="font-display text-5xl font-semibold leading-[1.04] md:text-7xl">
              <span className="text-gold-gradient">My Builds</span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Designed and built from scratch. No templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
