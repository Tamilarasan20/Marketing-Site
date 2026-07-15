import { useEffect } from "react";
import { Check, X, Star, ArrowRight } from "lucide-react";
import { type Agent } from "../data/agents";

const SIGNUP_URL = "https://app.loraloop.com/signup";
const satoshi = { fontFamily: "Satoshi, sans-serif" } as const;

// ── Small building blocks ────────────────────────────────────────────────────
function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className="text-[13px] font-bold uppercase tracking-[0.14em] text-center mb-3"
      style={{ color, ...satoshi }}
    >
      {children}
    </p>
  );
}

function EmojiBadge({
  agent,
  className = "",
  emojiClass = "text-xl",
}: {
  agent: Agent;
  className?: string;
  emojiClass?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${className}`}
      style={{ background: agent.gradient }}
      role="img"
      aria-label={agent.name}
    >
      <span className={emojiClass} style={{ lineHeight: 1 }}>
        {agent.emoji}
      </span>
    </div>
  );
}

// The signature "agent is executing" chat/task mockup, built from the agent's
// own capability list.
function ChatMockup({ agent }: { agent: Agent }) {
  const items = agent.newWay.slice(0, 4);
  return (
    <div className="w-full max-w-[400px] rounded-2xl bg-white shadow-[0_28px_64px_-18px_rgba(0,0,0,0.4)] border border-black/5 overflow-hidden text-left">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100">
        <EmojiBadge agent={agent} className="w-8 h-8 rounded-full" emojiClass="text-base" />
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-[#111827] leading-4 m-0" style={satoshi}>
            {agent.name}
          </p>
          <p className="text-[11px] text-[#9ca3af] leading-4 m-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Working now
          </p>
        </div>
      </div>
      <div className="p-3.5 space-y-2 bg-[#fafafb]">
        <div className="inline-block rounded-2xl rounded-tl-sm bg-white border border-gray-100 px-3.5 py-2 text-[12.5px] text-[#374151] shadow-sm">
          Here's what I'm running for you today 👇
        </div>
        {items.map(({ text, icon: Icon }) => (
          <div
            key={text}
            className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-100 px-3 py-2.5 shadow-sm"
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: agent.tint, color: agent.color }}
            >
              <Icon className="w-3.5 h-3.5" />
            </span>
            <span className="text-[12px] text-[#374151] leading-[1.4] flex-1">{text}</span>
            <Check className="w-3.5 h-3.5 shrink-0 text-green-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AgentLandingPage({ agent }: { agent: Agent }) {
  // Basic per-page SEO — this SPA has no per-route prerender today.
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

  const clip = {
    background: agent.textGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  } as const;

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[140px] opacity-[0.13] pointer-events-none"
          style={{ background: agent.color }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            style={{ background: agent.tint, color: agent.color }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: agent.color }} />
            {agent.hero.badge}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#0f172a] leading-[1.04] tracking-[-0.03em] text-balance mb-6"
            style={satoshi}
          >
            Hi, I&apos;m {agent.name},{" "}
            <span style={clip}>your {agent.hero.tagline}.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-8">
            {agent.hero.subhead}
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-transform hover:-translate-y-0.5"
            style={{ background: agent.gradient, ...satoshi }}
          >
            Get started free <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-5 text-[13px] text-[#6b7280]">{agent.hero.trust}</p>
        </div>

        {/* Full-bleed hero panel */}
        <div className="mt-14 md:mt-16 px-4">
          <div
            className="mx-auto max-w-6xl rounded-[2rem] md:rounded-[2.75rem] relative overflow-hidden px-6 md:px-14 pt-10 md:pt-14"
            style={{ background: agent.gradient }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 28% -10%, rgba(255,255,255,0.5), transparent 55%)",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-8 items-end">
              <div className="mx-auto md:mx-0 translate-y-5 md:translate-y-8">
                <ChatMockup agent={agent} />
              </div>
              <div className="hidden md:flex justify-center items-end">
                <span
                  className="text-[210px] leading-none select-none"
                  style={{
                    filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.28))",
                    transform: "translateY(34px)",
                  }}
                >
                  {agent.emoji}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why me: old way vs new way ────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={agent.color}>Why me</Eyebrow>
          <h2
            className="text-3xl md:text-[44px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-14"
            style={satoshi}
          >
            {agent.compareHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Old way */}
            <div className="bg-[#f7f8fa] rounded-[1.75rem] p-8 md:p-10 border border-gray-100">
              <p className="text-[13px] font-semibold text-[#9ca3af] uppercase tracking-[0.08em] mb-2" style={satoshi}>
                The old way
              </p>
              <p className="text-[21px] md:text-[24px] font-bold text-[#111827] tracking-[-0.02em] leading-[1.25] mb-7" style={satoshi}>
                {agent.oldWayHeadline}
              </p>
              <ul className="space-y-3.5">
                {agent.oldWay.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-[#9ca3af]" />
                    </span>
                    <span className="text-[15px] text-[#4b5563] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* My way */}
            <div className="rounded-[1.75rem] p-8 md:p-10 relative overflow-hidden" style={{ background: agent.gradient }}>
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 85% 0%, rgba(255,255,255,0.3), transparent 55%)" }}
              />
              <div className="relative">
                <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.08em] mb-2" style={satoshi}>
                  The {agent.name} way
                </p>
                <p className="text-[21px] md:text-[24px] font-bold text-white tracking-[-0.02em] leading-[1.25] mb-7" style={satoshi}>
                  {agent.newWayHeadline}
                </p>
                <div className="space-y-2.5">
                  {agent.newWay.map(({ text, icon: Icon }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-sm"
                    >
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: agent.tint, color: agent.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[13.5px] text-[#1f2937] leading-[1.4] flex-1 font-medium">
                        {text}
                      </span>
                      <Check className="w-4 h-4 shrink-0 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stat panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            {agent.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[1.75rem] p-8 md:p-10 border"
                style={{ background: agent.tint, borderColor: agent.color + "22" }}
              >
                <p className="text-5xl md:text-[64px] font-extrabold leading-none mb-3" style={{ ...clip, ...satoshi }}>
                  {s.value}
                </p>
                <p className="text-[15px] text-[#4b5563] leading-[1.5]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I work (optional) ─────────────────────────────────────── */}
      {agent.steps && agent.stepsHeading && (
        <section className="py-20 md:py-24 px-4 bg-[#fafafb] border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <Eyebrow color={agent.color}>How I work</Eyebrow>
            <h2
              className="text-3xl md:text-[44px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-14 max-w-3xl mx-auto"
              style={satoshi}
            >
              {agent.stepsHeading}
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {agent.steps.map((s, i) => (
                <div key={s.title} className="bg-white rounded-[1.5rem] p-8 border border-gray-100 shadow-sm">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white mb-5"
                    style={{ background: agent.gradient, ...satoshi }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[19px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2" style={satoshi}>
                    {s.title}
                  </h3>
                  <p className="text-[#4b5563] text-[14.5px] leading-[1.55]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Solutions: what you get ───────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={agent.color}>Solutions</Eyebrow>
          <h2
            className="text-3xl md:text-[44px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3 max-w-3xl mx-auto"
            style={satoshi}
          >
            {agent.featuresHeading}
          </h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-14 max-w-2xl mx-auto">
            {agent.featuresSub}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agent.features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[1.5rem] p-7 border border-gray-100 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: agent.tint, color: agent.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className="text-[20px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2"
                  style={satoshi}
                >
                  {title}
                </h3>
                <p className="text-[14.5px] text-[#4b5563] leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customers ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4 bg-[#fafafb] border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={agent.color}>Customers</Eyebrow>
          <h2
            className="text-3xl md:text-[44px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-14"
            style={satoshi}
          >
            What clients say about me
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {agent.testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-[1.5rem] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} className="w-4 h-4" style={{ color: agent.color, fill: agent.color }} />
                    ))}
                  </div>
                  <span className="text-[13px] font-bold text-[#111827]" style={satoshi}>5.0</span>
                </div>
                <p className="text-[18px] text-[#1f2937] leading-[1.6] mb-6 flex-1" style={satoshi}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                {t.metrics && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[13px] font-bold px-3 py-1 rounded-full"
                        style={{ background: agent.tint, color: agent.color, ...satoshi }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: agent.gradient, ...satoshi }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111827]" style={satoshi}>{t.name}</p>
                    <p className="text-[13px] text-[#6b7280]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Eyebrow color={agent.color}>FAQ</Eyebrow>
          <h2
            className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12"
            style={satoshi}
          >
            Questions?
          </h2>
          <div className="space-y-2.5">
            {agent.faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden group"
              >
                <summary
                  className="px-6 py-[18px] cursor-pointer font-semibold text-[#111827] text-[16px] flex items-center justify-between list-none gap-4"
                  style={satoshi}
                >
                  {faq.q}
                  <span
                    className="text-lg group-open:rotate-45 transition-transform flex-shrink-0"
                    style={{ color: agent.color }}
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-[14.5px] text-[#4b5563] leading-[1.6]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4">
        <div
          className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.75rem] relative overflow-hidden px-6 py-16 md:px-16 md:py-20"
          style={{ background: agent.gradient }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.35), transparent 50%)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 bg-white/15 px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Available now
              </span>
              <h2
                className="text-3xl md:text-[46px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4"
                style={satoshi}
              >
                Ready to work with {agent.name}?
              </h2>
              <p className="text-white/85 text-[17px] mb-8 leading-[1.6] max-w-md mx-auto md:mx-0">
                {agent.ctaSubhead}
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-base hover:bg-gray-50 transition-all"
                style={{ color: agent.color, ...satoshi }}
              >
                Get started free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <ChatMockup agent={agent} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
