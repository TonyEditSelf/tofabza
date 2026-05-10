// components/home/FocusAreas.jsx
import { Crown, Users, Workflow } from "lucide-react";
import { FOCUS_AREAS } from "@/lib/constants";

const ICONS = { Crown, Users, Workflow };

export default function FocusAreas() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
            Focus Areas
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Three pillars. <span className="text-gold-gradient">One outcome.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={f.title} className="glass-card glass-card-hover rounded-2xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6 shadow-lg shadow-gold-500/20">
                  <Icon className="h-7 w-7 text-navy-900" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
