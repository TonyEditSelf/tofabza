// components/home/Testimonials.jsx
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-28 bg-navy-900/40 border-y border-gold-500/10">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
            Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Trusted by{" "}
            <span className="text-gold-gradient">ambitious brands</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="cream-card rounded-2xl p-8">
              <Quote className="h-8 w-8 text-gold-500/60 mb-4" />
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#1a2c3c" }}
              >
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/40"
                />
                <div>
                  <div className="font-semibold" style={{ color: "#0B1C2C" }}>
                    {t.name}
                  </div>
                  <div className="text-sm" style={{ color: "#5a6a7a" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
