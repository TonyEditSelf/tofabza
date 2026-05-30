"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Play, X } from "lucide-react";

const APPS = [
  {
    id: 1,
    name: "Ecommerce Store",
    url: "https://ecommerce-store-ten-chi.vercel.app/",
    video: "/videos/EcomStores.mp4",
    classification: "SHOWCASE BUILD",
    classificationDescription:
      "A production-grade showcase build created to demonstrate end-to-end full-stack eCommerce development capability.",
    metadata: [
      { label: "Role", value: "Full-Stack Development" },
      {
        label: "Purpose",
        value:
          "Demonstrate end-to-end eCommerce application development capability",
      },
    ],
    description:
      "A full-stack premium electronics store with curated product catalog, cart, orders, admin panel, and live payments.",
    image: "/images/EcomStores.png",
    stack: [
      "Next.js",
      "Supabase",
      "ImageKit",
      "Razorpay",
      "Tailwind CSS",
      "Google Auth",
    ],
    caseStudy: {
      problem:
        "Most small business ecommerce stores are built on rigid templates — WordPress, Shopify themes — making even simple customizations a battle. They end up looking generic, loading slow, and locking owners into platforms they can't truly control.",
      solution:
        "Built a full-stack premium electronics store from scratch with a powerful admin panel — allowing admins to add products with descriptions and images, assign them to categories (featured, latest, best-selling, fast-selling), and manage hero banners. ImageKit handles fast, optimized image delivery, auto-compressing and resizing product images on the fly. Razorpay powers live payment processing across 9 curated product categories. Google Authentication handles secure user sign-in.",
      outcome:
        "A production-deployed store with working cart, orders, payments, and a fully functional admin — admins can manage the entire catalog, collections, and homepage content without touching code. No templates, no platform lock-in. Ready to scale with real inventory.",
    },
  },
  {
    id: 2,
    name: "Cosira",
    url: "https://cosira.vercel.app/",
    video: "/videos/Cosira.mp4",
    classification: "PERSONAL PRODUCT",
    classificationDescription:
      "Built as a personal software product to demonstrate product development, UX design, and engineering capability.",
    metadata: [
      { label: "Status", value: "Live" },
      { label: "Role", value: "Product Design, Development" },
      {
        label: "Purpose",
        value: "Demonstrate SaaS product development capability",
      },
    ],
    description:
      "A suite of 11 precision color tools built on OKLCH - generate palettes, export to CSS, Tailwind, or JSON. Built for designers who care about accuracy. Cosira is a DESKTOP app. Its NOT available on small screens, but you can check out the video to see it in action.",
    image: "/images/cosira.png",
    stack: ["Next.js", "OKLCH Engine", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Designers waste hours juggling scattered tools — color pickers, palette generators, contrast checkers — with no unified system and no perceptual accuracy.",
      solution:
        "Built a unified platform with 11 color tools - palette generation, gradients, tints, mood & culture palettes - all in OKLCH for perceptually accurate results.",
      outcome:
        "A one-stop color system builder with 11 tools, OKLCH accuracy, and direct export to CSS, Tailwind, and JSON — no tab-switching, no guesswork.",
    },
  },
  {
    id: 3,
    name: "MotionZest Studio - In progress",
    url: "https://motion-zest-editor.vercel.app/",
    video: "/videos/MotionZest.mp4",
    classification: "PERSONAL PRODUCT (IN DEVELOPMENT)",
    classificationDescription:
      "A personal software product currently under development, demonstrating advanced frontend engineering and application architecture.",
    metadata: [
      { label: "Status", value: "In Development" },
      { label: "Role", value: "Product Design, Frontend Development" },
      {
        label: "Purpose",
        value:
          "Demonstrate modern application architecture and frontend engineering capability",
      },
    ],
    description:
      "A visual 3D animation editor that outputs clean, tree-shakable Three.js source code - no proprietary runtime. Built for creative developers and motion designers who need timeline-first control over web 3D scenes.",
    image: "/images/motionzest.png",
    stack: ["Three.js", "React", "Zustand", "Yjs", "TypeScript", "WebGL"],
    caseStudy: {
      problem:
        "Existing tools like Spline lack timeline depth, Theatre.js is code-first only, and Blender is overkill for web delivery - leaving no visual editor that produces portable, production-ready Three.js output.",
      solution:
        "Building a modular visual editor with a non-React imperative WebGL viewport, a keyframe animation engine, and a code generation pipeline that exports named, tree-shaken Three.js imports.",
      outcome: "A full scene authoring + animation studio.",
    },
  },

  {
    id: 4,
    name: "Elysian",
    url: "https://elysian-dusky.vercel.app/",
    video: "/videos/Elysian.mp4",
    classification: "DESIGN CONCEPT",
    classificationDescription:
      "A self-initiated design concept created to demonstrate premium website design and luxury brand positioning.",
    metadata: [
      { label: "Role", value: "Brand Strategy, UI/UX Design" },
      {
        label: "Purpose",
        value:
          "Demonstrate premium web design and luxury brand positioning capability",
      },
    ],
    description:
      "A multi-page luxury real estate website for estate builders. Built to demonstrate high-end service brand design.",
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
    classification: "DESIGN CONCEPT",
    classificationDescription:
      "A self-initiated eCommerce design concept created to demonstrate conversion-focused UI and eCommerce experience design.",
    metadata: [
      {
        label: "Role",
        value: "UI/UX Design, eCommerce Experience Design",
      },
      {
        label: "Purpose",
        value: "Demonstrate conversion-focused eCommerce design capability",
      },
    ],
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
    <section className="pt-20 md:pt-24 ">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-14">
          {APPS.map((app) => {
            const isLive = !app.isPlaceholder && !!app.url;

            return (
              <article
                key={app.id}
                className={`group min-w-0 overflow-hidden rounded-[1.25rem] transition-all duration-300 ${
                  app.isPlaceholder ? "opacity-80 hover:opacity-100" : ""
                }`}
                style={{
                  background: "#0B1C2C",
                  position: "relative",
                  border: "1px solid transparent",
                  backgroundClip: "padding-box",
                  boxShadow:
                    "0 0 0 1px rgba(198,93,42,0.25), 0 24px 60px rgba(0,0,0,0.35), inset 0 0 120px rgba(198,93,42,0.03)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "1.25rem",
                    padding: "1px",
                    zIndex: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(135deg, rgba(198,93,42,0.45) 0%, rgba(19,43,71,0.6) 45%, rgba(198,93,42,0.15) 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: -80,
                    right: 80,
                    width: 400,
                    height: 380,
                    borderRadius: "50%",
                    zIndex: 0,
                    pointerEvents: "none",
                    background:
                      "radial-gradient(circle, rgba(198,93,42,0.06) 0%, transparent 68%)",
                  }}
                />
                <div
                  className="grid h-full md:grid-cols-[280px_1fr]"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div
                    className="relative overflow-hidden border-b md:border-b-0 md:border-r"
                    style={{ background: "#0E2238", borderColor: "#132B47" }}
                  >
                    {app.image && (
                      <>
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
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-navy-900/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-brand-400 backdrop-blur-sm">
                          {app.isPlaceholder ? "Coming soon" : "Preview"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8 p-6 md:gap-5 md:p-7 lg:p-8">
                    <div className="flex flex-col gap-4">
                      {app.classification && (
                        <div className="flex max-w-4xl flex-col items-start gap-2">
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em]"
                            style={{
                              color: "#C65D2A",
                              border: "1px solid rgba(198,93,42,0.4)",
                              background: "rgba(198,93,42,0.08)",
                            }}
                          >
                            {app.classification}
                          </span>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(245,239,230,0.45)" }}
                          >
                            {app.classificationDescription}
                          </p>
                          {app.metadata?.length > 0 && (
                            <dl className="flex flex-col gap-1.5 text-sm leading-relaxed">
                              {app.metadata.map((item) => (
                                <div
                                  key={item.label}
                                  className="flex flex-col gap-0.5 sm:flex-row sm:gap-2"
                                >
                                  <dt
                                    className="font-medium"
                                    style={{ color: "#C65D2A" }}
                                  >
                                    {item.label}:
                                  </dt>
                                  <dd
                                    style={{ color: "rgba(245,239,230,0.6)" }}
                                  >
                                    {item.value}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="font-display text-2xl font-semibold md:text-3xl"
                          style={{ color: "#F5EFE6", letterSpacing: "-0.02em" }}
                        >
                          {app.name}
                        </h3>
                        {app.isPlaceholder && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/40">
                            Concept
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm leading-relaxed md:text-base"
                        style={{
                          color: "rgba(245,239,230,0.45)",
                          fontWeight: 300,
                        }}
                      >
                        {app.description}
                      </p>

                      {isLive ? (
                        <div className="flex flex-wrap items-center gap-4 pt-1">
                          <button
                            onClick={() => setActiveApp(app)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-brand-500/80 transition-colors hover:text-brand-500"
                          >
                            <Play
                              className="h-4 w-4"
                              fill="currentColor"
                              strokeWidth={0}
                              controls
                            />
                            Watch video
                          </button>
                          <a
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-brand-500/80 transition-colors hover:text-brand-500"
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
                        <div className="inline-flex h-10 shrink-0 items-center justify-center self-start rounded-full border border-brand-500/10 bg-navy-900/40 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Reserved for the next build
                        </div>
                      )}
                    </div>

                    {app.stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {app.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-default"
                            style={{
                              color: "rgba(245,239,230,0.38)",
                              background: "rgba(19,43,71,0.7)",
                              border: "1px solid #132B47",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#F5EFE6";
                              e.currentTarget.style.borderColor =
                                "rgba(198,93,42,0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color =
                                "rgba(245,239,230,0.38)";
                              e.currentTarget.style.borderColor = "#132B47";
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {app.caseStudy && (
                      <div className="overflow-hidden rounded-2xl border border-brand-500/10">
                        <button
                          onClick={() =>
                            setExpandedId(expandedId === app.id ? null : app.id)
                          }
                          className="flex w-full items-center justify-between px-4 py-3 text-sm transition-colors"
                          style={{ color: "#C65D2A" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background =
                              "rgba(198,93,42,0.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
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
                            <div
                              className="flex flex-col gap-4 px-4 pb-6 pt-6"
                              style={{
                                borderTop: "1px solid #132B47",
                                background: "rgba(19,43,71,0.3)",
                              }}
                            >
                              {["problem", "solution", "outcome"].map((key) => (
                                <div key={key}>
                                  <p
                                    className="mb-1 text-[10px] uppercase tracking-[0.2em]"
                                    style={{ color: "rgba(198,93,42,0.55)" }}
                                  >
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                  </p>
                                  <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "rgba(245,239,230,0.45)" }}
                                  >
                                    {app.caseStudy[key]}
                                  </p>
                                </div>
                              ))}
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

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Portfolio includes a mix of personal products, design concepts, and
          showcase builds created to demonstrate different aspects of product
          strategy, design, and engineering capability.
        </p>
      </div>

      {activeApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <button
            onClick={() => setActiveApp(null)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <video
            src={activeApp.video}
            className="h-full w-full object-contain"
            autoPlay
            loop
            muted
            controls
            playsInline
          />
        </div>
      )}
    </section>
  );
}
