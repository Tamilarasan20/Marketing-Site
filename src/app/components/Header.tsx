import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import svgPaths from "../../imports/Expander1/svg-vqugh1pll5";
import appLogo from "../../assets/app_logo.png";
import imgLora from "../../imports/Home-1/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgSam from "../../imports/Home-1/67e2795861635095f78d499d37fb8c47640346cd.png";
import imgClara from "../../imports/Home-1/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgSteve from "../../imports/Home-1/81459e21086bbb45f043de724414eb6c6a228454.png";
import imgSarah from "../../imports/Home-1/2ede8e04425e852843b64720e2e6023d1ed754cb.png";

const navTextStyle: React.CSSProperties = {
  fontFamily: "Satoshi, sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#000",
  whiteSpace: "nowrap",
};

const aiAgents = [
  {
    name: "Lora",
    role: "AI Marketing Lead",
    img: imgLora,
    bg: "linear-gradient(160deg, rgb(149,0,229) 0%, rgb(195,29,237) 100%)",
    scale: 1.3,
    offsetY: "2px",
  },
  {
    name: "Sam",
    role: "AI Strategist",
    img: imgSam,
    bg: "linear-gradient(160deg, rgb(0,115,255) 0%, rgb(13,162,255) 100%)",
    scale: 1.3,
    offsetY: "2px",
  },
  {
    name: "Clara",
    role: "AI Content Writer",
    img: imgClara,
    bg: "linear-gradient(160deg, rgba(38,193,250,0.9) 0%, rgba(94,212,255,0.9) 100%)",
    scale: 1.1,
    offsetY: "0px",
  },
  {
    name: "Steve",
    role: "AI Visual Designer",
    img: imgSteve,
    bg: "linear-gradient(140deg, rgb(255,219,211) 0%, rgb(255,221,181) 100%)",
    scale: 1.9,
    offsetY: "2px",
  },
  {
    name: "Sarah",
    role: "AI Social Media Manager",
    img: imgSarah,
    bg: "linear-gradient(160deg, rgba(21,245,227,0.9) 0%, rgba(0,110,101,0.9) 100%)",
    scale: 1.1,
    offsetY: "0px",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close on navigation
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Pill — relative so dropdown anchors to its bottom */}
      <div
        ref={pillRef}
        className="pointer-events-auto relative backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] px-6 py-[4px] flex items-center"
        style={{ gap: 48 }}
      >
        {/* Logo group */}
        <Link to="/" className="flex items-center gap-[6px] py-2 shrink-0">
          <img
            src={appLogo}
            alt="Loraloop logo"
            style={{ width: 34, height: 34, objectFit: "contain", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "19.5px",
              lineHeight: "24.82px",
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            Loraloop.ai
          </span>
        </Link>

        {/* Desktop nav — click-only dropdown */}
        <nav className="hidden md:flex items-center" style={{ gap: 4 }}>
          {/* AI Employees — click only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            style={{ background: "none", border: "none", outline: "none", cursor: "pointer", padding: 0 }}
            className="flex gap-[2px] items-center justify-center px-[12px] py-[8px]"
          >
            <span style={navTextStyle}>AI Employees</span>
            <div className="w-4 h-4 flex items-center justify-center ml-[4px]">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 9.33333 5.33333"
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <path clipRule="evenodd" d={svgPaths.p23cd8f00} fill="#40566D" fillRule="evenodd" />
              </svg>
            </div>
          </button>

          <Link to="/solution" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Solution</span>
          </Link>
          <Link to="/blog" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Blogs</span>
          </Link>
          <Link to="/pricing" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Pricing</span>
          </Link>
        </nav>

        {/* Join Waitlist Button */}
        <button
          type="button"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo(0, 0);
              window.dispatchEvent(new CustomEvent("focus-waitlist-email"));
            } else {
              navigate("/", { state: { focusEmail: true } });
            }
          }}
          className="bg-[#1877f2] hover:bg-[#1565c0] transition-colors rounded-full px-5 py-2 flex items-center justify-center"
          style={{ border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Join Waitlist
          </span>
        </button>

        {/* Dropdown panel — anchored to pill bottom edge */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: 480,
              background: "white",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
              padding: "16px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: 8,
              columnGap: 16,
              boxSizing: "border-box",
              zIndex: 200,
            }}
          >
            {aiAgents.map((agent) => (
              <Link
                key={agent.name}
                to={`/solution?agent=${agent.name.toLowerCase()}`}
                className="flex items-center gap-[10px] cursor-pointer rounded-[8px] px-[8px] py-[6px] no-underline"
                style={{ backgroundColor: "transparent", transition: "background-color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setOpen(false)}
              >
                {/* 40×40 colored circle avatar */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    borderRadius: "50%",
                    background: agent.bg,
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <img
                    alt={agent.name}
                    src={agent.img}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: `scale(${agent.scale}) translateY(${agent.offsetY})`,
                    }}
                  />
                </div>

                {/* Role + Name */}
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      lineHeight: "18px",
                      color: "#1f2937",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      margin: 0,
                    }}
                  >
                    {agent.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "General Sans, sans-serif",
                      fontWeight: 500,
                      fontSize: 11,
                      lineHeight: "16px",
                      color: "#6b7280",
                      whiteSpace: "nowrap",
                      margin: 0,
                    }}
                  >
                    {agent.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
