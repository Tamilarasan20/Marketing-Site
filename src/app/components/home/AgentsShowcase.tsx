import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button, Container, ContourGradient, Reveal, SectionPanel, TwoTone, type GradientTone } from "./primitives";
import { cn } from "../ui/utils";
import imgSam from "../../../imports/LandingPage/716c7778e50d7ebaf89d87cc7045f11c7dc8c365.png";
import imgSophie from "../../../imports/LandingPage/cf31e812b350d794878316732de9dc42863611d4.png";
import imgElena from "../../../imports/LandingPage/62bd3bf9f5ad3a92db4d110679abb47a4004ccbe.png";
import imgSarah from "../../../imports/LandingPage/2ede8e04425e852843b64720e2e6023d1ed754cb.png";
import imgClara from "../../../imports/LandingPage/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgTheo from "../../../imports/LandingPage/7908e0c373350f1c767f51c81c8c63fccd42f554.png";
import imgSteve from "../../../imports/LandingPage/81459e21086bbb45f043de724414eb6c6a228454.png";

interface AgentTab {
  key: string;
  tab: string;
  name: string;
  role: string;
  headline: string;
  body: string;
  image: string;
  /** How the cut-out sits in the panel. */
  imageClass: string;
  chip: { label: string; value: string };
  tone: GradientTone;
}

// Copy is the existing Loraloop agent copy from the previous home page.
const AGENTS: AgentTab[] = [
  {
    key: "sam",
    tab: "Strategist",
    name: "Sam",
    role: "AI Strategist",
    headline: "Know what competitors ship before your Monday standup",
    body: "Sam monitors competitors' ads, content and positioning daily and flags the gaps worth acting on.",
    image: imgSam,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Competitor analysis ready", value: "New growth opportunities detected" },
    tone: "green",
  },
  {
    key: "clara",
    tab: "Content",
    name: "Clara",
    role: "AI Content Writer",
    headline: "50+ on-brand assets a month, review-ready",
    body: "Clara drafts blogs, newsletters, LinkedIn posts, ad copy and email sequences in your voice, so the content calendar never falls behind.",
    image: imgClara,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Drafts ready for review", value: "Blog · Newsletter · LinkedIn" },
    tone: "forest",
  },
  {
    key: "elena",
    tab: "Ads",
    name: "Elena",
    role: "AI Ads Manager",
    headline: "Stop ad budget leaking overnight",
    body: "Elena watches Meta and Google spend overnight, catches underperforming campaigns and queues budget moves for approval before your team logs in.",
    image: imgElena,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Need approval", value: "Budget move queued for review" },
    tone: "green",
  },
  {
    key: "sarah",
    tab: "Social",
    name: "Sarah",
    role: "AI Social Media Manager",
    headline: "Publish and engage across every channel",
    body: "Sarah schedules approved posts across LinkedIn, Instagram, X and TikTok and handles replies, so the calendar never goes quiet.",
    image: imgSarah,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Published", value: "Posts across Instagram, X, TikTok" },
    tone: "forest",
  },
  {
    key: "sophie",
    tab: "SEO / GEO",
    name: "Sophie",
    role: "AI SEO/GEO Manager",
    headline: "Rank on Google and get cited by ChatGPT and Perplexity",
    body: "Sophie researches keywords, briefs and drafts SEO and GEO articles that rank on Google and get cited by AI search, in your brand voice.",
    image: imgSophie,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Article drafted", value: "Optimized for AI answers" },
    tone: "violet",
  },
  {
    key: "theo",
    tab: "Video",
    name: "Theo",
    role: "AI Video Producer",
    headline: "Short-form video scripts at scale",
    body: "Theo turns launches, features and customer stories into scripted short-form video for LinkedIn, TikTok and YouTube.",
    image: imgTheo,
    imageClass: "h-[300px] sm:h-[360px] md:h-[440px]",
    chip: { label: "Scripts ready", value: "LinkedIn · TikTok · YouTube" },
    tone: "green",
  },
  {
    key: "steve",
    tab: "Design",
    name: "Steve",
    role: "AI Visual Designer",
    headline: "Creatives that match your brand system",
    body: "Steve produces on-brand visuals, carousels and ad creatives for every channel from your brand guidelines.",
    image: imgSteve,
    imageClass: "mb-6 h-auto w-[92%] max-w-[480px] md:mb-16",
    chip: { label: "Creatives ready", value: "Carousel · Ad set · Story" },
    tone: "forest",
  },
];

export default function AgentsShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const agent = AGENTS[active];

  const select = (i: number, focus = false) => {
    const next = (i + AGENTS.length) % AGENTS.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); select(active + 1, true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); select(active - 1, true); }
    else if (e.key === "Home") { e.preventDefault(); select(0, true); }
    else if (e.key === "End") { e.preventDefault(); select(AGENTS.length - 1, true); }
  };

  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = `${baseId}-panel`;

  return (
    <SectionPanel tone="taupe-100" aria-labelledby="agents-heading">
      <Container>
        <Reveal className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center">
          <TwoTone id="agents-heading" lead="A full marketing team" rest="for less than one agency retainer." />
          <p className="hv-lead">Flat headcount. 10x the output.</p>
        </Reveal>

        {/* Tabs — scrolls sideways on narrow screens */}
        <div className="mt-10 md:mt-14 -mx-4 overflow-x-auto px-4 no-scrollbar">
          <div
            role="tablist"
            aria-label="AI employees"
            className="mx-auto flex w-max gap-1 rounded-[18px] border border-[#e3e1dc] bg-white p-1"
          >
            {AGENTS.map((a, i) => (
              <button
                key={a.key}
                ref={(el) => { tabRefs.current[i] = el; }}
                id={tabId(i)}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={panelId}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  "h-10 whitespace-nowrap rounded-[14px] px-4 text-[15px] font-semibold transition-colors",
                  i === active
                    ? "bg-[#141412] text-white"
                    : "text-[rgba(44,44,44,0.75)] hover:bg-[#f3f2ef] hover:text-[#2c2c2c]",
                )}
              >
                {a.tab}
              </button>
            ))}
          </div>
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={tabId(active)}
          tabIndex={0}
          className="mt-6 md:mt-8 rounded-[28px] md:rounded-[40px] focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={agent.key}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContourGradient
                tone={agent.tone}
                className="grid min-h-[560px] overflow-hidden rounded-[28px] md:rounded-[40px] md:min-h-[520px] md:grid-cols-[1.05fr_1fr]"
              >
                <div className="relative z-10 flex flex-col justify-center gap-5 p-6 pb-0 sm:p-10 md:p-14">
                  <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-[13px] font-semibold text-white">
                    {agent.role}
                  </span>
                  <h3 className="hv-h3 text-white">{agent.headline}</h3>
                  <p className="max-w-[460px] text-[16px] leading-[1.55] text-white/85 md:text-[17px]">{agent.body}</p>
                  <Link
                    to={`/solution?agent=${agent.key}`}
                    className="group inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-white"
                  >
                    Meet {agent.name}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>

                <div className="relative flex min-h-[320px] items-end justify-center pt-16 md:min-h-0 md:pt-0">
                  <img
                    src={agent.image}
                    alt={`${agent.name}, ${agent.role}`}
                    className={cn("relative z-[1] w-auto select-none object-contain object-bottom", agent.imageClass)}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="hv-frost absolute left-4 top-6 z-[2] max-w-[250px] rounded-[16px] px-4 py-3 text-left shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)] md:left-2 md:top-14">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#094413]">{agent.chip.label}</p>
                    <p className="mt-0.5 text-[14px] font-medium leading-5 text-[#2c2c2c]">{agent.chip.value}</p>
                  </div>
                  <p className="absolute bottom-5 right-6 z-[2] font-['Kalam',cursive] text-[26px] font-bold leading-none text-white/90 md:text-[30px]">
                    {agent.name}
                  </p>
                </div>
              </ContourGradient>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot pagination for touch screens (tabs remain the accessible control) */}
        <div className="mt-5 flex justify-center gap-2 md:hidden" aria-hidden="true">
          {AGENTS.map((a, i) => (
            <button
              key={a.key}
              type="button"
              tabIndex={-1}
              onClick={() => select(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active ? "w-6 bg-[#141412]" : "w-2 bg-[#e3e1dc]",
              )}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="primary">Get Started</Button>
        </div>
      </Container>
    </SectionPanel>
  );
}
