import { Link } from "react-router";
import svgPaths from "../../imports/ResponsiveWebsiteDesign/svg-0071jbk82i";
import imgLogos from "../../imports/ResponsiveWebsiteDesign/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "../../imports/ResponsiveWebsiteDesign/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "../../imports/ResponsiveWebsiteDesign/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1280px] px-4 mx-auto md:px-20 py-10 md:py-20">
        <div className="flex flex-col gap-12">
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-[13px] items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Agents</p>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Lora - AI Marketing Lead</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Sam - AI Strategist</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Sophie - AI SEO/GEO Manager</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Clara - AI Content Writer</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Theo - AI Video Producer</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Steve - AI Visual Designer</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Sarah - AI Social Media Manager</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Elena - AI Ads Manager</Link>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Nick - AI Analyst</Link>
            </div>

            <div className="flex flex-col gap-[14px] items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Company</p>
              <Link to="/about" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">About us</Link>
              <Link to="/contact" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Contact Us/Support</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Become Affiliate (Soon)</p>
            </div>

            <div className="flex flex-col gap-[13px] items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Blog</p>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 1</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 2</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 3</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 4</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 5</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 6</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 7</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Blog 8</Link>
              <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-base hover:underline">View more</Link>
            </div>

            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Free AI Tools</p>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Article Writer</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Audio Ad Creator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Blog Conclusion Paragraph Generator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Blog Ideas And Titles Generator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Blog Introduction Generator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Blog Outline Generator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Blog Section Completer</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Brand Voice Analyzer</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Carousel Maker</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">AI Cold Email Generator</Link>
              <Link to="/" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-base hover:underline">View more</Link>
            </div>
          </div>

          {/* Social Icons and Branding */}
          <div className="flex flex-col gap-8 items-center border-t border-[#e5e7eb] pt-10">
            <div className="flex gap-4 justify-center">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="YouTube" className="w-9 h-9 object-cover" src={imgLogos} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="Facebook" className="w-9 h-9 object-cover" src={imgLogos1} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <img alt="LinkedIn" className="w-9 h-9 object-cover" src={imgLogos2} />
              </a>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center justify-center">
                <p className="font-['Satoshi:Bold',sans-serif] leading-tight text-[50px] md:text-[80px] text-black whitespace-nowrap">LoraLoop</p>
              </div>              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base text-center">Copyright © 2026 Orimoretail Pvt. Ltd. All rights reserved.</p>
            </div>          </div>
        </div>
      </div>
    </footer>
  );
}
