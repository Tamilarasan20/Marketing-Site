import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/LandingPage/svg-yig2xk76tq";

export default function Header() {
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(false);

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1120px] px-4">
      <div className="backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] px-6 py-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <Link to="/" className="flex items-center gap-[1.773px] py-2">
              <div className="h-[14.459px] w-[16.098px] relative">
                <div className="absolute inset-[-9.2%_-8.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7571 17.1186">
                    <path d={svgPaths.p88f5ac0} stroke="black" strokeLinecap="round" strokeWidth="2.65909" />
                  </svg>
                </div>
              </div>
              <p className="font-['Satoshi:Bold',sans-serif] leading-[24.818px] text-[19.5px] text-black whitespace-nowrap">oraLoop.com</p>
            </Link>

            <nav className="flex gap-2 items-center">
              <div className="relative">
                <button
                  onMouseEnter={() => setIsEmployeesOpen(true)}
                  onMouseLeave={() => setIsEmployeesOpen(false)}
                  className="flex gap-[2px] items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-black">AI Employees</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 9.33333 5.33333">
                      <path d={svgPaths.p23cd8f00} fill="#40566D" fillRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>

              <Link to="/solution" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-black">Solution</span>
              </Link>

              <Link to="/blog" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-black">Blogs</span>
              </Link>

              <Link to="/pricing" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-black">Pricing</span>
              </Link>
            </nav>
          </div>

          <div className="flex gap-3 items-center">
            <button className="px-6 py-3 rounded-[34px] hover:bg-gray-100 transition-colors">
              <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-[#0279ec]">Login</span>
            </button>
            <button className="bg-[#1877f2] px-6 py-2 rounded-[120px] h-10 hover:bg-[#1565d8] transition-colors">
              <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white">Get Start</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
