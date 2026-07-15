import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Target,
  Users,
  BarChart2,
  TrendingUp,
  Search,
  Sparkles,
  Activity,
  Network,
  Wrench,
  Mail,
  CalendarClock,
  Bell,
  Smartphone,
  Lightbulb,
  Rocket,
  Megaphone,
  Share2,
  Zap,
  Layers,
  PenLine,
  CheckCircle,
} from "lucide-react";

// ── Single, consistent brand theme (Loraloop blue) ───────────────────────────
// One color is shared across every agent, rather than per-agent colors.
const THEME = {
  color: "#1877f2",
  tint: "#eef4ff",
  gradient: "linear-gradient(160deg, #2f86ff 0%, #1560d8 100%)",
  textGradient: "linear-gradient(135deg, #1877f2, #4f9bff)",
} as const;

export const AGENT_THEME = THEME;

// ── Types ────────────────────────────────────────────────────────────────────
export interface AgentStat {
  value: string;
  label: string;
}
export interface AgentBenefit {
  text: string;
  icon: LucideIcon;
}
export interface AgentFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export interface AgentStep {
  title: string;
  desc: string;
}
export interface AgentTestimonial {
  quote: string;
  name: string;
  title: string;
  metrics?: string[];
}
export interface AgentFaq {
  q: string;
  a: string;
}

export interface Agent {
  key: string;
  name: string;
  role: string;
  emoji: string;
  slug: string;
  color: string;
  tint: string;
  gradient: string;
  textGradient: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    tagline: string;
    subhead: string;
    trust: string;
  };
  compareHeading: string;
  oldWayHeadline: string;
  newWayHeadline: string;
  oldWay: string[];
  newWay: AgentBenefit[];
  stats: AgentStat[];
  featuresHeading: string;
  featuresSub: string;
  features: AgentFeature[];
  /** Optional "How I work" section — only some agents have one. */
  stepsHeading?: string;
  steps?: AgentStep[];
  testimonials: AgentTestimonial[];
  faqs: AgentFaq[];
  ctaSubhead: string;
}

// ── Lora — AI Marketing Lead & Analyst (all-in-one) ──────────────────────────
const lora: Agent = {
  key: "lora",
  name: "Lora",
  role: "AI Marketing Lead & Analyst",
  emoji: "✨",
  slug: "/ai-marketing-lead",
  ...THEME,
  metaTitle: "Lora — Your Autonomous AI Marketing Lead & Analyst | Loraloop",
  metaDescription:
    "Lora learns your brand, builds a personalized marketing strategy, and takes action autonomously — SEO, social, ads, and email — then reports back to your inbox every morning.",
  hero: {
    badge: "AI Marketing Lead & Analyst",
    tagline: "autonomous AI Marketing Lead",
    subhead:
      "Lora learns your brand, builds a personalized marketing strategy, and takes action autonomously — SEO, social, ads, and email — then reports back to your inbox every morning. You review. She grows.",
    trust: "Start free · No credit card · Nothing publishes without your approval",
  },
  compareHeading: "The old way vs. the Lora way",
  oldWayHeadline: "You're stuck doing the busywork.",
  newWayHeadline: "Lora executes while you sleep.",
  oldWay: [
    "Checking 10+ dashboards daily to track performance",
    "Spending 12+ hours a week on manual marketing tasks",
    "Paying $2,300+/month for tools and freelancers",
    "Managing people instead of growing the business",
  ],
  newWay: [
    { text: "One unified strategy built from all your data", icon: Target },
    { text: "SEO, social, ads, and email executed as one plan", icon: Layers },
    { text: "Performance analyzed across every channel", icon: BarChart2 },
    { text: "A daily briefing in your inbox every morning", icon: Sparkles },
    { text: "Approve drafts before anything goes live", icon: CheckCircle },
    { text: "Trends and competitor moves tracked in real time", icon: TrendingUp },
  ],
  stats: [
    { value: "↗ 240%", label: "increase in organic traffic in 6 months" },
    { value: "↗ 110%", label: "increase in AI-search (LLM) traffic" },
  ],
  featuresHeading: "What you get with Lora",
  featuresSub:
    "Lora replaces the strategist, project manager, and analyst — and directs the specialists who do the work.",
  features: [
    {
      icon: Target,
      title: "Personalized strategy from all your data",
      desc: "Lora analyzes your analytics, ads, store, email, and social data to build one unified marketing plan tied to your goals.",
    },
    {
      icon: Search,
      title: "Free traffic from SEO content",
      desc: "Researches keywords, writes optimized 1,500–2,000 word posts, generates images, and publishes directly to your CMS.",
    },
    {
      icon: Mail,
      title: "Emails that drive revenue",
      desc: "Builds Klaviyo or Mailchimp flows, writes the copy, designs the templates, and sends campaigns that convert.",
    },
    {
      icon: Megaphone,
      title: "Ads that get better every day",
      desc: "Optimizes Meta, Google, and TikTok daily — shifting budget to top performers and pausing what doesn't work.",
    },
    {
      icon: Share2,
      title: "Social media that runs itself",
      desc: "Builds content calendars, writes platform-specific captions, creates visuals, and publishes across every channel.",
    },
    {
      icon: BarChart2,
      title: "Daily insights delivered to your inbox",
      desc: "Every morning, a summary of yesterday across all channels — with clear, actionable recommendations on what to do next.",
    },
  ],
  testimonials: [
    {
      quote:
        "Powerful features, yet genuinely easy to use — real automation without the headache. It's the first tool that actually does the work instead of handing me another dashboard.",
      name: "Priya N.",
      title: "Founder, DTC skincare",
    },
    {
      quote:
        "It feels like having a personal marketing manager who builds and runs a structured strategy for me. Our organic traffic more than doubled in a quarter.",
      name: "Marcus T.",
      title: "SaaS co-founder",
    },
  ],
  faqs: [
    {
      q: "How does the autonomous marketing system work?",
      a: "Lora connects to your channels and runs marketing end to end: she builds the strategy, briefs the specialist agents (SEO, email, ads), assembles their work into campaigns, and reports performance every morning. You review and approve — she does the work.",
    },
    {
      q: "What's included in the daily briefing?",
      a: "Every morning you get a summary of yesterday across all channels — traffic, revenue, ad spend, social engagement, and email metrics. Lora highlights what's working, flags what needs attention, and recommends the next move.",
    },
    {
      q: "Will the content sound like my brand?",
      a: "Yes. During setup, Lora studies your existing content, brand guidelines, and voice. Every output — social posts, emails, blog articles, ads — matches your brand consistently across channels.",
    },
    {
      q: "Do I need marketing experience to use Lora?",
      a: "No. Lora is built for founders and small teams who aren't marketers. You answer a few questions about your business, and Lora handles strategy, content, and execution. You review and approve.",
    },
    {
      q: "Which platforms do you integrate with?",
      a: "Google Analytics, Google Ads, Meta Ads, TikTok Ads, Shopify, WordPress, Webflow, Klaviyo, Mailchimp, and the major social networks. If you use a platform that's not listed, let us know — we're always adding more.",
    },
    {
      q: "What kind of results can I expect?",
      a: "Results vary by business, but clients typically see 100–240% organic traffic growth within 6 months, meaningful lifts in social and email, and 25+ hours a week back. Lora's daily briefing keeps the trend in front of you.",
    },
  ],
  ctaSubhead:
    "Your entire marketing team in one AI lead. Strategy, SEO, social, email, and ads — all handled, all reported.",
};

// ── Sophie — SEO/GEO Strategist ──────────────────────────────────────────────
const sophie: Agent = {
  key: "sophie",
  name: "Sophie",
  role: "SEO/GEO Strategist",
  emoji: "🔎",
  slug: "/ai-seo-geo-strategist",
  ...THEME,
  metaTitle: "Sophie — Your AI SEO & GEO Strategist | Loraloop",
  metaDescription:
    "Sophie ranks your site on Google and AI search engines like ChatGPT and Perplexity. Keyword research, content, and technical SEO — on autopilot. You review. She grows.",
  hero: {
    badge: "SEO/GEO Strategist",
    tagline: "AI SEO & GEO Strategist",
    subhead:
      "Sophie ranks your site on Google and AI search engines like ChatGPT and Perplexity. Keyword research, content, and technical SEO — on autopilot. You review. She grows.",
    trust: "Start free · Ranks on Google + AI search · You approve every article",
  },
  compareHeading: "The old way vs. the Sophie way",
  oldWayHeadline: "Manual SEO, no GEO strategy, invisible to AI search.",
  newWayHeadline: "SEO + GEO running 24/7, ranked on Google and AI.",
  oldWay: [
    "Ranking on Google but invisible inside AI answers",
    "A full day a week lost to keyword research",
    "Blog posts written with no plan for AI citation",
    "Technical issues you find months too late",
  ],
  newWay: [
    { text: "SEO + GEO keyword research every week", icon: Search },
    { text: "Content structured to be cited by ChatGPT and Perplexity", icon: Sparkles },
    { text: "Underperforming pages found and rewritten automatically", icon: Wrench },
    { text: "Technical health monitored — indexation, Core Web Vitals", icon: Activity },
    { text: "Hub-and-spoke internal linking built every month", icon: Network },
    { text: "A daily scorecard with AI-citation tracking", icon: BarChart2 },
  ],
  stats: [
    { value: "↗ 340%", label: "increase in SEO + GEO organic traffic in 6 months" },
    { value: "↗ 8×", label: "more keywords ranking in Google + AI search" },
  ],
  featuresHeading: "SEO + GEO, fully handled. You just review.",
  featuresSub:
    "Sophie covers everything a search team does — from research to publishing to technical health — and optimizes for AI answers, not just Google.",
  features: [
    {
      icon: Search,
      title: "SEO + GEO keyword research every week",
      desc: "Sophie mines Search Console for quick wins, runs competitor gap analysis, and scores every keyword for Google rankings and AI-citation potential.",
    },
    {
      icon: PenLine,
      title: "Content that ranks on Google and AI",
      desc: "Complete briefs with semantic clusters, FAQ schema, and internal linking — structured so Google and engines like ChatGPT and Perplexity cite you.",
    },
    {
      icon: Wrench,
      title: "Content optimization on autopilot",
      desc: "Finds underperforming pages, rewrites title tags, adds GEO-friendly schema, expands thin content, and fixes internal links — 5 pages per cycle.",
    },
    {
      icon: Activity,
      title: "Technical SEO monitoring weekly",
      desc: "Checks Search Console for indexation errors, Core Web Vitals failures, and crawl anomalies, and sends a prioritized fix list before rankings drop.",
    },
    {
      icon: Network,
      title: "Strategic internal linking every month",
      desc: "Maps your topical clusters, identifies authority hubs, and builds hub-and-spoke structures that push link equity to your conversion pages.",
    },
    {
      icon: BarChart2,
      title: "Daily SEO/GEO scorecard in your inbox",
      desc: "Every morning: clicks, impressions, CTR, position changes, AI-citation tracking, and instant alerts for ranking drops.",
    },
  ],
  testimonials: [
    {
      quote:
        "We put Sophie to work on our own site — SEO + GEO traffic up 340%. We went from 2 articles a month to 30+, each optimized for Google and AI search, and we're now cited in ChatGPT and Perplexity answers.",
      name: "Loraloop Team",
      title: "In-house case study",
      metrics: ["Clicks +340%", "Impressions +520%"],
    },
    {
      quote:
        "Our full SEO and GEO strategy, on autopilot. The daily scorecard catches drops before I notice, and content is already structured for answer engines.",
      name: "Sarah W.",
      title: "Head of Marketing",
    },
  ],
  faqs: [
    {
      q: "How does the autonomous SEO/GEO system work?",
      a: "Sophie connects to your Google Search Console and runs automated SEO + GEO jobs: daily tracking, weekly keyword research, weekly content briefs optimized for Google and AI search, bi-weekly optimization, technical monitoring, and monthly linking reviews. Each phase feeds the next.",
    },
    {
      q: "What makes your keyword research different?",
      a: "Most tools give you a static list. Sophie combines offensive discovery (competitor gaps, long-tail mining, trendjacking) with defensive monitoring (declining rankings, cannibalization). Every keyword is scored by volume, difficulty, and conversion potential — then prioritized automatically.",
    },
    {
      q: "What is GEO and why does it matter?",
      a: "GEO (Generative Engine Optimization) targets AI-powered search like ChatGPT, Perplexity, and Google AI Overviews. Sophie structures content with FAQ schema and clear answers so AI models cite your site — not just traditional search engines.",
    },
    {
      q: "How do you handle keyword cannibalization?",
      a: "Sophie pulls Search Console data to find pages competing for the same queries and recommends consolidation (301 redirects or merging) or differentiation (adjusting search intent). She re-checks monthly as part of the strategic review.",
    },
    {
      q: "What kind of results can I expect?",
      a: "Results depend on your starting point, but clients typically see 3–8× keyword-footprint expansion and 100–340% organic traffic growth within 6 months. The daily scorecard means you always know what's working — no guesswork.",
    },
    {
      q: "Which platforms do you integrate with?",
      a: "Google Search Console, Google Analytics 4, WordPress, Webflow, Shopify, and more. Search Console is the core data source. If your platform isn't listed, let us know — we're always adding integrations.",
    },
  ],
  ctaSubhead:
    "Your AI SEO/GEO strategist. Rank on Google and AI search engines — on autopilot.",
};

// ── Clara — Email Marketer (inbox workflow) ──────────────────────────────────
const clara: Agent = {
  key: "clara",
  name: "Clara",
  role: "Email Marketer",
  emoji: "📧",
  slug: "/ai-email-marketer",
  ...THEME,
  metaTitle: "Clara — The AI Email Marketer You Run From Your Inbox | Loraloop",
  metaDescription:
    "Send Clara a one-line brief and she analyzes, designs, and schedules the campaign inside your Klaviyo or Mailchimp. You approve. She sends.",
  hero: {
    badge: "Email Marketer",
    tagline: "AI Email Marketer",
    subhead:
      "Clara is the email marketer you manage from your inbox. Send a one-line brief, and she analyzes, designs, and schedules the campaign inside your Klaviyo or Mailchimp. You approve. She sends.",
    trust: "Start free · Works with your ESP · Approve before every send",
  },
  compareHeading: "The old way vs. the Clara way",
  oldWayHeadline: "Manual campaigns, missed opportunities, hours wasted on repetitive work.",
  newWayHeadline: "Automated campaigns running 24/7 — your revenue engine on autopilot.",
  oldWay: [
    "Campaigns that take hours to write, design, and QA",
    "Flows you set up once and never revisit",
    "Guessing at subject lines and send times",
    "Revenue left on the table between sends",
  ],
  newWay: [
    { text: "One-line briefs become finished, on-brand campaigns", icon: Mail },
    { text: "Five campaigns a week, written, designed, and scheduled", icon: CalendarClock },
    { text: "Subject lines and send times optimized automatically", icon: Sparkles },
    { text: "Proactive nudges when it's been too long since a send", icon: Bell },
    { text: "Opens, clicks, and revenue tracked — no dashboards", icon: BarChart2 },
    { text: "Mobile-optimized designs with on-brand imagery", icon: Smartphone },
  ],
  stats: [
    { value: "↗ 15%", label: "average increase in email open rate" },
    { value: "↗ 25%", label: "average increase in email-attributed revenue" },
  ],
  stepsHeading: "I work where you already work — your inbox.",
  steps: [
    {
      title: "Email her.",
      desc: "Clara walks you through connecting your Klaviyo or Mailchimp and learning your brand — in minutes.",
    },
    {
      title: "Tell her what you need.",
      desc: "A one-line brief, a vague idea, or “I don't know what to send this week.” She works with all of it.",
    },
    {
      title: "Approve, and she'll send.",
      desc: "Clara builds the campaign and sends you a preview. Reply “approve” and it goes out. Want something changed? Tell her.",
    },
  ],
  featuresHeading: "I handle strategy, creation, and execution. You just approve.",
  featuresSub:
    "Clara doesn't hand you suggestions or templates. She builds finished campaigns inside your platform, ready to send.",
  features: [
    {
      icon: Lightbulb,
      title: "Your creative partner when you're stuck",
      desc: "Don't know what to send? Ask Clara for ideas and she comes back with ready-to-use campaign concepts based on your products, calendar, and what's been working.",
    },
    {
      icon: CalendarClock,
      title: "5 campaigns a week, fully done",
      desc: "Written, designed, on-brand, mobile-optimized, scheduled. Promotions, launches, seasonal sends, win-backs — you describe it in a sentence, she builds it.",
    },
    {
      icon: BarChart2,
      title: "Performance that improves every week",
      desc: "Clara monitors opens, clicks, and conversions across every send, with weekly check-ins on what's working and what she's adjusting. No dashboards to read.",
    },
    {
      icon: Bell,
      title: "Catches what you'd miss",
      desc: "Haven't emailed in 12 days? Clara notices before you do — she drafts a campaign and pings you. Revenue gaps don't stay gaps for long.",
    },
    {
      icon: Zap,
      title: "Connects in seconds",
      desc: "Klaviyo, Mailchimp, and more. One-click integration, zero migration — she plugs into your existing setup and starts working immediately.",
    },
    {
      icon: Sparkles,
      title: "Agency-quality design, no agency",
      desc: "Custom images, your brand colors and voice, mobile-optimized layouts. Every campaign she sends looks like a professional designed it.",
    },
  ],
  testimonials: [
    {
      quote:
        "Clara is basically my email marketing genius. I send a quick note like “populate my top 10 bestsellers and send it to my most engaged segments,” and within seconds the whole campaign is built and ready to go.",
      name: "Jay Hofstatter",
      title: "President, DailySale",
    },
    {
      quote:
        "Email is my main channel and I'm already in my inbox all day. Instead of logging into dashboards, I just send Clara a note or reply to one, and it's done. Much faster for the way I work.",
      name: "Jay Cha",
      title: "CEO, Efilow",
    },
  ],
  faqs: [
    {
      q: "How does the inbox workflow actually work?",
      a: "Send Clara a brief like “send my top 10 bestsellers to engaged customers, Valentine's angle, 15% off.” She builds the campaign in your Klaviyo or Mailchimp — subject line, copy, product images, segment, schedule. You get a preview, reply “approve,” and it sends. Want changes? Just tell her.",
    },
    {
      q: "What if I don't know what campaign to send?",
      a: "Just ask. Clara suggests 2–3 ready-to-use campaign ideas based on your product catalog, upcoming calendar dates, and what's performed well before. No brainstorming required — you pick one, she builds it.",
    },
    {
      q: "Do you actually build campaigns inside my platform?",
      a: "Yes. Clara creates the campaign directly in your Klaviyo or Mailchimp account — not a separate tool you export from. You can log in anytime and see exactly what she built. Your platform, your data, your control.",
    },
    {
      q: "How do you match my brand voice and design?",
      a: "During setup, Clara learns your brand by reviewing past campaigns, your website, and any guidelines you share. Then she applies your colors, fonts, logo, and writing style to every campaign. If something feels off, tell her and she'll adjust.",
    },
    {
      q: "What happens if I go quiet for a while?",
      a: "She notices. If it's been 12+ days since your last send, Clara pings you with a draft campaign ready to go. You don't have to remember to email — staying consistent is part of what she handles.",
    },
    {
      q: "How can I try it out?",
      a: "Click “Get started” anywhere on this page. Clara walks you through connecting your Klaviyo or Mailchimp (about 2 minutes), learns your brand, and you can send your first brief right away.",
    },
  ],
  ctaSubhead:
    "Brief her once from your inbox. Clara handles the campaigns while you focus on the business.",
};

// ── Angie — Ads Manager ──────────────────────────────────────────────────────
const angie: Agent = {
  key: "angie",
  name: "Angie",
  role: "Ads Manager",
  emoji: "📢",
  slug: "/ai-ads-manager",
  ...THEME,
  metaTitle: "Angie — Your AI Ads Manager for Meta & Google | Loraloop",
  metaDescription:
    "Angie plans, builds, and optimizes your paid campaigns across Meta and Google. She writes copy, generates creative, watches spend daily, and shifts budget to what works — you approve before anything goes live.",
  hero: {
    badge: "AI Ads Manager",
    tagline: "AI Ads Manager",
    subhead:
      "Angie plans, builds, and optimizes your paid campaigns across Meta and Google. She writes the copy, generates the creative, watches spend daily, and shifts budget to what's working. You approve. She launches.",
    trust: "Start free · Meta + Google · You approve every campaign",
  },
  compareHeading: "The old way vs. the Angie way",
  oldWayHeadline: "Boosting posts and hoping something sticks.",
  newWayHeadline: "Full-funnel campaigns, optimized 24/7.",
  oldWay: [
    "Boosting posts and hoping something sticks",
    "Ad copy and creative that take a week to produce",
    "Budget burning on audiences that don't convert",
    "No clear read on which ad drove the sale",
  ],
  newWay: [
    { text: "Full-funnel campaigns planned and launched for you", icon: Rocket },
    { text: "Ad copy and creative variants generated on brand", icon: Sparkles },
    { text: "Budget shifted daily toward the winning ads", icon: TrendingUp },
    { text: "Audiences and targeting tested continuously", icon: Target },
    { text: "Spend, ROAS, and CAC tracked in one place", icon: BarChart2 },
    { text: "Approve every campaign before a dollar is spent", icon: CheckCircle },
  ],
  stats: [
    { value: "↘ 32%", label: "lower cost per acquisition on average" },
    { value: "↗ 2.4×", label: "return on ad spend after optimization" },
  ],
  featuresHeading: "Paid campaigns, fully handled. You just approve.",
  featuresSub:
    "Angie runs the whole paid program — build, creative, optimization, and reporting — across Meta and Google, and never spends without your sign-off.",
  features: [
    {
      icon: Rocket,
      title: "Campaigns built end-to-end",
      desc: "Angie structures campaigns, ad sets, and audiences across Meta and Google — ready for your approval.",
    },
    {
      icon: Sparkles,
      title: "Copy + creative generated",
      desc: "On-brand headlines, primary text, and image and video variants produced for every ad.",
    },
    {
      icon: TrendingUp,
      title: "Daily budget optimization",
      desc: "Spend automatically flows to the ads and audiences that convert; the losers get paused.",
    },
    {
      icon: Target,
      title: "Audience testing",
      desc: "Angie runs structured tests on audiences, hooks, and formats to find what actually scales.",
    },
    {
      icon: BarChart2,
      title: "ROAS & CAC reporting",
      desc: "Clear numbers on spend, return, and cost per acquisition — no spreadsheet archaeology.",
    },
    {
      icon: CheckCircle,
      title: "Approval before spend",
      desc: "Nothing launches without your sign-off. Review the plan, the creative, and the budget first.",
    },
  ],
  testimonials: [
    {
      quote:
        "Angie cut our CAC by a third in the first month and I stopped living inside Ads Manager. I just approve her plans and she runs the rest.",
      name: "Ravi M.",
      title: "Founder, fitness brand",
    },
    {
      quote:
        "The creative variants are the unlock — she tests hooks we'd never have tried, then puts budget behind the winners automatically.",
      name: "Nina P.",
      title: "Growth lead",
    },
  ],
  faqs: [
    {
      q: "Which ad platforms does Angie run?",
      a: "Meta (Facebook and Instagram) and Google Ads, including search, performance, and social placements. Angie builds inside your own ad accounts, so billing and history stay with you.",
    },
    {
      q: "Does Angie make the creative too?",
      a: "Yes. Angie generates on-brand ad copy plus image and video variants for each ad, then tests them so budget flows to the creative that performs.",
    },
    {
      q: "How does the budget optimization work?",
      a: "Every day Angie reviews performance and reallocates spend toward the ads and audiences with the best return, pausing underperformers. You set the total budget and guardrails; she manages within them.",
    },
    {
      q: "Can I control spend and approve campaigns?",
      a: "Always. Nothing launches until you approve the plan, creative, and budget. You can set spend caps and adjust anytime — Angie never spends beyond your limits.",
    },
    {
      q: "What results should I expect?",
      a: "Most accounts see cost per acquisition fall and ROAS improve within the first few weeks as Angie tests creative and shifts budget to winners. Her reporting shows spend, return, and CAC so the impact is clear.",
    },
    {
      q: "Which platforms do you integrate with?",
      a: "Meta Ads, Google Ads, and your analytics stack, with more added regularly. Angie plugs into your existing accounts — no migration required.",
    },
  ],
  ctaSubhead:
    "Your AI ads manager for Meta and Google. Plan, launch, and optimize — you approve every campaign.",
};

// ── Roster ───────────────────────────────────────────────────────────────────
export const agents = { lora, angie, sophie, clara } as const;

/** Ordered roster for nav menus and the footer. */
export const agentList: Agent[] = [lora, angie, sophie, clara];
