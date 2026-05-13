"use client";
import { useState, useEffect } from "react";
import { ExternalLink, X, Play, ChevronDown, ChevronUp } from "lucide-react";

const APPS = [
  {
    id: 1,
    name: "Cosira",
    url: "https://cosira.vercel.app/",
    video: "/videos/Cosira.mp4",
    description:
      "A suite of 11 precision color tools built on OKLCH — generate palettes, export to CSS, Tailwind, or JSON. Built for designers who care about accuracy.",
    image: "/images/cosira.png",
    stack: ["Next.js", "OKLCH Engine", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Designers waste hours across scattered tools to build cohesive color systems.",
      solution:
        "Built a unified platform with 11 color tools — palette generation, gradients, tints, mood & culture palettes — all in OKLCH for perceptually accurate results.",
      outcome:
        "One-stop color system builder with export to CSS, Tailwind, and JSON.",
    },
  },
  {
    id: 2,
    name: "MotionZest Studio - Still Under Development",
    url: "https://motion-zest-editor.vercel.app/",
    video: "/videos/MotionZest.mp4",
    description:
      "A visual 3D animation editor that outputs clean, tree-shakable Three.js source code — no proprietary runtime. Built for creative developers and motion designers who need timeline-first control over web 3D scenes.",
    image: "/images/motionzest.png",
    stack: ["Three.js", "React", "Zustand", "Yjs", "TypeScript", "WebGL"],
    caseStudy: {
      problem:
        "Existing tools like Spline lack timeline depth, Theatre.js is code-first only, and Blender is overkill for web delivery — leaving no visual editor that produces portable, production-ready Three.js output.",
      solution:
        "Built a modular visual editor with a non-React imperative WebGL viewport, a keyframe animation engine, and a code generation pipeline that exports named, tree-shaken Three.js imports — resulting in 80–150 KB gzipped bundles.",
      outcome:
        "A full scene authoring + animation studio targeting 50,000 objects at 60fps, with planned GLTF import/export, real-time collaboration via Yjs CRDT, and a plugin marketplace.",
    },
  },
  {
    id: 3,
    name: "Ecommerce Store",
    url: "https://ecommerce-store-ten-chi.vercel.app/",
    video: "/videos/EcomStores.mp4",
    description:
      "A full-stack premium electronics store with curated product catalog, cart, orders, admin panel, and live payments.",
    image: "/images/EcomStores.png",
    stack: ["Next.js", "Supabase", "ImageKit", "Razorpay", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Most ecommerce demos are either pure frontend mockups or backend-only APIs. Real clients need both — a polished browsing experience and working systems underneath.",
      solution:
        "Built a full-stack premium electronics store with a powerful admin panel — allowing admins to add products with descriptions and images, assign them to categories (featured, latest, best-selling, fast-selling), and manage hero banners. ImageKit handles fast, optimized image delivery — auto-compressing and resizing product images on the fly so every page loads sharp and quick. Razorpay powers live payment processing across 9 curated product categories.",
      outcome:
        "A production-deployed store with working cart, orders, payments, and a fully functional admin — admins can manage the entire catalog, collections, and homepage content without touching code. Ready to scale with real inventory.",
    },
  },
  {
    id: 4,
    name: "Elysian",
    url: "https://elysian-dusky.vercel.app/",
    video: "/videos/Elysian.mp4",
    description:
      "Design concept — a multi-page luxury real estate website for a bespoke private estate builder. Built to demonstrate high-end service brand design.",
    image: "/images/elysian.png",
    stack: ["Next.js", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Luxury real estate firms often have outdated or generic websites that undercut the premium nature of what they offer.",
      solution:
        "Built a refined, editorial-style website with strong typography, project showcases, a structured services section, and a process flow — designed to command trust at first glance.",
      outcome:
        "A production-ready design concept demonstrating how a luxury service brand should look and feel online.",
    },
  },
  {
    id: 5,
    name: "Tony Stores",
    url: "https://store-ui-ux.vercel.app/",
    video: "/videos/TonyStores.mp4",
    description:
      "Design concept — a full-page premium tech e-commerce UI. Product grids, category browsing, trending sections, and brand trust signals — built to demonstrate e-commerce layout and design depth.",
    image: "/images/tonystores.png",
    stack: ["Next.js", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Premium tech products are often sold through cluttered, trust-deficit storefronts that don't match the quality of what they're selling.",
      solution:
        "Designed a clean, conversion-focused, mobile responsive e-commerce UI with clear product hierarchy, category browsing, trending sections, a staff picks highlight, brand partner display, and social proof elements — all built to showcase high-end tech products in a way that builds trust and drives sales.",
      outcome:
        "A comprehensive e-commerce UI concept demonstrating product-led design thinking from hero to footer.",
    },
  },

  {
    id: 6,
    name: "Upcoming Project",
    url: "",
    description: "A new high-performance build coming soon.",
    isPlaceholder: true,
    stack: [],
    caseStudy: null,
  },
];

export default function BuildsMedia() {
  const [activeApp, setActiveApp] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (activeApp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeApp]);

  return (
    <section className="pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {APPS.map((app) => (
            <div key={app.id} className="flex flex-col gap-4">
              {/* Card */}
              <div
                className={`relative rounded-3xl overflow-hidden glass-card group cursor-pointer border border-gold-500/20 transition-all duration-300 hover:border-gold-500/50 ${
                  app.isPlaceholder ? "opacity-60 hover:opacity-100" : ""
                }`}
                style={{ aspectRatio: "16/10" }}
                onClick={() => {
                  if (!app.isPlaceholder && app.url) {
                    setActiveApp(app);
                  }
                }}
              >
                {/* Hover image */}
                {app.image && (
                  <img
                    src={app.image}
                    alt={app.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  />
                )}

                {/* Default state */}
                <div
                  className={`absolute inset-0 z-10 transition-opacity duration-500 ${app.image ? "group-hover:opacity-0" : ""}`}
                >
                  <div className="absolute inset-0 animated-gradient-bg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 via-transparent to-navy-900/70" />
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />
                  <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px] animate-pulse-soft" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                    <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl shadow-gold-500/50 transition-transform duration-500 gold-border-glow">
                      {app.isPlaceholder ? (
                        <span className="text-navy-900 font-display text-4xl font-bold">
                          ?
                        </span>
                      ) : (
                        <Play
                          className="h-9 w-9 text-navy-900 ml-1"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      )}
                    </div>
                    <div className="text-gold-500 text-xs uppercase tracking-[0.35em] font-semibold">
                      {app.isPlaceholder ? "Coming Soon" : "Click to Preview"}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 text-xs text-muted-foreground">
                    {app.name} · {app.isPlaceholder ? "Project" : "App"}
                  </div>
                  {!app.isPlaceholder && (
                    <div className="absolute bottom-6 right-6 text-xs text-gold-500/60 font-mono">
                      00:00 / --:--
                    </div>
                  )}
                </div>

                {!app.isPlaceholder && (
                  <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-navy-900/80 backdrop-blur-md p-2 rounded-full border border-gold-500/30">
                      <ExternalLink className="w-4 h-4 text-gold-500" />
                    </div>
                  </div>
                )}
              </div>

              {/* Below card: name, description, stack badges */}
              <div className="px-1 py-5 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {app.name}
                    </h3>
                    {app.type && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 text-white/40 bg-white/5">
                        {app.type}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {app.description}
                  </p>
                </div>

                {/* Stack badges */}
                {app.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {app.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold-500/20 text-gold-500/70 bg-gold-500/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Case study toggle */}
                {app.caseStudy && (
                  <div className="border border-gold-500/10 rounded-2xl overflow-hidden">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === app.id ? null : app.id)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-gold-500/80 hover:text-gold-500 hover:bg-gold-500/5 transition-colors"
                    >
                      <span className="font-medium tracking-wide">
                        View Case Study
                      </span>
                      {expandedId === app.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedId === app.id && (
                      <div className="px-4 pb-6 pt-6 flex flex-col gap-3 border-t border-gold-500/10 bg-gold-500/[0.03]">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500/50 mb-1">
                            Problem
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {app.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500/50 mb-1">
                            Solution
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {app.caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500/50 mb-1">
                            Outcome
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {app.caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-navy-950/90 backdrop-blur-md">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveApp(null)}
          />

          <div className="relative z-10 w-full max-w-4xl max-h-full flex flex-col items-center animate-fade-up">
            <div className="w-full bg-navy-900 border border-gold-500/30 border-b-0 rounded-t-2xl py-2.5 px-4 flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 px-3 py-0.5 text-xs font-mono text-gold-500/70 bg-navy-950 rounded-md border border-gold-500/10 hidden sm:block truncate max-w-xs md:max-w-md uppercase tracking-wider">
                  {activeApp.name} Video Showcase
                </div>
              </div>
              <button
                onClick={() => setActiveApp(null)}
                className="p-2 bg-navy-950/50 hover:bg-gold-500/20 text-muted-foreground hover:text-gold-500 rounded-full transition-colors border border-transparent hover:border-gold-500/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="w-full bg-black relative rounded-b-2xl overflow-hidden border border-gold-500/30 border-t-0 shadow-2xl shadow-gold-500/10"
              style={{ height: "calc(75vh + 35px)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-navy-900 z-0">
                <div className="animate-pulse flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
                  <p className="text-gold-500/70 text-sm tracking-widest uppercase">
                    Loading Preview...
                  </p>
                </div>
              </div>

              {activeApp.video && (
                <video
                  src={activeApp.video}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              )}
            </div>

            <div className="mt-4 text-muted-foreground text-sm flex gap-2 items-center bg-navy-900/60 px-4 py-2 rounded-full border border-gold-500/20 backdrop-blur-sm">
              <ExternalLink className="w-4 h-4 text-gold-500/70" />
              <a
                href={activeApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-500 transition-colors hover:underline underline-offset-4"
              >
                Open live website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
