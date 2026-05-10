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
            What I{" "}
            <span className="text-gold-gradient">build and implement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_BUILD.map((s) => {
            const Icon = ICONS[s.icon] || Cog;
            const isGrow = s.title === "Grow";

            return (
              <Link
                key={s.title}
                href={`/services/${s.slug}`}
                className="group relative rounded-2xl p-8 glass-card glass-card-hover transition-all overflow-hidden"
              >
                {/* Video Overlay (Only for Grow) */}
                {isGrow && (
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black">
                    <video
                      src="/videos/grow.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div
                  className={
                    isGrow
                      ? "transition-opacity duration-500 group-hover:opacity-0 relative z-10 h-full flex flex-col"
                      : "relative z-10 h-full flex flex-col"
                  }
                >
                  {/* Top */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition">
                      <Icon className="h-6 w-6 text-gold-500" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-gold-500/40 group-hover:text-gold-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-5">{s.desc}</p>

                  {/* 🔥 Sub items (this is the upgrade) */}
                  <ul className="space-y-2 mb-6">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto text-xs uppercase tracking-[0.25em] text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    Explore →
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
