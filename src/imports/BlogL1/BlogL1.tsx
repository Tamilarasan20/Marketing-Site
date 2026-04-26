import svgPaths from "./svg-6v0r38ndcz";
import imgImage from "./566bd8859808c5b6c2c0d3b943de3f7a326c5dca.png";
import imgImage1 from "./705d74ba75d640101f8addb80d435e1726949c3f.png";
import imgImage2 from "./c25b0a6ee79ed88f3818ee97020997d193100651.png";
import imgLogos from "./c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "./4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "./62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

function Image() {
  return (
    <div className="h-[360px] relative rounded-[16px] shrink-0 w-[576px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[530px]" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">Business</p>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] min-w-full relative shrink-0 text-[#1f2937] text-[48px] tracking-[-1.2px] w-[min-content]">8 Best Relevance AI Alternatives and Competitors in 2026</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#374151] text-[16px] w-[min-content]">Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, and real-world business use cases.</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="HeroSection">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center pb-[40px] pt-[80px] px-[80px] relative size-full">
          <Image />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#eef4ff] h-[40px] relative rounded-[120px] shrink-0" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[20px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1877f2] text-[14px] whitespace-nowrap">All</p>
          </div>
        </div>
        <div className="bg-white h-[40px] relative rounded-[120px] shrink-0" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[20px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Product</p>
          </div>
        </div>
        <div className="bg-white h-[40px] relative rounded-[120px] shrink-0" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[20px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">Business</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative rounded-[40px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">Search blog posts</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[390px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <TextInput />
        <div className="bg-white h-[40px] relative rounded-[120px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[20px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="FilterSection">
      <div className="flex flex-row items-center self-stretch">
        <Container2 />
      </div>
      <Container3 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">8 Best Relevance AI Alternatives for Automated Workflows</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">{`Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, `}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame22 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Business</p>
      <Frame11 />
    </div>
  );
}

function BlogPostCard({ className }: { className?: string }) {
  return (
    <div className={className || "col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0"} data-name="BlogPostCard">
      <Image1 />
      <Container4 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">Best DeepSeek Alternatives for 2026</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">Overview of the best DeepSeek alternatives in 2026, comparing tools like Sintra AI, ChatGPT, and Claude across workflows, research.Overview of the best DeepSeek alternatives in 2026, comparing tools like Sintra AI, ChatGPT, and Claude across workflows, research.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame23 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Product</p>
      <Frame12 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">8 Best Relevance AI Alternatives for Automated Workflows</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">{`Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Business</p>
      <Frame14 />
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="BlogPostsGrid">
      <BlogPostCard />
      <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="BlogPostCard">
        <Image2 />
        <Container5 />
      </div>
      <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="BlogPostCard">
        <Image3 />
        <Container6 />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">8 Best Relevance AI Alternatives for Automated Workflows</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">{`Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, `}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame25 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Business</p>
      <Frame15 />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">8 Best Relevance AI Alternatives for Automated Workflows</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">{`Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, `}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame26 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Business</p>
      <Frame16 />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[200px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] overflow-hidden relative shrink-0 text-[#1f2937] text-[20px] text-ellipsis w-full">8 Best Relevance AI Alternatives for Automated Workflows</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[#6b7280] text-[14px] text-ellipsis w-full">{`Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, `}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame27 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">April 6, 2026</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap">Business</p>
      <Frame18 />
    </div>
  );
}

function BlogPostsGrid1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="BlogPostsGrid">
      <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="BlogPostCard">
        <Image4 />
        <Container7 />
      </div>
      <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="BlogPostCard">
        <Image5 />
        <Container8 />
      </div>
      <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="BlogPostCard">
        <Image6 />
        <Container9 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <BlogPostsGrid />
      <BlogPostsGrid1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <FilterSection />
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[5px] relative shrink-0 w-[23px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 5">
        <g id="Frame 1171277068">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #D1D5DB)" id="Ellipse 1" r="2.5" />
          <circle cx="11.5" cy="2.5" fill="var(--fill-0, #D1D5DB)" id="Ellipse 3" r="2.5" />
          <circle cx="20.5" cy="2.5" fill="var(--fill-0, #D1D5DB)" id="Ellipse 2" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">1</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">2</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">3</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">4</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">5</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">6</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">7</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">8</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">9</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">10</p>
      </div>
      <Frame21 />
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">24</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function UiDesignCreation() {
  return (
    <div className="bg-[#f9fafc] relative shrink-0 w-full" data-name="UI Design Creation">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[80px] py-[40px] relative size-full">
          <Container1 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
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

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-full items-start min-w-px not-italic relative whitespace-nowrap" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px]">Company</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">About us</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">Contact Us/Support</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px]">Become Affiliate (Soon)</p>
    </div>
  );
}

function Container12() {
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

function Container13() {
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] h-[468px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container10 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container11 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container12 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container13 />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos1} />
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
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame9 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[96px] w-[1280px]">
      <HeroSection />
      <UiDesignCreation />
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-center p-[80px] relative shrink-0 w-[1280px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <Frame19 />
        <Container14 />
        <Frame28 />
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

export default function BlogL() {
  return (
    <div className="bg-white relative size-full" data-name="Blog L1">
      <Frame17 />
      
    </div>
  );
}