import { useState } from "react";
import HamburgerMenu from "../../imports/HamburgerMenu/HamburgerMenu";
import Expander1 from "../../imports/Expander1/Expander1";
import Expander2 from "../../imports/Expander2/Expander2";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmployees, setShowEmployees] = useState(false);

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
      className="-translate-x-1/2 absolute left-1/2 top-[24px] w-full max-w-full md:hidden z-[60]"
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
    </div>
  );
}
