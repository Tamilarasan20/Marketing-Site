import { useState, useEffect } from "react";
import LandingPage from "../../imports/LandingPage/LandingPage";
import HomeMobile from "../../imports/Home-1/Home-10-5453";

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <HomeMobile /> : <LandingPage />;
}
