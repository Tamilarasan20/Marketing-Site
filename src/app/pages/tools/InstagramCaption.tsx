import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';

const faqs = [
  { q: 'What makes an Instagram caption perform well?', a: "A high-performing caption starts with a hook that stops the scroll — a question, bold statement, or surprising fact. It delivers value (entertainment, information, or emotion), uses line breaks for readability, includes a clear CTA, and ends with relevant hashtags. The first 125 characters matter most because that's what shows before 'more'." },
  { q: 'How many hashtags should I use on Instagram?', a: 'Optimal hashtag count varies, but 3–8 specific, relevant hashtags consistently outperform large hashtag dumps. Use a mix of niche-specific hashtags (smaller, highly relevant) and moderate-reach hashtags. Avoid banned hashtags and overly generic ones with billions of posts where your content gets buried instantly.' },
  { q: 'Should I use emojis in Instagram captions?', a: 'Emojis improve scannability, add personality, and help break up text — which matters on a visual platform. Use them purposefully: as bullet points, to add tone, or to draw attention to key phrases. Match emoji style to your brand personality; a corporate B2B brand might use fewer emojis than a lifestyle creator.' },
  { q: 'What is the ideal Instagram caption length?', a: 'It depends on the content type. Educational carousels and storytelling posts benefit from longer captions (up to 2,200 characters). Quick product shots or lifestyle images work better with short, punchy captions (50–150 characters). Match caption length to content depth and audience expectations.' },
  { q: 'Can I use the same caption across platforms?', a: "No — platform-native captions outperform cross-posted ones. Instagram captions can be longer and use emojis freely. LinkedIn captions are more professional and conversational. TikTok captions are extremely short. Use this tool for Instagram-specific captions; try the Hook Generator for TikTok hooks." },
];

const relatedTools = [
  { name: 'Hook Generator', to: '/tools/hook-generator' },
  { name: 'Social Media Calendar', to: '/tools/social-calendar' },
  { name: 'Brand Voice Generator', to: '/tools/brand-voice' },
];

export default function InstagramCaption() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ businessName: '', postType: 'Product showcase', topic: '', audience: '', tone: 'Engaging and conversational', cta: '' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools/instagram-caption" className="hover:text-violet-600">Tools</Link><span>/</span>
        <span className="text-gray-600">Instagram Caption Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📸</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Instagram Caption Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate 5 ready-to-post Instagram captions — with hooks, hashtags, and CTAs — matched to your brand and post type in under 60 seconds.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about your post</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('instagram-caption', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Business or brand name *</label>
              <input type="text" value={formData.businessName} onChange={(e) => update('businessName', e.target.value)} placeholder="e.g. Bloom Skincare" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Post type *</label>
              <select value={formData.postType} onChange={(e) => update('postType', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Product showcase</option>
                <option>Educational / Tips</option>
                <option>Behind the scenes</option>
                <option>Promotional offer</option>
                <option>Storytelling / Personal</option>
                <option>Customer testimonial</option>
                <option>Carousel / Multi-slide</option>
                <option>Reels / Video</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What is this post about? *</label>
            <textarea value={formData.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. Launching our new Vitamin C serum. It's lightweight, fast-absorbing, and helps reduce dark spots in 4 weeks. Targeted at women 30–50 who want visible results." required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
              <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Women 30-50 interested in skincare and wellness" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Brand tone *</label>
              <select value={formData.tone} onChange={(e) => update('tone', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Engaging and conversational</option>
                <option>Professional and authoritative</option>
                <option>Fun and playful</option>
                <option>Inspirational and motivating</option>
                <option>Educational and informative</option>
                <option>Minimalist and clean</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Call-to-action <span className="text-gray-400 font-normal">(optional — what should followers do?)</span></label>
            <input type="text" value={formData.cta} onChange={(e) => update('cta', e.target.value)} placeholder="e.g. Shop the link in bio / Comment your skin type below / Save this for later" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Writing your captions...</span> : 'Generate Instagram Captions →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Instagram Captions</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Want a full month of Instagram captions like these — automatically?</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop generates and schedules a full month of Instagram content in your brand voice — captions, carousels, reels — every month, on autopilot.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Your Instagram captions are ready. Now automate the whole month." subtext="Loraloop generates a full Instagram content calendar — captions, carousel scripts, and reels concepts — every month in your brand voice. Review, approve, publish." />
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Try these tools next</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p>
              <p className="text-xs text-violet-600">Try free →</p>
            </Link>
          ))}
        </div>
      </div>
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
    </div>
  );
}
