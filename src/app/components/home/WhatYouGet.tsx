import type { ReactNode } from "react";
import { CheckCircle2, Clock3, FileText, Mail, Megaphone, PenLine, Sparkles, Video } from "lucide-react";
import { Container, ContourGradient, Eyebrow, Reveal, SectionPanel, TwoTone, type GradientTone } from "./primitives";
import { cn } from "../ui/utils";
import imgLora from "../../../imports/LandingPage/32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";
import logoInstagram from "../../../imports/LandingPage/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import logoX from "../../../imports/LandingPage/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";
import logoTikTok from "../../../imports/LandingPage/6542a1e22417f251cbc55d42da5eae61e5cb8217.png";
import logoLinkedIn from "../../../imports/LandingPage/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";

/* ─── Card shell ───────────────────────────────────────────────────────────── */

function BentoCard({
  title,
  rest,
  body,
  mock,
  tone,
  wide = false,
  className,
}: {
  title: string;
  rest?: string;
  body: string;
  mock: ReactNode;
  tone?: GradientTone;
  wide?: boolean;
  className?: string;
}) {
  const text = (
    <div className={cn("relative z-10 flex flex-col gap-3", wide ? "md:max-w-[420px]" : "")}>
      <h3 className={cn("hv-h3", tone ? "text-white" : "text-[#2c2c2c]")}>
        {title}
        {rest && (
          <>
            {" "}
            <span className={tone ? "text-white/75" : "text-[rgba(44,44,44,0.55)]"}>{rest}</span>
          </>
        )}
      </h3>
      <p className={cn("text-[16px] leading-[1.55]", tone ? "text-white/85" : "text-[rgba(44,44,44,0.75)]")}>{body}</p>
    </div>
  );
  const layout = cn(
    "flex h-full flex-col gap-8 overflow-hidden rounded-[28px] p-6 sm:p-8 md:rounded-[32px] md:p-10",
    wide && "md:flex-row md:items-center md:justify-between md:gap-12",
    className,
  );
  const mockWrap = <div className={cn("relative z-10 w-full", wide ? "md:max-w-[520px]" : "mt-auto")}>{mock}</div>;

  if (tone) {
    return (
      <ContourGradient tone={tone} className={layout}>
        {text}
        {mockWrap}
      </ContourGradient>
    );
  }
  return (
    <div className={cn(layout, "bg-[#f9f3ed]")}>
      {text}
      {mockWrap}
    </div>
  );
}

/* ─── Frosted UI mocks (copy from the product's own status UI) ────────────── */

const PLAN_ROWS = [
  { time: "05:11 AM", title: "AI agents deep analyse", meta: "Market trends analysed, competitors monitored", status: "Done" },
  { time: "05:12 AM", title: "Posts created across channels", meta: "Instagram, X, TikTok, YouTube", status: "Done" },
  { time: "05:13 AM", title: "Published posts, blogs, videos, ads", meta: "Approved items only", status: "Published" },
  { time: "Next", title: "Draft Q2 content calendar", meta: "Waiting on your review", status: "Need Review" },
] as const;

function PlanMock() {
  return (
    <div className="hv-frost rounded-[22px] p-3">
      <div className="flex items-center gap-2 px-2 pb-2 pt-1">
        <img src={imgLora} alt="" className="size-7 rounded-full object-cover" loading="lazy" decoding="async" />
        <p className="text-[13px] font-semibold text-[#2c2c2c]">Lora · this morning</p>
      </div>
      <ul className="flex flex-col gap-1.5">
        {PLAN_ROWS.map((row) => {
          const done = row.status !== "Need Review";
          return (
            <li key={row.title} className="flex items-center gap-3 rounded-[14px] bg-white/90 px-3 py-2.5">
              <span className="w-[54px] shrink-0 text-[11px] font-medium tabular-nums text-[rgba(44,44,44,0.45)]">{row.time}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-medium leading-5 text-[#2c2c2c]">{row.title}</p>
                <p className="truncate text-[12px] leading-4 text-[rgba(44,44,44,0.5)]">{row.meta}</p>
              </div>
              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold leading-none",
                  done ? "bg-[#cfe9d3] text-[#094413]" : "bg-[#fff1d6] text-[#8a5a14]",
                )}
              >
                {done ? <CheckCircle2 className="size-3" aria-hidden="true" /> : <Clock3 className="size-3" aria-hidden="true" />}
                {row.status}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CompetitorMock() {
  return (
    <div className="flex flex-col gap-2">
      {[
        { label: "Competitor analysis ready", value: "New growth opportunities detected", tag: "Explore" },
        { label: "Trending content spotted", value: "Brief drafted, waiting on approval", tag: "Need Approval" },
        { label: "Content trending idea generator", value: "Ideas ready for this week", tag: "Open" },
      ].map((item, i) => (
        <div
          key={item.label}
          className={cn("hv-frost flex items-center gap-3 rounded-[16px] px-4 py-3", i === 1 && "sm:ml-6", i === 2 && "sm:ml-12")}
        >
          <Sparkles className="size-4 shrink-0 text-[#5b5ce6]" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-semibold leading-5 text-[#2c2c2c]">{item.label}</p>
            <p className="truncate text-[12px] leading-4 text-[rgba(44,44,44,0.55)]">{item.value}</p>
          </div>
          <span className="shrink-0 rounded-full bg-[#2c2c2c] px-2.5 py-1 text-[11px] font-semibold text-white">{item.tag}</span>
        </div>
      ))}
    </div>
  );
}

function AssetsMock() {
  const assets = [
    { icon: FileText, label: "Blog post" },
    { icon: Mail, label: "Newsletter" },
    { icon: PenLine, label: "LinkedIn post" },
    { icon: Megaphone, label: "Ad copy" },
    { icon: Video, label: "Video script" },
  ];
  return (
    <div className="rounded-[22px] border border-[#ddd6ce] bg-white p-4">
      <div className="flex items-center justify-between rounded-[14px] bg-[#f9f3ed] px-3 py-2.5">
        <p className="text-[13px] font-semibold text-[#2c2c2c]">One brief: spring launch</p>
        <span className="text-[12px] font-medium text-[rgba(44,44,44,0.5)]">in your voice</span>
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-2">
        {assets.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2 rounded-[12px] border border-[#ddd6ce] px-3 py-2.5 last:col-span-2">
            <Icon className="size-4 shrink-0 text-[#14a148]" aria-hidden="true" />
            <span className="text-[13px] font-medium text-[#2c2c2c]">{label}</span>
            <CheckCircle2 className="ml-auto size-3.5 shrink-0 text-[#14a148]" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublishMock() {
  const posts = [
    { logo: logoTikTok, name: "TikTok", status: "New video posted" },
    { logo: logoInstagram, name: "Instagram", status: "Carousel posted" },
    { logo: logoLinkedIn, name: "LinkedIn", status: "Scheduled for 9:00 AM", round: true },
    { logo: logoX, name: "X (Twitter)", status: "Thread scheduled", round: true },
  ];
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {posts.map((p) => (
        <li key={p.name} className="hv-frost flex items-center gap-3 rounded-[16px] px-3 py-3">
          <img src={p.logo} alt="" className={cn("size-9 shrink-0 object-contain", p.round && "rounded-full")} loading="lazy" decoding="async" />
          <div className="min-w-0">
            <p className="text-[14px] font-semibold leading-5 text-[#2c2c2c]">{p.name}</p>
            <p className="truncate text-[12px] leading-4 text-[rgba(44,44,44,0.55)]">{p.status}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ─── Section ──────────────────────────────────────────────────────────────── */

export default function WhatYouGet() {
  return (
    <SectionPanel tone="white" aria-labelledby="what-heading">
      <Container>
        <Reveal className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center">
          <Eyebrow>Solution</Eyebrow>
          <TwoTone id="what-heading" lead="What you get" rest="with Loraloop." />
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          <Reveal className="md:col-span-2">
            <BentoCard
              wide
              tone="green"
              title="Marketing planned"
              rest="end to end."
              body="Lora understands your business end to end and turns revenue goals into a structured monthly plan with clear next steps, like a marketing lead on staff."
              mock={<PlanMock />}
            />
          </Reveal>
          <Reveal>
            <BentoCard
              tone="violet"
              title="Monitor competitors, spot trends"
              rest="and act before they do."
              body="Loraloop tracks competitor ads, content and positioning daily and turns the gaps into briefs your team can approve in one click."
              mock={<CompetitorMock />}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <BentoCard
              title="Turn one brief"
              rest="into 50+ review-ready assets a month."
              body="One brief becomes a blog, a newsletter, a LinkedIn post, an ad and a video script, all in your voice, without adding a writer to payroll."
              mock={<AssetsMock />}
            />
          </Reveal>
          <Reveal className="md:col-span-2">
            <BentoCard
              wide
              tone="forest"
              title="Smart multi-platform publishing"
              rest="based on real-time audience and performance data."
              body="Approved content goes out across LinkedIn, Instagram, X, TikTok, YouTube and WordPress at the times each platform's data says will perform."
              mock={<PublishMock />}
            />
          </Reveal>
        </div>
      </Container>
    </SectionPanel>
  );
}
