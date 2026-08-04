import { useState } from "react";
import imgAgentBanner from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";
import CreditUsageBlock from "./CreditUsageBlock";

// ─── Types ────────────────────────────────────────────────────────────────────
type BillingPeriod = "monthly" | "annual";

interface Tier {
  credits?: number;
  compareAt?: number;
  prices: { monthly: number; annual: number };
}

interface Plan {
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
  /** Entry-level plan sold without the AI agent team — no banner, no credits. */
  noAgent?: boolean;
  /** Term discounts don't apply — the price stays flat on every billing period. */
  noDiscount?: boolean;
  tiers: Tier[];
  features: string[];
}

// ─── Plan data — mirrors apps/web/src/app/pricing/page.tsx exactly ────────────
// Lite (No AI Agent) is the entry tier; every AI Agent plan follows it.
const PLANS: Plan[] = [
  {
    id: "LITE",
    name: "Lite (No AI Agent)",
    description: "Entry plan — scheduling without AI agents",
    noAgent: true,
    noDiscount: true,
    // Flat $19 — the 12-month discount doesn't apply to Lite.
    tiers: [{ prices: { monthly: 19, annual: 19 } }],
    features: [
      "No AI agents included",
      "Up to 5 account integrations",
      "200 posts per month",
      "Schedule & calendar planning",
      "Human support",
    ],
  },
  {
    id: "STARTER",
    name: "Starter",
    description: "Solo creators, side hustlers, micro brands",
    tiers: [
      { credits: 100,  compareAt: 39,  prices: { monthly: 24.9, annual: 17  } },
      { credits: 250,  compareAt: 59,  prices: { monthly: 39,  annual: 27  } },
      { credits: 400,  compareAt: 79,  prices: { monthly: 59,  annual: 41  } },
    ],
    features: ["All 9 helpers", "100 monthly AI credits", "2 Seats", "3 Workspaces", "Support 24/7"],
  },
  {
    id: "GROWTH",
    name: "Growth",
    description: "Small brands, agencies, funded startups",
    highlighted: true,
    tiers: [
      { credits: 500,  compareAt: 99,  prices: { monthly: 79,  annual: 55  } },
      { credits: 750,  compareAt: 129, prices: { monthly: 99,  annual: 69  } },
      { credits: 900,  compareAt: 259, prices: { monthly: 199, annual: 139 } },
    ],
    features: ["All 9 helpers", "500 monthly AI credits", "5 Seats", "5 Workspaces", "Support 24/7"],
  },
  {
    id: "SCALE",
    name: "Scale",
    description: "Multi-brand, agencies managing clients",
    tiers: [
      { credits: 1100, compareAt: 199, prices: { monthly: 149, annual: 104 } },
      { credits: 2000, compareAt: 259, prices: { monthly: 199, annual: 139 } },
      { credits: 3000, compareAt: 389, prices: { monthly: 299, annual: 209 } },
    ],
    features: ["All 9 helpers", "1,100 monthly AI credits", "25 Seats", "10 Workspaces", "Support 24/7"],
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    description: "For teams needing AI coverage & governance",
    tiers: [
      { credits: 4500, compareAt: 499, prices: { monthly: 399, annual: 279 } },
      { credits: 5000, compareAt: 649, prices: { monthly: 499, annual: 349 } },
      { credits: 6000, compareAt: 799, prices: { monthly: 599, annual: 419 } },
    ],
    features: ["All 9 helpers", "4,500 monthly AI credits", "Unlimited Seats", "Unlimited Workspaces", "Priority Support 24/7"],
  },
];

const BILLING_OPTS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual",  label: "12-month", badge: "Save 30%" },
];

const APP_URL = "https://app.loraloop.com";

// ─── Agent banner card header ─────────────────────────────────────────────────
function CardHeader() {
  return (
    <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
      <img loading="lazy" decoding="async"
        src={imgAgentBanner}
        alt="AI Agent team"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />
      {/* Side vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #131313 0%, transparent 20%, transparent 80%, #131313 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-14"
        style={{ background: "linear-gradient(to top, #131313 0%, transparent 100%)" }}
      />
    </div>
  );
}

// ─── SVG checkmark (Figma style) ─────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-[1px]">
      <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Credit chips (3 pills per card) ─────────────────────────────────────────
function CreditChips({ plan, tierIdx, onChange }: {
  plan: Plan;
  tierIdx: number;
  onChange: (i: number) => void;
}) {
  const fmt = (c: number) => c >= 1000 ? `${c / 1000}k` : `${c}`;
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }} className="text-[15px] text-[#9CA3AF] leading-[20px]">
        Monthly credits
      </p>
      <div className="flex items-center gap-1.5 w-full">
        {plan.tiers.map((t, i) => {
          const active = i === tierIdx;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i)}
              style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
              className={`flex-1 py-[6px] rounded-[8px] text-[15px] tracking-[0.2px] border transition-all ${
                active
                  ? "border-white/20 text-[#D1D5DB] bg-white/[0.06]"
                  : "border-white/[0.07] text-[#6B7280] hover:text-[#9CA3AF] hover:border-white/15"
              }`}
            >
              {fmt(t.credits ?? 0)}
            </button>
          );
        })}
      </div>
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
  const [selectedTiers, setSelectedTiers] = useState<Record<string, number>>({
    LITE: 0, STARTER: 0, GROWTH: 0, SCALE: 0, ENTERPRISE: 0,
  });
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);

  function handleGetStarted(plan: Plan) {
    if (pendingPlanId === plan.id) return;
    setPendingPlanId(plan.id);
    const tierIdx = selectedTiers[plan.id] ?? 0;
    const url = new URL(`${APP_URL}/pricing`);
    url.searchParams.set("plan", plan.id);
    url.searchParams.set("tier", String(tierIdx));
    // Plans the term discount doesn't apply to always bill monthly, so don't
    // carry a 12-month selection over to the app.
    url.searchParams.set("period", plan.noDiscount ? "monthly" : period);
    window.location.href = url.toString();
  }

  return (
    <section className={`bg-black ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-20 pt-[40px] pb-[80px]">
        <div className="flex flex-col items-center gap-[42px]">

          {/* Title */}
          <h2
            style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
            className="text-[44px] text-white text-center tracking-[-0.8px] leading-[52px]"
          >
            Pricing
          </h2>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4">

            {/* Billing period toggle — Save badges float above each option so the
                two pills (Monthly / 12-month) always stay on one line */}
            <div className="relative pt-4">
              {/* Floating Save badges above each option */}
              <div className="absolute -top-0 left-0 right-0 flex items-center gap-[2px] px-[2px] pointer-events-none">
                {BILLING_OPTS.map((opt) => (
                  <div key={opt.id} className="flex-1 flex justify-center">
                    {opt.badge ? (
                      <span style={{
                        fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500,
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
              {/* Pill buttons — label only, no inline badge */}
              <div className="flex items-center gap-[2px] border border-[#374151] rounded-[12px] px-[2px] py-[1px]">
                {BILLING_OPTS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPeriod(opt.id)}
                    style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                    className={`flex-1 h-[36px] px-3 sm:px-4 rounded-[8px] text-[14px] sm:text-[18px] tracking-[0.21px] whitespace-nowrap transition-all ${
                      period === opt.id ? "bg-[#1877F2] text-white" : "text-white hover:bg-white/5"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Plan cards — stack vertically on mobile, 2-up on small screens, then
              3-up and 5-up (Lite + the four AI Agent plans) on wider screens.
              items-stretch so every card in a row matches the tallest one's height
              — the highlighted plan's "Most popular" badge is what usually sets it. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch gap-4 w-full">
            {PLANS.map((plan) => {
              const tierIdx = selectedTiers[plan.id] ?? 0;
              const tier    = plan.tiers[tierIdx];
              const price   = tier.prices[period];

              const cardInner = (
                <div style={{ background: "#131313", borderRadius: "inherit" }} className="flex flex-col w-full h-full">
                  {!plan.noAgent && <CardHeader />}
                  <div className={`flex flex-col gap-6 ${plan.noAgent ? "pt-7" : "pt-4"} px-5 pb-6`}>

                    {/* Name + desc */}
                    <div>
                      <p style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                        className="text-[18px] text-white tracking-[0.21px] leading-[24px]">
                        {plan.name}
                      </p>
                      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }}
                        className="text-[16px] text-[#9CA3AF] leading-[20px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price — compareAt struck through when present (AI plans) */}
                    <div className="flex items-baseline gap-2">
                      {tier.compareAt ? (
                        <span style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                          className="text-[22px] text-[#4B5563] line-through leading-[32px]">
                          ${tier.compareAt}
                        </span>
                      ) : null}
                      <span style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                        className="text-[24px] text-white leading-[32px]">
                        ${price % 1 !== 0 ? price.toFixed(2) : price}
                      </span>
                      <span style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                        className="text-[16px] text-[#6B7280] tracking-[0.6px] leading-[20px]">
                        /mo
                      </span>

                      {/* Term discounts don't apply to this plan — the price is
                          flat, so say so instead of showing an unchanged number */}
                      {plan.noDiscount && period !== "monthly" && (
                        <span style={{
                          fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500,
                          background: "#1A1A1A", border: "0.749px solid rgba(255,255,255,0.12)",
                          color: "#9CA3AF", fontSize: "11px", padding: "3px 8px",
                          borderRadius: "999px", lineHeight: "1", whiteSpace: "nowrap",
                        }}>
                          Not applicable
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => handleGetStarted(plan)}
                      disabled={pendingPlanId === plan.id}
                      style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                      className={`w-full h-[44px] rounded-full text-[18px] transition-all disabled:opacity-60 ${
                        plan.highlighted
                          ? "bg-[#1877F2] text-white hover:bg-[#0f66d0]"
                          : "bg-[#EEF4FF] text-[#1877F2] border border-[#D1D5DB] hover:bg-[#dce8ff]"
                      }`}
                    >
                      {pendingPlanId === plan.id ? "Loading…" : "Get Started"}
                    </button>

                    {/* Credit chips — AI-Agent plans only */}
                    {!plan.noAgent && (
                      <CreditChips
                        plan={plan}
                        tierIdx={tierIdx}
                        onChange={(i) => setSelectedTiers((s) => ({ ...s, [plan.id]: i }))}
                      />
                    )}

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckIcon />
                          <span style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                            className="text-[16px] text-[#D1D5DB] leading-[20px]">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );

              if (plan.highlighted) {
                return (
                  <div key={plan.id} className="flex flex-col items-center gap-2 h-full"
                    style={{ background: "#1877F2", borderRadius: "16px", padding: "8px 2px 2px" }}>
                    <p style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                      className="text-[16px] text-white tracking-[0.6px] leading-[20px]">
                      Most popular
                    </p>
                    <div className="w-full overflow-hidden flex-1"
                      style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "14px" }}>
                      {cardInner}
                    </div>
                  </div>
                );
              }

              return (
                <div key={plan.id} className="overflow-hidden h-full"
                  style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
                  {cardInner}
                </div>
              );
            })}
          </div>

          {/* ── Credit Usage — how far each plan's credits stretch (AI plans only) ── */}
          {showCreditUsage && (
            <div className="w-full pt-8 mt-2 border-t border-white/[0.06]">
              <CreditUsageBlock
                planCredits={PLANS.filter((p) => !p.noAgent)
                  .map((p) => ({ name: p.name, credits: p.tiers[0].credits ?? 0 }))}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
