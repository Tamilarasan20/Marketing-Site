import { useState } from "react";
import { Check } from "lucide-react";
import imgImage from "../../imports/Pricing-2/f053ba404d6494c8dc33306c55f94bfec50ce84c.png";

type PlanType = "monthly" | "12-month" | "3-month";

const pricingData = {
  monthly: {
    solo: { original: "$19", price: "$9.99" },
    pro: { original: "$49", price: "$29.99" },
    agency: { original: "$89", price: "$69.99" },
    enterprise: { original: "$199", price: "$149.99" },
  },
  "12-month": {
    solo: { original: "$19", price: "$6.99" },
    pro: { original: "$49", price: "$20.99" },
    agency: { original: "$89", price: "$48.99" },
    enterprise: { original: "$199", price: "$104.99" },
  },
  "3-month": {
    solo: { original: "$19", price: "$8.49" },
    pro: { original: "$49", price: "$25.49" },
    agency: { original: "$89", price: "$59.49" },
    enterprise: { original: "$199", price: "$127.49" },
  },
};

const features = {
  solo: [
    "All 9 helpers",
    "100 monthly AI credits",
    "2 Seats",
    "1 Workspace",
    "Support working hours",
  ],
  pro: [
    "All 9 helpers",
    "500 monthly AI credits",
    "5 Seats",
    "3 Workspace",
    "Support 24/7",
  ],
  agency: [
    "All 9 helpers",
    "1200 monthly AI credits",
    "25 Seats",
    "10 Workspace",
    "Support 24/7",
  ],
  enterprise: [
    "All 9 helpers",
    "2500 monthly AI credits",
    "Unlimited Seats",
    "Unlimited Workspace",
    "Support 24/7",
  ],
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("monthly");

  return (
    <div className="bg-black min-h-screen pt-20 md:pt-32 pb-10 md:pb-20">
      <div className="px-6 md:px-20 py-10 md:py-20">
        <div className="flex flex-col items-center gap-8 md:gap-[42px] max-w-full max-w-full max-w-[740px] px-4 mx-auto mb-12 md:mb-16">
          <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-3xl md:text-[40px] text-center text-white tracking-[-0.8px]">
            Pricing
          </h1>

          <div className="bg-black content-stretch flex flex-col md:flex-row gap-2 md:gap-[8px] items-center justify-center p-2 md:p-[8px] relative rounded-[300px] shrink-0 w-full md:w-auto">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`content-stretch flex items-center justify-center px-4 md:px-[16px] py-3 md:py-[14px] relative rounded-[300px] shrink-0 w-full md:w-auto ${
                selectedPlan === "monthly" ? "bg-[#1f2937]" : ""
              }`}
            >
              <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-sm md:text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">Month plan</p>
            </button>

            <button
              onClick={() => setSelectedPlan("12-month")}
              className={`content-stretch flex gap-[2px] items-center justify-center px-4 md:px-[16px] py-3 md:py-[14px] relative rounded-[300px] shrink-0 w-full md:w-auto ${
                selectedPlan === "12-month" ? "bg-[#1f2937]" : ""
              }`}
            >
              {selectedPlan !== "12-month" && (
                <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
              )}
              <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-sm md:text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">12-month plan</p>
              <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-center justify-center left-1/2 px-3 md:px-[16.749px] py-1 md:py-[2.749px] rounded-[1280px] top-[-12px] md:top-[-14px]">
                <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
                <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[10px] md:text-[12px] tracking-[0.3px] whitespace-nowrap">Save 30%</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedPlan("3-month")}
              className={`content-stretch flex gap-[2px] items-center justify-center px-4 md:px-[16px] py-3 md:py-[14px] relative rounded-[300px] shrink-0 w-full md:w-auto ${
                selectedPlan === "3-month" ? "bg-[#1f2937]" : ""
              }`}
            >
              {selectedPlan !== "3-month" && (
                <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
              )}
              <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-sm md:text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">3-month plan</p>
              <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-start left-[calc(50%+0.25px)] px-3 md:px-[16.749px] py-1 md:py-[2.749px] rounded-[1280px] top-[-12px] md:top-[-15px]">
                <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
                <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[10px] md:text-[12px] tracking-[0.3px] whitespace-nowrap">Save 15%</p>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full max-w-full max-w-[1200px] px-4 mx-auto">
          {/* Solo Plan */}
          <div className="bg-[#131313] rounded-2xl overflow-hidden w-full max-w-full mx-auto">
            <div className="h-[150px] overflow-hidden">
              <img
                src={imgImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 pt-4 pb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white tracking-[0.21px]">
                    Solo
                  </p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <span className="font-['Satoshi:Bold',sans-serif] leading-7 line-through text-[#6b7280] text-xl">
                    {pricingData[selectedPlan].solo.original}
                  </span>
                  <div className="flex items-end gap-0">
                    <span className="font-['Satoshi:Bold',sans-serif] leading-7 text-white text-xl">
                      {pricingData[selectedPlan].solo.price}
                    </span>
                    <span className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs tracking-[0.6px]">
                      /mo
                    </span>
                  </div>
                </div>
              </div>

              <button className="h-10 w-full rounded-full border border-[#374151] font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white hover:bg-[#1f2937] transition-colors">
                Get Loraloop
              </button>

              <div className="flex flex-col gap-3">
                {features.solo.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Check size={12} className="text-white shrink-0" strokeWidth={2} />
                    <span className="font-['General_Sans:Medium',sans-serif] leading-[14px] text-[#d1d5db] text-xs">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-[#1877f2] rounded-2xl p-[2px] w-full max-w-full mx-auto">
            <div className="flex flex-col gap-2 items-center pt-2 pb-[2px]">
              <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-xs text-white tracking-[0.6px]">
                Most popular
              </p>
              <div className="bg-[#151515] rounded-2xl overflow-hidden w-full border border-[rgba(255,255,255,0.05)]">
                <div className="h-[150px] overflow-hidden">
                  <img
                    src={imgImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-5 pt-4 pb-12">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white tracking-[0.21px]">
                        Pro
                      </p>
                    </div>
                    <div className="flex gap-2 items-baseline">
                      <span className="font-['Satoshi:Bold',sans-serif] leading-7 line-through text-[#6b7280] text-xl">
                        {pricingData[selectedPlan].pro.original}
                      </span>
                      <div className="flex items-end gap-0">
                        <span className="font-['Satoshi:Bold',sans-serif] leading-7 text-white text-xl">
                          {pricingData[selectedPlan].pro.price}
                        </span>
                        <span className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs tracking-[0.6px]">
                          /mo
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="h-10 w-full rounded-full bg-[#1877f2] font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-[#1f2937] hover:bg-[#1565d8] transition-colors">
                    Get Loraloop
                  </button>

                  <div className="flex flex-col gap-3">
                    {features.pro.map((feature, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <Check size={12} className="text-white shrink-0" strokeWidth={2} />
                        <span className="font-['General_Sans:Medium',sans-serif] leading-[14px] text-[#d1d5db] text-xs">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Plan */}
          <div className="bg-[#131313] rounded-2xl overflow-hidden w-full max-w-full mx-auto">
            <div className="h-[150px] overflow-hidden">
              <img
                src={imgImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 pt-4 pb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white tracking-[0.21px]">
                    Agency
                  </p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <span className="font-['Satoshi:Bold',sans-serif] leading-7 line-through text-[#6b7280] text-xl">
                    {pricingData[selectedPlan].agency.original}
                  </span>
                  <div className="flex items-end gap-0">
                    <span className="font-['Satoshi:Bold',sans-serif] leading-7 text-white text-xl">
                      {pricingData[selectedPlan].agency.price}
                    </span>
                    <span className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs tracking-[0.6px]">
                      /mo
                    </span>
                  </div>
                </div>
              </div>

              <button className="h-10 w-full rounded-full border border-[#374151] font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white hover:bg-[#1f2937] transition-colors">
                Get Loraloop
              </button>

              <div className="flex flex-col gap-3">
                {features.agency.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Check size={12} className="text-white shrink-0" strokeWidth={2} />
                    <span className="font-['General_Sans:Medium',sans-serif] leading-[14px] text-[#d1d5db] text-xs">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#131313] rounded-2xl overflow-hidden w-full max-w-full mx-auto">
            <div className="h-[150px] overflow-hidden">
              <img
                src={imgImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-5 pt-4 pb-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white tracking-[0.21px]">
                    Enterprise
                  </p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <span className="font-['Satoshi:Bold',sans-serif] leading-7 line-through text-[#6b7280] text-xl">
                    {pricingData[selectedPlan].enterprise.original}
                  </span>
                  <div className="flex items-end gap-0">
                    <span className="font-['Satoshi:Bold',sans-serif] leading-7 text-white text-xl">
                      {pricingData[selectedPlan].enterprise.price}
                    </span>
                    <span className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs tracking-[0.6px]">
                      /mo
                    </span>
                  </div>
                </div>
              </div>

              <button className="h-10 w-full rounded-full border border-[#374151] font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white hover:bg-[#1f2937] transition-colors">
                Get Loraloop
              </button>

              <div className="flex flex-col gap-3">
                {features.enterprise.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Check size={12} className="text-white shrink-0" strokeWidth={2} />
                    <span className="font-['General_Sans:Medium',sans-serif] leading-[14px] text-[#d1d5db] text-xs">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
