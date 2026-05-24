import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';

const faqs = [
  { q: 'What makes good ad copy?', a: "Good ad copy does four things: stops the scroll (hook), creates desire (benefits + emotion), removes doubt (social proof or guarantee), and drives action (specific CTA)." },
  { q: 'How long should Facebook ad copy be?', a: "Cold audiences need more context — 150-300 words. Warm audiences (retargeting) can be much shorter. The rule isn't short or long — it's as long as it needs to be to convert." },
  { q: "What's the most important part of an ad?", a: "The hook — by a wide margin. On social media, you have 1.5-3 seconds to stop a scroll. A brilliant body copy means nothing if nobody reads it." },
  { q: 'How many ad variations should I test?', a: "Start with 3 variations minimum: an emotional angle, a direct-response angle, and a social proof angle. Run them with equal budget for 3-5 days. Cut the losers, scale the winner." },
  { q: "What's a hook and why does it matter in ads?", a: "The hook is your opening line — the first thing someone sees before they decide to stop or scroll. It's the most important line in any ad." },
];
const relatedTools = [
  { name: 'Hook Generator', to: '/tools/hook-generator' },
  { name: 'Landing Page Copy Generator', to: '/tools/landing-page-copy' },
  { name: 'Marketing Strategy Generator', to: '/tools/marketing-strategy' },
];

export default function AdCopy() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ product: '', description: '', audience: '', painPoint: '', offer: '', platform: 'Facebook/Instagram' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <span className="text-gray-600">Ad Copy Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📣</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Ad Copy Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate 3 complete, high-converting ad copy variations for Facebook, Instagram, TikTok, and Google — with hooks, body copy, headlines, and CTAs.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Build your ad</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('ad-copy', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Product / service name *</label>
              <input type="text" value={formData.product} onChange={(e) => update('product', e.target.value)} placeholder="e.g. FitPlan Pro" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label>
              <select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Facebook/Instagram</option><option>TikTok</option><option>Google</option><option>LinkedIn</option><option>YouTube</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What does it do? *</label>
            <textarea value={formData.description} onChange={(e) => update('description', e.target.value)} placeholder="e.g. AI-powered workout app that creates personalized 30-minute home workouts for busy professionals" required rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Professionals 28-45, no time to go to the gym, want to stay fit working from home" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Main pain point your product solves *</label>
            <input type="text" value={formData.painPoint} onChange={(e) => update('painPoint', e.target.value)} placeholder="e.g. No time for long workouts, gym memberships wasted, don't know what exercises to do" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your offer / deal *</label>
            <input type="text" value={formData.offer} onChange={(e) => update('offer', e.target.value)} placeholder="e.g. 14-day free trial, then $19.99/month. Cancel anytime." required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Writing your ad copy...</span> : 'Generate 3 Ad Variations →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Ad Copy</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Launch, test, and optimize these ads with Loraloop.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop turns your output into an automated marketing system — running your marketing while you focus on the business.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Ad copy written. Now let Loraloop launch and optimize it." subtext="Loraloop handles the full ad workflow — creative generation, A/B testing, budget optimization, and reporting. All in one platform." />
      <div className="mt-12"><h3 className="text-lg font-bold text-gray-900 mb-4">Related tools</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{relatedTools.map((tool) => (<Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all"><p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p><p className="text-xs text-violet-600">Try free →</p></Link>))}</div></div>
      <div className="mt-12"><h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3><div className="space-y-1">{faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}</div></div>
    </div>
  );
}
