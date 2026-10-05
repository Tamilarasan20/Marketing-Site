import type { ReactNode } from 'react';
import { Link } from 'react-router';
import '../data/registerAdditionalBlogData';
import { getBlogPostBySlug } from '../data/blogData';
import { getCalculator } from '../data/calculatorsData';
import NextToolsSection from './NextToolsSection';
import ToolCtaSection from './ToolCtaSection';

interface Props {
  slug: string;
  children: ReactNode;
}

/** Shared chrome for the interactive calculators: header, how-to, benchmarks, FAQ, related posts. */
export default function CalculatorLayout({ slug, children }: Props) {
  const info = getCalculator(slug);
  if (!info) return null;
  const related = info.relatedPosts.map((s) => getBlogPostBySlug(s)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10">
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link>
        <span>/</span>
        <Link to="/tools" className="hover:text-violet-600">Free AI Tools</Link>
        <span>/</span>
        <span className="text-gray-700">{info.name}</span>
      </nav>

      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Link to="/tools" className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors">FREE CALCULATOR</Link>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Runs in your browser · Nothing stored</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">{info.name}</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">{info.intro}</p>
      </div>

      {children}

      <div className="mt-12 space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to use the {info.name.toLowerCase()}</h2>
          <ol className="space-y-3 text-sm text-gray-600">
            {info.howTo.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-violet-50 text-violet-600 font-bold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {info.benchmarks && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Benchmarks practitioners use</h2>
            <p className="text-sm text-gray-500 mb-4">Rules of thumb from media buyers, not platform figures. Your own account average is the better baseline.</p>
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead>
                <tr className="text-gray-900 border-b border-gray-200">
                  <th className="py-2 pr-4 font-bold">Metric</th><th className="py-2 pr-4 font-bold text-red-600">Weak</th><th className="py-2 pr-4 font-bold text-amber-600">Acceptable</th><th className="py-2 font-bold text-emerald-600">Strong</th>
                </tr>
              </thead>
              <tbody>
                {info.benchmarks.map((b, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0 text-gray-600">
                    <td className="py-2 pr-4 font-medium text-gray-800">{b.label}</td><td className="py-2 pr-4">{b.weak}</td><td className="py-2 pr-4">{b.ok}</td><td className="py-2">{b.strong}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="flex flex-col gap-3">
            {info.faq.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none bg-gray-50 hover:bg-violet-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                  <span className="text-violet-600 text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t border-gray-200">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Go deeper</h2>
            <ul className="space-y-2">
              {related.map((p) => p && (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-sm font-semibold text-violet-700 hover:underline">{p.title}</Link>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <NextToolsSection currentSlug={slug} />
      <ToolCtaSection />
    </div>
  );
}

/** Small presentational helpers shared by the calculators. */
export function Field({ label, hint, value, onChange, prefix, suffix, step = 'any', min = 0 }: {
  label: string; hint?: string; value: string; onChange: (v: string) => void; prefix?: string; suffix?: string; step?: string; min?: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-800 mb-1">{label}</span>
      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-violet-500 bg-white">
        {prefix && <span className="px-3 text-gray-400 text-sm">{prefix}</span>}
        <input type="number" inputMode="decimal" min={min} step={step} value={value} onChange={(e) => onChange(e.target.value)} className="flex-1 min-w-0 px-3 py-3 text-sm focus:outline-none" />
        {suffix && <span className="px-3 text-gray-400 text-sm">{suffix}</span>}
      </div>
      {hint && <span className="block text-xs text-gray-400 mt-1 leading-relaxed">{hint}</span>}
    </label>
  );
}

export type Band = 'weak' | 'ok' | 'strong' | 'na';

export function Stat({ label, value, band = 'na', note }: { label: string; value: string; band?: Band; note?: string }) {
  const color = band === 'weak' ? 'text-red-600 bg-red-50 border-red-100' : band === 'ok' ? 'text-amber-700 bg-amber-50 border-amber-100' : band === 'strong' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-gray-900 bg-gray-50 border-gray-200';
  const tag = band === 'weak' ? 'Weak' : band === 'ok' ? 'Acceptable' : band === 'strong' ? 'Strong' : null;
  return (
    <div className={`rounded-xl border p-4 ${color}`}>
      <div className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</div>
      <div className="text-2xl font-extrabold mt-1">{value}</div>
      {tag && <div className="text-xs font-bold mt-1">{tag}</div>}
      {note && <div className="text-xs mt-2 leading-relaxed opacity-80">{note}</div>}
    </div>
  );
}

export const fmtPct = (n: number) => (Number.isFinite(n) ? `${(n * 100).toFixed(1)}%` : '–');
export const fmtMoney = (n: number) => (Number.isFinite(n) ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }) : '–');
export const num = (s: string) => { const n = parseFloat(s); return Number.isFinite(n) ? n : NaN; };
