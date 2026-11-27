import { useEffect, useState } from "react";
import { Check, ChevronDown, Sparkles, Tag, Users } from "lucide-react";
import { CREDIT_ROWS } from "../data/creditCosts";
import BookDemoModal from "./BookDemoModal";

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
  /** The 4-5 lines a card shows; "See all features" opens `features`. */
  highlights: string[];
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
    description: "For founders, creators and local businesses.",
    meta: "1 seat · 3 brands",
    tiers: [
      { credits: 200, prices: { monthly: 39, annual: 351 } },
      { credits: 300, prices: { monthly: 59, annual: 531 } },
      { credits: 400, prices: { monthly: 79, annual: 711 } },
    ],
    featuresIntro: "Key features",
    highlights: ["SEO articles you approve", "19 channels, one calendar", "AI videos & TikTok slideshows", "Daily briefing from Lora", "Claude & ChatGPT (MCP)"],
    features: [
      { title: "SEO & GEO", items: ["SEO articles you approve", "Optimized for AI answers"] },
      { title: "Strategy & insights", items: ["Plan built on your data", "Learns from every result", "Daily briefing from Lora", "Performance dashboard"] },
      { title: "Social & content", items: ["19 channels, one calendar", "Brand knowledge base", "AI videos & TikTok slideshows", "Ad & post inspiration"] },
      { title: "Integrations", items: ["Claude & ChatGPT (MCP)", "Shopify & Google Analytics"] },
    ],
  },
  {
    id: "GROWTH",
    name: "Pro",
    description: "For DTC brands, growth leads and lean marketing teams.",
    meta: "2 seats · 5 brands",
    highlighted: true,
    seatAddon: SEAT_ADDON,
    tiers: [
      { credits: 700,  prices: { monthly: 99,  annual: 891 } },
      { credits: 900,  prices: { monthly: 129, annual: 1161 } },
      { credits: 1100, prices: { monthly: 159, annual: 1431 } },
    ],
    featuresIntro: "Everything in Starter",
    highlights: ["Google, Meta, TikTok, LinkedIn ads", "Mailchimp & Klaviyo", "Competitor ad tracking", "Product video ads", "Team seats & roles"],
    features: [
      { title: "Paid ads", items: ["Google, Meta, TikTok, LinkedIn", "Spend caps & tired-ad alerts", "Live only after you approve"] },
      { title: "Email marketing", items: ["Mailchimp & Klaviyo", "Campaigns in your brand voice"] },
      { title: "Advanced SEO", items: ["Technical site checks", "WordPress & Webflow"] },
      { title: "Market intelligence", items: ["Competitor ad tracking", "Daily ads report"] },
      { title: "Quality checks", items: ["Brand check on every ad", "Scheduled campaign reviews"] },
      { title: "Team", items: ["Team seats & roles", "Slack, Teams & Discord updates"] },
      { title: "Video studio", items: ["Product video ads", "AI presenter ads"] },
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
    featuresIntro: "Everything in Pro",
    highlights: ["Unlimited brands", "A workspace per client", "Scheduled client reports", "Priority support"],
    features: [
      { title: "For agencies", items: ["Unlimited brands", "A workspace per client", "All-client ads view"] },
      { title: "Client reporting", items: ["Scheduled client reports", "Sent straight to clients"] },
      { title: "More room to grow", items: ["More credits, top-ups anytime"] },
      { title: "Support", items: ["Priority support"] },
    ],
  },
];

const ENTERPRISE_FEATURES: FeatureGroup[] = [
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
];

const ENTERPRISE_HIGHLIGHTS = ["Custom integrations & API", "Your own success manager", "Approval rules per brand", "Response-time SLA"];

const BILLING_OPTS: { id: BillingPeriod; label: string; badge?: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual",  label: "Annual", badge: "Save 25%" },
];

const formatUsd = (n: number) => `$${n % 1 !== 0 ? n.toFixed(2) : fmtNum(n)}`;

const APP_URL = "https://app.loraloop.com";
// New accounts start a 3-day free trial with no card; plans are picked in the app.
const TRIAL_URL = `${APP_URL}/signup`;

// Black Friday 2026 - mirrors BLACK_FRIDAY_PROMO in the app's billing service:
// 20% off the first month of a monthly plan, applied automatically at checkout.
const BLACK_FRIDAY_ENDS_AT = Date.parse("2026-11-29T23:59:59Z");

// ─── Design tokens: black page, #111214 cards, light serif display + General Sans ──
const serif = { fontFamily: "Newsreader, Georgia, serif", fontWeight: 300 } as const;
const gen = { fontFamily: "General Sans, Inter, sans-serif" } as const;
const medium = { ...gen, fontWeight: 500 } as const;
const CARD_BG = "#111214";
const ACCENT = "#6E9BFF";
const REC_BG = `radial-gradient(120% 70% at 50% 110%, rgba(70,120,230,0.22), transparent 70%), radial-gradient(80% 50% at 0% 0%, rgba(110,155,255,0.06), transparent 70%), ${CARD_BG}`;
// Pastel "iridescent" tag used for savings.
const IRIDESCENT = {
  background:
    "radial-gradient(55% 90% at 6% 8%, rgba(255,224,196,0.85), rgba(0,0,0,0) 60%)," +
    "radial-gradient(40% 80% at 16% 100%, rgba(196,255,228,0.7), rgba(0,0,0,0) 60%)," +
    "radial-gradient(45% 90% at 95% 20%, rgba(214,200,255,0.9), rgba(0,0,0,0) 60%)," +
    "radial-gradient(50% 90% at 80% 100%, rgba(186,214,255,0.9), rgba(0,0,0,0) 60%), #E9ECF4",
  color: "#16181D",
} as const;

// Blue hand-drawn underline under one headline word.
function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 220 14" preserveAspectRatio="none" className={`absolute left-0 w-full ${className}`}>
      <path d="M3 9.5 C 40 4, 90 3.5, 130 5.5 S 200 9, 217 6" stroke={ACCENT} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M12 11.5 C 60 7.5, 140 7, 205 9.5" stroke={ACCENT} strokeOpacity="0.55" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ─── Black Friday countdown (days / hours / min / sec) ────────────────────────
function Countdown({ endsAt }: { endsAt: number }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const left = Math.max(0, endsAt - (now ?? endsAt));
  const units = [
    { v: Math.floor(left / 86_400_000), l: "days" },
    { v: Math.floor(left / 3_600_000) % 24, l: "hours" },
    { v: Math.floor(left / 60_000) % 60, l: "min" },
    { v: Math.floor(left / 1000) % 60, l: "sec" },
  ];
  return (
    <div className="flex items-start gap-2">
      {units.map((u) => (
        <div key={u.l} className="flex flex-col items-center gap-1">
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[14px] border border-white/[0.06] flex items-center justify-center"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))" }}>
            <span style={medium} className="text-[22px] sm:text-[26px] text-white tabular-nums">
              {now === null ? "--" : String(u.v).padStart(2, "0")}
            </span>
          </div>
          <span style={medium} className="text-[12px] text-white/60">{u.l}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Card badge: "Most popular [20% off]" (desktop, top right) ───────────────
function Badge({ label, tag }: { label?: string; tag?: string }) {
  if (!label && !tag) return null;
  return (
    <span className="inline-flex h-[30px] items-center gap-1.5 rounded-[10px] bg-white/[0.05] px-1 whitespace-nowrap" style={medium}>
      {label && <span className="text-[13px] text-white px-1.5">{label}</span>}
      {tag && <span className="text-[13px] rounded-[6px] px-1.5 py-0.5" style={IRIDESCENT}>{tag}</span>}
    </span>
  );
}

// Phones: the badge sits in a notch on the card's top edge.
function NotchBadge({ label, tag }: { label?: string; tag?: string }) {
  if (!label && !tag) return null;
  return (
    <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-1.5 whitespace-nowrap"
      style={{ ...medium, background: "#1B1C20", clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}>
      {label && <span className="text-[13px] text-white">{label}</span>}
      {tag && (
        <span className="inline-flex items-center gap-1 text-[12px] rounded-full px-2 py-0.5 text-[#CFE0FF]" style={{ background: "rgba(110,155,255,0.18)" }}>
          <Tag className="w-3 h-3" />{tag}
        </span>
      )}
    </div>
  );
}

// The 4-5 lines a card shows; "See all features" opens the full grouped list.
function FeatureList({ intro, highlights, groups, accent, open, onToggle }: {
  intro?: string; highlights: string[]; groups: FeatureGroup[]; accent?: boolean; open: boolean; onToggle: () => void;
}) {
  const check = `w-3.5 h-3.5 mt-[4px] shrink-0 ${accent ? "text-[#6E9BFF]" : "text-white/60"}`;
  return (
    <>
      {/* Phones: the whole list folds; md+: highlights always show */}
      <div className={`${open ? "flex" : "hidden"} md:flex flex-col gap-3 pt-6 border-t border-white/[0.06]`}>
        {intro && (
          <div className="flex items-start gap-2.5">
            <Check className="w-3.5 h-3.5 mt-[4px] shrink-0 text-white/40" strokeWidth={2.25} />
            <span style={gen} className="text-[15px] leading-[21px] text-white/55">{intro}</span>
          </div>
        )}
        {highlights.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <Check className={check} strokeWidth={2.25} />
            <span style={gen} className="text-[15px] leading-[21px] text-white">{f}</span>
          </div>
        ))}
        {open && (
          <div className="mt-3 pt-4 border-t border-white/[0.06] flex flex-col gap-4">
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <p style={medium} className="text-[13px] text-white/45">{group.title}</p>
                {group.items.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 mt-[3px] shrink-0 text-white/40" strokeWidth={2.25} />
                    <span style={gen} className="text-[14px] leading-[20px] text-white/80">{f}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="button" onClick={onToggle} aria-expanded={open} style={gen}
        className="-mt-2 md:mt-0 pt-4 border-t border-white/[0.06] md:border-0 md:pt-0 flex items-center justify-between md:justify-start md:gap-2 text-[15px] md:text-[13px] text-white/60 md:text-white/50 hover:text-white">
        {open ? "Hide features" : "See all features"}
        <span className="w-6 h-6 md:w-4 md:h-4 rounded-full bg-white/[0.08] md:bg-transparent flex items-center justify-center">
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
    </>
  );
}

// One usage line: icon, a white line, and a muted line under it.
function UsageRow({ icon, title, sub, accent }: { icon: "credits" | "team"; title: string; sub?: string; accent?: boolean }) {
  const Icon = icon === "credits" ? Sparkles : Users;
  return (
    <div className="flex items-start gap-2.5">
      <Icon className={`w-3.5 h-3.5 mt-[3px] shrink-0 ${accent ? "text-[#6E9BFF]" : "text-white/50"}`} />
      <div className="min-w-0">
        <p style={gen} className="text-[15px] text-white leading-[21px]">{title}</p>
        {sub && <p style={gen} className="text-[13px] text-[#848484] leading-[18px] mt-0.5">{sub}</p>}
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
  const [demoOpen, setDemoOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  // Decided after mount so the prerendered HTML never shows an expired offer.
  const [promoActive, setPromoActive] = useState(false);
  useEffect(() => { setPromoActive(Date.now() <= BLACK_FRIDAY_ENDS_AT); }, []);
  const toggle = (id: string) => setExpanded((s) => ({ ...s, [id]: !s[id] }));

  return (
    // Slightly open letter spacing for the whole section; elements with their own tracking override it.
    <section className={`bg-black text-[#D9D9D9] ${className}`} style={{ ...gen, letterSpacing: "0.02em" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-[46px] pt-[40px] pb-[80px]">

        {/* Title */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 style={{ ...serif, letterSpacing: "-0.01em" }} className="text-[40px] sm:text-[56px] text-white leading-[1.1] max-w-[640px]">
            Pricing for every stage of{" "}
            <span className="relative inline-block">growth<Scribble className="-bottom-0.5 h-[12px]" /></span>
          </h2>
          <p className="max-w-[560px] text-[15px] sm:text-[16px] text-white/50 leading-relaxed">
            Your AI marketing team for ads, social and SEO. Start with a 3-day free trial: no card needed, cancel anytime.
          </p>
        </div>

        {/* Black Friday - countdown + how it applies */}
        {promoActive && (
          <div className="mt-8 mx-auto max-w-[760px] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[20px] border border-white/[0.06] px-5 py-4"
            style={{ background: CARD_BG }}>
            <div className="text-center sm:text-left">
              <p style={medium} className="text-[18px] text-white">
                Black Friday: <span className="relative inline-block">20% off<Scribble className="-bottom-1 h-[9px]" /></span> your first month
              </p>
              <p className="text-[13px] text-white/50 mt-1.5 leading-[1.45]">
                Monthly plans, applied automatically at checkout. Ends Nov 29.
              </p>
            </div>
            <Countdown endsAt={BLACK_FRIDAY_ENDS_AT} />
          </div>
        )}

        {/* Billing period toggle */}
        <div className="mt-8 mb-8 flex justify-center">
          <div className="flex items-center gap-1 rounded-[14px] p-1" style={{ background: "#212121" }}>
            {BILLING_OPTS.map((opt) => {
              const active = period === opt.id;
              return (
                <button key={opt.id} type="button" onClick={() => setPeriod(opt.id)} style={medium}
                  className={`flex items-center gap-2 h-[41px] px-4 rounded-[10px] text-[15px] transition-all whitespace-nowrap ${
                    active ? "bg-white text-[#08090A]" : "text-white/70 hover:text-white"
                  }`}>
                  {opt.label}
                  {opt.badge && (
                    <span className="text-[12px] rounded-full px-[7px] py-[2px] text-[#CFE0FF]" style={{ background: "rgba(110,155,255,0.18)" }}>
                      {opt.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan cards - one row of four on wide screens, 2x2 on tablets/laptops,
            one column on phones (Pro first) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {PLANS.map((plan) => {
            // The marketing page shows each plan's entry tier; bigger credit options are picked in the app.
            const tier = plan.tiers[0];
            const monthly = tier.prices.monthly;
            const annual = tier.prices.annual;
            // Annual shows its monthly equivalent; the yearly charge goes underneath.
            const price = period === "annual" ? annual / 12 : monthly;
            const rec = !!plan.highlighted;
            const label = rec ? "Most popular" : plan.badge;
            const tag = period === "annual" ? "Save 25%" : promoActive ? "20% off" : undefined;

            return (
              <div key={plan.id}
                className={`relative flex flex-col gap-6 rounded-[20px] p-5 pt-11 md:p-6 border ${rec ? "order-first md:order-none border-[rgba(110,155,255,0.16)]" : "border-transparent"}`}
                style={{ background: rec ? REC_BG : CARD_BG }}>
                <NotchBadge label={label} tag={tag} />

                {/* 1. Name + one short line; phones put the price on the right */}
                <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 style={medium} className="text-[20px] leading-[28px] text-white">{plan.name}</h3>
                    <p className="md:hidden text-[13px] text-[#848484] leading-[18px] mt-0.5">No card needed</p>
                  </div>
                  <div className="hidden md:block shrink-0"><Badge label={label} tag={tag} /></div>
                  <div className="md:hidden shrink-0 text-right">
                    <span style={{ ...serif, letterSpacing: "-0.02em" }} className="text-[40px] leading-none text-white">{formatUsd(price)}</span>
                    <span className="text-[13px] text-[#848484]"> /mo</span>
                    {period === "annual" && <p className="text-[12px] text-[#848484] mt-1">Billed {formatUsd(annual)} yearly</p>}
                  </div>
                </div>
                <p className="hidden md:block text-[13px] text-[#848484] leading-[18px] mt-0.5">No card needed</p>
                </div>

                {/* 2. Price (md+) */}
                <div className="hidden md:block">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    {period === "annual" && (
                      <span style={serif} className="text-[24px] text-white/35 line-through decoration-[1.5px]">{formatUsd(monthly)}</span>
                    )}
                    <span style={{ ...serif, letterSpacing: "-0.02em" }} className="text-[48px] leading-[1.1] text-white">{formatUsd(price)}</span>
                    <span className="text-[15px] text-[#848484]">/mo</span>
                  </div>
                  {period === "annual" && <p className="text-[13px] text-[#848484] leading-[18px] mt-1">Billed {formatUsd(annual)} yearly</p>}
                </div>

                {/* 3. CTA - every account starts with the free trial */}
                <a data-ml-goal="start_trial" data-ml-goal-plan={plan.id} href={TRIAL_URL} style={medium}
                  className={`w-full h-[40px] inline-flex items-center justify-center rounded-[12px] text-[15px] transition-colors ${
                    rec ? "bg-white text-black hover:bg-white/90" : "bg-[#212121] text-white hover:bg-[#2b2b2b]"
                  }`}>
                  Start your 3-day free trial
                </a>

                {/* 4. Usage */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col gap-4 xl:min-h-[110px]">
                  <UsageRow icon="credits" accent={rec} title={`${fmtNum(tier.credits)} AI credits a month`} />
                  <UsageRow icon="team" accent={rec} title={plan.meta}
                    sub={plan.seatAddon ? `Extra seats ${formatUsd(plan.seatAddon.prices.monthly)}/mo` : undefined} />
                </div>

                {/* 5. What this plan adds */}
                <FeatureList intro={plan.featuresIntro === "Key features" ? undefined : plan.featuresIntro} highlights={plan.highlights} groups={plan.features} accent={rec}
                  open={!!expanded[plan.id]} onToggle={() => toggle(plan.id)} />
              </div>
            );
          })}

          {/* Enterprise - sales-led, same zones as the plan cards */}
          <div className="relative flex flex-col gap-6 rounded-[20px] p-5 pt-11 md:p-6" style={{ background: CARD_BG }}>
            <NotchBadge label="Tailored" />
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 style={medium} className="text-[20px] leading-[28px] text-white">Enterprise</h3>
                  <p className="md:hidden text-[13px] text-[#848484] leading-[18px] mt-0.5">Billed annually</p>
                </div>
                <div className="hidden md:block shrink-0"><Badge label="Tailored" /></div>
                <span style={{ ...serif, letterSpacing: "-0.02em" }} className="md:hidden shrink-0 text-[40px] leading-none text-white">Custom</span>
              </div>
              <p className="hidden md:block text-[13px] text-[#848484] leading-[18px] mt-0.5">Billed annually</p>
            </div>
            <div className="hidden md:flex items-baseline">
              <span style={{ ...serif, letterSpacing: "-0.02em" }} className="text-[48px] leading-[1.1] text-white">Custom</span>
            </div>
            <button type="button" data-ml-goal="book_demo" data-ml-goal-location="pricing_enterprise" style={medium}
              onClick={() => setDemoOpen(true)}
              className="w-full h-[40px] inline-flex items-center justify-center rounded-[12px] text-[15px] bg-[#212121] text-white hover:bg-[#2b2b2b] transition-colors">
              Book a demo
            </button>
            <div className="pt-6 border-t border-white/[0.06] flex flex-col gap-4 xl:min-h-[110px]">
              <UsageRow icon="credits" title="Custom AI credits" />
              <UsageRow icon="team" title="Unlimited brands and seats" />
            </div>
            <FeatureList intro="Everything in Scale" highlights={ENTERPRISE_HIGHLIGHTS} groups={ENTERPRISE_FEATURES}
              open={!!expanded.ENTERPRISE} onToggle={() => toggle("ENTERPRISE")} />
          </div>
        </div>

        <p className="mt-5 text-center text-[13px] text-white/40">
          Prices in USD. More credits and team seats are available in the app.
        </p>

        {/* ── How credits work - plain rows, two columns on wide screens ── */}
        {showCreditUsage && (
          <div className="mt-24 sm:mt-32 flex w-full flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 style={{ ...serif, letterSpacing: "-0.01em" }} className="text-[34px] sm:text-[44px] text-white leading-[1.05]">How credits work</h3>
              <p className="max-w-[560px] text-[15px] text-white/50 leading-relaxed">
                Every task your AI team runs costs credits. Plan credits refresh every month, and you can top up anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 border-b border-white/[0.08]">
              {CREDIT_ROWS.map((row) => (
                <div key={row.cost} className="flex items-center justify-between gap-6 py-3.5 border-t border-white/[0.08]">
                  <span className="text-[14px] sm:text-[15px] text-white leading-[22px]">{row.label}</span>
                  <span className="shrink-0 text-[14px] sm:text-[15px] text-white/50 tabular-nums">{row.cost} {row.cost === "1" ? "credit" : "credits"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
