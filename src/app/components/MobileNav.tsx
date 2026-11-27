import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import appLogo from "../../assets/loraloop-icon.svg";
import { agentList } from "../data/agents";
import { segments } from "../data/segments";

const RESOURCES = [
  { to: "/free-meta-ads-audit", label: "Free Meta ads audit" },
  { to: "/blog", label: "Blog" },
  { to: "/tools", label: "Free tools" },
  { to: "/compare", label: "Comparisons" },
  { to: "/pricing", label: "Pricing" },
];

/** Phone header: white bar plus a full-height sheet with every menu as a plain list. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const group = "font-['Geist_Mono',ui-monospace,monospace] text-[11px] uppercase tracking-[0.08em] text-[#8592a6]";
  const link = "block py-2.5 text-[17px] text-[#0b1b33]";

  return (
    <div className="md:hidden font-['Geist','Inter',sans-serif]">
      <div className="fixed inset-x-0 top-[var(--launch-banner-h,0px)] z-[60] flex h-14 items-center justify-between border-b border-[#e3e8ef] bg-white/95 px-4 backdrop-blur">
        <Link to="/" className="flex items-center gap-2">
          <img src={appLogo} alt="" className="size-7" />
          <span className="text-[18px] font-semibold tracking-[-0.03em] text-[#0b1b33]">Loraloop</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="https://app.loraloop.com/signup"
            data-ml-goal="signup_click"
            data-ml-goal-location="mobile_header"
            className="rounded-[8px] bg-[#1f5eff] px-3 py-1.5 text-[14px] font-medium text-white"
          >
            Start free
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-[8px] text-[#0b1b33]"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        hidden={!open}
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 top-[calc(var(--launch-banner-h,0px)+3.5rem)] z-[60] overflow-y-auto bg-white px-5 pb-10 pt-4"
      >
        <p className={group}>Product</p>
        <ul className="mb-6 mt-1">
          {agentList.map((a) => (
            <li key={a.key}>
              <Link to={a.slug} className={link}>
                {a.name} <span className="text-[14px] text-[#55657d]">· {a.role}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className={group}>Solutions</p>
        <ul className="mb-6 mt-1">
          {segments.map((s) => (
            <li key={s.slug}>
              <Link to={s.slug} className={link}>{s.menuLabel}</Link>
            </li>
          ))}
        </ul>
        <p className={group}>Resources</p>
        <ul className="mb-8 mt-1">
          {RESOURCES.map((r) => (
            <li key={r.to}>
              <Link to={r.to} className={link}>{r.label}</Link>
            </li>
          ))}
        </ul>
        <a href="https://app.loraloop.com/signin" className="block rounded-[8px] border border-[#e3e8ef] py-3 text-center text-[16px] text-[#0b1b33]">
          Log in
        </a>
      </nav>
    </div>
  );
}
