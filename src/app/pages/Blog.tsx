import { useState } from "react";
import { Link } from "react-router";
import { blogPosts as allBlogPosts } from "../data/blogData";
import { blogThumbnails } from "../data/blogThumbnails";
import { BlogThumbnail } from "../components/BlogThumbnail";

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

  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-32 pb-10">
        <div className="px-4 md:px-20 py-10 md:py-20">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
            <Link to={`/blog/${featuredPost.id}`} className="h-[300px] md:h-[360px] w-full md:w-[576px] rounded-2xl overflow-hidden shrink-0 hover:scale-[1.02] transition-transform duration-300">
              <BlogThumbnail
                emoji={featuredThumb.emoji}
                gradient={featuredThumb.gradient}
                category={featuredPost.category}
              />
            </Link>
            <div className="flex flex-col gap-4 w-full md:w-[530px]">
              <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#1f2937] text-sm">{featuredPost.category}</p>
              <Link to={`/blog/${featuredPost.id}`}>
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[56px] text-[#1f2937] text-3xl md:text-5xl tracking-[-1.2px] hover:text-[#1877f2] transition-colors">
                  {featuredPost.title}
                </h1>
              </Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">
                {featuredPost.description}
              </p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">{featuredPost.date}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f9fafc] px-4 md:px-20 py-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {["All", "Product", "Business"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-3 rounded-full font-['Satoshi:Bold',sans-serif] leading-5 text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-[#eef4ff] text-[#1877f2]"
                        : "bg-white text-[#374151] hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 w-full md:w-[390px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search blog posts"
                  className="flex-1 h-10 px-4 py-3 rounded-full border border-[#e5e7eb] bg-white font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#9ca3af] text-sm focus:outline-none focus:border-[#1877f2]"
                />
                <button className="h-10 px-5 rounded-full border border-[#e5e7eb] bg-white font-['Satoshi:Bold',sans-serif] leading-5 text-[#111827] text-sm hover:bg-gray-100 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const thumb = blogThumbnails[post.id] ?? { emoji: "📝", gradient: ["#6d28d9", "#4f46e5"] as [string, string] };
                return (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex flex-col gap-4 rounded-2xl group">
                    <div className="h-[200px] rounded-2xl overflow-hidden">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-300">
                        <BlogThumbnail emoji={thumb.emoji} gradient={thumb.gradient} category={post.category} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#1f2937] text-xs">{post.category}</p>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl overflow-hidden text-ellipsis group-hover:text-[#1877f2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#6b7280] text-sm overflow-hidden text-ellipsis line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">{post.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <button
                onClick={() => setCurrentPage(1)}
                className={`h-12 px-5 rounded-full font-['Satoshi:Bold',sans-serif] leading-6 text-base transition-colors ${
                  currentPage === 1
                    ? "bg-[#1877f2] text-white"
                    : "bg-white text-[#111827] border border-[#e5e7eb] hover:bg-gray-100"
                }`}
              >
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
