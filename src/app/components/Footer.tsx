import { Link } from "react-router";
import svgPaths from "../../imports/ResponsiveWebsiteDesign/svg-0071jbk82i";
import imgLogos from "../../imports/ResponsiveWebsiteDesign/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "../../imports/ResponsiveWebsiteDesign/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "../../imports/ResponsiveWebsiteDesign/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-10 md:py-20">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:h-[468px]">
            <div className="flex flex-col gap-[13px]">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Agents</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Lora - AI Marketing Lead</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Sam - AI Strategist</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Sophie - AI SEO/GEO Manager</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Clara - AI Content Writer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Theo - AI Video Producer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Steve - AI Visual Designer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Sarah - AI Social Media Manager</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Elena - AI Ads Manager</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">Nick - AI Analyst</p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Company</p>
              <Link to="/about" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">About us</Link>
              <Link to="/contact" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Contact Us/Support</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Become Affiliate (Soon)</p>
            </div>

            <div className="flex flex-col gap-[13px]">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Blog</p>
              <Link to="/blog/1" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 1</Link>
              <Link to="/blog/2" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 2</Link>
              <Link to="/blog/3" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 3</Link>
              <Link to="/blog/4" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 4</Link>
              <Link to="/blog/5" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 5</Link>
              <Link to="/blog/6" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 6</Link>
              <Link to="/blog/7" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 7</Link>
              <Link to="/blog/8" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2]">Blog 8</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-base hover:underline">View more</Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Free AI Tools</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Article Writer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Audio Ad Creator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Blog Conclusion Paragraph Generator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Blog Ideas And Titles Generator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Blog Introduction Generator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Blog Outline Generator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Blog Section Completer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Brand Voice Analyzer</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Carousel Maker</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">AI Cold Email Generator</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-base cursor-pointer hover:underline">View more</p>
            </div>
          </div>

          <div className="flex gap-2 h-[44px] justify-center">
            <div className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <img alt="YouTube" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos} />
            </div>
            <div className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <img alt="Facebook" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos1} />
            </div>
            <div className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <img alt="LinkedIn" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos2} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-[7px] items-center justify-center w-[375px]">
              <div className="h-[58.26px] w-[64.864px] relative">
                <div className="absolute inset-[-8.18%_-7.34%_-8.17%_-7.34%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.3875 67.7855">
                    <path d={svgPaths.p7344f00} stroke="black" strokeLinecap="round" strokeWidth="9.52381" />
                  </svg>
                </div>
              </div>
              <p className="font-['Satoshi:Bold',sans-serif] leading-[100px] text-[78.571px] text-black whitespace-nowrap">oraLoop</p>
            </div>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
