import { useState } from "react";
import { Link } from "react-router";
import { Clock } from "lucide-react";
import { blogPosts as allBlogPosts } from "../data/blogData";
import type { ContentSection } from "../data/blogData";
import { blogThumbnails } from "../data/blogThumbnails";
import { BlogThumbnail } from "../components/BlogThumbnail";

function getReadTime(content: ContentSection[]): number {
  const words = content.reduce((acc, section) => {
    if ('text' in section) return acc + section.text.split(' ').length;
    if ('items' in section && Array.isArray(section.items)) {
      if (typeof section.items[0] === 'string') return acc + (section.items as string[]).join(' ').split(' ').length;
      return acc + (section.items as { q: string; a: string }[]).reduce((s, i) => s + i.q.split(' ').length + i.a.split(' ').length, 0);
    }
    return acc;
  }, 0);
  return Math.max(1, Math.ceil(words / 230));
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allBlogPosts[0];
  const featuredThumb = blogThumbnails[featuredPost.id] ?? { emoji: "📝", gradient: ["#6d28d9", "#4f46e5"] as [string, string] };
  const featuredReadTime = getReadTime(featuredPost.content);

  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-32 pb-10">

        {/* Featured post */}
        <div className="px-4 md:px-20 py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-14 items-start md:items-center">
            <Link to={`/blog/${featuredPost.slug}`} className="h-[320px] md:h-[400px] w-full md:w-[560px] rounded-3xl overflow-hidden shrink-0 hover:scale-[1.01] transition-transform duration-300">
              <BlogThumbnail emoji={featuredThumb.emoji} gradient={featuredThumb.gradient} category={featuredPost.category} />
            </Link>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-3">
                <span className="font-['Satoshi:Bold',sans-serif] text-xs text-[#1877f2] bg-[#eff6ff] px-3 py-1 rounded-full">{featuredPost.category}</span>
                <span className="flex items-center gap-1.5 font-['General_Sans:Medium',sans-serif] text-[#64748b] text-xs"><Clock size={12} />{featuredReadTime} min read</span>
              </div>
              <Link to={`/blog/${featuredPost.slug}`}>
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-[1.12] text-[#0f172a] text-4xl md:text-5xl tracking-[-1.5px] hover:text-[#1877f2] transition-colors">
                  {featuredPost.title}
                </h1>
              </Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[1.75] text-[#475569] text-lg md:text-xl">
                {featuredPost.description}
              </p>
              <div className="flex items-center gap-3">
                <span className="font-['General_Sans:Medium',sans-serif] text-[#94a3b8] text-sm">{featuredPost.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                <span className="font-['General_Sans:Medium',sans-serif] text-[#94a3b8] text-sm">Loraloop Team</span>
              </div>
              <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-[#1877f2] font-['Satoshi:Bold',sans-serif] text-base hover:gap-3 transition-all">
                Read article →
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="bg-[#f8fafc] px-4 md:px-20 py-12">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {["All", "Product", "Business"].map((category) => (
                  <button key={category} onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-full font-['Satoshi:Bold',sans-serif] text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-[#1877f2] text-white shadow-sm"
                        : "bg-white text-[#374151] border border-[#e2e8f0] hover:border-[#1877f2] hover:text-[#1877f2]"
                    }`}>
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 w-full md:w-[360px]">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="flex-1 h-10 px-4 rounded-full border border-[#e2e8f0] bg-white font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm focus:outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/10"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const thumb = blogThumbnails[post.id] ?? { emoji: "📝", gradient: ["#6d28d9", "#4f46e5"] as [string, string] };
                const rt = getReadTime(post.content);
                return (
                  <Link key={post.id} to={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#1877f2] hover:shadow-lg transition-all duration-200 overflow-hidden">
                    <div className="h-[220px] overflow-hidden">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-300">
                        <BlogThumbnail emoji={thumb.emoji} gradient={thumb.gradient} category={post.category} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 p-5">
                      <div className="flex items-center gap-2">
                        <span className="font-['Satoshi:Bold',sans-serif] text-xs text-[#1877f2] bg-[#eff6ff] px-2.5 py-0.5 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-1 text-xs text-[#94a3b8] font-['General_Sans:Medium',sans-serif]"><Clock size={11} />{rt} min</span>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-[1.35] text-[#0f172a] text-xl group-hover:text-[#1877f2] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.65] text-[#64748b] text-base line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-['General_Sans:Medium',sans-serif] text-[#94a3b8] text-xs">{post.date}</span>
                        <span className="text-[#1877f2] text-sm font-['Satoshi:Bold',sans-serif] opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => setCurrentPage(1)}
                className={`h-10 px-5 rounded-full font-['Satoshi:Bold',sans-serif] text-sm transition-colors ${
                  currentPage === 1 ? "bg-[#1877f2] text-white" : "bg-white text-[#374151] border border-[#e2e8f0] hover:border-[#1877f2]"
                }`}>1</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
