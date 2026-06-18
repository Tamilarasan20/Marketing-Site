import { Link } from "react-router";
import imgLogos from "../../imports/ResponsiveWebsiteDesign/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "../../imports/ResponsiveWebsiteDesign/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "../../imports/ResponsiveWebsiteDesign/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

const audienceLinks = [
  { name: "For Founders", to: "/for-founders" },
  { name: "For Marketing Agencies", to: "/for-agencies" },
  { name: "For Freelancers", to: "/for-freelancers" },
  { name: "For eCommerce Brands", to: "/for-ecommerce" },
  { name: "For Creators", to: "/for-creators" },
];

const aiTools = [
  { name: "Brand Voice Generator", to: "/tools/brand-voice" },
  { name: "Social Media Calendar", to: "/tools/social-calendar" },
  { name: "Instagram Caption Generator", to: "/tools/instagram-caption" },
  { name: "Hook Generator", to: "/tools/hook-generator" },
  { name: "Bio Generator", to: "/tools/bio-generator" },
  { name: "Blog Title Generator", to: "/tools/blog-title-generator" },
  { name: "Ad Copy Generator", to: "/tools/ad-copy" },
  { name: "Competitor Audit Tool", to: "/tools/competitor-audit" },
  { name: "Marketing Strategy Generator", to: "/tools/marketing-strategy" },
];

const blogLinks = [
  { name: "Why Founders Need an AI Marketing Team", to: "/blog/7" },
  { name: "Loraloop vs Postiz", to: "/blog/8" },
  { name: "Loraloop vs Post Bridge", to: "/blog/9" },
  { name: "Top 10 AI Marketing Tools 2026", to: "/blog/10" },
  { name: "AI Marketing Automation Guide", to: "/blog/11" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] px-4 mx-auto sm:px-6 md:px-20 py-10 md:py-20">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-12">
            <div className="flex flex-col gap-[13px] items-center text-center sm:items-start sm:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Solutions</p>
              {audienceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-[13px] items-center text-center sm:items-start sm:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Agents</p>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">Lora - AI Marketing Lead</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Sam - AI Strategist (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Sophie - AI SEO/GEO Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Clara - AI Content Writer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Theo - AI Video Producer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Steve - AI Visual Designer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Sarah - AI Social Media Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Elena - AI Ads Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Nick - AI Analyst (Soon)</p>
            </div>

            <div className="flex flex-col gap-[13px] items-center text-center sm:items-start sm:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">AI Tools</p>
              {aiTools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words"
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                to="/tools"
                className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-sm sm:text-base hover:underline transition-colors break-words"
              >
                View all tools →
              </Link>
            </div>

            <div className="flex flex-col gap-[13px] items-center text-center sm:items-start sm:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Blog</p>
              {blogLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-sm sm:text-base hover:underline transition-colors break-words">
                View all posts →
              </Link>
            </div>

            <div className="flex flex-col gap-[14px] items-center text-center sm:items-start sm:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Company</p>
              <Link to="/about" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">About us</Link>
              <Link to="/privacy-policy" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">Privacy Policy</Link>
              <Link to="/terms" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">Terms of Service</Link>
              <Link to="/data-deletion" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">User Data Deletion</Link>
              <Link to="/contact" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-sm sm:text-base hover:text-[#1877f2] transition-colors break-words">Contact Us/Support</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-sm sm:text-base break-words">Become Affiliate (Soon)</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center border-t border-[#e5e7eb] pt-10">
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/company/loraloop/" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="LinkedIn" className="w-9 h-9 object-cover" src={imgLogos} />
              </a>
              <a href="https://www.instagram.com/loraloop_ai?igsh=YXR6bnpjcXB3bXFi" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="Instagram" className="w-9 h-9 object-cover" src={imgLogos1} />
              </a>
              <a href="https://x.com/TKtamilarasan2" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="X (Twitter)" className="w-9 h-9 object-cover" src={imgLogos2} />
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex items-center justify-center">
                <p className="font-['Satoshi:Bold',sans-serif] leading-tight text-[clamp(2.5rem,8vw,5rem)] text-black whitespace-nowrap">Loraloop</p>
              </div>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-sm sm:text-base text-center">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
