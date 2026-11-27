import { useReducedMotion } from "motion/react";
import { Container, Label, Reveal, SectionPanel, TwoTone } from "./primitives";
import { cn } from "../ui/utils";
import logoInstagram from "../../../imports/LandingPage/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import logoX from "../../../imports/LandingPage/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";
import logoTikTok from "../../../imports/LandingPage/6542a1e22417f251cbc55d42da5eae61e5cb8217.png";
import logoLinkedIn from "../../../imports/LandingPage/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import logoWordPress from "../../../imports/LandingPage/acfc7503e01b011ae7f17074baec7c0d31a597f8.png";
import logoChatGPT from "../../../assets/platform-chatgpt.png";
import logoClaude from "../../../assets/platform-claude.png";
import logoPerplexity from "../../../imports/LandingPage/6f9e851061034196060606283f0f5c6f664e7d42.png";
import logoOpenClaw from "../../../assets/platform-openclaw.png";
import logoHermes from "../../../assets/platform-hermes.png";

const LOGOS: { src: string; name: string; round?: boolean }[] = [
  { src: logoInstagram, name: "Instagram" },
  { src: logoLinkedIn, name: "LinkedIn", round: true },
  { src: logoX, name: "X", round: true },
  { src: logoTikTok, name: "TikTok" },
  { src: logoWordPress, name: "WordPress", round: true },
  { src: logoChatGPT, name: "ChatGPT" },
  { src: logoClaude, name: "Claude" },
  { src: logoPerplexity, name: "Perplexity" },
  { src: logoOpenClaw, name: "OpenClaw" },
  { src: logoHermes, name: "Hermes", round: true },
];

/** Names only (no logo files in the repo), shown in the marquee. */
const MORE = [
  "Meta Ads",
  "Google Ads",
  "Google Analytics",
  "Shopify",
  "Klaviyo",
  "Mailchimp",
  "Webflow",
  "YouTube",
  "Facebook",
  "Slack",
  "Microsoft Teams",
  "Discord",
];

/** What Loraloop does with each core tool (each backed by an integration in the app). */
const JOBS: { tool: string; job: string }[] = [
  { tool: "Google Ads", job: "Find wasted spend and add negative keywords" },
  { tool: "Meta Ads", job: "Catch creative fatigue before it costs you" },
  { tool: "Klaviyo", job: "Build flows that bring customers back" },
  { tool: "Shopify", job: "Plan campaigns around your products and orders" },
  { tool: "Search Console", job: "Turn ranking gaps into new articles" },
  { tool: "Slack", job: "Approve ad changes and get alerts in Slack" },
  { tool: "Meta Ad Library", job: "Track competitor ads every week" },
  { tool: "WordPress and Webflow", job: "Publish articles straight to your site" },
];

export default function Integrations() {
  const reduce = useReducedMotion();
  // Two copies so the -50% translate loops seamlessly.
  const loop = reduce ? MORE : [...MORE, ...MORE];

  return (
    <SectionPanel tone="taupe-100" id="integrations" aria-labelledby="integrations-heading">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex w-full max-w-[1040px] flex-col items-start gap-4 text-left">
          <Label>Integrations</Label>
          <TwoTone id="integrations-heading" lead="Connect once." rest="4,000+ integrations, working together." />
        </Reveal>

        <Reveal className="mt-10 w-full max-w-[1040px] md:mt-12" delay={0.05}>
          <ul className="grid gap-x-8 text-left sm:grid-cols-2 lg:grid-cols-4">
            {JOBS.map((j) => (
              <li key={j.tool} className="flex flex-col gap-1 border-t border-[#e3e1dc] py-5">
                <span className="font-['Satoshi',sans-serif] text-[16px] font-bold text-[#2c2c2c]">{j.tool}</span>
                <span className="text-[15px] leading-[1.5] text-[rgba(44,44,44,0.7)]">{j.job}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 w-full" delay={0.05}>
          <ul className="mx-auto grid max-w-[960px] grid-cols-4 gap-3 sm:grid-cols-5 md:gap-4">
            {LOGOS.map((logo) => (
              <li
                key={logo.name}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-[20px] border border-[#e3e1dc] bg-white p-3 transition-colors hover:border-[#d4d1ca] md:rounded-[24px]"
              >
                <img
                  src={logo.src}
                  alt=""
                  className={cn("size-9 object-contain md:size-12", logo.round && "rounded-full")}
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[11px] font-medium leading-4 text-[rgba(44,44,44,0.6)] md:text-[13px]">{logo.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="hv-marquee mt-8 w-full max-w-[1100px] overflow-hidden">
          <ul
            aria-label="More integrations"
            className={cn("flex", reduce ? "flex-wrap justify-center gap-y-3" : "hv-marquee__track")}
          >
            {loop.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= MORE.length ? true : undefined}
                className="mr-3 shrink-0 rounded-full border border-[#e3e1dc] bg-white/70 px-4 py-2 text-[14px] font-medium text-[rgba(44,44,44,0.75)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </SectionPanel>
  );
}
