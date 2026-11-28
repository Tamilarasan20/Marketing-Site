import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { X, ArrowRight } from "lucide-react";

/**
 * Dated holiday banner, Nov 28 - Nov 30 2026. Each message shows only inside its window (UTC),
 * and closing one hides only that message, so the next one still appears. After the last window
 * the banner switches itself off. To run a new campaign, replace MESSAGES.
 */
interface BannerMessage {
  id: string;
  /** Shown from `from` (inclusive) until `until` (exclusive), both UTC. */
  from: string;
  until: string;
  text: string;
  short: string;
  cta: string;
  to: string;
}

const MESSAGES: BannerMessage[] = [
  {
    id: "small-business-saturday-2026",
    from: "2026-11-27T00:00:00Z",
    until: "2026-11-29T05:00:00Z", // midnight Nov 29, US Eastern
    text: "Small Business Saturday: free guides to win more local customers.",
    short: "Small Business Saturday: free local guides.",
    cta: "Read the guides",
    to: "/for-local-businesses#local-businesses-guides",
  },
  {
    id: "black-friday-last-day-2026",
    from: "2026-11-29T05:00:00Z",
    until: "2026-11-30T00:00:00Z", // offer ends 23:59:59 UTC (6:59 PM ET), mirrors the app's billing promo
    text: "Black Friday ends today at 6:59 PM ET: 20% off your first month on monthly plans.",
    short: "Black Friday ends today: 20% off month one.",
    cta: "See plans",
    to: "/pricing",
  },
  {
    id: "cyber-monday-audit-2026",
    from: "2026-11-30T00:00:00Z",
    until: "2026-12-01T08:00:00Z", // end of Nov 30, US Pacific
    text: "Cyber Monday: see what your Black Friday ad spend wasted, with a free Meta ads audit.",
    short: "Cyber Monday: free Meta ads audit.",
    cta: "Get a free audit",
    to: "/free-meta-ads-audit",
  },
];

const HEIGHT_VAR = "--launch-banner-h";
const dismissKey = (id: string) => `loraloop_banner_${id}_dismissed`;

const read = (k: string) => {
  try { return localStorage.getItem(k) === "1"; } catch { return false; }
};
const write = (k: string) => {
  try { localStorage.setItem(k, "1"); } catch { /* storage blocked: banner just reappears next visit */ }
};
const goal = (name: string, id: string) => window.minilytics?.("goal", name, { location: "holiday_banner", banner: id });

function currentMessage(now: number): BannerMessage | null {
  const m = MESSAGES.find((x) => now >= Date.parse(x.from) && now < Date.parse(x.until));
  return m && !read(dismissKey(m.id)) ? m : null;
}

export default function LaunchBanner() {
  const [message, setMessage] = useState<BannerMessage | null>(() =>
    typeof window === "undefined" ? null : currentMessage(Date.now()),
  );
  const barRef = useRef<HTMLDivElement>(null);

  // Publish the bar's height so the fixed header and mobile nav can sit below it.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const el = barRef.current;
    if (!message || !el) {
      root.style.setProperty(HEIGHT_VAR, "0px");
      return;
    }
    const update = () => root.style.setProperty(HEIGHT_VAR, `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty(HEIGHT_VAR, "0px");
    };
  }, [message]);

  if (!message) return null;

  const close = () => {
    write(dismissKey(message.id));
    goal("holiday_banner_dismiss", message.id);
    setMessage(null);
  };

  return (
    <>
      <div
        ref={barRef}
        role="region"
        aria-label={message.short}
        className="fixed top-0 inset-x-0 z-[70] bg-[#1f5eff] text-white"
      >
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-2 ps-4 pe-11 md:pe-12 text-[13px] md:text-[14px] leading-snug text-center">
          <p className="font-medium">
            <span className="hidden md:inline">{message.text}</span>
            <span className="md:hidden">{message.short}</span>
          </p>
          <Link
            to={message.to}
            onClick={() => goal("holiday_banner_click", message.id)}
            className="inline-flex items-center gap-1 rounded-full bg-white/15 hover:bg-white/25 px-3 py-1 font-semibold transition-colors"
          >
            {message.cta}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Close banner"
          className="absolute top-1/2 -translate-y-1/2 end-2 md:end-3 p-1.5 rounded-full hover:bg-white/15 transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      {/* Reserves the bar's space in the page flow so it never covers content. */}
      <div aria-hidden="true" style={{ height: `var(${HEIGHT_VAR}, 0px)` }} />
    </>
  );
}
