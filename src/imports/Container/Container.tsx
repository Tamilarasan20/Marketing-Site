import imgLora2 from "./32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";
import imgMark1 from "./b34a04b0d155ad8417b049bc9858620b387d57d6.png";
import imgSophie1 from "./7f8a67d1c140c52d1b6678ae07c33d1915711c2e.png";
import imgClara1 from "./b77f42882a70f9452bf0bb5a474a1ad9b31a04fc.png";
import imgSteve1 from "./c9c2f9a7adf5d78f4c0df2eea6a47b4ab705250b.png";
import imgTheo1 from "./d07ecb97e8b9ee75e5acd60ce6899904cb22a862.png";
import imgSarah1 from "./7afe4355de0c7c959afd51dd8847ac323e91965e.png";
import imgElena1 from "./9e93997490a115f5175753dac42207acd80356eb.png";
import imgNick1 from "./6ec3052296e3932fcfa638bc419f504d211f1c3c.png";

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

function Container1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex gap-[12px] items-center p-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[82px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Strategist</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sam</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Mark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMark1} />
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[142px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI SEO/GEO Manager</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sophie</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Sophie 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSophie1} />
      </div>
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[114px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Content Writer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Clara</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Clara 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClara1} />
      </div>
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[117px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Visual Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Steve</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Steve 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSteve1} />
      </div>
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[117px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Video Producer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Theo</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Theo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheo1} />
      </div>
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[160px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Social Media Manager</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sarah</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Sarah 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSarah1} />
      </div>
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[103px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Ads Manager</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Elena</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Elena 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgElena1} />
      </div>
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[66px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Analyst</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Nick</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Nick 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNick1} />
      </div>
      <Content8 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f9fafc] content-stretch flex gap-[20px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}