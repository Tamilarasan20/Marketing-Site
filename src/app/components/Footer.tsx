import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { agentList } from "../data/agents";
import { segments } from "../data/segments";
import appLogo from "../../assets/loraloop-icon.svg";

const audienceLinks = segments.map((seg) => ({ name: seg.menuLabel, to: seg.slug }));

const aiTools = [
  { name: "Brand Voice Generator", to: "/tools/brand-voice" },
  { name: "Social Media Calendar", to: "/tools/social-calendar" },
  { name: "Instagram Caption Generator", to: "/tools/instagram-caption" },
  { name: "Hook Generator", to: "/tools/hook-generator" },
  { name: "Bio Generator", to: "/tools/bio-generator" },
  { name: "Blog Title Generator", to: "/tools/blog-title-generator" },
  { name: "Ad Copy Generator", to: "/tools/ad-copy" },
  { name: "Competitor Audit Tool", to: "/tools/competitor-audit" },
  { name: "Marketing Strategy Generator", to: "/tools/marketing-strategy" },
];

const blogLinks = [
  { name: "After Black Friday: 30-day retention plan", to: "/blog/after-black-friday-retention-plan-shopify" },
  { name: "Meta ads creative testing framework", to: "/blog/meta-ads-creative-testing-framework-2026" },
  { name: "GEO vs SEO in 2026", to: "/blog/geo-vs-seo-2026" },
  { name: "How to choose an AI marketing agent", to: "/blog/how-to-choose-ai-marketing-agent" },
  { name: "BFCM post-mortem template", to: "/blog/bfcm-post-mortem-template-agencies" },
];

const companyLinks = [
  { name: "About us", to: "/about" },
  { name: "Contact Us/Support", to: "/contact" },
];

const legalLinks = [
  { name: "Terms of Service", to: "/terms" },
  { name: "Privacy Policy", to: "/privacy-policy" },
  { name: "Data Deletion", to: "/data-deletion" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/loraloop/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/loraloop_ai?igsh=YXR6bnpjcXB3bXFi",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/TKtamilarasan2",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 5.064-6.933zm-1.291 19.49h2.039L6.486 3.24H4.298l13.312 17.403z",
  },
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "pt-BR", label: "Português (BR)" },
  { code: "ar", label: "العربية" },
];

const headingClass =
  "font-['Satoshi',sans-serif] font-semibold text-white text-[17px] leading-6";
const linkClass =
  "font-['General_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[#9ca3af] hover:text-white transition-colors break-words";
const metaLinkClass =
  "font-['General_Sans',sans-serif] font-normal text-[13px] leading-5 text-[#9ca3af] hover:text-white transition-colors whitespace-nowrap";

// Light, warm skin used on the redesigned home page.
const lightHeadingClass =
  "font-['Satoshi',sans-serif] font-bold text-[#2c2c2c] text-[17px] leading-6";
const lightLinkClass =
  "font-['General_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[rgba(44,44,44,0.7)] hover:text-[#141412] transition-colors break-words";
const lightMetaLinkClass =
  "font-['General_Sans',sans-serif] font-normal text-[13px] leading-5 text-[rgba(44,44,44,0.6)] hover:text-[#141412] transition-colors whitespace-nowrap";

export type FooterVariant = "default" | "light";

export default function Footer({ variant = "default" }: { variant?: FooterVariant } = {}) {
  const light = variant === "light";
  const headingCls = light ? lightHeadingClass : headingClass;
  const linkCls = light ? lightLinkClass : linkClass;
  const metaLinkCls = light ? lightMetaLinkClass : metaLinkClass;
  const muted = light ? "text-[rgba(44,44,44,0.6)]" : "text-[#9ca3af]";
  const divider = light ? "text-[#2c2c2c]/20" : "text-white/20";
  const { i18n } = useTranslation();
  // Initialised after mount so the prerendered markup and the first client
  // render agree, even when a different language is stored locally.
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.resolvedLanguage ?? "en");
  }, [i18n.resolvedLanguage]);

  const changeLanguage = (code: string) => {
    setLang(code);
    i18n.changeLanguage(code);
    try {
      localStorage.setItem("loraloop_language", code);
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={light
        ? "relative isolate -mt-12 md:-mt-16 rounded-t-[32px] md:rounded-t-[64px] bg-[#f3f2ef] text-[#141412]"
        : "bg-[#0a1630] text-white font-['Geist','Inter',sans-serif]"}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-10">
        {/* Oversized wordmark */}
        <div className="overflow-hidden">
          <p
            aria-hidden="true"
            className={`font-['Satoshi',sans-serif] font-bold ${light ? "text-[#2c2c2c]" : "text-white"} whitespace-nowrap select-none leading-[0.82] tracking-[-0.045em] text-[clamp(2.5rem,23vw,19.25rem)] pt-[0.04em] pb-[0.16em]`}
          >
            Loraloop
          </p>
        </div>

        {/* Brand + link columns */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-8">
            <Link to="/" aria-label="Loraloop home" className="w-fit">
              <img
                loading="lazy"
                decoding="async"
                src={appLogo}
                alt="Loraloop"
                className="w-10 h-10 object-contain"
              />
            </Link>
            <div className="flex gap-5 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={light ? "text-[rgba(44,44,44,0.6)] hover:text-[#141412] transition-colors" : "text-[#9ca3af] hover:text-white transition-colors"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[13px]">
            <p className={headingCls}>Solutions</p>
            <div className="flex flex-col gap-[13px] mt-2">
              {audienceLinks.map((link) => (
                <Link key={link.to} to={link.to} className={linkCls}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[13px]">
            <p className={headingCls}>Agents</p>
            <div className="flex flex-col gap-[13px] mt-2">
              {agentList.map((agent) => (
                <Link key={agent.key} to={agent.slug} className={linkCls}>
                  {agent.name} - {agent.role}
                </Link>
              ))}
            </div>

            <p className={`${headingCls} mt-10`}>Company</p>
            <div className="flex flex-col gap-[13px] mt-2">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to} className={linkCls}>
                  {link.name}
                </Link>
              ))}
              <p className={`font-['General_Sans',sans-serif] font-normal text-[15px] leading-[22px] ${light ? "text-[rgba(44,44,44,0.45)]" : "text-[#6b7280]"}`}>
                Become Affiliate (Soon)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[13px]">
            <p className={headingCls}>AI Tools</p>
            <div className="flex flex-col gap-[13px] mt-2">
              {aiTools.map((tool) => (
                <Link key={tool.to} to={tool.to} className={linkCls}>
                  {tool.name}
                </Link>
              ))}
              <Link to="/tools" className={linkCls}>
                All tools →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[13px]">
            <p className={headingCls}>Blog</p>
            <div className="flex flex-col gap-[13px] mt-2">
              {blogLinks.map((link) => (
                <Link key={link.to} to={link.to} className={linkCls}>
                  {link.name}
                </Link>
              ))}
              <Link to="/blog" className={linkCls}>
                All posts →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-16 md:mt-24 border-t ${light ? "border-[#e3e1dc]" : "border-white/10"} pt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6`}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
            <p className={`font-['General_Sans',sans-serif] font-normal text-[13px] leading-5 ${muted} whitespace-nowrap`}>
              © 2026 Orimoretail Pvt. Ltd.
            </p>
            <span aria-hidden="true" className={divider}>
              |
            </span>
            {legalLinks.map((link, index) => (
              <span key={link.to} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className={divider}>
                    •
                  </span>
                )}
                <Link to={link.to} className={metaLinkCls}>
                  {link.name}
                </Link>
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={backToTop}
              className={light
                ? "font-['General_Sans',sans-serif] font-medium text-sm leading-5 text-[#2c2c2c] rounded-[16px] border border-[#e3e1dc] bg-white/60 px-5 py-2.5 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141412]/30"
                : "font-['General_Sans',sans-serif] font-medium text-sm leading-5 text-white rounded-full border border-white/15 px-5 py-2.5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"}
            >
              Back to top ↑
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6">
            <p className={`font-['General_Sans',sans-serif] font-normal text-[13px] leading-5 ${muted} text-center lg:whitespace-nowrap`}>
              The AI-native marketing team from{" "}
              <span className={`${light ? "text-[#2c2c2c]" : "text-white"} font-medium`}>Orimoretail</span>
            </p>
            <label className={light
              ? "flex items-center gap-2 rounded-[16px] border border-[#e3e1dc] bg-white/60 pl-4 pr-3 py-2 hover:bg-white transition-colors"
              : "flex items-center gap-2 rounded-full border border-white/15 pl-4 pr-3 py-2 hover:bg-white/10 transition-colors"}>
              <span className="sr-only">Select language</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className={`w-4 h-4 ${muted}`}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
              </svg>
              <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
                className={`font-['General_Sans',sans-serif] font-medium text-sm leading-5 ${light ? "text-[#2c2c2c]" : "text-white"} bg-transparent appearance-none outline-none cursor-pointer pr-1`}
              >
                {languages.map((language) => (
                  <option
                    key={language.code}
                    value={language.code}
                    className={light ? "bg-white text-[#2c2c2c]" : "bg-[#0a1630] text-white font-['Geist','Inter',sans-serif]"}
                  >
                    {language.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}
