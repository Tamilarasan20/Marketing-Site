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
        <div
          className="absolute right-[64px] top-1/2 -translate-y-1/2 flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            to="/login"
            className="flex items-center justify-center px-3 py-[6px] rounded-full bg-white"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#0f172a",
              whiteSpace: "nowrap",
            }}
          >
            Signin
          </Link>
          <Link
            to="/signup"
            className="flex items-center justify-center px-3 py-[6px] rounded-full bg-[#1877f2]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
}
