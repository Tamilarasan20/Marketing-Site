import { Link, useParams } from 'react-router';
import { Check, ChevronRight } from 'lucide-react';
import '../data/registerAdditionalBlogData';
import { getBlogPostBySlug } from '../data/blogData';
import { comparisons, getComparison } from '../data/comparisons';

const h2 = "font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-2xl md:text-3xl mt-12 mb-4 tracking-[-0.5px]";
const p = "font-['General_Sans',sans-serif] font-medium text-[#374151] text-lg leading-[1.8]";

export function CompareIndex() {
  return (
    <div className="bg-white pt-24 md:pt-32 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[960px] mx-auto">
        <h1 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-4xl md:text-5xl tracking-[-1.5px] mb-4">Compare Loraloop</h1>
        <p className={p}>Side-by-side comparisons with the tools buyers evaluate alongside Loraloop. Competitor descriptions are kept general and verifiable; check each vendor for current pricing.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {comparisons.map((c) => (
            <li key={c.slug}>
              <Link to={`/compare/${c.slug}`} className="block rounded-2xl border border-[#e2e8f0] p-6 hover:border-[#1877f2] hover:shadow-md transition-all">
                <h2 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-xl mb-2">{c.title}</h2>
                <p className="font-['General_Sans',sans-serif] text-[#64748b] text-sm leading-relaxed">{c.description}</p>
                <span className="inline-flex items-center gap-1 text-[#1877f2] text-sm font-bold mt-3">Read comparison <ChevronRight size={14} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Compare() {
  const { slug } = useParams();
  const c = slug ? getComparison(slug) : undefined;
  if (!c) {
    return (
      <div className="bg-white pt-32 pb-20 px-4 text-center">
        <h1 className="font-['Satoshi',sans-serif] font-bold text-4xl text-[#1f2937]">Comparison not found</h1>
        <Link to="/compare" className="text-[#1877f2] hover:underline mt-4 inline-block text-xl">← All comparisons</Link>
      </div>
    );
  }
  const post = getBlogPostBySlug(c.blogSlug);

  return (
    <div className="bg-white pt-24 md:pt-32 pb-24 px-4 sm:px-6 md:px-20">
      <article className="max-w-[960px] mx-auto">
        <nav className="flex gap-2 items-center text-sm font-['General_Sans',sans-serif] text-[#64748b] mb-6">
          <Link to="/compare" className="hover:text-[#1877f2]">Compare</Link><ChevronRight size={14} className="text-[#cbd5e1]" /><span>{c.title}</span>
        </nav>
        <h1 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-4xl md:text-5xl tracking-[-1.5px] mb-5 leading-[1.1]">{c.title}: which fits your team in 2026?</h1>
        <p className={p}>{c.intro}</p>
        <p className="font-['General_Sans',sans-serif] text-[#64748b] text-sm mt-3">Updated {c.updated}. Competitor details are general descriptions; see <a href={c.competitorUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline">{c.competitor}</a> for current features and pricing.</p>

        <div className="border-l-[5px] border-[#1877f2] bg-gradient-to-r from-[#eff6ff] to-[#f8faff] rounded-r-2xl px-6 py-5 mt-8">
          <p className="font-['Satoshi',sans-serif] font-bold text-[#1e40af] text-lg leading-[1.7]">Verdict: {c.verdict}</p>
        </div>

        <h2 className={h2}>{c.title} at a glance</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]">
          <table className="w-full min-w-[640px] border-collapse text-left font-['General_Sans',sans-serif]">
            <thead className="bg-[#f8fafc]"><tr>{c.table.headers.map((h, i) => <th key={i} className="px-4 py-3 font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-sm border-b border-[#e2e8f0]">{h}</th>)}</tr></thead>
            <tbody>{c.table.rows.map((r, i) => <tr key={i} className="border-b border-[#f1f5f9] last:border-b-0">{r.map((cell, j) => <td key={j} className={`px-4 py-3 text-[15px] leading-[1.6] align-top ${j === 0 ? 'font-bold text-[#0f172a]' : 'font-medium text-[#374151]'}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-2xl border border-[#e2e8f0] p-6">
            <h2 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-xl mb-4">Choose {c.competitor} if</h2>
            <ul className="space-y-3">{c.chooseCompetitor.map((t, i) => <li key={i} className="flex gap-3 text-[#374151] font-['General_Sans',sans-serif] leading-relaxed"><Check size={18} className="text-[#64748b] shrink-0 mt-1" />{t}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-[#1877f2] bg-[#f8faff] p-6">
            <h2 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-xl mb-4">Choose Loraloop if</h2>
            <ul className="space-y-3">{c.chooseLoraloop.map((t, i) => <li key={i} className="flex gap-3 text-[#374151] font-['General_Sans',sans-serif] leading-relaxed"><Check size={18} className="text-[#1877f2] shrink-0 mt-1" />{t}</li>)}</ul>
          </div>
        </div>

        <h2 className={h2}>Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          {c.faq.map((item, i) => (
            <details key={i} className="border border-[#e2e8f0] rounded-2xl overflow-hidden group">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none bg-[#f8fafc] hover:bg-[#f0f7ff]"><span className="font-['Satoshi',sans-serif] font-bold text-[#0f172a]">{item.q}</span><span className="text-[#1877f2] text-xl font-bold group-open:rotate-45 transition-transform">+</span></summary>
              <p className="px-6 py-5 border-t border-[#e2e8f0] font-['General_Sans',sans-serif] text-[#475569] leading-[1.8]">{item.a}</p>
            </details>
          ))}
        </div>

        {post && (
          <p className={`${p} mt-10`}>Want the long version? Read <Link to={`/blog/${post.slug}`} className="text-[#1877f2] font-bold hover:underline">{post.title}</Link>.</p>
        )}

        <div className="bg-gradient-to-br from-[#1877f2] to-[#0d5ed9] rounded-3xl p-8 md:p-10 mt-12 text-white">
          <p className="font-['Satoshi',sans-serif] font-bold text-xl md:text-2xl mb-6">See how Loraloop runs your Meta ads with approvals. Free trial, no credit card.</p>
          <a href="https://app.loraloop.com/signup" className="inline-block bg-white text-[#1877f2] font-['Satoshi',sans-serif] font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">Try Loraloop Free →</a>
        </div>
      </article>
    </div>
  );
}
