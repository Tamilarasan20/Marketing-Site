import { Link } from "react-router";
import appLogo from "../../assets/app_logo.png";
import { useCurrentUser } from "../../app/hooks/useCurrentUser";

function truncateName(name: string, max = 24): string {
  return name.length > max ? name.slice(0, max) + "…" : name;
}

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

export default function HamburgerMenu() {
  const { user: currentUser, loading: authLoading } = useCurrentUser();

  return (
    <div className="bg-[rgba(243,246,251,0.9)] backdrop-blur-[8px] content-stretch flex items-center justify-between px-[12px] py-[4px] relative rounded-[20px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] size-full" data-name="Hamburger menu">
      <div className="flex items-center">
        <Logo />
        <Menu />
      </div>

      {authLoading ? (
        <div className="h-9 w-24 rounded-full bg-black/5 animate-pulse" />
      ) : currentUser ? (
        /* Signed-in → profile pill */
        <a
          href="https://app.loraloop.com/chat"
          aria-label={`Open Loraloop as ${currentUser.name}`}
          className="flex items-center gap-2 pl-[5px] pr-4 py-[5px] rounded-full bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-colors duration-150"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 overflow-hidden">
            {currentUser.avatarUrl ? (
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3a2a8c 0%, #4338ca 48%, #3b82f6 100%)" }}
              >
                <span className="font-['Satoshi',sans-serif] font-bold text-[12px] text-white leading-none">
                  {currentUser.name.charAt(0).toUpperCase()}
                </span>
              </span>
            )}
          </span>
          <span className="font-['Satoshi',sans-serif] font-semibold text-[13px] leading-5 text-[#1f2a44] whitespace-nowrap">
            {truncateName(currentUser.name)}
          </span>
        </a>
      ) : (
        /* Signed-out → Sign in + Get Started */
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <a
            href="https://app.loraloop.com/signin"
            className="bg-white content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
            data-name="Signin"
          >
            <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">Sign in</p>
          </a>
          <a
            href={`https://app.loraloop.com/signup?lang=${typeof window !== 'undefined' ? (localStorage.getItem('loraloop_language') ?? 'en') : 'en'}`}
            className="bg-[#1877f2] content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
            data-name="Get Start"
          >
            <p className="font-['Satoshi',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Started</p>
          </a>
        </div>
      )}
    </div>
  );
}