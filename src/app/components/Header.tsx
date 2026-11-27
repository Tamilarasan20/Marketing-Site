import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router";
import {
  ArrowRight,
  BookOpen,
  SearchCheck,
  Calculator,
  Megaphone,
  Scale,
  ShoppingBag,
  Users,
  Workflow,
  Building2,
  LayoutGrid,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import appLogo from "../../assets/loraloop-icon.svg";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { cn } from "./ui/utils";
import { agentList, type Agent } from "../data/agents";
import { segments } from "../data/segments";

function truncateName(name: string, max = 24): string {
  return name.length > max ? name.slice(0, max) + "…" : name;
}

export type HeaderVariant = "default" | "light";

type MenuKey = "product" | "solutions" | "resources";

const SEGMENT_ICONS: Record<string, LucideIcon> = {
  "/for-ecommerce": ShoppingBag,
  "/for-saas": LayoutGrid,
  "/for-agencies": Users,
  "/for-media-buyers": Megaphone,
  "/for-marketing-teams": Building2,
  "/for-local-businesses": MapPin,
};

interface MenuItem {
  to: string;
  label: string;
  note: string;
  icon?: LucideIcon;
}
interface MenuDef {
  key: MenuKey;
  label: string;
  heading: string;
  items: MenuItem[];
  /** Optional second column of plain links (Resources). */
  links?: { heading: string; items: { to: string; label: string }[] }[];
  featured: { title: string; note: string; to: string }[];
  featuredLink: { to: string; label: string };
}

const MENUS: MenuDef[] = [
  {
    key: "product",
    label: "Product",
    heading: "Your AI marketing team",
    items: [], // filled from agentList at render time
    featured: [
      { title: "4,000+ integrations", note: "Shopify, Klaviyo, Meta, Google Ads and thousands more", to: "/#integrations" },
      { title: "Guardrails you control", note: "Autonomy per area, approvals in Slack, undo on every change", to: "/#guardrails" },
    ],
    featuredLink: { to: "/solution", label: "See how the team works" },
  },
  {
    key: "solutions",
    label: "Solutions",
    heading: "By team",
    items: segments.map((seg) => ({ to: seg.slug, label: seg.menuLabel, note: seg.menuNote, icon: SEGMENT_ICONS[seg.slug] })),
    featured: [
      { title: "Free Meta ads audit", note: "Find wasted spend, tracking and creative problems in your account", to: "/free-meta-ads-audit" },
      { title: "After Black Friday", note: "A 30-day plan to turn discount buyers into repeat customers", to: "/blog/after-black-friday-retention-plan-shopify" },
    ],
    featuredLink: { to: "/blog", label: "Read the playbooks" },
  },
  {
    key: "resources",
    label: "Resources",
    heading: "Resources",
    items: [
      { to: "/free-meta-ads-audit", label: "Free Meta ads audit", note: "A score and ranked fixes for your ad account", icon: SearchCheck },
      { to: "/blog", label: "Blog", note: "Playbooks for ads, email, SEO and GEO", icon: BookOpen },
      { to: "/tools", label: "Free tools", note: "Generators and marketing calculators", icon: Calculator },
      { to: "/compare", label: "Comparisons", note: "Loraloop next to the tools you are weighing", icon: Scale },
    ],
    links: [
      {
        heading: "Popular guides",
        items: [
          { to: "/blog/meta-ads-creative-testing-framework-2026", label: "Meta ads creative testing framework" },
          { to: "/blog/geo-vs-seo-2026", label: "GEO vs SEO in 2026" },
          { to: "/blog/how-to-choose-ai-marketing-agent", label: "How to choose an AI marketing agent" },
          { to: "/blog/bfcm-post-mortem-template-agencies", label: "BFCM post-mortem template" },
        ],
      },
      {
        heading: "Calculators",
        items: [
          { to: "/tools/break-even-roas-calculator", label: "Break-even ROAS calculator" },
          { to: "/tools/hook-rate-calculator", label: "Hook rate calculator" },
        ],
      },
    ],
    featured: [
      { title: "Creative fatigue on Meta ads", note: "How to spot it early and what to do", to: "/blog/creative-fatigue-meta-ads-detect-and-fix" },
      { title: "Black Friday signups churn fast", note: "How SaaS teams keep them", to: "/blog/saas-black-friday-trials-churn" },
    ],
    featuredLink: { to: "/blog", label: "Read the latest guides" },
  },
];

/** Hash links ("/#integrations") need a scroll after the home route renders. */
function FeaturedLink({ to, onClick, className, children }: { to: string; onClick: () => void; className: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      onClick={() => {
        onClick();
        const hash = to.split("#")[1];
        if (hash) window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function Header(_props: { variant?: HeaderVariant } = {}) {
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { user: currentUser, loading: authLoading } = useCurrentUser();
  const barRef = useRef<HTMLDivElement>(null);
  const hoverOpened = useRef(false);
  const location = useLocation();

  const closeAll = useCallback(() => setMenu(null), []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location, closeAll]);

  useEffect(() => {
    if (!menu) return;
    const onDown = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) closeAll();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menu, closeAll]);

  const active = MENUS.find((m) => m.key === menu) ?? null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-['Geist','Inter',sans-serif]" onMouseLeave={closeAll}>
      <div
        ref={barRef}
        className={cn(
          "relative bg-white/95 backdrop-blur-[10px] transition-[box-shadow,border-color] duration-200",
          scrolled || menu ? "border-b border-[#e3e8ef] shadow-[0_6px_24px_-12px_rgba(20,20,18,0.12)]" : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-8 px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2" onClick={closeAll}>
            <img src={appLogo} alt="" className="size-[30px] object-contain" />
            <span className="font-['Geist',sans-serif] text-[19px] font-semibold tracking-[-0.03em] text-[#0b1b33]">Loraloop</span>
          </Link>

          <nav aria-label="Main" className="flex items-center gap-1">
            {MENUS.map((m) => (
              <button
                key={m.key}
                type="button"
                aria-expanded={menu === m.key}
                aria-controls="site-mega-menu"
                onClick={() => {
                  // A click right after hover-open keeps it open; a second click closes it.
                  const viaHover = hoverOpened.current;
                  hoverOpened.current = false;
                  setMenu((cur) => (cur === m.key && !viaHover ? null : m.key));
                }}
                onMouseEnter={() => {
                  hoverOpened.current = true;
                  setMenu(m.key);
                }}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1b33]",
                  menu === m.key ? "text-[#0b1b33]" : "text-[#425166] hover:text-[#0b1b33]",
                )}
              >
                {m.label}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={cn("transition-transform duration-200", menu === m.key && "rotate-180")}>
                  <path d="M4 6.5L8 10.5L12 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                </svg>
              </button>
            ))}
            <Link
              data-ml-goal="pricing_view"
              to="/pricing"
              onMouseEnter={closeAll}
              className="rounded-full px-3 py-2 text-[15px] text-[#425166] transition-colors hover:text-[#0b1b33]"
            >
              Pricing
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2" onMouseEnter={closeAll}>
            {authLoading ? (
              <div className="h-10 w-32 animate-pulse rounded-full bg-black/5" />
            ) : currentUser ? (
              <a
                href="https://app.loraloop.com/chat"
                aria-label={`Open Loraloop as ${currentUser.name}`}
                className="flex items-center gap-2 rounded-full border border-[#e3e8ef] bg-white py-[5px] pl-[5px] pr-4 transition-colors hover:bg-[#f6f8fb]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0b1b33]">
                  {currentUser.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt="" className="size-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="text-[12px] font-bold text-white">{currentUser.name.charAt(0).toUpperCase()}</span>
                  )}
                </span>
                <span className="whitespace-nowrap text-[14px] font-medium text-[#0b1b33]">{truncateName(currentUser.name)}</span>
              </a>
            ) : (
              <>
                <a href="https://app.loraloop.com/signin" className="rounded-full px-3 py-2 text-[15px] text-[#425166] transition-colors hover:text-[#0b1b33]">
                  Log in
                </a>
                <a
                  data-ml-goal="signup_click"
                  data-ml-goal-location="header"
                  href={`https://app.loraloop.com/signup?lang=${typeof window !== "undefined" ? (localStorage.getItem("loraloop_language") ?? "en") : "en"}`}
                  className="rounded-[8px] bg-[#1f5eff] px-4 py-2 text-[15px] font-medium text-white transition-colors hover:bg-[#1346d6]"
                >
                  Start free
                </a>
              </>
            )}
          </div>
        </div>

        {/* Mega menu: full width under the bar, Helena-style (list left, featured right). */}
        <div
          id="site-mega-menu"
          hidden={!active}
          className="absolute inset-x-0 top-full border-b border-[#e3e8ef] bg-white shadow-[0_24px_48px_-24px_rgba(20,20,18,0.18)]"
        >
          {active && (
            <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-8 lg:grid-cols-[1fr_340px] lg:px-8">
              <div className="min-w-0">
                <div className="flex items-center gap-4">
                  <p className="shrink-0 text-[15px] text-[#8592a6]">{active.heading}</p>
                  <span className="h-px flex-1 bg-[#e3e8ef]" aria-hidden="true" />
                </div>
                <div className={cn("mt-5 grid gap-x-8 gap-y-2", active.links ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-2")}>
                  <ul className={cn("grid gap-2", !active.links && "md:col-span-2 md:grid-cols-2")}>
                    {active.key === "product"
                      ? agentList.map((agent) => (
                          <li key={agent.key}>
                            <Link to={agent.slug} onClick={closeAll} className="flex items-center gap-4 rounded-[14px] p-2 transition-colors hover:bg-[#f6f8fb]">
                              <AgentAvatar agent={agent} />
                              <span className="min-w-0">
                                <span className="block text-[16px] font-medium text-[#0b1b33]">{agent.name}</span>
                                <span className="block text-[14px] text-[#55657d]">{agent.role}</span>
                              </span>
                            </Link>
                          </li>
                        ))
                      : active.items.map((item) => {
                          const Icon = item.icon ?? Workflow;
                          return (
                            <li key={item.to}>
                              <Link to={item.to} onClick={closeAll} className="flex items-center gap-4 rounded-[14px] p-2 transition-colors hover:bg-[#f6f8fb]">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-[#f6f8fb] text-[#425166]" aria-hidden="true">
                                  <Icon className="size-[18px]" strokeWidth={1.7} />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[16px] font-medium text-[#0b1b33]">{item.label}</span>
                                  <span className="block text-[14px] text-[#55657d]">{item.note}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                  </ul>
                  {active.links && (
                    <div className="flex flex-col gap-6">
                      {active.links.map((group) => (
                        <div key={group.heading}>
                          <p className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-[#8592a6]">{group.heading}</p>
                          <ul className="mt-3 flex flex-col gap-2.5">
                            {group.items.map((l) => (
                              <li key={l.to}>
                                <Link to={l.to} onClick={closeAll} className="text-[15px] text-[#0b1b33] hover:underline hover:underline-offset-4">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <aside aria-label="Featured" className="flex flex-col gap-3 rounded-[20px] bg-[#f6f8fb] p-5 lg:border-l-0">
                <p className="text-[15px] text-[#55657d]">Featured</p>
                {active.featured.map((f) => (
                  <FeaturedLink key={f.to} to={f.to} onClick={closeAll} className="rounded-[14px] border border-[#e3e8ef] bg-white p-4 transition-colors hover:border-[#c9d2de]">
                    <span className="block text-[16px] font-medium text-[#0b1b33]">{f.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.45] text-[#55657d]">{f.note}</span>
                  </FeaturedLink>
                ))}
                <Link to={active.featuredLink.to} onClick={closeAll} className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0b1b33] hover:underline hover:underline-offset-4">
                  {active.featuredLink.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </aside>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function AgentAvatar({ agent }: { agent: Agent }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px]" style={{ background: agent.gradient }} aria-hidden="true">
      <span className="text-[20px] leading-none" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}>
        {agent.emoji}
      </span>
    </span>
  );
}
