import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'What is a brand voice?', a: "Brand voice is the consistent personality and tone your business uses across all content — social posts, ads, emails, website copy. It's what makes your content feel unmistakably yours, even without your logo." },
  { q: 'Why does brand voice matter for marketing?', a: 'Consistent brand voice builds trust and recognition. Research shows brands that communicate consistently across channels are 3-4x more likely to have excellent brand visibility. Your voice differentiates you from competitors saying the same things.' },
  { q: 'How is a brand voice guide different from a style guide?', a: "A style guide covers visual rules (fonts, colors, logo usage). A brand voice guide covers how you sound — your personality, word choices, tone shifts across contexts, and messaging examples. Both are essential; they serve different purposes." },
  { q: 'Can I use this for any type of business?', a: 'Yes. The generator works for eCommerce brands, service businesses, SaaS products, personal brands, agencies, coaches, and more. The more specific your inputs, the more specific and useful your brand voice guide.' },
  { q: 'What should I do with my brand voice guide once I have it?', a: "Share it with anyone creating content for you — team members, freelancers, AI tools. Use it to brief ad creative. Reference it before writing any caption or email. Inside Loraloop, you can import it so every piece of generated content automatically matches your voice." },
];


export default function BrandVoice() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ businessName: '', description: '', audience: '', personality: '', admiredBrands: '', platform: 'Instagram' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">All AI Tools</Link><span>/</span>
        <span className="text-gray-700">Brand Voice Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎯</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Brand Voice Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Create a complete brand personality guide — tone of voice, word choices, example captions, and content pillars — in under 60 seconds.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about your business</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('brand-voice', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name *</label>
              <input type="text" value={formData.businessName} onChange={(e) => update('businessName', e.target.value)} placeholder="e.g. Bloom Skincare" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Primary Platform *</label>
              <select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Instagram</option><option>TikTok</option><option>LinkedIn</option><option>Twitter/X</option><option>Multiple Platforms</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What do you sell? *</label>
            <textarea value={formData.description} onChange={(e) => update('description', e.target.value)} placeholder="e.g. Natural skincare products for women over 35 who want effective, science-backed formulas without harsh chemicals." required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Who is your target audience? *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Women 35-55, health-conscious, frustrated with products that promise results but don't deliver" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">3 words that describe your brand personality *</label>
            <input type="text" value={formData.personality} onChange={(e) => update('personality', e.target.value)} placeholder="e.g. Trustworthy, Warm, Empowering" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Any brands whose style you admire? <span className="text-gray-400 font-normal">(optional)</span></label>
            <input type="text" value={formData.admiredBrands} onChange={(e) => update('admiredBrands', e.target.value)} placeholder="e.g. Glossier, Patagonia, Oatly" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating your brand voice...</span> : 'Generate Brand Voice Guide →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Brand Voice Guide</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Turn this brand voice into a full 30-day content system.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop uses your brand voice to auto-generate captions, creatives, and scheduled posts — every month, automatically.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Your brand voice is ready. Now let Loraloop execute it." subtext="Turn this brand voice into a 30-day content calendar, auto-generated captions, creatives, and approval-ready posts inside Loraloop." />
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3>
        <div className="space-y-1">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <NextToolsSection currentSlug="brand-voice" />
      <ToolCtaSection />
    </div>
  );
}
