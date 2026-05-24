import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../components/CTABanner';
import { useStreamGeneration } from '../hooks/useStreamGeneration';

const faqs = [
  { q: 'What is a marketing strategy?', a: 'A marketing strategy is the plan for how you will reach, attract, and convert your target customers. It defines who you are targeting, which channels you will use, what you will say, and how you will measure success.' },
  { q: 'How do I know which marketing channels to focus on?', a: "Go where your audience already is. B2B with decision-makers? LinkedIn. Gen Z consumers? TikTok. Local service business? Google Maps + SEO. The best channel is where your specific customer spends time." },
  { q: "What's more important: paid or organic marketing?", a: "Both, in sequence. Organic (content, SEO) builds long-term compounding growth but takes 3-6 months to gain traction. Paid (ads) gives fast results but stops the moment you stop spending." },
  { q: 'How long does it take to see marketing results?', a: "Paid ads: 2-4 weeks. Social media organic: 3-6 months. SEO: 6-12 months. Email marketing: 30-60 days. The businesses that fail at marketing usually give up 2 weeks before the results would have appeared." },
  { q: "What's the difference between a marketing strategy and a marketing plan?", a: "Strategy is the what and why — your positioning, target audience, channels, and messaging. A plan is the how and when — the specific tasks, timeline, and budget." },
];
const relatedTools = [
  { name: 'Content Pillar Generator', to: '/tools/content-pillars' },
  { name: 'Ad Copy Generator', to: '/tools/ad-copy' },
  { name: 'Competitor Audit Tool', to: '/tools/competitor-audit' },
];

export default function MarketingStrategy() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ businessType: '', product: '', audience: '', budget: '$500–$2,000/month', goal: 'Generate leads', channels: '', timeline: '90 days' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <span className="text-gray-600">Marketing Strategy Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🗺️</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Marketing Strategy Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Get a complete go-to-market strategy — positioning, recommended channels, content approach, action plan, and KPIs — in minutes.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Build your strategy</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('marketing-strategy', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business type *</label><input type="text" value={formData.businessType} onChange={(e) => update('businessType', e.target.value)} placeholder="e.g. SaaS startup, eCommerce brand, service business" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline *</label><select value={formData.timeline} onChange={(e) => update('timeline', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>30 days</option><option>90 days</option><option>6 months</option></select></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Your product / service *</label><textarea value={formData.product} onChange={(e) => update('product', e.target.value)} placeholder="e.g. Project management software for creative agencies. $49/month." required rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label><input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Creative agency owners, 5-30 employees, struggling with project scope creep" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly marketing budget *</label><select value={formData.budget} onChange={(e) => update('budget', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Under $500/month</option><option>$500–$2,000/month</option><option>$2,000–$5,000/month</option><option>$5,000+/month</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Primary goal *</label><select value={formData.goal} onChange={(e) => update('goal', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Brand awareness</option><option>Generate leads</option><option>Drive direct sales</option><option>Customer retention</option></select></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Current marketing channels <span className="text-gray-400 font-normal">(optional)</span></label><input type="text" value={formData.channels} onChange={(e) => update('channels', e.target.value)} placeholder="e.g. Instagram (200 followers), email list (150 subscribers), no paid ads yet" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Building your marketing strategy...</span> : 'Generate Marketing Strategy →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Marketing Strategy</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Strategy done. Let Loraloop execute it for you.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop turns your output into an automated marketing system — running your marketing while you focus on the business.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Strategy is only useful when someone executes it." subtext="Loraloop takes your marketing strategy and runs it — content creation, scheduling, ads, and reporting. You stay in control, Loraloop does the work." />
      <div className="mt-12"><h3 className="text-lg font-bold text-gray-900 mb-4">Related tools</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{relatedTools.map((tool) => (<Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all"><p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p><p className="text-xs text-violet-600">Try free →</p></Link>))}</div></div>
      <div className="mt-12"><h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3><div className="space-y-1">{faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}</div></div>
    </div>
  );
}
