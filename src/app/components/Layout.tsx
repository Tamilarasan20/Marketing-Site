import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let current = e.target as HTMLElement | null;
      while (current && current !== document.body) {
        if (current.textContent?.trim() === "Get Start" || current.textContent?.trim() === "Get Started") {
          e.preventDefault();
          e.stopPropagation();
          navigate("/pricing");
          window.scrollTo(0, 0);
          return;
        }
        current = current.parentElement;
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [navigate]);

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <div className="hidden md:block">
        <Header />
      </div>
      <MobileNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
