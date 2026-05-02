import { useState } from "react";
import { ChevronDown, Users, BarChart2, Target, Lightbulb, CheckCircle, X } from "lucide-react";
import imgLora from "../../imports/image-4.png";
import imgSam from "../../imports/image.png";
import imgSophie from "../../imports/image-1.png";
import imgClara from "../../imports/image-2.png";
import imgSteve from "../../imports/image-3.png";
import imgTheo from "../../imports/image-5.png";
import imgSarah from "../../imports/image-6.png";
import imgElena from "../../imports/image-7.png";
import imgNick from "../../imports/image-8.png";
import imgImage190 from "../../imports/Solution-1/477593f47efb019382046da2baab475c895d18ac.png";
import imgImage189 from "../../imports/Solution-1/c50f548c927048a571456a95c7cf7e55218fe47b.png";
import imgImage185 from "../../imports/Solution-1/1ca3d61ded6d37fffa93f794057e86071e0300ea.png";
import imgLogos from "../../imports/Solution-1/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos1 from "../../imports/Solution-1/acfc7503e01b011ae7f17074baec7c0d31a597f8.png";
import imgImage187 from "../../imports/Solution-1/b76237f466af6e76be8b56dc75d1d5e7731fbb48.png";
import imgLogos2 from "../../imports/Solution-1/6542a1e22417f251cbc55d42da5eae61e5cb8217.png";
import imgImage172 from "../../imports/Solution-1/a091e0e97bb7d939c455df7635918b4c8c69a7b8.png";
import imgLogos3 from "../../imports/Solution-1/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos4 from "../../imports/Solution-1/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

const aiEmployees = [
  {
    name: "Lora",
    role: "AI Marketing Lead",
    image: imgLora,
    selected: true,
  },
  {
    name: "Sam",
    role: "AI Strategist",
    image: imgSam,
  },
  {
    name: "Sophie",
    role: "AI SEO/GEO Manager",
    image: imgSophie,
  },
  {
    name: "Clara",
    role: "AI Content Writer",
    image: imgClara,
  },
  {
    name: "Steve",
    role: "AI Visual Designer",
    image: imgSteve,
  },
  {
    name: "Theo",
    role: "AI Video Producer",
    image: imgTheo,
  },
  {
    name: "Sarah",
    role: "AI Social Media Manager",
    image: imgSarah,
  },
  {
    name: "Elena",
    role: "AI Ads Manager",
    image: imgElena,
  },
  {
    name: "Nick",
    role: "AI Analyst",
    image: imgNick,
  },
];

const oldWayProblems = [
  "AI just assist you do all manually",
  "Spending 30+ hrs/week creating & managing contents",
  "Checking multiple tools just to understand performance",
  "$5000 to Hire freelancers or teams for manage marketing.",
  "Running ads without knowing what actually works",
  "Paying $1000 for various marketing tools.",
];

const newWayBenefits = [
  {
    text: "Coordinates all AI Employees for execution in your voice",
    color: "#14a148",
    bgColor: "#eefdf3",
    icon: Users,
  },
  {
    text: "Analyze performance across all channels",
    color: "#1877f2",
    bgColor: "#eef4ff",
    icon: BarChart2,
  },
  {
    text: "Track competitors and market shifts in real-time",
    color: "#ec4899",
    bgColor: "#fce7f3",
    icon: Target,
  },
  {
    text: "Share daily insights & Plan next marketing",
    color: "#9131ea",
    bgColor: "#f2e7ff",
    icon: CheckCircle,
  },
  {
    text: "Discover trends, ideas & winning strategies instantly",
    color: "#d77504",
    bgColor: "#fffaea",
    icon: Lightbulb,
  },
];

const faqItems = [
  {
    question: "What is Loraloop AI employees?",
    answer: "Loraloop provides AI employees that handle your marketing tasks end-to-end. From planning and content creation to execution and analysis, our AI team works 24/7 to grow your business.",
  },
  {
    question: "What if I don't have a marketing team or employees?",
    answer: "That's exactly what Loraloop is built for! Our AI employees become your marketing team, handling everything from strategy to execution without requiring any marketing expertise on your end.",
  },
  {
    question: "Can AI employees replace human employees?",
    answer: "AI employees complement and enhance your team by handling repetitive marketing tasks, allowing your human team to focus on strategy and creative decisions. They work alongside your team as reliable, always-available assistants.",
  },
];

const teamMembers = [
  { name: "Sam", image: imgSam, role: "AI Strategist" },
  { name: "Clara", image: imgClara, role: "AI Content Writer" },
  { name: "Sophie", image: imgSophie, role: "AI SEO Manager" },
  { name: "Nick", image: imgNick, role: "AI Analyst" },
  { name: "Lora", image: imgLora, role: "AI Marketing Lead" },
  { name: "Sarah", image: imgSarah, role: "AI Social Manager" },
  { name: "Steve", image: imgSteve, role: "AI Visual Designer" },
  { name: "Elena", image: imgElena, role: "AI Ads Manager" },
  { name: "Theo", image: imgTheo, role: "AI Video Producer" },
];

export default function Solution() {
  const [selectedEmployee, setSelectedEmployee] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-32 pb-10 md:pb-20">
      {/* Hero Section */}
      <div className="px-4 md:px-20 py-10 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[800px] mx-auto">
          {/* Badge */}
          <div className="bg-[#eefdf3] px-3 py-1 rounded-full">
            <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] text-[#14a148] text-sm">
              AI Employees / Solution
            </p>
          </div>

          {/* AI Employees Selector */}
          <div className="bg-[#f9fafc] rounded-2xl md:rounded-3xl px-3 py-1 w-full max-w-full overflow-x-auto shadow-sm">
            <div className="flex gap-5 items-center min-w-max">
              {aiEmployees.map((employee, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedEmployee(index)}
                  className={`flex gap-3 items-center transition-colors ${
                    index === selectedEmployee
                      ? "bg-[#dbeafe] p-2 rounded-[20px]"
                      : "py-2"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img alt={employee.name} className="w-full h-full object-cover" src={employee.image} />
                  </div>
                  <div className="flex flex-col items-start min-w-0">
                    <p className={`leading-[18px] text-sm ${
                      index === selectedEmployee
                        ? "font-['General_Sans:Semibold',sans-serif] text-[#1f2937]"
                        : "font-['General_Sans:Medium',sans-serif] text-[#374151]"
                    }`}>
                      {employee.role}
                    </p>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">
                      {employee.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[60px] text-[#1f2937] text-3xl md:text-5xl lg:text-[56px] tracking-[-1px] md:tracking-[-1.4px]">
              Hi I'm Lora, Your
              <br />
              <span className="text-[#9131ea]">Autonomous AI Marketing Lead</span>
            </h1>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#6b7280] text-base md:text-lg max-w-[546px]">
              Lora crafts a tailored marketing strategy from your goals. She breaks down tasks, assigns them to the right team members, and ensures every action stays true to your brand voice.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1877f2] h-12 px-6 rounded-full hover:bg-[#1565d8] transition-colors">
            <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-white text-base">Get Start</span>
          </button>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="relative px-4 md:px-20 py-8 md:py-10">
        <div className="max-w-[1020px] mx-auto">
          <div className="relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img alt="" className="w-full h-full object-cover opacity-30" src={imgImage190} />
            </div>
            <div className="rounded-2xl md:rounded-[32px] overflow-hidden border border-[#e5e7eb] shadow-lg">
              <img alt="" className="w-full h-auto" src={imgImage189} />
            </div>
          </div>
        </div>
      </div>

      {/* Old vs New Way Section */}
      <div className="bg-white px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-full max-w-[1200px] px-4 mx-auto">
          <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-8 md:mb-12">
            Old vs New AI Way! Everyone moving
          </h2>

          <div className="relative rounded-2xl md:rounded-3xl border border-[#e5e7eb] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Old Way */}
              <div className="bg-white p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#e5e7eb]">
                <h3 className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl text-center mb-6 md:mb-8">
                  Old Way
                </h3>
                <div className="bg-[#f9fafc] rounded-2xl p-6">
                  <div className="flex flex-col gap-6">
                    {oldWayProblems.map((problem, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1f2937] text-base">
                          {problem}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* New Way */}
              <div className="bg-white p-6 md:p-10">
                <h3 className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl text-center mb-6 md:mb-8">
                  New Way - AI Agents work while you sleep
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {newWayBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-2 items-start px-4 py-3 rounded-full"
                        style={{ backgroundColor: benefit.bgColor }}
                      >
                        <IconComponent size={20} style={{ color: benefit.color }} className="shrink-0 mt-0.5" />
                        <p
                          className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-base"
                          style={{ color: benefit.color }}
                        >
                          {benefit.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Center Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
              <div className="bg-white rounded-full p-2.5 border border-[#e5e7eb] shadow-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="bg-[#f9fafc] px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-full max-w-[1200px] px-4 mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              {/* Left Column */}
              <div className="flex-1">
                <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px] mb-6">
                  What you get it
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Activity Items */}
                  <div className="bg-white rounded-2xl p-5 border border-[#e5e7eb]">
                    <div className="flex gap-3 items-start mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#eefdf3] flex items-center justify-center shrink-0">
                        <CheckCircle size={16} className="text-[#14a148]" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#f9fafc] inline-flex gap-1 items-center px-2 py-1 rounded-full mb-2">
                          <div className="flex -space-x-1">
                            <div className="w-3 h-3 rounded-full bg-purple-400 border border-white" />
                            <div className="w-3 h-3 rounded-full bg-pink-400 border border-white" />
                          </div>
                          <span className="font-['Bricolage_Grotesque:Regular',sans-serif] text-[#6b7280] text-xs ml-1">
                            AI Agents Deep Analyse
                          </span>
                        </div>
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#1f2937] text-sm mb-2">
                          Analysed market trends, Monitor Competitors across social media platforms
                        </p>
                        <div className="flex gap-1 items-center">
                          <CheckCircle size={14} className="text-[#14a148]" />
                          <span className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#14a148] text-xs">
                            Done
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#e5e7eb]">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#eef4ff] flex items-center justify-center shrink-0">
                        <BarChart2 size={16} className="text-[#1877f2]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#1f2937] text-sm mb-1">
                          AI strategist delivers what is working
                        </p>
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#6b7280] text-sm">
                          Based on Market Trend report, AI share what type of content and topics you should focus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#e5e7eb]">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#fce7f3] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#1f2937] text-sm mb-1">
                          AI create contents as per plan
                        </p>
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#6b7280] text-sm">
                          Content writers start creating blog, social posts, mails that converts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Integrations */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5e7eb]">
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl mb-6">
                    Social Media Plan for next 5 week
                  </h3>

                  <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mb-8">
                    {[imgLogos, imgLogos1, imgImage187, imgLogos2, imgImage172, imgLogos3, imgLogos4].map((logo, index) => (
                      <div key={index} className="w-10 h-10 rounded-lg bg-[#f9fafc] p-2 flex items-center justify-center">
                        <img alt="" className="w-full h-full object-contain" src={logo} />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-6 text-[#6b7280] text-sm">
                      For Linkedin/Twitter connect from social media, Includes topics, articles, threads, carousels for platforms like Insta, fb etc
                    </p>
                  </div>
                </div>

                <div className="bg-[#eef4ff] rounded-2xl p-6 mt-6 border border-[#bfdbfe]">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#1f2937] text-sm mb-1">
                        For Instagram/Facebook connect from social media
                      </p>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#6b7280] text-sm">
                        Includes topics, articles, threads, carousels for platforms like Insta, fb etc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-10 md:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#e5e7eb] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-[#1f2937] text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#6b7280] shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-6 text-[#6b7280] text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-full max-w-[1000px] px-4 mx-auto text-center">
          <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[56px] text-white text-3xl md:text-5xl tracking-[-0.8px] md:tracking-[-1.2px] mb-6">
            AI marketing team that Never sleep.
          </h2>
          <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#9ca3af] text-base md:text-lg mb-8 max-w-[600px] mx-auto">
            Build your marketing team with AI employees that work 24/7. From strategy to execution, automate everything while you focus on growing your business.
          </p>
          <button className="bg-[#1877f2] h-12 px-8 rounded-full hover:bg-[#1565d8] transition-colors">
            <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-white text-base">Get Start</span>
          </button>

          {/* Team Members */}
          <div className="flex justify-center items-center gap-3 mt-12">
            <div className="flex -space-x-3">
              {teamMembers.slice(0, 9).map((member, index) => (
                <div
                  key={index}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black overflow-hidden"
                  title={member.name}
                >
                  <img alt={member.name} className="w-full h-full object-cover" src={member.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
