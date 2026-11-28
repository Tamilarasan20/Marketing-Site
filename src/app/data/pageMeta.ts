/**
 * SEO metadata for the main (non-blog) pages. prerender.mjs writes each page's HTML with its
 * own title, description, canonical, H1, summary and JSON-LD, so crawlers and AI answer
 * engines no longer see the home page's generic tags on every route.
 *
 * `title` is used as "<title> | Loraloop" unless `fullTitle` is set; keep the result at or
 * under 60 characters. `h1` must match the H1 the React page renders.
 */
import { segments, SHARED_FAQ } from './segments';
import { META_AUDIT_ANSWER, META_AUDIT_DESCRIPTION, META_AUDIT_FAQ, META_AUDIT_H1, META_AUDIT_PATH, META_AUDIT_TITLE } from './metaAudit';

export interface PageMeta {
  path: string;
  title: string;
  /** Exact <title> when the page should not get the " | Loraloop" suffix (the home page). */
  fullTitle?: string;
  description: string;
  h1: string;
  summary: string;
  /** Plain links listed in the prerendered body so crawlers can follow them. */
  links?: { href: string; label: string }[];
  faq?: { q: string; a: string }[];
  /** Adds SoftwareApplication schema with the plan prices. */
  product?: boolean;
}

const AGENT_LINKS = [
  { href: '/ai-marketing-lead', label: 'Lora, AI Marketing Lead' },
  { href: '/ai-ads-manager', label: 'Angie, AI Ads Manager' },
  { href: '/ai-seo-geo-strategist', label: 'Sophie, AI SEO and GEO Strategist' },
  { href: '/ai-email-marketer', label: 'Clara, AI Email Marketer' },
];

const SEGMENT_META: PageMeta[] = segments.map((seg) => ({
  path: seg.slug,
  title: seg.title,
  description: seg.description,
  h1: `${seg.h1Lead} ${seg.h1Rest}`,
  summary: seg.answer,
  faq: [...seg.faq, ...SHARED_FAQ],
  links: [
    ...segments.filter((o) => o.slug !== seg.slug).map((o) => ({ href: o.slug, label: o.menuLabel })),
    { href: '/pricing', label: 'Pricing' },
  ],
}));

export const pageMeta: PageMeta[] = [
  ...SEGMENT_META,
  {
    path: META_AUDIT_PATH,
    title: META_AUDIT_TITLE,
    description: META_AUDIT_DESCRIPTION,
    h1: META_AUDIT_H1,
    summary: META_AUDIT_ANSWER,
    faq: META_AUDIT_FAQ,
    links: [
      { href: '/blog/creative-fatigue-meta-ads-detect-and-fix', label: 'Creative fatigue on Meta ads' },
      { href: '/blog/meta-ads-cpm-rising-how-to-lower-cost-per-result', label: 'Lower your Meta cost per result' },
      { href: '/for-media-buyers', label: 'Loraloop for media buyers' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    path: '/pricing',
    title: 'Pricing: Plans, Credits and Free Trial',
    description: 'Loraloop plans start at $39 a month (Starter), $99 (Pro) and $199 (Scale), 25% off annual. 3-day free trial, no credit card needed.',
    h1: 'Loraloop pricing',
    summary: 'Starter from $39 a month, Pro from $99 and Scale from $199, each with a set number of monthly credits and 25% off annual billing. Every plan starts with a 3-day free trial and no credit card. Enterprise plans are custom.',
    product: true,
    links: [{ href: '/', label: 'How Loraloop works' }, ...AGENT_LINKS],
  },
  {
    path: '/solution',
    title: 'AI Marketing Employees for Every Channel',
    description: 'Meet the AI employees behind Loraloop: a marketing lead, an ads manager, an SEO and GEO strategist and an email marketer that work as one team.',
    h1: 'AI marketing employees that work as one team',
    summary: 'Each Loraloop AI employee owns one marketing job and shares one brand knowledge base with the others, so strategy, ads, SEO, email and social read like one team.',
    links: AGENT_LINKS,
  },
  {
    path: '/ai-marketing-lead',
    title: 'Lora, the AI Marketing Lead for Lean Teams',
    description: 'Lora plans your marketing, coordinates the AI team and sends a daily briefing on ads, email, SEO and social. You approve every move.',
    h1: "Hi, I'm Lora, your autonomous AI Marketing Lead.",
    summary: 'Lora turns your goals and data into a weekly plan, hands work to the ads, SEO and email agents, and reports what shipped and how it performed each morning.',
    links: AGENT_LINKS.filter((l) => l.href !== '/ai-marketing-lead'),
  },
  {
    path: '/ai-ads-manager',
    title: 'Angie, the AI Ads Manager for Meta and Google',
    description: 'Angie generates and tests Meta and Google ad creative, checks your accounts daily and proposes budget changes for your approval.',
    h1: "Hi, I'm Angie, your AI Ads Manager.",
    summary: 'Angie builds ad creative, runs tests, watches cost per result and frequency every day, and proposes scaling or pausing with the reason. No budget changes without your sign-off.',
    links: [{ href: '/blog/meta-ads-creative-testing-framework-2026', label: 'Meta ads creative testing framework' }, ...AGENT_LINKS.filter((l) => l.href !== '/ai-ads-manager')],
  },
  {
    path: '/ai-seo-geo-strategist',
    title: 'Sophie, the AI SEO and GEO Strategist',
    description: 'Sophie researches keywords, writes articles that rank on Google and get cited by ChatGPT and Perplexity, and monitors technical SEO weekly.',
    h1: "Hi, I'm Sophie, your AI SEO & GEO Strategist.",
    summary: 'Sophie plans keywords every week, writes and optimizes articles for Google and AI search, adds internal links and sends a daily SEO and GEO scorecard.',
    links: [{ href: '/blog/geo-vs-seo-2026', label: 'GEO vs SEO in 2026' }, ...AGENT_LINKS.filter((l) => l.href !== '/ai-seo-geo-strategist')],
  },
  {
    path: '/ai-email-marketer',
    title: 'Clara, the AI Email Marketer for Klaviyo',
    description: 'Clara writes Klaviyo and Mailchimp campaigns and flows in your brand voice. Email her what you need, approve the draft and she sends it.',
    h1: "Hi, I'm Clara, your AI Email Marketer.",
    summary: 'Clara writes campaigns and automated flows for Klaviyo and Mailchimp in your brand voice. Tell her what you need, review the draft, and she sends it after your approval.',
    links: [{ href: '/blog/after-black-friday-retention-plan-shopify', label: 'After Black Friday: a 30-day retention plan' }, ...AGENT_LINKS.filter((l) => l.href !== '/ai-email-marketer')],
  },
  {
    path: '/tools',
    title: 'Free AI Marketing Tools and Calculators',
    description: 'Free AI tools for ad copy, hooks, product descriptions, blog titles and more, plus ROAS, hook rate and Google Ads budget calculators.',
    h1: 'Free AI marketing tools',
    summary: 'Free generators for ad copy, hooks, captions, product descriptions and blog content, and calculators for break-even ROAS, hook rate, creative testing and Google Ads budgets.',
    links: [{ href: '/tools/break-even-roas-calculator', label: 'Break-even ROAS calculator' }, { href: '/tools/hook-rate-calculator', label: 'Hook rate calculator' }, { href: '/tools/google-ads-budget-calculator', label: 'Google Ads budget calculator' }],
  },
  {
    path: '/about',
    title: 'About Loraloop',
    description: 'Loraloop builds an AI marketing team for lean marketing teams at scaling brands: ads, SEO, email and social, with human approval on every move.',
    h1: 'About Loraloop',
    summary: 'Loraloop builds AI agents that plan and run marketing for lean teams at scaling B2B SaaS, D2C, eCommerce and CPG brands and the agencies that serve them.',
  },
  {
    path: '/contact',
    title: 'Contact Loraloop',
    description: 'Questions about Loraloop, plans or a demo for your team or agency? Get in touch with the Loraloop team.',
    h1: 'Contact Loraloop',
    summary: 'Get in touch about plans, demos, agency partnerships or support.',
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description: 'The terms that govern your use of Loraloop: the platform, website, AI agents, APIs and related services.',
    h1: 'Terms of Service',
    summary: 'The terms of service for the Loraloop platform, website, AI agents and APIs.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How Loraloop collects, uses, stores and protects your personal data, and the choices you have.',
    h1: 'Privacy Policy',
    summary: 'How Loraloop collects, uses, stores and protects personal data.',
  },
  {
    path: '/data-deletion',
    title: 'User Data Deletion',
    description: 'How to delete your Loraloop account and data, including data from connected Meta and Facebook accounts.',
    h1: 'User Data Deletion',
    summary: 'How to request deletion of your Loraloop account and data, including data from connected Meta and Facebook accounts.',
  },
];
