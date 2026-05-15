// components/services/ServiceDescription.jsx
import { CheckCircle2, Package } from "lucide-react";

export default function ServiceDescription({ service }) {
  return (
    <section className="py-20">
      <div className="container max-w-6xl">
        {/* Description */}
        <div className="max-w-6xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-5 border border-gold-500/30 rounded-full px-4 py-1.5">
            Overview
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6">
            What you <span className="text-gold-gradient">actually get.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits + Deliverables grid */}
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
      </div>
    </section>
  );
}
