import { useEffect } from "react";
import { useLocation } from "react-router";

/** Top of the page on every route change, or the #section when the link names one. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Pages load lazily, so look for the section for up to 2 seconds, then clear the fixed header and banner.
    const id = decodeURIComponent(hash.slice(1));
    window.scrollTo(0, 0);
    let tries = 0;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        window.clearInterval(timer);
        const banner = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--launch-banner-h")) || 0;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - banner - 80 });
      } else if (++tries > 40) {
        window.clearInterval(timer);
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [pathname, hash]);

  return null;
}
