// lib/service-details.js
// Detailed content per service page — placeholder copy, benefits, deliverables & tier plans.

const makePlans = (prefix, base) => [
  {
    id: `${prefix}-essential`,
    name: "Essential",
    price: base,
    priceLabel: `₹${base.toLocaleString("en-IN")}`,
    period: "/month",
    tagline: "Start strong with the core essentials.",
    features: [
      "Core deliverables covered",
      "Monthly strategy session",
      "Basic analytics report",
      "Email support",
      "2–3 revisions per deliverable",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: `${prefix}-professional`,
    name: "Professional",
    price: base * 2,
    priceLabel: `₹${(base * 2).toLocaleString("en-IN")}`,
    period: "/month",
    tagline: "Scale faster with a premium output engine.",
    features: [
      "Everything in Essential, plus:",
      "2x output volume",
      "Advanced strategy + competitor research",
      "Bi-weekly strategy calls",
      "Priority support",
      "Unlimited revisions",
    ],
    cta: "Add to Cart",
    highlight: true,
    buyable: true,
  },
  {
    id: `${prefix}-premium`,
    name: "Premium",
    price: Math.round(base * 3.5),
    priceLabel: `₹${Math.round(base * 3.5).toLocaleString("en-IN")}`,
    period: "/month",
    tagline: "Full-scale white-glove service.",
    features: [
      "Everything in Professional, plus:",
      "Dedicated account strategist",
      "Weekly performance reviews",
      "Custom analytics dashboards",
      "On-demand creative team",
      "24/7 priority support",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: `${prefix}-custom`,
    name: "Custom",
    price: null,
    priceLabel: "Let's talk",
    period: "",
    tagline: "Built around your exact goals.",
    features: [
      "Tailored scope & deliverables",
      "Multi-service bundles",
      "Enterprise SLAs",
      "Custom integrations",
      "Dedicated team",
    ],
    cta: "Build Your Plan",
    highlight: false,
    buyable: false,
  },
];

export const SERVICE_DETAILS = {
  "social-media-growth": {
    slug: "social-media-growth",
    title: "Social Media Growth",
    tagline:
      "Turn followers into loyal customers with strategy-led social presence.",
    icon: "Share2",
    description:
      "I build and manage social media strategies that do more than look good — they drive real business outcomes. From sharp content calendars to data-backed growth experiments, I  handle every layer so your brand stays consistent, relevant, and visible to the right people.",
    benefits: [
      "Consistent, on-brand presence across platforms",
      "Audience growth driven by real engagement, not vanity metrics",
      "Content tailored to each platform's native behaviour",
      "Monthly insights that inform the next sprint",
    ],
    deliverables: [
      "Monthly content calendar",
      "Platform-native posts (static + carousel)",
      "Community management & DM responses",
      "Hashtag & trend research",
      "Performance reporting",
    ],
    plans: makePlans("sm", 9999),
  },
  "content-creative": {
    slug: "content-creative",
    title: "Content & Creative",
    tagline:
      "Scroll-stopping visuals and copy that carry your brand's premium voice.",
    icon: "PenTool",
    description:
      "Great content doesn't happen by accident. Our creative team crafts every asset — from hero visuals to caption copy — to feel unmistakably yours. Clean design, sharp storytelling, and a consistent voice that elevates every touchpoint.",
    benefits: [
      "A brand that looks premium across every channel",
      "Copy that converts, not just decorates",
      "Creative scaled without sacrificing quality",
      "Assets ready for every format & platform",
    ],
    deliverables: [
      "Branded graphics & carousels",
      "Long-form + short-form copy",
      "Email & newsletter templates",
      "Brand guideline refinements",
      "Creative direction & moodboards",
    ],
    plans: makePlans("cc", 11999),
  },
  "website-design": {
    slug: "website-design",
    title: "Websites, Mobile Apps & Digital Presence",
    tagline:
      "Fast, elegant, high-converting websites built to scale with your business.",
    icon: "Layout",
    description:
      "Your website and mobile app is often the first impression — I make sure it lands. I design and build premium, fast websites and Apps with clean code, thoughtful UX, and conversion-focused layouts. Built on modern stacks, optimised for SEO, and crafted to grow with you.",
    benefits: [
      "Premium design that builds instant credibility",
      "Fast load times that keep visitors from bouncing",
      "SEO-ready structure from day one",
      "Scalable codebase — no platform lock-in",
    ],
    deliverables: [
      "Custom UI/UX design in Figma",
      "Responsive front-end development",
      "CMS integration (content you can edit)",
      "Performance & SEO optimisation",
      "Deployment + ongoing support",
    ],
    plans: makePlans("wd", 24999),
  },
  "video-reels": {
    slug: "video-reels",
    title: "Video & Reels",
    tagline:
      "Short-form content engineered for reach, retention and brand recall.",
    icon: "Video",
    description:
      "Short-form video is the fastest path to attention — if it's done right. I produce reels and videos that are structured for the first-second hook, engineered for retention, and on-brand throughout. From concept to cut, every frame earns its place.",
    benefits: [
      "Reels built around proven retention frameworks",
      "Consistent visual identity across every clip",
      "Edits optimised for each platform's algorithm",
      "A scalable content pipeline, week over week",
    ],
    deliverables: [
      "Concept & scripting",
      "Shot list / production guidance",
      "Professional editing + motion graphics",
      "Subtitles & platform-specific crops",
      "Posting schedule integration",
    ],
    plans: makePlans("vr", 14999),
  },
  campaigns: {
    slug: "campaigns",
    title: "Campaigns",
    tagline:
      "Performance-driven ad campaigns with sharp targeting and clear ROI.",
    icon: "Target",
    description:
      "I plan, launch and optimise paid campaigns that actually move the needle. From tight audience targeting to creative testing and daily optimisation, these  campaigns are built to scale spend efficiently — not to burn it. Clear KPIs, clear reporting, clear outcomes.",
    benefits: [
      "Campaigns structured around measurable KPIs",
      "Rigorous A/B testing on creative & audiences",
      "Transparent weekly performance reviews",
      "Spend optimised for ROAS, not impressions",
    ],
    deliverables: [
      "Campaign strategy & funnel mapping",
      "Audience research & targeting",
      "Ad creative production",
      "Pixel / tracking setup",
      "Weekly optimisation + reporting",
    ],
    plans: makePlans("cp", 19999),
  },
  "automation-systems": {
    slug: "automation-systems",
    title: "Automation Systems",
    tagline: "Workflows, CRM & AI-powered systems that remove repetitive work.",
    icon: "Cog",
    description:
      "Most businesses run on repetitive manual work that quietly eats time every day. I build automation systems that handle it in the background — qualifying leads, nurturing customers, syncing data — so you can focus on high-leverage work. Built with tools you already use, or better ones if needed.",
    benefits: [
      "Hours of manual work reclaimed every week",
      "Leads qualified and nurtured automatically",
      "Clean, unified data across your stack",
      "AI-assisted lead responses and follow-ups",
      "AI chatbots handling enquiries and qualifying leads 24/7",
      "Voice agents managing calls and bookings automatically",
      "Built around tools you already use — no unnecessary complexity",
    ],
    deliverables: [
      "Workflow audit & mapping",
      "CRM setup / optimisation",
      "Automation builds (Zapier / Make / n8n)",
      "AI-assisted workflows & prompts",
      "AI chatbot design & deployment",
      "Voice agent setup & integration",
      "Training + documentation",
    ],
    plans: makePlans("as", 17999),
  },
};

export const getServiceBySlug = (slug) => SERVICE_DETAILS[slug] || null;
export const getAllServiceSlugs = () => Object.keys(SERVICE_DETAILS);
