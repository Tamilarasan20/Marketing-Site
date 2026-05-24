import imgLogos from "../../imports/ResponsiveWebsiteDesign/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos1 from "../../imports/ResponsiveWebsiteDesign/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos2 from "../../imports/ResponsiveWebsiteDesign/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact | Loraloop",
    "Get in touch with the Loraloop team. We'd love to help you automate your business with AI."
  );
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[1280px] px-4 md:px-16 mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4 py-[2px]">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] text-[#101828] text-5xl tracking-[-1.2px]">Contact Us/Support</p>
            <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#6b7280] text-lg">Not surprisingly, we encourage you to communicate freely. Whether you have a question, comment or just want to share some #loracheer in social media, we'd love to hear from you.</p>
          </div>

          <div className="flex flex-col gap-10">
            <a
              href="https://discord.gg/ynrBvXUY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865f2] flex gap-2 items-center justify-center px-4 py-3 rounded-2xl hover:bg-[#4752c4] transition-colors w-fit"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" fill="white" viewBox="0 0 32 24">
                  <path d="M26.7 3.8c-2.1-1-4.4-1.7-6.8-2.1-.3.5-.6 1.2-.8 1.7-2.5-.4-5-.4-7.5 0-.2-.5-.5-1.2-.8-1.7-2.4.4-4.7 1.1-6.8 2.1C.8 8.9-.5 13.8.2 18.7c2.8 2 5.5 3.3 8.1 4.1.7-.9 1.3-1.8 1.8-2.9-.9-.3-1.8-.8-2.6-1.3.2-.2.4-.3.6-.5 5 2.3 10.4 2.3 15.3 0 .2.2.4.3.6.5-.8.5-1.7.9-2.6 1.3.5 1 1.1 2 1.8 2.9 2.6-.8 5.3-2 8.1-4.1.8-5.7-.8-10.6-3.6-15z" />
                </svg>
              </div>
              <span className="font-['General_Sans:Semibold',sans-serif] leading-[22px] text-base text-white">Join Discord</span>
            </a>

            <div className="flex flex-col gap-2">
              <p className="font-['General_Sans:Semibold',sans-serif] leading-7 text-[#1f2937] text-lg">Social Media</p>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/company/loraloop/" target="_blank" rel="noopener noreferrer" className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <img alt="LinkedIn" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos} />
                </a>
                <a href="https://www.instagram.com/loraloop_ai?igsh=YXR6bnpjcXB3bXFi" target="_blank" rel="noopener noreferrer" className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <img alt="Instagram" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos1} />
                </a>
                <a href="https://x.com/TKtamilarasan2" target="_blank" rel="noopener noreferrer" className="rounded-[11.365px] w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <img alt="X (Twitter)" className="w-[36.367px] h-[36.367px] object-cover" src={imgLogos2} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 leading-[22px] text-base">
              <div className="flex gap-2 items-center">
                <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280]">Email:</p>
                <a href="mailto:loraloopai@gmail.com" className="font-['General_Sans:Semibold',sans-serif] text-[#1877f2] underline underline-offset-4 hover:opacity-80 transition-opacity">loraloopai@gmail.com</a>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280]">Discord Community:</p>
                <a href="https://discord.gg/ynrBvXUY" target="_blank" rel="noopener noreferrer" className="font-['General_Sans:Semibold',sans-serif] text-[#1877f2] underline underline-offset-4 hover:opacity-80 transition-opacity">https://discord.gg/ynrBvXUY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
