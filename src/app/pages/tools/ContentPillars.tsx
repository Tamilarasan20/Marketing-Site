import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'What are content pillars?', a: 'Content pillars are the core themes your brand consistently creates content around. Instead of randomly posting, you organize everything under 3-5 pillars — making your content strategic, cohesive, and easier to plan.' },
  { q: 'How many content pillars should I have?', a: '3-5 is ideal. Too few and your content feels repetitive. Too many and you lose focus. For most small businesses, 4 pillars give enough variety while keeping a clear brand identity.' },
  { q: 'How do I use content pillars to create posts?', a: 'Each week, rotate through your pillars. If you post 4x per week and have 4 pillars, each pillar gets one post per week. This ensures balanced content that serves awareness, trust-building, and conversion goals.' },
  { q: 'What is the difference between content pillars and content categories?', a: "Categories are broad buckets. Pillars are specific to YOUR brand — they combine the topic AND your unique angle. 'Behind the scenes' is a category. 'How we source ethical ingredients' is a content pillar for a food brand." },
  { q: 'How often should I revisit my content pillars?', a: 'Review them quarterly. Your business, audience, and goals evolve. What worked 6 months ago may need refreshing. Major pivots, new products, or seasonal shifts are all good reasons to revisit.' },
];

export default function ContentPillars() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ niche: '', audience: '', goals: '', pillars: '5' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">Free AI Tools</Link><span>/</span>
        <span className="text-gray-700">Content Pillar Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🏛️</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Content Pillar Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Build a complete content strategy foundation — 3 to 5 specific content pillars with 10 post ideas each, a content mix, and a weekly schedule.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Define your content strategy</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('content-pillars', formData); }} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Business niche *</label>
            <input type="text" value={formData.niche} onChange={(e) => update('niche', e.target.value)} placeholder="e.g. Personal finance coaching for millennials" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Millennials 25-38, earning $50-80K, drowning in debt, want to invest" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Main content goals *</label>
            <input type="text" value={formData.goals} onChange={(e) => update('goals', e.target.value)} placeholder="e.g. Build authority, generate leads for 1:1 coaching, educate audience on investing" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of content pillars *</label>
            <div className="flex gap-3">
              {["3","4","5"].map((n) => (
                <button key={n} type="button" onClick={() => update('pillars', n)} className={`flex-1 py-3 rounded-lg text-sm font-medium border transition-colors ${formData.pillars === n ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-300 hover:border-violet-300'}`}>{n} Pillars</button>
              ))}
            </div>
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Building your content pillars...</span> : 'Generate Content Pillars →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Content Pillar Framework</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Let Loraloop turn these pillars into weekly posts — automatically.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop schedules and creates content across your pillars every week, so you never wonder what to post.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Content pillars planned. Now let Loraloop fill every slot." subtext="Loraloop takes your content pillars and auto-creates brand-consistent posts for every slot in your calendar, every week." />
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3>
        <div className="space-y-1">
          {faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}
        </div>
      </div>
      <NextToolsSection currentSlug="content-pillars" />
      <ToolCtaSection />
    </div>
  );
}
