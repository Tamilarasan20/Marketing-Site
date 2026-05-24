import { useState, useEffect } from "react";
import LandingPage from "../../imports/LandingPage/LandingPage";
import HomeMobile from "../../imports/Home-1/Home-10-5453";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Loraloop | AI-Powered Automation Platform",
    "Loraloop is an AI-powered automation platform that helps businesses build intelligent workflows, deploy AI agents, and scale operations effortlessly."
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <HomeMobile /> : <LandingPage />;
}
