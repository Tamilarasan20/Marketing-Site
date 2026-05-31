import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import appLogo from "../../assets/loraloop-icon.svg";
import i18n from "../../i18n";

// ── Language config ──────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "en", label: "English",    nativeLabel: "English",    flag: "🇺🇸", dir: "ltr" },
  { code: "fr", label: "French",     nativeLabel: "Français",   flag: "🇫🇷", dir: "ltr" },
  { code: "de", label: "German",     nativeLabel: "Deutsch",    flag: "🇩🇪", dir: "ltr" },
  { code: "es", label: "Spanish",    nativeLabel: "Español",    flag: "🇪🇸", dir: "ltr" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português",  flag: "🇧🇷", dir: "ltr" },
  { code: "ar", label: "Arabic",     nativeLabel: "العربية",    flag: "🇸🇦", dir: "rtl" },
] as const;

type LangCode = typeof LANGUAGES[number]["code"];

function getSavedLang(): LangCode {
  try { return (localStorage.getItem("loraloop_language") as LangCode) ?? "en"; }
  catch { return "en"; }
}

function applyLang(code: LangCode, dir: string) {
  document.documentElement.lang = code;
  document.documentElement.dir  = dir;
  try { localStorage.setItem("loraloop_language", code); } catch { /* quota */ }
}

// Globe SVG icon
function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Language picker component (globe icon only, no text)
function LanguagePicker() {
  const [current, setCurrent] = useState<LangCode>("en");
  const [open, setOpen]       = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setCurrent(getSavedLang()); }, []);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const select = (lang: typeof LANGUAGES[number]) => {
    setCurrent(lang.code);
    applyLang(lang.code, lang.dir);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-[#f3f4f6] transition-colors duration-150 text-[#374151]"
      >
        <GlobeIcon size={17} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-[300] bg-white border border-[#e5e7eb] rounded-2xl shadow-xl overflow-hidden"
          style={{ minWidth: 200 }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => select(lang)}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 text-left text-[14px] transition-colors",
                current === lang.code
                  ? "bg-[#f0f7ff] text-[#1877f2] font-semibold"
                  : "text-[#374151] hover:bg-[#f9fafb]",
              )}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span className="flex-1">{lang.nativeLabel}</span>
              {current === lang.code && (
                <svg className="w-3.5 h-3.5 text-[#1877f2]" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M10 2.5 4.5 8 2 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
import imgLora from "../../imports/Home-1/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgSam from "../../imports/Home-1/67e2795861635095f78d499d37fb8c47640346cd.png";
import imgClara from "../../imports/Home-1/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgSteve from "../../imports/Home-1/81459e21086bbb45f043de724414eb6c6a228454.png";
import imgSarah from "../../imports/Home-1/2ede8e04425e852843b64720e2e6023d1ed754cb.png";
import { cn } from "./ui/utils";

const aiAgents = [
  {
    name: "Lora",
    role: "AI Marketing Lead",
    img: imgLora,
    bg: "linear-gradient(160deg, rgb(149,0,229) 0%, rgb(195,29,237) 100%)",
    scale: 1.3,
    offsetY: "2px",
    isSoon: false,
  },
  {
    name: "Sam",
    role: "AI Strategist",
    img: imgSam,
    bg: "#E5E7EB",
    scale: 1.3,
    offsetY: "2px",
    isSoon: true,
  },
  {
    name: "Clara",
    role: "AI Content Writer",
    img: imgClara,
    bg: "#E5E7EB",
    scale: 1.1,
    offsetY: "0px",
    isSoon: true,
  },
  {
    name: "Steve",
    role: "AI Visual Designer",
    img: imgSteve,
    bg: "#E5E7EB",
    scale: 1.9,
    offsetY: "2px",
    isSoon: true,
  },
  {
    name: "Sarah",
    role: "AI Social Media Manager",
    img: imgSarah,
    bg: "#E5E7EB",
    scale: 1.1,
    offsetY: "0px",
    isSoon: true,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation();

  const closeAll = useCallback(() => setOpen(false), []);

  // Subtle background shift on scroll for depth cue
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on navigation
  useEffect(() => {
    closeAll();
  }, [location, closeAll]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, closeAll]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, closeAll]);

  const activeAgents = aiAgents.filter((a) => !a.isSoon);
  const soonAgents = aiAgents.filter((a) => a.isSoon);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        ref={pillRef}
        className={cn(
          "pointer-events-auto relative backdrop-blur-[12px] rounded-[30px] px-3 md:px-6 py-[4px] flex items-center gap-3 md:gap-12 transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-[rgba(243,246,251,0.97)] shadow-[0px_8px_24px_rgba(186,201,250,0.2),0px_2px_6px_rgba(186,201,250,0.18)]"
            : "bg-[rgba(243,246,251,0.88)] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)]"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[6px] py-2 shrink-0">
          <img
            src={appLogo}
            alt="Loraloop logo"
            className="w-[34px] h-[34px] object-contain shrink-0"
          />
          <span className="font-['Satoshi',sans-serif] font-medium text-[19.5px] leading-[24.82px] text-black whitespace-nowrap">
            Loraloop
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: 4 }}>
          {/* AI Employees dropdown trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="listbox"
            className="flex gap-[2px] items-center justify-center px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877f2]/50"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-base leading-6 text-black whitespace-nowrap">
              {t('nav.aiEmployees')}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className={cn(
                "ml-1 text-[#40566D] transition-transform duration-200",
                open && "rotate-180"
              )}
            >
              <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
              />
            </svg>
          </button>

          <Link
            to="/solution"
            className="flex items-center justify-center px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-black/5"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-base leading-6 text-black whitespace-nowrap">
              {t('nav.solution')}
            </span>
          </Link>
          <Link
            to="/blog"
            className="flex items-center justify-center px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-black/5"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-base leading-6 text-black whitespace-nowrap">
              Blog
            </span>
          </Link>
          <Link
            to="/pricing"
            className="flex items-center justify-center px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-black/5"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-base leading-6 text-black whitespace-nowrap">
              Pricing
            </span>
          </Link>
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-2">
          {/* Globe / language picker — icon only */}
          <LanguagePicker />

          <a
            href="https://app.loraloop.com/signin"
            className="flex items-center justify-center px-3 md:px-5 py-2 rounded-full bg-white hover:bg-[#f3f4f6] transition-colors duration-150"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-[13px] md:text-[14px] leading-5 text-[#0f172a] whitespace-nowrap">
              {t('nav.signIn')}
            </span>
          </a>
          <a
            href={`https://app.loraloop.com/signup?lang=${typeof window !== 'undefined' ? (localStorage.getItem('loraloop_language') ?? 'en') : 'en'}`}
            className="bg-[#1877f2] hover:bg-[#1565c0] active:bg-[#1256b0] transition-colors duration-150 rounded-full px-3 md:px-5 py-2 flex items-center justify-center"
          >
            <span className="font-['Satoshi',sans-serif] font-medium text-[13px] md:text-[14px] leading-5 text-white whitespace-nowrap">
              {t('nav.getStarted')}
            </span>
          </a>
        </div>

        {/* AI Employees dropdown — always rendered, hidden via CSS for smooth transitions */}
        <div
          role="listbox"
          aria-label="AI Employees"
          className={cn(
            // Position
            "absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)]",
            // Size + shape
            "w-[520px] max-w-[calc(100vw-32px)]",
            "bg-white rounded-3xl border border-gray-200",
            "shadow-[0px_12px_32px_rgba(0,0,0,0.12)]",
            "p-6 flex flex-col gap-4 z-[200]",
            // Transition
            "transition-[opacity,transform] duration-200 ease-out",
            // Open / closed states
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          {/* Active agents */}
          <div className="grid grid-cols-2 gap-4">
            {activeAgents.map((agent) => (
              <Link
                key={agent.name}
                to={`/solution?agent=${agent.name.toLowerCase()}`}
                onClick={closeAll}
                className="flex items-center gap-3 rounded-xl px-2 py-1.5 no-underline transition-colors duration-150 hover:bg-[#f9fafc]"
              >
                <AgentAvatar agent={agent} />
                <div className="flex flex-col min-w-0">
                  <p className="font-['Satoshi',sans-serif] font-bold text-sm leading-5 text-[#1f2937] whitespace-nowrap m-0">
                    {agent.role}
                  </p>
                  <p className="font-['General_Sans',sans-serif] font-medium text-xs leading-4 text-[#6b7280] whitespace-nowrap m-0">
                    {agent.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming-soon separator */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="font-['Satoshi',sans-serif] font-medium text-xs text-[#9ca3af] whitespace-nowrap">
              More agents coming soon
            </span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Soon agents */}
          <div className="grid grid-cols-2 gap-4">
            {soonAgents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center gap-3 rounded-xl px-2 py-1.5 opacity-50 cursor-default"
              >
                <AgentAvatar agent={agent} grayscale />
                <div className="flex flex-col min-w-0">
                  <p className="font-['Satoshi',sans-serif] font-bold text-sm leading-5 text-[#9CA3AF] whitespace-nowrap m-0">
                    {agent.role}
                  </p>
                  <p className="font-['General_Sans',sans-serif] font-medium text-xs leading-4 text-[#9CA3AF] whitespace-nowrap m-0">
                    {agent.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function AgentAvatar({
  agent,
  grayscale = false,
}: {
  agent: (typeof aiAgents)[number];
  grayscale?: boolean;
}) {
  return (
    <div
      className="w-12 h-12 min-w-12 rounded-full overflow-hidden relative shrink-0"
      style={{ background: agent.bg }}
    >
      <img
        alt={agent.name}
        src={agent.img}
        className="absolute inset-0 w-full h-full object-contain"
        style={{
          transform: `scale(${agent.scale}) translateY(${agent.offsetY})`,
          filter: grayscale ? "grayscale(100%)" : undefined,
        }}
      />
    </div>
  );
}
