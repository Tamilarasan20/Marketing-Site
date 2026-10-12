import { Link } from "react-router";

export default function About() {
  return (
    <div className="pt-20 md:pt-32 pb-20">
      <div className="max-w-[1280px] px-4 sm:px-6 md:px-20 mx-auto">
        <div className="flex flex-col gap-[88px]">
          <div className="flex flex-col gap-14">
            <p className="font-['Satoshi',sans-serif] font-bold leading-[1.05] text-[#0f172a] text-4xl sm:text-5xl lg:text-[64px] tracking-[-0.03em] text-balance">About Loraloop</p>
            <div className="flex flex-col gap-4 font-['General_Sans',sans-serif] leading-[1.6] text-[#4b5563] text-[18px] md:text-[20px]">
              <p>Loraloop is the execution layer for lean marketing teams at scaling companies: B2B SaaS, D2C and eCommerce brands, CPG brands and the fractional agencies that serve them.</p>
              <p>We built it for a specific situation. A company doing $2M to $50M in revenue, 15 to 200 people, growing fast and determined to keep headcount flat. One or two marketers who are expected to ship 50+ posts, articles and emails a month, keep Meta and Google campaigns healthy, watch the competition and report to leadership, while also owning the strategy.</p>
              <p>The usual answers are a $3k to $10k a month agency retainer that churns account managers every six months, or ten disconnected tools and ten dashboards that nobody has time to read.</p>
              <p>Loraloop replaces both with a team of AI employees that plan, produce, publish and optimise around the clock. Your marketing manager sets the direction and approves the work. Your VP of Marketing or founder gets one daily briefing instead of ten logins. Nothing publishes and no budget moves without a human signing off.</p>
              <p>Our aim is simple: give a marketing team of one the output of a team of ten, without the retainer, the turnover or the headcount.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <p className="font-['Satoshi',sans-serif] font-bold leading-[1.1] text-[#111827] text-3xl md:text-[40px] tracking-[-0.02em]">What Makes Loraloop Different</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="font-['Satoshi',sans-serif] font-semibold leading-[1.25] text-[#111827] text-[22px] tracking-[-0.015em]">Execution, not advice</p>
                <p className="font-['General_Sans',sans-serif] leading-[1.6] text-[#4b5563] text-[16px]">Loraloop writes the article, builds the campaign and proposes the budget move. It does the work an agency would bill for, then waits for your approval.</p>
              </div>
              <div>
                <p className="font-['Satoshi',sans-serif] font-semibold leading-[1.25] text-[#111827] text-[22px] tracking-[-0.015em]">Nothing leaks overnight</p>
                <p className="font-['General_Sans',sans-serif] leading-[1.6] text-[#4b5563] text-[16px]">Meta and Google spend is watched around the clock. Underperforming campaigns are caught and budget moves are queued before your team logs in.</p>
              </div>
              <div>
                <p className="font-['Satoshi',sans-serif] font-semibold leading-[1.25] text-[#111827] text-[22px] tracking-[-0.015em]">One briefing, not ten dashboards</p>
                <p className="font-['General_Sans',sans-serif] leading-[1.6] text-[#4b5563] text-[16px]">Ads, organic, SEO and email performance land in a single daily report, so leadership sees what is working without logging into anything.</p>
              </div>
              <div>
                <p className="font-['Satoshi',sans-serif] font-semibold leading-[1.25] text-[#111827] text-[22px] tracking-[-0.015em]">Human approval on every move</p>
                <p className="font-['General_Sans',sans-serif] leading-[1.6] text-[#4b5563] text-[16px]">Every post, article, email and campaign goes through an approval queue. You set the guardrails once and Loraloop works inside them.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#101828] rounded-[40px] px-8 py-10">
            <div className="flex flex-col gap-2">
              <p className="font-['Satoshi',sans-serif] font-bold leading-[1.1] text-3xl md:text-[40px] text-white tracking-[-0.02em]">Our Vision</p>
              <p className="font-['Inter',sans-serif] font-normal leading-[1.6] text-[#d1d5dc] text-[18px] md:text-[20px]">The best marketing teams of the next decade will be small, senior and backed by AI that does the production.</p>
              <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[18px] md:text-[20px] text-white">Loraloop is that team: it keeps your headcount flat and your output growing, while your people keep the strategy.</p>
              <p className="pt-4">
                <Link to="/pricing" className="font-['Satoshi',sans-serif] font-bold text-[16px] text-[#51a2ff] hover:underline">See pricing →</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
