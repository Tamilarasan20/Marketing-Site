import { Container, Label, Reveal, SectionPanel } from "./primitives";

interface Step {
  title: string;
  rest: string;
  points: string[];
}

/** Four real steps, in the order a new workspace goes through them in the app. */
const STEPS: Step[] = [
  {
    title: "Connect your accounts",
    rest: "in a few minutes, no engineering ticket.",
    points: [
      "Add your website and Lora builds your brand knowledge base: voice, products, audience and competitors.",
      "Connect Shopify, Meta Ads, Google Ads, Klaviyo, Google Analytics and your social channels.",
    ],
  },
  {
    title: "Lora plans the week",
    rest: "from your numbers, not a generic playbook.",
    points: [
      "Set a goal such as repeat revenue, leads or lower CPA.",
      "Lora turns it into priorities using your account data and live market data on keywords, rankings and competitor ads.",
    ],
  },
  {
    title: "The team drafts, you approve",
    rest: "in the app, your inbox or Slack.",
    points: [
      "Angie, Sophie and Clara produce ads, articles, emails and posts, and propose budget changes with the reason.",
      "Approve, edit or reject each one. The AI can ask for approval but can never grant it.",
    ],
  },
  {
    title: "Ship, measure, improve",
    rest: "with one briefing every morning.",
    points: [
      "Approved work publishes on schedule and ad changes apply inside your limits.",
      "Every morning Lora reports results, and your edits and approvals teach the team what good looks like.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <SectionPanel tone="ink" aria-labelledby="how-heading">
      <Container>
        <Reveal className="flex max-w-[820px] flex-col items-start gap-4">
          <Label>How it works</Label>
          <h2 id="how-heading" className="hv-h2">
            <span className="text-white/50">From goal to published campaign,</span>{" "}
            <span className="text-white">Loraloop does the real work.</span>
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex min-w-0 flex-col gap-4 rounded-[24px] border border-white/10 bg-[#1b1b19] p-6 md:p-8">
              <span className="font-mono text-[12px] font-medium tracking-[0.08em] text-white/40">#{i + 1}</span>
              <h3 className="text-[22px] leading-[1.3] tracking-[-0.015em] md:text-[24px]">
                <span className="font-['Satoshi',sans-serif] font-bold text-white">{s.title}</span>{" "}
                <span className="text-white/50">{s.rest}</span>
              </h3>
              <ul className="flex flex-col gap-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[16px] leading-[1.55] text-white/70">
                    <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[#14a148]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </SectionPanel>
  );
}
