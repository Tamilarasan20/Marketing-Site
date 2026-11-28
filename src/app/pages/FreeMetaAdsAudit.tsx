import { useEffect } from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";
import { Button, Container, Heading, Kicker, Section, Tile } from "../components/site/ui";
import { ControlsSection, FaqSection } from "../components/site/sections";
import {
  META_AUDIT_ANSWER,
  META_AUDIT_CHECKS,
  META_AUDIT_FAQ,
  META_AUDIT_H1,
  META_AUDIT_LEAD,
  META_AUDIT_OUTPUT,
  META_AUDIT_STEPS,
  META_AUDIT_TITLE,
  META_AUDIT_URL,
  type AuditCheck,
} from "../data/metaAudit";

const GROUPS: AuditCheck["group"][] = ["Waste", "Tracking", "Budget", "Creative and delivery"];

/** Illustrative report card. Labelled as an example so nobody reads it as a real result. */
const SAMPLE_FINDINGS = [
  { what: "Retargeting ad set: 0 purchases in 14 days", fix: "Pause and move budget", usd: "$1,240" },
  { what: "Audience Network placement, 4x account CPA", fix: "Exclude placement", usd: "$860" },
  { what: "Top prospecting ad, frequency 5.8, CTR down 41%", fix: "Rotate in 3 new variants", usd: "$610" },
  { what: "9 ad sets under $10 a day", fix: "Consolidate into 2", usd: "$390" },
];

function AuditCta({ location, label = "Get my free audit" }: { location: string; label?: string }) {
  return (
    <Button href={META_AUDIT_URL} arrow data-ml-goal="meta_audit_start" data-ml-goal-location={location}>
      {label}
    </Button>
  );
}

function SampleReport() {
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-[0_40px_80px_-40px_rgba(17,17,16,0.3)] md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="lx-mono text-[11px] uppercase tracking-[0.06em] text-[var(--lx-mute)]">Meta ads audit · example</p>
          <p className="mt-1 text-[17px] font-medium">Sample DTC account, last 30 days</p>
        </div>
        <div className="text-right">
          <p className="lx-mono text-[30px] font-medium leading-none">62</p>
          <p className="text-[12px] text-[var(--lx-slate)]">score / 100</p>
        </div>
      </div>
      <div className="mt-5 rounded-[14px] bg-[var(--lx-mist)] px-4 py-3">
        <p className="text-[12.5px] text-[var(--lx-slate)]">Recoverable spend per month</p>
        <p className="lx-mono mt-0.5 text-[22px] font-medium text-[var(--lx-green)]">$2,300 – $3,100</p>
      </div>
      <ol className="mt-4 divide-y divide-[var(--lx-line)]">
        {SAMPLE_FINDINGS.map((f, i) => (
          <li key={f.what} className="grid grid-cols-[22px_1fr_auto] items-baseline gap-3 py-3">
            <span className="lx-mono text-[12px] text-[var(--lx-mute)]">{i + 1}</span>
            <span>
              <span className="block text-[14px]">{f.what}</span>
              <span className="block text-[12.5px] text-[var(--lx-slate)]">Fix: {f.fix}</span>
            </span>
            <span className="lx-mono text-[13.5px] font-medium">{f.usd}/mo</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function FreeMetaAdsAudit() {
  useEffect(() => {
    document.title = `${META_AUDIT_TITLE} | Loraloop`;
  }, []);

  return (
    <div className="lx">
      {/* Hero */}
      <section aria-labelledby="audit-hero" className="relative overflow-hidden pt-16">
        <Container>
          <div className="grid gap-12 pb-20 pt-20 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Kicker>Free tool for Meta advertisers</Kicker>
              <h1 id="audit-hero" className="lx-display mt-6">{META_AUDIT_H1}</h1>
              <p className="lx-lead mt-6 max-w-[580px]">{META_AUDIT_LEAD}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <AuditCta location="audit_hero" />
                <Button href="#checks" variant="secondary">See the 11 checks</Button>
              </div>
              <p className="mt-4 text-[13.5px] text-[var(--lx-slate)]">3-day free trial · no credit card · nothing changes without your approval</p>
            </div>
            <div aria-hidden="true">
              <SampleReport />
              <p className="mt-3 text-[12.5px] text-[var(--lx-mute)]">Example report for a sample account, to show the format.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Answer block for AI search */}
      <Section tone="mist" aria-labelledby="audit-answer">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Kicker>The short answer</Kicker>
            <h2 id="audit-answer" className="lx-h2 mt-4">What is a Meta ads audit?</h2>
          </div>
          <blockquote className="rounded-[20px] bg-[var(--lx-mist)] p-6 text-[19px] leading-[1.65] md:p-8">{META_AUDIT_ANSWER}</blockquote>
        </div>
      </Section>

      {/* The checks */}
      <Section id="checks" aria-labelledby="audit-checks">
        <Kicker>What it checks</Kicker>
        <Heading id="audit-checks" className="mt-4 max-w-[820px]" lead="11 checks on your real account data." rest="Grouped by where the money goes." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {GROUPS.map((g) => (
            <Tile key={g} className="p-6">
              <h3 className="lx-kicker !text-[11px]">{g}</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {META_AUDIT_CHECKS.filter((c) => c.group === g).map((c) => (
                  <li key={c.title} className="grid grid-cols-[22px_1fr] gap-2">
                    <Check className="mt-0.5 size-4 text-[var(--lx-green)]" aria-hidden="true" />
                    <span>
                      <span className="block text-[16px] font-medium">{c.title}</span>
                      <span className="mt-0.5 block text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{c.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </div>
      </Section>

      {/* What you get */}
      <Section tone="mist" aria-labelledby="audit-output">
        <Kicker>What you get</Kicker>
        <Heading id="audit-output" className="mt-4 max-w-[760px]" lead="A report you can act on today," rest="ranked by the money at stake." />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {META_AUDIT_OUTPUT.map((o) => (
            <li key={o.title}>
              <Tile className="h-full p-6">
                <p className="text-[17px] font-medium">{o.title}</p>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--lx-slate)]">{o.body}</p>
              </Tile>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section aria-labelledby="audit-steps">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Kicker>How it works</Kicker>
            <Heading id="audit-steps" className="mt-4" lead="Three steps," rest="then the audit runs on its own." />
            <div className="mt-8">
              <AuditCta location="audit_steps" label="Start my free audit" />
            </div>
          </div>
          <ol className="border-t border-[var(--lx-line)]">
            {META_AUDIT_STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[52px_1fr] gap-4 border-b border-[var(--lx-line)] py-5">
                <span className="lx-mono text-[13px] text-[var(--lx-blue)]">0{i + 1}</span>
                <span>
                  <span className="block text-[17px] font-medium">{s.title}</span>
                  <span className="mt-1 block text-[15px] leading-[1.6] text-[var(--lx-slate)]">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <ControlsSection id="audit-guardrails" />

      <FaqSection items={META_AUDIT_FAQ} id="audit-faq" />

      {/* Related reading */}
      <Section tone="mist" aria-labelledby="audit-more">
        <Kicker>Go deeper</Kicker>
        <h2 id="audit-more" className="lx-h2 mt-4">Guides for the problems the audit finds</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/blog/creative-fatigue-meta-ads-detect-and-fix", label: "Creative fatigue on Meta ads", note: "Spot it early and fix it" },
            { to: "/blog/meta-ads-cpm-rising-how-to-lower-cost-per-result", label: "Meta CPMs keep rising", note: "9 levers to lower cost per result" },
            { to: "/blog/meta-ads-daily-monitoring-checklist", label: "Daily Meta ads checklist", note: "15 minutes a day" },
            { to: "/for-media-buyers", label: "Loraloop for media buyers", note: "Daily monitoring, on your approval" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="block h-full rounded-[16px] bg-[var(--lx-mist)] p-4 text-[15px] font-medium transition-colors hover:bg-[#e9e8e2]">
                {l.label}
                <span className="mt-1 block text-[13px] font-normal text-[var(--lx-slate)]">{l.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section aria-labelledby="audit-final" className="pb-28 pt-24 md:pb-36 md:pt-32">
        <div className="mx-auto flex max-w-[860px] flex-col items-center px-5 text-center">
          <Heading id="audit-final" display lead="How much of your Meta budget is working?" rest="Find out free." />
          <div className="mt-9">
            <AuditCta location="audit_final_cta" />
          </div>
          <p className="mt-4 text-[13.5px] text-[var(--lx-slate)]">3-day free trial · no credit card</p>
        </div>
      </section>
    </div>
  );
}
