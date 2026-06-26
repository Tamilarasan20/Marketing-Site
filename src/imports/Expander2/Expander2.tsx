import svgPaths from "./svg-hjgudbia7v";
import { Link } from "react-router";
import appLogo from "../../assets/app_logo.png";
import imgLora2 from "./32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";
import imgMark1 from "./b34a04b0d155ad8417b049bc9858620b387d57d6.png";
import imgClara1 from "./b77f42882a70f9452bf0bb5a474a1ad9b31a04fc.png";
import imgSteve1 from "./c9c2f9a7adf5d78f4c0df2eea6a47b4ab705250b.png";
import imgSarah1 from "./7afe4355de0c7c959afd51dd8847ac323e91965e.png";

function Menu() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name="Menu">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x">
        <div className="absolute inset-[29.17%]" data-name="Icon">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d="M11 1L1 11M1 1L11 11" id="Icon" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-[6px] shrink-0 ml-[4px]">
      <img
        src={appLogo}
        alt="Loraloop logo"
        style={{ width: 34, height: 34, objectFit: "contain", flexShrink: 0 }}
      />
    </Link>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <a
        href="/app/signin"
        className="bg-white content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
        data-name="Signin"
      >
        <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">Signin</p>
      </a>
      <a
        href="/app/signup"
        className="bg-[#1877f2] content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
        data-name="Get Start"
      >
        <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Start</p>
      </a>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-[rgba(243,246,251,0.9)] backdrop-blur-[8px] relative rounded-[20px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] shrink-0 w-full" data-name="LandingPage">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative size-full">
          <div className="flex items-center">
            <Logo />
            <Menu />
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[17.111px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.77%_7.09%]">
        <div className="absolute inset-[-9.2%_-8.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7437 17.1105">
            <path d={svgPaths.p11b5e2c0} id="Vector 1" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeWidth="2.65751" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[17px] items-start left-[-1.53px] pt-[-0.055px] px-[0.128px] top-[3.99px] w-[19px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[25px] left-[17.93px] top-0 w-[119px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi',sans-serif] font-bold leading-[24.818px] left-[59.85px] not-italic text-[#1f2937] text-[19.5px] text-center top-[0.67px] whitespace-nowrap">oraLoop.com</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[25px] left-[0.08px] top-[8px] w-[137px]" data-name="Frame9">
      <Container />
      <Paragraph />
    </div>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="absolute h-[41px] left-[2px] top-[0.9px] w-[113px] block" data-name="Wordmark">
      <Frame1 />
    </Link>
  );
}

function Frame() {
  return (
    <div className="h-[42px] relative shrink-0 w-[153px]" data-name="Frame">
      <Wordmark />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eef4ff] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[8px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Satoshi',sans-serif] font-bold leading-[24px] min-w-px not-italic relative text-[#1877f2] text-[16px]">AI Employees</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron Up">
            <div className="absolute flex inset-[34.05%_21.55%_34.05%_22.98%] items-center justify-center" style={{ containerType: "size" }}>
              <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                <div className="relative size-full" data-name="Union">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10326 8.87575">
                    <path d={svgPaths.pdd52280} fill="var(--fill-0, #1877F2)" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px]">
        <p className="leading-[18px]">AI Marketing Lead</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="leading-[16px]">Lora</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start gap-[12px] py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex gap-[13px] items-start w-full">
        <div className="relative shrink-0 size-[40px] mt-[2px]" data-name="Lora 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
        </div>
        <Content />
      </div>
      <UpdatingSoonBadge />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Strategist</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sam</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Mark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMark1} />
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI SEO/GEO Manager</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sophie</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Sophie 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSophie1} />
      </div>
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Content Writer</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Clara</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Clara 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClara1} />
      </div>
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Video Producer</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Theo</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Theo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheo1} />
      </div>
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Visual Designer</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Steve</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Steve 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSteve1} />
      </div>
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Ads Manager</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Elena</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Elena 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgElena1} />
      </div>
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Social Media Manager</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sarah</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Sarah 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSarah1} />
      </div>
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px not-italic relative" data-name="Content">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2937] text-[14px] w-full">
        <p className="leading-[18px]">AI Analyst</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Nick</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[13px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Nick 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNick1} />
      </div>
      <Content8 />
    </div>
  );
}

function UpdatingSoonBadge() {
  return (
    <div className="bg-[#e5e7eb] px-[10px] py-[4px] rounded-[100px] inline-flex">
      <p className="font-['General_Sans',sans-serif] font-medium text-[11px] text-[#4b5563] leading-[14px]">Contents Updating soon</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(247,248,250,0.95)] relative rounded-[16px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative size-full">
          <Link to="/solution?agent=lora" className="w-full no-underline"><Container2 /></Link>
          <div className="w-full grayscale opacity-50 pointer-events-none">
            <Container3 />
          </div>
          <div className="w-full grayscale opacity-50 pointer-events-none">
            <Container5 />
          </div>
          <div className="w-full grayscale opacity-50 pointer-events-none">
            <Container7 />
          </div>
          <div className="w-full grayscale opacity-50 pointer-events-none">
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <Link to="/solution" className="relative shrink-0 w-full block">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[12px] relative size-full">
          <p className="font-['Satoshi',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Solution</p>
        </div>
      </div>
    </Link>
  );
}

function FrameBlogs() {
  return (
    <Link to="/blog" className="relative shrink-0 w-full block">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[12px] relative size-full">
          <p className="font-['Satoshi',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Blogs</p>
        </div>
      </div>
    </Link>
  );
}

function Frame5() {
  return (
    <Link to="/pricing" className="relative shrink-0 w-full block">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[12px] relative size-full">
          <p className="font-['Satoshi',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Pricing</p>
        </div>
      </div>
    </Link>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame2 />
      <Container1 />
      <Frame4 />
      <FrameBlogs />
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <a
        href="/app/signin"
        className="bg-white flex-1 h-[40px] flex items-center justify-center rounded-[120px]"
        data-name="Signin"
      >
        <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">Signin</p>
      </a>
      <a
        href="/app/signup"
        className="bg-[#1877f2] flex-1 h-[40px] flex items-center justify-center rounded-[120px]"
        data-name="Get Start"
      >
        <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Start</p>
      </a>
    </div>
  );
}

function MenuExpander() {
  return (
    <div className="bg-[#f3f6fb] relative rounded-[20px] shadow-[0px_8px_9.6px_0px_rgba(0,0,0,0.1),0px_8px_25px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Menu Expander 2">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative w-full max-h-[600px] overflow-y-auto scroll-smooth">
        <Frame7 />
        <Frame9 />
      </div>
    </div>
  );
}

export default function Expander() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Expander 2">
      <LandingPage />
      <MenuExpander />
    </div>
  );
}