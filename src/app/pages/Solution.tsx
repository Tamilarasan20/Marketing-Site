import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Frame35_Auth } from "../../imports/LandingPage/LandingPage";
import { ChevronDown, Users, BarChart2, Target, Lightbulb, CheckCircle } from "lucide-react";
import imgLora from "../../imports/Home-1/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgSam from "../../imports/Home-1/67e2795861635095f78d499d37fb8c47640346cd.png";
import imgClara from "../../imports/Home-1/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgSteve from "../../imports/Home-1/81459e21086bbb45f043de724414eb6c6a228454.png";
import imgSarah from "../../imports/Home-1/2ede8e04425e852843b64720e2e6023d1ed754cb.png";
import imgImage190 from "../../imports/Solution-1/477593f47efb019382046da2baab475c895d18ac.png";
import imgImage189 from "../../imports/Solution-1/c50f548c927048a571456a95c7cf7e55218fe47b.png";
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
    isSoon: false,
    title: (
      <>
        Meet <span className="text-[#9131ea]">Lora</span> Autonomous
        <br />
        <span className="text-[#9131ea]">AI Marketing Lead</span>
      </>
    ),
    subtext: "Lora supports your marketing from start to finish. She understands your goals and audience. No waiting for instructions; she plans content, runs ads, guides AI, creates content, tracks performance, and boosts results, report back to you. She's smart, quick, & easy to work with!",
  },
  {
    name: "Sam",
    role: "AI Strategist",
    image: imgSam,
    isSoon: true,
    title: (
      <>
        Meet <span className="text-[#1877f2]">Sam</span> Autonomous
        <br />
        <span className="text-[#1877f2]">AI Strategist</span>
      </>
    ),
    subtext: "Sam plans your marketing every day. He checks your brand, audience, competitors, and trends to decide what your team should focus on next. He helps choose content ideas, campaign plans, product angles & growth opportunities. No guessing Sam gives your AI team a clear direction so your marketing stays smart, active, and focused on results. Sam helps your brand grow with better daily marketing decisions.",
  },
  {
    name: "Clara",
    role: "AI Content Writer",
    image: imgClara,
    isSoon: true,
    title: (
      <>
        Meet <span className="text-[#9131ea]">Clara</span> Your
        <br />
        <span className="text-[#9131ea]">Autonomous AI Content Writer</span>
      </>
    ),
    subtext: "Clara writes content that attracts customers for blogs, emails, social posts, and more. She understands your brand voice and creates persuasive content that drives action.",
  },
  {
    name: "Steve",
    role: "AI Visual Designer",
    image: imgSteve,
    isSoon: true,
    title: (
      <>
        Meet <span className="text-[#d77504]">Steve</span> Your
        <br />
        <span className="text-[#d77504]">Autonomous AI Visual Designer</span>
      </>
    ),
    subtext: "Steve creates scroll-stopping visuals for social media, ads, and your website. He ensures your brand looks professional and consistent across all platforms.",
  },
  {
    name: "Sarah",
    role: "AI Social Media Manager",
    image: imgSarah,
    isSoon: true,
    title: (
      <>
        Meet <span className="text-[#14a148]">Sarah</span> Your
        <br />
        <span className="text-[#14a148]">Autonomous AI Social Media Manager</span>
      </>
    ),
    subtext: "Sarah manages your social media presence 24/7. She schedules posts, engages with your audience, and tracks performance to grow your brand's reach.",
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

export default function Solution() {
  const [searchParams, setSearchParams] = useSearchParams();
  const agentParam = searchParams.get("agent");
  
  const selectedEmployee = useMemo(() => {
    if (agentParam) {
      const index = aiEmployees.findIndex(
        (emp) => emp.name.toLowerCase() === agentParam.toLowerCase()
      );
      return index !== -1 ? index : 0;
    }
    return 0;
  }, [agentParam]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const employeeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate();

  // Scroll selected employee into view
  useEffect(() => {
    if (employeeRefs.current[selectedEmployee]) {
      employeeRefs.current[selectedEmployee]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedEmployee]);

  const handleEmployeeClick = (index: number) => {
    if (!isDragging) {
      setSearchParams({ agent: aiEmployees[index].name.toLowerCase() });
    }
  };

  const handleGetStart = () => {
    navigate("/pricing");
    window.scrollTo(0, 0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-32 pb-10 md:pb-20">
      {/* Hero Section */}
      <div className="px-4 md:px-20 py-10 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[800px] mx-auto">
          {/* Badge */}
          <div className="bg-[#eefdf3] px-3 py-1 rounded-full">
            <p className="font-semibold font-['General_Sans:Semibold',sans-serif] leading-[18px] text-[#14a148] text-sm">
              AI Employees / Solution
            </p>
          </div>

          {/* AI Employees Selector */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`bg-[#f9fafc] rounded-2xl md:rounded-3xl px-3 py-1 w-full max-w-[510px] overflow-x-auto shadow-sm no-scrollbar select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          >
            <div className="flex gap-5 items-center min-w-max px-2">
              {aiEmployees.map((employee, index) => (
                <button
                  key={index}
                  ref={(el) => (employeeRefs.current[index] = el)}
                  onClick={() => !employee.isSoon && handleEmployeeClick(index)}
                  disabled={employee.isSoon}
                  className={`flex gap-3 items-center transition-colors ${
                    index === selectedEmployee
                      ? "bg-[#dbeafe] p-2 rounded-[20px] cursor-default"
                      : employee.isSoon
                      ? "py-2 cursor-default opacity-50"
                      : "py-2 cursor-pointer"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 pointer-events-none">
                    <img 
                      alt={employee.name} 
                      className={`w-full h-full object-cover ${employee.isSoon ? "grayscale" : ""}`} 
                      src={employee.image} 
                    />
                  </div>
                  <div className="flex flex-col items-start min-w-0 pointer-events-none">
                    <p className={`leading-[18px] text-sm whitespace-nowrap ${
                      index === selectedEmployee
                        ? "font-['General_Sans:Semibold',sans-serif] text-[#1f2937]"
                        : employee.isSoon
                        ? "font-['General_Sans:Medium',sans-serif] text-[#9ca3af]"
                        : "font-['General_Sans:Medium',sans-serif] text-[#374151]"
                    }`}>
                      {employee.role}
                    </p>
                    <p className={`font-['General_Sans:Medium',sans-serif] leading-4 text-xs ${
                      employee.isSoon ? "text-[#9ca3af]" : "text-[#6b7280]"
                    }`}>
                      {employee.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="font-bold font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[60px] text-[#1f2937] text-3xl md:text-5xl lg:text-[56px] tracking-[-1px] md:tracking-[-1.4px]">
              {aiEmployees[selectedEmployee].title}
            </h1>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#6b7280] text-base md:text-lg max-w-[800px]">
              {aiEmployees[selectedEmployee].subtext}
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleGetStart}
            className="bg-[#1877f2] h-12 px-6 rounded-full hover:bg-[#1565d8] transition-colors cursor-pointer"
          >
            <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-white text-base">Get Started</span>
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
      <div className="bg-white flex flex-col items-center justify-center px-4 py-12 md:p-12 lg:p-[80px] w-full">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1120px] px-4 md:px-6 lg:px-0">
          <h2 className="font-bold font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-8 md:mb-12">
            Old vs New AI Way!
          </h2>

          <div className="relative rounded-2xl md:rounded-3xl border border-[#e5e7eb] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Old Way */}
              <div className="bg-white p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#e5e7eb]">
                <div className="flex flex-col items-center gap-1 mb-6 md:mb-8">
                  <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-sm">Old way</p>
                  <h3 className="font-bold font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl md:text-3xl text-center">
                    You doing all work
                  </h3>
                </div>
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
                <div className="flex flex-col items-center gap-1 mb-6 md:mb-8">
                  <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-sm">New way</p>
                  <h3 className="font-bold font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl md:text-3xl text-center">
                    AI Agents work while you sleep
                  </h3>
                </div>
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
      <div className="bg-[#f9fafc] flex flex-col items-center justify-center px-4 py-12 md:p-12 lg:p-[80px] w-full">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1120px] px-4 md:px-6 lg:px-0">
          <div className="w-full flex flex-col gap-8 md:gap-12">
            <h2 className="font-bold font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-6">
              What you get it
            </h2>
            <Frame35_Auth />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-bold font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-10 md:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#e5e7eb] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
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
      <div className="relative bg-black w-full flex flex-col gap-12 md:gap-[80px] items-center overflow-clip pt-12 md:pt-[80px] px-4" data-name="Outro">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[740px]" data-name="Call to Action Group">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Text Group Vertical">
            <p className="font-bold font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[32px] md:text-[40px] text-white tracking-[-0.8px] w-full">AI marketing Team that Never sleep</p>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] md:leading-[28px] relative shrink-0 text-[#9ca3af] text-[16px] md:text-[20px] w-full">
              Social media tools are easy to buy, but hard to keep up with. loraloop is your AI marketing team like 10 year employees marketing team for you to
              <br aria-hidden="true" className="hidden md:block" />
              {`manage `} marketing {` end to end, So you focus on your work.`}
            </p>
          </div>
          <div 
            onClick={handleGetStart}
            className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[24px] relative rounded-[120px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
            data-name="Button"
          >
            <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Started</p>
          </div>
        </div>
        <div className="h-[150px] md:h-[258px] relative shrink-0 w-full max-w-[1002px]" data-name="image 172">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[199.29%] left-0 max-w-none top-[-3.87%] w-full object-cover md:object-fill" src={imgImage172} />
          </div>
        </div>
      </div>
    </div>
  );
}
