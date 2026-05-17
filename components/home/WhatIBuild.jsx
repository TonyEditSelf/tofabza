// components/home/Services.jsx
import Link from "next/link";
import {
  Share2,
  PenTool,
  Layout,
  Video,
  Target,
  Cog,
  ArrowUpRight,
  Workflow,
  TrendingUp,
} from "lucide-react";
import { WHAT_I_BUILD } from "@/lib/constants";

const ICONS = {
  Share2,
  PenTool,
  Layout,
  Video,
  Target,
  Cog,
  Workflow,
  TrendingUp,
};

import React from "react";

export default function WhatIBuild() {
  return (
    <section id="WhatIBuild" className="py-28 relative">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
            Capabilities
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            What I build{" "}
            <span className="text-gold-gradient">and implement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_BUILD.map((s) => {
            const Icon = ICONS[s.icon] || Cog;
            const isAutomate = s.title === "Automate";

            return (
              <Link
                key={s.title}
                href={`/services/${s.slug}`}
                className={[
                  "group relative rounded-2xl p-8 glass-card glass-card-hover transition-all overflow-hidden",
                  isAutomate
                    ? "border-gold-500/60 shadow-[0_0_0_1px_rgba(212,175,55,0.28),0_18px_55px_rgba(212,175,55,0.14)] md:-translate-y-1 md:scale-[1.02]"
                    : "",
                ].join(" ")}
              >
                {isAutomate && (
                  <>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-gold-400/50" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_58%)]" />
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gold-300/80 via-gold-400/40 to-transparent" />
                  </>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={[
                        "w-14 h-14 rounded-xl border flex items-center justify-center transition",
                        isAutomate
                          ? "bg-gold-500/20 border-gold-400/50 shadow-[0_0_24px_rgba(212,175,55,0.18)]"
                          : "bg-gold-500/10 border-gold-500/20 group-hover:bg-gold-500/20",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6 text-gold-500" />
                    </div>

                    <ArrowUpRight
                      className={[
                        "h-5 w-5 transition",
                        isAutomate
                          ? "text-gold-500 translate-x-0 -translate-y-1"
                          : "text-gold-500/40 group-hover:text-gold-500 group-hover:-translate-y-1 group-hover:translate-x-1",
                      ].join(" ")}
                    />
                  </div>

                  <h3
                    className={[
                      "font-display text-2xl font-semibold mb-2",
                      isAutomate ? "text-gold-100" : "",
                    ].join(" ")}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={[
                      "mb-5",
                      isAutomate
                        ? "text-foreground/90"
                        : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {s.desc}
                  </p>
                  <p className="text-muted-foreground mb-5">{s.explain}</p>

                  <ul className="space-y-2 mb-6">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className={[
                          "flex items-start gap-2 text-sm",
                          isAutomate
                            ? "text-foreground/80"
                            : "text-muted-foreground",
                        ].join(" ")}
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={[
                      "mt-auto text-xs uppercase tracking-[0.25em] transition-opacity font-semibold",
                      isAutomate
                        ? "text-gold-300 opacity-100"
                        : "text-gold-500 opacity-100 md:opacity-0 md:group-hover:opacity-100",
                    ].join(" ")}
                  >
                    Explore
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
