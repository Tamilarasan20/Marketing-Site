import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';

const faqs = [
  { q: 'What is a landing page?', a: "A landing page is a single web page designed for one specific goal — getting a visitor to take one action (sign up, buy, book, download). Unlike a homepage, a landing page eliminates distractions and focuses entirely on conversion." },
  { q: 'How long should landing page copy be?', a: "As long as it needs to overcome objections. For low-price or free offers: shorter (300-500 words). For high-ticket products: longer (1,000-2,000 words). The common mistake is cutting copy to look 'clean' rather than to convert better." },
  { q: "What's the most important element on a landing page?", a: "The headline. It must communicate what you offer, who it's for, and why it matters — in under 10 words." },
  { q: 'How many CTAs should a landing page have?', a: "One clear action, but multiple CTA buttons. Pick one action and repeat the CTA button 3-4 times: above the fold, after benefits, after social proof, and at the bottom." },
  { q: "What's the difference between a landing page and a homepage?", a: "A homepage serves multiple audiences and goals. A landing page serves one audience and one goal. If you're running ads, always send traffic to a landing page. The difference in conversion rate is typically 3-5x." },
];
const relatedTools = [
  { name: 'Ad Copy Generator', to: '/tools/ad-copy' },
  { name: 'Product Description Generator', to: '/tools/product-description' },
  { name: 'Brand Voice Generator', to: '/tools/brand-voice' },
];

export default function LandingPageCopy() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ product: '', description: '', audience: '', benefit: '', price: 'Under $50', ctaGoal: 'Sign up / get started' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <span className="text-gray-600">Landing Page Copy Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📄</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Landing Page Copy Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate complete, conversion-ready landing page copy — hero section, benefits, social proof, FAQ, and CTA — written to convert, not just impress.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about your offer</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('landing-page-copy', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Product / service name *</label><input type="text" value={formData.product} onChange={(e) => update('product', e.target.value)} placeholder="e.g. ContentFlow" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Primary CTA goal *</label><select value={formData.ctaGoal} onChange={(e) => update('ctaGoal', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Sign up / get started</option><option>Book a call / demo</option><option>Buy now</option><option>Download / get access</option><option>Join waitlist</option></select></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">What does it do? *</label><textarea value={formData.description} onChange={(e) => update('description', e.target.value)} placeholder="e.g. AI-powered content scheduling tool that creates and schedules a month of social media content in 10 minutes" required rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label><input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Solopreneurs and freelancers who know they should post consistently but never have time" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Main benefit / outcome customers get *</label><input type="text" value={formData.benefit} onChange={(e) => update('benefit', e.target.value)} placeholder="e.g. A full month of on-brand social content without spending hours writing captions" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Price point *</label><select value={formData.price} onChange={(e) => update('price', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Free</option><option>Under $50</option><option>$50–$200</option><option>$200–$1,000</option><option>$1,000+ / Enterprise</option></select></div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Writing your landing page...</span> : 'Generate Landing Page Copy →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Landing Page Copy</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Now drive traffic to this landing page with Loraloop.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop turns your output into an automated marketing system on autopilot.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Great copy needs traffic. Loraloop sends both." subtext="Loraloop creates the social content and ads that drive qualified traffic to your landing page — all on-brand and on autopilot." />
      <div className="mt-12"><h3 className="text-lg font-bold text-gray-900 mb-4">Related tools</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{ relatedTools.map((tool) => (<Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all"><p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p><p className="text-xs text-violet-600">Try free →</p></Link>))}</div></div>
      <div className="mt-12"><h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3><div className="space-y-1">{ faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}</div></div>
    </div>
  );
}
