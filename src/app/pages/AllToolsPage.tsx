import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { tools, ALL_CATEGORIES, type ToolCategory } from '../data/toolsData';

export default function AllToolsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All');

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-violet-600">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Free AI Tools</span>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              {tools.length} Free AI Tools · No login required
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Free AI Tools for <br className="hidden sm:block" />Marketing &amp; Content
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Generate copy, content, ads, emails, and more — instantly. No account needed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-lg">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tools…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white shadow-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              activeCategory === 'All'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            All ({tools.length})
          </button>
          {ALL_CATEGORIES.map((cat) => {
            const count = tools.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeCategory === cat
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Results count */}
        {(search || activeCategory !== 'All') && (
          <p className="text-sm text-gray-400 mb-4">
            {filtered.length} tool{filtered.length !== 1 ? 's' : ''} found
          </p>
        )}

        {/* Tool grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool) => (
              <Link
                key={tool.slug}
                to={`/tools/${tool.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-violet-300 hover:shadow-md transition-all flex flex-col gap-2"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{tool.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-violet-700 transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                    {tool.category}
                  </span>
                  <span className="text-xs text-violet-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Try free →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-2">No tools found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="text-violet-600 text-sm hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
