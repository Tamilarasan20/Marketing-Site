import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let current = e.target as HTMLElement | null;
      while (current && current !== document.body) {
        const text = current.textContent?.trim();
        if (text === "Get Start" || text === "Get Started" || text === "Join Waitlist") {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "/app/register";
          return;
        }
        if (text === "Login" || text === "Log in" || text === "Log In" || text === "Sign in" || text === "Sign In" || text === "Signin") {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "/app/login";
          return;
        }
        if (text === "Sign up" || text === "Sign Up" || text === "Signup") {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "/app/register";
          return;
        }
        current = current.parentElement;
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

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
