// components/home/About.jsx
import { User, Crosshair, MessageSquare } from "lucide-react";
import Image from "next/image";

const PILLARS = [
  {
    icon: User,
    title: "Ownership",
    desc: "One person. Full focus. No handoffs.",
  },
  {
    icon: Crosshair,
    title: "Precision",
    desc: "Every decision is tied to a clear outcome — nothing is built without a reason.",
  },
  {
    icon: MessageSquare,
    title: "Clarity",
    desc: "Direct communication. No confusion. No delays. No noise.",
  },
];

export default function About() {
  return (
    <section className="py-28 border-b border-gold-500/10 relative">
      <div className="container max-w-6xl text-center">
        <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
          About Tofabza
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-8">
          <span className="text-gold-gradient">One person.</span> <br />
          Every project gets full attention <br />
          <span className="text-gold-gradient">from start to finish.</span>
        </h2>
        <div className="relative w-32 h-32 mx-auto mb-6 mt-2">
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-gold-500/50 animate-spin"
            style={{ animationDuration: "15s" }}
          />
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <Image
              src="/images/tony.png"
              alt="Tony Eappen"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          I'm Tony Eappen — I build digital systems for businesses serious about
          structured growth. Your websites, apps, automation and content — built
          to work as one system.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="cream-card rounded-2xl p-8 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 shadow-lg shadow-gold-500/30">
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "#0B1C2C" }}
                    strokeWidth={2.2}
                  />
                </div>
                <h3
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ color: "#0B1C2C" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5a6a7a" }}
                >
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
