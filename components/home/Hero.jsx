// components/home/Hero.jsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 pb-10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-90" />
      {/* Abstract glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-navy-700/40 blur-[140px]" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
              Your Digital Partner.
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            I build digital systems <br /> designed to <br />
            <span className="text-gold-gradient">Grow Businesses. </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-10">
            Website, automation, or content — built so your business keeps
            moving even when you're not watching.
          </p>

          {/* Trust line Badges — honest value props instead of fake metrics */}
          <div className="mt-16 flex items-center gap-10 flex-wrap text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-7 w-7 text-gold-500" />
              <span>
                Founder-led
                <br />
                Direct execution & communication
              </span>
            </div>
            <div className="h-7 w-px bg-gold-500/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-7 w-7 text-gold-500" />
              <span>
                24-hour response <br />
                Fast, reliable communication
              </span>
            </div>
            <div className="h-7 w-px bg-gold-500/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-7 w-7 text-gold-500" />
              <span>
                Focused delivery <br />
                Full attention on every project
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
