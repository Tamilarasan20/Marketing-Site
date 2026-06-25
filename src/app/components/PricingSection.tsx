import { useState } from "react";
import { Sparkles } from "lucide-react";
import imgAgentBanner from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type BillingPeriod = "monthly" | "quarterly" | "annual";

interface Tier {
  credits?: number;
  compareAt?: number;
  prices: { monthly: number; quarterly: number; annual: number };
}

interface Plan {
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
  tiers: Tier[];
  features: string[];
}

// ─── Plan data — mirrors apps/web/src/app/pricing/page.tsx exactly ────────────
const PLANS: Plan[] = [
  {
    id: "STARTER",
    name: "Starter",
    description: "Solo creators, side hustlers, micro brands",
    tiers: [
      { credits: 100,  compareAt: 39,  prices: { monthly: 24.9, quarterly: 21,  annual: 17  } },
      { credits: 250,  compareAt: 59,  prices: { monthly: 39,  quarterly: 33,  annual: 27  } },
      { credits: 400,  compareAt: 79,  prices: { monthly: 59,  quarterly: 50,  annual: 41  } },
    ],
    features: ["All 9 helpers", "100 monthly AI credits", "2 Seats", "3 Workspaces", "Support 24/7"],
  },
  {
    id: "GROWTH",
    name: "Growth",
    description: "Small brands, agencies, funded startups",
    highlighted: true,
    tiers: [
      { credits: 500,  compareAt: 99,  prices: { monthly: 79,  quarterly: 67,  annual: 55  } },
      { credits: 750,  compareAt: 129, prices: { monthly: 99,  quarterly: 84,  annual: 69  } },
      { credits: 900,  compareAt: 259, prices: { monthly: 199, quarterly: 169, annual: 139 } },
    ],
    features: ["All 9 helpers", "500 monthly AI credits", "5 Seats", "5 Workspaces", "Support 24/7"],
  },
  {
    id: "SCALE",
    name: "Scale",
    description: "Multi-brand, agencies managing clients",
    tiers: [
      { credits: 1100, compareAt: 199, prices: { monthly: 149, quarterly: 127, annual: 104 } },
      { credits: 2000, compareAt: 259, prices: { monthly: 199, quarterly: 169, annual: 139 } },
      { credits: 3000, compareAt: 389, prices: { monthly: 299, quarterly: 254, annual: 209 } },
    ],
    features: ["All 9 helpers", "1,100 monthly AI credits", "25 Seats", "10 Workspaces", "Support 24/7"],
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    description: "For teams needing AI coverage & governance",
    tiers: [
      { credits: 4500, compareAt: 499, prices: { monthly: 399, quarterly: 339, annual: 279 } },
      { credits: 5000, compareAt: 649, prices: { monthly: 499, quarterly: 424, annual: 349 } },
      { credits: 6000, compareAt: 799, prices: { monthly: 599, quarterly: 509, annual: 419 } },
    ],
    features: ["All 9 helpers", "4,500 monthly AI credits", "Unlimited Seats", "Unlimited Workspaces", "Priority Support 24/7"],
  },
];

// ─── No-AI-Agent plans — integration-based, no AI features, all unlimited posts ─
// Each tier is cumulative: higher plans inherit everything below via "Everything in …".
const NO_AGENT_PLANS: Plan[] = [
  {
    id: "LITE",
    name: "Lite",
    description: "Entry plan for getting started",
    tiers: [{ prices: { monthly: 9, quarterly: 8, annual: 6 } }],
    features: [
      "Up to 5 account integrations",
      "200 posts per month",
      "X (Twitter) not included",
      "Schedule & calendar planning",
      "Human support",
    ],
  },
  {
    id: "CREATOR",
    name: "Creator",
    description: "Solo creators getting started",
    tiers: [{ prices: { monthly: 9, quarterly: 8, annual: 6 } }],
    features: [
      "25 social media integrations",
      "Unlimited posts",
      "Schedule & calendar planning",
      "Carousel & bulk video posts",
      "Human support",
    ],
  },
  {
    id: "PRO",
    name: "Pro",
    description: "Growing teams & agencies",
    highlighted: true,
    tiers: [{ prices: { monthly: 39, quarterly: 33, annual: 27 } }],
    features: [
      "Everything in Creator",
      "50 social media integrations",
      "Multiple accounts per platform",
      "Analytics & post comments",
      "Priority support",
    ],
  },
  {
    id: "ULTRA",
    name: "Ultra",
    description: "Scaling brands & power users",
    tiers: [{ prices: { monthly: 89, quarterly: 76, annual: 62 } }],
    features: [
      "Everything in Pro",
      "Unlimited social integrations",
      "Unlimited team members",
      "API & webhooks access",
      "Dedicated account manager",
    ],
  },
];

const BILLING_OPTS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: "monthly",   label: "Monthly" },
  { id: "quarterly", label: "3-month",  badge: "Save 15%" },
  { id: "annual",    label: "12-month", badge: "Save 30%" },
];

const APP_URL = "https://app.loraloop.com";

// ─── Agent banner card header ─────────────────────────────────────────────────
function CardHeader() {
  return (
    <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
      <img
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
      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }} className="text-[11px] text-[#9CA3AF] leading-[16px]">
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
              className={`flex-1 py-[6px] rounded-[8px] text-[11px] tracking-[0.2px] border transition-all ${
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
export default function PricingSection({ className = "" }: { className?: string }) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const [withAgents, setWithAgents] = useState(true);
  const [selectedTiers, setSelectedTiers] = useState<Record<string, number>>({
    STARTER: 0, GROWTH: 0, SCALE: 0, ENTERPRISE: 0,
  });
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);

  function handleGetStarted(plan: Plan) {
    if (pendingPlanId === plan.id) return;
    setPendingPlanId(plan.id);
    const tierIdx = selectedTiers[plan.id] ?? 0;
    const url = new URL(`${APP_URL}/pricing`);
    url.searchParams.set("plan", plan.id);
    url.searchParams.set("tier", String(tierIdx));
    url.searchParams.set("period", period);
    window.location.href = url.toString();
  }

  const activePlans = withAgents ? PLANS : NO_AGENT_PLANS;

  return (
    <section className={`bg-black ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-20 pt-[40px] pb-[80px]">
        <div className="flex flex-col items-center gap-[42px]">

          {/* Title */}
          <h2
            style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
            className="text-[40px] text-white text-center tracking-[-0.8px] leading-[48px]"
          >
            Pricing
          </h2>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4">

            {/* AI Agents toggle */}
            <div className="flex items-center gap-[2px] p-[1px] rounded-full border border-[#374151]">
              {[
                { v: true,  label: "AI Agents",    icon: true  },
                { v: false, label: "No AI Agents", icon: false },
              ].map(({ v, label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setWithAgents(v)}
                  style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                  className={`flex items-center gap-[6px] px-4 py-[9px] rounded-full text-[12px] transition-all ${
                    withAgents === v ? "bg-[#1F2937] text-white" : "text-[#9CA3AF] hover:text-white"
                  }`}
                >
                  {icon && <Sparkles className="w-3.5 h-3.5" />}
                  {label}
                </button>
              ))}
            </div>

            {/* Billing period toggle */}
            <div className="flex items-center gap-[2px] border border-[#374151] rounded-[12px] px-[2px] py-[1px]">
              {BILLING_OPTS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPeriod(opt.id)}
                  style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                  className={`flex items-center gap-[4px] h-[36px] px-4 rounded-[8px] text-[14px] tracking-[0.21px] transition-all ${
                    period === opt.id ? "bg-[#1877F2] text-white" : "text-white hover:bg-white/5"
                  }`}
                >
                  {opt.label}
                  {opt.badge && (
                    <span style={{
                      fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500,
                      background: "#151109", border: "0.749px solid rgba(213,165,91,0.4)",
                      color: "#D5A55B", fontSize: "11px", padding: "3px 5px",
                      borderRadius: "999px", lineHeight: "1",
                    }}>
                      {opt.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards — stack vertically on mobile, 2-up on small screens, 4-up on large.
              items-end so the highlighted plan floats above with "Most popular" */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-4 w-full">
            {activePlans.map((plan) => {
              const tierIdx = selectedTiers[plan.id] ?? 0;
              const tier    = plan.tiers[tierIdx];
              const price   = tier.prices[period];

              const cardInner = (
                <div style={{ background: "#131313", borderRadius: "inherit" }} className="flex flex-col w-full">
                  {withAgents && <CardHeader />}
                  <div className={`flex flex-col gap-6 ${withAgents ? "pt-4" : "pt-7"} px-5 pb-6`}>

                    {/* Name + desc */}
                    <div>
                      <p style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                        className="text-[14px] text-white tracking-[0.21px] leading-[20px]">
                        {plan.name}
                      </p>
                      <p style={{ fontFamily: "General Sans, Inter, sans-serif" }}
                        className="text-[12px] text-[#9CA3AF] leading-[16px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price — compareAt struck through when present (AI plans) */}
                    <div className="flex items-baseline gap-2">
                      {tier.compareAt ? (
                        <span style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                          className="text-[18px] text-[#4B5563] line-through leading-[28px]">
                          ${tier.compareAt}
                        </span>
                      ) : null}
                      <span style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                        className="text-[20px] text-white leading-[28px]">
                        ${price % 1 !== 0 ? price.toFixed(2) : price}
                      </span>
                      <span style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                        className="text-[12px] text-[#6B7280] tracking-[0.6px] leading-[16px]">
                        /mo
                      </span>
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => handleGetStarted(plan)}
                      disabled={pendingPlanId === plan.id}
                      style={{ fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 }}
                      className={`w-full h-[40px] rounded-full text-[14px] transition-all disabled:opacity-60 ${
                        plan.highlighted
                          ? "bg-[#1877F2] text-white hover:bg-[#0f66d0]"
                          : "bg-[#EEF4FF] text-[#1877F2] border border-[#D1D5DB] hover:bg-[#dce8ff]"
                      }`}
                    >
                      {pendingPlanId === plan.id ? "Loading…" : "Get Started"}
                    </button>

                    {/* Credit chips — AI-Agent plans only */}
                    {withAgents && (
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
                            className="text-[12px] text-[#D1D5DB] leading-[16px]">
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
                  <div key={plan.id} className="flex flex-col items-center gap-2"
                    style={{ background: "#1877F2", borderRadius: "16px", padding: "8px 2px 2px" }}>
                    <p style={{ fontFamily: "General Sans, Inter, sans-serif", fontWeight: 500 }}
                      className="text-[12px] text-white tracking-[0.6px] leading-[16px]">
                      Most popular
                    </p>
                    <div className="w-full overflow-hidden"
                      style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "14px" }}>
                      {cardInner}
                    </div>
                  </div>
                );
              }

              return (
                <div key={plan.id} className="overflow-hidden"
                  style={{ background: "#151515", border: "0.781px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
                  {cardInner}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
