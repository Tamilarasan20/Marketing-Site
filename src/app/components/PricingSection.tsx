import { useState } from "react";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import imgImage from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";

type BillingCycle = "monthly" | "12-month" | "3-month";
type AgentMode = "ai" | "no-ai";

type CreditOption = {
  credits: string;
  price: string;
  planPrice: string;
};

type Plan = {
  id: string;
  name: string;
  audience: string;
  original?: string;
  monthly: string;
  yearly: string;
  quarterly: string;
  credits: string;
  creditPrice: string;
  creditOptions?: CreditOption[];
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Solo creators, side hustlers, micro brands",
    original: "$39",
    monthly: "$19",
    yearly: "$13",
    quarterly: "$16",
    credits: "100 credits",
    creditPrice: "$19/mo",
    creditOptions: [
      { credits: "100 credits", price: "$19/mo", planPrice: "$19" },
      { credits: "250 credits", price: "$39/mo", planPrice: "$39" },
      { credits: "400 credits", price: "$59/mo", planPrice: "$59" },
    ],
    features: ["All 9 helpers", "100 monthly AI credits", "5 Seats", "3 Workspace", "Support 24/7"],
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Small brands, agencies, funded startups",
    original: "$99",
    monthly: "$79",
    yearly: "$55",
    quarterly: "$67",
    credits: "500 credits",
    creditPrice: "$79/mo",
    creditOptions: [
      { credits: "500 credits", price: "$79/mo", planPrice: "$79" },
      { credits: "750 credits", price: "$99/mo", planPrice: "$99" },
      { credits: "900 credits", price: "$129/mo", planPrice: "$129" },
    ],
    features: ["All 9 helpers", "600 monthly AI credits", "5 Seats", "3 Workspace", "Support 24/7"],
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    audience: "Multi-brand, agencies managing clients",
    original: "$199",
    monthly: "$149",
    yearly: "$104",
    quarterly: "$127",
    credits: "1000 credits",
    creditPrice: "$149/mo",
    creditOptions: [
      { credits: "1000 credits", price: "$149/mo", planPrice: "$149" },
      { credits: "2000 credits", price: "$199/mo", planPrice: "$199" },
      { credits: "3000 credits", price: "$299/mo", planPrice: "$299" },
    ],
    features: ["All 9 helpers", "1500 monthly AI credits", "25 Seats", "10 Workspace", "Support 24/7"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "For teams needing AI coverage & governance.",
    monthly: "$399",
    yearly: "$279",
    quarterly: "$339",
    credits: "4000 credits",
    creditPrice: "$399/mo",
    creditOptions: [
      { credits: "4000 credits", price: "$399/mo", planPrice: "$399" },
      { credits: "5000 credits", price: "$499/mo", planPrice: "$499" },
      { credits: "6000 credits", price: "$599/mo", planPrice: "$599" },
    ],
    features: ["All 9 helpers", "4500 monthly AI credits", "Unlimited Seats", "Unlimited Workspace", "Priority Support 24/7"],
  },
];

const billingLabels: Record<BillingCycle, string> = {
  monthly: "Monthly",
  "12-month": "12-month",
  "3-month": "3-month",
};

const priceForCycle = (plan: Plan, cycle: BillingCycle) => {
  if (cycle === "12-month") return plan.yearly;
  if (cycle === "3-month") return plan.quarterly;
  return plan.monthly;
};

const discountedPriceForCycle = (price: string, cycle: BillingCycle) => {
  const numericPrice = Number(price.replace(/[^0-9.]/g, ""));
  if (!numericPrice) return price;

  if (cycle === "12-month") return `$${Math.round(numericPrice * 0.7)}`;
  if (cycle === "3-month") return `$${Math.round(numericPrice * 0.85)}`;
  return `$${Math.round(numericPrice)}`;
};

const PERIOD_MAP: Record<BillingCycle, string> = {
  monthly: "monthly",
  "3-month": "quarterly",
  "12-month": "annual",
};

const APP_URL = "https://app.loraloop.com";

export default function PricingSection({ className = "" }: { className?: string }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [agentMode, setAgentMode] = useState<AgentMode>("ai");

  function handleGetStarted(planId: string, tier: number, cycle: BillingCycle) {
    const period = PERIOD_MAP[cycle];
    const url = new URL(`${APP_URL}/signup`);
    url.searchParams.set("plan", planId.toUpperCase());
    url.searchParams.set("tier", String(tier));
    url.searchParams.set("period", period);
    window.location.href = url.toString();
  }

  return (
    <section className={`bg-black px-4 py-16 md:px-8 md:py-24 ${className}`}>
      <div className="mx-auto flex w-full max-w-[1480px] flex-col items-center">
        <div className="flex w-full max-w-[740px] flex-col items-center gap-7 md:gap-[42px]">
          <div className="flex flex-col items-center gap-3">
            <h2 style={{ fontWeight: 900 }} className="font-['Satoshi:Bold',sans-serif] text-[40px] font-bold leading-[1.1] tracking-[-0.8px] text-white md:text-[56px]">
              Simple, honest pricing
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#9ca3af] text-lg text-center max-w-md leading-relaxed">
              Choose a plan and start building your AI marketing team today. No setup fees. Cancel anytime.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 md:gap-6">
            <div className="flex rounded-full border border-[#374151] bg-black p-1">
              <button
                type="button"
                onClick={() => setAgentMode("ai")}
                className={`flex h-11 items-center gap-2 rounded-full px-5 font-['Satoshi:Bold',sans-serif] text-[15px] font-bold text-white transition-colors ${
                  agentMode === "ai" ? "bg-[#1f2937]" : "bg-transparent"
                }`}
              >
                <Sparkles size={18} strokeWidth={2} />
                AI Agents
              </button>
              <button
                type="button"
                onClick={() => setAgentMode("no-ai")}
                className={`h-11 rounded-full px-6 font-['Satoshi:Bold',sans-serif] text-[15px] font-bold text-white transition-colors ${
                  agentMode === "no-ai" ? "bg-[#1f2937]" : "bg-transparent"
                }`}
              >
                No AI Agents
              </button>
            </div>

            <div className="grid w-full grid-cols-[0.72fr_1.14fr_1.14fr] items-center gap-1 rounded-[18px] border border-[#374151] bg-black p-1.5 sm:flex sm:w-auto sm:justify-center sm:gap-2">
              {(Object.keys(billingLabels) as BillingCycle[]).map((cycle) => (
                <button
                  key={cycle}
                  type="button"
                  onClick={() => setBillingCycle(cycle)}
                  className={`relative flex h-11 min-w-0 items-center justify-center rounded-[14px] px-1 font-['Satoshi:Bold',sans-serif] text-[13px] font-bold text-white transition-colors min-[390px]:text-[14px] sm:h-14 sm:px-7 sm:text-[16px] ${
                    billingCycle === cycle ? "bg-[#1877f2]" : "bg-transparent"
                  }`}
                >
                  <span className="whitespace-nowrap">{billingLabels[cycle]}</span>
                  {cycle !== "monthly" ? (
                    <span className="ml-1 inline-flex shrink-0 items-center justify-center whitespace-nowrap text-nowrap break-keep rounded-full border border-[rgba(213,165,91,0.45)] bg-[#151109] px-1 py-0.5 font-['Satoshi:Bold',sans-serif] text-[9px] leading-none text-[#d5a55b] min-[390px]:text-[10px] sm:ml-2 sm:px-2 sm:py-1 sm:text-[12px]">
                      Save {cycle === "12-month" ? "30%" : "15%"}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 items-end gap-5 lg:grid-cols-4 xl:gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              onGetStarted={(tier) => handleGetStarted(plan.id, tier, billingCycle)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, billingCycle, onGetStarted }: {
  plan: Plan;
  billingCycle: BillingCycle;
  onGetStarted: (tierIndex: number) => void;
}) {
  const [selectedCreditIndex, setSelectedCreditIndex] = useState(0);
  const [isCreditMenuOpen, setIsCreditMenuOpen] = useState(false);
  const selectedCredit = plan.creditOptions?.[selectedCreditIndex];
  const price = selectedCredit
    ? discountedPriceForCycle(selectedCredit.planPrice, billingCycle)
    : priceForCycle(plan, billingCycle);
  const creditLabel = selectedCredit?.credits ?? plan.credits;
  const creditPrice = selectedCredit
    ? `${discountedPriceForCycle(selectedCredit.planPrice, billingCycle)}/mo`
    : plan.creditPrice;
  const originalPrice = selectedCredit && selectedCreditIndex > 0 ? undefined : plan.original;
  const displayedFeatures = plan.features.map((feature) =>
    selectedCredit && feature.includes("monthly AI credits")
      ? `${selectedCredit.credits.replace(" credits", "")} monthly AI credits`
      : feature
  );

  return (
    <article
      className={`relative overflow-visible rounded-[20px] border ${
        plan.popular
          ? "border-[#1877f2] bg-[#151515] shadow-[0_0_0_3px_#1877f2]"
          : "border-[rgba(255,255,255,0.08)] bg-[#151515]"
      }`}
    >
      {plan.popular ? (
        <div className="flex h-11 items-center justify-center rounded-t-[20px] bg-[#1877f2] font-['General_Sans:Medium',sans-serif] text-[15px] font-semibold tracking-[0.6px] text-white">
          Most popular
        </div>
      ) : null}

      <div className={`relative h-[178px] overflow-hidden border-b border-[rgba(255,255,255,0.05)] ${plan.popular ? "" : "rounded-t-[20px]"}`}>
        <img alt="" className="h-full w-full object-cover" src={imgImage} />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
      </div>

      <div className="flex min-h-[500px] flex-col px-6 pb-9 pt-9 md:px-7">
        <div className="min-h-[88px]">
          <h3 className="font-['Satoshi:Bold',sans-serif] text-[24px] font-bold leading-8 text-white">
            {plan.name}
          </h3>
          <p className="mt-1.5 font-['General_Sans:Medium',sans-serif] text-[16px] leading-6 text-[#9ca3af]">
            {plan.audience}
          </p>
        </div>

        <div className="mt-7 flex items-end gap-2">
          {originalPrice ? (
            <span className="font-['Satoshi:Bold',sans-serif] text-[30px] font-bold leading-9 text-[#6b7280] line-through">
              {originalPrice}
            </span>
          ) : null}
          <span className="font-['Satoshi:Bold',sans-serif] text-[34px] font-bold leading-9 text-white">
            {price}
          </span>
          {plan.id !== "enterprise" ? (
            <span className="pb-0.5 font-['General_Sans:Medium',sans-serif] text-[16px] font-medium leading-5 text-[#6b7280]">
              /mo
            </span>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => onGetStarted(selectedCreditIndex)}
          className={`mt-8 h-14 w-full rounded-full font-['Satoshi:Bold',sans-serif] text-[18px] font-bold transition-colors duration-150 ${
            plan.popular
              ? "bg-[#1877f2] text-white hover:bg-[#156bdc] active:bg-[#1256b0]"
              : "border border-[#cfd8e6] bg-[#edf4ff] text-[#1877f2] hover:bg-white active:bg-[#dbeafe]"
          }`}
        >
          Get Started
        </button>

        <div className="relative mt-7 flex flex-col items-center">
          <p className="font-['General_Sans:Medium',sans-serif] text-[16px] font-medium leading-5 text-[#aeb7c6]">
            Monthly credits
          </p>
          <button
            type="button"
            onClick={() => {
              if (plan.creditOptions) {
                setIsCreditMenuOpen((isOpen) => !isOpen);
              }
            }}
            aria-expanded={isCreditMenuOpen}
            className={`mt-2.5 flex h-12 max-w-full items-center justify-center gap-2 rounded-[14px] border border-[#374151] px-4 font-['Satoshi:Bold',sans-serif] text-[15px] font-bold text-white lg:px-3 lg:text-[14px] xl:px-4 xl:text-[15px] ${
              plan.creditOptions ? "cursor-pointer hover:border-[#4b6383]" : "cursor-default"
            }`}
          >
            {creditLabel} — {creditPrice}
            {plan.creditOptions ? (
              <ChevronDown size={16} className={`text-[#9ca3af] transition-transform ${isCreditMenuOpen ? "rotate-180" : ""}`} />
            ) : null}
          </button>
          {/* Credit options dropdown — always rendered for smooth CSS transition */}
          <div
            className={`absolute top-[76px] z-30 w-[310px] max-w-[calc(100vw-48px)] overflow-hidden rounded-[18px] bg-[#2f3d52] py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-200 ease-out ${
              isCreditMenuOpen && plan.creditOptions
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {plan.creditOptions?.map((option, index) => (
              <button
                key={`${option.credits}-${option.price}`}
                type="button"
                onClick={() => {
                  setSelectedCreditIndex(index);
                  setIsCreditMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-3 text-left font-['Satoshi:Bold',sans-serif] text-[17px] font-bold text-white transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] ${
                  index === selectedCreditIndex ? "bg-[rgba(24,119,242,0.18)]" : ""
                }`}
              >
                <span>{option.credits} — {discountedPriceForCycle(option.planPrice, billingCycle)}/mo</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-9 flex flex-col gap-[18px]">
          {displayedFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-['General_Sans:Medium',sans-serif] text-[16px] leading-6 text-[#d1d5db]">
              <Check size={16} className="shrink-0 text-white" strokeWidth={2.2} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
