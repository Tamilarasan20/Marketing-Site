import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'Why should I analyze my competitors?', a: "Competitor analysis reveals what's working in your market, what gaps exist, and how to position yourself differently. The goal isn't to copy — it's to find the white space they're ignoring and own it." },
  { q: 'What should I look for in a competitor analysis?', a: "Look for: what content performs best for them, how they position themselves, what their audience responds to, and — most importantly — what they're NOT doing. The gaps are your opportunity." },
  { q: 'How often should I do a competitor audit?', a: 'Quarterly is ideal for a full audit. Monthly, do a quick check: scan their top posts, note any new positioning or offers, and update your strategy accordingly.' },
  { q: "What if my competitor doesn't have much social media content?", a: "That's actually useful data. Low competitor content presence means you can dominate with consistent content. Even a little gives the AI enough to identify their strategy and your opportunities." },
  { q: 'How do I use competitive insights without just copying?', a: "Use their gaps, not their wins. If they excel at educational content, you beat them with community content. Your differentiation comes from doing what they can't or won't do." },
];

export default function CompetitorAudit() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ yourBusiness: '', competitorName: '', competitorBio: '', recentPosts: '', platform: 'Instagram' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">All AI Tools</Link><span>/</span>
        <span className="text-gray-700">Competitor Social Audit Tool</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔍</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Competitor Social Media Audit Tool</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Paste your competitor's bio and recent posts. Get a full analysis of their strategy, gaps you can exploit, and specific content ideas to outperform them.</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3">
        <span className="text-amber-600 text-lg flex-shrink-0">💡</span>
        <p className="text-sm text-amber-800"><strong>How to use this tool:</strong> Go to your competitor's social profile. Copy their bio/about section and paste 3-5 of their recent posts or captions below. The more specific the input, the sharper the analysis.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Enter competitor details</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('competitor-audit', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Your business / niche *</label><input type="text" value={formData.yourBusiness} onChange={(e) => update('yourBusiness', e.target.value)} placeholder="e.g. Organic baby food brand" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Competitor name *</label><input type="text" value={formData.competitorName} onChange={(e) => update('competitorName', e.target.value)} placeholder="e.g. Little Spoon" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label><select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Instagram</option><option>TikTok</option><option>LinkedIn</option><option>Twitter/X</option><option>Facebook</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Their bio / about section *</label><textarea value={formData.competitorBio} onChange={(e) => update('competitorBio', e.target.value)} placeholder="Paste their Instagram bio, LinkedIn about section, or website tagline here..." required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Their recent posts / captions (paste 3-5) *</label><textarea value={formData.recentPosts} onChange={(e) => update('recentPosts', e.target.value)} placeholder={'Post 1:\n"[paste caption here]"\n\nPost 2:\n"[paste caption here]"'} required rows={8} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" /><p className="text-xs text-gray-400 mt-1.5">The more content you paste, the better the analysis.</p></div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Analyzing competitor...</span> : 'Audit This Competitor →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Competitor Analysis</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Now execute a content strategy that beats them — with Loraloop.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop turns your output into an automated marketing system on autopilot.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="You found the gaps. Now let Loraloop fill them." subtext="Loraloop creates content targeting every gap in your competitor's strategy — consistently, on-brand, and automatically." />
      <div className="mt-12"><h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3><div className="space-y-1">{ faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}</div></div>
      <NextToolsSection currentSlug="competitor-audit" />
      <ToolCtaSection />
    </div>
  );
}
