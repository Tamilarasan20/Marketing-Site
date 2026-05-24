import { useParams, Link } from "react-router";

const TOOLS_BASE_URL = "https://loraloop-free-tools.vercel.app";

const toolNames: Record<string, string> = {
  "brand-voice": "AI Brand Voice Generator",
  "social-calendar": "AI Social Media Calendar Generator",
  "content-pillars": "AI Content Pillar Generator",
  "hook-generator": "AI Hook Generator",
  "competitor-audit": "AI Competitor Audit Tool",
  "ad-copy": "AI Ad Copy Generator",
  "marketing-strategy": "AI Marketing Strategy Generator",
  "landing-page-copy": "AI Landing Page Copy Generator",
  "product-description": "AI Product Description Generator",
};

export default function ToolEmbed() {
  const { slug } = useParams<{ slug: string }>();
  const toolName = toolNames[slug ?? ""] ?? "AI Tool";

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 72px)" }}>
      <div className="flex items-center gap-3 px-4 md:px-8 py-3 border-b border-[#e5e7eb] bg-white shrink-0">
        <Link to="/" className="text-[#6b7280] hover:text-[#1877f2] text-sm transition-colors">Home</Link>
        <span className="text-[#d1d5db] text-sm">/</span>
        <span className="text-[#1f2937] text-sm font-medium">{toolName}</span>
        <span className="ml-auto text-xs text-[#9ca3af] bg-[#f3f4f6] px-2 py-1 rounded-full">Free · No login required</span>
      </div>
      <iframe
        src={`${TOOLS_BASE_URL}/tools/${slug}`}
        className="w-full flex-1 border-0"
        title={toolName}
        allow="clipboard-write"
      />
    </div>
  );
}
