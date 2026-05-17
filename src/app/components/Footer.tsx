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
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-[13px] items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Agents</p>
              <Link to="/solution" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Lora - AI Marketing Lead</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Sam - AI Strategist (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Sophie - AI SEO/GEO Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Clara - AI Content Writer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Theo - AI Video Producer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Steve - AI Visual Designer (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Sarah - AI Social Media Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Elena - AI Ads Manager (Soon)</p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Nick - AI Analyst (Soon)</p>
            </div>

            <div className="flex flex-col gap-[14px] items-center md:items-start text-center md:text-left">
              <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Company</p>
              <Link to="/about" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">About us</Link>
              <Link to="/privacy-policy" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base hover:text-[#1877f2] transition-colors">Contact Us/Support</Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#9ca3af] text-base">Become Affiliate (Soon)</p>
            </div>
          </div>

          {/* Social Icons and Branding */}
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
