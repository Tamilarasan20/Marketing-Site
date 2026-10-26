import { Outlet, useLocation } from "react-router";
import { Suspense, useEffect } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useAnalyticsPageviews } from "../hooks/useAnalyticsPageviews";

export default function Layout() {
  const location = useLocation();
  useAnalyticsPageviews();

  useEffect(() => {
    // Minilytics goal for the text-matched sign-up buttons below. Elements
    // tagged with data-ml-goal are already counted by the tracker itself.
    const signupGoal = (el: HTMLElement) => {
      if (el.closest("[data-ml-goal]")) return;
      window.minilytics?.("goal", "signup_click", { location: "text_match" });
    };
    const handleClick = (e: MouseEvent) => {
      let current = e.target as HTMLElement | null;
      while (current && current !== document.body) {
        const text = current.textContent?.trim();
        if (text === "Get Start" || text === "Get Started" || text === "Join Waitlist") {
          signupGoal(current);
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "https://app.loraloop.com/signup";
          return;
        }
        if (text === "Login" || text === "Log in" || text === "Log In" || text === "Sign in" || text === "Sign In" || text === "Signin") {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "https://app.loraloop.com/signin";
          return;
        }
        if (text === "Sign up" || text === "Sign Up" || text === "Signup") {
          signupGoal(current);
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "https://app.loraloop.com/signup";
          return;
        }
        current = current.parentElement;
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <div className="hidden md:block">
        <Header />
      </div>
      <MobileNav />
      <main className="flex-1">
        {/* key forces remount → restarts the page-enter animation on navigation */}
        <div key={location.pathname} className="page-enter">
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
