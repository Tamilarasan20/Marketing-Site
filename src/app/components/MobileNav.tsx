import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import HamburgerMenu from "../../imports/HamburgerMenu/HamburgerMenu";
import Expander1 from "../../imports/Expander1/Expander1";
import Expander2 from "../../imports/Expander2/Expander2";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmployees, setShowEmployees] = useState(false);
  const location = useLocation();

  // Close on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setShowEmployees(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setShowEmployees(false);
    }
  };

  const toggleEmployees = () => {
    setShowEmployees(!showEmployees);
  };

  const renderMenuState = () => {
    if (!isMenuOpen) {
      return <HamburgerMenu />;
    }
    return showEmployees ? <Expander2 /> : <Expander1 />;
  };

  return (
    <div
      className="absolute left-[24px] right-[24px] top-[24px] md:hidden z-[60]"
      data-name="MobileNav"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        if (target.closest('[data-name="Menu"]') || target.closest('[data-name="menu-01"]') || target.closest('[data-name="x"]')) {
          toggleMenu();
        }

        if (isMenuOpen && (target.closest('[data-name="Frame9"]') || target.textContent?.includes('AI Employees'))) {
          toggleEmployees();
        }
        
        if (target.closest('a')) {
          setIsMenuOpen(false);
          setShowEmployees(false);
        }
      }}
    >
      {renderMenuState()}
      {!isMenuOpen && (
        <Link
          to="/login"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-[64px] top-1/2 -translate-y-1/2 flex items-center justify-center px-3 py-[6px] rounded-full border border-[#1877f2] bg-white/90 backdrop-blur-sm hover:bg-[#1877f2]/5 transition-colors"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#1877f2",
            whiteSpace: "nowrap",
          }}
        >
          Sign in / Sign up
        </Link>
      )}
    </div>
  );
}
