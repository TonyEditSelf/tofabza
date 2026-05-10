// components/builds/BuildsHero.jsx
import { Layout } from "lucide-react";

export default function BuildsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-70" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-soft" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Layout className="h-4 w-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
            <span className="text-gold-gradient">My Builds</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Designed and built from scratch. No templates.
          </p>
        </div>
      </div>
    </section>
  );
}
