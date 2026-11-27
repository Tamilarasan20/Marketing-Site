import type { ReactNode } from "react";
import { ArrowRight, Check, Clock3, Mail, Sparkles } from "lucide-react";
import { Container, Label, Reveal, SectionPanel, TwoTone } from "./primitives";
import { cn } from "../ui/utils";

/*
 * "What you get": seven cards, each with a small product view built from the app's own
 * vocabulary (daily briefing, approval queue, Angie's budget proposals, GEO citations,
 * Klaviyo flows, competitor ads from the Meta Ad Library, the publishing calendar).
 * Views use example data for a fictional brand; the caption under the grid says so.
 */

/** Window chrome shared by every product view. */
function AppWindow({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("hv-ui overflow-hidden rounded-[14px] border border-[#e3e1dc] bg-white shadow-[0_18px_40px_-24px_rgba(44,44,44,0.35)]", className)}>
      <div className="flex items-center gap-2 border-b border-[#ecebe7] px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#e3e1dc]" />
          <span className="size-2 rounded-full bg-[#e3e1dc]" />
          <span className="size-2 rounded-full bg-[#e3e1dc]" />
        </span>
        <span className="ml-1 truncate text-[11.5px] font-medium text-[rgba(44,44,44,0.55)]">{title}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function Chip({ tone = "grey", children }: { tone?: "grey" | "green" | "amber" | "violet"; children: ReactNode }) {
  const tones = {
    grey: "bg-[#efede8] text-[rgba(44,44,44,0.7)]",
    green: "bg-[#cfe9d3] text-[#094413]",
    amber: "bg-[#fff1d6] text-[#8a5a14]",
    violet: "bg-[#e6ebff] text-[#3a3fb8]",
  } as const;
  return <span className={cn("inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold", tones[tone])}>{children}</span>;
}

/* ─── The seven product views ─────────────────────────────────────────────── */

function StrategyView() {
  return (
    <AppWindow title="Lora · Q1 plan">
      <div className="flex flex-wrap gap-1.5">
        {["Shopify", "Meta Ads", "Google Analytics", "Klaviyo"].map((s) => (
          <Chip key={s} tone="green"><Check className="size-3" aria-hidden="true" />{s}</Chip>
        ))}
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[rgba(44,44,44,0.45)]">Goal</p>
      <p className="mt-1 rounded-[8px] bg-[#f7f7f5] px-2.5 py-2 font-medium">Grow repeat revenue 20% by March</p>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[rgba(44,44,44,0.45)]">Priorities</p>
      <ol className="mt-1 flex flex-col gap-1.5">
        {["Win back BFCM first-time buyers (email)", "Refresh 6 fatigued Meta creatives", "Publish 4 buying-guide articles"].map((p, i) => (
          <li key={p} className="flex items-center gap-2 rounded-[8px] border border-[#ecebe7] px-2.5 py-1.5">
            <span className="text-[rgba(44,44,44,0.45)]">{i + 1}</span>
            <span className="min-w-0 truncate">{p}</span>
          </li>
        ))}
      </ol>
    </AppWindow>
  );
}

function BriefingView() {
  const rows = [
    { day: "Mon, Dec 1", line: "Revenue $18.4k · 3 drafts need your OK", unread: true },
    { day: "Sun, Nov 30", line: "Meta CPA down 12% after creative swap", unread: false },
    { day: "Sat, Nov 29", line: "2 articles cited in AI Overviews", unread: false },
    { day: "Fri, Nov 28", line: "Competitor launched a free-shipping offer", unread: false },
  ];
  return (
    <AppWindow title="Inbox · Daily briefing, 8:00 AM">
      <ul className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <li key={r.day} className={cn("flex items-start gap-2 rounded-[8px] px-2.5 py-2", r.unread ? "bg-[#f3faf4]" : "border border-[#ecebe7]")}>
            <Mail className={cn("mt-0.5 size-3.5 shrink-0", r.unread ? "text-[#14a148]" : "text-[rgba(44,44,44,0.35)]")} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block font-semibold">Lora · Daily brief · {r.day}</span>
              <span className="block truncate text-[rgba(44,44,44,0.6)]">{r.line}</span>
            </span>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

function AdsView() {
  const rows = [
    { name: "Prospecting · UGC", from: "$150", to: "$190", tag: <Chip tone="green">Scaling</Chip> },
    { name: "Retargeting · Reviews", from: "$80", to: "$80", tag: <Chip>Steady</Chip> },
    { name: "Broad · Static v3", from: "$60", to: "$0", tag: <Chip tone="amber">Needs OK</Chip> },
  ];
  return (
    <AppWindow title="Angie · Meta and Google budgets">
      <ul className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-2 rounded-[8px] border border-[#ecebe7] px-2.5 py-1.5">
            <span className="min-w-0 flex-1 truncate font-medium">{r.name}</span>
            <span className="whitespace-nowrap text-[rgba(44,44,44,0.6)]">{r.from} <ArrowRight className="inline size-3" aria-hidden="true" /> {r.to}</span>
            {r.tag}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-[rgba(44,44,44,0.55)]">Reason: frequency 4.6, CTR down 38% in 7 days</p>
    </AppWindow>
  );
}

function SeoView() {
  return (
    <AppWindow title="Sophie · New article">
      <p className="text-[14px] font-bold leading-snug">How to choose a dog food for sensitive stomachs</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-[8px] bg-[#f7f7f5] px-2 py-1.5"><span className="block text-[10.5px] text-[rgba(44,44,44,0.5)]">Search volume</span><span className="font-semibold">2,900 / mo</span></div>
        <div className="rounded-[8px] bg-[#f7f7f5] px-2 py-1.5"><span className="block text-[10.5px] text-[rgba(44,44,44,0.5)]">Difficulty</span><span className="font-semibold">18 · easy</span></div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Chip tone="green">Published to WordPress</Chip>
        <Chip tone="violet"><Sparkles className="size-3" aria-hidden="true" />Cited in AI Overview</Chip>
      </div>
    </AppWindow>
  );
}

function EmailView() {
  const steps = [
    { label: "Trigger: first order placed", tone: "green" as const },
    { label: "Email 1 · How to get the most from it", tone: "grey" as const },
    { label: "Wait 21 days", tone: "wait" as const },
    { label: "Email 2 · Time to reorder", tone: "grey" as const },
  ];
  return (
    <AppWindow title="Clara · Klaviyo flow">
      <ol className="flex flex-col items-stretch gap-1">
        {steps.map((s, i) => (
          <li key={s.label} className="flex flex-col items-center">
            {s.tone === "wait" ? (
              <span className="flex items-center gap-1 py-0.5 text-[11px] text-[rgba(44,44,44,0.55)]"><Clock3 className="size-3" aria-hidden="true" />{s.label}</span>
            ) : (
              <span className={cn("w-full truncate rounded-[8px] px-2.5 py-1.5 text-center font-medium", s.tone === "green" ? "bg-[#cfe9d3] text-[#094413]" : "border border-[#ecebe7]")}>{s.label}</span>
            )}
            {i < steps.length - 1 && s.tone !== "wait" && <span className="h-2 w-px bg-[#e3e1dc]" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </AppWindow>
  );
}

function CompetitorView() {
  const rows = [
    { brand: "Barkly", note: "New launch · free shipping over $40", tag: <Chip tone="amber">New</Chip> },
    { brand: "Kibble & Co", note: "Scaling UGC hook: \"my vet said…\"", tag: <Chip tone="violet">Hook</Chip> },
    { brand: "Pawsome", note: "Stopped 6 ads after 9 days", tag: <Chip>Stopped</Chip> },
  ];
  return (
    <AppWindow title="Competitor ads · this week">
      <ul className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <li key={r.brand} className="flex items-center gap-2 rounded-[8px] border border-[#ecebe7] px-2.5 py-1.5">
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">{r.brand}</span>
              <span className="block truncate text-[rgba(44,44,44,0.6)]">{r.note}</span>
            </span>
            {r.tag}
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

function SocialView() {
  const days = [
    { d: "Mon", posts: [{ t: "Reel · unboxing", c: "bg-[#fde2ef]" }] },
    { d: "Tue", posts: [{ t: "LinkedIn · founder note", c: "bg-[#e0ecff]" }] },
    { d: "Wed", posts: [{ t: "TikTok · 3 tips", c: "bg-[#e9e6ff]" }, { t: "Story · poll", c: "bg-[#fde2ef]" }] },
    { d: "Thu", posts: [] },
    { d: "Fri", posts: [{ t: "Carousel · reviews", c: "bg-[#fde2ef]" }] },
  ];
  return (
    <AppWindow title="Content calendar · week of Dec 1">
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((day) => (
          <div key={day.d} className="flex min-h-[92px] min-w-0 flex-col gap-1 rounded-[8px] border border-[#ecebe7] p-1.5">
            <span className="text-[10.5px] font-semibold text-[rgba(44,44,44,0.5)]">{day.d}</span>
            {day.posts.map((p) => (
              <span key={p.t} className={cn("rounded-[6px] px-1.5 py-1 text-[10.5px] leading-tight", p.c)}>{p.t}</span>
            ))}
          </div>
        ))}
      </div>
    </AppWindow>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */

interface Feature {
  title: string;
  rest: string;
  view: ReactNode;
  span: string;
}

const FEATURES: Feature[] = [
  { title: "A plan built from your data", rest: "Shopify, ads, email and analytics in one plan tied to your goals.", view: <StrategyView />, span: "lg:col-span-3" },
  { title: "A briefing every morning", rest: "What shipped, what needs your OK and what to do next.", view: <BriefingView />, span: "lg:col-span-3" },
  { title: "Ads that improve every day", rest: "Angie moves budget to winners on Meta and Google.", view: <AdsView />, span: "lg:col-span-2" },
  { title: "SEO and GEO content", rest: "Real keyword data, written and published to your CMS.", view: <SeoView />, span: "lg:col-span-2" },
  { title: "Email that drives revenue", rest: "Klaviyo and Mailchimp flows from welcome to win-back.", view: <EmailView />, span: "lg:col-span-2" },
  { title: "Competitors, tracked", rest: "New launches, offers and the hooks they are scaling.", view: <CompetitorView />, span: "lg:col-span-3" },
  { title: "Social that runs itself", rest: "A calendar planned, captions written, posts scheduled.", view: <SocialView />, span: "lg:col-span-3" },
];

export default function FeatureBento() {
  return (
    <SectionPanel tone="white" aria-labelledby="features-heading">
      <Container>
        <Reveal className="flex max-w-[760px] flex-col items-start gap-4">
          <Label>What you get</Label>
          <TwoTone id="features-heading" lead="Your whole marketing team," rest="working every day." />
        </Reveal>

        <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((f) => (
            <li key={f.title} className={cn("flex min-w-0 flex-col gap-5 rounded-[24px] bg-[#efede8] p-5 md:p-6", f.span)}>
              <p className="text-[18px] leading-[1.4] tracking-[-0.01em] md:text-[19px]">
                <span className="font-['Satoshi',sans-serif] font-bold text-[#2c2c2c]">{f.title}</span>{" "}
                <span className="text-[rgba(44,44,44,0.55)]">{f.rest}</span>
              </p>
              <div className="mt-auto" aria-hidden="true">{f.view}</div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] text-[rgba(44,44,44,0.5)]">Product views show example data for a sample brand.</p>
      </Container>
    </SectionPanel>
  );
}
