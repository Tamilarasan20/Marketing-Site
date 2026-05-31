import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import appLogo from "../../assets/loraloop-icon.svg";
import imgLora from "../../imports/Home-1/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgSam from "../../imports/Home-1/67e2795861635095f78d499d37fb8c47640346cd.png";
import imgClara from "../../imports/Home-1/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgSteve from "../../imports/Home-1/81459e21086bbb45f043de724414eb6c6a228454.png";
import imgSarah from "../../imports/Home-1/2ede8e04425e852843b64720e2e6023d1ed754cb.png";

const solutionLinks = [
  { label: "For Founders", desc: "AI marketing when you have no time", to: "/for-founders", icon: "🚀" },
  { label: "For Agencies", desc: "Scale client output without hiring", to: "/for-agencies", icon: "🏢" },
  { label: "For Freelancers", desc: "Handle more clients, work less", to: "/for-freelancers", icon: "⚡" },
  { label: "For eCommerce", desc: "Product marketing on autopilot", to: "/for-ecommerce", icon: "🛍️" },
  { label: "For Creators", desc: "Consistent content across platforms", to: "/for-creators", icon: "🎨" },
];

const navTextStyle: React.CSSProperties = {
  fontFamily: "Satoshi, sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#000",
  whiteSpace: "nowrap",
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
    }}
  >
    <path
      d="M4 6.5L8 10.5L12 6.5"
      stroke="#40566D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
);

const soonTextStyle: React.CSSProperties = {
  ...navTextStyle,
  color: "#9ca3af",
};

const aiAgents = [
  {
    name: "Lora",
    role: "AI Marketing Lead",
    img: imgLora,
    bg: "linear-gradient(160deg, rgb(149,0,229) 0%, rgb(195,29,237) 100%)",
    scale: 1.3,
    offsetY: "2px",
    isSoon: false,
  },
  {
    name: "Sam",
    role: "AI Strategist",
    img: imgSam,
    bg: "#E5E7EB",
    scale: 1.3,
    offsetY: "2px",
    isSoon: true,
  },
  {
    name: "Clara",
    role: "AI Content Writer",
    img: imgClara,
    bg: "#E5E7EB",
    scale: 1.1,
    offsetY: "0px",
    isSoon: true,
  },
  {
    name: "Steve",
    role: "AI Visual Designer",
    img: imgSteve,
    bg: "#E5E7EB",
    scale: 1.9,
    offsetY: "2px",
    isSoon: true,
  },
  {
    name: "Sarah",
    role: "AI Social Media Manager",
    img: imgSarah,
    bg: "#E5E7EB",
    scale: 1.1,
    offsetY: "0px",
    isSoon: true,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close on navigation
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    if (!open && !solutionsOpen) return;
    const handler = (e: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, solutionsOpen]);

  const activeAgents = aiAgents.filter((a) => !a.isSoon);
  const soonAgents = aiAgents.filter((a) => a.isSoon);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Pill — relative so dropdown anchors to its bottom */}
      <div
        ref={pillRef}
        className="pointer-events-auto relative backdrop-blur-[8px] bg-[rgba(243,246,251,0.9)] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] px-3 md:px-6 py-[4px] flex items-center gap-3 md:gap-12"
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
              fontWeight: 500,
              fontSize: "19.5px",
              lineHeight: "24.82px",
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            Loraloop
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
              <ChevronIcon open={open} />
            </div>
          </button>

          <Link to="/solution" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Solution</span>
          </Link>
          <Link to="/blog" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Blog</span>
          </Link>
          <Link to="/pricing" className="flex items-center justify-center px-[12px] py-[8px]">
            <span style={navTextStyle}>Pricing</span>
          </Link>
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-2">
          <a
            href="https://app.loraloop.com/signin"
            className="flex items-center justify-center px-3 md:px-5 py-2 rounded-full bg-white hover:bg-[#f3f4f6] transition-colors"
          >
            <span
              className="text-[13px] md:text-[14px]"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#0f172a",
                whiteSpace: "nowrap",
              }}
            >
              Signin
            </span>
          </a>
          <a
            href="https://app.loraloop.com/signup"
            className="bg-[#1877f2] hover:bg-[#1565c0] transition-colors rounded-full px-3 md:px-5 py-2 flex items-center justify-center"
          >
            <span
              className="text-[13px] md:text-[14px]"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Get Started
            </span>
          </a>
        </div>

        {/* Solutions dropdown */}
        {solutionsOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: 480,
              background: "white",
              borderRadius: 24,
              border: "1px solid #e5e7eb",
              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxSizing: "border-box",
              zIndex: 200,
            }}
          >
            <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px 8px" }}>Who is Loraloop for?</p>
            {solutionLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 rounded-[12px] px-3 py-3 no-underline"
                style={{ backgroundColor: "transparent", transition: "background-color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                onClick={() => setSolutionsOpen(false)}
              >
                <span style={{ fontSize: 20, width: 32, textAlign: "center", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700, fontSize: 14, color: "#1f2937", margin: 0 }}>{item.label}</p>
                  <p style={{ fontFamily: "General Sans, sans-serif", fontWeight: 500, fontSize: 12, color: "#6b7280", margin: 0 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* AI Employees dropdown panel — anchored to pill bottom edge */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: 520,
              background: "white",
              borderRadius: 24,
              border: "1px solid #e5e7eb",
              boxShadow: "0px 12px 32px rgba(0,0,0,0.12)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxSizing: "border-box",
              zIndex: 200,
            }}
          >
            {/* Active Agents */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {activeAgents.map((agent) => (
                <Link
                  key={agent.name}
                  to={`/solution?agent=${agent.name.toLowerCase()}`}
                  className="flex items-center gap-[12px] cursor-pointer rounded-[12px] px-[8px] py-[6px] no-underline"
                  style={{ backgroundColor: "transparent", transition: "background-color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafc")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  onClick={() => setOpen(false)}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
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
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: "20px",
                        color: "#1f2937",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {agent.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "General Sans, sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: "#6b7280",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {agent.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contents Updating soon pill */}
            <div className="flex items-center">
              <div
                style={{
                  background: "#F3F4F6",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#6B7280",
                  }}
                >
                  Contents Updating soon
                </span>
              </div>
            </div>

            {/* Soon Agents */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {soonAgents.map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center gap-[12px] rounded-[12px] px-[8px] py-[6px]"
                  style={{ opacity: 0.8 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
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
                        filter: "grayscale(100%)",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: "20px",
                        color: "#9CA3AF",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {agent.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "General Sans, sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: "#9CA3AF",
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {agent.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
