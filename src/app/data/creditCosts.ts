/**
 * Canonical customer-facing credit-cost table (marketing site copy).
 *
 * MUST stay in sync with the main app's single source of truth at
 * apps/web/src/features/billing/lib/creditCosts.ts in the Loraloop-Main-App
 * repo — the same numbers power Settings → Billing & AI Credits, the in-app
 * pricing page, and this marketing pricing section.
 *
 * The values are calibrated to hold a ≥55% net profit margin after AI model
 * cost, infrastructure, third-party services and applicable taxes. Cost basis:
 *   • Image ≈ $0.02 (Nano Banana 2) → $0.04 (premium)
 *   • Video = Veo $0.35 / second → a 5–10 s clip costs $1.75–$3.50
 *   • Text  ≤ $0.06 (blog), cents for shorter output
 */

export interface CreditAction {
  label: string;
  creditsEach: number;
  note?: boolean;
}

export const CREDIT_ACTIONS: CreditAction[] = [
  { label: "Social post", creditsEach: 1 },
  { label: "Image generation (standard)", creditsEach: 1 },
  { label: "Chat message / task execution", creditsEach: 1 },
  { label: "Apollo lookup", creditsEach: 1, note: true },
  { label: "Image generation (HD / premium)", creditsEach: 2 },
  { label: "Ad creative", creditsEach: 2 },
  { label: "Blog article", creditsEach: 2 },
  { label: "Video script & storyboard", creditsEach: 2 },
  { label: "Email campaign", creditsEach: 3 },
  { label: "TikTok slideshow", creditsEach: 3 },
  { label: "SEO/GEO article — research, brief & draft", creditsEach: 5 },
  { label: "Generated ad — creative, copy & campaign draft", creditsEach: 10 },
  { label: "Video render — short clip (≤6s)", creditsEach: 75, note: true },
  { label: "Video render — premium clip (≤10s)", creditsEach: 150 },
];

export const CREDIT_FOOTNOTES: string[] = [
  "Video render credits apply only when Loraloop generates a real AI video clip. Drafting the script & storyboard costs just 2 credits; premium or longer clips (up to 10s) use 150 credits.",
  "Apollo lookups (people/company search and enrichment) cost 1 credit each; revealing a contact's email costs +1 credit and a phone number +3.",
];

/**
 * One tangible output per Loraloop capability (Ads, Social posts, SEO/GEO,
 * Email marketing) — single-capability maximums; credits are shared.
 */
export interface CreditYield {
  capability: string;
  label: string;
  cost: number;
  icon: string;
  /** Not on sale yet — rendered as "Coming soon" instead of a count. */
  comingSoon?: boolean;
}

export const CREDIT_YIELDS: CreditYield[] = [
  // Generated ad = creative + copy + campaign draft (10 credits), so 300 credits ≈ 30 ads.
  { capability: "Ads", label: "Generated ads", cost: 10, icon: "📣" },
  // A social post (1) with its generated image (1).
  { capability: "Social posts", label: "Social posts with image", cost: 2, icon: "📝" },
  { capability: "SEO / GEO", label: "SEO/GEO articles", cost: 5, icon: "🔎" },
  { capability: "Email marketing", label: "Email campaigns", cost: 3, icon: "📧", comingSoon: true },
];

export function creditsToUnits(credits: number, cost: number): number {
  if (cost <= 0) return 0;
  return Math.floor(credits / cost);
}
