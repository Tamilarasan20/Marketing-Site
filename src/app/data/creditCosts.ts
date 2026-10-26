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
  /** Credits per successful action (the low end when it varies). */
  creditsEach: number;
  /** High end for an action whose cost varies, shown as "1–4 credits". */
  creditsMax?: number;
  note?: boolean;
}

export const CREDIT_ACTIONS: CreditAction[] = [
  { label: "Social post", creditsEach: 1 },
  { label: "Chat message / task execution", creditsEach: 1, creditsMax: 4, note: true },
  { label: "Apollo lookup", creditsEach: 1, note: true },
  { label: "Blog article", creditsEach: 2 },
  { label: "Video script & storyboard", creditsEach: 2 },
  { label: "Image generation (standard)", creditsEach: 2 },
  { label: "Email campaign", creditsEach: 3 },
  { label: "In-depth strategy chat", creditsEach: 3 },
  { label: "Image generation (HD / premium)", creditsEach: 3 },
  { label: "Ad creative", creditsEach: 3 },
  { label: "SEO/GEO article — research, brief & draft", creditsEach: 5 },
  { label: "TikTok slideshow", creditsEach: 9 },
  { label: "Generated ad — creative, copy & campaign draft", creditsEach: 10 },
  { label: "Video render — short clip (≤6s)", creditsEach: 50, note: true },
  { label: "Video render — premium clip (≤10s)", creditsEach: 80 },
];

export const CREDIT_FOOTNOTES: string[] = [
  "A chat or task uses 1 credit per AI step. Most take 1–4 steps; longer tasks can use more.",
  "Finding a lead costs 1 credit. Revealing their email costs 1 more, and a phone number 3 more.",
  "Video credits are used only when a clip is actually made. Writing the script costs 2 credits.",
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
  // Generated ad = creative + copy + campaign draft (10 credits), so 700 credits ≈ 70 ads.
  { capability: "Ads", label: "Generated ads", cost: 10, icon: "📣" },
  // A social post (1) with its generated image (2).
  { capability: "Social posts", label: "Social posts with image", cost: 3, icon: "📝" },
  { capability: "SEO / GEO", label: "SEO/GEO articles", cost: 5, icon: "🔎" },
  { capability: "Email marketing", label: "Email campaigns", cost: 3, icon: "📧" },
];

export function creditsToUnits(credits: number, cost: number): number {
  if (cost <= 0) return 0;
  return Math.floor(credits / cost);
}
