import { useState } from "react";
import { CREDIT_ACTIONS, CREDIT_FOOTNOTES } from "../data/creditCosts";
import BookDemoModal from "./BookDemoModal";

// ─── Types ────────────────────────────────────────────────────────────────────
type BillingPeriod = "monthly" | "annual";

interface FeatureGroup {
  title: string;
  items: string[];
  /** Named agents shown as pills above the items (Enterprise). */
  chips?: { name: string; role: string }[];
}

interface Plan {
  /** App plan key (Pro is GROWTH in the app). */
  id: "STARTER" | "GROWTH" | "SCALE" | "ENTERPRISE";
  name: string;
  /** Small label on the card's top edge. */
  tag: string;
  /** Seats · brands. */
  meta: string;
  /** Who the plan is for (docs/product/target-users.md in Loraloop-Main-App). */
  audience: string;
  /** USD; annual = per year (25% off: 12 × monthly × 0.75). Null = custom. */
  prices: { monthly: number; annual: number } | null;
  /** Bold part, then the rest of the credits line. */
  credits: [string, string];
  highlighted?: boolean;
  featuresIntro: string;
  features: FeatureGroup[];
}

const APP_URL = "https://app.loraloop.com";
// New accounts start a 3-day free trial with no card; bigger credit options are picked in the app.
const TRIAL_URL = `${APP_URL}/signup`;

// ─── Plan data — the entry tier of each plan in apps/web/src/features/billing/lib/plans.ts ───
// Only shipped features. Starter has no paid ads or email marketing (plan-features.ts).
const PLANS: Plan[] = [
  {
    id: "STARTER",
    name: "Starter",
    tag: "Essentials",
    meta: "1 seat · 3 brands",
    audience: "For founders, creators and local businesses.",
    prices: { monthly: 39, annual: 351 },
    credits: ["200 credits", " per month"],
    featuresIntro: "Key features",
    features: [
      { title: "SEO & GEO", items: ["SEO articles you approve", "Optimized for AI answers"] },
      { title: "Social & content", items: ["19 channels, one calendar", "Brand knowledge base", "AI videos & TikTok slideshows", "Ad & post inspiration"] },
      { title: "Strategy & insights", items: ["Plan built on your data", "Learns from every result", "Daily briefing from Lora", "Performance dashboard"] },
      { title: "Integrations", items: ["Claude & ChatGPT (MCP)", "Shopify & Google Analytics"] },
    ],
  },
  {
    id: "GROWTH",
    name: "Pro",
    tag: "Most popular",
    meta: "2 seats · 5 brands",
    audience: "For DTC brands, growth leads and lean marketing teams.",
    prices: { monthly: 99, annual: 891 },
    credits: ["700 credits", " per month · extra seats $39/mo"],
    highlighted: true,
    featuresIntro: "All the features of Starter, and:",
    features: [
      { title: "Paid ads", items: ["Google, Meta, TikTok, LinkedIn", "Spend caps & tired-ad alerts", "Live only after you approve"] },
      { title: "Email marketing", items: ["Mailchimp & Klaviyo", "Campaigns in your brand voice"] },
      { title: "Market intelligence", items: ["Competitor ad tracking", "Daily ads report"] },
      { title: "Video studio", items: ["Product video ads", "AI presenter ads"] },
      { title: "Advanced SEO", items: ["Technical site checks", "WordPress & Webflow"] },
      { title: "Team", items: ["Team seats & roles", "Slack, Teams & Discord updates"] },
    ],
  },
  {
    id: "SCALE",
    name: "Scale",
    tag: "Multi-brand",
    meta: "5 seats · unlimited brands",
    audience: "For agencies and teams running many brands.",
    prices: { monthly: 199, annual: 1791 },
    credits: ["2,000 credits", " per month · extra seats $39/mo"],
    featuresIntro: "All the features of Pro, and:",
    features: [
      { title: "For agencies", items: ["Unlimited brands", "A workspace per client", "All-client ads view"] },
      { title: "Client reporting", items: ["Scheduled client reports", "Sent straight to clients"] },
      { title: "Support", items: ["Priority support"] },
    ],
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    tag: "Tailored",
    meta: "Annual billing · flexible plans",
    audience: "For larger teams with many brands or custom needs.",
    prices: null,
    credits: ["Custom credits", " and allowances"],
    featuresIntro: "All the features of Scale, and:",
    features: [
      {
        title: "Your agent team",
        chips: [
          { name: "Lora", role: "Strategy & social" },
          { name: "Sam", role: "Paid ads" },
          { name: "Sophie", role: "SEO & GEO" },
          { name: "Elliot", role: "Email" },
        ],
        items: ["Lora leads, specialists deliver", "Top-tier AI models"],
      },
      { title: "Your stack", items: ["Custom integrations & API", "Agents in your Slack or Teams"] },
      { title: "Expert help", items: ["Brand voice tuned to you", "Your own success manager", "Hands-on onboarding"] },
      { title: "Governance", items: ["Unlimited brands and seats", "Approval rules per brand", "Response-time SLA"] },
    ],
  },
];

const fmtNum = (n: number) => n.toLocaleString("en-US");
const formatUsd = (n: number) => `$${n % 1 !== 0 ? n.toFixed(2) : fmtNum(n)}`;

const sat = { fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 } as const;
const gen = { fontFamily: "General Sans, Inter, sans-serif" } as const;
const mono = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" } as const;

// "How credits work": the canonical credit table, grouped by cost so it reads in a few rows.
const CREDIT_ROWS = (() => {
  const byCost = new Map<string, string[]>();
  for (const action of CREDIT_ACTIONS) {
    const cost = action.creditsMax ? `${action.creditsEach}–${action.creditsMax}` : String(action.creditsEach);
    byCost.set(cost, [...(byCost.get(cost) ?? []), action.label]);
  }
  return [...byCost.entries()]
    .sort(([a], [b]) => parseFloat(a) - parseFloat(b) || a.length - b.length)
    .map(([cost, labels]) => ({ cost, label: labels.join(", "), plural: cost !== "1" }));
})();

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-[4px]" aria-hidden="true">
      <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Features({ intro, groups }: { intro: string; groups: FeatureGroup[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p style={sat} className="text-[14px] text-white leading-[20px]">{intro}</p>
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-2">
          <p style={sat} className="text-[14px] text-[#E5E7EB]">{group.title}</p>
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
          {group.items.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckIcon />
              <span style={{ ...gen, fontWeight: 500 }} className="text-[14px] leading-[20px] text-[#D1D5DB]">{item}</span>
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
  /** Renders "How credits work" below the plans; pass false to hide it on a given surface. */
  showCreditUsage?: boolean;
}) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className={`bg-black ${className}`} style={{ letterSpacing: "0.02em" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-[46px] pt-[40px] pb-[80px]">
        <div className="flex flex-col items-center gap-12">

          {/* Title */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 style={sat} className="text-[36px] md:text-[44px] text-white tracking-[-0.2px] leading-tight">Pricing</h2>
            <p style={gen} className="max-w-[560px] text-[16px] text-[#9CA3AF] leading-relaxed">
              Your AI marketing team for ads, social, email and SEO. Every plan starts with a 3-day free trial: no card needed, cancel anytime.
            </p>
          </div>

          {/* Monthly / Annual */}
          <div role="tablist" aria-label="Billing period"
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {(["monthly", "annual"] as const).map((p) => (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={period === p}
                onClick={() => setPeriod(p)}
                style={sat}
                className={`flex items-center gap-2 h-10 rounded-full px-5 text-[15px] transition-all ${
                  period === p ? "bg-white text-black" : "text-[#D1D5DB] hover:text-white"
                }`}
              >
                {p === "monthly" ? "Monthly" : "Annual"}
                {p === "annual" && (
                  <span style={{ ...gen, fontWeight: 600 }} className="rounded-full bg-[#1877F2]/20 px-2 py-0.5 text-[12px] text-[#60A5FA]">Save 25%</span>
                )}
              </button>
            ))}
          </div>

          {/* Plans — four in a row from lg up; narrower screens swipe the row */}
          <div className="flex lg:grid lg:grid-cols-4 items-stretch gap-4 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory pt-4 pb-2 lg:pb-0">
            {PLANS.map((plan) => {
              const price = plan.prices && (period === "annual" ? plan.prices.annual / 12 : plan.prices.monthly);
              const enterprise = plan.prices === null;
              return (
                <div
                  key={plan.id}
                  className={`relative snap-start shrink-0 w-[84%] max-w-[340px] sm:w-[300px] lg:w-auto lg:max-w-none rounded-[20px] border bg-[#131313] ${
                    plan.highlighted ? "border-white/60" : "border-white/[0.08]"
                  }`}
                >
                  {/* Tag on the top edge */}
                  <span style={mono}
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em] ${
                      plan.highlighted || enterprise ? "bg-white text-black" : "border border-white/10 bg-[#1c1c1c] text-[#9CA3AF]"
                    }`}>
                    {plan.tag}
                  </span>

                  <div className="flex flex-col gap-6 px-6 pt-8 pb-7 h-full">
                    {/* Name, seats, who it's for */}
                    <div className="flex flex-col gap-1.5">
                      <p style={sat} className="text-[26px] text-white leading-[32px]">{plan.name}</p>
                      <p style={gen} className="text-[14px] text-[#9CA3AF] leading-[20px]">{plan.meta}</p>
                      <p style={gen} className="text-[14px] text-[#9CA3AF] leading-[20px] min-h-[40px]">{plan.audience}</p>
                    </div>

                    {/* Price */}
                    <div className="min-h-[64px]">
                      {price === null ? (
                        <span style={sat} className="text-[40px] text-white leading-[48px]">Custom</span>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1.5">
                            <span style={sat} className="text-[40px] text-white leading-[48px]">{formatUsd(price)}</span>
                            <span style={gen} className="text-[15px] text-[#9CA3AF]">/mo</span>
                          </div>
                          {period === "annual" && plan.prices && (
                            <p style={gen} className="text-[13px] text-[#9CA3AF]">Billed {formatUsd(plan.prices.annual)} yearly</p>
                          )}
                        </>
                      )}
                    </div>

                    {/* Credits */}
                    <p style={gen} className="text-[14px] text-[#9CA3AF] leading-[20px] min-h-[40px]">
                      <span style={sat} className="text-white">{plan.credits[0]}</span>
                      {plan.credits[1]}
                    </p>

                    {/* CTA */}
                    {enterprise ? (
                      <button
                        type="button"
                        onClick={() => {
                          window.minilytics?.("goal", "book_demo", { location: "pricing_enterprise" });
                          setDemoOpen(true);
                        }}
                        style={sat}
                        className="h-12 w-full rounded-full bg-white text-[15px] text-black transition-all hover:bg-gray-200"
                      >
                        Book a demo
                      </button>
                    ) : (
                      <a
                        data-ml-goal="start_trial" data-ml-goal-plan={plan.id}
                        href={TRIAL_URL}
                        style={sat}
                        className={`h-12 w-full inline-flex items-center justify-center rounded-full text-[15px] transition-all ${
                          plan.highlighted
                            ? "bg-white text-black hover:bg-gray-200"
                            : "border border-white/15 text-white hover:bg-white/[0.06]"
                        }`}
                      >
                        Claim your 3-day free trial
                      </a>
                    )}

                    <Features intro={plan.featuresIntro} groups={plan.features} />
                  </div>
                </div>
              );
            })}
          </div>

          <p style={gen} className="-mt-4 text-center text-[13px] text-[#9CA3AF]">
            Need more? Every plan has bigger credit options and top-ups in the app.
          </p>

          {/* How credits work */}
          {showCreditUsage && (
            <div className="flex w-full max-w-[760px] flex-col items-center gap-6 pt-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 style={sat} className="text-[32px] md:text-[40px] text-white leading-tight">How credits work.</h3>
                <p style={gen} className="max-w-[560px] text-[15px] text-[#9CA3AF] leading-relaxed">
                  Every task your AI team runs costs credits. Plan credits refresh each month, and top-ups you buy never expire.
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#131313]">
                {CREDIT_ROWS.map((row, i) => (
                  <div key={row.cost}
                    className={`flex items-center justify-between gap-6 px-6 py-4 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    <span style={gen} className="text-[15px] text-[#D1D5DB] leading-[22px]">{row.label}</span>
                    <span style={sat} className="shrink-0 text-[15px] text-white">{row.cost} {row.plural ? "credits" : "credit"}</span>
                  </div>
                ))}
              </div>
              <ul className="flex w-full flex-col gap-1">
                {CREDIT_FOOTNOTES.map((note) => (
                  <li key={note} style={gen} className="text-[12px] text-[#6B7280] leading-[18px]">{note}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
