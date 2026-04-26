import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/LandingPage/svg-yig2xk76tq";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-4 left-0 right-0 z-50 px-4">
      <div className="backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] rounded-[30px] shadow-lg px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-[1.773px]" onClick={() => setIsOpen(false)}>
            <div className="h-[14.459px] w-[16.098px] relative">
              <div className="absolute inset-[-9.2%_-8.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7571 17.1186">
                  <path d={svgPaths.p88f5ac0} stroke="black" strokeLinecap="round" strokeWidth="2.65909" />
                </svg>
              </div>
            </div>
            <p className="font-['Satoshi:Bold',sans-serif] leading-[24.818px] text-[19.5px] text-black">oraLoop</p>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
            <Link
              to="/solution"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-['Satoshi:Bold',sans-serif] text-base text-black">Solution</span>
            </Link>
            <Link
              to="/blog"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-['Satoshi:Bold',sans-serif] text-base text-black">Blogs</span>
            </Link>
            <Link
              to="/pricing"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-['Satoshi:Bold',sans-serif] text-base text-black">Pricing</span>
            </Link>
            <Link
              to="/about"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-['Satoshi:Bold',sans-serif] text-base text-black">About</span>
            </Link>
            <Link
              to="/contact"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-['Satoshi:Bold',sans-serif] text-base text-black">Contact</span>
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <button className="px-6 py-3 rounded-[34px] hover:bg-gray-100 transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] text-base text-[#0279ec]">Login</span>
              </button>
              <button className="bg-[#1877f2] px-6 py-2 rounded-[120px] hover:bg-[#1565d8] transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] text-sm text-white">Get Start</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
