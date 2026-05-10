// components/home/HowItWorks.jsx
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-28 bg-navy-900/40 border-y border-gold-500/10">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
            Process
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            How it <span className="text-gold-gradient">works</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full">
                <div className="text-sm text-gold-500 font-mono tracking-wider mb-4">
                  {s.step}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gold-500/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
