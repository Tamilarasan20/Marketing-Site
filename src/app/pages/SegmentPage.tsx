import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { Container, Heading, Kicker, Section, Tile } from "../components/site/ui";
import { AdsView, ApprovalView, BriefingView, CompetitorView, EmailView, FunnelView, GradesView, QueueView, SeoView, SocialView, StrategyView, TaskFeedView } from "../components/site/views";
import { ControlsSection, CtaBand, FaqSection, StackMarquee, StartForm } from "../components/site/sections";
import { SHARED_FAQ, segmentBySlug, segments } from "../data/segments";
import { segmentExtras, type Tone } from "../data/segmentExtras";
import { cn } from "../components/ui/utils";

const TONE: Record<Tone, string> = {
  up: "text-[var(--lx-green)]",
  ok: "text-[var(--lx-green)]",
  down: "text-[#c4321c]",
  warn: "text-[var(--lx-amber)]",
  plain: "text-[var(--lx-ink)]",
};
import NotFound from "./NotFound";

/** The two product views shown under each hero, picked for what that buyer cares about. */
const HERO_VIEWS: Record<string, [ReactNode, ReactNode]> = {
  "/for-ecommerce": [<BriefingView key="a" />, <EmailView key="b" />],
  "/for-saas": [<SeoView key="a" />, <FunnelView key="b" />],
  "/for-agencies": [<ApprovalView key="a" />, <GradesView key="b" />],
  "/for-media-buyers": [<AdsView key="a" />, <CompetitorView key="b" />],
  "/for-marketing-teams": [<StrategyView key="a" />, <SocialView key="b" />],
  "/for-local-businesses": [<SocialView key="a" />, <TaskFeedView key="b" />],
};

const BAND_VIEW: Record<string, ReactNode> = {
  "/for-ecommerce": <AdsView />,
  "/for-saas": <QueueView />,
  "/for-agencies": <BriefingView />,
  "/for-media-buyers": <TaskFeedView />,
  "/for-marketing-teams": <ApprovalView />,
  "/for-local-businesses": <ApprovalView />,
};

export default function SegmentPage() {
  const { pathname } = useLocation();
  const s = segmentBySlug(pathname.replace(/\/$/, ""));
  useEffect(() => {
    if (s) document.title = `${s.title} | Loraloop`;
  }, [s]);
  if (!s) return <NotFound />;
  const x = segmentExtras[s.slug];
  const location = s.slug.replace("/for-", "") ;
  const [viewA, viewB] = HERO_VIEWS[s.slug] ?? [<BriefingView key="a" />, <ApprovalView key="b" />];

  return (
    <div className="lx">
      {/* Hero */}
      <section aria-labelledby="seg-hero" className="relative overflow-hidden pt-16">
        <Container className="relative">
          <div className="pb-14 pt-20 md:pb-20 md:pt-28">
            <Kicker>{s.kicker}</Kicker>
            <h1 id="seg-hero" className="lx-display mt-6 max-w-[900px]">
              <span>{s.h1Lead}</span> <span className="lx-soft">{s.h1Rest}</span>
            </h1>
            <p className="lx-lead mt-6 max-w-[640px]">{s.lead}</p>
            <div className="mt-9">
              <StartForm location={`${location}_hero`} />
            </div>
            <p className="mt-1 text-[13.5px] text-[var(--lx-slate)]">{x.trust}</p>
          </div>
          <div className="pb-20 md:pb-24" aria-hidden="true">
            <div className="grid gap-4 rounded-[24px] border border-[var(--lx-line)] bg-[var(--lx-mist)] p-4 shadow-[0_40px_80px_-40px_rgba(17,17,16,0.25)] md:grid-cols-2 md:items-start md:p-10">
              <div className="min-w-0">{viewA}</div>
              <div className="min-w-0 md:mt-12">{viewB}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Answer block for AI search */}
      <Section tone="mist" aria-labelledby="seg-answer">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Kicker>The short answer</Kicker>
            <h2 id="seg-answer" className="lx-h2 mt-4">What is {s.kicker.replace("Loraloop for ", "an AI marketing team for ")}?</h2>
          </div>
          <blockquote className="rounded-[20px] bg-[var(--lx-mist)] p-6 text-[19px] leading-[1.65] md:p-8">{s.answer}</blockquote>
        </div>
      </Section>

      {/* Why it is hard today */}
      <Section aria-labelledby="seg-why">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Kicker>Why teams choose Loraloop</Kicker>
            <Heading id="seg-why" className="mt-4" lead={x.why.lead} rest={x.why.rest} />
            <p className="lx-lead mt-6 max-w-[560px]">{x.why.body}</p>
          </div>
          <ul className="flex flex-col justify-center gap-3">
            {x.why.points.map((pt, i) => (
              <li key={pt} className="flex items-center gap-4 rounded-[16px] bg-[var(--lx-mist)] p-4">
                <span className="lx-mono flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[var(--lx-blue-wash)] text-[12px] text-[var(--lx-blue)]">0{i + 1}</span>
                <span className="text-[15.5px]">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Jobs */}
      <Section aria-labelledby="seg-jobs">
        <Kicker>What it runs for you</Kicker>
        <Heading id="seg-jobs" className="mt-4 max-w-[820px]" lead="Six jobs, run every week." rest="Each card shows what the job produces in a typical week." />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.jobs.map((j, i) => {
            const ex = x.examples[i];
            return (
              <li key={j.title}>
                <Tile className="flex h-full flex-col overflow-hidden">
                  <div className="flex flex-col gap-3 p-6">
                    <p className="lx-kicker !text-[11px]">{j.tag}</p>
                    <h3 className="text-[18px] font-medium leading-[1.35] tracking-[-0.012em]">{j.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-[var(--lx-slate)]">{j.body}</p>
                  </div>
                  {ex && (
                    <div className="mx-3 mb-3 mt-auto rounded-[14px] bg-white px-5 py-4 shadow-[0_10px_30px_-20px_rgba(17,17,16,0.25)]">
                      <p className="lx-mono text-[11px] uppercase tracking-[0.06em] text-[var(--lx-mute)]">{ex.head}</p>
                      <dl className="mt-2 divide-y divide-[var(--lx-line)]">
                        {ex.rows.map((r) => (
                          <div key={r.k} className="flex items-baseline justify-between gap-4 py-1.5 text-[13.5px]">
                            <dt className="text-[var(--lx-slate)]">{r.k}</dt>
                            <dd className={cn("lx-mono font-medium", TONE[r.tone ?? "plain"])}>{r.v}</dd>
                          </div>
                        ))}
                      </dl>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {j.tools.map((t) => (
                          <li key={t} className="rounded-full bg-[var(--lx-mist)] px-2.5 py-0.5 text-[12px] text-[var(--lx-slate)]">{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Tile>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Example figures for a sample brand, to show what each job produces.</p>
      </Section>

      {/* A week with Loraloop */}
      <Section aria-labelledby="seg-week">
        <div className="grid gap-10 rounded-[24px] bg-[var(--lx-mist)] p-6 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Kicker>A week with Loraloop</Kicker>
            <Heading id="seg-week" className="mt-4" lead="What your week looks like" rest="once the team is running." />
            <ol className="mt-8 border-t border-[var(--lx-line)]">
              {s.week.map((w) => (
                <li key={w.day} className="grid grid-cols-[52px_1fr] gap-4 border-b border-[var(--lx-line)] py-3.5">
                  <span className="lx-mono text-[13px] text-[var(--lx-blue)]">{w.day}</span>
                  <span className="text-[15px]">{w.task}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0" aria-hidden="true">{BAND_VIEW[s.slug]}</div>
        </div>
      </Section>

      {/* Works like a teammate */}
      <Section aria-labelledby="seg-team">
        <Kicker>How it works with you</Kicker>
        <Heading id="seg-team" className="mt-4 max-w-[760px]" lead={x.teammate.lead} rest={x.teammate.rest} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {x.teammate.points.map((pt) => (
            <li key={pt.t}>
              <Tile className="h-full p-6">
                <p className="text-[17px] font-medium">{pt.t}</p>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--lx-slate)]">{pt.b}</p>
              </Tile>
            </li>
          ))}
        </ul>
      </Section>

      {/* Integrations: what each tool is used for in this industry */}
      <Section tone="mist" aria-labelledby="seg-int">
        <Kicker>Integrations</Kicker>
        <Heading id="seg-int" className="mt-4 max-w-[760px]" lead="Connect once." rest="Here is what Loraloop does with each tool." />
        <ul className="mt-12 grid border-t border-[var(--lx-line)] sm:grid-cols-2 lg:grid-cols-4">
          {x.integrations.map((it) => (
            <li key={it.tool} className="border-b border-[var(--lx-line)] py-5 pr-6">
              <p className="text-[15.5px] font-medium">{it.tool}</p>
              <p className="mt-1 text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{it.job}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[14.5px] text-[var(--lx-slate)]">Plus 4,000+ more integrations through one connection.</p>
      </Section>

      <div className="py-12">
        <StackMarquee items={s.stack} />
      </div>

      <ControlsSection id={`${location}-guardrails`} />

      <FaqSection items={[...s.faq, ...SHARED_FAQ]} id={`${location}-faq`} />

      {/* Other teams, for internal linking */}
      <Section tone="mist" aria-labelledby="seg-more">
        <Kicker>Also built for</Kicker>
        <h2 id="seg-more" className="lx-h2 mt-4">Other teams using Loraloop</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {segments.filter((o) => o.slug !== s.slug).map((o) => (
            <li key={o.slug}>
              <Link to={o.slug} className="block rounded-[16px] bg-[var(--lx-mist)] p-4 text-[15px] font-medium transition-colors hover:bg-[#e9e8e2]">
                {o.menuLabel}
                <span className="mt-1 block text-[13px] font-normal text-[var(--lx-slate)]">{o.menuNote}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand lead={x.ctaQuestion} rest="Start free for 3 days." location={`${location}_final_cta`} />
    </div>
  );
}
