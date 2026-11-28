interface BlogThumbnailProps {
  src?: string;
  alt?: string;
  category: string;
  className?: string;
}

/**
 * Blog card and header image. Every post has a cover photo (data/blogCovers.ts).
 * Owner rule: never an emoji. The fallback is a plain brand gradient with the category name,
 * only for a post added without a cover.
 */
export function BlogThumbnail({ src, alt, category, className = "" }: BlogThumbnailProps) {
  if (src) {
    return (
      <div className={`w-full h-full relative overflow-hidden bg-[#f1f5f9] ${className}`}>
        <img src={src} alt={alt ?? category} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center relative overflow-hidden select-none ${className}`}
      style={{ background: "linear-gradient(135deg, #1f5eff, #0b1b33)" }}
    >
      <span className="text-white/90 text-xs font-semibold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
}
