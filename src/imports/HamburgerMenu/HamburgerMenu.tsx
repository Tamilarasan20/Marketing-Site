import { useState, useEffect } from "react";
import { Link } from "react-router";
import appLogo from "../../assets/app_logo.png";
import { supabase } from "../../lib/supabase";

function truncateName(name: string, max = 20): string {
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
  const [currentUser, setCurrentUser] = useState<{ name: string; avatarUrl?: string } | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const meta = session.user.user_metadata as Record<string, string> | undefined;
        const name = meta?.full_name ?? meta?.name ?? session.user.email?.split("@")[0] ?? "User";
        const avatarUrl = meta?.avatar_url ?? meta?.picture ?? undefined;
        setCurrentUser({ name, avatarUrl });
      }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const meta = session.user.user_metadata as Record<string, string> | undefined;
        const name = meta?.full_name ?? meta?.name ?? session.user.email?.split("@")[0] ?? "User";
        const avatarUrl = meta?.avatar_url ?? meta?.picture ?? undefined;
        setCurrentUser({ name, avatarUrl });
      } else {
        setCurrentUser(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="bg-[rgba(243,246,251,0.9)] backdrop-blur-[8px] content-stretch flex items-center justify-between px-[12px] py-[4px] relative rounded-[20px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] size-full" data-name="Hamburger menu">
      <div className="flex items-center">
        <Logo />
        <Menu />
      </div>

      {currentUser ? (
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
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <a
            href="https://app.loraloop.com/signin"
            className="bg-white content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
            data-name="Signin"
          >
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">Sign in</p>
          </a>
          <a
            href={`https://app.loraloop.com/signup?lang=${typeof window !== 'undefined' ? (localStorage.getItem('loraloop_language') ?? 'en') : 'en'}`}
            className="bg-[#1877f2] content-stretch flex h-[40px] items-center justify-center px-[18px] relative rounded-[120px] shrink-0"
            data-name="Get Start"
          >
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Started</p>
          </a>
        </div>
      )}
    </div>
  );
}