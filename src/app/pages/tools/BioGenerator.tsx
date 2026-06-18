import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'What makes a good social media bio?', a: "A great bio does three things: tells people who you are, what you do or offer, and why they should follow you — in under 150 characters for most platforms. It should include a keyword for discoverability, a clear value statement, and ideally a reason to click your link." },
  { q: 'Why do I need different bios for different platforms?', a: 'Each platform has different character limits, different audiences, and different norms. A LinkedIn bio reads professionally and is keyword-rich. A TikTok bio is short, punchy, and action-oriented. An Instagram bio is visual and personality-driven. One bio does not perform equally across all platforms.' },
  { q: 'How often should I update my bio?', a: 'Whenever your positioning, offer, or audience changes. If you launch a new product, shift your niche, or change your call-to-action, your bio should reflect that. Most creators and founders update their bios every 3–6 months.' },
  { q: 'Can I use this for a business account bio?', a: 'Yes. The generator works for personal brands, creator accounts, business pages, and company profiles. Specify your type in the inputs for best results.' },
  { q: 'What should I do after generating my bio?', a: "Test 2–3 versions from the output by using them on your platform and comparing follower growth and link clicks over 2–4 weeks. Inside Loraloop, you can store your final bio in your brand knowledge base so all future content stays consistent with your positioning." },
];


export default function BioGenerator() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ name: '', role: '', audience: '', offer: '', personality: '', platform: 'Instagram' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">Free AI Tools</Link><span>/</span>
        <span className="text-gray-700">Bio Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">✍️</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Bio Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate compelling bios for Instagram, LinkedIn, TikTok, and X — platform-optimized and written in your voice, in under 60 seconds.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about yourself</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('bio-generator', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name or brand name *</label>
              <input type="text" value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Sarah Chen / Bloom Studio" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label>
              <select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Instagram</option><option>LinkedIn</option><option>TikTok</option><option>Twitter/X</option><option>All Platforms</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What do you do / what is your role? *</label>
            <input type="text" value={formData.role} onChange={(e) => update('role', e.target.value)} placeholder="e.g. Founder of a skincare brand / Marketing consultant / Creator and coach" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Who is your target audience? *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Founders and small business owners who want to grow online" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What do you help people do or achieve? *</label>
            <input type="text" value={formData.offer} onChange={(e) => update('offer', e.target.value)} placeholder="e.g. I help founders build consistent marketing systems without a team" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your personality / tone <span className="text-gray-400 font-normal">(optional)</span></label>
            <input type="text" value={formData.personality} onChange={(e) => update('personality', e.target.value)} placeholder="e.g. Direct, no-fluff, slightly funny" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating your bio...</span> : 'Generate Bio →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Bio Options</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Store your bio in your brand knowledge base.</p>
              <p className="text-sm text-violet-700 mb-4">Inside Loraloop, your bio becomes part of your brand identity — so every piece of content Clara generates stays consistent with how you present yourself.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Try Loraloop Free →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Ready to turn your brand identity into a full content system?" subtext="Loraloop uses your bio, brand voice, and audience profile to auto-generate a month of content — captions, posts, and articles — ready for your approval." />
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
      <NextToolsSection currentSlug="bio-generator" />
      <ToolCtaSection />
    </div>
  );
}
