import svgPaths from "./svg-vqugh1pll5";
import { Link, useLocation, useNavigate } from "react-router";
import appLogo from "../../assets/app_logo.png";

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
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div 
        onClick={() => {
          if (location.pathname === "/") {
            window.scrollTo(0, 0);
            window.dispatchEvent(new CustomEvent("focus-waitlist-email"));
          } else {
            navigate("/", { state: { focusEmail: true } });
          }
        }}
        className="bg-[#1877f2] content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] relative rounded-[120px] shrink-0 cursor-pointer" 
        data-name="Button"
      >
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Join Waitlist</p>
      </div>
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
      <p className="-translate-x-1/2 absolute font-['Satoshi:Bold',sans-serif] leading-[24.818px] left-[59.85px] not-italic text-[#1f2937] text-[19.5px] text-center top-[0.67px] whitespace-nowrap">oraLoop.com</p>
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

function Frame8() {
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

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[8px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Satoshi:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[#1f2937] text-[16px]">AI Employees</p>
          <Frame8 />
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
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Solution</p>
        </div>
      </div>
    </Link>
  );
}

function Frame9() {
  return (
    <Link to="/blog" className="relative shrink-0 w-full block">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[12px] relative size-full">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Blogs</p>
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
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-center whitespace-nowrap">Pricing</p>
        </div>
      </div>
    </Link>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
      <Frame9 />
      <Frame5 />
    </div>
  );
}

function MenuExpander() {
  return (
    <div className="bg-[#f3f6fb] relative rounded-[20px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] shrink-0 w-full" data-name="Menu Expander">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative size-full">
        <Frame7 />
      </div>
    </div>
  );
}

export default function Expander() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Expander 1">
      <LandingPage />
      <MenuExpander />
    </div>
  );
}