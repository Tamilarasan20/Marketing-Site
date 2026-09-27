import { useEffect, useState } from "react";
import imgAgentBanner from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";
import CreditUsageBlock from "./CreditUsageBlock";
import { CREDIT_YIELDS, creditsToUnits } from "../data/creditCosts";

// ─── Types ────────────────────────────────────────────────────────────────────
type BillingPeriod = "monthly" | "annual";

interface Tier {
  /** Monthly AI credits — per seat on a per-seat plan. */
  credits: number;
  /** USD: monthly = per month; annual = per year (10× monthly, 2 months free). */
  prices: { monthly: number; annual: number };
}

interface FeatureGroup {
  title: string;
  items: string[];
  comingSoon?: boolean;
}

interface Plan {
  /** App plan key (Pro is GROWTH in the app). */
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
  /** Priced per seat; the seat count is carried to the app checkout. */
  perSeat?: { min: number; max: number };
  tiers: Tier[];
  featuresIntro?: string;
  features: (credits: number) => FeatureGroup[];
}

const fmtNum = (n: number) => n.toLocaleString("en-US");

const yieldLine = (capability: string, credits: number) => {
  const y = CREDIT_YIELDS.find((c) => c.capability === capability);
  return y ? `~${fmtNum(creditsToUnits(credits, y.cost))} ${y.label.toLowerCase()} / month` : "";
};

/** The capability split every plan shares: Ads, Social posts, SEO/GEO, Email (coming soon). */
function capabilityGroups(
  credits: number,
  extra: { ads?: string[]; social?: string[]; seo?: string[] } = {},
): FeatureGroup[] {
  return [
    { title: "Ads", items: [yieldLine("Ads", credits), ...(extra.ads ?? [])] },
    { title: "Social posts", items: [yieldLine("Social posts", credits), ...(extra.social ?? [])] },
    { title: "SEO / GEO", items: [yieldLine("SEO / GEO", credits), ...(extra.seo ?? [])] },
    { title: "Email marketing", items: ["Coming soon"], comingSoon: true },
  ];
}

// ─── Plan data — mirrors apps/web/src/features/billing/lib/plans.ts exactly ───
const PLANS: Plan[] = [
  {
    id: "STARTER",
    name: "Starter",
    description: "Solo founders and small brands getting ads live",
    tiers: [{ credits: 300, prices: { monthly: 39, annual: 390 } }],
    features: (credits) => [
      ...capabilityGroups(credits, {
        ads: ["Ad animation", "Basic competitor ad tracking"],
        social: ["Scheduling & content calendar"],
        seo: ["Keyword research & AI search (GEO) optimisation"],
      }),
      { title: "Team", items: ["1 seat", "3 workspaces"] },
    ],
  },
  {
    id: "GROWTH",
    name: "Pro",
    description: "Growing teams running ads, social and SEO together",
    highlighted: true,
    tiers: [
      { credits: 1000, prices: { monthly: 99,  annual: 990  } },
      { credits: 1750, prices: { monthly: 149, annual: 1490 } },
      { credits: 2500, prices: { monthly: 199, annual: 1990 } },
    ],
    featuresIntro: "Everything in Starter, plus",
    features: (credits) => [
      ...capabilityGroups(credits),
      { title: "Team", items: ["Collaborative brand boards", "Multi-seat team access (5 seats)", "5 workspaces"] },
    ],
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    description: "Large-scale operations with custom integrations",
    perSeat: { min: 3, max: 500 },
    tiers: [{ credits: 1000, prices: { monthly: 99, annual: 990 } }],
    featuresIntro: "Everything in Pro, plus",
    features: (credits) => [
      ...capabilityGroups(credits),
      { title: "Team & platform", items: ["1,000 AI credits per seat", "Custom platform integrations", "Unlimited workspaces", "Priority support"] },
    ],
  },
];

const BILLING_OPTS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual",  label: "Annual", badge: "2 months free" },
];

const formatUsd = (n: number) => `$${n % 1 !== 0 ? n.toFixed(2) : fmtNum(n)}`;

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
              {fmt(t.credits)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Seat picker — per-seat plans (Enterprise) ───────────────────────────────
function SeatPicker({ plan, seats, onChange }: {
  plan: Plan;
  seats: number;
  onChange: (n: number) => void;
}) {
  const { min, max } = plan.perSeat!;
  const set = (n: number) => onChange(Math.max(min, Math.min(max, Math.round(n) || min)));
  // Typed value is clamped on blur/Enter, so "12" isn't clamped at the "1".
  const [draft, setDraft] = useState(String(seats));
  useEffect(() => setDraft(String(seats)), [seats]);
  const commit = () => { set(Number(draft)); setDraft(String(seats)); };
  const btn = "h-[34px] w-[40px] flex items-center justify-center rounded-[8px] border border-white/[0.07] text-[#9CA3AF] text-[18px] hover:border-white/15 disabled:opacity-40";
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }} className="text-[15px] text-[#9CA3AF] leading-[20px]">
        Seats (min {min})
      </p>
      <div className="flex items-center gap-1.5 w-full">
        <button type="button" onClick={() => set(seats - 1)} disabled={seats <= min} aria-label="Remove a seat" className={btn}>−</button>
        <input
          type="number" min={min} max={max} value={draft} aria-label="Seats"
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => { if (e.key === "Enter") commit(); }}
          style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
          className="flex-1 min-w-0 h-[34px] rounded-[8px] border border-white/20 bg-white/[0.06] text-center text-[15px] text-[#D1D5DB] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button type="button" onClick={() => set(seats + 1)} disabled={seats >= max} aria-label="Add a seat" className={btn}>+</button>
      </div>
      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }} className="text-[13px] text-[#6B7280] leading-[18px]">
        {fmtNum(plan.tiers[0].credits * seats)} AI credits / month
      </p>
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
    STARTER: 0, GROWTH: 0, ENTERPRISE: 0,
  });
  const [seats, setSeats] = useState<Record<string, number>>(() =>
    Object.fromEntries(PLANS.filter((p) => p.perSeat).map((p) => [p.id, p.perSeat!.min])),
  );
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);

  function handleGetStarted(plan: Plan) {
    if (pendingPlanId === plan.id) return;
    setPendingPlanId(plan.id);
    const tierIdx = selectedTiers[plan.id] ?? 0;
    const url = new URL(`${APP_URL}/pricing`);
    url.searchParams.set("plan", plan.id);
    url.searchParams.set("tier", String(tierIdx));
    url.searchParams.set("period", period);
    if (plan.perSeat) url.searchParams.set("seats", String(seats[plan.id] ?? plan.perSeat.min));
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

            {/* Billing period toggle — the "2 months free" badge floats above the
                option so the two pills (Monthly / Annual) always stay on one line */}
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

          {/* Plan cards — Starter / Pro / Enterprise: stack on mobile, 3-up on wider
              screens. items-stretch so every card in a row matches the tallest
              one's height — the "Most popular" badge is what usually sets it. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-4 w-full max-w-[1100px]">
            {PLANS.map((plan) => {
              const tierIdx   = selectedTiers[plan.id] ?? 0;
              const tier      = plan.tiers[tierIdx];
              const seatCount = plan.perSeat ? (seats[plan.id] ?? plan.perSeat.min) : 1;
              const price     = tier.prices[period];
              const credits   = tier.credits * seatCount;

              const cardInner = (
                <div style={{ background: "#131313", borderRadius: "inherit" }} className="flex flex-col w-full h-full">
                  <CardHeader />
                  <div className="flex flex-col gap-6 pt-4 px-5 pb-6">

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

                    {/* Price — per month, or per year on annual billing (per seat on Enterprise) */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                          className="text-[24px] text-white leading-[32px]">
                          {formatUsd(price)}
                        </span>
                        <span style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                          className="text-[16px] text-[#6B7280] tracking-[0.6px] leading-[20px]">
                          {plan.perSeat ? "/seat" : ""}{period === "annual" ? "/yr" : "/mo"}
                        </span>
                      </div>
                      {(period === "annual" || plan.perSeat) && (
                        <p style={{ fontFamily: "General Sans, Inter, sans-serif" }}
                          className="text-[13px] text-[#9CA3AF] leading-[18px]">
                          {plan.perSeat && `${formatUsd(price * seatCount)}${period === "annual" ? "/yr" : "/mo"} for ${seatCount} seats`}
                          {plan.perSeat && period === "annual" && " · "}
                          {period === "annual" && "2 months free vs monthly"}
                        </p>
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

                    {/* Credits — tier chips (Pro), seat picker (Enterprise) or a fixed allowance (Starter) */}
                    {plan.perSeat ? (
                      <SeatPicker
                        plan={plan}
                        seats={seatCount}
                        onChange={(n) => setSeats((s) => ({ ...s, [plan.id]: n }))}
                      />
                    ) : plan.tiers.length > 1 ? (
                      <CreditChips
                        plan={plan}
                        tierIdx={tierIdx}
                        onChange={(i) => setSelectedTiers((s) => ({ ...s, [plan.id]: i }))}
                      />
                    ) : (
                      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }}
                        className="text-[15px] text-[#9CA3AF] leading-[20px] text-center">
                        {fmtNum(credits)} AI credits / month
                      </p>
                    )}

                    {plan.perSeat && (
                      <a href="/contact"
                        style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                        className="-mt-3 text-center text-[14px] text-[#1877F2] hover:underline">
                        Custom integrations? Talk to sales →
                      </a>
                    )}

                    {/* Features — split by capability: Ads, Social posts, SEO/GEO, Email (coming soon) */}
                    <div className="flex flex-col gap-4">
                      {plan.featuresIntro && (
                        <p style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                          className="text-[14px] text-[#9CA3AF] leading-[18px]">
                          {plan.featuresIntro}
                        </p>
                      )}
                      {plan.features(credits).map((group) => (
                        <div key={group.title} className="flex flex-col gap-2">
                          <p style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                            className="text-[13px] uppercase tracking-[0.6px] text-[#6B7280]">
                            {group.title}
                          </p>
                          {group.items.map((f) => (
                            <div key={f} className="flex items-start gap-2">
                              <CheckIcon />
                              <span style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                                className={`text-[16px] leading-[20px] ${group.comingSoon ? "text-[#6B7280] italic" : "text-[#D1D5DB]"}`}>
                                {f}
                              </span>
                            </div>
                          ))}
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
                planCredits={PLANS.flatMap((p) =>
                  p.tiers.map((t) => ({ name: p.perSeat ? `${p.name} (per seat)` : p.name, credits: t.credits })))}
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
