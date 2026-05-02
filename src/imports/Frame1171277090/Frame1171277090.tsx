import svgPaths from "./svg-kueits232b";
import imgImage185 from "./477593f47efb019382046da2baab475c895d18ac.png";
import imgLora2 from "./32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";
import imgEllipse2 from "./a2ae2cf8cb232063b4086bffd3b1e88948abebc4.png";
import imgEllipse3 from "./fa84d9f484ac7ad0443c08af899733eba5803934.png";
import imgImage186 from "./1ca3d61ded6d37fffa93f794057e86071e0300ea.png";
import imgEllipse4 from "./b52329e048301cb29a66056d163f2e78efc6a5a0.png";
import imgFeatureImageSmall1 from "./716c7778e50d7ebaf89d87cc7045f11c7dc8c365.png";
import imgLogos from "./4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos1 from "./acfc7503e01b011ae7f17074baec7c0d31a597f8.png";
import imgImage187 from "./b76237f466af6e76be8b56dc75d1d5e7731fbb48.png";
import imgLogos2 from "./6542a1e22417f251cbc55d42da5eae61e5cb8217.png";
import { imgFeatureImageSmall, imgGroup } from "./svg-x6rdn";

function MaskGroup() {
  return <div className="absolute contents inset-0" data-name="Mask group" />;
}

function MaskGroup1() {
  return <div className="absolute contents inset-0" data-name="Mask group" />;
}

function Frame8() {
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

function Frame7() {
  return (
    <div className="bg-[#f9fafc] content-stretch flex gap-[4px] items-center overflow-clip px-[4px] py-[2px] relative rounded-[20px] shrink-0">
      <Frame8 />
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">Analysed market trends, Monitor Competitors across social media platforms</p>
      </div>
      <StatusLine />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Content">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function AvatarWithTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <Content />
    </div>
  );
}

function Container() {
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">{`Posts created across channels Insta, X, TikTok, Youtube, etc. `}</p>
      </div>
      <StatusLine1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
          </div>
          <Frame10 />
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1f2937] text-[14px] w-[min-content]">
        <p className="leading-[18px]">Published Posts, Blogs, Videos, Ads</p>
      </div>
      <StatusLine2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
          </div>
          <Frame11 />
          <div className="absolute bottom-[12px] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic right-[60px] text-[#6b7280] text-[12px] translate-x-full translate-y-1/2 whitespace-nowrap">
            <p className="leading-[16px]">05:13 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-1/2 w-[400px]">
      <Container />
      <Container1 />
      <Container2 />
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

function Content1() {
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
      <Content1 />
    </div>
  );
}

function AvatarWithTitle1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <TitleWithStatus />
    </div>
  );
}

function Container3() {
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

function Content2() {
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
      <Content2 />
    </div>
  );
}

function AvatarWithTitle2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <TitleWithStatus1 />
    </div>
  );
}

function Container4() {
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

function Content3() {
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
      <Content3 />
    </div>
  );
}

function AvatarWithTitle3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <TitleWithStatus2 />
    </div>
  );
}

function Container5() {
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

function Content4() {
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
      <Content4 />
    </div>
  );
}

function AvatarWithTitle4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar with Title">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <TitleWithStatus3 />
    </div>
  );
}

function Container6() {
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
      </div>
      <Frame6 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
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

function Content5() {
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
      <Content5 />
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

function Container7() {
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

function Content6() {
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
      <Content6 />
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

function Container8() {
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

function Content7() {
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
      <Content7 />
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

function Container9() {
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

function Content8() {
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
      <Content8 />
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

function Container10() {
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

function Content9() {
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
      <Content9 />
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

function Container11() {
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage186} />
      </div>
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
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

function Frame14() {
  return (
    <div className="bg-[#14a148] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[20px] shrink-0">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        New Idea
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] text-center whitespace-pre" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>{`Or Existing  Content`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
    </div>
  );
}

function Frame17() {
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

function Frame18() {
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

function Frame19() {
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

function Frame20() {
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

function Frame21() {
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

function Frame22() {
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

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 1">
            <path d={svgPaths.pdf1f80} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p1dfebd00} fill="url(#paint0_radial_7_12796)" id="Vector_2" />
            <path d={svgPaths.pe166600} fill="url(#paint1_radial_7_12796)" id="Vector_3" />
            <path d={svgPaths.p21d57800} fill="url(#paint2_radial_7_12796)" id="Vector_4" />
            <path d={svgPaths.p9afba80} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p2984ff80} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p5a9a400} fill="url(#paint3_radial_7_12796)" id="Vector_7" />
            <path d={svgPaths.p2719bd80} fill="url(#paint4_radial_7_12796)" id="Vector_8" />
            <path d={svgPaths.p2ed6f600} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p30be1cf0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p2c7b2180} fill="url(#paint5_radial_7_12796)" id="Vector_11" />
            <path d={svgPaths.p46e880} fill="url(#paint6_radial_7_12796)" id="Vector_12" />
            <path d={svgPaths.p368bcef0} fill="url(#paint7_radial_7_12796)" id="Vector_13" />
            <path d={svgPaths.p547dd00} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.pc5dd900} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p1fc8c000} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.p20a88170} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(18.8447 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(5.23977 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint1_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.2201 9.29777) scale(16.9394 11.8936)" gradientUnits="userSpaceOnUse" id="paint2_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(15.4951 14.1535) rotate(180) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint3_radial_7_12796" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.45548 14.1535) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint4_radial_7_12796" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.0342 18.2726) scale(4.99052 3.29162)" gradientUnits="userSpaceOnUse" id="paint5_radial_7_12796" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.4354 3.19749) scale(4.38069)" gradientUnits="userSpaceOnUse" id="paint6_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(14.6098 7.97304) scale(3.59065)" gradientUnits="userSpaceOnUse" id="paint7_radial_7_12796" r="1">
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

function Frame24() {
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

function Frame25() {
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

function Container12() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid-cols-[___44px_44px_fit-content(100%)] grid-rows-[repeat(4,fit-content(100%))] inline-grid relative rounded-[60px] shrink-0" data-name="Container">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0">
      <Frame14 />
      <Frame15 />
      <Container12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center p-[8px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#14a148] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Create / Repurpose
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="> Chevron Right">
        <div className="absolute inset-[33.39%_-6.24%_-16.61%_58.39%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10335 8.87578">
            <path d={svgPaths.p24e1ca72} fill="var(--fill-0, #6B7280)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-1 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
    </div>
  );
}

function Frame28() {
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

function Frame29() {
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

function Frame30() {
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

function Frame31() {
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

function Frame32() {
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

function Frame33() {
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

function Frame34() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-3 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 1">
            <path d={svgPaths.pdf1f80} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p1dfebd00} fill="url(#paint0_radial_7_12796)" id="Vector_2" />
            <path d={svgPaths.pe166600} fill="url(#paint1_radial_7_12796)" id="Vector_3" />
            <path d={svgPaths.p21d57800} fill="url(#paint2_radial_7_12796)" id="Vector_4" />
            <path d={svgPaths.p9afba80} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p2984ff80} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p5a9a400} fill="url(#paint3_radial_7_12796)" id="Vector_7" />
            <path d={svgPaths.p2719bd80} fill="url(#paint4_radial_7_12796)" id="Vector_8" />
            <path d={svgPaths.p2ed6f600} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p30be1cf0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p2c7b2180} fill="url(#paint5_radial_7_12796)" id="Vector_11" />
            <path d={svgPaths.p46e880} fill="url(#paint6_radial_7_12796)" id="Vector_12" />
            <path d={svgPaths.p368bcef0} fill="url(#paint7_radial_7_12796)" id="Vector_13" />
            <path d={svgPaths.p547dd00} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.pc5dd900} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p1fc8c000} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.p20a88170} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(18.8447 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(5.23977 10.0835) scale(5.61577 4.89886)" gradientUnits="userSpaceOnUse" id="paint1_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.2201 9.29777) scale(16.9394 11.8936)" gradientUnits="userSpaceOnUse" id="paint2_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(15.4951 14.1535) rotate(180) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint3_radial_7_12796" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.45548 14.1535) scale(1.41529 2.07776)" gradientUnits="userSpaceOnUse" id="paint4_radial_7_12796" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(12.0342 18.2726) scale(4.99052 3.29162)" gradientUnits="userSpaceOnUse" id="paint5_radial_7_12796" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.4354 3.19749) scale(4.38069)" gradientUnits="userSpaceOnUse" id="paint6_radial_7_12796" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(14.6098 7.97304) scale(3.59065)" gradientUnits="userSpaceOnUse" id="paint7_radial_7_12796" r="1">
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

function Frame35() {
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

function Frame36() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-1 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Marketing Tools">
        <GoogleAds />
      </div>
    </div>
  );
}

function Frame37() {
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

function Frame38() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] col-2 content-stretch flex items-center justify-self-start p-[10px] relative rounded-[12px] row-4 self-start shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Symbol />
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid-cols-[repeat(3,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))] inline-grid relative rounded-[60px] shrink-0" data-name="Container">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0">
      <Container13 />
      <Frame39 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-1/2 top-1/2">
      <Frame13 />
      <Frame3 />
      <Frame26 />
    </div>
  );
}

function Slot2() {
  return (
    <div className="h-[300px] opacity-96 relative rounded-[16px] shrink-0 w-[540px]" data-name="Slot">
      <div className="absolute h-[411px] left-0 top-[-25px] w-[584px]" data-name="image 185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage186} />
      </div>
      <Frame12 />
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
      <div className="absolute inset-[-11.27%_-2.17%_-2.18%_-5.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.8324 36.7242">
          <g id="Group">
            <g filter="url(#filter0_f_11_3109)" id="Vector">
              <path d={svgPaths.p177e7300} fill="url(#paint0_radial_11_3109)" />
            </g>
            <g filter="url(#filter1_f_11_3109)" id="Vector_2">
              <path d={svgPaths.p56fee00} fill="url(#paint1_radial_11_3109)" />
            </g>
            <g filter="url(#filter2_f_11_3109)" id="Vector_3">
              <path d={svgPaths.p65bb280} fill="url(#paint2_radial_11_3109)" />
            </g>
            <g filter="url(#filter3_f_11_3109)" id="Vector_4">
              <path d={svgPaths.p300e120} fill="url(#paint3_radial_11_3109)" />
            </g>
            <g filter="url(#filter4_f_11_3109)" id="Vector_5">
              <path d={svgPaths.p24fffcf0} fill="var(--fill-0, #3086FF)" />
            </g>
            <g filter="url(#filter5_f_11_3109)" id="Vector_6">
              <path d={svgPaths.p3e526900} fill="url(#paint4_radial_11_3109)" />
            </g>
            <g filter="url(#filter6_f_11_3109)" id="Vector_7">
              <path d={svgPaths.p39f67900} fill="url(#paint5_radial_11_3109)" />
            </g>
            <g filter="url(#filter7_f_11_3109)" id="Vector_8">
              <path d={svgPaths.p3bceff00} fill="url(#paint6_radial_11_3109)" />
            </g>
            <g filter="url(#filter8_f_11_3109)" id="Vector_9" opacity="0.5">
              <path d={svgPaths.p15054d00} fill="url(#paint7_linear_11_3109)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.6918" id="filter0_f_11_3109" width="13.8366" x="0.948089" y="19.1876">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.3958" id="filter1_f_11_3109" width="12.9243" x="17.0707" y="2.96392">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.4116" id="filter2_f_11_3109" width="14.0462" x="5.00783" y="2.94342">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.2532" id="filter3_f_11_3109" width="18.7685" x="16.0353" y="19.4466">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.02916" id="filter4_f_11_3109" width="17.5466" x="17.2858" y="15.8782">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0628" id="filter5_f_11_3109" width="11.7239" x="0.944826" y="8.17888">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.9855" id="filter6_f_11_3109" width="19.5504" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="2.47864" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9.47552" id="filter7_f_11_3109" width="13.1899" x="5.7448" y="27.2487">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.43514" id="filter8_f_11_3109" width="5.38465" x="15.5373" y="28.2891">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_11_3109" stdDeviation="0.35256" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.664962 -15.9359 23.9081 -0.956298 13.9301 30.9342)" gradientUnits="userSpaceOnUse" id="paint0_radial_11_3109" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="matrix(11.2929 -2.71409e-05 -1.58726e-05 14.279 28.8419 12.3154)" gradientUnits="userSpaceOnUse" id="paint1_radial_11_3109" r="1">
              <stop offset="0.408458" stopColor="#FB4E5A" />
              <stop offset="1" stopColor="#FF4540" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-15.8222 8.57989 11.8917 21.0213 22.6748 1.5816)" gradientUnits="userSpaceOnUse" id="paint2_radial_11_3109" r="1">
              <stop offset="0.231273" stopColor="#FF4541" />
              <stop offset="0.311547" stopColor="#FF4540" />
              <stop offset="0.457516" stopColor="#FF4640" />
              <stop offset="0.540305" stopColor="#FF473F" />
              <stop offset="0.699346" stopColor="#FF5138" />
              <stop offset="0.771242" stopColor="#FF5B33" />
              <stop offset="0.860566" stopColor="#FF6C29" />
              <stop offset="1" stopColor="#FF8C18" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-28.6939 -36.673 -13.8262 10.37 18.4648 33.9236)" gradientUnits="userSpaceOnUse" id="paint3_radial_11_3109" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-2.0306 17.1362 24.2002 2.74891 16.8274 6.67084)" gradientUnits="userSpaceOnUse" id="paint4_radial_11_3109" r="1">
              <stop offset="0.366013" stopColor="#FF4E3A" />
              <stop offset="0.457516" stopColor="#FF8A1B" />
              <stop offset="0.540305" stopColor="#FFA312" />
              <stop offset="0.615636" stopColor="#FFB60C" />
              <stop offset="0.771242" stopColor="#FFCD0A" />
              <stop offset="0.860566" stopColor="#FECF0A" />
              <stop offset="0.915033" stopColor="#FECF08" />
              <stop offset="1" stopColor="#FDCD01" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.8695 6.3557 -18.3096 -16.2088 13.9718 6.49308)" gradientUnits="userSpaceOnUse" id="paint5_radial_11_3109" r="1">
              <stop offset="0.315904" stopColor="#FF4C3C" />
              <stop offset="0.603818" stopColor="#FF692C" />
              <stop offset="0.726837" stopColor="#FF7825" />
              <stop offset="0.884534" stopColor="#FF8D1B" />
              <stop offset="1" stopColor="#FF9F13" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-15.8222 -8.57989 11.8917 -21.0213 22.6748 37.9888)" gradientUnits="userSpaceOnUse" id="paint6_radial_11_3109" r="1">
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
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_11_3109" x1="16.2424" x2="20.2168" y1="32.5067" y2="32.5067">
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9995 24.0059">
        <g id="Group 81">
          <path d={svgPaths.p1e62ac00} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p118460} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p3c4dc980} fill="var(--fill-0, #FBBC04)" id="Vector_3" />
          <path d={svgPaths.p228ff380} fill="var(--fill-0, #EA4335)" id="Vector_4" />
          <path d={svgPaths.p1d25e240} fill="var(--fill-0, #C5221F)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function GoogleDrive() {
  return (
    <div className="absolute inset-[6.84%_0_6.68%_0]" data-name="google-drive">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 27.675">
        <g id="google-drive">
          <path d={svgPaths.pb8ca7c0} fill="url(#paint0_linear_1_7140)" id="Path" />
          <path d={svgPaths.p1fdf2a80} fill="url(#paint1_linear_1_7140)" id="Path_2" />
          <path d={svgPaths.p15d91e80} fill="url(#paint2_linear_1_7140)" id="Path_3" />
          <path d={svgPaths.p3625aa00} fill="var(--fill-0, black)" id="Path_4" opacity="0.1" />
          <path d={svgPaths.pbfd2700} fill="var(--fill-0, black)" id="Path_5" opacity="0.1" />
          <path d={svgPaths.p1133ba00} fill="var(--fill-0, black)" id="Path_6" opacity="0.1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7140" x1="-5.04802" x2="11.6777" y1="5.11941" y2="33.7917">
            <stop stopColor="#F6C338" />
            <stop offset="0.522782" stopColor="#FFD351" />
            <stop offset="1" stopColor="#F6C338" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7140" x1="-67.6135" x2="-71.1786" y1="-18.2583" y2="55.4404">
            <stop stopColor="#286EE6" />
            <stop offset="0.521046" stopColor="#4286FB" />
            <stop offset="1" stopColor="#286EE6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_7140" x1="7.31885" x2="-15.1727" y1="-12.1274" y2="2.70937">
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
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 29.2385">
        <g id="Google Ads">
          <path d={svgPaths.p29a1d080} fill="var(--fill-0, #4285F4)" id="Element" />
          <path d={svgPaths.p1917f480} fill="var(--fill-0, #FBBC05)" id="Element_2" />
          <path d={svgPaths.pfabb4c0} fill="var(--fill-0, #34A853)" id="Element_3" />
          <path d={svgPaths.p38e8fd80} fill="var(--fill-0, #FBBC05)" id="Element_4" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute gap-y-[36px] grid grid-cols-[repeat(9,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] left-[calc(50%-1.5px)] py-[36px] rounded-[60px] top-[calc(50%+1px)] w-[581px]" data-name="Container">
      <div className="col-3 relative row-1 shrink-0 size-[32px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
      <div className="col-5 relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <div className="absolute inset-[4%_5.61%_0_19.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9101 30.72">
            <path d={svgPaths.p38008b00} fill="var(--fill-0, #FF004F)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4%_10.41%_4%_11.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1368 29.44">
            <path d={svgPaths.p30283100} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_10.41%_9.14%_6.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6701 29.076">
            <path d={svgPaths.p2182bb00} fill="var(--fill-0, #00F2EA)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-2 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <div className="absolute inset-[0_0_0.37%_0]" data-name="c">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0006 31.8829">
            <path d={svgPaths.p3749cd00} fill="var(--fill-0, #0866FF)" id="c" />
          </svg>
        </div>
        <div className="absolute inset-[18.51%_26.8%_0_27.61%]" data-name="d">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5888 26.0768">
            <path d={svgPaths.p1174d600} fill="var(--fill-0, white)" id="d" />
          </svg>
        </div>
      </div>
      <div className="col-4 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <div className="absolute inset-[14.77%_-0.1%_14.77%_0.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 22.5455">
            <path d={svgPaths.p28258680} fill="var(--fill-0, #FF0302)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.13%_33.99%_35.13%_39.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36363 9.51636">
            <path d={svgPaths.p3b6bb700} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 26.5146">
            <path d={svgPaths.p10399e00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-7 relative row-1 shrink-0 size-[32px]" data-name="Logos">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-5.44%] max-w-none size-[114.01%] top-[-5.88%]" src={imgLogos1} />
        </div>
      </div>
      <div className="col-6 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2fb5ee80} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </svg>
      </div>
      <div className="col-2 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
        <div className="absolute inset-[0_0.08%_-0.08%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9737 32.0263">
            <path d={svgPaths.p2fdcdb00} fill="var(--fill-0, #E60019)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-8 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <Group />
      </div>
      <div className="col-9 overflow-clip relative row-1 shrink-0 size-[32px]" data-name="Social Icons">
        <div className="absolute inset-[0_7.2%_0_6.77%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5307 32">
            <path d={svgPaths.p1e180b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="col-1 relative row-2 shrink-0 size-[32px]" data-name="Logo">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Logo / Notion / ON">
            <path clipRule="evenodd" d={svgPaths.p35853600} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24be7100} fill="black" fillRule="evenodd" />
            <path d={svgPaths.p106b6b80} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p8633700} fill="white" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <div className="col-3 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Google Tools">
        <GoogleAnalyticsLogomark />
      </div>
      <div className="col-4 relative row-2 shrink-0 size-[32px]" data-name="Mail & Storage">
        <div className="absolute inset-[0_1.09%_0_-1.09%]" data-name="Logo Container" />
        <Group1 />
      </div>
      <div className="col-5 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Mail & Storage">
        <GoogleDrive />
      </div>
      <div className="col-6 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Finance">
        <div className="absolute inset-[0_-50%_-50%_0]" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p12c9e700} fill="var(--fill-0, #635BFF)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="col-7 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Zapier Logomark">
            <path d={svgPaths.p37d40c80} fill="var(--fill-0, #FF4F00)" id="Element" />
            <g id="Element_2">
              <path d={svgPaths.peedf600} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.pea58d80} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p33434580} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p16fd8200} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.pf7f7800} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p5142280} fill="var(--fill-0, #FFFDF9)" />
              <path d={svgPaths.p1c9fe680} fill="var(--fill-0, #FFFDF9)" />
            </g>
          </g>
        </svg>
      </div>
      <div className="col-8 overflow-clip relative row-2 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <div className="absolute inset-[0_6.25%]" data-name="Shopify">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
            <g id="Shopify">
              <path d={svgPaths.p37bfa480} fill="#95BF47" />
              <path d={svgPaths.p38dcad00} fill="#5E8E3E" />
              <path d={svgPaths.p9041200} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-9 relative row-2 shrink-0 size-[32px]" data-name="Logo">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p17fe5900} fill="var(--fill-0, #0082FB)" id="Logo / Meta / ON" />
        </svg>
      </div>
      <div className="col-1 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Webflow Logomark">
            <path d={svgPaths.p16768d30} fill="var(--fill-0, #4353FF)" id="Element" />
            <path d={svgPaths.p5864f00} fill="var(--fill-0, white)" id="Element_2" />
          </g>
        </svg>
      </div>
      <div className="col-2 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <div className="absolute inset-[0_3.13%_0_0]" data-name="HubSpot Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 32">
            <path d={svgPaths.p340b04c0} fill="var(--fill-0, #FF5C35)" id="HubSpot Icon" />
          </svg>
        </div>
      </div>
      <div className="col-3 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <div className="absolute left-0 size-[42px] top-0" data-name="Subtract">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <path d={svgPaths.p1e296cf0} fill="var(--fill-0, #000008)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="col-4 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Social Media">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Group 1">
            <path d={svgPaths.p3d5c6200} fill="var(--fill-0, #FF4500)" id="Vector" />
            <path d={svgPaths.p2422ec80} fill="url(#paint0_radial_11_3124)" id="Vector_2" />
            <path d={svgPaths.p3ac50780} fill="url(#paint1_radial_11_3124)" id="Vector_3" />
            <path d={svgPaths.p2a74bc0} fill="url(#paint2_radial_11_3124)" id="Vector_4" />
            <path d={svgPaths.p79f9bc0} fill="var(--fill-0, #842123)" id="Vector_5" />
            <path d={svgPaths.p3fe0f700} fill="var(--fill-0, #842123)" id="Vector_6" />
            <path d={svgPaths.p1e25500} fill="url(#paint3_radial_11_3124)" id="Vector_7" />
            <path d={svgPaths.p1b300000} fill="url(#paint4_radial_11_3124)" id="Vector_8" />
            <path d={svgPaths.p2fb01900} fill="var(--fill-0, #BBCFDA)" id="Vector_9" />
            <path d={svgPaths.p17cba800} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p1093080} fill="url(#paint5_radial_11_3124)" id="Vector_11" />
            <path d={svgPaths.p3a0dde00} fill="url(#paint6_radial_11_3124)" id="Vector_12" />
            <path d={svgPaths.p1b46e280} fill="url(#paint7_radial_11_3124)" id="Vector_13" />
            <path d={svgPaths.p13585680} fill="var(--fill-0, #FF6101)" id="Vector_14" />
            <path d={svgPaths.p21425e80} fill="var(--fill-0, #FF6101)" id="Vector_15" />
            <path d={svgPaths.p10ae1e00} fill="var(--fill-0, #FFC49C)" id="Vector_16" />
            <path d={svgPaths.peed7b00} fill="var(--fill-0, #FFC49C)" id="Vector_17" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(25.1263 13.4447) scale(7.48769 6.53181)" gradientUnits="userSpaceOnUse" id="paint0_radial_11_3124" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(6.98637 13.4447) scale(7.48769 6.53181)" gradientUnits="userSpaceOnUse" id="paint1_radial_11_3124" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.2934 12.397) scale(22.5859 15.8582)" gradientUnits="userSpaceOnUse" id="paint2_radial_11_3124" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(20.6601 18.8714) rotate(180) scale(1.88705 2.77035)" gradientUnits="userSpaceOnUse" id="paint3_radial_11_3124" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(11.274 18.8714) scale(1.88705 2.77035)" gradientUnits="userSpaceOnUse" id="paint4_radial_11_3124" r="1">
              <stop stopColor="#FF6600" />
              <stop offset="0.5" stopColor="#FF4500" />
              <stop offset="0.7" stopColor="#FC4301" />
              <stop offset="0.82" stopColor="#F43F07" />
              <stop offset="0.92" stopColor="#E53812" />
              <stop offset="1" stopColor="#D4301F" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(16.0455 24.3635) scale(6.65403 4.38882)" gradientUnits="userSpaceOnUse" id="paint5_radial_11_3124" r="1">
              <stop stopColor="#172E35" />
              <stop offset="0.29" stopColor="#0E1C21" />
              <stop offset="0.73" stopColor="#030708" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(21.9139 4.26331) scale(5.84093 5.84092)" gradientUnits="userSpaceOnUse" id="paint6_radial_11_3124" r="1">
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
            <radialGradient cx="0" cy="0" gradientTransform="translate(19.4797 10.6307) scale(4.78754 4.78754)" gradientUnits="userSpaceOnUse" id="paint7_radial_11_3124" r="1">
              <stop offset="0.48" stopColor="#7A9299" />
              <stop offset="0.67" stopColor="#172E35" />
              <stop offset="0.75" />
              <stop offset="0.82" stopColor="#172E35" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="col-5 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Marketing Tools">
        <GoogleAds1 />
      </div>
      <div className="col-6 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Marketing Tools">
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
      <div className="col-7 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Marketing Tools">
        <div className="-translate-y-1/2 absolute h-[28.5px] left-0 right-0 top-[calc(50%+0.75px)]" data-name="WooCommerce">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28.5">
            <g id="WooCommerce">
              <path clipRule="evenodd" d={svgPaths.p332ad180} fill="#7D57A4" fillRule="evenodd" />
              <path d={svgPaths.p3b97eb00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b448c00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p322b7500} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-8 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Marketing Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Semrush Logomark">
            <rect fill="var(--fill-0, #FF642D)" height="32" id="Element" rx="12" width="32" />
            <path d={svgPaths.p11b53000} fill="var(--fill-0, white)" id="Semrush" />
          </g>
        </svg>
      </div>
      <div className="col-9 overflow-clip relative row-3 shrink-0 size-[32px]" data-name="Development & Nocode Tools">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Webflow Logomark">
            <path d={svgPaths.p16768d30} fill="var(--fill-0, #4353FF)" id="Element" />
            <path d={svgPaths.p5864f00} fill="var(--fill-0, white)" id="Element_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content10() {
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos2} />
      </div>
      <Content10 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[62px] px-[12px] py-[10px] rounded-[18px] top-[116.5px] w-[414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame />
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

function Content11() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[30px]" data-name="Social Media Icons">
        <div className="absolute inset-[0_1.08%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3549 30">
            <path d={svgPaths.p3ba4cc80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[54.5px] px-[12px] py-[10px] rounded-[18px] top-[131.5px] w-[429px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame1 />
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
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#1f2937] text-[16px]">
        <p className="leading-[27px]">Instagram</p>
      </div>
      <div className="flex flex-col justify-center mb-[-3px] relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="leading-[24px]">Carousel Posted</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Logos">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
      </div>
      <Content12 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[50px] px-[12px] py-[10px] rounded-[18px] top-[146.5px] w-[444px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame2 />
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
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-1.5px)] top-[calc(50%+3.5px)]">
      <Container14 />
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

function Frame5() {
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

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1f2937] text-[40px] text-center tracking-[-0.8px] w-[274px]">What you get it</p>
      <Frame5 />
    </div>
  );
}