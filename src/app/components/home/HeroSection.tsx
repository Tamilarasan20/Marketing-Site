import type { ReactNode } from "react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import WaitlistForm from "../WaitlistForm";
import { Container } from "./primitives";
import { cn } from "../ui/utils";
import { HOME_H1, HOME_LEAD, HOME_STACK } from "../../data/homeContent";
import imgClaude from "../../../assets/platform-claude.png";
import imgChatGPT from "../../../assets/platform-chatgpt.png";
import imgOpenClaw from "../../../assets/platform-openclaw.png";
import imgHermes from "../../../assets/platform-hermes.png";

const CONNECTORS = [
  { src: imgClaude, label: "Claude" },
  { src: imgChatGPT, label: "ChatGPT" },
  { src: imgOpenClaw, label: "OpenClaw" },
  { src: imgHermes, label: "Hermes" },
];

/** H1 split at the sentence break: the promise in full white, the control line softer. */
const [H1_LEAD, H1_REST] = (() => {
  const cut = HOME_H1.indexOf(". ") + 1;
  return [HOME_H1.slice(0, cut), HOME_H1.slice(cut + 1)];
})();

/** A tilted example of the team's output, floating around the prompt (Cardboard-style). */
function FloatCard({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        // Only where the sides have room beside the 720px text column.
        "absolute hidden w-[190px] rounded-[16px] border border-white/10 bg-[#1b1b19] p-3 text-left text-[12px] leading-[1.4] text-white/85 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] min-[1360px]:block",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="pt-[84px] md:pt-[92px]">
      <Container className="max-w-[1320px] px-3 sm:px-4 lg:px-6">
        <div className="hv-ink relative overflow-hidden rounded-[28px] px-5 pb-16 pt-16 md:rounded-[36px] md:pb-24 md:pt-24">
          {/* Soft light from below, like a stage */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(60%_80%_at_50%_100%,rgba(20,161,72,0.22),transparent_70%)]" />

          <FloatCard className="left-[4%] top-[14%] -rotate-[7deg]">
            <div className="h-[88px] rounded-[10px] bg-[linear-gradient(135deg,#f3c9a8,#d9825b_55%,#7a3b2a)]" />
            <p className="mt-2 font-medium text-white">Meta ad · variant B</p>
            <p className="text-white/55">UGC hook · CTR 2.4%</p>
          </FloatCard>
          <FloatCard className="left-[7%] top-[58%] rotate-[5deg]">
            <p className="flex items-center gap-1.5 text-white/55"><Mail className="size-3.5" />Clara · Klaviyo</p>
            <p className="mt-1.5 font-medium text-white">"Your order is here. Here's how to get the most from it"</p>
            <p className="mt-1 text-white/55">Post-purchase flow · email 1 of 3</p>
          </FloatCard>
          <FloatCard className="right-[5%] top-[12%] rotate-[6deg]">
            <p className="text-white/55">Sophie · new article</p>
            <p className="mt-1.5 font-medium text-white">How to choose a dog food for sensitive stomachs</p>
            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#14a148]/20 px-2 py-0.5 text-[11px] text-[#8fdc8a]"><Sparkles className="size-3" />Cited in AI Overview</p>
          </FloatCard>
          <FloatCard className="right-[7%] top-[60%] -rotate-[4deg]">
            <p className="text-white/55">Angie · budget proposal</p>
            <p className="mt-1.5 font-medium text-white">Prospecting UGC: $150 → $190 a day</p>
            <p className="mt-1 text-white/55">Reason: CPA down 18% in 7 days</p>
            <p className="mt-2 inline-flex rounded-full bg-[#fff1d6] px-2 py-0.5 text-[11px] font-semibold text-[#8a5a14]">Needs your OK</p>
          </FloatCard>

          <div className="relative mx-auto flex max-w-[720px] flex-col items-center text-center">
            <span className="hv-label !text-white/60">The AI marketing team for scaling brands and agencies</span>

            <h1 id="hero-heading" className="hv-h1 hv-h1--long mt-6 text-white">
              <span>{H1_LEAD}</span>{" "}
              <span className="hv-em text-white/55">{H1_REST}</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.55] text-white/70 md:text-[18px]">{HOME_LEAD}</p>

            <div className="mt-9 flex w-full justify-center">
              <WaitlistForm variant="prompt" />
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-white/50">
              <span>or use it inside</span>
              <ul className="flex flex-wrap items-center justify-center gap-3">
                {CONNECTORS.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <img src={c.src} alt="" className="size-[18px] rounded-[5px] object-cover" loading="eager" decoding="async" />
                    <span className="text-white/75">{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* The business stack buyers check for first (DTC, agencies, media buyers). */}
      <Container className="mt-10 flex flex-col items-center gap-4 pb-24 text-center md:mt-12 md:pb-28">
        <p className="text-[14px] text-[#6b6b65]">Works with the tools you already run, plus 4,000+ more</p>
        <ul aria-label="Integrations" className="flex max-w-[960px] flex-wrap justify-center gap-x-8 gap-y-3">
          {HOME_STACK.map((name) => (
            <li key={name} className="text-[16px] font-medium tracking-[-0.01em] text-[#8a8a83]">
              {name}
            </li>
          ))}
        </ul>
        <a href="#integrations" className="mt-1 inline-flex items-center gap-1 text-[14px] font-medium text-[#141412] hover:underline hover:underline-offset-4">
          See what each one does <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
