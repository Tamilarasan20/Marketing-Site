import { useEffect, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Container, Heading, Kicker, Section, Tile } from "../components/site/ui";
import { ControlsSection, CtaBand, FaqSection, StartForm } from "../components/site/sections";
import { AdsView, ApprovalView, BriefingView, EmailView, SeoView } from "../components/site/views";
import { agentList } from "../data/agents";

/** One product view per agent, showing what that agent produces. */
const AGENT_VIEW: Record<string, ReactNode> = {
  lora: <BriefingView />,
  angie: <AdsView />,
  sophie: <SeoView />,
  clara: <EmailView />,
};

/** Old ?agent= links (from the previous home page) map onto today's roster. */
const LEGACY_AGENT: Record<string, string> = { elena: "angie", emma: "clara" };

const OLD_WAY = [
  "AI tools that only draft. You still plan, publish and report by hand.",
  "A separate tool, login and report for every channel.",
  "Freelancers or an agency for each job, each briefed from scratch.",
  "Ads and emails running without a clear read on what works.",
];

const NEW_WAY = [
  "One plan each week, built from your goals and your numbers.",
  "Ads, SEO, email and social produced in your brand voice.",
  "Every post, email and budget change waits for your approval.",
  "A morning briefing and a weekly report on what worked.",
];

const HOW = [
  { title: "Lora plans the week", body: "She reads your goals, store, ad and analytics data, and sets the week's priorities across channels." },
  { title: "The specialists produce the work", body: "Angie builds and tunes ads, Sophie writes for Google and AI search, Clara builds emails and flows." },
  { title: "You approve", body: "Everything lands in one approval queue in the app, your inbox or Slack. Nothing goes live until you say yes." },
  { title: "They learn and report", body: "Results come back in a morning briefing and a weekly report, and your edits shape the next drafts." },
];

const FAQ = [
  {
    q: "What are Loraloop's AI employees?",
    a: "Four AI agents that each own a marketing job: Lora plans and reports, Angie runs Meta and Google ads, Sophie handles SEO and AI search, and Clara runs email. They share one brand knowledge base, so the work reads like one team.",
  },
  {
    q: "What if I don't have a marketing team?",
    a: "That is who Loraloop is built for. Add your website, connect your accounts and approve the first week's plan. The agents produce the work; you make the decisions.",
  },
  {
    q: "Do they replace my team or agency?",
    a: "They take on daily production and reporting. Your team keeps the strategy and the approvals, and you can keep a specialist or agency for the work you want them on.",
  },
  {
    q: "Will they publish or spend money without asking?",
    a: "No. Every post, email, article and budget change waits for your approval by default. You can choose to let small, routine changes run inside limits you set.",
  },
];

export default function Solution() {
  const [params] = useSearchParams();

  useEffect(() => {
    document.title = "AI Marketing Employees for Every Channel | Loraloop";
    const raw = (params.get("agent") ?? "").toLowerCase();
    const key = LEGACY_AGENT[raw] ?? raw;
    if (!key) return;
    // Wait for the layout's scroll-to-top on navigation, then bring the agent's card into view.
    const timer = window.setTimeout(() => {
      document.getElementById(`agent-${key}`)?.scrollIntoView({ behavior: "instant", block: "center" });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [params]);

  return (
    <div className="lx">
      {/* Hero */}
      <section aria-labelledby="solution-hero" className="relative overflow-hidden pt-16">
        <Container className="relative">
          <div className="pb-14 pt-20 md:pb-20 md:pt-28">
            <Kicker>Your AI marketing team</Kicker>
            <h1 id="solution-hero" className="lx-display mt-6 max-w-[900px]">
              <span>AI marketing employees</span> <span className="lx-soft">that work as one team</span>
            </h1>
            <p className="lx-lead mt-6 max-w-[640px]">
              Each Loraloop AI employee owns one marketing job and shares one brand knowledge base with the others, so
              strategy, ads, SEO, email and social read like one team. You approve every move.
            </p>
            <div className="mt-9">
              <StartForm location="solution_hero" />
            </div>
          </div>
          <div className="pb-20 md:pb-24" aria-hidden="true">
            <div className="grid gap-4 rounded-[24px] border border-[var(--lx-line)] bg-[var(--lx-mist)] p-4 shadow-[0_40px_80px_-40px_rgba(17,17,16,0.25)] md:grid-cols-2 md:items-start md:p-10">
              <div className="min-w-0">
                <BriefingView />
              </div>
              <div className="min-w-0 md:mt-12">
                <ApprovalView />
              </div>
            </div>
            <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Product views show example data for a sample brand.</p>
          </div>
        </Container>
      </section>

      {/* The team, from the live roster */}
      <Section aria-labelledby="solution-team">
        <Kicker>Meet the team</Kicker>
        <Heading id="solution-team" className="mt-4 max-w-[820px]" lead="Four specialists." rest="One brand memory, one approval queue." />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {agentList.map((a) => (
            <li key={a.key} id={`agent-${a.key}`} className="scroll-mt-28">
              <Link
                to={a.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-[var(--lx-mist)] transition-colors hover:bg-[#e9e8e2]"
              >
                <div className="flex flex-col gap-2 p-6 md:p-7">
                  <p className="lx-kicker !text-[11px]">{a.role}</p>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em]">{a.name}</h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--lx-slate)]">{a.hero.subhead}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--lx-blue)]">
                    Meet {a.name}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-auto px-6 pt-1 md:px-7 [&>*]:rounded-b-none [&>*]:border-b-0" aria-hidden="true">
                  {AGENT_VIEW[a.key]}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Product views show example data for a sample brand.</p>
      </Section>

      {/* How they work together */}
      <Section aria-labelledby="solution-how">
        <div className="rounded-[24px] bg-[var(--lx-mist)] p-6 md:p-12">
          <Kicker>How they work together</Kicker>
          <Heading id="solution-how" className="mt-4 max-w-[820px]" lead="From goal to published work," rest="with you approving every step." />
          <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {HOW.map((s, i) => (
              <li key={s.title} className="flex h-full flex-col rounded-[16px] bg-white p-5 shadow-[0_10px_30px_-20px_rgba(17,17,16,0.25)]">
                <span className="lx-mono text-[12px] text-[var(--lx-mute)]">0{i + 1}</span>
                <h3 className="mt-3 text-[16.5px] font-medium leading-[1.35]">{s.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Old way vs the Loraloop way */}
      <Section aria-labelledby="solution-why">
        <Kicker>Why a team, not a tool</Kicker>
        <Heading id="solution-why" className="mt-4 max-w-[820px]" lead="The old way vs" rest="the Loraloop way." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Tile className="h-full p-6 md:p-8">
            <p className="lx-kicker !text-[11px]">The old way</p>
            <ul className="mt-5 border-t border-[var(--lx-line)]">
              {OLD_WAY.map((item) => (
                <li key={item} className="flex gap-3 border-b border-[var(--lx-line)] py-3.5">
                  <X className="mt-0.5 size-4 shrink-0 text-[var(--lx-mute)]" aria-hidden="true" />
                  <span className="text-[15px] text-[var(--lx-slate)]">{item}</span>
                </li>
              ))}
            </ul>
          </Tile>
          <div className="h-full rounded-[20px] border border-[var(--lx-line)] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(17,17,16,0.25)] md:p-8">
            <p className="lx-kicker !text-[11px]">The Loraloop way</p>
            <ul className="mt-5 border-t border-[var(--lx-line)]">
              {NEW_WAY.map((item) => (
                <li key={item} className="flex gap-3 border-b border-[var(--lx-line)] py-3.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--lx-blue)]" strokeWidth={2.4} aria-hidden="true" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ControlsSection id="solution-guardrails" />

      <FaqSection items={FAQ} id="solution-faq" />

      <CtaBand lead="Meet your AI marketing team." rest="Start free for 3 days." location="solution_final_cta" />
    </div>
  );
}
