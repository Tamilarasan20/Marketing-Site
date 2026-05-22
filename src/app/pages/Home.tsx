import { useState, useEffect } from "react";
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

  return isMobile ? <HomeMobile /> : <LandingPage />;
}
