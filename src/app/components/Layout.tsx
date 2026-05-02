import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const location = useLocation();
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
