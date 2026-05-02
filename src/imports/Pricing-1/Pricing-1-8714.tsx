import svgPaths from "./svg-0q1ry3bw7p";
import imgImage from "./f053ba404d6494c8dc33306c55f94bfec50ce84c.png";
import imgLogos from "./c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "./4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "./62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

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

function Container1() {
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
      <Container1 />
    </div>
  );
}

function Container2() {
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
      <Container2 />
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Segmenter />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full max-w-[740px] px-4">
      <Cotnet />
      <Frame16 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Solo</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$9.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$19</p>
      <Frame12 />
    </div>
  );
}

function PricingDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Pricing1() {
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
        <Pricing1 />
        <Features />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Container">
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

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Pro</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$29.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$49</p>
      <Frame13 />
    </div>
  );
}

function PricingDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Pricing2() {
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
        <Pricing2 />
        <Features1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Container">
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
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-full" data-name="PricingCard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container7 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Agency</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$69.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$89</p>
      <Frame14 />
    </div>
  );
}

function PricingDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Pricing3() {
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
        <Pricing3 />
        <Features2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Container">
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

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.21px] whitespace-nowrap">Enterprise</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-white">$149.99</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px]">/mo</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Satoshi:Bold',sans-serif] leading-[28px] line-through relative shrink-0 text-[#6b7280] text-[20px]">$199</p>
      <Frame15 />
    </div>
  );
}

function PricingDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Pricing Details">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Pricing4() {
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
        <Pricing4 />
        <Features3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#131313] relative shrink-0 w-full" data-name="Container">
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

function Frame11() {
  return (
    <div className="content-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] items-end relative shrink-0 w-full">
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-full" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container4 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <PricingCard />
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-full" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container10 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#151515] relative rounded-[16px] shrink-0 w-full" data-name="PricingCard">
        <div className="content-stretch flex items-center overflow-clip p-[0.781px] relative rounded-[inherit] size-full">
          <Container13 />
        </div>
        <div aria-hidden="true" className="absolute border-[0.781px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Cotnet1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full max-w-[740px] px-4" data-name="Cotnet">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#14a148] text-[13px] tracking-[0.3px] whitespace-nowrap">WHY US?</p>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.8px] ">Marketing that runs itself.</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px]  relative shrink-0 text-[#9ca3af] text-[20px]  whitespace-pre-wrap">{`Get work done across all channels  without hiring or managing people.`}</p>
    </div>
  );
}

function Container18() {
  return <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[52px] min-w-px" data-name="Container" />;
}

function Container19() {
  return (
    <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[52px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#27272a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-[24px] pt-[16px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[0.1996px] whitespace-nowrap">Independent Talent</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(24,24,27,0.5)] flex-[1_0_0] h-[52px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#27272a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[25px] pr-[24px] pt-[16px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[0.1996px] whitespace-nowrap">Agencies</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-w-px relative" style={{ backgroundImage: "linear-gradient(169.461deg, rgba(9, 44, 77, 0.4) 0%, rgb(12, 60, 106) 100%)" }} data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[25px] pr-[24px] pt-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#51a2ff] text-[14px] tracking-[0.1996px] whitespace-nowrap">AI Marketing Team (LoraLoop)</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#27272a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container18 />
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Cost</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center not-italic py-[2px] relative size-full text-[#6b7280] whitespace-nowrap">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">$4k</p>
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">to</p>
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">$8k</p>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[12px] tracking-[0.6px]">/ month</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center not-italic py-[2px] relative size-full text-[#6b7280] whitespace-nowrap">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">$5k</p>
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">to</p>
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">$15k</p>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[12px] tracking-[0.6px]">/ month</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center not-italic relative size-full text-white whitespace-nowrap">
        <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[12px] tracking-[0.6px]">Starts</p>
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[18px]">$9.99</p>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[12px] tracking-[0.6px]">/ month</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">💡</p>
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container23 />
        <Container24 />
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Availability</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Limited hours</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Business hours only</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <div className="h-[9.167px] relative shrink-0 w-[13.333px]" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                <path d={svgPaths.p38669a00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px] whitespace-nowrap">24/7, always on</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Downtime</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Leaves, sick days</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{`Holidays & breaks`}</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <div className="h-[9.167px] relative shrink-0 w-[13.333px]" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                <path d={svgPaths.p38669a00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Never stops</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container35 />
        <Container36 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Overhead</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Benefits, tools, extras</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">High retainers</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <div className="h-[9.167px] relative shrink-0 w-[13.333px]" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                <path d={svgPaths.p38669a00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px] whitespace-nowrap">No overhead</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container40 />
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Setup Time</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Weeks to start</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">1–2 weeks onboarding</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center not-italic pl-[25px] pr-[24px] py-[14px] relative size-full whitespace-nowrap">
          <p className="leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px]">⚡</p>
          <p className="leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px]">Ready in 5 minutes</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Continuity</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Can quit anytime</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Team changes</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <div className="h-[9.167px] relative shrink-0 w-[13.333px]" data-name="Vector">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                <path d={svgPaths.p38669a00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Never leaves</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container50 />
        <Container51 />
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Skill Coverage</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Limited to one skillset</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Depends on team</p>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center not-italic pl-[25px] pr-[24px] py-[14px] relative size-full whitespace-nowrap">
          <p className="leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px]">🌐</p>
          <p className="leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px]">Works across all platforms</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container55 />
        <Container56 />
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Speed</p>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Slow, needs follow-ups</p>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Queue-based delays</p>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center not-italic pl-[25px] pr-[24px] py-[14px] relative size-full whitespace-nowrap">
          <p className="leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px]">⚡</p>
          <p className="leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px]">Executes in minutes</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container60 />
        <Container61 />
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Scalability</p>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Hire more people</p>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Pay more to scale</p>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center not-italic pl-[25px] pr-[24px] py-[14px] relative size-full whitespace-nowrap">
          <p className="leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px]">🚀</p>
          <p className="leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px]">Instant scaling</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container65 />
        <Container66 />
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d4d4d8] text-[14px] tracking-[-0.1504px] whitespace-nowrap">How It Works</p>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">You manage them</p>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[25px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f9fa9] text-[14px] tracking-[-0.1504px] whitespace-nowrap">They plan first</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[rgba(38,87,161,0.2)] h-[56px] min-w-px relative to-[rgba(3,113,230,0.2)]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.3)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center not-italic pl-[25px] pr-[24px] py-[14px] relative size-full whitespace-nowrap">
          <p className="leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px]">🎯</p>
          <p className="leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] tracking-[-0.1504px]">You approve, we execute</p>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(39,39,42,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container70 />
        <Container71 />
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#18181b] h-[614px] relative rounded-[24px] shrink-0 w-full max-w-[1120px] px-4" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container17 />
        <Container22 />
        <Container29 />
        <Container34 />
        <Container39 />
        <Container44 />
        <Container49 />
        <Container54 />
        <Container59 />
        <Container64 />
        <Container69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#27272a] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center justify-center relative shrink-0 w-full">
      <Cotnet1 />
      <Container16 />
    </div>
  );
}

function PriceAndFaq() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[120px] items-center overflow-clip pb-[80px] pl-[45px] pr-[47px] pt-[140px] relative shrink-0 w-[1282px]" data-name="Price and FAQ">
      <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0">
        <Frame20 />
        <Frame11 />
      </div>
      <Frame17 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container 3">
      <PriceAndFaq />
    </div>
  );
}

function Container74() {
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

function Container75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] h-full items-start min-w-px not-italic relative whitespace-nowrap" data-name="Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1f2937] text-[20px]">Company</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">About us</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#374151] text-[16px]">Contact Us/Support</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#9ca3af] text-[16px]">Become Affiliate (Soon)</p>
    </div>
  );
}

function Container76() {
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

function Container77() {
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
        <Container74 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container75 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container76 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container77 />
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

function Container78() {
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame9 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1280px] px-4" data-name="Container">
      <Container3 />
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-center p-[80px] relative shrink-0 w-full max-w-[1280px] px-4" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
        <Frame19 />
        <Container78 />
        <Frame21 />
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

export default function Pricing() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center relative size-full" data-name="Pricing">
      <Container />
      <div className="-translate-x-1/2 absolute backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] content-stretch flex items-center justify-between left-1/2 px-[24px] py-[4px] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] top-[32px] w-full max-w-[1120px] px-4" data-name="Header">
        <Frame />
        <Frame8 />
      </div>
    </div>
  );
}