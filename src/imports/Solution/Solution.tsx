import svgPaths from "./svg-v3nqale4hi";
import imgProfileImage from "./32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";
import imgImage190 from "./477593f47efb019382046da2baab475c895d18ac.png";
import imgImage189 from "./c50f548c927048a571456a95c7cf7e55218fe47b.png";
import imgEllipse2 from "./a2ae2cf8cb232063b4086bffd3b1e88948abebc4.png";
import imgEllipse3 from "./fa84d9f484ac7ad0443c08af899733eba5803934.png";
import imgImage185 from "./1ca3d61ded6d37fffa93f794057e86071e0300ea.png";
import imgEllipse4 from "./b52329e048301cb29a66056d163f2e78efc6a5a0.png";
import imgFeatureImageSmall1 from "./716c7778e50d7ebaf89d87cc7045f11c7dc8c365.png";
import imgLogos from "./4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos1 from "./acfc7503e01b011ae7f17074baec7c0d31a597f8.png";
import imgImage187 from "./b76237f466af6e76be8b56dc75d1d5e7731fbb48.png";
import imgLogos2 from "./6542a1e22417f251cbc55d42da5eae61e5cb8217.png";
import imgImage172 from "./a091e0e97bb7d939c455df7635918b4c8c69a7b8.png";
import imgLogos3 from "./c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos4 from "./62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";
import { imgFeatureImageSmall, imgGroup } from "./svg-zpiav";

function Frame16() {
  return (
    <div className="font-semibold bg-[#eefdf3] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[20px] shrink-0">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#14a148] text-[14px] text-center whitespace-nowrap">AI Employees / Solution</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center relative shrink-0 text-[#1f2937] text-[14px]">
        <p className="leading-[18px]">AI Marketing Lead</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="leading-[16px]">Lora</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex gap-[24px] items-center p-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bfdbfe] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex gap-[12px] items-center relative rounded-[20px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[40px]" data-name="Profile Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
        </div>
        <Content />
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down cr-fr">
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p17d37970} fill="var(--fill-0, #12131A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame16 />
      <Container />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#1f2937] text-[56px] tracking-[-1.4px] w-[min-content]">
        <span className="leading-[60px]">
          Hi I’m Lora, Your
          <br aria-hidden="true" />
        </span>
        <span className="leading-[60px] text-[#9131ea]">Autonomous AI Marketing Lead</span>
      </p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#6b7280] text-[18px] w-[546px]">Lora crafts a tailored marketing strategy from your goals. She breaks down tasks, assigns them to the right team members, and ensures every action stays true to your brand voice.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[800px]">
      <Frame18 />
      <div className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[120px] shrink-0 w-[120px]" data-name="Button">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get Start</p>
      </div>
    </div>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[40px] items-center pb-[40px] px-[80px] relative shrink-0 w-full max-w-[1280px] px-4"} data-name="header">
      <Frame39 />
      <Frame15 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[80px] py-[40px] relative size-full">
          <div className="absolute h-[901px] left-0 top-0 w-full max-w-[1280px] px-4" data-name="image 190">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage190} />
          </div>
          <div className="h-[660px] pointer-events-none relative rounded-[32px] shrink-0 w-[1020px]" data-name="image 189">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgImage189} />
            <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 rounded-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex items-center left-[calc(50%-0.5px)] p-[10px] rounded-[25px] top-1/2 z-[3]">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-right-double">
        <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-8.13%_-6.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.625 11.625">
              <path d={svgPaths.p1028c000} id="Icon" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.625" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">AI just assist you do all manually</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">{`Spending 30+ hrs/week creating & managing contents`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">Checking multiple tools just to understand performance</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">$5000 to Hire freelancers or teams for manage marketing.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">{` Running ads without knowing what actually works`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-baseline relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
        <div className="absolute inset-1/4" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d="M9 1L1 9M1 1L9 9" id="Icon" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#1f2937] text-[16px]">
        <p className="leading-[22px]">Paying $1000 for various marketing tools.</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f9fafc] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative z-[2]">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[40px] py-[32px] relative size-full">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[24px] text-center whitespace-nowrap">
            <p className="leading-[32px]">You doing all work</p>
          </div>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eefdf3] content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative rounded-[80px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="users-02">
        <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-7.06%_-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6668 16.1667">
              <path d={svgPaths.p28fb33f0} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#14a148] text-[16px] w-[411px]">Coordinates all AI Employees for execution in your voice</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative rounded-[80px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="bar-chart-12">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p697ae90} id="Icon" stroke="var(--stroke-0, #1877F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1877f2] text-[16px] whitespace-nowrap">Analyze performance across all channels</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fce7f3] content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative rounded-[80px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="target-04">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
              <path d={svgPaths.p28e06c80} id="Icon" stroke="var(--stroke-0, #EC4899)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#ec4899] text-[16px] whitespace-nowrap">Track competitors and market shifts in real-time</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f2e7ff] content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative rounded-[80px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="text_snippet">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p29a5000} fill="var(--fill-0, #9131EA)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#9131ea] text-[16px] whitespace-nowrap">{`Share daily insights & Plan next marketing`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fffaea] content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative rounded-[80px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="lightbulb-02">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p1fa4cc00} id="Icon" stroke="var(--stroke-0, #D77504)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d77504] text-[16px] whitespace-nowrap">{`Discover trends, ideas & winning strategies instantly`}</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative z-[1]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[40px] py-[32px] relative size-full">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[24px] text-center whitespace-nowrap">
            <p className="leading-[32px]">AI employees executes while you sleep</p>
          </div>
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div className="content-stretch flex isolate items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame20 />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame27 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame28 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="font-bold content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1f2937] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap">Old vs New AI Way!</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return <div className="absolute contents inset-0" data-name="Mask group" />;
}

function MaskGroup1() {
  return <div className="absolute contents inset-0" data-name="Mask group" />;
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0">
      <div className="mr-[-4px] relative shrink-0 size-[12px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="12" src={imgEllipse2} width="12" />
        </div>
        <MaskGroup />
      </div>
      <div className="mr-[-4px] relative rounded-[50px] shrink-0 size-[12px]" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[51px]" />
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="12" src={imgEllipse3} width="12" />
        </div>
        <MaskGroup1 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f9fafc] content-stretch flex gap-[4px] items-center overflow-clip px-[4px] py-[2px] relative rounded-[20px] shrink-0">
      <Frame31 />
      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[normal]">AI Agents Deep Analyse</p>
      </div>
    </div>
  );
}

function StatusLine() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Checkmark">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.86%_-6.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9667 8.63333">
              <path d={svgPaths.p3af4ac10} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Done</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">Analysed market trends, Monitor Competitors across social media platforms</p>
      </div>
      <StatusLine />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Content">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function AvatarWithTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
      </div>
      <Content1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pl-[8px] pr-[24px] py-[12px] relative size-full">
          <AvatarWithTitle />
          <div className="absolute bottom-[12px] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic right-[60px] text-[#6b7280] text-[12px] translate-x-full translate-y-1/2 whitespace-nowrap">
            <p className="leading-[16px]">05:11 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusLine1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Checkmark">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.86%_-6.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9667 8.63333">
              <path d={svgPaths.p3af4ac10} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Done</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">{`Posts created across channels Insta, X, TikTok, Youtube, etc. `}</p>
      </div>
      <StatusLine1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
          </div>
          <Frame33 />
          <div className="absolute bottom-[12px] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic right-[57px] text-[#6b7280] text-[12px] translate-x-full translate-y-1/2 whitespace-nowrap">
            <p className="leading-[16px]">05:12 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusLine2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Checkmark">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6333 14.6333">
              <path d={svgPaths.p18412b80} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Published</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">Published Posts, Blogs, Videos, Ads</p>
      </div>
      <StatusLine2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
          </div>
          <Frame34 />
          <div className="absolute bottom-[12px] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic right-[60px] text-[#6b7280] text-[12px] translate-x-full translate-y-1/2 whitespace-nowrap">
            <p className="leading-[16px]">05:13 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-1/2 w-[400px]">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function StatusLine3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Checkmark">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.86%_-6.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9667 8.63333">
              <path d={svgPaths.p3af4ac10} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Progress</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Draft Q2 Content Calendar</p>
      </div>
      <StatusLine3 />
    </div>
  );
}

function TitleWithStatus() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content2 />
    </div>
  );
}

function AvatarWithTitle1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
      </div>
      <TitleWithStatus />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[36px] px-[8px] py-[12px] rounded-[16px] top-[296px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle1 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function StatusLine4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Checkmark">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.86%_-6.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9667 8.63333">
              <path d={svgPaths.p3af4ac10} id="Icon" stroke="var(--stroke-0, #14A148)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Pending</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Finalize Q1 Report</p>
      </div>
      <StatusLine4 />
    </div>
  );
}

function TitleWithStatus1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content3 />
    </div>
  );
}

function AvatarWithTitle2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
      </div>
      <TitleWithStatus1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[36px] px-[8px] py-[12px] rounded-[16px] top-[365px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle2 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function StatusLine5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6333 14.6333">
              <path d={svgPaths.p3129b680} id="Icon" stroke="var(--stroke-0, #B25107)" strokeDasharray="2.6 2.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b25107] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Approved</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Email Newsletter design</p>
      </div>
      <StatusLine5 />
    </div>
  );
}

function TitleWithStatus2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content4 />
    </div>
  );
}

function AvatarWithTitle3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
      </div>
      <TitleWithStatus2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[36px] px-[8px] py-[12px] rounded-[16px] top-[434px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle3 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function StatusLine6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6333 14.6333">
              <path d={svgPaths.p3129b680} id="Icon" stroke="var(--stroke-0, #B25107)" strokeDasharray="2.6 2.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b25107] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Progress</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Competitor Analysis Update</p>
      </div>
      <StatusLine6 />
    </div>
  );
}

function TitleWithStatus3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content5 />
    </div>
  );
}

function AvatarWithTitle4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfileImage} />
      </div>
      <TitleWithStatus3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[36px] px-[8px] py-[12px] rounded-[16px] top-[503px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle4 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="h-[300px] opacity-96 relative rounded-[16px] shrink-0 w-full" data-name="Slot">
      <div className="absolute h-[410px] left-0 top-[-25px] w-[582.701px]" data-name="image 185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage190} />
      </div>
      <Frame29 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Description Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative size-full text-center">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#14a148] text-[24px] tracking-[-0.5px] w-full">
            <p className="leading-[32px]">Social Media Runs Itself</p>
          </div>
          <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
            <p className="leading-[22px]">Lora understand you end to end, Turn your business goals into a structured marketing plan with clear next steps acct like personal marketing lead.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute aspect-[1048/954] bottom-[-10.5px] left-[-13.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.5px_-2px] mask-size-[40px_40px] right-[-20%]" style={{ maskImage: `url('${imgFeatureImageSmall}')` }} data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[0.21px]">New trending topic</p>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#14a148] text-[12px]">
        <p className="leading-[16px]">AI Content Tools 2026</p>
      </div>
    </div>
  );
}

function TitleWithStatus4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content6 />
    </div>
  );
}

function AvatarWithTitle5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgEllipse4} width="40" />
        </div>
        <MaskGroup2 />
      </div>
      <TitleWithStatus4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] items-center left-[36px] px-[8px] py-[12px] rounded-[16px] top-[20px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle5 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">Explore</p>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute aspect-[1048/954] bottom-[-10.5px] left-[-13.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.5px_-2px] mask-size-[40px_40px] right-[-20%]" style={{ maskImage: `url('${imgFeatureImageSmall}')` }} data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[0.21px]">Competitor analysis ready</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#155dfc] text-[12px]">30 new growth posts detected</p>
    </div>
  );
}

function TitleWithStatus5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content7 />
    </div>
  );
}

function AvatarWithTitle6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgEllipse4} width="40" />
        </div>
        <MaskGroup3 />
      </div>
      <TitleWithStatus5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] items-center px-[8px] py-[12px] right-[36px] rounded-[16px] top-[89px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle6 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute aspect-[1048/954] bottom-[-10.5px] left-[-13.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.5px_-2px] mask-size-[40px_40px] right-[-20%]" style={{ maskImage: `url('${imgFeatureImageSmall}')` }} data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
    </div>
  );
}

function StatusLine7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Status Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6333 14.6333">
              <path d={svgPaths.p3129b680} id="Icon" stroke="var(--stroke-0, #B25107)" strokeDasharray="2.6 2.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b25107] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Need Approval</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[0.21px] whitespace-nowrap">Trending content spotted 10x view</p>
      <StatusLine7 />
    </div>
  );
}

function TitleWithStatus6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content8 />
    </div>
  );
}

function AvatarWithTitle7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgEllipse4} width="40" />
        </div>
        <MaskGroup4 />
      </div>
      <TitleWithStatus6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] items-center left-[36px] px-[8px] py-[12px] rounded-[16px] top-[158px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle7 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute aspect-[1048/954] bottom-[-10.5px] left-[-13.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.5px_-2px] mask-size-[40px_40px] right-[-20%]" style={{ maskImage: `url('${imgFeatureImageSmall}')` }} data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[0.21px]">Content trending idea generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#e17100] text-[12px]">12 ideas ready</p>
    </div>
  );
}

function TitleWithStatus7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content9 />
    </div>
  );
}

function AvatarWithTitle8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgEllipse4} width="40" />
        </div>
        <MaskGroup5 />
      </div>
      <TitleWithStatus7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] items-center px-[8px] py-[12px] right-[36px] rounded-[16px] top-[227px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle8 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <div className="absolute aspect-[1048/954] bottom-[-10.5px] left-[-13.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.5px_-2px] mask-size-[40px_40px] right-[-20%]" style={{ maskImage: `url('${imgFeatureImageSmall}')` }} data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#101828] text-[14px] tracking-[0.21px]">Content trending idea generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#e17100] text-[12px]">12 ideas ready</p>
    </div>
  );
}

function TitleWithStatus8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title with Status">
      <Content10 />
    </div>
  );
}

function AvatarWithTitle9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Component 2">
        <div className="absolute aspect-[100/100] left-0 right-0 top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgEllipse4} width="40" />
        </div>
        <MaskGroup6 />
      </div>
      <TitleWithStatus8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[32px] items-center left-[36px] px-[8px] py-[12px] rounded-[16px] top-[296px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle9 />
      <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[0.3px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="h-[300px] opacity-96 relative rounded-[16px] shrink-0 w-[540px]" data-name="Slot">
      <div className="absolute h-[411px] left-0 top-[-25px] w-[584px]" data-name="image 185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
      </div>
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function DescriptionSection1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative shrink-0 text-center w-[540px]" data-name="Description Section">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#14a148] text-[24px] tracking-[-0.5px] w-full">
        <p>
          <span className="leading-[32px]">Discover ideas, trends, monitor competitor</span>
          <span className="leading-[32px] text-[#1f2937]">{` your marketing 10x value content`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[22px]">Effortlessly find current trends, demands, monitor competitor doing etc. Based on create content types, ideas, topics to grow social media and ROI more.</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#14a148] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        New Idea
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-pre" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>{`Or Existing  Content`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[4%_5.61%_0_19.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9325 23.04">
            <path d={svgPaths.p3d0667b0} fill="var(--fill-0, #FF004F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4%_10.41%_4%_11.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8526 22.08">
            <path d={svgPaths.pf88dc00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_10.41%_9.14%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0025 21.807">
            <path d={svgPaths.p54aa3c0} fill="var(--fill-0, #00F2EA)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[0_0_0.37%_0]" data-name="c">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0005 23.9122">
            <path d={svgPaths.p3d66d500} fill="var(--fill-0, #0866FF)" id="c" />
          </svg>
        </div>
        <div className="absolute inset-[18.51%_26.8%_0_27.61%]" data-name="d">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9416 19.5576">
            <path d={svgPaths.p1eafe100} fill="var(--fill-0, white)" id="d" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[14.77%_-0.1%_14.77%_0.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16.9091">
            <path d={svgPaths.p250fda00} fill="var(--fill-0, #FF0302)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.13%_33.99%_35.13%_39.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27272 7.13727">
            <path d={svgPaths.p940fe80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.886">
            <path d={svgPaths.p841f020} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-5.44%] max-w-none size-[114.01%] top-[-5.88%]" src={imgLogos1} />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pde3f5f0} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 1">
            <path d={svgPaths.pdf1f80} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p1dfebd00} fill="url(#paint0_radial_1_7406)" id="Vector_2" />
            <path d={svgPaths.pe166600} fill="url(#paint1_radial_1_7406)" id="Vector_3" />
            <path d={svgPaths.p21d57800} fill="url(#paint2_radial_1_7406)" id="Vector_4" />
            <path d={svgPaths.p9afba80} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p2984ff80} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p5a9a400} fill="url(#paint3_radial_1_7406)" id="Vector_7" />
            <path d={svgPaths.p2719bd80} fill="url(#paint4_radial_1_7406)" id="Vector_8" />
            <path d={svgPaths.p2ed6f600} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p30be1cf0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p2c7b2180} fill="url(#paint5_radial_1_7406)" id="Vector_11" />
            <path d={svgPaths.p46e880} fill="url(#paint6_radial_1_7406)" id="Vector_12" />
            <path d={svgPaths.p368bcef0} fill="url(#paint7_radial_1_7406)" id="Vector_13" />
            <path d={svgPaths.p547dd00} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.pc5dd900} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p1fc8c000} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.p20a88170} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(18.8447 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(5.23977 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.2201 9.29777) scale(16.9394 11.8936)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(15.4951 14.1535) rotate(180) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7406" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.45548 14.1535) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7406" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.0342 18.2726) scale(4.99052 3.29162)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7406" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.4354 3.19749) scale(4.38069)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(14.6098 7.97304) scale(3.59065)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7406" r="1">
              <stop offset="0.48" stopColor="#7A9299" />
              <stop offset="0.67" stopColor="#172E35" />
              <stop offset="0.75" />
              <stop offset="0.82" stopColor="#172E35" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Marketing Tools">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+0.06px)] top-1/2 w-[22.613px]" data-name="Mailchimp">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6129 24">
            <g id="Mailchimp">
              <path d={svgPaths.p368abf80} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.pd9d7ec0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p2449fc00} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p300fb900} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p11ef69c0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p1fd45080} fill="var(--fill-0, #000008)" />
              <path clipRule="evenodd" d={svgPaths.p36b9200} fill="var(--fill-0, #000008)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-[1/span_3] justify-self-stretch relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            More..
          </p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid-cols-[___44px_44px_fit-content(100%)] grid-rows-[repeat(4,fit-content(100%))] inline-grid relative rounded-[60px] shrink-0" data-name="Container">
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0">
      <Frame42 />
      <Frame43 />
      <Container24 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center p-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#14a148] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Create / Repurpose
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="> Chevron Right">
        <div className="absolute inset-[22.26%_29.17%_22.26%_38.93%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10335 8.87578">
            <path d={svgPaths.p24e1ca72} fill="var(--fill-0, #6B7280)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[4%_5.61%_0_19.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9325 23.04">
            <path d={svgPaths.p3d0667b0} fill="var(--fill-0, #FF004F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4%_10.41%_4%_11.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8526 22.08">
            <path d={svgPaths.pf88dc00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_10.41%_9.14%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0025 21.807">
            <path d={svgPaths.p54aa3c0} fill="var(--fill-0, #00F2EA)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[0_0_0.37%_0]" data-name="c">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0005 23.9122">
            <path d={svgPaths.p3d66d500} fill="var(--fill-0, #0866FF)" id="c" />
          </svg>
        </div>
        <div className="absolute inset-[18.51%_26.8%_0_27.61%]" data-name="d">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9416 19.5576">
            <path d={svgPaths.p1eafe100} fill="var(--fill-0, white)" id="d" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[14.77%_-0.1%_14.77%_0.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16.9091">
            <path d={svgPaths.p250fda00} fill="var(--fill-0, #FF0302)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.13%_33.99%_35.13%_39.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.27272 7.13727">
            <path d={svgPaths.p940fe80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.886">
            <path d={svgPaths.p841f020} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-5.44%] max-w-none size-[114.01%] top-[-5.88%]" src={imgLogos1} />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-2 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pde3f5f0} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 1">
            <path d={svgPaths.pdf1f80} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p1dfebd00} fill="url(#paint0_radial_1_7406)" id="Vector_2" />
            <path d={svgPaths.pe166600} fill="url(#paint1_radial_1_7406)" id="Vector_3" />
            <path d={svgPaths.p21d57800} fill="url(#paint2_radial_1_7406)" id="Vector_4" />
            <path d={svgPaths.p9afba80} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p2984ff80} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p5a9a400} fill="url(#paint3_radial_1_7406)" id="Vector_7" />
            <path d={svgPaths.p2719bd80} fill="url(#paint4_radial_1_7406)" id="Vector_8" />
            <path d={svgPaths.p2ed6f600} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p30be1cf0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p2c7b2180} fill="url(#paint5_radial_1_7406)" id="Vector_11" />
            <path d={svgPaths.p46e880} fill="url(#paint6_radial_1_7406)" id="Vector_12" />
            <path d={svgPaths.p368bcef0} fill="url(#paint7_radial_1_7406)" id="Vector_13" />
            <path d={svgPaths.p547dd00} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.pc5dd900} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p1fc8c000} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.p20a88170} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(18.8447 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(5.23977 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.2201 9.29777) scale(16.9394 11.8936)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(15.4951 14.1535) rotate(180) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7406" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.45548 14.1535) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7406" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.0342 18.2726) scale(4.99052 3.29162)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7406" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.4354 3.19749) scale(4.38069)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7406" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(14.6098 7.97304) scale(3.59065)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7406" r="1">
              <stop offset="0.48" stopColor="#7A9299" />
              <stop offset="0.67" stopColor="#172E35" />
              <stop offset="0.75" />
              <stop offset="0.82" stopColor="#172E35" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Marketing Tools">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-[calc(50%+0.06px)] top-1/2 w-[22.613px]" data-name="Mailchimp">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6129 24">
            <g id="Mailchimp">
              <path d={svgPaths.p368abf80} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.pd9d7ec0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p2449fc00} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p300fb900} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p11ef69c0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p1fd45080} fill="var(--fill-0, #000008)" />
              <path clipRule="evenodd" d={svgPaths.p36b9200} fill="var(--fill-0, #000008)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function GoogleAds() {
  return (
    <div className="absolute inset-[3.13%_0_5.5%_0]" data-name="Google Ads">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21.9289">
        <g id="Google Ads">
          <path d={svgPaths.p2501ab00} fill="var(--fill-0, #4285F4)" id="Element" />
          <path d={svgPaths.p39cc3940} fill="var(--fill-0, #FBBC05)" id="Element_2" />
          <path d={svgPaths.p3ffa4d80} fill="var(--fill-0, #34A853)" id="Element_3" />
          <path d={svgPaths.p1f099200} fill="var(--fill-0, #FBBC05)" id="Element_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Marketing Tools">
        <GoogleAds />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-3 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Marketing Tools">
        <div className="-translate-y-1/2 absolute h-[14.25px] left-0 right-0 top-[calc(50%+0.38px)]" data-name="WooCommerce">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14.25">
            <g id="WooCommerce">
              <path clipRule="evenodd" d={svgPaths.p10b94000} fill="#7D57A4" fillRule="evenodd" />
              <path d={svgPaths.pab38380} fill="var(--fill-0, white)" />
              <path d={svgPaths.pf05c840} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1d816380} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Symbol() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21px]" data-name="Symbol 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g clipPath="url(#clip0_1_7336)" id="Symbol 1">
          <path clipRule="evenodd" d={svgPaths.pab88600} fill="var(--fill-0, #95BF47)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p246ae280} fill="var(--fill-0, #5E8E3E)" id="Vector_2" />
          <path d={svgPaths.p34adf170} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_7336">
            <rect fill="white" height="24" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Symbol />
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid-cols-[repeat(3,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] inline-grid relative rounded-[60px] shrink-0" data-name="Container">
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            More..
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0">
      <Container25 />
      <Frame67 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-1/2 top-1/2">
      <Frame40 />
      <Frame21 />
      <Frame54 />
    </div>
  );
}

function Slot2() {
  return (
    <div className="h-[300px] opacity-96 relative rounded-[16px] shrink-0 w-[540px]" data-name="Slot">
      <div className="absolute h-[411px] left-0 top-[-25px] w-[584px]" data-name="image 185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
      </div>
      <Frame36 />
    </div>
  );
}

function DescriptionSection2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative shrink-0 text-center w-[540px]" data-name="Description Section">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#1f2937] text-[24px] tracking-[-0.5px] w-full">
        <p>
          <span className="leading-[32px] text-[#14a148]">Turn idea/existing content</span>
          <span className="leading-[32px]">{` into social posts, blogs, TikToks, YouTube videos in minutes.`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[22px]">Use one idea or existing content to create everything you need posts and videos ready to publish, without doing the work yourself grow social media presence while you sleep.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.55%_-0.9%_-0.61%_-0.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.282px_0.264px] mask-size-[48px_48px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <div className="absolute inset-[-7.62%_-1.65%_-1.66%_-1.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.0368 46.4311">
          <g id="Group">
            <g filter="url(#filter0_f_1_7393)" id="Vector">
              <path d={svgPaths.p461b280} fill="url(#paint0_radial_1_7393)" />
            </g>
            <g filter="url(#filter1_f_1_7393)" id="Vector_2">
              <path d={svgPaths.p3959b00} fill="url(#paint1_radial_1_7393)" />
            </g>
            <g filter="url(#filter2_f_1_7393)" id="Vector_3">
              <path d={svgPaths.p2b4e7800} fill="url(#paint2_radial_1_7393)" />
            </g>
            <g filter="url(#filter3_f_1_7393)" id="Vector_4">
              <path d={svgPaths.p34e7e500} fill="url(#paint3_radial_1_7393)" />
            </g>
            <g filter="url(#filter4_f_1_7393)" id="Vector_5">
              <path d={svgPaths.p3d73a500} fill="var(--fill-0, #3086FF)" />
            </g>
            <g filter="url(#filter5_f_1_7393)" id="Vector_6">
              <path d={svgPaths.p10697e00} fill="url(#paint4_radial_1_7393)" />
            </g>
            <g filter="url(#filter6_f_1_7393)" id="Vector_7">
              <path d={svgPaths.p2c3c4480} fill="url(#paint5_radial_1_7393)" />
            </g>
            <g filter="url(#filter7_f_1_7393)" id="Vector_8">
              <path d={svgPaths.p11af1780} fill="url(#paint6_radial_1_7393)" />
            </g>
            <g filter="url(#filter8_f_1_7393)" id="Vector_9" opacity="0.5">
              <path d={svgPaths.p3a324f00} fill="url(#paint7_linear_1_7393)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.2173" id="filter0_f_1_7393" width="17.7199" x="0.00428277" y="23.8549">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.2038" id="filter1_f_1_7393" width="16.5224" x="21.1652" y="2.56135">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.5371" id="filter2_f_1_7393" width="17.995" x="5.33269" y="2.53444">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.2042" id="filter3_f_1_7393" width="24.1929" x="19.8063" y="24.1948">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.0976" id="filter4_f_1_7393" width="22.5892" x="21.4476" y="19.5114">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.7042" id="filter5_f_1_7393" width="14.9469" x="-8.10615e-09" y="9.40598">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.5077" id="filter6_f_1_7393" width="22.5616" x="0.088715" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="2.47864" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.9959" id="filter7_f_1_7393" width="16.8711" x="6.29996" y="34.4351">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.6304" id="filter8_f_1_7393" width="6.62666" x="19.1526" y="35.8006">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7393" stdDeviation="0.35256" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.872763 -20.9158 31.3794 -1.25514 16.8228 39.0519)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7393" r="1">
              <stop offset="0.141612" stopColor="#1ABD4D" />
              <stop offset="0.247515" stopColor="#6EC30D" />
              <stop offset="0.311547" stopColor="#8AC502" />
              <stop offset="0.366013" stopColor="#A2C600" />
              <stop offset="0.445673" stopColor="#C8C903" />
              <stop offset="0.540305" stopColor="#EBCB03" />
              <stop offset="0.615636" stopColor="#F7CD07" />
              <stop offset="0.699345" stopColor="#FDCD04" />
              <stop offset="0.771242" stopColor="#FDCE05" />
              <stop offset="0.860566" stopColor="#FFCE0A" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(14.8219 -3.56224e-05 -2.08328e-05 18.7412 36.3946 14.6149)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7393" r="1">
              <stop offset="0.408458" stopColor="#FB4E5A" />
              <stop offset="1" stopColor="#FF4540" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-20.7666 11.2611 15.6078 27.5905 28.3003 0.526701)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7393" r="1">
              <stop offset="0.231273" stopColor="#FF4541" />
              <stop offset="0.311547" stopColor="#FF4540" />
              <stop offset="0.457516" stopColor="#FF4640" />
              <stop offset="0.540305" stopColor="#FF473F" />
              <stop offset="0.699346" stopColor="#FF5138" />
              <stop offset="0.771242" stopColor="#FF5B33" />
              <stop offset="0.860566" stopColor="#FF6C29" />
              <stop offset="1" stopColor="#FF8C18" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-37.6608 -48.1333 -18.1469 13.6107 22.7747 42.9756)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7393" r="1">
              <stop offset="0.131546" stopColor="#0CBA65" />
              <stop offset="0.209784" stopColor="#0BB86D" />
              <stop offset="0.297297" stopColor="#09B479" />
              <stop offset="0.396257" stopColor="#08AD93" />
              <stop offset="0.477124" stopColor="#0AA6A9" />
              <stop offset="0.568425" stopColor="#0D9CC6" />
              <stop offset="0.667385" stopColor="#1893DD" />
              <stop offset="0.768727" stopColor="#258BF1" />
              <stop offset="0.858506" stopColor="#3086FF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-2.66517 22.4913 31.7627 3.60794 20.6255 7.20632)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7393" r="1">
              <stop offset="0.366013" stopColor="#FF4E3A" />
              <stop offset="0.457516" stopColor="#FF8A1B" />
              <stop offset="0.540305" stopColor="#FFA312" />
              <stop offset="0.615636" stopColor="#FFB60C" />
              <stop offset="0.771242" stopColor="#FFCD0A" />
              <stop offset="0.860566" stopColor="#FECF0A" />
              <stop offset="0.915033" stopColor="#FECF08" />
              <stop offset="1" stopColor="#FDCD01" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-7.70372 8.34186 -24.0314 -21.274 16.8776 6.97302)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7393" r="1">
              <stop offset="0.315904" stopColor="#FF4C3C" />
              <stop offset="0.603818" stopColor="#FF692C" />
              <stop offset="0.726837" stopColor="#FF7825" />
              <stop offset="0.884534" stopColor="#FF8D1B" />
              <stop offset="1" stopColor="#FF9F13" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-20.7666 -11.2611 15.6078 -27.5905 28.3003 48.3112)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7393" r="1">
              <stop offset="0.231273" stopColor="#0FBC5F" />
              <stop offset="0.311547" stopColor="#0FBC5F" />
              <stop offset="0.366013" stopColor="#0FBC5E" />
              <stop offset="0.457516" stopColor="#0FBC5D" />
              <stop offset="0.540305" stopColor="#12BC58" />
              <stop offset="0.699346" stopColor="#28BF3C" />
              <stop offset="0.771242" stopColor="#38C02B" />
              <stop offset="0.860566" stopColor="#52C218" />
              <stop offset="0.915033" stopColor="#67C30F" />
              <stop offset="1" stopColor="#86C504" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_7393" x1="19.8577" x2="25.0741" y1="41.1158" y2="41.1158">
              <stop stopColor="#0FBC5C" />
              <stop offset="1" stopColor="#0CBA65" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GoogleAnalyticsLogomark() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Google Analytics Logomark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Google Analytics Logomark">
          <g id="Google Analytics">
            <path d={svgPaths.p16b52e00} fill="#F8AB00" />
            <path d={svgPaths.p18390500} fill="var(--fill-0, #E37300)" />
            <path d={svgPaths.paa17480} fill="var(--fill-0, #E37300)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_0_12.48%_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9994 31.5078">
        <g id="Group 81">
          <path d={svgPaths.p192fba80} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p1083b300} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p2e051070} fill="var(--fill-0, #FBBC04)" id="Vector_3" />
          <path d={svgPaths.p34c37280} fill="var(--fill-0, #EA4335)" id="Vector_4" />
          <path d={svgPaths.pca002c0} fill="var(--fill-0, #C5221F)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function GoogleDrive() {
  return (
    <div className="absolute inset-[6.84%_0_6.68%_0]" data-name="google-drive">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 36.3234">
        <g id="google-drive">
          <path d={svgPaths.pcc6d780} fill="url(#paint0_linear_1_7480)" id="Path" />
          <path d={svgPaths.p316d8a00} fill="url(#paint1_linear_1_7480)" id="Path_2" />
          <path d={svgPaths.pe91a7f0} fill="url(#paint2_linear_1_7480)" id="Path_3" />
          <path d={svgPaths.p36a5f480} fill="var(--fill-0, black)" id="Path_4" opacity="0.1" />
          <path d={svgPaths.p261d4900} fill="var(--fill-0, black)" id="Path_5" opacity="0.1" />
          <path d={svgPaths.pe22c340} fill="var(--fill-0, black)" id="Path_6" opacity="0.1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7480" x1="-6.62553" x2="15.3269" y1="6.71922" y2="44.3516">
            <stop stopColor="#F6C338" />
            <stop offset="0.522782" stopColor="#FFD351" />
            <stop offset="1" stopColor="#F6C338" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7480" x1="-88.7427" x2="-93.422" y1="-23.9641" y2="72.7655">
            <stop stopColor="#286EE6" />
            <stop offset="0.521046" stopColor="#4286FB" />
            <stop offset="1" stopColor="#286EE6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7480" x1="9.606" x2="-19.9142" y1="-15.9173" y2="3.55605">
            <stop stopColor="#069B5A" />
            <stop offset="0.531031" stopColor="#11AA62" />
            <stop offset="1" stopColor="#069B5A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GoogleAds1() {
  return (
    <div className="absolute inset-[3.13%_0_5.5%_0]" data-name="Google Ads">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 38.3755">
        <g id="Google Ads">
          <path d={svgPaths.p2f00e000} fill="var(--fill-0, #4285F4)" id="Element" />
          <path d={svgPaths.p1c13ae00} fill="var(--fill-0, #FBBC05)" id="Element_2" />
          <path d={svgPaths.p196ea9c0} fill="var(--fill-0, #34A853)" id="Element_3" />
          <path d={svgPaths.p3837c680} fill="var(--fill-0, #FBBC05)" id="Element_4" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute gap-x-[75px] gap-y-[36px] grid grid-cols-[repeat(9,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] left-[calc(50%-1.29px)] py-[36px] rounded-[60px] top-[calc(50%+0.5px)] w-[681.429px]" data-name="Container">
      <div className="col-1 relative row-1 shrink-0 size-[42px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
      <div className="col-2 relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <div className="absolute inset-[4%_5.61%_0_19.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.382 40.32">
            <path d={svgPaths.p313815f0} fill="var(--fill-0, #FF004F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4%_10.41%_4%_11.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9921 38.6401">
            <path d={svgPaths.p26ed5200} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_10.41%_9.14%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0044 38.1622">
            <path d={svgPaths.pbda4960} fill="var(--fill-0, #00F2EA)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-3 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <div className="absolute inset-[0_0_0.37%_0]" data-name="c">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0008 41.8463">
            <path d={svgPaths.pc277000} fill="var(--fill-0, #0866FF)" id="c" />
          </svg>
        </div>
        <div className="absolute inset-[18.51%_26.8%_0_27.61%]" data-name="d">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1478 34.2258">
            <path d={svgPaths.p1a281840} fill="var(--fill-0, white)" id="d" />
          </svg>
        </div>
      </div>
      <div className="col-4 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <div className="absolute inset-[14.77%_-0.1%_14.77%_0.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 29.5909">
            <path d={svgPaths.p29d36600} fill="var(--fill-0, #FF0302)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.13%_33.99%_35.13%_39.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9773 12.4902">
            <path d={svgPaths.p17b42e00} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-5 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.5 34.8004">
            <path d={svgPaths.p29e35500} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-6 relative row-1 shrink-0 size-[42px]" data-name="Logos">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-5.44%] max-w-none size-[114.01%] top-[-5.88%]" src={imgLogos1} />
        </div>
      </div>
      <div className="col-7 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <path d={svgPaths.p19a4080} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </svg>
      </div>
      <div className="col-8 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <path d={svgPaths.p99cfc00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
        <div className="absolute inset-[0_0.08%_-0.08%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9655 42.0346">
            <path d={svgPaths.p35687200} fill="var(--fill-0, #E60019)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-9 overflow-clip relative row-1 shrink-0 size-[42px]" data-name="Social Icons">
        <Group />
      </div>
      <div className="col-1 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Social Icons">
        <div className="absolute inset-[0_7.2%_0_6.77%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.134 42">
            <path d={svgPaths.p2ad89ac0} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-2 relative row-2 shrink-0 size-[42px]" data-name="Logo">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Logo / Notion / ON">
            <path clipRule="evenodd" d={svgPaths.p339ad00} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p38749000} fill="black" fillRule="evenodd" />
            <path d={svgPaths.p3ba68e70} fill="white" />
            <path clipRule="evenodd" d={svgPaths.pc828a00} fill="white" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <div className="col-3 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Google Tools">
        <GoogleAnalyticsLogomark />
      </div>
      <div className="col-4 relative row-2 shrink-0 size-[42px]" data-name="Mail & Storage">
        <div className="absolute inset-[0_1.09%_0_-1.09%]" data-name="Logo Container" />
        <Group1 />
      </div>
      <div className="col-5 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Mail & Storage">
        <GoogleDrive />
      </div>
      <div className="col-6 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Finance">
        <div className="absolute inset-[0_-14.29%_-14.29%_0]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <path d={svgPaths.pbce5f80} fill="var(--fill-0, #635BFF)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="col-7 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Zapier Logomark">
            <path d={svgPaths.p3bef7b00} fill="var(--fill-0, #FF4F00)" id="Element" />
            <g id="Element_2">
              <path d={svgPaths.p29f40800} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p3b4cc900} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p16bdfb80} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p26ace900} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p4f19c00} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p17eb7200} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p335fb700} fill="var(--fill-0, #FFFDF9)" />
            </g>
          </g>
        </svg>
      </div>
      <div className="col-8 overflow-clip relative row-2 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <div className="absolute inset-[0_6.25%]" data-name="Shopify">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.75 42">
            <g id="Shopify">
              <path d={svgPaths.p2a39b000} fill="#95BF47" />
              <path d={svgPaths.p118b8880} fill="#5E8E3E" />
              <path d={svgPaths.p27349b00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-9 relative row-2 shrink-0 size-[42px]" data-name="Logo">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <path d={svgPaths.p308cb100} fill="var(--fill-0, #0082FB)" id="Logo / Meta / ON" />
        </svg>
      </div>
      <div className="col-1 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Webflow Logomark">
            <path d={svgPaths.p34767780} fill="var(--fill-0, #4353FF)" id="Element" />
            <path d={svgPaths.p30569500} fill="var(--fill-0, white)" id="Element_2" />
          </g>
        </svg>
      </div>
      <div className="col-2 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <div className="absolute inset-[0_3.13%_0_0]" data-name="HubSpot Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.6875 42">
            <path d={svgPaths.pbb6600} fill="var(--fill-0, #FF5C35)" id="HubSpot Icon" />
          </svg>
        </div>
      </div>
      <div className="col-3 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <div className="absolute left-0 size-[42px] top-0" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <path d={svgPaths.p2d2957c0} fill="var(--fill-0, #000008)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="col-4 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Group 1">
            <path d={svgPaths.p202b5a80} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p7433b80} fill="url(#paint0_radial_1_7313)" id="Vector_2" />
            <path d={svgPaths.p23e7ff00} fill="url(#paint1_radial_1_7313)" id="Vector_3" />
            <path d={svgPaths.p10cf3880} fill="url(#paint2_radial_1_7313)" id="Vector_4" />
            <path d={svgPaths.p6ee1d00} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p1e90aa80} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p33b9ff00} fill="url(#paint3_radial_1_7313)" id="Vector_7" />
            <path d={svgPaths.p35516400} fill="url(#paint4_radial_1_7313)" id="Vector_8" />
            <path d={svgPaths.p17cef500} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p2d412640} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p1dad3700} fill="url(#paint5_radial_1_7313)" id="Vector_11" />
            <path d={svgPaths.p3232a100} fill="url(#paint6_radial_1_7313)" id="Vector_12" />
            <path d={svgPaths.pcc10270} fill="url(#paint7_radial_1_7313)" id="Vector_13" />
            <path d={svgPaths.p20ea980} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.p3a0fdd00} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p2459cc80} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.p7796180} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(32.9782 17.6462) scale(9.82759 8.573)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_7313" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16961 17.6462) scale(9.82759 8.573)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_7313" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(21.3851 16.2711) scale(29.6439 20.8138)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_7313" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(27.1164 24.7687) rotate(180) scale(2.47675 3.63608)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_7313" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(14.7971 24.7687) scale(2.47675 3.63608)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_7313" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(21.0598 31.9771) scale(8.73341 5.76033)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_7313" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(28.762 5.5956) scale(7.66621 7.66621)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_7313" r="1">
              <stop stopColor="#FEFFFF" />
              <stop offset="0.4" stopColor="#FEFFFF" />
              <stop offset="0.51" stopColor="#F9FCFC" />
              <stop offset="0.62" stopColor="#EDF3F5" />
              <stop offset="0.7" stopColor="#DEE9EC" />
              <stop offset="0.72" stopColor="#D8E4E8" />
              <stop offset="0.76" stopColor="#CCD8DF" />
              <stop offset="0.8" stopColor="#C8D5DD" />
              <stop offset="0.83" stopColor="#CCD6DE" />
              <stop offset="0.85" stopColor="#D8DBE2" />
              <stop offset="0.88" stopColor="#EDE3E9" />
              <stop offset="0.9" stopColor="#FFEBEF" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(25.5671 13.9528) scale(6.28364 6.28364)" gradientUnits="userSpaceOnUse" id="paint7_radial_1_7313" r="1">
              <stop offset="0.48" stopColor="#7A9299" />
              <stop offset="0.67" stopColor="#172E35" />
              <stop offset="0.75" />
              <stop offset="0.82" stopColor="#172E35" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="col-5 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Marketing Tools">
        <GoogleAds1 />
      </div>
      <div className="col-6 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Marketing Tools">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[48px] left-[calc(50%+0.11px)] top-1/2 w-[45.226px]" data-name="Mailchimp">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.2259 48">
            <g id="Mailchimp">
              <path d={svgPaths.p2701a600} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p35e57880} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p1888fdf0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p21fe37f0} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p5089b00} fill="var(--fill-0, #000008)" />
              <path d={svgPaths.p1de32800} fill="var(--fill-0, #000008)" />
              <path clipRule="evenodd" d={svgPaths.p3303c200} fill="var(--fill-0, #000008)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-7 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Marketing Tools">
        <div className="-translate-y-1/2 absolute h-[28.5px] left-0 right-0 top-[calc(50%+0.75px)]" data-name="WooCommerce">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 28.5">
            <g id="WooCommerce">
              <path clipRule="evenodd" d={svgPaths.pb763300} fill="#7D57A4" fillRule="evenodd" />
              <path d={svgPaths.p2bc49000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p11921200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p17e41300} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-8 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Marketing Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Semrush Logomark">
            <rect fill="var(--fill-0, #FF642D)" height="42" id="Element" rx="12" width="42" />
            <path d={svgPaths.p8030900} fill="var(--fill-0, white)" id="Semrush" />
          </g>
        </svg>
      </div>
      <div className="col-9 overflow-clip relative row-3 shrink-0 size-[42px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Webflow Logomark">
            <path d={svgPaths.p34767780} fill="var(--fill-0, #4353FF)" id="Element" />
            <path d={svgPaths.p30569500} fill="var(--fill-0, white)" id="Element_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start justify-center leading-[0] not-italic pb-[3px] relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#1f2937] text-[21px]">
        <p className="leading-[27px]">TikTok</p>
      </div>
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#6b7280] text-[18px]">
        <p className="leading-[24px]">New Video Posted</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos2} />
      </div>
      <Content11 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[62px] px-[12px] py-[18px] rounded-[18px] top-[116.5px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame17 />
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Check cr-fr">
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path clipRule="evenodd" d={svgPaths.p9d00f00} fill="var(--fill-0, #14A148)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start justify-center leading-[0] not-italic pb-[3px] relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#1f2937] text-[21px]">
        <p className="leading-[27px]">X (Twitter)</p>
      </div>
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#6b7280] text-[18px]">
        <p className="leading-[24px]">{`New Tweet Posted `}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Social Media Icons">
        <div className="absolute inset-[0_1.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3549 30">
            <path d={svgPaths.p3ba4cc80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content12 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[54.5px] px-[12px] py-[18px] rounded-[18px] top-[131.5px] w-[429px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame22 />
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Check cr-fr">
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path clipRule="evenodd" d={svgPaths.p9d00f00} fill="var(--fill-0, #14A148)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start justify-center leading-[0] not-italic pb-[3px] relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#1f2937] text-[21px]">
        <p className="leading-[27px]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#6b7280] text-[18px]">
        <p className="leading-[24px]">Carousel Posted</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
      <Content13 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[50px] px-[12px] py-[18px] rounded-[18px] top-[146.5px] w-[444px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame23 />
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Check cr-fr">
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <path clipRule="evenodd" d={svgPaths.p9d00f00} fill="var(--fill-0, #14A148)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[50px] top-[116.5px]">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-1.29px)] top-[calc(50%+3.5px)]">
      <Container26 />
      <div className="-translate-y-1/2 absolute flex h-[346px] items-center justify-center right-[-9px] top-1/2 w-full">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-gradient-to-r from-[#e1f0fc] from-[13.462%] h-[346px] to-[rgba(249,250,252,0)] w-full" />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[#faf4fd] from-[16%] h-[353px] left-[-20px] to-[rgba(249,250,252,0)] top-[calc(50%+3.5px)] w-full" />
      <Group2 />
    </div>
  );
}

function Slot3() {
  return (
    <div className="bg-[#f9fafc] h-[300px] opacity-96 relative rounded-[16px] shrink-0 w-full" data-name="Slot">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[360px] left-1/2 opacity-20 top-1/2 w-[640px]" data-name="image 187">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage187} />
      </div>
      <Group3 />
    </div>
  );
}

function DescriptionSection3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Description Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative size-full text-center">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#14a148] text-[24px] tracking-[-0.5px] w-full">
            <p>
              <span className="leading-[32px]">Smart Multi-Platform Publishing</span>
              <span className="leading-[32px] text-[#1f2937]">{` based on realtime audiance & performance data!`}</span>
            </p>
          </div>
          <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[0px] w-full">
            <p className="text-[16px] whitespace-pre-wrap">
              <span className="leading-[22px]">{`Share content across platforms like Instagram, X, Wordpress, TikTok, and YouTube `}</span>
              <span className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic">{`etc. `}</span>
              <span className="leading-[22px]">{`based on platform realtime  algorithms and previous past performance.`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Contianer">
        <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
          <Slot />
          <DescriptionSection />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-1 self-start shrink-0" data-name="Contianer">
        <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
          <Slot1 />
          <DescriptionSection1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="bg-white col-2 justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Contianer">
        <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
          <Slot2 />
          <DescriptionSection2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="bg-white col-1 justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Contianer">
        <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
          <Slot3 />
          <DescriptionSection3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1f2937] text-[40px] text-center tracking-[-0.8px] w-[274px]">What you get it</p>
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Cotnet() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center" data-name="Cotnet">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#1f2937] text-[40px] tracking-[-0.8px] whitespace-nowrap">Frequently Asked Questions</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px]  relative shrink-0 text-[#6b7280] text-[20px] ">Watch how Loraloop manage marketing end to end</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px not-italic relative" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] opacity-88 relative shrink-0 text-[#1f2937] text-[20px] w-full">What is Loraloops AI employee?</p>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] opacity-80 relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[22px] mb-0">Loraloop AI employees are autonomous digital workers that handle your marketing tasks end-to-end.</p>
        <p className="leading-[22px]">{`They plan campaigns, create content, publish posts, run ads, track performance, and continuously optimize  all without manual effort. Think of them as a full marketing team that works 24/7, never sleeps, and keeps improving results automatically.`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="chevron-up">
        <div className="absolute inset-[33.33%_20.83%]" data-name="path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path clipRule="evenodd" d={svgPaths.p2c9b2300} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Question">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[32px] items-baseline p-[24px] relative size-full">
        <Container31 />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute inset-[33.33%_20.83%]" data-name="path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[24px] relative size-full">
          <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] min-w-px not-italic opacity-88 relative text-[#1f2937] text-[20px]">What can I use Loraloop AI employees for?</p>
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center p-[2px] relative rounded-[32px] shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute inset-[33.33%_20.83%]" data-name="path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path clipRule="evenodd" d={svgPaths.p2a5900} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.819px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[24px] relative size-full">
          <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] h-[22px] leading-[28px] min-w-px not-italic opacity-88 relative text-[#1f2937] text-[20px]">Can AI employees replace human employees?</p>
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full max-w-[1000px] px-4" data-name="Container">
      <Question />
      <Container32 />
      <Container33 />
    </div>
  );
}

function TextGroupVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Text Group Vertical">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-full">AI marketing Team that Never sleep</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#9ca3af] text-[20px] w-full">
        <span className="leading-[28px]">
          Social media tools are easy to buy, but hard to keep up with. loraloop is your AI marketing team like 10 year employees marketing team for you to
          <br aria-hidden="true" />
          {`manage `}
        </span>
        <span className="leading-[28px]">marketing</span>
        <span className="leading-[28px]">{` end to end, So you focus on your work.`}</span>
      </p>
    </div>
  );
}

function CallToActionGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[740px] px-4" data-name="Call to Action Group">
      <TextGroupVertical />
      <div className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[120px] shrink-0 w-[140px]" data-name="Button">
        <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Start</p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[80px] items-center overflow-clip pt-[80px] relative shrink-0 w-full max-w-[1280px] px-4" data-name="Main Content">
      <CallToActionGroup />
      <div className="h-[258px] relative shrink-0 w-[1002px]" data-name="image 172">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[199.29%] left-0 max-w-none top-[-3.87%] w-full" src={imgImage172} />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] h-full items-start min-w-px not-italic relative" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px] w-full">Agents</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Lora - AI Marketing Lead</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Sam - AI Strategist</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Sophie - AI SEO/GEO Manager</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Clara - AI Content Writer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Clara - AI Content Writer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Theo - AI Video Producer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Steve - AI Visual Designer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Sarah - AI Social Media Manager</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Elena - AI Ads Manager</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-full">Nick - AI Analyst</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-full items-start min-w-px not-italic relative whitespace-nowrap" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px]">Company</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">About us</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">Contact Us/Support</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px]">Become Affiliate (Soon)</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] h-full items-start min-w-px not-italic relative" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px] whitespace-nowrap">Blog</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 1</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 2</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog3</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 4</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 5</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 6</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 7</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  relative shrink-0 text-[#374151] text-[16px] ">Blog 8</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#1877f2] text-[16px] w-[169px]">View more</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-w-px not-italic relative" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px] whitespace-nowrap">Free AI Tools</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Article Writer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Audio Ad Creator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-[169px]">AI Blog Conclusion Paragraph Generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-[169px]">AI Blog Ideas And Titles Generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] w-[169px]">AI Blog Introduction Generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Blog Outline Generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Blog Section Completer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Brand Voice Analyzer</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Carousel Maker</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap">AI Cold Email Generator</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#1877f2] text-[16px] whitespace-nowrap">View more</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] h-[468px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container34 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container35 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container36 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container37 />
      </div>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - YouTube">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.364px] relative size-full">
        <div className="relative shrink-0 size-[36.367px]" data-name="Logos">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.364px] relative size-full">
        <div className="relative shrink-0 size-[36.367px]" data-name="Logos">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkFacebook1() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.364px] relative size-full">
        <div className="relative shrink-0 size-[36.367px]" data-name="Logos">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43.996px] items-start relative shrink-0" data-name="Container">
      <LinkYouTube />
      <LinkFacebook />
      <LinkFacebook1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 w-full max-w-full">
      <div className="h-[58.26px] relative shrink-0 w-[64.864px]">
        <div className="absolute inset-[-8.18%_-7.34%_-8.17%_-7.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3875 67.7855">
            <path d={svgPaths.p7344f00} id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="9.52381" />
          </svg>
        </div>
      </div>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[100px] not-italic relative shrink-0 text-[78.571px] text-black text-center whitespace-nowrap">oraLoop</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame9 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[128px] w-full max-w-[1280px] px-4">
      <Header />
      <Frame41 />
      <Frame37 />
      <Frame24 />
      <div className="bg-white content-stretch flex flex-col gap-[48px] items-center overflow-clip py-[80px] relative shrink-0 w-full max-w-[1280px] px-4" data-name="Price and FAQ">
        <Cotnet />
        <Container30 />
      </div>
      <MainContent />
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-center p-[80px] relative shrink-0 w-full max-w-[1280px] px-4" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <Frame11 />
        <Container38 />
        <Frame68 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[1.773px] items-center justify-center relative shrink-0">
      <div className="h-[14.459px] relative shrink-0 w-[16.098px]">
        <div className="absolute inset-[-9.2%_-8.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7571 17.1186">
            <path d={svgPaths.p88f5ac0} id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.65909" />
          </svg>
        </div>
      </div>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24.818px] not-italic relative shrink-0 text-[19.5px] text-black text-center whitespace-nowrap">oraLoop.com</p>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[113px]" data-name="Wordmark 3">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
        <div className="absolute inset-[33.33%_20.83%]" data-name="path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path clipRule="evenodd" d={svgPaths.p23cd8f00} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">AI Employees</p>
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Solution</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Blogs</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Pricing</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame1 />
      <Frame3 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Wordmark />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0279ec] text-[16px] whitespace-nowrap">Login</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame2 />
      <div className="bg-[#1877f2] content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0" data-name="Button">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Start</p>
      </div>
    </div>
  );
}

export default function Solution() {
  return (
    <div className="bg-white relative size-full" data-name="Solution">
      <Frame38 />
      <div className="-translate-x-1/2 absolute backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] content-stretch flex items-center justify-between left-1/2 px-[24px] py-[4px] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] top-[32px] w-full max-w-[1120px] px-4" data-name="Header">
        <Frame />
        <Frame8 />
      </div>
    </div>
  );
}