import svgPaths from "./svg-1ff1za829d";
import imgImage from "./f053ba404d6494c8dc33306c55f94bfec50ce84c.png";

function Cotnet() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Cotnet">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap">Pricing</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">Month plan</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-center justify-center left-1/2 px-[16.749px] py-[2.749px] rounded-[1280px] top-[-14px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[12px] tracking-[0.3px] whitespace-nowrap">Save 30%</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">12-month plan</p>
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-start left-[calc(50%+0.25px)] px-[16.749px] py-[2.749px] rounded-[1280px] top-[-15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[12px] tracking-[0.3px] whitespace-nowrap">Save 15%</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">3-month plan</p>
      <Container1 />
    </div>
  );
}

function Segmenter() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[300px] shrink-0" data-name="Segmenter">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Segmenter />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-[740px]">
      <Cotnet />
      <Frame5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Solo</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$9.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$19</p>
      <Frame1 />
    </div>
  );
}

function PricingDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Pricing() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing">
      <PricingDetails />
      <div className="h-[40px] relative rounded-[120px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Loraloop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">All 9 helpers</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon1 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">100 monthly AI credits</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon2 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">2 Seats</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon3 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">1 Workspace</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon4 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Support working hours</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <List />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[16px] px-[20px] relative size-full">
        <Pricing />
        <Features />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.67%] left-[-0.18%] max-w-none top-[-0.81%] w-[100.18%]" src={imgImage} />
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Pro</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$29.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$49</p>
      <Frame2 />
    </div>
  );
}

function PricingDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Pricing1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing">
      <PricingDetails1 />
      <div className="bg-[#1877f2] h-[40px] relative rounded-[120px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">Get Loraloop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon5 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">All 9 helpers</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon6 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">500 monthly AI credits</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon7 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">5 Seats</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon8 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">3 Workspace</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon9 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Support 24/7</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Features1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <List1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[16px] px-[20px] relative size-full">
        <Pricing1 />
        <Features1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.67%] left-[-0.18%] max-w-none top-[-0.15%] w-[100.18%]" src={imgImage} />
          </div>
        </div>
        <Content1 />
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="bg-[#1877f2] content-stretch flex flex-col gap-[8px] items-center justify-center pb-[2px] pt-[8px] px-[2px] relative rounded-[16px] shrink-0" data-name="PricingCard">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">Most popular</p>
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-[282px]" data-name="PricingCard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container5 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Agency</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$69.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$89</p>
      <Frame3 />
    </div>
  );
}

function PricingDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Pricing2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing">
      <PricingDetails2 />
      <div className="h-[40px] relative rounded-[120px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Loraloop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon10 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">All 9 helpers</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon11 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">1200 monthly AI credits</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon12 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">25 Seats</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon13 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">10 Workspace</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Support 24/7</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Features2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <List2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[16px] px-[20px] relative size-full">
        <Pricing2 />
        <Features2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.67%] left-[-0.18%] max-w-none top-[-0.15%] w-[100.18%]" src={imgImage} />
          </div>
        </div>
        <Content2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Enterprise</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$149.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$199</p>
      <Frame4 />
    </div>
  );
}

function PricingDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Pricing3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing">
      <PricingDetails3 />
      <div className="h-[40px] relative rounded-[120px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[120px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] relative size-full">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Loraloop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">All 9 helpers</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">2500 monthly AI credits</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon17 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Unlimited Seats</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon18 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Unlimited Workspace</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p16900300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49733" />
        </g>
      </svg>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="List Item">
      <Icon19 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#d1d5db] text-[12px] whitespace-nowrap">Priority Support 24/7</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Features3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <List3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[16px] px-[20px] relative size-full">
        <Pricing3 />
        <Features3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[150px] relative shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.67%] left-[-0.18%] max-w-none top-[-7.97%] w-[100.18%]" src={imgImage} />
          </div>
        </div>
        <Content3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-end relative shrink-0">
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-[282px]" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container2 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <PricingCard />
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-[282px]" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container8 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-[282px]" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container11 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative size-full">
      <Frame6 />
      <Frame />
    </div>
  );
}