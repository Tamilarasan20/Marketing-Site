import type { ReactNode } from "react";
import { ArrowRight, Clock3, Search, Sparkles, Zap } from "lucide-react";
import { cn } from "../ui/utils";

/*
 * Data-rich product views built from the app's own vocabulary: daily briefing, approvals,
 * Angie's budget proposals and evaluations, GEO citations, Klaviyo flows, competitor ads
 * (Meta Ad Library), the publishing calendar, recurring tasks. Example data for a fictional
 * brand (Brewly, a coffee subscription); captions on the page say so.
 */

export function AppWindow({ title, right, children, className, bodyClass }: { title: string; right?: string; children: ReactNode; className?: string; bodyClass?: string }) {
  return (
    <div className={cn("lx-ui overflow-hidden rounded-[10px] border border-[var(--lx-line)] bg-white shadow-[0_20px_40px_-26px_rgba(17,17,16,0.28)]", className)}>
      <div className="flex items-center gap-2 border-b border-[var(--lx-line)] bg-[#fafaf9] px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#dfe5ee]" />
          <span className="size-2 rounded-full bg-[#dfe5ee]" />
          <span className="size-2 rounded-full bg-[#dfe5ee]" />
        </span>
        <span className="mx-auto truncate text-[11px] font-medium text-[var(--lx-mute)]">{title}</span>
        {right && <span className="text-[10.5px] text-[var(--lx-mute)]">{right}</span>}
      </div>
      <div className={cn("p-3.5", bodyClass)}>{children}</div>
    </div>
  );
}

export function Chip({ tone = "grey", children }: { tone?: "grey" | "green" | "amber" | "blue" | "red"; children: ReactNode }) {
  const tones = {
    grey: "bg-[#eef2f7] text-[var(--lx-slate)]",
    green: "bg-[#e3f6ee] text-[var(--lx-green)]",
    amber: "bg-[#fff3dc] text-[var(--lx-amber)]",
    blue: "bg-[var(--lx-blue-wash)] text-[var(--lx-blue)]",
    red: "bg-[#fdecea] text-[#c4321c]",
  } as const;
  return <span className={cn("inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-[6px] px-1.5 py-0.5 text-[10.5px] font-medium", tones[tone])}>{children}</span>;
}

function Avatar({ name, color }: { name: string; color: string }) {
  return <span className="flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white" style={{ background: color }}>{name[0]}</span>;
}
const LORA = "#1f5eff";
const cap = "text-[10px] font-medium uppercase tracking-[0.07em] text-[var(--lx-mute)]";
const Approve = () => <span className="shrink-0 rounded-[6px] bg-[var(--lx-blue)] px-2 py-0.5 text-[10.5px] font-medium text-white">Approve</span>;
const Toggle = ({ on }: { on: boolean }) => (
  <span className={cn("relative inline-block h-3.5 w-6 shrink-0 rounded-full", on ? "bg-[var(--lx-green)]" : "bg-[#d5dbe4]")}>
    <span className={cn("absolute top-0.5 size-2.5 rounded-full bg-white", on ? "right-0.5" : "left-0.5")} />
  </span>
);
const Up = ({ children }: { children: ReactNode }) => <span className="text-[10px] font-medium text-[var(--lx-green)]">▲ {children}</span>;

/* ─── 1. Strategy: goal, budget mix, priorities ─────────────────────────── */
export function StrategyView() {
  const mix = [
    { name: "Meta Ads", pct: 45, c: "#1f5eff" },
    { name: "Google Ads", pct: 25, c: "#7ea2ff" },
    { name: "Email and SMS", pct: 15, c: "#12b5e8" },
    { name: "Social", pct: 15, c: "#6d5bff" },
  ];
  return (
    <AppWindow title="Lora" right="Plan ready">
      <div className="flex items-center gap-2"><Avatar name="Lora" color={LORA} /><span className="font-medium">Your Q1 marketing plan</span></div>
      <p className={cn(cap, "mt-3")}>Goal</p>
      <div className="mt-1 flex flex-wrap gap-x-3 rounded-[8px] border border-[var(--lx-line)] px-2.5 py-2 font-medium">
        <span>$240K Q1 revenue</span><span className="text-[var(--lx-mute)]">·</span><span>3.0x blended ROAS</span>
      </div>
      <p className={cn(cap, "mt-3")}>Budget mix · $18K / month</p>
      <div className="mt-1.5 flex h-2 overflow-hidden rounded-full">
        {mix.map((m) => <span key={m.name} style={{ width: `${m.pct}%`, background: m.c }} />)}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
        {mix.map((m) => (
          <span key={m.name} className="flex items-center gap-1.5 text-[11px] text-[var(--lx-slate)]"><span className="size-1.5 rounded-full" style={{ background: m.c }} />{m.name} · {m.pct}%</span>
        ))}
      </div>
      <p className={cn(cap, "mt-3")}>Priorities</p>
      <ol className="mt-1 divide-y divide-[var(--lx-line)] rounded-[8px] border border-[var(--lx-line)]">
        {[["Win back first-time BFCM buyers", "Klaviyo"], ["Gift guide for 'best coffee subscription'", "Search"], ["Refresh 6 fatigued UGC ads", "Meta"]].map(([p, ch], i) => (
          <li key={p} className="flex items-center gap-2 px-2.5 py-1.5">
            <span className="lx-mono flex size-4 items-center justify-center rounded-full bg-[var(--lx-blue-wash)] text-[9.5px] text-[var(--lx-blue)]">{i + 1}</span>
            <span className="min-w-0 flex-1 truncate">{p}</span>
            <Chip>{ch}</Chip>
          </li>
        ))}
      </ol>
    </AppWindow>
  );
}

/* ─── 2. Briefing: inbox list plus the open brief ──────────────────────── */
export function BriefingView() {
  const list = [
    ["Mon, Dec 1", "Revenue $4,820 ▲12% · 3 to do", true],
    ["Sun, Nov 30", "Meta CPA back on target", false],
    ["Sat, Nov 29", "2 keywords hit page one", false],
    ["Fri, Nov 28", "Weekend email drove $1.9K", false],
  ] as const;
  return (
    <AppWindow title="Inbox" right="Mon 8:00 AM" bodyClass="p-0">
      <div className="grid sm:grid-cols-[0.9fr_1.4fr]">
        <ul className="hidden border-r border-[var(--lx-line)] sm:block">
          {list.map(([d, l, active]) => (
            <li key={d} className={cn("border-b border-[var(--lx-line)] px-2.5 py-2", active && "bg-[var(--lx-blue-wash)]")}>
              <span className="flex items-center justify-between gap-1"><span className="font-medium">Lora</span>{active && <span className="text-[10px] text-[var(--lx-blue)]">8:00</span>}</span>
              <span className="block truncate text-[11px]">Daily brief · {d}</span>
              <span className="block truncate text-[10.5px] text-[var(--lx-mute)]">{l}</span>
            </li>
          ))}
        </ul>
        <div className="min-w-0 p-3">
          <p className="text-[13px] font-medium">Good morning. Here's yesterday.</p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[["Revenue", "$4,820", "12%"], ["Blended ROAS", "3.1x", "0.3"], ["New subs", "186", "9%"]].map(([k, v, d]) => (
              <div key={k} className="min-w-0 rounded-[8px] border border-[var(--lx-line)] px-2 py-1.5">
                <p className={cn(cap, "truncate")}>{k}</p>
                <p className="lx-mono mt-0.5 text-[13px] font-medium">{v} <Up>{d}</Up></p>
              </div>
            ))}
          </div>
          <p className={cn(cap, "mt-3")}>Do this today</p>
          <ul className="mt-1 flex flex-col gap-1">
            {["Raise 'Prospecting UGC' budget by $40/day", "Resend launch email to non-openers", "Reply to 3 product reviews on Instagram"].map((t) => (
              <li key={t} className="flex items-center gap-2 border-b border-[var(--lx-line)] py-1"><span className="min-w-0 flex-1 truncate text-[11px]">{t}</span><Approve /></li>
            ))}
          </ul>
        </div>
      </div>
    </AppWindow>
  );
}

/* ─── 3. Ads: table with budgets and status toggles ────────────────────── */
export function AdsView() {
  const rows = [
    { n: "Prospecting, UGC", p: "Meta", from: "$80", to: "$150", on: true, s: "Scaling" },
    { n: "Spark ads", p: "TikTok", from: "$50", to: "$120", on: true, s: "Scaling" },
    { n: "Retargeting, Broad", p: "Meta", from: "$120", to: "$0", on: false, s: "Paused" },
    { n: "Brand search", p: "Google Ads", from: "$60", to: "$80", on: true, s: "Steady" },
  ];
  return (
    <AppWindow title="Angie" right="Today 6:00 AM" bodyClass="p-0">
      <div className="flex items-center gap-2 border-b border-[var(--lx-line)] px-3 py-2">
        <span className="flex flex-1 items-center gap-1.5 rounded-[6px] border border-[var(--lx-line)] px-2 py-1 text-[10.5px] text-[var(--lx-mute)]"><Search className="size-3" />Search ad sets</span>
        <Chip tone="blue">Optimized today</Chip>
      </div>
      <table className="w-full text-left">
        <thead><tr className={cap}><th className="px-3 py-1.5 font-medium">Ad set</th><th className="font-medium">Budget / day</th><th className="pr-3 font-medium">Status</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.n} className="border-t border-[var(--lx-line)]">
              <td className="px-3 py-1.5"><span className="block font-medium">{r.n}</span><span className="text-[10.5px] text-[var(--lx-mute)]">{r.p}</span></td>
              <td className="lx-mono"><span className="text-[var(--lx-mute)] line-through">{r.from}</span> <ArrowRight className="inline size-2.5" /> <span className={cn("font-medium", r.to === "$0" && "text-[#c4321c]")}>{r.to}</span></td>
              <td className="pr-3"><span className="flex items-center gap-1.5"><Toggle on={r.on} /><span className={cn("text-[11px]", r.on ? "text-[var(--lx-green)]" : "text-[#c4321c]")}>{r.s}</span></span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-2.5 flex gap-2 rounded-[8px] border border-[var(--lx-line)] bg-white p-2 shadow-sm">
        <Avatar name="Angie" color="#12b5e8" />
        <span className="text-[11px]"><span className="font-medium">Moved $160/day to your top performers.</span> <span className="text-[var(--lx-slate)]">1 ad set paused. Next check tomorrow, 6:00 AM.</span></span>
      </div>
    </AppWindow>
  );
}

/* ─── 4. SEO: keyword, draft score, publish, clicks ────────────────────── */
export function SeoView() {
  return (
    <AppWindow title="Sophie">
      <p className="text-[14px] font-medium">How to make cold brew at home</p>
      <p className={cn(cap, "mt-2.5")}>Target keyword</p>
      <div className="mt-1 grid grid-cols-[1fr_auto] gap-1.5">
        <span className="rounded-[6px] border border-[var(--lx-line)] px-2 py-1">how to make cold brew</span>
        <span className="lx-mono rounded-[6px] border border-[var(--lx-line)] px-2 py-1">8.9K <span className="text-[var(--lx-mute)]">/ mo</span></span>
      </div>
      <p className={cn(cap, "mt-2.5")}>Draft</p>
      <div className="mt-1 rounded-[6px] border border-[var(--lx-line)] px-2 py-1.5">
        <span className="flex justify-between"><span>1,842 words</span><span className="font-medium text-[var(--lx-green)]">✓ SEO score 92</span></span>
        <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-[#e8edf4]"><span className="block h-full w-[92%] rounded-full bg-[var(--lx-blue)]" /></span>
      </div>
      <p className={cn(cap, "mt-2.5")}>Publish to</p>
      <div className="mt-1 flex items-center gap-1.5">
        <span className="flex-1 rounded-[6px] border border-[var(--lx-line)] px-2 py-1">brewly.com/blog</span>
        <Chip tone="green">● Published</Chip>
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-[6px] bg-[var(--lx-mist)] px-2 py-1.5">
        <span className="flex items-center gap-1"><Sparkles className="size-3 text-[var(--lx-blue)]" />Cited in AI Overview</span>
        <span className="flex items-center gap-1.5"><svg width="44" height="14" viewBox="0 0 44 14" aria-hidden="true"><path d="M1 12 L9 10 L17 11 L25 7 L33 6 L43 2" fill="none" stroke="#1f5eff" strokeWidth="1.5" /></svg><Up>38%</Up></span>
      </div>
    </AppWindow>
  );
}

/* ─── 5. Email: branching Klaviyo flow ─────────────────────────────────── */
export function EmailView() {
  const node = "rounded-[8px] border border-[var(--lx-line)] bg-white px-2.5 py-1.5 shadow-sm";
  return (
    <AppWindow title="Clara · Klaviyo" bodyClass="bg-[radial-gradient(#e3e8ef_1px,transparent_1px)] [background-size:12px_12px]">
      <div className="flex items-center justify-between"><span className="font-medium">Abandoned cart flow</span><span className="flex items-center gap-1.5 text-[10.5px] text-[var(--lx-green)]"><Toggle on />Live</span></div>
      <div className="mt-3 flex flex-col items-center gap-1.5">
        <div className={node}><p className={cap}>Trigger</p><p className="flex items-center gap-1"><Zap className="size-3 text-[var(--lx-amber)]" />Added to cart, no checkout</p></div>
        <span className="flex items-center gap-1 text-[10.5px] text-[var(--lx-mute)]"><Clock3 className="size-3" />Wait 1 hour</span>
        <div className={cn(node, "flex items-center gap-2")}>
          <span><p className={cap}>Email 1</p><p className="font-medium">You left something behind</p><p className="text-[10px] text-[var(--lx-mute)]">Copy and template by Clara</p></span>
          <span className="h-8 w-9 rounded-[4px] bg-[linear-gradient(160deg,#c89a6b,#7a4b2a)]" />
        </div>
        <span className="rounded-full border border-[var(--lx-line)] bg-white px-2 py-0.5 text-[10.5px]">Opened email 1?</span>
        <div className="grid w-full grid-cols-2 gap-1.5">
          <div className={node}><p className={cap}>Yes · Email 2</p><p>Free shipping today</p></div>
          <div className={node}><p className={cap}>No · SMS</p><p>10% off for 24h</p></div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ─── 6. Competitors: three brands, launches, spend, angles ────────────── */
export function CompetitorView() {
  const brands = [
    { n: "Beanly", d: "beanly.co", c: "#ef6b3a", launch: "Cold brew kit · $29", when: "2 days ago", spend: [3, 4, 4, 5, 6, 9], pct: "40%", angle: "\"Sleep better\" UGC" },
    { n: "Roastery", d: "roastery.com", c: "#0f9f6e", launch: "Holiday tin set · $48", when: "5 days ago", spend: [4, 4, 5, 5, 5, 6], pct: "6%", angle: "\"Gift for dad\"" },
    { n: "Kettle & Co", d: "kettleco.com", c: "#1f5eff", launch: "Subscription · 20% off", when: "Today", spend: [2, 3, 3, 4, 5, 7], pct: "22%", angle: "Founder story" },
  ];
  return (
    <AppWindow title="Competitor watch">
      <div className="flex items-center gap-2"><span className="text-[13px] font-medium">This week</span><Chip tone="blue">3 brands tracked</Chip><span className="truncate text-[10.5px] text-[var(--lx-mute)]">Meta Ad Library · Google · site changes</span></div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {brands.map((b) => (
          <div key={b.n} className="flex min-w-0 flex-col gap-1.5">
            <span className="flex items-center gap-1.5"><span className="flex size-4 items-center justify-center rounded-full text-[9px] font-semibold text-white" style={{ background: b.c }}>{b.n[0]}</span><span className="min-w-0"><span className="block truncate font-medium">{b.n}</span><span className="block truncate text-[9.5px] text-[var(--lx-mute)]">{b.d}</span></span></span>
            <div className="rounded-[6px] border border-[var(--lx-line)] p-1.5"><p className={cap}>New launch <span className="text-[var(--lx-amber)]">●</span></p><p className="truncate font-medium">{b.launch}</p><p className="text-[9.5px] text-[var(--lx-mute)]">{b.when}</p></div>
            <div className="rounded-[6px] border border-[var(--lx-line)] p-1.5">
              <p className={cn(cap, "flex justify-between")}>Meta spend <Up>{b.pct}</Up></p>
              <div className="mt-1 flex h-4 items-end gap-0.5">{b.spend.map((h, i) => <span key={i} className={cn("w-full rounded-[1px]", i === b.spend.length - 1 ? "bg-[var(--lx-blue)]" : "bg-[#c9d6f7]")} style={{ height: `${h * 10}%` }} />)}</div>
            </div>
            <div className="rounded-[6px] border border-[var(--lx-line)] p-1.5"><p className={cap}>Scaling angle</p><p className="truncate">{b.angle}</p></div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-[8px] border border-[var(--lx-line)] bg-white p-2 text-[11px] shadow-sm">Beanly launched a $29 cold brew kit and added 9 Meta ads in 48 hours. <span className="font-medium text-[var(--lx-blue)]">Draft a counter-offer?</span></div>
    </AppWindow>
  );
}

/* ─── 7. Social: calendar with post thumbnails ─────────────────────────── */
export function SocialView() {
  const days = [
    { d: "Mon 1", posts: [{ t: "9:00 AM", net: "IG", cap: "Slow mornings, single origin", g: "linear-gradient(160deg,#e9c9a5,#a7683d)" }] },
    { d: "Tue 2", posts: [{ t: "6:30 PM", net: "TT", cap: "POV: your first pour-over", g: "linear-gradient(160deg,#bfe3d6,#4f9b84)" }] },
    { d: "Wed 3", posts: [{ t: "8:00 AM", net: "in", cap: "Why we roast to order", g: "linear-gradient(160deg,#cfdcff,#5b7fe0)" }] },
    { d: "Thu 4", posts: [{ t: "12:00 PM", net: "IG", cap: "Gift guide carousel", g: "linear-gradient(160deg,#f3d6e4,#c46a93)" }] },
    { d: "Fri 5", posts: [] },
  ];
  return (
    <AppWindow title="Content calendar">
      <div className="flex flex-wrap items-center gap-2"><span className="text-[13px] font-medium">Week of Dec 1</span><span className="flex items-center gap-1.5 rounded-full border border-[var(--lx-line)] px-2 py-0.5 text-[10.5px]"><Avatar name="L" color={LORA} />Lora is planning next week…</span></div>
      <div className="mt-2.5 grid grid-cols-5 gap-1.5">
        {days.map((day) => (
          <div key={day.d} className="min-w-0">
            <p className="text-[10.5px] font-medium text-[var(--lx-slate)]">{day.d}</p>
            <div className="mt-1 flex min-h-[118px] flex-col gap-1.5">
              {day.posts.map((p) => (
                <div key={p.cap} className="rounded-[8px] border border-[var(--lx-line)] p-1.5">
                  <p className="flex items-center gap-1 text-[9.5px] text-[var(--lx-mute)]"><span className="rounded-[3px] bg-[var(--lx-blue-wash)] px-1 font-semibold text-[var(--lx-blue)]">{p.net}</span>{p.t}</p>
                  <div className="mt-1 h-11 rounded-[5px]" style={{ background: p.g }} />
                  <p className="mt-1 line-clamp-2 text-[10px] leading-tight">{p.cap}</p>
                </div>
              ))}
              {day.posts.length === 0 && <div className="h-full min-h-[96px] rounded-[8px] border border-dashed border-[var(--lx-line)]" />}
            </div>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

/* ─── 8. Approvals queue ───────────────────────────────────────────────── */
export function ApprovalView() {
  const items = [
    { t: "Meta budget: Prospecting UGC $150 → $190/day", who: "Angie", why: "CPA down 18% in 7 days", tag: <Chip tone="amber">Needs OK</Chip> },
    { t: "Klaviyo: post-purchase email 1 of 3", who: "Clara", why: "On brand · 94 / 100", tag: <Chip tone="amber">Needs OK</Chip> },
    { t: "Article: Meta ads after Cyber Monday", who: "Sophie", why: "Published to WordPress", tag: <Chip tone="green">Approved</Chip> },
  ];
  return (
    <AppWindow title="Approvals" right="2 waiting">
      <ul className="flex flex-col gap-1.5">
        {items.map((i) => (
          <li key={i.t} className="flex items-center gap-2 rounded-[8px] border border-[var(--lx-line)] px-2.5 py-2">
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium">{i.t}</span>
              <span className="block text-[10.5px] text-[var(--lx-mute)]">{i.who} · {i.why}</span>
            </span>
            {i.tag}
          </li>
        ))}
      </ul>
      <div className="mt-2.5 flex items-center gap-1.5">
        <span className="rounded-[6px] bg-[var(--lx-blue)] px-2.5 py-1 text-[11px] font-medium text-white">Approve all</span>
        <span className="rounded-[6px] border border-[var(--lx-line)] px-2.5 py-1 text-[11px] font-medium">Edit</span>
        <span className="ml-auto text-[10.5px] text-[var(--lx-mute)]">Also in Slack and email</span>
      </div>
    </AppWindow>
  );
}

/* ─── How-it-works views ───────────────────────────────────────────────── */

export function FunnelView() {
  const rows = [["Sessions", "48.2K", 100], ["Product views", "19.6K", 41], ["Add to cart", "3,140", 7], ["Purchases", "1,284", 2.7]] as const;
  return (
    <AppWindow title="Lora" right="Funnel mapped · 4 tools">
      <p className={cap}>Your funnel · last 30 days</p>
      <ul className="mt-2 flex flex-col gap-2">
        {rows.map(([k, v, w]) => (
          <li key={k} className="grid grid-cols-[88px_1fr_44px] items-center gap-2">
            <span>{k}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-[#e8edf4]"><span className={cn("block h-full rounded-full", k === "Purchases" ? "bg-[#e0663f]" : "bg-[var(--lx-blue)]")} style={{ width: `${Math.max(w, 3)}%` }} /></span>
            <span className="lx-mono text-right font-medium">{v}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2.5 text-[11px] font-medium text-[#c4321c]">59% drop between cart and purchase → cart-recovery flow added to the plan</p>
    </AppWindow>
  );
}

export function QueueView() {
  const items = [
    { kind: "Blog", t: "The beginner's guide to cold brew", to: "Webflow", score: "94 / 100", status: <Chip tone="green">● Published</Chip> },
    { kind: "Meta ad", t: "\"Better mornings\" · 15s video", to: "Meta Ads", score: "2 frames fixed", status: <Chip tone="amber">Needs OK</Chip> },
  ];
  return (
    <AppWindow title="Content queue · 4 drafts">
      <ul className="flex flex-col gap-2.5">
        {items.map((i, n) => (
          <li key={i.t}>
            <div className="flex items-center gap-1.5">
              <span className="lx-mono w-4 text-[10px] text-[var(--lx-mute)]">0{n + 1}</span>
              <span className="min-w-0 flex-1 truncate rounded-[6px] border border-[var(--lx-line)] px-2 py-1"><span className="text-[var(--lx-mute)]">{i.kind}</span> {i.t}</span>
              <span className="rounded-[6px] border border-[var(--lx-line)] px-2 py-1">{i.to}</span>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-1.5 pl-5">
              <span className="rounded-[6px] border border-[var(--lx-line)] px-1.5 py-1"><span className={cn(cap, "block")}>Self-check</span><span className="text-[var(--lx-green)]">✓ {i.score}</span></span>
              <span className="rounded-[6px] border border-[var(--lx-line)] px-1.5 py-1"><span className={cn(cap, "block")}>Brand voice</span><span className="text-[var(--lx-green)]">✓ On brand</span></span>
              <span className="rounded-[6px] border border-[var(--lx-line)] px-1.5 py-1"><span className={cn(cap, "block")}>Status</span>{i.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

export function GradesView() {
  const rows = [
    { c: "Prospecting, UGC", ch: "Meta Ads", g: "A", gt: "green", v: "3.4x", t: "vs 2.5x", next: "Scale +20%" },
    { c: "Launch email", ch: "Klaviyo", g: "A-", gt: "green", v: "41%", t: "vs 35%", next: "Reuse subject" },
    { c: "Retargeting, Broad", ch: "Meta Ads", g: "D", gt: "red", v: "0.4x", t: "vs 2.5x", next: "Pause, test new hook" },
  ] as const;
  return (
    <AppWindow title="Graded this week" bodyClass="p-0">
      <table className="w-full text-left">
        <thead><tr className={cap}><th className="px-3 py-1.5 font-medium">Campaign</th><th className="font-medium">Grade vs target</th><th className="pr-3 font-medium">Next step</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.c} className="border-t border-[var(--lx-line)]">
              <td className="px-3 py-2"><span className="block font-medium">{r.c}</span><span className="text-[10.5px] text-[var(--lx-mute)]">{r.ch}</span></td>
              <td><span className="flex items-center gap-1.5"><Chip tone={r.gt === "green" ? "green" : "red"}>{r.g}</Chip><span className="lx-mono font-medium">{r.v}</span><span className="text-[10.5px] text-[var(--lx-mute)]">{r.t}</span></span></td>
              <td className="pr-3 text-[11px] text-[var(--lx-slate)]">{r.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppWindow>
  );
}

export function TaskFeedView() {
  const tasks = [
    { t: "Ad spend watchdog", every: "Every 2 hours", tag: "Ads", next: <span className="text-[var(--lx-green)]">Fixed · 2:00 PM ✓</span> },
    { t: "SEO and GEO rank monitor", every: "Daily", tag: "SEO", next: "Next in 9h" },
    { t: "Weekly blog post → Webflow", every: "Weekly", tag: "Content", next: "Next in 3d" },
    { t: "Competitor ad sweep", every: "Weekly", tag: "Research", next: "Next in 2d" },
  ];
  return (
    <AppWindow title="Task feed">
      <div className="mb-2 rounded-[8px] border border-[var(--lx-line)] bg-white p-2 text-[11px] shadow-sm">
        <p className="flex items-center gap-1.5 font-medium"><Clock3 className="size-3" />Ad spend watchdog · 2:00 PM</p>
        <p className="mt-0.5 text-[var(--lx-slate)]">CPA on "Prospecting, UGC" drifted 24% above target. Moved $120/day to the top 2 ad sets inside your limit.</p>
      </div>
      <ul className="divide-y divide-[var(--lx-line)]">
        {tasks.map((t) => (
          <li key={t.t} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 py-1.5">
            <span className="flex min-w-0 items-center gap-1.5"><span className="size-1.5 shrink-0 rounded-full bg-[var(--lx-green)]" /><span className="truncate font-medium">{t.t}</span></span>
            <Chip>{t.tag}</Chip>
            <span className="text-right text-[10.5px] text-[var(--lx-mute)]">{t.next}</span>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

