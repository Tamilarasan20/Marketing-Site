import { useState } from "react";
import { Link } from "react-router";
import imgImage from "../../imports/BlogL1-1/566bd8859808c5b6c2c0d3b943de3f7a326c5dca.png";
import imgImage1 from "../../imports/BlogL1-1/705d74ba75d640101f8addb80d435e1726949c3f.png";
import imgImage2 from "../../imports/BlogL1-1/c25b0a6ee79ed88f3818ee97020997d193100651.png";

const blogPosts = [
  {
    id: 1,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    description: "Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features,",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 2,
    title: "Best DeepSeek Alternatives for 2026",
    description: "Overview of the best DeepSeek alternatives in 2026, comparing tools like Sintra AI, ChatGPT, and Claude across workflows, research.Overview of the best DeepSeek alternatives in 2026, comparing tools like Sintra AI, ChatGPT, and Claude across workflows, research.",
    category: "Product",
    date: "April 6, 2026",
    image: imgImage2,
  },
  {
    id: 3,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    description: "Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features,",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 4,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    description: "Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features,",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 5,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    description: "Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features,",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 6,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    description: "Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features,",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-32 pb-10">
        <div className="px-4 md:px-20 py-10 md:py-20">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
            <Link to="/blog/1" className="h-[300px] md:h-[360px] w-full md:w-[576px] rounded-2xl overflow-hidden shrink-0">
              <img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={imgImage} />
            </Link>
            <div className="flex flex-col gap-4 w-full md:w-[530px]">
              <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#1f2937] text-sm">Business</p>
              <Link to="/blog/1">
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[56px] text-[#1f2937] text-3xl md:text-5xl tracking-[-1.2px] hover:text-[#1877f2] transition-colors">
                  8 Best Relevance AI Alternatives and Competitors in 2026
                </h1>
              </Link>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base">
                Best Relevance AI alternatives in 2026 compared, including Sintra AI, Lindy, and Flowise, covering AI agents, automation workflows, pricing, features, and real-world business use cases.
              </p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">April 6, 2026</p>
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
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="flex flex-col gap-4 rounded-2xl group"
                >
                  <div className="h-[200px] rounded-2xl overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={post.image}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#1f2937] text-xs">
                      {post.category}
                    </p>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl overflow-hidden text-ellipsis group-hover:text-[#1877f2] transition-colors">
                        {post.title}
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#6b7280] text-sm overflow-hidden text-ellipsis line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-12 px-5 rounded-full font-['Satoshi:Bold',sans-serif] leading-6 text-base transition-colors ${
                    currentPage === page
                      ? "bg-[#1877f2] text-white"
                      : "bg-white text-[#111827] border border-[#e5e7eb] hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <div className="flex gap-1">
                <div className="w-[5px] h-[5px] rounded-full bg-[#d1d5db]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#d1d5db]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#d1d5db]" />
              </div>
              <button className="h-12 px-5 rounded-full bg-white text-[#111827] border border-[#e5e7eb] font-['Satoshi:Bold',sans-serif] leading-6 text-base hover:bg-gray-100 transition-colors">
                24
              </button>
              <button className="h-12 px-5 rounded-full bg-white text-[#111827] border border-[#e5e7eb] font-['Satoshi:Bold',sans-serif] leading-6 text-base hover:bg-gray-100 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
