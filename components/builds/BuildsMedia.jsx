"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Play, X } from "lucide-react";

const APPS = [
  {
    id: 1,
    name: "Ecommerce Store",
    url: "https://ecommerce-store-ten-chi.vercel.app/",
    video: "/videos/EcomStores.mp4",
    description:
      "A full-stack premium electronics store with curated product catalog, cart, orders, admin panel, and live payments.",
    image: "/images/EcomStores.png",
    stack: ["Next.js", "Supabase", "ImageKit", "Razorpay", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Most ecommerce demos are either pure frontend mockups or backend-only APIs. Real clients need both - a polished browsing experience and working systems underneath.",
      solution:
        "Built a full-stack premium electronics store with a powerful admin panel - allowing admins to add products with descriptions and images, assign them to categories (featured, latest, best-selling, fast-selling), and manage hero banners. ImageKit handles fast, optimized image delivery - auto-compressing and resizing product images on the fly so every page loads sharp and quick. Razorpay powers live payment processing across 9 curated product categories.",
      outcome:
        "A production-deployed store with working cart, orders, payments, and a fully functional admin - admins can manage the entire catalog, collections, and homepage content without touching code. Ready to scale with real inventory.",
    },
  },
  {
    id: 2,
    name: "Cosira",
    url: "https://cosira.vercel.app/",
    video: "/videos/Cosira.mp4",
    description:
      "A suite of 11 precision color tools built on OKLCH - generate palettes, export to CSS, Tailwind, or JSON. Built for designers who care about accuracy.",
    image: "/images/cosira.png",
    stack: ["Next.js", "OKLCH Engine", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Designers waste hours across scattered tools to build cohesive color systems.",
      solution:
        "Built a unified platform with 11 color tools - palette generation, gradients, tints, mood & culture palettes - all in OKLCH for perceptually accurate results.",
      outcome:
        "One-stop color system builder with export to CSS, Tailwind, and JSON.",
    },
  },
  {
    id: 3,
    name: "MotionZest Studio - Still Under Development",
    url: "https://motion-zest-editor.vercel.app/",
    video: "/videos/MotionZest.mp4",
    description:
      "A visual 3D animation editor that outputs clean, tree-shakable Three.js source code - no proprietary runtime. Built for creative developers and motion designers who need timeline-first control over web 3D scenes.",
    image: "/images/motionzest.png",
    stack: ["Three.js", "React", "Zustand", "Yjs", "TypeScript", "WebGL"],
    caseStudy: {
      problem:
        "Existing tools like Spline lack timeline depth, Theatre.js is code-first only, and Blender is overkill for web delivery - leaving no visual editor that produces portable, production-ready Three.js output.",
      solution:
        "Built a modular visual editor with a non-React imperative WebGL viewport, a keyframe animation engine, and a code generation pipeline that exports named, tree-shaken Three.js imports - resulting in 80-150 KB gzipped bundles.",
      outcome:
        "A full scene authoring + animation studio targeting 50,000 objects at 60fps, with planned GLTF import/export, real-time collaboration via Yjs CRDT, and a plugin marketplace.",
    },
  },

  {
    id: 4,
    name: "Elysian",
    url: "https://elysian-dusky.vercel.app/",
    video: "/videos/Elysian.mp4",
    description:
      "Design concept - a multi-page luxury real estate website for a bespoke private estate builder. Built to demonstrate high-end service brand design.",
    image: "/images/elysian.png",
    stack: ["Next.js", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Luxury real estate firms often have outdated or generic websites that undercut the premium nature of what they offer.",
      solution:
        "Built a refined, editorial-style website with strong typography, project showcases, a structured services section, and a process flow - designed to command trust at first glance.",
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
      "Design concept - a full-page premium tech e-commerce UI. Product grids, category browsing, trending sections, and brand trust signals - built to demonstrate e-commerce layout and design depth.",
    image: "/images/tonystores.png",
    stack: ["Next.js", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Premium tech products are often sold through cluttered, trust-deficit storefronts that don't match the quality of what they're selling.",
      solution:
        "Designed a clean, conversion-focused, mobile responsive e-commerce UI with clear product hierarchy, category browsing, trending sections, a staff picks highlight, brand partner display, and social proof elements - all built to showcase high-end tech products in a way that builds trust and drives sales.",
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
    <section className="pt-14 md:pt-16">
      <div className="container">
        <div className="flex flex-col gap-6">
          {APPS.map((app) => {
            const isLive = !app.isPlaceholder && !!app.url;

            return (
              <article
                key={app.id}
                className={`group min-w-0 overflow-hidden rounded-[2rem] border border-gold-500/20 transition-all duration-300 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 ${
                  app.isPlaceholder ? "opacity-80 hover:opacity-100" : ""
                }`}
                style={{ backgroundColor: "rgba(14, 34, 56, 0.82)" }}
              >
                <div className="grid h-full md:grid-cols-[280px_1fr]">
                  <div
                    className="relative overflow-hidden border-b border-gold-500/10 md:border-b-0 md:border-r"
                    style={{ backgroundColor: "rgba(11, 28, 44, 0.95)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                      }}
                    />

                    {app.image && (
                      <>
                        {/* <img
                          src={app.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full object-cover scale-110 opacity-20"
                        /> */}
                        <div className="absolute inset-0 p-4">
                          <img
                            src={app.image}
                            alt={app.name}
                            className="h-full w-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </>
                    )}

                    <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-navy-900/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold-400 backdrop-blur-sm">
                          {app.isPlaceholder ? "Coming soon" : "Preview"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-6 md:p-7 lg:p-8">
                    <div className="flex flex-col gap-4">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                          {app.name}
                        </h3>
                        {app.isPlaceholder && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/40">
                            Concept
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {app.description}
                      </p>

                      {isLive ? (
                        <div className="flex flex-wrap items-center gap-4 pt-1">
                          <button
                            onClick={() => setActiveApp(app)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gold-500/80 transition-colors hover:text-gold-500"
                          >
                            <Play
                              className="h-4 w-4"
                              fill="currentColor"
                              strokeWidth={0}
                            />
                            Watch video
                          </button>
                          <a
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gold-500/80 transition-colors hover:text-gold-500"
                          >
                            <Play
                              className="h-4 w-4"
                              fill="currentColor"
                              strokeWidth={0}
                            />
                            Open website
                          </a>
                        </div>
                      ) : (
                        <div className="inline-flex h-10 shrink-0 items-center justify-center self-start rounded-full border border-gold-500/10 bg-navy-900/40 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Reserved for the next build
                        </div>
                      )}
                    </div>

                    {app.stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {app.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-gold-500/20 bg-gold-500/5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-gold-500/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {app.caseStudy && (
                      <div className="overflow-hidden rounded-2xl border border-gold-500/10">
                        <button
                          onClick={() =>
                            setExpandedId(expandedId === app.id ? null : app.id)
                          }
                          className="flex w-full items-center justify-between px-4 py-3 text-sm text-gold-500/80 transition-colors hover:bg-gold-500/5 hover:text-gold-500"
                        >
                          <span className="font-medium tracking-wide">
                            View Case Study
                          </span>
                          {expandedId === app.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                            expandedId === app.id
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="flex flex-col gap-4 border-t border-gold-500/10 bg-gold-500/[0.03] px-4 pb-6 pt-6">
                              <div>
                                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gold-500/50">
                                  Problem
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {app.caseStudy.problem}
                                </p>
                              </div>
                              <div>
                                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gold-500/50">
                                  Solution
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {app.caseStudy.solution}
                                </p>
                              </div>
                              <div>
                                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gold-500/50">
                                  Outcome
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {app.caseStudy.outcome}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md sm:p-6 md:p-12">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveApp(null)}
          />

          <div className="relative z-10 flex max-h-[88vh] w-full max-w-5xl flex-col items-center animate-fade-up">
            <div className="flex w-full items-center justify-between rounded-t-[2rem] border border-gold-500/30 border-b-0 bg-navy-900 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 hidden max-w-xs truncate rounded-md border border-gold-500/10 bg-navy-950 px-3 py-0.5 text-xs font-mono uppercase tracking-wider text-gold-500/70 sm:block md:max-w-md">
                  {activeApp.name} Video Showcase
                </div>
              </div>
              <button
                onClick={() => setActiveApp(null)}
                className="rounded-full border border-transparent bg-navy-950/50 p-2 text-muted-foreground transition-colors hover:border-gold-500/30 hover:bg-gold-500/20 hover:text-gold-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative w-full overflow-hidden rounded-b-[2rem] border border-gold-500/30 border-t-0 bg-black shadow-2xl shadow-gold-500/10">
              <div
                className="absolute inset-0 flex items-center justify-center bg-navy-900"
                aria-hidden="true"
              >
                <div className="flex animate-pulse flex-col items-center gap-4">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-500/30 border-t-gold-500" />
                  <p className="text-sm uppercase tracking-widest text-gold-500/70">
                    Loading Preview...
                  </p>
                </div>
              </div>

              {activeApp.video && (
                <video
                  src={activeApp.video}
                  className="relative z-10 aspect-video w-full object-contain"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-full border border-gold-500/20 bg-navy-900/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
              <ExternalLink className="h-4 w-4 text-gold-500/70" />
              <a
                href={activeApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors hover:text-gold-500 hover:underline"
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
