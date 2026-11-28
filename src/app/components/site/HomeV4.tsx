import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button, Container, Heading, Kicker, Section, Tile } from "./ui";
import { AdsView, ApprovalView, BriefingView, CompetitorView, EmailView, FunnelView, GradesView, QueueView, SeoView, SocialView, StrategyView, TaskFeedView } from "./views";
import { ControlsSection, CtaBand, FaqSection, StackMarquee, StartForm } from "./sections";
import { HOME_DEFINITION, HOME_FAQ, HOME_H1, HOME_LEAD, HOME_STACK } from "../../data/homeContent";
import { segments } from "../../data/segments";
import { cn } from "../ui/utils";
import imgClaude from "../../../assets/platform-claude.png";
import imgChatGPT from "../../../assets/platform-chatgpt.png";

const [H1_LEAD, H1_REST] = (() => {
  const cut = HOME_H1.indexOf(". ") + 1;
  return [HOME_H1.slice(0, cut), HOME_H1.slice(cut + 1)];
})();

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-16">
      <Container className="relative">
        <div className="pb-16 pt-20 md:pb-24 md:pt-28">
          <Kicker>The AI marketing team for scaling brands and agencies</Kicker>
          <h1 id="hero-heading" className="lx-display mt-6 max-w-[880px]">
            <span>{H1_LEAD}</span> <span className="lx-soft">{H1_REST}</span>
          </h1>
          <p className="lx-lead mt-6 max-w-[620px]">{HOME_LEAD}</p>
          <div className="mt-9">
            <StartForm location="home_hero" />
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] text-[var(--lx-mute)]">
            Also works inside
            <span className="inline-flex items-center gap-1.5 text-[var(--lx-slate)]"><img src={imgClaude} alt="" className="size-4 rounded-[4px]" />Claude</span>
            <span className="inline-flex items-center gap-1.5 text-[var(--lx-slate)]"><img src={imgChatGPT} alt="" className="size-4 rounded-[4px]" />ChatGPT</span>
          </p>
        </div>

        {/* Product composite: the approval queue over the morning briefing */}
        <div className="relative pb-20 md:pb-28" aria-hidden="true">
          <div className="rounded-[24px] border border-[var(--lx-line)] bg-[var(--lx-mist)] p-4 shadow-[0_40px_80px_-40px_rgba(17,17,16,0.25)] md:p-10">
            <div className="grid gap-4 md:grid-cols-[1.15fr_1fr] md:items-start">
              <BriefingView />
              <div className="md:mt-12">
                <ApprovalView />
              </div>
            </div>
          </div>
          <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Product views show example data for a sample brand.</p>
        </div>
      </Container>
    </section>
  );
}

/* ─── Product tiles (Stripe solutions grid) ───────────────────────────────── */

interface TileDef {
  title: string;
  rest: string;
  to: string;
  view: ReactNode;
  span: string;
  wash: string;
}

const TILES: TileDef[] = [
  { title: "A plan built from your data.", rest: "Store, ads, email and social in one plan tied to your goals.", to: "/ai-marketing-lead", view: <StrategyView />, span: "lg:col-span-3", wash: "from-[#e6edff] to-[#f3f6ff]" },
  { title: "A briefing every morning.", rest: "What worked yesterday and what to approve today.", to: "/ai-marketing-lead", view: <BriefingView />, span: "lg:col-span-3", wash: "from-[#e4f5fc] to-[#f2fafe]" },
  { title: "Ads that improve daily.", rest: "Budget moves to winners across Meta, Google and TikTok, after you approve.", to: "/ai-ads-manager", view: <AdsView />, span: "lg:col-span-2", wash: "from-[#ece9ff] to-[#f6f4ff]" },
  { title: "Traffic from search and AI.", rest: "Researched, written and published to your CMS.", to: "/ai-seo-geo-strategist", view: <SeoView />, span: "lg:col-span-2", wash: "from-[#e6edff] to-[#f3f6ff]" },
  { title: "Email that drives revenue.", rest: "Klaviyo and Mailchimp flows from welcome to win-back.", to: "/ai-email-marketer", view: <EmailView />, span: "lg:col-span-2", wash: "from-[#e4f5fc] to-[#f2fafe]" },
  { title: "Competitors, tracked.", rest: "Their launches, ad spend and the angles they scale, weekly.", to: "/for-media-buyers", view: <CompetitorView />, span: "lg:col-span-3", wash: "from-[#ece9ff] to-[#f6f4ff]" },
  { title: "Social, planned and drafted.", rest: "A calendar planned and captions written, scheduled once you approve.", to: "/for-marketing-teams", view: <SocialView />, span: "lg:col-span-3", wash: "from-[#eef2f7] to-[#f7f9fc]" },
];

/* ─── How it works: four steps, each with the view it produces ─────────── */

const HOW = [
  { n: "01", title: "Understand and plan", rest: "with a strategy grounded in your numbers, not a generic playbook.", view: <FunnelView /> },
  { n: "02", title: "Create and ship", rest: "articles, ads, emails and posts, each checked for brand voice before you see it.", view: <QueueView /> },
  { n: "03", title: "Review and improve", rest: "with every campaign graded against the targets you set.", view: <GradesView /> },
  { n: "04", title: "Run on schedule", rest: "with recurring checks that propose fixes for your approval. You can let small changes run inside limits you set.", view: <TaskFeedView /> },
];

function HowItWorks() {
  return (
    <Section aria-labelledby="how-heading">
      <Kicker>How it works</Kicker>
      <Heading id="how-heading" className="mt-4 max-w-[820px]" lead="From goal to published campaign," rest="Loraloop does the real marketing work." />
      <ol className="mt-12 grid gap-4 md:grid-cols-2">
        {HOW.map((s) => (
          <li key={s.n} className="flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-[var(--lx-mist)]">
            <div className="p-6 md:p-7">
              <p className="lx-mono text-[12px] text-[var(--lx-mute)]">{s.n}</p>
              <h3 className="mt-3 text-[20px] leading-[1.35] tracking-[-0.015em]">
                <span className="font-medium">{s.title}</span> <span className="text-[var(--lx-slate)]">{s.rest}</span>
              </h3>
            </div>
            <div className="mt-auto px-6 pt-1 md:px-7 [&>*]:rounded-b-none [&>*]:border-b-0" aria-hidden="true">{s.view}</div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Product views show example data for a sample brand.</p>
    </Section>
  );
}

function ProductTiles() {
  return (
    <Section aria-labelledby="product-heading">
      <Kicker>What Loraloop does</Kicker>
      <Heading id="product-heading" className="mt-4 max-w-[820px]" lead="One AI team for every channel." rest="Each specialist works from the same brand knowledge, so the output reads like one team." />
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {TILES.map((t) => (
          <li key={t.title} className={cn("min-w-0", t.span)}>
            <Link to={t.to} className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-[var(--lx-mist)] transition-colors hover:bg-[#e9e8e2]">
              <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                <p className="text-[19px] leading-[1.35] tracking-[-0.02em]">
                  <span className="font-medium">{t.title}</span> <span className="text-[var(--lx-slate)]">{t.rest}</span>
                </p>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-[var(--lx-mute)] transition-colors group-hover:text-[var(--lx-blue)]" aria-hidden="true" />
              </div>
              <div className="mt-auto px-6 pb-0 pt-1 md:px-7 [&>*]:rounded-b-none [&>*]:border-b-0" aria-hidden="true">
                {t.view}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ─── Navy band: platform facts and how it works ──────────────────────────── */

const FACTS = [
  { n: "4,000+", label: "integrations through one connection" },
  { n: "4", label: "AI specialists sharing one brand memory" },
  { n: "8:00", label: "AM briefing, every day" },
  { n: "3-day", label: "free trial, no credit card" },
];

function PlatformBand() {
  return (
    <Section aria-labelledby="platform-heading">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Kicker>The platform</Kicker>
          <Heading id="platform-heading" className="mt-4" lead="Never logs off." rest="Never ships without you." />
          <p className="lx-lead mt-5 max-w-[440px]">The facts behind the team: what it connects to, who does the work and when you hear from it.</p>
        </div>
        <ul className="border-t border-[var(--lx-line)]">
          {FACTS.map((f) => (
            <li key={f.label} className="grid grid-cols-[120px_1fr] items-baseline gap-6 border-b border-[var(--lx-line)] py-6">
              <span className="text-[34px] tracking-[-0.03em]">{f.n}</span>
              <span className="text-[15.5px] text-[var(--lx-slate)]">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ─── Free Meta ads audit (lead magnet) ──────────────────────────────────── */

const AUDIT_POINTS = ["Spend with zero conversions", "Broken or missing tracking", "Low-value placements and hours", "Budgets split too thin", "Creative fatigue"];

function AuditBand() {
  return (
    <Section aria-labelledby="audit-band-heading">
      <div className="grid gap-10 rounded-[24px] bg-[var(--lx-mist)] p-6 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <Kicker>Free Meta ads audit</Kicker>
          <Heading id="audit-band-heading" className="mt-4" lead="See what your Meta budget is wasting." rest="Before you change anything." />
          <p className="lx-lead mt-5 max-w-[520px]">Connect your ad account and get a score, the spend at stake each month and a ranked list of fixes. Free with the 3-day trial.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/free-meta-ads-audit" arrow data-ml-goal="meta_audit_cta" data-ml-goal-location="home_band">Get a free audit</Button>
          </div>
        </div>
        <ul className="border-t border-[var(--lx-line)]">
          {AUDIT_POINTS.map((p, i) => (
            <li key={p} className="grid grid-cols-[40px_1fr] items-baseline gap-4 border-b border-[var(--lx-line)] py-4">
              <span className="lx-mono text-[12px] text-[var(--lx-blue)]">0{i + 1}</span>
              <span className="text-[16px]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ─── Who it's for ───────────────────────────────────────────────────────── */

function Segments() {
  return (
    <Section aria-labelledby="segments-heading">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker>Who it's for</Kicker>
          <Heading id="segments-heading" className="mt-4 max-w-[720px]" lead="Built for how your team works." rest="From one marketer to an agency running dozens of brands." />
        </div>
        <Button to="/pricing" variant="secondary" arrow>See plans</Button>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s) => (
          <li key={s.slug}>
            <Link to={s.slug} className="group flex h-full flex-col justify-between gap-8 rounded-[20px] bg-[var(--lx-mist)] p-6 transition-colors hover:bg-[#e9e8e2]">
              <div>
                <p className="text-[17px] font-medium tracking-[-0.012em]">{s.menuLabel}</p>
                <p className="mt-1 text-[14.5px] text-[var(--lx-slate)]">{s.menuNote}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--lx-blue)]">
                Loraloop for {s.menuLabel.toLowerCase().replace(" and dtc", "")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ─── Answer block (what AI search quotes) ───────────────────────────────── */

function Definition() {
  const { question, answer, roles, data, contrast } = HOME_DEFINITION;
  return (
    <Section tone="mist" aria-labelledby="definition-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Kicker>The short answer</Kicker>
          <h2 id="definition-heading" className="lx-h2 mt-4">{question}</h2>
        </div>
        <div className="flex min-w-0 flex-col gap-5">
          <p className="text-[19px] leading-[1.6]">{answer}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => {
              const [name, ...rest] = role.split(": ");
              const text = rest.join(": ");
              return (
                <li key={role}>
                  <Tile className="h-full p-4">
                    <p className="text-[15px] font-medium">{name}</p>
                    <p className="mt-1 text-[14px] leading-[1.55] text-[var(--lx-slate)]">{text.charAt(0).toUpperCase() + text.slice(1)}</p>
                  </Tile>
                </li>
              );
            })}
          </ul>
          <p className="rounded-[16px] bg-white px-5 py-4 text-[15px] leading-[1.6]">{data}</p>
          <p className="text-[15px] leading-[1.6] text-[var(--lx-slate)]">{contrast}</p>
        </div>
      </div>
    </Section>
  );
}

/* ─── Plans strip ────────────────────────────────────────────────────────── */

const PLANS = [
  { name: "Starter", price: "$39", note: "200 credits a month · 3 brands" },
  { name: "Pro", price: "$99", note: "700 credits a month · add seats" },
  { name: "Scale", price: "$199", note: "2,000 credits a month · more brands" },
];

function Plans() {
  return (
    <Section aria-labelledby="plans-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Kicker>Pricing</Kicker>
          <Heading id="plans-heading" className="mt-4" lead="Less than one agency retainer." rest="Start free for 3 days." />
          <Button to="/pricing" className="mt-8" arrow data-ml-goal="pricing_view">Compare plans</Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((p) => (
            <li key={p.name}>
              <Tile className="flex h-full flex-col p-6">
                <p className="text-[15px] font-medium">{p.name}</p>
                <p className="mt-6 text-[36px] font-light tracking-[-0.03em]">{p.price}<span className="text-[15px] text-[var(--lx-slate)]"> /mo</span></p>
                <p className="mt-2 text-[14px] text-[var(--lx-slate)]">{p.note}</p>
              </Tile>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default function HomeV4() {
  return (
    <div className="lx">
      <Hero />
      <div className="border-t border-[var(--lx-line)] py-12">
        <StackMarquee items={HOME_STACK} />
      </div>
      <ProductTiles />
      <HowItWorks />
      <AuditBand />
      <PlatformBand />
      <Segments />
      <ControlsSection />
      <Definition />
      <Plans />
      <FaqSection items={HOME_FAQ} />
      <CtaBand lead="More marketing shipped every day." rest="Nothing goes live until you approve it." location="home_final_cta" />
    </div>
  );
}
