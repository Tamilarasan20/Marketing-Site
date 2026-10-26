import { Link } from 'react-router';

const features = [
  { icon: '📣', title: 'Ad creative at the volume Meta demands', desc: 'Hooks, body copy, CTAs and generated creative for every product, offer and angle, so your media buyer always has fresh tests to run.' },
  { icon: '🌙', title: 'Spend watched overnight', desc: 'Meta and Google campaigns are monitored around the clock. Fatigued or underperforming ads are caught and budget moves queued for approval before anyone opens Ads Manager.' },
  { icon: '🛍️', title: 'Product-first content', desc: 'Posts, articles and emails built around your actual catalogue, features, use cases and seasonal angles, from a knowledge base your team controls.' },
  { icon: '📆', title: 'Launch and promo calendars', desc: 'Every launch, drop, BFCM push and holiday campaign planned across channels, with the assets produced weeks ahead instead of the night before.' },
  { icon: '🔍', title: 'SEO for buyer-intent searches', desc: 'Category pages, buying guides and comparison articles that rank for the searches shoppers make before they buy.' },
  { icon: '🤖', title: 'Cited when shoppers ask AI', desc: 'GEO-structured content so ChatGPT, Perplexity and Google AI Overviews name your brand when someone asks what to buy.' },
  { icon: '📧', title: 'Email flows and campaigns', desc: 'Launch sequences, promotional sends and newsletters drafted in your voice and scheduled in your Klaviyo or Mailchimp, review-ready.' },
  { icon: '📊', title: 'One briefing, not ten dashboards', desc: 'ROAS, organic traffic, content output and email performance in one daily report your founder or VP of Marketing can actually read.' },
];

const contentTypes = [
  { type: 'Ad creative and copy', desc: 'Meta, Instagram, Google and TikTok campaign assets by product and angle' },
  { type: 'Product posts', desc: 'Feature highlights, before and afters, use cases, testimonials' },
  { type: 'Promotional offers', desc: 'Sale announcements, limited-time deals, bundle offers' },
  { type: 'Seasonal campaigns', desc: 'BFCM, back-to-school, holiday and drop content' },
  { type: 'Email flows', desc: 'Launch sequences, cart recovery, newsletters, win-backs' },
  { type: 'SEO articles', desc: 'Category, buying-guide and comparison content for Google' },
  { type: 'GEO content', desc: 'Structured answers that AI assistants cite to shoppers' },
  { type: 'UGC-style captions', desc: 'Community-feel copy for social and creator briefs' },
];

const faqs = [
  { q: 'How does Loraloop learn about our products?', a: 'During onboarding you build a brand knowledge base: catalogue, product details, audience segments, brand voice, positioning and competitors. Every piece of content and every ad is generated from that knowledge base, so outputs reference real products and offers, not invented details.' },
  { q: 'Will it change our ad budgets without asking?', a: 'No. Loraloop watches Meta and Google spend overnight, flags fatigued or underperforming campaigns and queues the budget move it recommends. Nothing is applied until your media buyer or marketing manager approves it. You set the guardrails once.' },
  { q: 'We already have a media buyer and an agency. Where does Loraloop fit?', a: 'As the production and monitoring layer underneath them. Your buyer keeps the strategy and gets a steady supply of tested creative and overnight monitoring; most brands then drop the content and reporting retainer rather than the person.' },
  { q: 'Can Loraloop plan seasonal campaigns?', a: 'Yes. You set the key dates and offers; Loraloop builds the campaign plan across ads, social, email and SEO and produces the assets ahead of time, all landing in your approval queue.' },
  { q: 'Does Loraloop handle email for eCommerce?', a: 'Yes. Clara, the email agent, drafts launch sequences, promotional sends, newsletters and re-engagement flows in your voice and schedules them inside your Klaviyo or Mailchimp once approved.' },
  { q: 'Who on our team runs it day to day?', a: 'Usually the marketing manager or growth lead. They review the approval queue, edit what needs editing and approve budget moves. The founder or VP of Marketing reads the daily briefing and never has to log into Ads Manager, Klaviyo and analytics separately.' },
];

export default function ForEcommerce() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Scale-up D2C and eCommerce Brands</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Scale creative, content and spend<br />
          <span style={{ background: 'linear-gradient(135deg, #ea580c, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            without scaling the team
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Loraloop produces the ad creative, product content and email a growing brand needs every week, watches Meta and Google spend overnight and reports it all in one briefing. Built for D2C, Shopify and CPG brands doing $2M to $50M.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            data-ml-goal="signup_click" data-ml-goal-location="ecommerce_hero"
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #ea580c, #7c3aed)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Start free, no credit card
          </a>
          <Link
            data-ml-goal="pricing_view"
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            See pricing →
          </Link>
        </div>
      </section>

      {/* eCommerce content demand */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Growing brands run out of creative before they run out of budget</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
            Meta wants new creative every week. Launches, drops, promos and BFCM all need their own assets. Email flows go stale. And somewhere between the agency deck and the four dashboards, an underperforming ad set spends through the weekend because nobody was looking.
          </p>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
            Loraloop handles the production and the overnight monitoring from your brand and product knowledge base, so a marketing team of two ships like a team of ten and leadership gets one report instead of ten logins.
          </p>
        </div>
      </section>

      {/* Content types */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Every asset a scaling brand needs, produced weekly</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Ads, organic, SEO and email from one knowledge base, all landing in your approval queue before anything goes live.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {contentTypes.map((c) => (
              <div key={c.type} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-[#111827] text-[15px] leading-[1.25] tracking-[-0.015em] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.type}</p>
                <p className="text-[14px] text-[#4b5563] leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[#111827] text-[15px] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-[14px] text-[#4b5563] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #7c3aed 100%)' }}>
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Keep headcount flat through your next growth stage</h2>
          <p className="text-orange-100 text-[16px] mb-8 leading-[1.6]">Build your brand and product knowledge base, connect your ad accounts and channels, and have the first month of creative, content and email waiting for approval in one session.</p>
          <a
            data-ml-goal="signup_click" data-ml-goal-location="ecommerce_footer_cta"
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-orange-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Start free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>eCommerce questions answered</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-[#111827] text-[16px] flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-orange-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-[14px] text-[#4b5563] leading-[1.6]">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#6b7280] text-[14px] mb-4">Running several brands or need a custom integration with your stack?</p>
          <Link to="/contact" className="text-orange-600 font-semibold text-[14px] hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
