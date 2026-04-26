import svgPaths from "./svg-0071jbk82i";
import imgLogos from "./c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "./4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "./62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic py-[2px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] relative shrink-0 text-[#101828] text-[48px] tracking-[-1.2px] whitespace-nowrap">Contact Us/Support</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[#6b7280] text-[18px] w-[min-content]">{`Not surprisingly, we encourage you to communicate freely. Whether you have a question, comment or just want to share some #loracheer in social media, we'd love to hear from you.`}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="bg-[#5865f2] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Link - Facebook">
      <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="_Discord">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[15.35%_0.45%_9.12%_0.45%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7096 24.1697">
              <path d={svgPaths.p63bb580} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <a className="block cursor-pointer font-['General_Sans:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" href="https://discord.gg/ynrBvXUY" target="_blank">
        Join Discord
      </a>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div className="content-stretch flex items-center justify-center px-[9.999px] relative rounded-[10px] shrink-0 size-[43.996px]" data-name="Link - YouTube">
      <div className="relative shrink-0 size-[32px]" data-name="Logos">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
        </div>
      </div>
    </div>
  );
}

function LinkFacebook1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[9.999px] relative rounded-[10px] shrink-0 size-[43.996px]" data-name="Link - Facebook">
      <div className="relative shrink-0 size-[32px]" data-name="Logos">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos1} />
        </div>
      </div>
    </div>
  );
}

function LinkFacebook2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[9.999px] relative rounded-[10px] shrink-0 size-[43.996px]" data-name="Link - Facebook">
      <div className="relative shrink-0 size-[32px]" data-name="Logos">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos2} />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <LinkYouTube />
        <LinkFacebook1 />
        <LinkFacebook2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1f2937] text-[18px] whitespace-nowrap">Social Media</p>
      <Frame15 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#6b7280]">Email:</p>
      <p className="font-['General_Sans:Semibold',sans-serif] relative shrink-0 text-[#1f2937]">loraloopai@gmail.com</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#6b7280]">Discord Community:</p>
      <p className="font-['General_Sans:Semibold',sans-serif] relative shrink-0 text-[#1f2937]">{`https://discord.gg/ynrBvXUY`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[22px] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkFacebook />
      <Container2 />
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-center left-1/2 top-[168px] w-[1120px]">
      <Frame12 />
      <Container1 />
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
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

function Container5() {
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

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-full items-start min-w-px not-italic relative whitespace-nowrap" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px]">Company</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">About us</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">Contact Us/Support</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px]">Become Affiliate (Soon)</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] h-full items-start min-w-px not-italic relative" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px] whitespace-nowrap">Blog</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 1</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 2</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog3</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 4</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 5</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 6</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 7</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Blog 8</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#1877f2] text-[16px] w-[169px]">View more</p>
    </div>
  );
}

function Container8() {
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
        <Container5 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container6 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container8 />
      </div>
    </div>
  );
}

function LinkYouTube1() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - YouTube">
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

function LinkFacebook3() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.364px] relative size-full">
        <div className="relative shrink-0 size-[36.367px]" data-name="Logos">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkFacebook4() {
  return (
    <div className="relative rounded-[11.365px] shrink-0 size-[50px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11.364px] relative size-full">
        <div className="relative shrink-0 size-[36.367px]" data-name="Logos">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[43.996px] items-start relative shrink-0" data-name="Container">
      <LinkYouTube1 />
      <LinkFacebook3 />
      <LinkFacebook4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[7px] items-center justify-center relative shrink-0 w-[375px]">
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame10 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
    </div>
  );
}

export default function ResponsiveWebsiteDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Responsive Website Design">
      <Frame13 />
      <div className="-translate-x-1/2 absolute backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] content-stretch flex items-center justify-between left-1/2 px-[24px] py-[4px] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] top-[32px] w-[1120px]" data-name="Header">
        <Frame />
        <Frame8 />
      </div>
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-center justify-center left-0 p-[80px] w-[1280px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <Frame11 />
        <Container9 />
        <Frame16 />
      </div>
    </div>
  );
}