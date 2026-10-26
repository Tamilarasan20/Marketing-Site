import { useState } from "react";
import { Sparkles } from "lucide-react";
import imgAgentBanner from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";
import CreditUsageBlock from "./CreditUsageBlock";
import PlanPicker from "./PlanPicker";

// ─── Types ────────────────────────────────────────────────────────────────────
type BillingPeriod = "monthly" | "annual";

interface Tier {
  /** Monthly AI credits. */
  credits: number;
  /** USD: monthly = per month; annual = per year (25% off: 12 × monthly × 0.75). */
  prices: { monthly: number; annual: number };
}

/** Extra team seats on Pro and Scale, as Enrich Labs: +200 credits a seat. */
interface SeatAddon {
  creditsPerSeat: number;
  max: number;
  prices: { monthly: number; annual: number };
}

interface FeatureGroup {
  title: string;
  items: string[];
  /** Named agents shown as pills above the items (Enterprise). */
  chips?: { name: string; role: string }[];
}

interface Plan {
  /** App plan key (Pro is GROWTH in the app). */
  id: "STARTER" | "GROWTH" | "SCALE";
  name: string;
  badge?: string;
  description: string;
  /** Seats · brands line under the price. */
  meta: string;
  highlighted?: boolean;
  seatAddon?: SeatAddon;
  tiers: Tier[];
  featuresIntro: string;
  features: FeatureGroup[];
}

const fmtNum = (n: number) => n.toLocaleString("en-US");

const SEAT_ADDON: SeatAddon = { creditsPerSeat: 200, max: 10, prices: { monthly: 39, annual: 351 } };

// ─── Plan data — mirrors apps/web/src/features/billing/lib/plans.ts in Loraloop-Main-App ───
// Starter is social, content and SEO/GEO only; paid ads and email marketing start on Pro.
const PLANS: Plan[] = [
  {
    id: "STARTER",
    name: "Starter",
    badge: "Essentials",
    description: "For founders and small brands growing on social and search.",
    meta: "1 seat · 3 brands",
    tiers: [
      { credits: 200, prices: { monthly: 39, annual: 351 } },
      { credits: 300, prices: { monthly: 59, annual: 531 } },
      { credits: 400, prices: { monthly: 79, annual: 711 } },
    ],
    featuresIntro: "Key features",
    features: [
      { title: "SEO / GEO", items: ["SEO articles that wait for your OK before going live", "Written to be quoted in AI answers"] },
      { title: "Strategy & insights", items: ["A marketing plan based on your own numbers", "Gets sharper with every result", "A daily briefing from Lora", "Live performance dashboard"] },
      { title: "Social & content", items: ["Posts for 19 channels on one calendar", "Brand knowledge base built from your site", "Short AI videos, carousels and TikTok slideshows", "Ad and post inspiration from top brands"] },
      { title: "Integrations", items: ["Work with Loraloop from Claude or ChatGPT", "Shopify & Google Analytics"] },
    ],
  },
  {
    id: "GROWTH",
    name: "Pro",
    description: "For DTC and Shopify brands running paid ads.",
    meta: "2 seats · 5 brands",
    highlighted: true,
    seatAddon: SEAT_ADDON,
    tiers: [
      { credits: 700,  prices: { monthly: 99,  annual: 891 } },
      { credits: 900,  prices: { monthly: 129, annual: 1161 } },
      { credits: 1100, prices: { monthly: 159, annual: 1431 } },
    ],
    featuresIntro: "Everything in Starter, plus",
    features: [
      { title: "Paid ads: Google, Meta, TikTok & LinkedIn", items: ["Spend caps that protect your budget", "Flags tired creatives and wasted spend", "Ads go live only when you approve"] },
      { title: "Email marketing", items: ["Campaigns and flows in Mailchimp or Klaviyo", "Email campaigns written in your brand voice"] },
      { title: "Advanced SEO", items: ["Technical site health checks", "Auto-publish to WordPress or Webflow"] },
      { title: "Market intelligence", items: ["Competitor ad tracking with alerts", "Daily ads report with clear next steps"] },
      { title: "Built-in quality checks", items: ["Every ad checked against your brand before review", "Scheduled campaign reviews by Angie"] },
      { title: "Team", items: ["Shared team workspace, add seats anytime", "Updates in Slack, Teams or Discord"] },
      { title: "Video studio", items: ["Product video ads from your own photos", "Presenter-led ads with AI presenters"] },
    ],
  },
  {
    id: "SCALE",
    name: "Scale",
    badge: "Multi-brand",
    description: "For agencies and teams running many brands.",
    meta: "5 seats · unlimited brands",
    seatAddon: SEAT_ADDON,
    tiers: [
      { credits: 2000, prices: { monthly: 199, annual: 1791 } },
      { credits: 3000, prices: { monthly: 299, annual: 2691 } },
      { credits: 4000, prices: { monthly: 399, annual: 3591 } },
    ],
    featuresIntro: "Everything in Pro, plus",
    features: [
      { title: "For agencies", items: ["Unlimited brands from one login", "A separate workspace for every client", "Check every client's ads in one view"] },
      { title: "Client reporting", items: ["Client-ready reports on a schedule", "Reports sent straight to each client"] },
      { title: "More room to grow", items: ["Bigger credit pools, plus top-ups any time"] },
      { title: "Support", items: ["Priority support"] },
    ],
  },
];

const ENTERPRISE_FEATURES: FeatureGroup[] = [
  {
    title: "Your full agent team",
    chips: [
      { name: "Lora", role: "Strategy & social" },
      { name: "Angie", role: "Paid ads" },
      { name: "Sophie", role: "SEO & GEO" },
      { name: "Clara", role: "Email" },
    ],
    items: ["Lora runs the plan, each specialist owns a channel", "Top-tier AI models on every task"],
  },
  { title: "Your stack", items: ["Custom integrations & API", "Agents inside your own Slack or Teams"] },
  { title: "Expert help", items: ["Brand voice tuned on your own content", "A dedicated success manager", "Hands-on onboarding for your team"] },
  { title: "Governance", items: ["Unlimited brands and seats", "Approval rules for every brand and teammate", "Agreed response times (SLA)"] },
];

const BILLING_OPTS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual",  label: "Annual", badge: "Save 25%" },
];

const formatUsd = (n: number) => `$${n % 1 !== 0 ? n.toFixed(2) : fmtNum(n)}`;

const APP_URL = "https://app.loraloop.com";
// New accounts start a 3-day free trial with no card; plans are picked in the app.
const TRIAL_URL = `${APP_URL}/signup`;

// One row of four cards: side by side from lg up; narrower screens swipe the row.
const CARD_SLOT = "snap-start shrink-0 w-[84%] max-w-[340px] sm:w-[300px] lg:w-auto lg:max-w-none";

const sat = { fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 } as const;
const gen = { fontFamily: "General Sans, Inter, sans-serif" } as const;

// ─── Agent banner card header ─────────────────────────────────────────────────
function CardHeader() {
  return (
    <div className="relative h-[110px] w-full shrink-0 overflow-hidden">
      <img loading="lazy" decoding="async"
        src={imgAgentBanner}
        alt="AI Agent team"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #131313 0%, transparent 20%, transparent 80%, #131313 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-14"
        style={{ background: "linear-gradient(to top, #131313 0%, transparent 100%)" }} />
    </div>
  );
}

// ─── SVG checkmark (Figma style) ─────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-[3px]">
      <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanBadge({ label }: { label: string }) {
  return (
    <span style={{ ...gen, fontWeight: 500 }}
      className="inline-block mb-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-[#9CA3AF]">
      {label}
    </span>
  );
}

function Features({ intro, groups }: { intro: string; groups: FeatureGroup[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p style={{ ...gen, fontWeight: 500 }} className="text-[13px] text-[#9CA3AF] leading-[18px]">{intro}</p>
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-1.5">
          <p style={sat} className="text-[13px] text-[#E5E7EB]">{group.title}</p>
          {group.chips && (
            <div className="flex flex-wrap gap-1.5 pb-0.5">
              {group.chips.map((chip) => (
                <span key={chip.name} style={{ ...gen, fontWeight: 500 }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[12px] leading-[16px] text-[#9CA3AF]">
                  <span className="font-semibold text-[#E5E7EB]">{chip.name}</span> · {chip.role}
                </span>
              ))}
            </div>
          )}
          {group.items.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <CheckIcon />
              <span style={{ ...gen, fontWeight: 500 }} className="text-[14px] leading-[19px] text-[#D1D5DB]">{f}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Main pricing section ─────────────────────────────────────────────────────
export default function PricingSection({
  className = "",
  showCreditUsage = true,
}: {
  className?: string;
  /** Renders the Credit Usage breakdown below the plans. On by default so pricing
   *  stays consistent everywhere; pass false to hide it on a given surface. */
  showCreditUsage?: boolean;
}) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  // Credit tier + extra seats picked on each card, keyed by plan id.
  const [selection, setSelection] = useState<Record<string, { tierIdx: number; extraSeats: number }>>({});
  const selectionOf = (plan: Plan) => selection[plan.id] ?? { tierIdx: 0, extraSeats: 0 };
  const pick = (plan: Plan, change: Partial<{ tierIdx: number; extraSeats: number }>) =>
    setSelection((prev) => ({ ...prev, [plan.id]: { ...selectionOf(plan), ...change } }));

  return (
    <section className={`bg-black ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-[46px] pt-[40px] pb-[80px]">
        <div className="flex flex-col items-center gap-[42px]">

          {/* Title */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 style={sat} className="text-[36px] md:text-[44px] text-white tracking-[-0.8px] leading-tight">
              Pricing
            </h2>
            <p style={gen} className="max-w-[560px] text-[16px] text-[#9CA3AF] leading-relaxed">
              Your AI marketing team for ads, social and SEO. Start with a 3-day free trial: no card needed, cancel anytime.
            </p>
          </div>

          {/* Billing period toggle — the "Save 25%" badge floats above Annual */}
          <div className="relative pt-4">
            <div className="absolute -top-0 left-0 right-0 flex items-center gap-[2px] px-[2px] pointer-events-none">
              {BILLING_OPTS.map((opt) => (
                <div key={opt.id} className="flex-1 flex justify-center">
                  {opt.badge ? (
                    <span style={{
                      ...gen, fontWeight: 500,
                      background: "#151109", border: "0.749px solid rgba(213,165,91,0.4)",
                      color: "#D5A55B", fontSize: "11px", padding: "3px 8px",
                      borderRadius: "999px", lineHeight: "1", whiteSpace: "nowrap",
                    }}>
                      {opt.badge}
                    </span>
                  ) : <span />}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[2px] border border-[#374151] rounded-[12px] px-[2px] py-[1px]">
              {BILLING_OPTS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPeriod(opt.id)}
                  style={sat}
                  className={`flex-1 h-[34px] px-3 sm:px-4 rounded-[8px] text-[14px] sm:text-[15px] tracking-[0.21px] whitespace-nowrap transition-all ${
                    period === opt.id ? "bg-[#1877F2] text-white" : "text-white hover:bg-white/5"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards — Starter / Pro / Scale / Enterprise in one row (swipes sideways below lg) */}
          <div className="flex lg:grid lg:grid-cols-4 items-stretch gap-4 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0">
            {PLANS.map((plan) => {
              const { tierIdx, extraSeats } = selectionOf(plan);
              const tier = plan.tiers[tierIdx];
              const seatAddon = plan.seatAddon;
              const seatCost = (p: BillingPeriod) => extraSeats * (seatAddon?.prices[p] ?? 0);
              const monthly = tier.prices.monthly + seatCost("monthly");
              const annual = tier.prices.annual + seatCost("annual");
              // Annual shows its monthly equivalent; the yearly charge goes underneath.
              const price = period === "annual" ? annual / 12 : monthly;
              const seatCredits = extraSeats * (seatAddon?.creditsPerSeat ?? 0);
              const credits = tier.credits + seatCredits;
              const perMonth = (p: { monthly: number; annual: number }) => (period === "annual" ? p.annual / 12 : p.monthly);
              const creditOptions = plan.tiers.map((t, i) => ({
                value: i,
                label: `${fmtNum(t.credits)} credits — ${formatUsd(perMonth(t.prices))}/mo`,
              }));
              const seatOptions = seatAddon
                ? Array.from({ length: seatAddon.max + 1 }, (_, extra) => ({
                    value: extra,
                    label: extra === 0
                      ? "No additional seats"
                      : `${extra} extra seat${extra === 1 ? "" : "s"} — +${formatUsd(extra * perMonth(seatAddon.prices))}/mo (+${fmtNum(extra * seatAddon.creditsPerSeat)} credits)`,
                  }))
                : [{ value: 0, label: "1 seat included" }];

              const cardInner = (
                <div style={{ background: "#131313", borderRadius: "inherit" }} className="flex flex-col w-full h-full">
                  <CardHeader />
                  <div className="flex flex-col gap-5 pt-4 px-5 pb-6">

                    {/* Badge + name + desc */}
                    <div>
                      {plan.badge && <PlanBadge label={plan.badge} />}
                      <p style={sat} className="text-[17px] text-white tracking-[0.21px] leading-[22px]">{plan.name}</p>
                      <p style={gen} className="text-[14px] text-[#9CA3AF] leading-[19px]">{plan.description}</p>
                    </div>

                    {/* Price — per month; on annual, the monthly equivalent and the yearly charge */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        {period === "annual" && (
                          <span style={sat} className="text-[16px] text-[#6B7280] line-through leading-[32px]">{formatUsd(monthly)}</span>
                        )}
                        <span style={sat} className="text-[24px] text-white leading-[32px]">{formatUsd(price)}</span>
                        <span style={{ ...gen, fontWeight: 500 }} className="text-[13px] text-[#6B7280] tracking-[0.4px] leading-[20px]">/mo</span>
                      </div>
                      {period === "annual" && (
                        <p style={gen} className="text-[12px] text-[#9CA3AF] leading-[16px]">Billed {formatUsd(annual)} yearly</p>
                      )}
                      <p style={gen} className="text-[13px] text-[#9CA3AF] leading-[18px]">{plan.meta}</p>
                    </div>

                    {/* Total AI credits a month — the plan's credits plus any extra seats' */}
                    <div className="rounded-[12px] border border-[#1877F2]/30 bg-[#1877F2]/[0.08] px-3.5 py-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 shrink-0 text-[#60A5FA]" />
                        <span style={sat} className="text-[15px] text-white leading-[20px]">{fmtNum(credits)} AI credits a month</span>
                      </div>
                      <p style={gen} className="mt-1 text-[12px] text-[#9CA3AF] leading-[16px]">
                        {extraSeats > 0
                          ? `${fmtNum(tier.credits)} plan credits + ${fmtNum(seatCredits)} from extra seats`
                          : "Shared by your whole team, refreshed every month"}
                      </p>
                    </div>

                    {/* Monthly credits + team seats */}
                    <div className="flex flex-col gap-2.5">
                      <PlanPicker
                        label="Monthly credits"
                        value={tierIdx}
                        options={creditOptions}
                        onChange={(i) => pick(plan, { tierIdx: i })}
                      />
                      <PlanPicker
                        label={seatAddon ? "Additional team seats" : "Team seats"}
                        value={extraSeats}
                        options={seatOptions}
                        onChange={seatAddon ? (n) => pick(plan, { extraSeats: n }) : undefined}
                      />
                    </div>

                    {/* CTA — every account starts with the free trial */}
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={TRIAL_URL}
                        style={sat}
                        className={`w-full h-[40px] inline-flex items-center justify-center rounded-full text-[15px] transition-all ${
                          plan.highlighted
                            ? "bg-[#1877F2] text-white hover:bg-[#0f66d0]"
                            : "bg-[#EEF4FF] text-[#1877F2] border border-[#D1D5DB] hover:bg-[#dce8ff]"
                        }`}
                      >
                        Start your 3-day free trial
                      </a>
                      <p style={gen} className="text-[12px] text-[#9CA3AF] text-center leading-[16px]">No card needed · cancel anytime</p>
                    </div>

                    <Features intro={plan.featuresIntro} groups={plan.features} />
                  </div>
                </div>
              );

              if (plan.highlighted) {
                return (
                  <div key={plan.id} className={`flex flex-col items-center gap-2 ${CARD_SLOT}`}
                    style={{ background: "#1877F2", borderRadius: "16px", padding: "8px 2px 2px" }}>
                    <p style={{ ...gen, fontWeight: 500 }} className="text-[13px] text-white tracking-[0.4px] leading-[18px]">Most popular</p>
                    <div className="w-full overflow-hidden flex-1"
                      style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "14px" }}>
                      {cardInner}
                    </div>
                  </div>
                );
              }

              return (
                <div key={plan.id} className={`overflow-hidden ${CARD_SLOT}`}
                  style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
                  {cardInner}
                </div>
              );
            })}

            {/* Enterprise — sales-led, same look as the plan cards */}
            <div className={`overflow-hidden ${CARD_SLOT}`}
              style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
              <div style={{ background: "#131313", borderRadius: "inherit" }} className="flex flex-col w-full h-full">
                <CardHeader />
                <div className="flex flex-col gap-5 pt-4 px-5 pb-6">
                  <div>
                    <PlanBadge label="Tailored" />
                    <p style={sat} className="text-[17px] text-white tracking-[0.21px] leading-[22px]">Enterprise</p>
                    <p style={gen} className="text-[14px] text-[#9CA3AF] leading-[19px]">For larger teams with many brands or custom needs.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span style={sat} className="text-[24px] text-white leading-[32px]">Custom</span>
                    <p style={gen} className="text-[13px] text-[#9CA3AF] leading-[18px]">Billed annually · tailored plan</p>
                  </div>
                  <div className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3.5 py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 shrink-0 text-[#9CA3AF]" />
                      <span style={sat} className="text-[15px] text-white leading-[20px]">Custom AI credits a month</span>
                    </div>
                    <p style={gen} className="mt-1 text-[12px] text-[#9CA3AF] leading-[16px]">Sized to your team and brands</p>
                  </div>
                  <a href="/contact" style={sat}
                    className="w-full h-[40px] inline-flex items-center justify-center rounded-full text-[15px] bg-white text-black hover:bg-gray-200 transition-all">
                    Contact sales
                  </a>
                  <Features intro="Everything in Scale, plus" groups={ENTERPRISE_FEATURES} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Credit Usage — how far each plan's credits stretch ── */}
          {showCreditUsage && (
            <div className="w-full pt-8 mt-2 border-t border-white/[0.06]">
              <CreditUsageBlock
                planCredits={PLANS.flatMap((p) =>
                  p.tiers.map((t) => ({
                    name: p.name,
                    credits: t.credits,
                    // Starter has no paid ads or email marketing.
                    excludes: p.id === "STARTER" ? ["Ads", "Email marketing"] : [],
                  })))}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
