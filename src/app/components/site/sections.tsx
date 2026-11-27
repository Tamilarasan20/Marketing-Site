import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { Button, Heading, Kicker, Section, SIGNUP_URL, Tile } from "./ui";
import { ApprovalView } from "./views";
import { HOME_GUARDRAILS } from "../../data/homeContent";
import { cn } from "../ui/utils";

/** Website field that starts the trial with the site prefilled (same contract as the old hero form). */
export function StartForm({ location, dark = false }: { location: string; dark?: boolean }) {
  const [site, setSite] = useState("");
  const [error, setError] = useState<string | null>(null);
  const valid = /^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i.test(site.trim());
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!valid) return setError("Enter your website, like yourbrand.com");
        window.location.href = `${SIGNUP_URL}?website=${encodeURIComponent(site.trim())}`;
      }}
      className="flex w-full max-w-[480px] flex-col gap-2"
    >
      <div className={cn("flex items-center gap-1.5 rounded-full border p-1.5 pl-5 shadow-[0_6px_24px_-12px_rgba(17,17,16,0.18)] transition-colors", dark ? "border-white/15 bg-white/5 focus-within:border-white/40" : "border-[var(--lx-line)] bg-white focus-within:border-[var(--lx-blue)]")}>
        <label htmlFor={`site-${location}`} className="sr-only">Your website</label>
        <input
          id={`site-${location}`}
          type="text"
          inputMode="url"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder="yourbrand.com"
          value={site}
          aria-invalid={!!error}
          aria-describedby={`site-${location}-msg`}
          onChange={(e) => {
            setSite(e.target.value);
            if (error) setError(null);
          }}
          className={cn("min-w-0 flex-1 bg-transparent text-[15px] outline-none", dark ? "text-white placeholder:text-white/40" : "text-[var(--lx-ink)] placeholder:text-[var(--lx-mute)]")}
        />
        <button
          type="submit"
          data-ml-goal="signup_click"
          data-ml-goal-location={location}
          className="h-10 shrink-0 rounded-full bg-[var(--lx-blue)] px-5 text-[14.5px] font-medium text-white transition-colors hover:bg-[var(--lx-blue-ink)]"
        >
          Start free trial
        </button>
      </div>
      <p id={`site-${location}-msg`} role="alert" className={cn("text-[13px]", error ? "text-[#d92d20]" : dark ? "text-white/50" : "text-[var(--lx-mute)]")}>
        {error ?? "3-day free trial · no credit card · cancel anytime"}
      </p>
    </form>
  );
}

/** Integrations: a slow marquee of tool names plus the count. */
export function StackMarquee({ items, label = "Works with the tools you already run, plus 4,000+ more" }: { items: string[]; label?: string }) {
  const loop = [...items, ...items];
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-[14px] text-[var(--lx-mute)]">{label}</p>
      <div className="lx-marquee w-full overflow-hidden">
        <ul className="lx-marquee__track flex gap-12">
          {loop.map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= items.length ? true : undefined} className="shrink-0 whitespace-nowrap text-[19px] font-medium tracking-[-0.02em] text-[#7b879a]">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Guardrails: checklist beside the approvals view. */
export function ControlsSection({ id = "guardrails" }: { id?: string }) {
  return (
    <Section tone="mist" id={id} aria-labelledby={`${id}-heading`}>
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="min-w-0">
          <Kicker>Guardrails</Kicker>
          <Heading id={`${id}-heading`} className="mt-4" lead="Autonomy you choose." rest="Oversight built into every change." />
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {HOME_GUARDRAILS.map((g) => (
              <li key={g.title} className="flex gap-3 border-t border-[var(--lx-line)] py-4">
                <Check className="mt-1 size-4 shrink-0 text-[var(--lx-blue)]" strokeWidth={2.4} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium">{g.title}</span>
                  <span className="mt-0.5 block text-[14.5px] leading-[1.55] text-[var(--lx-slate)]">{g.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0" aria-hidden="true">
          <div className="rounded-[20px] bg-[var(--lx-mist)] p-6 md:p-10">
            <ApprovalView />
          </div>
        </div>
      </div>
    </Section>
  );
}

/** Question-form FAQ, open by default on the first item. */
export function FaqSection({ items, id = "faq" }: { items: { q: string; a: string }[]; id?: string }) {
  const [open, setOpen] = useState(0);
  return (
    <Section id={id} aria-labelledby={`${id}-heading`}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Kicker>FAQ</Kicker>
          <Heading id={`${id}-heading`} className="mt-4" lead="Questions," rest="answered." />
        </div>
        <ul className="min-w-0 border-b border-[var(--lx-line)]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-t border-[var(--lx-line)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-medium tracking-[-0.01em]"
                  >
                    {f.q}
                    <Plus className={cn("size-4 shrink-0 text-[var(--lx-slate)] transition-transform", isOpen && "rotate-45")} aria-hidden="true" />
                  </button>
                </h3>
                <div hidden={!isOpen} className="pb-6 pr-8 text-[15.5px] leading-[1.65] text-[var(--lx-slate)]">
                  {f.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/** Closing call to action: centred question, two buttons, the three start steps. */
export function CtaBand({ lead, rest, location }: { lead: string; rest: string; location: string }) {
  return (
    <section aria-labelledby={`cta-${location}`} className="pb-28 pt-24 md:pb-36 md:pt-32">
      <div className="mx-auto flex max-w-[860px] flex-col items-center px-5 text-center">
        <Heading id={`cta-${location}`} display lead={lead} rest={rest} />
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={SIGNUP_URL} arrow data-ml-goal="signup_click" data-ml-goal-location={location}>
            Start free trial
          </Button>
          <Button to="/pricing" variant="secondary">
            See pricing
          </Button>
        </div>
        <ol className="mt-12 grid w-full gap-3 text-left sm:grid-cols-3">
          {["Add your website. Lora builds your brand profile.", "Connect your store, ads, email and analytics.", "Approve the first week's plan and drafts."].map((t, i) => (
            <li key={t}>
              <Tile className="h-full p-5">
                <span className="lx-mono text-[12px] text-[var(--lx-mute)]">0{i + 1}</span>
                <p className="mt-2 text-[14.5px] leading-[1.55]">{t}</p>
              </Tile>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
