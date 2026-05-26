import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'What makes a good hook?', a: 'A good hook does one thing: it makes the viewer feel that stopping would cost them something. The best hooks create an information gap, trigger an emotion (fear, curiosity, hope), or make a bold statement that demands a response.' },
  { q: 'How long should a hook be?', a: 'For video: 1-3 seconds (3-7 words spoken). For text/carousels: one bold line, ideally under 10 words. The hook is not the content — it is the door. Get them through it fast.' },
  { q: 'Do the same hooks work on all platforms?', a: "No. TikTok hooks need to work at double speed with no sound. LinkedIn hooks need to front-load value for professionals. Instagram Reels favor trending audio + visual hook combos. This tool generates hooks optimized for your chosen platform." },
  { q: 'How many hook variations should I test?', a: 'Test at least 3 per piece of content if you can. Track completion rate (for video) or engagement rate (for posts). The winning hook for one audience or topic may completely flop for another.' },
  { q: "What's the psychology behind viral hooks?", a: "Viral hooks exploit 4 core psychological triggers: curiosity (information gap), social proof, fear of missing out, and identity (this describes you exactly). The best hooks combine 2 of these." },
];
export default function HookGenerator() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ topic: '', audience: '', platform: 'TikTok', angle: 'Educational' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">All AI Tools</Link><span>/</span>
        <span className="text-gray-700">Hook Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🪝</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Hook Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate 15 scroll-stopping hooks for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and ads — organized by psychological trigger type.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Generate your hooks</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('hook-generator', formData); }} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic or niche *</label>
            <input type="text" value={formData.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. How to pay off student debt in 3 years on a teacher's salary" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Recent graduates struggling with $40-80K in student loan debt" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label>
              <select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>TikTok</option><option>Instagram Reels</option><option>YouTube Shorts</option><option>LinkedIn</option><option>Twitter/X</option><option>Facebook Ads</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Content angle *</label>
              <select value={formData.angle} onChange={(e) => update('angle', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Educational</option><option>Story-based</option><option>Controversial / Hot take</option><option>Pain-point focused</option><option>Result / Transformation</option>
              </select>
            </div>
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating your hooks...</span> : 'Generate 15 Hooks →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Hooks</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Turn these hooks into complete posts and scripts with Loraloop.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop takes your best hook, builds the full caption or script, and schedules it — automatically.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Great hooks deserve great content behind them." subtext="Loraloop takes your hook and auto-builds the full caption, script, or ad copy — then schedules it to post at the optimal time." />
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3>
        <div className="space-y-1">
          {faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}
        </div>
      </div>
      <NextToolsSection currentSlug="hook-generator" />
      <ToolCtaSection />
    </div>
  );
}
