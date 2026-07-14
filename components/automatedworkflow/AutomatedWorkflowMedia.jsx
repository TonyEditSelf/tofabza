"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Play, X, Zap, Globe } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { id: "general", label: "General" },
  { id: "hospitality", label: "Hospitality" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "retail", label: "Retail" },
  { id: "sales", label: "Sales" },
];

const AUTOMATIONS = [
  {
    id: "voice-ai-assistant",
    industry: "general",
    name: "Never Let a Call Go Unanswered",
    agent: "AI voice agent for phone enquiries.",
    tagline: "Every missed call is a customer who called someone else next.",
    description:
      "Phones ring during meetings, after hours, and during rushes — and every unanswered call is a lead or customer walking to a competitor. This voice AI assistant answers instantly, understands natural speech, handles common requests like bookings, FAQs, and order status, and hands off to a human only when it truly needs to. Callers get a real conversation, not a menu of button presses.",
    outcomes: [
      "Every call answered, day or night",
      "Fewer missed leads and enquiries",
      "Staff spend less time on repetitive phone calls",
    ],
    stack: ["n8n", "Twilio", "ElevenLabs", "OpenAI", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Incoming phone call" },
      { label: "Voice Engine", value: "ElevenLabs / Twilio" },
      { label: "AI Model", value: "OpenAI (real-time)" },
      { label: "Handles", value: "Bookings, FAQs, status checks" },
      { label: "Escalation", value: "Live transfer to staff" },
    ],
    WorkflowDiagram: null,
  },
  {
    id: "website-chatbot",
    industry: "general",
    name: "Answer Visitors Before They Leave",
    agent: "AI website chatbot trained on your business.",
    tagline: "Most visitors don't fill out a form. They just leave.",
    description:
      "A website chatbot trained on your actual business — pricing, services, FAQs, availability — that engages visitors the moment they land, answers in real time, and captures contact details before they bounce. No generic canned replies. It pulls from your real data and escalates to a human when a question needs one.",
    outcomes: [
      "More visitor enquiries captured",
      "Instant answers at any time",
      "Leads collected automatically",
    ],
    stack: ["n8n", "OpenAI", "Vector DB", "Website Widget", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Website visit / message" },
      { label: "Knowledge", value: "Connected business data" },
      { label: "AI Model", value: "OpenAI (RAG)" },
      { label: "Capture", value: "Name, email, intent" },
      { label: "Escalation", value: "Human handoff on request" },
    ],
    WorkflowDiagram: null,
  },
  {
    id: "booking-reminders",
    industry: "general",
    name: "Stop Losing Money to No-Shows",
    agent: "Automated appointment reminders via SMS and email.",
    tagline:
      "A no-show isn't a scheduling problem. It's a reminder that never went out.",
    description:
      "Appointments get booked and then forgotten — until the slot goes empty and the revenue with it. This workflow sends automatic SMS and email reminders at the right intervals before every appointment, with confirm/reschedule links built in. No staff calling to confirm. No manual reminder lists. Just fewer empty slots.",
    outcomes: [
      "Fewer missed appointments",
      "No manual reminder calls",
      "Simpler appointment rescheduling",
    ],
    stack: ["n8n", "Twilio", "Gmail", "Google Calendar", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Upcoming appointment" },
      { label: "Reminders", value: "24h + 2h before" },
      { label: "Channels", value: "SMS + Email" },
      { label: "Actions", value: "Confirm / Reschedule link" },
      { label: "Tracking", value: "Auto status update" },
    ],
    WorkflowDiagram: null,
  },
  {
    id: "review-request-automation",
    industry: "general",
    name: "Turn Happy Customers Into Public Proof",
    agent: "Automated review request and distribution assistant.",
    tagline:
      "Good reviews don't happen by accident. They happen because someone asked.",
    description:
      "Most satisfied customers never leave a review — not because they don't want to, but because nobody asked at the right moment. This workflow sends a review request automatically after service is complete, routes happy customers to Google, Facebook, or industry-specific platforms, and flags unhappy ones privately before they go public. More reviews, less risk.",
    outcomes: [
      "More customer reviews",
      "Private feedback before public reviews",
      "Stronger online reputation",
    ],
    stack: ["n8n", "WhatsApp API", "Gmail", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Service marked complete" },
      { label: "Delay", value: "Sent 24h post-service" },
      { label: "Routing", value: "Positive → public, negative → private" },
      { label: "Platforms", value: "Google, Facebook, custom" },
      { label: "Tracking", value: "Response logged in Sheets" },
    ],
    WorkflowDiagram: null,
  },
  {
    id: "team-digest-bot",
    industry: "general",
    name: "One Summary Instead of Five Tabs",
    agent: "Daily digest bot for Slack or Teams.",
    tagline: "Nobody has time to check five tools before the morning standup.",
    description:
      "Updates live scattered across email, CRM, project boards, and support tickets — and someone has to piece it together every morning. This workflow pulls activity from your connected tools and delivers one clean daily digest straight to Slack or Teams: what changed, what needs attention, what's overdue. No manual status-checking across apps.",
    outcomes: [
      "One daily operational summary",
      "Fewer missed updates",
      "Less time switching between tools",
    ],
    stack: ["n8n", "Slack", "Microsoft Teams", "CRM", "Project Board API"],
    highlights: [
      { label: "Trigger", value: "Daily at 8 AM" },
      { label: "Sources", value: "CRM, tickets, project board" },
      { label: "Output", value: "Slack / Teams message" },
      { label: "Format", value: "Grouped by priority" },
      { label: "Coverage", value: "Cross-tool, single view" },
    ],
    WorkflowDiagram: null,
  },
  {
    id: "hotel-whatsapp-ai",
    industry: "hospitality",
    name: "Never Miss a Booking Enquiry",
    agent: "AI WhatsApp receptionist for hotels.",
    tagline:
      "Guests don't stop booking because hotels close. They stop booking because nobody answered.",
    description:
      "Every unanswered enquiry is a potential lost booking. This system responds instantly using live information from your booking system, answering questions about room rates, availability, and check-in details without staff involvement. Conversations remain contextual across messages, giving guests accurate answers any time of day, even when the front desk is offline.",
    outcomes: [
      "Guest enquiries answered instantly",
      "24/7 booking support",
      "Less front-desk admin",
    ],
    stack: [
      "n8n",
      "WhatsApp API",
      "Google Gemini",
      "MySQL",
      "Redis",
      "Google Sheets",
    ],
    highlights: [
      { label: "Trigger", value: "WhatsApp message" },
      { label: "AI Model", value: "Google Gemini (auto-switched)" },
      { label: "Data", value: "MySQL + Google Sheets" },
      { label: "Memory", value: "Redis session store" },
      { label: "Response", value: "WhatsApp reply" },
    ],
    WorkflowDiagram: () => (
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/7" }}>
        <img
          src="/images/Hotel Workflow.webp"
          alt="Hotel AI receptionist n8n workflow diagram"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
    ),
  },
  {
    id: "hotel-guest-communication",
    industry: "hospitality",
    name: "Turn Guests Into Repeat Guests",
    agent: "Automated guest communication workflow.",
    tagline: "The stay ends at checkout. The relationship shouldn't.",
    description:
      "Most hotels lose repeat guests not because of bad service — but because nobody followed up. This workflow automates the entire guest communication journey. Guests receive a welcome email before arrival with everything they need for their stay, followed by a review request after checkout while their experience is still fresh. Every morning, hotel staff receive a daily arrivals and departures report, ensuring smooth handovers across front desk, housekeeping, and management teams. Everything is tracked automatically, preventing duplicate messages and reducing administrative work. Your staff focus on the guests in front of them. The workflow handles everyone else.",
    outcomes: [
      "Every guest followed up automatically",
      "More guest reviews",
      "Less front-desk administration",
    ],
    stack: ["n8n", "Gmail", "Google Sheets"],
    highlights: [
      { label: "Welcome Email", value: "1–2 days pre check-in" },
      { label: "Review Request", value: "24h post checkout" },
      { label: "Staff Report", value: "Daily at 6 AM" },
      { label: "Tracking", value: "Auto via Google Sheets" },
      { label: "Templates", value: "Responsive HTML email" },
    ],
    WorkflowDiagram: () => (
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/7" }}>
        <img
          src="/images/Hotel Workflow1.webp"
          alt="Hotel guest communication n8n workflow diagram"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
    ),
  },
  {
    id: "restaurant-pos-automation",
    industry: "hospitality",
    name: "Never Run Out Mid-Service",
    agent: "Restaurant order, inventory, and sales automation.",
    tagline:
      "Every order should update three things at once. In most restaurants, it updates one — and someone fixes the rest later.",
    description:
      "Every restaurant has the same problem: orders happen in seconds, but inventory, reporting, and reconciliation often happen later. That's how stock discrepancies appear, numbers stop matching, and staff end up doing administrative work after service. This workflow keeps everything in sync automatically. The moment an order is placed, payments are recorded, inventory is updated, and sales data is logged in real time. No end-of-day data entry. No surprise stockouts. No guessing what's selling. Your team stays focused on customers while the system keeps the operation running in the background.",
    outcomes: [
      "Fewer stock shortages",
      "Accurate real-time reporting",
      "No end-of-day data entry",
    ],
    stack: ["n8n", "POS System", "Payment Gateway", "Google Sheets", "MySQL"],
    highlights: [
      { label: "Trigger", value: "POS order placed" },
      { label: "Payments", value: "Stripe / PayPal" },
      { label: "Inventory", value: "Auto stock deduction" },
      { label: "Reporting", value: "Google Sheets / DB" },
      { label: "Coverage", value: "Real-time, all day" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Restaurant Workflow.webp"
          alt="Restaurant POS automation n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },
  {
    id: "medical-records-ocr",
    industry: "healthcare",
    name: "Stop Retyping Patient Records",
    agent: "AI-powered medical document digitisation assistant.",
    tagline:
      "If the information already exists on paper, nobody should be retyping it.",
    description:
      "Patient information already exists. The problem is that staff still spend hours transferring it from paper forms, scanned documents, and PDFs into digital systems. Every manual entry takes time and creates opportunities for errors. This workflow automates the process, extracting patient details, diagnoses, medications, lab results, and other key information from medical documents and converting them into structured digital records automatically. No manual transcription. No duplicate work. No chasing paperwork across folders and filing cabinets. Your team spends less time processing documents and more time focused on patient care.",
    outcomes: [
      "Less manual data entry",
      "Fewer patient record errors",
      "Faster access to patient records",
    ],
    stack: ["n8n", "Mistral OCR", "Google Sheets", "Google OAuth2"],
    highlights: [
      { label: "Input", value: "PDF or scanned image" },
      { label: "OCR Engine", value: "Mistral AI" },
      { label: "Fields Extracted", value: "15+ patient fields" },
      { label: "Output", value: "Google Sheets" },
      { label: "Setup", value: "Self-hosted or cloud" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Hospital Workflow.webp"
          alt="Medical records OCR automation n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },
  {
    id: "student-progress-reports",
    industry: "education",
    name: "Student Progress Reports",
    agent: "Automated student progress reports for parents.",
    tagline: "Problems are easier to solve when parents hear about them early.",
    description:
      "Most schools update parents only a few times a year. By then, attendance issues, falling grades, or learning gaps have often gone unnoticed for weeks. This workflow automatically pulls student grades, attendance records, and progress notes from your LMS, generates clear parent-friendly reports, and delivers them on a fixed schedule without staff involvement. Every report is logged, delivery is tracked, and administrators are alerted if anything fails. Parents stay informed, issues surface earlier, and teachers spend less time preparing updates.",
    outcomes: [
      "Parents updated automatically",
      "No manual report preparation",
      "Earlier support for struggling students",
    ],
    stack: ["n8n", "LMS API", "Gmail", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Every Monday 9 AM" },
      { label: "Data Source", value: "LMS API" },
      { label: "Report Format", value: "HTML email" },
      { label: "Delivery", value: "Gmail to parents" },
      { label: "Logging", value: "Google Sheets" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Education Workflow.webp"
          alt="Student progress reports n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },

  {
    id: "school-notice-distribution",
    industry: "education",
    name: "School Notice Distribution",
    agent: "Automated school notice distribution assistant.",
    tagline: "School communication shouldn't depend on copy-pasting.",
    description:
      "Important announcements need to reach the right people quickly, but many schools still rely on staff manually copying the same message across email, WhatsApp, and other channels. This workflow automates the entire process. Staff create the notice once, and the system distributes it automatically to students, parents, and staff through the appropriate channels. Every delivery is tracked, statuses are updated automatically, and administrators always know what was sent and who received it. No duplicate work. No missed announcements. No manual follow-up.",
    outcomes: [
      "One notice, every audience",
      "Track every delivery",
      "Less administrative work",
    ],
    stack: ["n8n", "WhatsApp Business API", "Gmail", "Google Sheets"],
    highlights: [
      { label: "Trigger", value: "Daily at 9 AM" },
      { label: "Channels", value: "WhatsApp + Email" },
      { label: "Recipients", value: "Students, Parents, Staff" },
      { label: "Tracking", value: "Auto status update" },
      { label: "Data Source", value: "Google Sheets" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Education Workflow1.webp"
          alt="School notice distribution n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },
  {
    id: "shopify-low-stock-alerts",
    industry: "retail",
    name: "Prevent Stockouts Before They Happen",
    agent: "AI-powered inventory management assistant.",
    tagline:
      "By the time someone notices a stockout, the sale is already lost.",
    description:
      "Running out of stock rarely happens all at once. Inventory levels drop gradually until one day a customer tries to buy something that isn't there. This workflow monitors your inventory automatically and alerts your team before products reach critical levels. Instead of checking dashboards, running manual counts, or discovering problems after sales are lost, staff receive clear notifications showing exactly what needs attention. Stock gets replenished earlier, fewer sales are missed, and inventory stays under control without constant monitoring.",
    outcomes: [
      "Fewer stockouts",
      "Earlier inventory replenishment",
      "Less manual stock monitoring",
    ],
    stack: ["n8n", "Shopify API", "Slack"],
    highlights: [
      { label: "Trigger", value: "Daily at 9 AM" },
      { label: "Source", value: "Shopify inventory" },
      { label: "Threshold", value: "Customisable (default 10)" },
      { label: "Alert Channel", value: "Slack" },
      { label: "Coverage", value: "All products & variants" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Retail Workflow.webp"
          alt="Shopify low stock alerts n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },
  {
    id: "order-tracking-whatsapp",
    industry: "retail",
    name: "Keep Customers Updated Automatically",
    agent: "AI-powered customer communication assistant.",
    tagline:
      "When customers don't hear an update, they open a support ticket instead.",
    description:
      "Customers don't usually contact support because something went wrong. They contact support because they don't know what's happening. This workflow keeps customers informed automatically throughout the delivery journey, sending updates when orders are confirmed, shipped, out for delivery, and delivered. Each message includes the information relevant to that stage, reducing uncertainty without requiring staff involvement. Customers stay informed, support teams handle fewer repetitive enquiries, and the post-purchase experience feels smoother from start to finish.",
    outcomes: [
      "Fewer order status enquiries",
      "Customers updated automatically",
      "Better post-purchase experience",
    ],
    stack: ["n8n", "WhatsApp Business API", "Google Sheets", "Webhooks"],
    highlights: [
      { label: "Trigger", value: "Order webhook event" },
      { label: "Stages", value: "Confirmed → Shipped → Delivered" },
      { label: "Channel", value: "WhatsApp Business API" },
      { label: "Logging", value: "Google Sheets audit trail" },
      { label: "Scale", value: "50+ orders/day" },
    ],
    WorkflowDiagram: () => (
      <div style={{ width: "100%", background: "#060f1a" }}>
        <img
          src="/images/Retail Workflow1.webp"
          alt="Order tracking WhatsApp automation n8n workflow diagram"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    ),
  },
  {
    id: "ai-lead-qualification",
    industry: "sales",
    name: "AI Lead Qualification & Follow-up",
    agent: "AI-powered lead qualification and follow-up assistant.",
    tagline:
      "Every lead gets qualified instantly, routed correctly, and followed up automatically.",

    description:
      "Most businesses lose opportunities because new enquiries sit unanswered or sales teams spend time chasing poor-fit leads. This workflow enriches every incoming lead, uses AI to determine qualification, automatically routes qualified prospects to sales, nurtures lower-quality leads with email sequences, and monitors responses before creating CRM tasks and notifying the team.",

    outcomes: [
      "Qualified leads routed automatically",
      "Less manual lead triage",
      "Faster sales response",
    ],

    stack: ["n8n", "OpenAI", "HTTP API", "CRM", "Email", "Slack"],

    highlights: [
      {
        label: "Trigger",
        value: "Lead Form Submission",
      },
      {
        label: "AI Model",
        value: "OpenAI Chat Model",
      },
      {
        label: "Enrichment",
        value: "HTTP API",
      },
      {
        label: "Decision",
        value: "AI Qualification",
      },
      {
        label: "Actions",
        value: "CRM + Email + Slack",
      },
    ],

    WorkflowDiagram: () => (
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
        }}
      >
        <img
          src="/images/Lead_Qualification_Workflow.webp"
          alt="AI Lead Qualification and Follow-up workflow"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
    ),
  },
];

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
    name: "MotionZest Studio",
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
      { label: "Role", value: "UI/UX Design, eCommerce Experience Design" },
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

// ─── AUTOMATION CARD ─────────────────────────────────────────────────────────

function AutomationCard({ automation, index }) {
  const [expanded, setExpanded] = useState(false);
  const { WorkflowDiagram } = automation;

  // ── Placeholder ──────────────────────────────────────────────────────────
  if (automation.placeholder) {
    return (
      <div className="rounded-[1.25rem] overflow-hidden bg-navy-900 border border-brand-500/10 opacity-60">
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <span className="self-start rounded-full border border-dashed border-brand-500/30 bg-brand-500/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500/60">
            Coming soon
          </span>
          <h3 className="font-display text-xl font-semibold text-foreground/50 tracking-tight">
            {automation.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground font-light">
            {automation.description}
          </p>
        </div>
      </div>
    );
  }

  const industryLabel = INDUSTRIES.find(
    (i) => i.id === automation.industry,
  )?.label;

  // ── Main card ────────────────────────────────────────────────────────────
  return (
    <article
      className="group relative min-w-0 overflow-hidden rounded-[1.25rem]"
      style={{
        background: "#0B1C2C",
        boxShadow:
          "0 0 0 1px rgba(198,93,42,0.25), 0 24px 60px rgba(0,0,0,0.35), inset 0 0 120px rgba(198,93,42,0.03)",
      }}
    >
      {/* Gradient border — identical to AppCard */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(198,93,42,0.45) 0%, rgba(19,43,71,0.6) 45%, rgba(198,93,42,0.15) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Ambient glow — identical to AppCard */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-20 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,93,42,0.06) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* ── TOP PANE — badge + title + tagline + description ── */}
        <div className="flex flex-col gap-5 p-6 md:py-8 md:px-14 border-b border-navy-700">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500">
              {industryLabel} · Automation
            </span>
          </div>

          {/* Title + icon */}
          <div className="flex items-start gap-3">
            <span className="flex h-14 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 mt-0.5">
              <Zap className="h-4 w-4 text-brand-500" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-cream-text md:text-3xl leading-tight">
                {automation.name}
              </h3>
              <p className="text-sm font-light text-foreground/45 leading-relaxed">
                {automation.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm  leading-relaxed text-foreground/65 md:text-base text-justify">
            {automation.description}
          </p>
        </div>

        {/* ── MIDDLE PANE — outcomes + highlights side by side on md+ ── */}
        <div className="grid md:grid-cols-2 border-b border-navy-700 md:px-8">
          {/* Outcomes */}
          {automation.outcomes?.length > 0 && (
            <div className="flex flex-col gap-4 p-6 md:p-8 border-b border-navy-700 md:border-b-0 md:border-r md:border-navy-700">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500/80">
                Outcomes
              </span>
              <ul className="flex flex-col gap-3">
                {automation.outcomes.map((outcome, i) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span
                      className="flex h-5 w-5 shrink-0 mt-0.5 items-center justify-center rounded-full border border-brand-500/30"
                      style={{ background: "rgba(198,93,42,0.1)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5.5L4 7.5L8 3"
                          stroke="#C65D2A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[15px] text-foreground/65 leading-snug">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* System Details */}
          {automation.highlights?.length > 0 && (
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500/80">
                How it works
              </span>
              <dl className="flex flex-col gap-3">
                {automation.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40 shrink-0">
                      {h.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground/45 text-right">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        {/* ── BOTTOM PANE — stack + diagram toggle ── */}
        <div className="flex flex-col gap-5 p-6 md:py-8 md:px-14">
          {/* Stack pills */}
          {automation.stack?.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500/80">
                Technology
              </span>
              <div className="flex flex-wrap gap-2">
                {automation.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-navy-700 bg-navy-700/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/40 transition-colors duration-200 hover:border-brand-500/30 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Workflow diagram accordion — same pattern as AppCard case study */}
          {WorkflowDiagram && (
            <div className="overflow-hidden rounded-2xl border border-brand-500/10 mt-1">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-brand-500 transition-colors hover:bg-brand-500/5"
              >
                <span>See how it works </span>
                {expanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-navy-700 bg-navy-800/50 px-4 pb-6 pt-4 md:px-6">
                    <div className="overflow-hidden rounded-xl border border-brand-500/10">
                      <WorkflowDiagram />
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
}

// ─── APP CARD ────────────────────────────────────────────────────────────────

function AppCard({ app, expandedId, setExpandedId, setActiveApp }) {
  const isLive = !app.isPlaceholder && !!app.url;

  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-[1.25rem] transition-all duration-300 ${
        app.isPlaceholder ? "opacity-80 hover:opacity-100" : ""
      }`}
      style={{
        background: "#0B1C2C",
        boxShadow:
          "0 0 0 1px rgba(198,93,42,0.25), 0 24px 60px rgba(0,0,0,0.35), inset 0 0 120px rgba(198,93,42,0.03)",
      }}
    >
      {/* gradient border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(198,93,42,0.45) 0%, rgba(19,43,71,0.6) 45%, rgba(198,93,42,0.15) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-20 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,93,42,0.06) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 grid h-full md:grid-cols-[280px_1fr]">
        {/* image pane */}
        <div className="relative overflow-hidden border-b border-navy-700 md:border-b-0 md:border-r md:border-navy-700 bg-navy-800">
          {app.image && (
            <div className="absolute inset-0 p-4">
              <img
                src={app.image}
                alt={app.name}
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
          )}
          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand-500/20 bg-navy-900/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-brand-400 backdrop-blur-sm">
              {app.isPlaceholder ? "Coming soon" : "Preview"}
            </div>
          </div>
        </div>

        {/* content pane */}
        <div className="flex flex-col gap-6 p-6 md:gap-5 md:p-7 lg:p-8">
          {app.classification && (
            <div className="flex flex-col items-start gap-2">
              <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-500">
                {app.classification}
              </span>
              <p className="text-sm leading-relaxed text-foreground/45">
                {app.classificationDescription}
              </p>
              {app.metadata?.length > 0 && (
                <dl className="flex flex-col gap-1.5 text-sm">
                  {app.metadata.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 sm:flex-row sm:gap-2"
                    >
                      <dt className="font-medium text-brand-500">
                        {item.label}:
                      </dt>
                      <dd className="text-foreground/60">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-cream-text md:text-3xl">
              {app.name}
            </h3>
            {app.isPlaceholder && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/40">
                Concept
              </span>
            )}
          </div>

          <p className="text-sm font-light leading-relaxed text-foreground/45 md:text-base">
            {app.description}
          </p>

          {isLive ? (
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveApp(app)}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500/80 transition-colors hover:text-brand-500"
              >
                <Play className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                Watch video
              </button>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-500/80 transition-colors hover:text-brand-500"
              >
                <Play className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                Open website
              </a>
            </div>
          ) : (
            <div className="inline-flex h-10 shrink-0 items-center justify-center self-start rounded-full border border-brand-500/10 bg-navy-900/40 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Reserved for the next build
            </div>
          )}

          {app.stack?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {app.stack.map((tech) => (
                <span
                  key={tech}
                  className="cursor-default rounded-md border border-navy-700 bg-navy-700/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/40 transition-all duration-200 hover:border-brand-500/30 hover:text-foreground"
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
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-brand-500 transition-colors hover:bg-brand-500/5"
              >
                <span>View Case Study</span>
                {expandedId === app.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  expandedId === app.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 border-t border-navy-700 bg-navy-700/30 px-4 pb-6 pt-6">
                    {["problem", "solution", "outcome"].map((key) => (
                      <div
                        key={key}
                        className="flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-2"
                      >
                        <p className="shrink-0 font-medium text-brand-500">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </p>
                        <p className="leading-relaxed text-foreground/60">
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
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:mb-12">
      <div className="flex items-center gap-3">
        {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10">
          <Icon className="h-4 w-4 text-brand-500" />
        </span> */}
        {/* <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-brand-500/80">
          {eyebrow}
        </span> */}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-cream-text md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[150ch] text-sm font-light leading-relaxed text-foreground/45 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── INDUSTRY FILTER ─────────────────────────────────────────────────────────

function IndustryFilter({ active, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {[{ id: "all", label: "All" }, ...INDUSTRIES].map((ind) => (
        <button
          key={ind.id}
          onClick={() => onChange(ind.id)}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-200 ${
            active === ind.id
              ? "border-brand-500 bg-brand-500 text-cream-text"
              : "border-brand-500/20 bg-navy-700 text-foreground/50 hover:border-brand-500/40 hover:text-foreground/80"
          }`}
        >
          {ind.label}
        </button>
      ))}
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function AutomatedWorkflowMedia() {
  const [activeApp, setActiveApp] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [activeSection, setActiveSection] = useState("automation");

  useEffect(() => {
    document.body.style.overflow = activeApp ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeApp]);

  const filteredAutomations = AUTOMATIONS.filter(
    (a) =>
      activeSection !== "automation" ||
      activeIndustry === "all" ||
      a.industry === activeIndustry,
  );

  return (
    <section className="bg-navy-900 pt-20 md:pt-24">
      <div className="container pb-20">
        {/* ── SECTION TOGGLE ── */}
        <div className="mb-14 flex flex-wrap gap-3">
          {[
            { key: "automation", label: "Automation Workflows", Icon: Zap },
            { key: "websites", label: "Websites & Apps", Icon: Globe },
          ].map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeSection === key
                  ? "border-brand-500/50 bg-brand-500/15 text-brand-400"
                  : "border-brand-500/20 bg-navy-800 text-foreground/40 hover:border-brand-500/30 hover:text-foreground/60"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* ══ AUTOMATION ══ */}
        {activeSection === "automation" && (
          <div>
            <SectionHeader
              // icon={Zap}
              // eyebrow="Business Automation"
              title="Workflows for businesses"
              subtitle="Browse examples by industry to see how different businesses automate repetitive work, connect disconnected systems, and remove operational bottlenecks."
            />

            <IndustryFilter
              active={activeIndustry}
              onChange={setActiveIndustry}
            />

            <div className="section-divider mb-10" />

            <div className="flex flex-col gap-8">
              {filteredAutomations.map((auto, i) => (
                <AutomationCard key={auto.id} automation={auto} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ══ WEBSITES & APPS ══ */}
        {activeSection === "websites" && (
          <div>
            <SectionHeader
              // icon={Globe}
              // eyebrow="Websites & Apps"
              title="Products built end to end"
              subtitle="Full-stack web apps, design concepts, and personal products — from idea to live deployment."
            />

            <div className="flex flex-col gap-10 md:gap-14">
              {APPS.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                  setActiveApp={setActiveApp}
                />
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              Portfolio includes a mix of personal products, design concepts,
              and showcase builds created to demonstrate different aspects of
              product strategy, design, and engineering capability.
            </p>
          </div>
        )}
      </div>

      {/* ── VIDEO MODAL ── */}
      {activeApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <button
            onClick={() => setActiveApp(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
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
