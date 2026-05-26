import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import { getToolBySlug } from '../../data/toolsData';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

export default function GenericTool() {
  const { slug } = useParams<{ slug: string }>();
  const tool = getToolBySlug(slug ?? '');
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [userInput, setUserInput] = useState('');

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 text-lg">Tool not found.</p>
        <Link to="/tools" className="mt-4 inline-block text-violet-600 hover:underline">
          Browse all tools →
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    generate('generic', { toolName: tool.name, toolDescription: tool.description, userInput });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = `${tool.name} — Free AI Tool by Loraloop`;

  const handleShare = (platform: 'x' | 'linkedin' | 'facebook' | 'native') => {
    const encoded = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    if (platform === 'x') window.open(`https://x.com/intent/tweet?url=${encoded}&text=${encodedTitle}`, '_blank');
    if (platform === 'linkedin') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, '_blank');
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`, '_blank');
    if (platform === 'native' && navigator.share) navigator.share({ title: shareTitle, url: shareUrl });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link>
        <span>/</span>
        <Link to="/tools" className="hover:text-violet-600">All AI Tools</Link>
        <span>/</span>
        <span className="text-gray-700">{tool.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-4xl">{tool.icon}</span>
          <Link
            to="/tools"
            className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors"
          >
            FREE AI TOOLS
          </Link>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
            Free · No login required
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">{tool.name}</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">{tool.description}</p>

        {/* Share row */}
        <div className="flex items-center gap-3 mt-5 flex-wrap">
          <span className="text-sm text-gray-400 font-medium">Share:</span>
          <button onClick={() => handleShare('x')} aria-label="Share on X" className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </button>
          <button onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn" className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </button>
          <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook" className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-[#1877f2]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </button>
          <button onClick={() => handleShare('native')} aria-label="Share" className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684 6.632 3.316m-6.632-6 6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684zm0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684z" /></svg>
          </button>
        </div>
      </div>

      {/* Input form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">What do you need?</h2>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          Describe your request in detail. Include relevant context such as your product, target audience, tone, industry, or any specific requirements.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={`e.g. Tell me about your product, audience, goals, and any specific requirements for the ${tool.name.toLowerCase()}…`}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none leading-relaxed"
            />
          </div>
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
          )}
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating…
              </span>
            ) : (
              'Generate'
            )}
          </button>
        </form>
      </div>

      {/* Output */}
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Result</h2>
            {output && !isLoading && (
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors"
              >
                Copy to clipboard
              </button>
            )}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}
            {isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
        </div>
      )}

      {/* Info sections */}
      <div className="mt-12 space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is the {tool.name}?</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            The {tool.name} is a free AI-powered tool that helps you {tool.description.toLowerCase()}. Powered by advanced AI, it saves you hours of time by generating high-quality output in seconds — no expertise or login required.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How to get the best results</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-violet-500 font-bold mt-0.5">→</span><span><strong>Be specific:</strong> The more context you provide, the better the output. Include your product, audience, tone, and goals.</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold mt-0.5">→</span><span><strong>Include examples:</strong> If you have a preferred style or format, describe it or paste an example.</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold mt-0.5">→</span><span><strong>Iterate:</strong> Generate multiple times with different inputs to explore different angles.</span></li>
            <li className="flex gap-2"><span className="text-violet-500 font-bold mt-0.5">→</span><span><strong>Edit the output:</strong> Use the AI's output as a starting point and refine it to perfectly match your voice.</span></li>
          </ul>
        </div>
      </div>

      {/* Next 10 Tools */}
      <NextToolsSection currentSlug={slug ?? ''} />

      {/* Pre-footer CTA */}
      <ToolCtaSection />
    </div>
  );
}
