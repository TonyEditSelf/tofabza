// components/home/ValueStrip.jsx
import { Eye, MessageCircle, Zap, TrendingUp } from "lucide-react";
import { VALUE_STRIP } from "@/lib/constants";

const ICONS = { Eye, MessageCircle, Zap, TrendingUp };

export default function ValueStrip() {
  return (
    <section className="py-16 border-y border-gold-500/10 bg-navy-900/40">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUE_STRIP.map((v) => {
          const Icon = ICONS[v.icon];
          return (
            <div key={v.title} className="flex items-start gap-4 group">
              <div className="shrink-0 w-12 h-12 rounded-lg border border-gold-500/30 bg-navy-800/60 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Icon className="h-5 w-5 text-gold-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
