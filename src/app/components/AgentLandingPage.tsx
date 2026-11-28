import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { type Agent, agentList } from "../data/agents";
import { Container, Heading, Kicker, Section, Tile } from "./site/ui";
import { ControlsSection, CtaBand, FaqSection, StartForm } from "./site/sections";
import { AdsView, ApprovalView, BriefingView, EmailView, GradesView, QueueView, SeoView, StrategyView } from "./site/views";

/** The two product views under each agent's hero, picked for what that agent produces. */
const HERO_VIEWS: Record<string, [ReactNode, ReactNode]> = {
  lora: [<BriefingView key="a" />, <StrategyView key="b" />],
  angie: [<AdsView key="a" />, <ApprovalView key="b" />],
  sophie: [<SeoView key="a" />, <GradesView key="b" />],
  clara: [<EmailView key="a" />, <QueueView key="b" />],
};

/**
 * Agent landing page (Lora, Angie, Sophie, Clara) in the home page's design system:
 * `.lx` ground, two-tone headlines, mono kickers, warm tiles, the site's StartForm,
 * guardrails, FAQ and closing CTA. Content comes from data/agents.ts.
 */
export default function AgentLandingPage({ agent }: { agent: Agent }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = agent.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    if (meta) meta.setAttribute("content", agent.metaDescription);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, [agent]);

  const id = agent.key;
  const [viewA, viewB] = HERO_VIEWS[agent.key] ?? [<BriefingView key="a" />, <ApprovalView key="b" />];

  return (
    <div className="lx">
      {/* Hero */}
      <section aria-labelledby={`${id}-hero`} className="relative overflow-hidden pt-16">
        <Container className="relative">
          <div className="pb-14 pt-20 md:pb-20 md:pt-28">
            <Kicker>{agent.hero.badge}</Kicker>
            <h1 id={`${id}-hero`} className="lx-display mt-6 max-w-[900px]">
              <span>Hi, I&apos;m {agent.name},</span> <span className="lx-soft">your {agent.hero.tagline}.</span>
            </h1>
            <p className="lx-lead mt-6 max-w-[640px]">{agent.hero.subhead}</p>
            <div className="mt-9">
              <StartForm location={`agent_${id}_hero`} />
            </div>
            <p className="mt-1 text-[13.5px] text-[var(--lx-slate)]">{agent.hero.trust}</p>
          </div>
          <div className="pb-20 md:pb-24" aria-hidden="true">
            <div className="grid gap-4 rounded-[24px] border border-[var(--lx-line)] bg-[var(--lx-mist)] p-4 shadow-[0_40px_80px_-40px_rgba(17,17,16,0.25)] md:grid-cols-2 md:items-start md:p-10">
              <div className="min-w-0">{viewA}</div>
              <div className="min-w-0 md:mt-12">{viewB}</div>
            </div>
            <p className="mt-4 text-[12.5px] text-[var(--lx-mute)]">Product views show example data for a sample brand.</p>
          </div>
        </Container>
      </section>

      {/* Old way vs the agent's way */}
      <Section aria-labelledby={`${id}-why`}>
        <Kicker>Why {agent.name}</Kicker>
        <Heading id={`${id}-why`} className="mt-4 max-w-[820px]" lead={agent.compareHeading} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Tile className="h-full p-6 md:p-8">
            <p className="lx-kicker !text-[11px]">The old way</p>
            <p className="mt-3 text-[20px] font-medium leading-[1.3] tracking-[-0.015em]">{agent.oldWayHeadline}</p>
            <ul className="mt-6 border-t border-[var(--lx-line)]">
              {agent.oldWay.map((item) => (
                <li key={item} className="flex gap-3 border-b border-[var(--lx-line)] py-3.5">
                  <X className="mt-0.5 size-4 shrink-0 text-[var(--lx-mute)]" aria-hidden="true" />
                  <span className="text-[15px] text-[var(--lx-slate)]">{item}</span>
                </li>
              ))}
            </ul>
          </Tile>
          <div className="h-full rounded-[20px] border border-[var(--lx-line)] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(17,17,16,0.25)] md:p-8">
            <p className="lx-kicker !text-[11px]">The {agent.name} way</p>
            <p className="mt-3 text-[20px] font-medium leading-[1.3] tracking-[-0.015em]">{agent.newWayHeadline}</p>
            <ul className="mt-6 border-t border-[var(--lx-line)]">
              {agent.newWay.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 border-b border-[var(--lx-line)] py-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[var(--lx-blue-wash)] text-[var(--lx-blue)]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-[15px]">{text}</span>
                  <Check className="size-4 shrink-0 text-[var(--lx-blue)]" strokeWidth={2.4} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {agent.stats.length > 0 && (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {agent.stats.map((s) => (
              <li key={s.label}>
                <Tile className="h-full p-6 md:p-8">
                  <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-none tracking-[-0.03em]">{s.value}</p>
                  <p className="mt-3 text-[15px] text-[var(--lx-slate)]">{s.label}</p>
                </Tile>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* How I work */}
      {agent.steps && agent.steps.length > 0 && agent.stepsHeading && (
        <Section aria-labelledby={`${id}-how`}>
          <Kicker>How I work</Kicker>
          <Heading id={`${id}-how`} className="mt-4 max-w-[820px]" lead={agent.stepsHeading} />
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {agent.steps.map((s, i) => (
              <li key={s.title}>
                <Tile className="h-full p-6">
                  <span className="lx-mono text-[12px] text-[var(--lx-mute)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-[18px] font-medium leading-[1.35] tracking-[-0.012em]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[var(--lx-slate)]">{s.desc}</p>
                </Tile>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* What you get */}
      <Section aria-labelledby={`${id}-features`}>
        <Kicker>What you get</Kicker>
        <Heading id={`${id}-features`} className="mt-4 max-w-[820px]" lead={agent.featuresHeading} />
        <p className="lx-lead mt-5 max-w-[640px]">{agent.featuresSub}</p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agent.features.map(({ icon: Icon, title, desc }) => (
            <li key={title}>
              <Tile className="h-full p-6">
                <span className="flex size-10 items-center justify-center rounded-[10px] bg-white text-[var(--lx-blue)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[18px] font-medium leading-[1.35] tracking-[-0.012em]">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[var(--lx-slate)]">{desc}</p>
              </Tile>
            </li>
          ))}
        </ul>
      </Section>

      {/* Daily / weekly / monthly routine */}
      {agent.cadence && agent.cadence.length > 0 && (
        <Section aria-labelledby={`${id}-routine`}>
          <div className="rounded-[24px] bg-[var(--lx-mist)] p-6 md:p-12">
            <Kicker>My routine</Kicker>
            <Heading id={`${id}-routine`} className="mt-4 max-w-[820px]" lead={`What ${agent.name} does`} rest="every day, week and month." />
            <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {agent.cadence.map(({ freq, icon: Icon, title, desc }) => (
                <li key={title} className="flex h-full flex-col rounded-[16px] bg-white p-5 shadow-[0_10px_30px_-20px_rgba(17,17,16,0.25)]">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="size-4 text-[var(--lx-blue)]" aria-hidden="true" />
                    <span className="lx-mono text-[11px] uppercase tracking-[0.06em] text-[var(--lx-mute)]">{freq}</span>
                  </div>
                  <h3 className="mt-4 text-[16.5px] font-medium leading-[1.35]">{title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-[var(--lx-slate)]">Every change, post, email and budget move waits for your approval.</p>
          </div>
        </Section>
      )}

      {/* Comparison and integrations */}
      {agent.comparison && agent.comparison.length > 0 && (
        <Section aria-labelledby={`${id}-compare`}>
          <Kicker>Compare</Kicker>
          <Heading id={`${id}-compare`} className="mt-4 max-w-[820px]" lead={`${agent.name} vs a specialist,`} rest="an agency or doing it yourself." />
          <div className="mt-12 overflow-x-auto rounded-[20px] border border-[var(--lx-line)] bg-white">
            <table className="w-full min-w-[720px] text-left text-[14.5px]">
              <thead>
                <tr className="border-b border-[var(--lx-line)]">
                  <th className="p-5 font-normal" scope="col"><span className="sr-only">Compare</span></th>
                  <th className="bg-[var(--lx-blue-wash)] p-5 font-medium text-[var(--lx-blue)]" scope="col">{agent.name}</th>
                  <th className="p-5 font-medium" scope="col">Hiring a specialist</th>
                  <th className="p-5 font-medium" scope="col">An agency</th>
                  <th className="p-5 font-medium" scope="col">Doing it yourself</th>
                </tr>
              </thead>
              <tbody>
                {agent.comparison.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--lx-line)] last:border-0">
                    <th className="p-5 font-medium" scope="row">{row.label}</th>
                    <td className="bg-[var(--lx-blue-wash)]/60 p-5 font-medium">{row.agent}</td>
                    <td className="p-5 text-[var(--lx-slate)]">{row.specialist}</td>
                    <td className="p-5 text-[var(--lx-slate)]">{row.agency}</td>
                    <td className="p-5 text-[var(--lx-slate)]">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {agent.integrations && agent.integrations.length > 0 && (
            <div className="mt-12">
              <p className="lx-kicker">{agent.name} works with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {agent.integrations.map((tool) => (
                  <li key={tool} className="rounded-full bg-[var(--lx-mist)] px-4 py-2 text-[14px]">{tool}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      {/* What clients say */}
      {agent.testimonials.length > 0 && (
        <Section aria-labelledby={`${id}-quotes`}>
          <Kicker>Customers</Kicker>
          <Heading id={`${id}-quotes`} className="mt-4" lead="What clients say" rest={`about ${agent.name}.`} />
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {agent.testimonials.map((t) => (
              <li key={t.name}>
                <Tile className="flex h-full flex-col p-6 md:p-8">
                  <blockquote className="flex-1 text-[18px] leading-[1.6]">&ldquo;{t.quote}&rdquo;</blockquote>
                  {t.metrics && t.metrics.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {t.metrics.map((m) => (
                        <li key={m} className="lx-mono rounded-full bg-white px-3 py-1 text-[12.5px]">{m}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-6 text-[15px] font-medium">{t.name}</p>
                  <p className="text-[14px] text-[var(--lx-slate)]">{t.title}</p>
                </Tile>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <ControlsSection id={`${id}-guardrails`} />

      <FaqSection items={agent.faqs} id={`${id}-faq`} />

      {/* The rest of the team, built from the live roster so names and links stay current */}
      <Section aria-labelledby={`${id}-team`}>
        <Kicker>The team</Kicker>
        <Heading id={`${id}-team`} className="mt-4" lead={`${agent.name} works alongside`} rest="the rest of your AI team." />
        <ul className="mt-10 grid gap-3 md:grid-cols-3">
          {agentList.filter((a) => a.key !== agent.key).map((a) => (
            <li key={a.key}>
              <Link
                to={a.slug}
                className="group flex h-full flex-col rounded-[16px] bg-[var(--lx-mist)] p-5 transition-colors hover:bg-[#e9e8e2]"
              >
                <span className="text-[17px] font-medium">{a.name}</span>
                <span className="text-[14px] text-[var(--lx-slate)]">{a.role}</span>
                <span className="mt-3 line-clamp-3 text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{a.metaDescription}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--lx-blue)]">
                  Meet {a.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand lead={`Ready to work with ${agent.name}?`} rest="Start free for 3 days." location={`agent_${id}_final_cta`} />
    </div>
  );
}
