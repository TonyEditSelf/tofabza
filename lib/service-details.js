// lib/service-details.js
// Detailed content per service page - placeholder copy, benefits, deliverables & tier plans.

const makePlans = (prefix, base) => [
  {
    id: `${prefix}-essential`,
    name: "Essential",
    price: base,
    priceLabel: `\u20B9${base.toLocaleString("en-IN")}`,
    period: "/month",
    tagline: "Start strong with the core essentials.",
    features: [
      "Core deliverables covered",
      "Monthly strategy session",
      "Basic analytics report",
      "Email support",
      "2-3 revisions per deliverable",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: `${prefix}-professional`,
    name: "Professional",
    price: base * 2,
    priceLabel: `\u20B9${(base * 2).toLocaleString("en-IN")}`,
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
    priceLabel: `\u20B9${Math.round(base * 3.5).toLocaleString("en-IN")}`,
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
      "Your brand stays visible - without you spending hours on your phone.",
    icon: "Share2",
    description:
      "I create and run social media strategies that do more than look good - they drive real business outcomes. I handle every layer - content calendars, captions, reels, posting - so your brand stays consistent and visible without you having to think about it.",
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
      "Short-form video & Reels production",
    ],
    plans: makePlans("sm", 9999),
  },
  // "content-creative": {
  //   slug: "content-creative",
  //   title: "Content & Creative",
  //   tagline:
  //     "Scroll-stopping visuals and copy that carry your brand's premium voice.",
  //   icon: "PenTool",
  //   description:
  //     "Great content doesn't happen by accident. Our creative team crafts every asset - from hero visuals to caption copy - to feel unmistakably yours. Clean design, sharp storytelling, and a consistent voice that elevates every touchpoint.",
  //   benefits: [
  //     "A brand that looks premium across every channel",
  //     "Copy that converts, not just decorates",
  //     "Creative scaled without sacrificing quality",
  //     "Assets ready for every format & platform",
  //   ],
  //   deliverables: [
  //     "Branded graphics & carousels",
  //     "Long-form + short-form copy",
  //     "Email & newsletter templates",
  //     "Brand guideline refinements",
  //     "Creative direction & moodboards",
  //   ],
  //   plans: makePlans("cc", 11999),
  // },
  "website-design": {
    slug: "website-design",
    title: "Websites, Mobile Apps & Digital Presence",
    tagline: "No templates. No handoffs. Built to perform from day one.",
    icon: "Layout",
    description:
      "I design and build premium websites, mobile apps, full stack applications, and eCommerce stores - all with clean code, thoughtful UX, and conversion-focused layouts. Built on modern stacks, optimised for SEO, and designed to perform from day one.",
    benefits: [
      "Premium design that builds instant credibility",
      "Fast load times that keep visitors from bouncing",
      "SEO-ready structure from day one",
      "Scalable codebase - no platform lock-in",
      "eCommerce-ready builds with payment integration",
      "Mobile app development - iOS & Android",
    ],
    deliverables: [
      "Custom UI/UX design in Figma",
      "Responsive front-end development",
      "CMS integration (content you can edit)",
      "Performance & SEO optimisation",
      "Deployment + ongoing support",
      "Full stack development (frontend + backend + database)",
      "eCommerce setup (Shopify, custom, or headless)",
      "Mobile app build (Flutter)",
    ],
    plans: makePlans("wd", 24999),
  },
  // "video-reels": {
  //   slug: "video-reels",
  //   title: "Video & Reels",
  //   tagline:
  //     "Short-form content engineered for reach, retention and brand recall.",
  //   icon: "Video",
  //   description:
  //     "Short-form video is the fastest path to attention - if it's done right. I produce reels and videos that are structured for the first-second hook, engineered for retention, and on-brand throughout. From concept to cut, every frame earns its place.",
  //   benefits: [
  //     "Reels built around proven retention frameworks",
  //     "Consistent visual identity across every clip",
  //     "Edits optimised for each platform's algorithm",
  //     "A scalable content pipeline, week over week",
  //   ],
  //   deliverables: [
  //     "Concept & scripting",
  //     "Shot list / production guidance",
  //     "Professional editing + motion graphics",
  //     "Subtitles & platform-specific crops",
  //     "Posting schedule integration",
  //   ],
  //   plans: makePlans("vr", 14999),
  // },
  // campaigns: {
  //   slug: "campaigns",
  //   title: "Campaigns",
  //   tagline:
  //     "Performance-driven ad campaigns with sharp targeting and clear ROI.",
  //   icon: "Target",
  //   description:
  //     "I plan, launch and optimise paid campaigns that actually move the needle. From tight audience targeting to creative testing and daily optimisation, these campaigns are built to scale spend efficiently - not to burn it. Clear KPIs, clear reporting, clear outcomes.",
  //   benefits: [
  //     "Campaigns structured around measurable KPIs",
  //     "Rigorous A/B testing on creative & audiences",
  //     "Transparent weekly performance reviews",
  //     "Spend optimised for ROAS, not impressions",
  //   ],
  //   deliverables: [
  //     "Campaign strategy & funnel mapping",
  //     "Audience research & targeting",
  //     "Ad creative production",
  //     "Pixel / tracking setup",
  //     "Weekly optimisation + reporting",
  //   ],
  //   plans: makePlans("cp", 19999),
  // },
  "automation-systems": {
    slug: "automation-systems",
    title: "Automation Systems",
    tagline: "AI automation systems that work in the background.",
    featureImage: {
      src: "/images/workflow.webp",
      alt: "Workflow automation diagram showing lead qualification, enrichment, follow-up, and Slack notification steps.",
      eyebrow: "Workflow Blueprint",
      title: "A visual system map for the digital worker layer.",
      caption:
        "One automation can handle the entire journey: capture, enrich, qualify, route, follow up, and notify the team.",
    },
    icon: "Cog",
    description:
      "Most businesses lose time and money to repetitive manual work - chasing leads, updating CRMs, sending follow-ups, processing documents, and managing admin tasks. I build AI-powered automation systems that handle those jobs for you. Think of them as digital workers that research, qualify, respond, organize, and follow up automatically - so your team can focus on growth, sales, and high-value work. These systems plug into the tools you already use and turn disconnected processes into a streamlined operation.",
    benefits: [
      "Faster lead response that helps you convert enquiries before competitors reply",
      "More output with less manual work across sales, operations, and admin",
      "24/7 operation for enquiries, follow-ups, reporting, and customer communication",
      "Smarter decision-making with AI that can analyze, write, summarize, and act in real time",
    ],
    deliverables: [
      "Speed-to-lead systems",
      "Follow-up sequences",
      "Internal reporting systems",
      "Customer reactivation campaigns",
    ],
    sections: [
      {
        eyebrow: "What You Gain",
        title: "The outcomes your team feels immediately.",
        variant: "wideCards",
        items: [
          {
            title: "Faster Lead Response",
            desc: "Instant replies and lead qualification help you convert more enquiries before competitors respond.",
            icon: "TimerReset",
          },
          {
            title: "More Output, Less Manual Work",
            desc: "Reduce repetitive admin tasks and free up your team's time for work that actually grows the business.",
            icon: "Workflow",
          },
          {
            title: "24/7 Operation",
            desc: "Your systems keep working around the clock, handling enquiries, follow-ups, reporting, and customer communication automatically.",
            icon: "Bot",
          },
          {
            title: "Smarter Decision-Making",
            desc: "AI can analyze information, write personalized responses, summarize conversations, and make workflow decisions in real time.",
            icon: "Brain",
          },
        ],
      },
      {
        eyebrow: "Services",
        title: "Three ways this can show up in your business.",
        text: "The right automation setup depends on where the friction is. These are the three layers I use most often.",
        variant: "wideCards",
        items: [
          {
            title: "AI Chatbots & Voice Agents",
            desc: "Website chatbots and AI phone agents that answer questions, qualify leads, book calls, and handle customer conversations naturally.",
            icon: "MessageSquare",
          },
          {
            title: "AI-Powered Business Tools",
            desc: "Custom tools that research leads, summarize documents, generate content, draft proposals, and automate repetitive thinking tasks.",
            icon: "FileText",
          },
          {
            title: "End-to-End Workflow Automation",
            desc: "Complete automated systems that connect your apps, teams, and processes together - from lead capture to proposal delivery.",
            icon: "Workflow",
          },
        ],
      },
      {
        eyebrow: "What I Can Automate",
        title: "The repetitive work that disappears first.",
        text: "These are the highest-impact workflows to automate when you want faster response times and less manual overhead.",
        variant: "listGrid",
        items: [
          {
            title: "Lead Qualification & Follow-Up",
            desc: "Automatically research new leads, score them based on your criteria, and trigger personalized follow-ups within minutes.",
            icon: "TimerReset",
          },
          {
            title: "Proposal Generation",
            desc: "Generate professional proposals automatically using form submissions, call summaries, or CRM data.",
            icon: "FileText",
          },
          {
            title: "CRM & Database Management",
            desc: "Keep Airtable, HubSpot, and Google Sheets updated, organized, and enriched automatically.",
            icon: "Database",
          },
          {
            title: "Document Processing",
            desc: "Extract and organize information from invoices, PDFs, spreadsheets, and forms with minimal manual input.",
            icon: "Workflow",
          },
          {
            title: "Reporting & Notifications",
            desc: "Send real-time KPI reports, alerts, and updates directly to Slack or email so your team stays informed.",
            icon: "BellRing",
          },
          {
            title: "Meeting & Content Assistants",
            desc: "Transcribe meetings, generate summaries and action items, and update project tools automatically.",
            icon: "MessageSquare",
          },
          {
            title: "Database Reactivation",
            desc: "Reconnect with old leads and past customers through personalized AI-driven outreach campaigns.",
            icon: "Brain",
          },
        ],
      },
      // {
      //   eyebrow: "Popular Automation Systems",
      //   title: "Proven patterns that create quick wins.",
      //   variant: "wideCards",
      //   items: [
      //     {
      //       title: "Speed-to-Lead Systems",
      //       desc: "Instantly respond to new enquiries, qualify prospects, and route them to the right person automatically.",
      //       icon: "TimerReset",
      //     },
      //     {
      //       title: "Follow-Up Sequences",
      //       desc: "Automated nurture systems that consistently follow up until a lead replies or books a call.",
      //       icon: "MessageSquare",
      //     },
      //     {
      //       title: "Internal Reporting Systems",
      //       desc: "Automated dashboards and notifications that eliminate manual reporting work.",
      //       icon: "BellRing",
      //     },
      //     {
      //       title: "Customer Reactivation Campaigns",
      //       desc: "Bring old leads and inactive customers back into your pipeline without increasing ad spend.",
      //       icon: "Brain",
      //     },
      //   ],
      // },
      {
        eyebrow: "Tech Stack",
        title:
          "Flexible, best-in-class tools that integrate with your existing workflow.",
        text: "I build systems using tools that are practical, scalable, and easy to connect to the stack you already rely on.",
        variant: "stack",
        items: [
          {
            title: "Automation",
            items: ["n8n", "Make", "Zapier"],
          },
          {
            title: "AI",
            items: ["OpenAI", "Gemini"],
          },
          {
            title: "Voice",
            items: ["Vapi", "ElevenLabs"],
          },
          {
            title: "Operations",
            items: ["Airtable", "Slack", "Calendly", "Google Workspace"],
          },
        ],
      },
      {
        eyebrow: "The Goal",
        title: "The goal isn't to replace your team.",
        variant: "quote",
        text: "It's to remove repetitive work, speed up operations, improve response times, and help your business scale without adding unnecessary overhead.",
      },
    ],
    plans: makePlans("as", 17999),
  },
};

export const getServiceBySlug = (slug) => SERVICE_DETAILS[slug] || null;
export const getAllServiceSlugs = () => Object.keys(SERVICE_DETAILS);
