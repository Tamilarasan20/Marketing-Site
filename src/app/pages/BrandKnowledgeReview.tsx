import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import {
  ArrowLeft,
  ArrowUpRight,
  Ban,
  Check,
  Copy,
  Globe,
  Hash,
  Heart,
  Lightbulb,
  MessageCircle,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  Swords,
  Target,
} from 'lucide-react';
import { brandKnowledge as dna } from '../data/brandKnowledge';

const APP_URL = 'https://app.loraloop.com';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'voice', label: 'Voice & Tone' },
  { id: 'audience', label: 'Audience' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'content', label: 'Content Strategy' },
  { id: 'visual', label: 'Visual Identity' },
  { id: 'sources', label: 'Sources' },
];

function ConfidenceRing({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  const r = 26;
  const circumference = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
          <circle cx="32" cy="32" r={r} fill="none" stroke="#ede9fe" strokeWidth="6" />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke="#7c3aed"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - value)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">{pct}%</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">Confidence</p>
        <p className="text-xs text-gray-500">AI analysis score</p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-2">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">{title}</h2>
      <p className="text-sm text-gray-500 max-w-xl">{subtitle}</p>
    </div>
  );
}

function Chip({ children, color = 'gray' }: { children: React.ReactNode; color?: 'gray' | 'violet' | 'green' | 'red' }) {
  const styles = {
    gray: 'bg-gray-100 text-gray-700',
    violet: 'bg-violet-50 text-violet-700',
    green: 'bg-emerald-50 text-emerald-700',
    red: 'bg-red-50 text-red-600',
  };
  return <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium ${styles[color]}`}>{children}</span>;
}

function ColorSwatch({ name, hex, role }: { name: string; hex: string; role: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      className="group text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-md transition-all"
    >
      <div className="h-28 border-b border-gray-100" style={{ backgroundColor: hex }} />
      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500 font-mono mt-0.5">{hex}</p>
          <p className="text-[11px] text-gray-400 capitalize mt-1">{role}</p>
        </div>
        <span className="mt-0.5 text-gray-300 group-hover:text-violet-500 transition-colors">
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </span>
      </div>
    </button>
  );
}

export default function BrandKnowledgeReview() {
  const { id } = useParams();
  const reviewUrl = `${APP_URL}/brand/knowledge/${id ?? dna.id}/review`;
  const [activeSection, setActiveSection] = useState('overview');
  const [logoFailed, setLogoFailed] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Brand assets are hotlinked from the analyzed site — hide anything that fails to load
  const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };
  const hideTileOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const tile = e.currentTarget.parentElement;
    if (tile) tile.style.display = 'none';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${dna.brandName} · Brand DNA Review | Loraloop`;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const setRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  const validatedDate = new Date(dna.lastValidatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      {/* ── Review action bar ─────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="p-2 -ml-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors" aria-label="Back to home">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">Brand DNA · {dna.brandName}</p>
              <p className="text-xs text-gray-400">Awaiting your review</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={reviewUrl}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Re-analyze
            </a>
            <a
              href={reviewUrl}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
            >
              <Check className="w-4 h-4" /> Approve & activate
            </a>
          </div>
        </div>
        {/* ── Section nav ── */}
        <div className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-1 overflow-x-auto no-scrollbar py-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === s.id ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="py-12 sm:py-16 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Generated from {dna.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center p-3 shrink-0">
                  {logoFailed ? (
                    <span className="text-3xl font-extrabold text-gray-900">{dna.brandName.charAt(0)}</span>
                  ) : (
                    <img src={dna.logoUrl} alt={`${dna.brandName} logo`} className="max-w-full max-h-full object-contain" onError={() => setLogoFailed(true)} />
                  )}
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">{dna.brandName}</h1>
                  <p className="text-lg text-gray-500 mt-1">{dna.tagline}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip color="gray">{dna.industry}</Chip>
                <Chip color="gray">{dna.brandArchetype} archetype</Chip>
                <Chip color="gray">{dna.tone} tone</Chip>
                <a href={dna.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors">
                  <Globe className="w-3.5 h-3.5" /> {dna.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <ConfidenceRing value={dna.enrichmentConfidence} />
            </div>
          </div>
        </header>

        {/* ── Overview ──────────────────────────────────────────────────── */}
        <section id="overview" ref={setRef('overview')} className="py-14 scroll-mt-32">
          <SectionHeader eyebrow="01 — Overview" title="The essence" subtitle="How Loraloop understands what this brand is, sells, and stands for. Every asset it generates starts here." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-gray-900 text-white rounded-2xl p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 mb-4">Elevator pitch</p>
              <p className="text-xl sm:text-2xl leading-relaxed font-medium">{dna.elevatorPitch}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-3">Value proposition</p>
                <p className="text-sm text-violet-900 leading-relaxed">{dna.valueProposition}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Brand values</p>
                <div className="flex flex-wrap gap-2">
                  {dna.brandValues.map((v) => (
                    <Chip key={v} color="violet">{v}</Chip>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">What they sell</p>
              <p className="text-base text-gray-700 leading-relaxed">{dna.productDescription}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Unique selling points</p>
              <ol className="space-y-3">
                {dna.uniqueSellingPoints.map((usp, i) => (
                  <li key={usp} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm text-gray-700">{usp}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Voice & Tone ──────────────────────────────────────────────── */}
        <section id="voice" ref={setRef('voice')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="02 — Voice & Tone" title="How the brand sounds" subtitle="The personality every caption, ad, and reply will carry — and the words it will never use." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-4 h-4 text-violet-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Personality</p>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">{dna.tone}</p>
              <p className="text-sm text-gray-500 mb-5">{dna.communicationStyle} · {dna.formality}</p>
              <div className="flex flex-wrap gap-2">
                {dna.voiceCharacteristics.map((c) => (
                  <Chip key={c} color="violet">{c}</Chip>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-violet-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Messaging themes</p>
              </div>
              <ul className="space-y-3">
                {dna.messagingThemes.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                    <span className="capitalize">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Hash className="w-4 h-4 text-emerald-600" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Lean into</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dna.preferredHashtags.map((h) => (
                    <Chip key={h} color="green">{h}</Chip>
                  ))}
                </div>
              </div>
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Ban className="w-4 h-4 text-red-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">Never say</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dna.prohibitedWords.map((w) => (
                    <Chip key={w} color="red">“{w}”</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Audience ──────────────────────────────────────────────────── */}
        <section id="audience" ref={setRef('audience')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="03 — Audience" title="Who the brand talks to" subtitle="The people behind the metrics — what drives them, what they dream of, and what keeps them up at night." />
          <div className="bg-violet-600 rounded-2xl p-8 sm:p-10 mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200 mb-4">Target audience</p>
            <p className="text-xl sm:text-2xl text-white leading-relaxed font-medium max-w-3xl">{dna.targetAudience}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-3">Motivations</p>
              <ul className="space-y-2">
                {dna.audiencePsychology.motivations.map((m) => (
                  <li key={m} className="text-sm text-gray-600 capitalize">{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-3">Aspirations</p>
              <ul className="space-y-2">
                {dna.audiencePsychology.aspirations.map((a) => (
                  <li key={a} className="text-sm text-gray-600 capitalize">{a}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-3">Fears</p>
              <ul className="space-y-2">
                {dna.audiencePsychology.fears.map((f) => (
                  <li key={f} className="text-sm text-gray-600 capitalize">{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Positioning ───────────────────────────────────────────────── */}
        <section id="positioning" ref={setRef('positioning')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="04 — Positioning" title="Where the brand wins" subtitle="The market position Loraloop will defend in every piece of content, and who it is up against." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-violet-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Market position</p>
              </div>
              <p className="text-lg text-gray-900 font-medium leading-relaxed mb-6">{dna.positioning}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Differentiators</p>
              <ul className="space-y-2.5">
                {dna.differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Swords className="w-4 h-4 text-violet-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Competitive set</p>
              </div>
              <div className="space-y-2.5">
                {dna.competitors.map((c) => (
                  <div key={c.id} className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-900">{c.handle}</span>
                    <span className="text-xs text-gray-400 capitalize">{c.platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Content Strategy ──────────────────────────────────────────── */}
        <section id="content" ref={setRef('content')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="05 — Content Strategy" title="What the brand publishes" subtitle="The pillars and channels Loraloop will rotate through when planning calendars and generating posts." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {dna.contentPillars.map((pillar, i) => (
              <div key={pillar} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-violet-200 transition-colors">
                <p className="text-3xl font-extrabold text-gray-200 mb-4">0{i + 1}</p>
                <p className="text-base font-bold text-gray-900 capitalize">{pillar}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Content mix</p>
              <p className="text-sm text-gray-700 leading-relaxed">{dna.contentMix}</p>
            </div>
            <div className="shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Primary channels</p>
              <div className="flex gap-2">
                {dna.socialPlatforms.map((p) => (
                  <Chip key={p} color="violet">{p}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Visual Identity ───────────────────────────────────────────── */}
        <section id="visual" ref={setRef('visual')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="06 — Visual Identity" title="How the brand looks" subtitle="Colors, style, and imagery pulled from the brand's site. Tap a swatch to copy its hex code." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {dna.colorSwatches.map((s) => (
              <ColorSwatch key={s.hex} {...s} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Visual style</p>
              <p className="text-sm text-gray-700 leading-relaxed">{dna.visualStyle}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Palette usage</p>
              <p className="text-sm text-gray-700 leading-relaxed">{dna.colorPaletteNote}</p>
            </div>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Product lineup</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {dna.productImages.map((src) => (
              <div key={src} className="w-28 h-36 shrink-0 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-2">
                <img src={src} alt={`${dna.brandName} product`} loading="lazy" className="max-w-full max-h-full object-contain" onError={hideTileOnError} />
              </div>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Brand imagery</p>
          <div className="columns-2 md:columns-3 gap-3 [&>img]:mb-3">
            {dna.galleryImages.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${dna.brandName} brand imagery`}
                loading="lazy"
                className="w-full rounded-xl border border-gray-100 break-inside-avoid"
                onError={hideOnError}
              />
            ))}
          </div>
        </section>

        {/* ── Sources ───────────────────────────────────────────────────── */}
        <section id="sources" ref={setRef('sources')} className="py-14 border-t border-gray-100 scroll-mt-32">
          <SectionHeader eyebrow="07 — Sources" title="Where this came from" subtitle={`Loraloop analyzed ${dna.pagesScraped.length} pages on ${validatedDate} to build this profile.`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {dna.pagesScraped.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 hover:bg-violet-50 rounded-xl transition-colors"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Globe className="w-4 h-4 text-gray-400 group-hover:text-violet-500 shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-violet-700 truncate">{url.replace(/^https?:\/\//, '')}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-violet-500 shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* ── Approval footer ───────────────────────────────────────────── */}
        <div className="pb-16">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">Does this feel like {dna.brandName}?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Approve this Brand DNA and Loraloop will use it to ground every caption, creative, and campaign it generates. You can refine any section later.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={reviewUrl} className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-500 transition-colors">
                <Check className="w-5 h-5" /> Approve & activate
              </a>
              <a href={reviewUrl} className="inline-flex items-center gap-2 px-6 py-3 text-gray-300 font-semibold rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors">
                Edit in Loraloop <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
