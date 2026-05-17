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
      "Most business owners know they should be posting consistently. But between running the actual business, social media is the first thing that slips. I build and run strategies that go beyond looking good — driving real visibility, real engagement, and real business outcomes. You stay focused on your work. Your audience keeps growing.",
    benefits: [
      "Consistent presence",
      "Real audience growth",
      "Platform-native content",
      "Business outcomes",
      "Your time back",
      "Monthly insights",
    ],
    deliverables: [
      "Monthly content calendar",
      "Static & carousel posts",
      "Short-form video & Reels",
      "Community management & DMs",
      "Hashtag & trend research",
      "Monthly performance report",
    ],
    sections: [
      {
        eyebrow: "The Problem",
        title: "Where most businesses lose on social media.",
        text: "Posting is inconsistent, content looks generic, vanity metrics dominate, and the owner becomes the content team.",
        variant: "wideCards",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Inconsistent Posting",
            desc: "Too busy some weeks, silent others. The algorithm punishes every gap.",
            icon: "TimerReset",
          },
          {
            title: "Generic Content",
            desc: "Repurposed quotes and stock images that don't reflect what the business actually does.",
            icon: "PenTool",
          },
          {
            title: "Vanity Metrics",
            desc: "Likes and followers that never translate into enquiries, leads, or sales.",
            icon: "Target",
          },
          {
            title: "The Owner Does It All",
            desc: "Hours lost on content that pulls them away from high-value work.",
            icon: "Workflow",
          },
        ],
      },
      {
        eyebrow: "What You Gain",
        title: "The outcomes your brand feels immediately.",
        variant: "wideCards",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Consistent Presence",
            desc: "On-brand content posted on schedule, every week, without you chasing it.",
            icon: "Layout",
          },
          {
            title: "Real Audience Growth",
            desc: "Followers who actually care, built through genuine engagement.",
            icon: "Share2",
          },
          {
            title: "Platform-Native Content",
            desc: "Made for how each platform works, not copy-pasted everywhere.",
            icon: "Video",
          },
          {
            title: "Business Outcomes",
            desc: "Social that drives enquiries, builds trust, and supports your sales.",
            icon: "Target",
          },
          {
            title: "Your Time Back",
            desc: "Hours a week reclaimed for work only you can do.",
            icon: "Cog",
          },
          {
            title: "Monthly Insights",
            desc: "Clear reporting on what's working so every sprint is smarter than the last.",
            icon: "Brain",
          },
        ],
      },
      {
        eyebrow: "Services",
        title: "Three ways this shows up in your business.",
        text: "The right approach depends on your goals, your audience, and where you're starting from. These are the three layers I work across most often.",
        variant: "wideCards",
        columnsClass: "md:grid-cols-3",
        items: [
          {
            title: "Content Strategy & Management",
            desc: "Content calendars, captions, hashtag research, scheduling, and community management across your platforms.",
            icon: "Workflow",
          },
          {
            title: "Short-form Video & Reels",
            desc: "Scripted, edited, and optimised video content built for Instagram Reels, TikTok, and YouTube Shorts.",
            icon: "Video",
          },
          {
            title: "Growth & Performance Reporting",
            desc: "Monthly analytics reviews, trend analysis, and strategic pivots so growth is intentional, not accidental.",
            icon: "Target",
          },
        ],
      },
      {
        eyebrow: "Key Deliverables",
        title: "What's included every month.",
        text: "The monthly engine stays consistent so your brand keeps moving even when your week gets busy.",
        variant: "listGrid",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Monthly content calendar",
            desc: "A clear plan for what gets posted and when.",
            icon: "FileText",
          },
          {
            title: "Static & carousel posts",
            desc: "Feed content that looks polished and feels on-brand.",
            icon: "Layout",
          },
          {
            title: "Short-form video & Reels",
            desc: "Motion-first content built for reach and retention.",
            icon: "Video",
          },
          {
            title: "Community management & DMs",
            desc: "Responses and engagement that keep the brand active and human.",
            icon: "MessageSquare",
          },
          {
            title: "Hashtag & trend research",
            desc: "Light strategy work that keeps the content aligned with the moment.",
            icon: "Brain",
          },
          {
            title: "Monthly performance report",
            desc: "A simple read on what worked, what didn't, and what to shift next.",
            icon: "BellRing",
          },
        ],
      },
      {
        eyebrow: "Platforms",
        title: "Where your brand shows up.",
        text: "The mix of platforms and tools is chosen to match your audience and your workflow.",
        variant: "stack",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Social Platforms",
            items: [
              "Instagram",
              "TikTok",
              "LinkedIn",
              "Facebook",
              "YouTube Shorts",
              "X / Twitter",
            ],
          },
          {
            title: "Tools & Workflow",
            items: [
              "Canva Pro",
              "CapCut",
              "Later / Buffer",
              "Meta Business Suite",
              "Notion",
            ],
          },
        ],
      },
      {
        eyebrow: "The Goal",
        title: "Not just more posts.",
        variant: "quote",
        text: "A brand presence that compounds — where every post adds to your credibility, every reel reaches a new audience, and social media becomes a genuine business asset, not a chore you dread.",
      },
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
      "Most businesses settle for templates — average-looking, slow-loading, and locked into platforms they can't control. I build custom websites, mobile apps, and eCommerce stores from scratch. Clean code, thoughtful UX, layouts that convert. No limitations. No lock-in. Just a digital presence built to perform and scale.",
    benefits: [
      "Premium design that builds instant credibility",
      "Faster load times that keep visitors engaged",
      "You own everything - your code, your data, your control",
      "Built to scale without a rebuild",
      "SEO from day one",
      "Layouts that convert browsers into buyers or leads",
    ],
    deliverables: [
      "Custom UI/UX design in Figma",
      "Responsive front-end development",
      "CMS integration - edit without code",
      "Performance & SEO optimisation",
      "Deployment + ongoing support",
      "Full-stack development",
      "eCommerce setup with payments",
      "Mobile app build in Flutter",
    ],
    sections: [
      {
        eyebrow: "What You Gain",
        title: "The outcomes your business feels immediately.",
        variant: "wideCards",
        items: [
          {
            title: "Instant Credibility",
            desc: "Premium design that builds trust within seconds of landing.",
            icon: "Layout",
          },
          {
            title: "Faster Load Times",
            desc: "Optimized builds that reduce bounce and protect your rankings.",
            icon: "TimerReset",
          },
          {
            title: "You Own Everything",
            desc: "Your code, your data, your control. Forever.",
            icon: "Database",
          },
          {
            title: "Built to Scale",
            desc: "Clean architecture that grows with you — no rebuilds needed.",
            icon: "Workflow",
          },
          {
            title: "SEO from Day One",
            desc: "Structured for Google from the first line of code.",
            icon: "Target",
          },
          {
            title: "Converts Visitors",
            desc: "Every layout decision made to turn browsers into buyers.",
            icon: "PenTool",
          },
        ],
      },
      {
        eyebrow: "Services",
        title: "Three ways this shows up in your business.",
        text: "The right build depends on where you are and where you're going.",
        variant: "wideCards",
        columnsClass: "md:grid-cols-3",
        items: [
          {
            title: "Websites & Landing Pages",
            desc: "Custom-built, SEO-optimised, conversion-focused. With CMS so your team can edit content without touching code.",
            icon: "Layout",
          },
          {
            title: "eCommerce Stores",
            desc: "Full-stack stores with product management, live payments, and admin panels. Zero template dependencies.",
            icon: "Workflow",
          },
          {
            title: "Mobile Apps",
            desc: " iOS and Android built in Flutter. One codebase, two platforms, shipped fast.",
            icon: "Target",
          },
        ],
      },
      {
        eyebrow: "Key Deliverables",
        title: "What's included in every build.",
        text: "The foundation stays consistent regardless of scope.",
        variant: "listGrid",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Custom UI/UX design in Figma",
            desc: "Clear structures and layouts designed before build begins.",
            icon: "PenTool",
          },
          {
            title: "Responsive front-end development",
            desc: "Fast, polished interfaces that work across devices and screen sizes.",
            icon: "Layout",
          },
          {
            title: "CMS integration - edit without code",
            desc: "A workflow your team can actually use after launch.",
            icon: "Database",
          },
          {
            title: "Performance & SEO optimisation",
            desc: "Technical quality baked in from the first implementation.",
            icon: "Target",
          },
          {
            title: "Deployment + ongoing support",
            desc: "Launch stability and follow-through beyond handoff.",
            icon: "Workflow",
          },
          {
            title: "Full-stack development",
            desc: "Frontend, backend, and database working together cleanly.",
            icon: "Cog",
          },
          {
            title: "eCommerce setup with payments",
            desc: "Checkout, product flows, and payment integrations that are ready to go.",
            icon: "Share2",
          },
          {
            title: "Mobile app build in Flutter",
            desc: "Cross-platform apps shipped efficiently from one codebase.",
            icon: "Video",
          },
        ],
      },
      {
        eyebrow: "Tech Stack",
        title: "Modern tools. No outdated dependencies.",
        text: "Flexible, dependable tools that keep the system maintainable after launch.",
        variant: "stack",
        columnsClass: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        items: [
          {
            title: "Frontend",
            items: ["Next.js", "React", "Tailwind CSS", "Flutter"],
          },
          {
            title: "Backend",
            items: ["Supabase", "Node.js", "Custom APIs"],
          },
          {
            title: "eCommerce",
            items: ["Razorpay", "Shopify", "Headless"],
          },
          {
            title: "Media & Performance",
            items: ["ImageKit", "CDN optimisation"],
          },
          {
            title: "Auth & Security",
            items: ["Google Auth", "JWT"],
          },
        ],
      },
      {
        eyebrow: "The Goal",
        title: "Not just a good-looking website.",
        variant: "quote",
        text: "Not just a good-looking website. A digital asset that loads fast, ranks on Google, and converts visitors into customers — built right the first time, so you never have to start over.",
      },
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
      "Most businesses lose time and money to repetitive manual work — chasing leads, updating CRMs, sending follow-ups, processing documents. I build AI-powered systems that handle those jobs automatically. Think of them as digital workers that research, qualify, respond, follow up and more — so your team stays focused on growth and high-value work. They plug into the tools you already use and turn disconnected processes into a streamlined operation.",
    benefits: [
      "Instant replies and qualification help you convert enquiries before competitors respond.",
      "Reduce repetitive and manual work across sales, operations, and admin.",
      "Enquiries, follow-ups, reporting, and customer communication handled automatically around the clock.",
      "AI that analyses information, writes personalised responses, and makes workflow decisions in real time.",
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
            desc: "Reduce repetitive and manual work across sales, operations, and admin.",
            icon: "Workflow",
          },
          {
            title: "24/7 Operation",
            desc: "Enquiries, follow-ups, reporting, and customer communication handled automatically around the clock.",
            icon: "Bot",
          },
          {
            title: "Smarter Decision-Making",
            desc: "AI that analyses information, writes personalised responses, and makes workflow decisions in real time.",
            icon: "Brain",
          },
        ],
      },
      {
        eyebrow: "Services",
        title: "Four ways this can show up in your business.",
        text: "The right automation setup depends on where the friction is. These are the four layers I use most often.",
        variant: "wideCards",
        columnsClass: "md:grid-cols-2",
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
            desc: "Complete automated systems that connect your apps, teams, and processes together.",
            icon: "Workflow",
          },
          {
            title: "Email & Outreach Automation",
            desc: "Personalised cold email sequences, follow-up campaigns, and inbox management that run without manual chasing.",
            icon: "BellRing",
          },
        ],
      },
      {
        eyebrow: "What I Can Automate",
        title: "The repetitive work that disappears first.",
        text: "These are the highest-impact workflows to automate when you want faster response times and less manual overhead.",
        variant: "listGrid",
        columnsClass: "md:grid-cols-2",
        items: [
          {
            title: "Lead Qualification & Follow-Up",
            desc: "Research new leads, score them against your criteria, and trigger personalised follow-ups within minutes.",
            icon: "TimerReset",
          },
          {
            title: "Proposal Generation",
            desc: "Professional proposals generated automatically from form submissions, call summaries, or CRM data.",
            icon: "FileText",
          },
          {
            title: "CRM & Database Management",
            desc: "Airtable, HubSpot, and Google Sheets kept updated, organised, and enriched automatically.",
            icon: "Database",
          },
          {
            title: "Document Processing",
            desc: " Extract and organise information from invoices, PDFs, spreadsheets, and forms with minimal input.",
            icon: "Workflow",
          },
          {
            title: "Reporting & Notifications",
            desc: "Real-time KPI reports, alerts, and updates pushed directly to Slack or email.",
            icon: "BellRing",
          },
          {
            title: "Meeting & Content Assistants",
            desc: "Meetings transcribed, summaries and action items generated, project tools updated automatically.",
            icon: "MessageSquare",
          },
          {
            title: "Database Reactivation",
            desc: "Old leads and past customers re-engaged through personalised AI-driven outreach.",
            icon: "Brain",
          },
        ],
      },

      {
        eyebrow: "Tech Stack",
        title:
          "Flexible, best-in-class tools that integrate with your existing workflow.",
        text: "I build systems using tools that are practical, scalable, and easy to connect to the stack you already rely on.",
        variant: "stack",
        columnsClass: "md:grid-cols-2 lg:grid-cols-4",
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
        title: "The goal is not to replace your team.",
        variant: "quote",
        text: "It's to remove the work that slows them down — so operations run faster, response times improve, and the business scales without unnecessary overhead.",
      },
    ],
    plans: makePlans("as", 17999),
  },
};

export const getServiceBySlug = (slug) => SERVICE_DETAILS[slug] || null;
export const getAllServiceSlugs = () => Object.keys(SERVICE_DETAILS);
