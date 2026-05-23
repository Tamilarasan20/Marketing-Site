import { Link } from "react-router";
import appLogo from "../../assets/app_logo.png";

function Menu() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name="Menu">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu-01">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <path d="M1 7H19M1 1H19M1 13H19" id="Icon" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <a
        href="/app/login"
        className="bg-white content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
        data-name="Signin"
      >
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">Signin</p>
      </a>
      <a
        href="/app/register"
        className="bg-[#1877f2] content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
        data-name="Get Start"
      >
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Start</p>
      </a>
    </div>
  );
}

export default function HamburgerMenu() {
  return (
    <div className="bg-[rgba(243,246,251,0.9)] backdrop-blur-[8px] content-stretch flex items-center justify-between px-[12px] py-[4px] relative rounded-[20px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] size-full" data-name="Hamburger menu">
      <div className="flex items-center">
        <Logo />
        <Menu />
      </div>
      <Frame1 />
    </div>
  );
}