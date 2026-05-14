// lib/constants.js
// Shared brand + data constants

export const BRAND = {
  name: "Tofabza",
  shortName: "TOFABZA",
  tagline:
    "Helping businesses grow online with clarity, consistency & automation.",
  email: "tonyeappen@tofabza.com",
  phone: "+91-90486 39145",
  whatsapp: "919048639145",
  location: "India",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What I Build", href: "/#WhatIBuild" },
  { label: "View Builds", href: "/builds" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

export const WHAT_I_BUILD = [
  {
    slug: "website-design",
    title: "Build",
    desc: "Digital Presence",
    icon: "Layout",
    items: [
      "Static Websites",
      "Mobile Apps",
      "Full Stack Applications",
      "eCommerce Stores",
      "UI/UX Design",
      "SEO-Optimised Websites",
    ],
  },
  {
    slug: "automation-systems",
    title: "Automate",
    desc: "Systems that save time",
    icon: "Workflow",
    items: [
      "Lead capture systems",
      "Follow-up automation",
      "AI-powered workflows",
      "Voice agents & chatbots",
      "CRM setup & integration",
    ],
  },
  {
    slug: "social-media-growth",
    title: "Grow",
    desc: "Content that builds presence and drives real reach.",
    icon: "TrendingUp",
    items: [
      "Social media strategy",
      "Content creation & copywriting",
      "Short-form video & Reels",
      "Personal branding content",
      "Content repurposing",
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Understand",
    desc: "I learn your business, who you're trying to reach, and what success looks like for you.",
  },
  {
    step: "02",
    title: "Strategize",
    desc: "I map out the exact system — what to build, what to automate, and in what order.",
  },
  {
    step: "03",
    title: "Build & Launch",
    desc: "I build your website, systems, and content setup — and get everything live and running.",
  },
  {
    step: "04",
    title: "Refine",
    desc: "I track what's performing, cut what isn't, and improve what has potential.",
  },
];

export const WHAT_YOU_GET = [
  {
    step: "01",
    title: "Websites that convert — not just impress.",
    desc: "Built with structure, speed, and clarity — designed to perform.",
  },
  {
    step: "02",
    title: "Systems that reduce manual work",
    desc: "Automation that removes repetitive tasks — so you can focus on work that actually moves the needle.",
  },
  {
    step: "03",
    title: "Content that compounds over time",
    desc: "Structured content systems designed for ongoing visibility.",
  },
  {
    step: "04",
    title: "Decisions backed by real data",
    desc: "Know what's working, what's wasting your time, and exactly where to focus next.",
  },
];

// export const FOCUS_AREAS = [
//   {
//     title: "Brand Presence",
//     desc: "Establish a recognizable, premium identity across every touchpoint.",
//     icon: "Crown",
//   },
//   {
//     title: "Engagement & Growth",
//     desc: "Turn passive followers into loyal customers with intentional content.",
//     icon: "Users",
//   },
//   {
//     title: "Systems & Automation",
//     desc: "Scale without chaos using automated workflows and smart tools.",
//     icon: "Workflow",
//   },
// ];

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Founder, Lumen Co.",
    quote:
      "Tofabza transformed our online presence. Within 3 months, inbound leads tripled and our brand finally feels premium.",
    photo:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, Atelier Build",
    quote:
      "The automation systems they set up saved our team 20+ hours a week. The ROI was obvious within the first month.",
    photo:
      "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Priya Iyer",
    role: "Director, Noor Studio",
    quote:
      "Working with Tofabza feels like having an in-house creative + growth team. Calm, clear, and consistently great work.",
    photo:
      "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Arjun Kapoor",
    role: "Founder, Veritas Group",
    quote:
      "Premium, professional, and genuinely results-driven. They delivered exactly what they promised — and more.",
    photo:
      "https://images.pexels.com/photos/28442317/pexels-photo-28442317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const PLANS = [
  {
    id: "micro",
    name: "Micro",
    price: 1999,
    priceLabel: "₹1,999",
    period: "/month",
    tagline: "A starting point for businesses getting online.",
    features: [
      "3 posts/month (1 platform)",
      "2 images + 1 reel",
      "Basic content calendar",
      "Monthly batch delivery",
    ],
    cta: "Book a Call",
    highlight: false,
    buyable: true,
    section: "micro",
  },
  {
    id: "starter-web",
    name: "Starter Web System",
    price: 7999,
    priceLabel: "₹6,999 to ₹8,999",
    period: null,
    tagline: "A clean, fast website designed to establish credibility.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form + CMS integration",
      "1 revision cycle",
      "Delivered in 2–3 weeks",
    ],
    cta: "Book a Call",
    highlight: false,
    buyable: true,
    section: "build",
  },
  {
    id: "growth-web",
    name: "Growth Web System",
    price: 13999,
    priceLabel: "₹12,999 to ₹14,999",
    period: null,
    tagline: "A structured website built for businesses ready to scale.",
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "SEO-optimised architecture",
      "Lead capture system",
      "CMS setup",
      "2 revision cycles",
      "Delivered in 3–5 weeks",
    ],
    cta: "Book a Call",
    highlight: true,
    buyable: true,
    section: "build",
  },
  {
    id: "starter-automation",
    name: "Starter Automation System",
    price: 4999,
    priceLabel: "₹4,999",
    period: null,
    tagline: "A focused workflow that saves time immediately.",
    features: [
      "One automation workflow (lead capture or follow-up)",
      "CRM setup (basic)",
      "Email automation",
      "Documentation + handover",
    ],
    cta: "Book a Call",
    highlight: false,
    buyable: true,
    section: "automate",
  },
  {
    id: "growth-automation",
    name: "Growth Automation System",
    price: 9999,
    priceLabel: "₹9,999",
    period: null,
    tagline: "Connected systems across your business.",
    features: [
      "Up to 3 automation flows",
      "CRM setup + optimisation",
      "Lead routing system",
      "Basic AI integration (if needed)",
      "Documentation + handover",
    ],
    cta: "Book a Call",
    highlight: true,
    buyable: true,
    section: "automate",
  },
  {
    id: "starter-content",
    name: "Starter Content System",
    price: 4999,
    priceLabel: "₹4,999",
    period: "/month",
    tagline: "Structured content for consistent online presence.",
    features: [
      "8 posts/month (1 platform)",
      "2 reels/month",
      "Basic content calendar",
      "Monthly performance snapshot",
      "Email support",
    ],
    cta: "Book a Call",
    highlight: false,
    buyable: true,
    section: "grow",
  },
  {
    id: "growth-content",
    name: "Growth Content System",
    price: 9999,
    priceLabel: "₹9,999",
    period: "/month",
    tagline: "Build consistent audience and engagement.",
    features: [
      "16 posts/month (2 platforms)",
      "4 reels/month",
      "Content strategy + calendar",
      "Monthly performance report",
      "Email + chat support",
    ],
    cta: "Book a Call",
    highlight: true,
    buyable: true,
    section: "grow",
  },
];

export const SERVICE_OPTIONS = [
  "Build — Website or App",
  "Build — eCommerce Store",
  "Automate — Workflow & Systems",
  "Automate — CRM & Lead Systems",
  "Automate — AI Agents",
  "Grow — Social Media & Content",
  "Grow — Video & Reels",
  "Custom / Not sure",
];
