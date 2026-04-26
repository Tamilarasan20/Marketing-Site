import svgPaths from "./svg-n3x7bdwv33";
type PriceAndFaqProps = {
  className?: string;
  children?: React.ReactNode | null;
};

export default function PriceAndFaq({ className, children = null }: PriceAndFaqProps) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[48px] items-center overflow-clip py-[80px] relative w-[1280px]"} data-name="Price and FAQ">
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center" data-name="Cotnet">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#1f2937] text-[40px] tracking-[-0.8px] whitespace-nowrap">Frequently Asked Questions</p>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[#6b7280] text-[20px] w-[min-content]">Watch how Loraloop manage marketing end to end</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[1000px]" data-name="Container">
        {children || (
          <>
            <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Question">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="content-stretch flex gap-[32px] items-baseline p-[24px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px not-italic relative" data-name="Container">
                  <p className="font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] opacity-88 relative shrink-0 text-[#1f2937] text-[20px] w-full">What is Loraloops AI employee?</p>
                  <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] opacity-80 relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
                    <p className="leading-[22px] mb-0">Loraloop AI employees are autonomous digital workers that handle your marketing tasks end-to-end.</p>
                    <p className="leading-[22px]">{`They plan campaigns, create content, publish posts, run ads, track performance, and continuously optimize  all without manual effort. Think of them as a full marketing team that works 24/7, never sleeps, and keeps improving results automatically.`}</p>
                  </div>
                </div>
                <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
                  <div className="relative shrink-0 size-[20px]" data-name="chevron-up">
                    <div className="absolute inset-[33.33%_20.83%]" data-name="path">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                        <path clipRule="evenodd" d={svgPaths.p2c9b2300} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[32px] items-center p-[24px] relative size-full">
                  <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] min-w-px not-italic opacity-88 relative text-[#1f2937] text-[20px]">What can I use Loraloop AI employees for?</p>
                  <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
                      <div className="absolute inset-[33.33%_20.83%]" data-name="path">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                          <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[32px] items-center p-[24px] relative size-full">
                  <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] min-w-px not-italic opacity-88 relative text-[#1f2937] text-[20px]">Can AI employees replace human employees?</p>
                  <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
                      <div className="absolute inset-[33.33%_20.83%]" data-name="path">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                          <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}