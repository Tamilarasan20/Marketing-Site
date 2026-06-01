interface BlogThumbnailProps {
  emoji?: string;
  gradient?: [string, string];
  src?: string;
  alt?: string;
  category: string;
  className?: string;
}

const generatedImageThumbnails: Record<string, { src: string; alt: string }> = {
  IMG41: { src: "/blog-thumbnails/41-chatgpt-vs-claude-vs-gemini.svg", alt: "ChatGPT vs Claude vs Gemini for Marketing" },
  IMG42: { src: "/blog-thumbnails/42-chatgpt-plus-vs-ai-marketing-platform.svg", alt: "ChatGPT Plus vs AI Marketing Platform" },
  IMG43: { src: "/blog-thumbnails/43-automate-marketing-with-ai.svg", alt: "How to Automate Marketing with AI" },
  IMG44: { src: "/blog-thumbnails/44-ai-customer-engagement.svg", alt: "AI Customer Engagement" },
  IMG45: { src: "/blog-thumbnails/45-business-process-automation-marketing.svg", alt: "Business Process Automation for Marketing Teams" },
  IMG46: { src: "/blog-thumbnails/46-ai-lead-generation.svg", alt: "AI Lead Generation Through Content SEO and Social" },
  IMG47: { src: "/blog-thumbnails/47-ai-for-directors-and-managers.svg", alt: "AI for Directors and Managers" },
  IMG48: { src: "/blog-thumbnails/48-ai-workflows-explained.svg", alt: "AI Workflows Explained for Marketing Teams" },
  IMG49: { src: "/blog-thumbnails/49-best-ai-social-media-tools.svg", alt: "Best AI Social Media Tools for Small Businesses" },
  IMG50: { src: "/blog-thumbnails/50-ai-email-marketing.svg", alt: "AI Email Marketing for Small Businesses" },
};

export function BlogThumbnail({
  emoji = "📝",
  gradient = ["#6d28d9", "#4f46e5"],
  src,
  alt,
  category,
  className = "",
}: BlogThumbnailProps) {
  const generatedImage = generatedImageThumbnails[emoji];
  const imageSrc = src ?? generatedImage?.src;
  const imageAlt = alt ?? generatedImage?.alt ?? category;

  if (imageSrc) {
    return (
      <div className={`w-full h-full relative overflow-hidden bg-[#f8fafc] ${className}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-8 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute top-5 left-5 w-5 h-5 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-6 w-3 h-3 rounded-full bg-white/20" />
      <span className="text-5xl md:text-6xl relative z-10 drop-shadow-lg">{emoji}</span>
      <span className="mt-3 relative z-10 text-white/90 text-xs font-semibold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
}
