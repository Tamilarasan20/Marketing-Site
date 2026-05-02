import { Link } from "react-router";

export default function About() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-full max-w-[1120px] px-4 mx-auto">
        <div className="flex flex-col gap-[88px]">
          <div className="flex flex-col gap-14">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] text-[#101828] text-5xl tracking-[-1.2px]">About Loraloop</p>
            <div className="flex flex-col gap-4 font-['General_Sans:Medium',sans-serif] leading-7 text-[#374151] text-lg">
              <p>Loraloop is building the future of AI marketing Company/Team — where SMBs, businesses, Creators, Ecommerce etc don't rely on large teams or endless manual effort to grow.</p>
              <p>We created Loraloop to solve a simple problem: marketing is complex, time-consuming, and hard to scale. From content creation to ads, analytics to optimization — it demands constant attention.</p>
              <p>Loraloop introduces autonomous AI employees that run your entire marketing engine. They plan, create, publish, analyze, and improve — continuously, intelligently, and without burnout.</p>
              <p>Instead of juggling tools, teams, and tasks, businesses can now rely on a system that works 24/7 to drive consistent growth.</p>
              <p>To make powerful, data-driven marketing accessible to every business — without the need for large teams or high costs.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[44px] text-[#101828] text-4xl tracking-[-0.54px]">What Makes Loraloop Different</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#101828] text-2xl">Always On</p>
                <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#374151] text-lg">Your marketing never stops. Loraloop works around the clock.</p>
              </div>
              <div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#101828] text-2xl">End-to-End Execution</p>
                <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#374151] text-lg">From strategy to results — everything is handled in one place.</p>
              </div>
              <div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#101828] text-2xl">Data-Driven Decisions</p>
                <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#374151] text-lg">Every action is based on real performance insights, not guesswork.</p>
              </div>
              <div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#101828] text-2xl">Built for Growth</p>
                <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#374151] text-lg">Designed to scale with your business, from startup to enterprise.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#101828] rounded-[40px] px-8 py-10">
            <div className="flex flex-col gap-2">
              <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] text-[40px] text-white tracking-[-0.8px]">Our Vision</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-8 text-[#d1d5dc] text-[22px]">We believe the future belongs to businesses that move faster, smarter, and more efficiently.</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-8 text-[22px] text-white">Loraloop is not just a tool — it's your AI-powered marketing team, built to help you grow without limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
