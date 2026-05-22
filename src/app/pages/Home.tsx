import { useState, useEffect } from "react";
import { Link } from "react-router";
import LandingPage from "../../imports/LandingPage/LandingPage";
import HomeMobile from "../../imports/Home-1/Home-10-5453";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="relative">
        <HomeMobile />
        <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 md:hidden">
          <Link
            to="/login"
            className="flex-1 bg-white border border-[#d1d5db] rounded-full px-4 py-3 text-center font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-sm shadow-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="flex-1 bg-[#1877f2] hover:bg-[#1565c0] transition-colors rounded-full px-4 py-3 text-center font-['Satoshi:Bold',sans-serif] text-white text-sm shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <LandingPage />
      <div className="hidden md:flex absolute top-28 right-8 lg:right-16 z-30 flex-col items-end gap-3 pointer-events-none">
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-[#e5e7eb] rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.08)] px-5 py-4 flex flex-col gap-3 w-[240px]">
          <p className="font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-sm leading-5">
            Already on Loraloop?
          </p>
          <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-xs leading-5">
            Sign in or create an account to start automating.
          </p>
          <div className="flex gap-2">
            <Link
              to="/login"
              className="flex-1 text-center rounded-full px-3 py-2 border border-[#d1d5db] hover:bg-[#f9fafc] transition-colors font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 text-center rounded-full px-3 py-2 bg-[#1877f2] hover:bg-[#1565c0] transition-colors font-['Satoshi:Bold',sans-serif] text-white text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
