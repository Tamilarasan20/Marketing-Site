export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: ToolCategory;
  icon: string;
}

export type ToolCategory =
  | 'Writing'
  | 'Blog'
  | 'SEO'
  | 'Product'
  | 'Video'
  | 'Social Media'
  | 'Email'
  | 'Advertising'
  | 'Copywriting'
  | 'Business'
  | 'AI Analytics'
  | 'Professional';

export const ALL_CATEGORIES: ToolCategory[] = [
  'Writing', 'Blog', 'SEO', 'Product', 'Video',
  'Social Media', 'Email', 'Advertising', 'Copywriting',
  'Business', 'AI Analytics', 'Professional',
];

export const tools: Tool[] = [
  // ── Writing ──────────────────────────────────────────────────
  { name: 'AI Resume Builder', slug: 'ai-resume-builder', description: 'Build a professional, ATS-optimized resume in minutes', category: 'Professional', icon: '📄' },
  { name: 'Essay Writer', slug: 'essay-writer', description: 'Generate well-structured essays on any topic instantly', category: 'Writing', icon: '✍️' },
  { name: 'Article Writer', slug: 'article-writer', description: 'Write high-quality articles on any subject with AI', category: 'Writing', icon: '📰' },
  { name: 'AI Article Writer', slug: 'ai-article-writer', description: 'Generate long-form AI-powered articles quickly', category: 'Writing', icon: '🤖' },
  { name: 'Write For Me Generator', slug: 'write-for-me', description: 'Tell us what you need — AI writes it for you', category: 'Writing', icon: '✨' },
  { name: 'Article Summarizer', slug: 'article-summarizer', description: 'Summarize any long article into key takeaways', category: 'Writing', icon: '📝' },
  { name: 'Content Rewriter', slug: 'content-rewriter', description: 'Rewrite content to be fresher, clearer, or more engaging', category: 'Writing', icon: '🔄' },
  { name: 'Paragraph Writer', slug: 'paragraph-writer', description: 'Generate complete paragraphs from a single idea', category: 'Writing', icon: '📋' },
  { name: 'Sentence Expander', slug: 'sentence-expander', description: 'Expand short sentences into rich, detailed prose', category: 'Writing', icon: '↔️' },
  { name: 'Expand This Text Generator', slug: 'expand-text', description: 'Turn brief notes into full, fleshed-out content', category: 'Writing', icon: '📈' },
  { name: 'Reduce This Paragraph Generator', slug: 'reduce-paragraph', description: 'Condense long paragraphs without losing meaning', category: 'Writing', icon: '📉' },
  { name: 'Ask Any Question', slug: 'ask-any-question', description: 'Get clear, detailed answers to any question instantly', category: 'Writing', icon: '❓' },
  { name: 'Question Maker', slug: 'question-maker', description: 'Generate insightful questions for any topic or subject', category: 'Writing', icon: '🧠' },

  // ── Blog ─────────────────────────────────────────────────────
  { name: 'AI Blog Ideas And Titles Generator', slug: 'blog-title-generator', description: 'Generate 10 SEO-optimized blog title options instantly', category: 'Blog', icon: '💡' },
  { name: 'AI Blog Outline Generator', slug: 'blog-outline-generator', description: 'Create detailed blog post outlines structured for SEO', category: 'Blog', icon: '📑' },
  { name: 'AI Blog Introduction Generator', slug: 'blog-introduction-generator', description: 'Write compelling blog intros that keep readers hooked', category: 'Blog', icon: '🎯' },
  { name: 'AI Blog Conclusion Paragraph Generator', slug: 'blog-conclusion-generator', description: 'Wrap up blog posts with impactful conclusion paragraphs', category: 'Blog', icon: '🏁' },
  { name: 'AI Blog Section Completer', slug: 'blog-section-completer', description: 'Complete any blog section with AI-generated content', category: 'Blog', icon: '🔧' },
  { name: 'Subheading Generator', slug: 'subheading-generator', description: 'Generate SEO-friendly H2/H3 subheadings for your content', category: 'Blog', icon: '📰' },

  // ── SEO ──────────────────────────────────────────────────────
  { name: 'Website Meta Title Generator', slug: 'meta-title-generator', description: 'Write click-worthy meta titles optimized for search', category: 'SEO', icon: '🔍' },
  { name: 'Website Meta Description Generator', slug: 'meta-description-generator', description: 'Create compelling meta descriptions that drive clicks', category: 'SEO', icon: '🔎' },
  { name: 'Website Meta Keywords Generator', slug: 'meta-keywords-generator', description: 'Generate relevant keyword sets for any page or topic', category: 'SEO', icon: '🏷️' },

  // ── Product ──────────────────────────────────────────────────
  { name: 'AI Product Description Generator', slug: 'ai-product-description', description: 'Write persuasive AI-powered product descriptions', category: 'Product', icon: '🛍️' },
  { name: 'Product Description Generator', slug: 'product-description', description: 'Write compelling product copy that converts browsers', category: 'Product', icon: '📦' },
  { name: 'Amazon Product Listing Generator', slug: 'amazon-product-listing', description: 'Create optimized Amazon listings that rank and convert', category: 'Product', icon: '🏪' },
  { name: 'Amazon Product Title Generator', slug: 'amazon-product-title', description: 'Write keyword-rich Amazon titles for maximum visibility', category: 'Product', icon: '🏷️' },
  { name: 'Amazon Product Features Generator', slug: 'amazon-product-features', description: 'Generate bullet-point features that sell on Amazon', category: 'Product', icon: '✅' },
  { name: 'Product Name Generator', slug: 'product-name-generator', description: 'Brainstorm creative, memorable product names instantly', category: 'Product', icon: '💎' },

  // ── Copywriting ───────────────────────────────────────────────
  { name: 'Product Value Proposition Generator', slug: 'value-proposition-generator', description: 'Craft sharp value propositions that win customers', category: 'Copywriting', icon: '💰' },
  { name: 'Product Promotion Headlines Generator', slug: 'promotion-headlines-generator', description: 'Write attention-grabbing promotional headlines', category: 'Advertising', icon: '📣' },
  { name: 'Landing Page Description Generator', slug: 'landing-page-description', description: 'Write conversion-focused landing page copy', category: 'Copywriting', icon: '🚀' },
  { name: 'Landing Page Section Content Generator', slug: 'landing-page-section', description: 'Generate content for any landing page section', category: 'Copywriting', icon: '📄' },
  { name: 'Landing Page Subheadings Generator', slug: 'landing-page-subheadings', description: 'Create compelling subheadings for landing pages', category: 'SEO', icon: '📌' },

  // ── Business ─────────────────────────────────────────────────
  { name: 'One-Liner Description Generator', slug: 'one-liner-generator', description: 'Craft a punchy one-liner that explains your business', category: 'Business', icon: '⚡' },
  { name: 'Company Bio Generator', slug: 'company-bio-generator', description: 'Write a professional company bio for any platform', category: 'Business', icon: '🏢' },
  { name: 'Job Description Generator', slug: 'job-description-generator', description: 'Write clear, attractive job descriptions that attract talent', category: 'Professional', icon: '💼' },

  // ── Video ─────────────────────────────────────────────────────
  { name: 'AI Video Editor', slug: 'ai-video-editor', description: 'AI-powered video editing scripts and shot lists', category: 'Video', icon: '🎬' },
  { name: 'AI Video Script Generator', slug: 'video-script-generator', description: 'Generate compelling video scripts for any format', category: 'Video', icon: '🎥' },
  { name: 'YouTube Shorts Script Generator', slug: 'youtube-shorts-script', description: 'Write punchy 60-second scripts for YouTube Shorts', category: 'Video', icon: '⚡' },
  { name: 'TikTok/Reels Script Generator', slug: 'tiktok-reels-script', description: 'Create viral TikTok and Reels scripts that hook viewers', category: 'Social Media', icon: '🎵' },
  { name: 'YouTube Video Ideas Generator', slug: 'youtube-video-ideas', description: 'Generate high-search-demand YouTube video ideas', category: 'Video', icon: '💡' },
  { name: 'YouTube Video Titles Generator', slug: 'youtube-video-titles', description: 'Write click-worthy YouTube titles optimized for search', category: 'Video', icon: '🎯' },
  { name: 'YouTube Video Description Generator', slug: 'youtube-video-description', description: 'Write SEO-rich YouTube descriptions that rank', category: 'Video', icon: '📝' },
  { name: 'YouTube Video Tags Generator', slug: 'youtube-video-tags', description: 'Generate the best tags to maximize YouTube reach', category: 'Video', icon: '🏷️' },
  { name: 'YouTube Video Outline Generator', slug: 'youtube-video-outline', description: 'Structure your YouTube video with a detailed outline', category: 'Video', icon: '📋' },
  { name: 'YouTube Video Intro Generator', slug: 'youtube-video-intro', description: 'Write scroll-stopping YouTube video intros', category: 'Video', icon: '🎙️' },
  { name: 'AI Thumbnail Maker', slug: 'ai-thumbnail-maker', description: 'Generate thumbnail concepts and text for videos', category: 'Video', icon: '🖼️' },
  { name: 'AI Voice-over Generator', slug: 'ai-voiceover-generator', description: 'Create professional voice-over scripts for any content', category: 'Video', icon: '🎤' },
  { name: 'AI Audio Ad Creator', slug: 'ai-audio-ad-creator', description: 'Write compelling audio ad scripts for radio and podcasts', category: 'Advertising', icon: '📻' },
  { name: 'AI Podcast Script Generator', slug: 'podcast-script-generator', description: 'Generate full podcast episode scripts and show notes', category: 'Video', icon: '🎧' },

  // ── Business (Presentation / Infographic) ──────────────────────
  { name: 'AI Presentation Generator', slug: 'ai-presentation-generator', description: 'Create slide deck outlines and content with AI', category: 'Business', icon: '📊' },
  { name: 'Presentation Section Outline Generator', slug: 'presentation-section-outline', description: 'Outline any presentation section with key points', category: 'Business', icon: '📋' },
  { name: 'AI Infographic Creator', slug: 'ai-infographic-creator', description: 'Plan and script data-driven infographics instantly', category: 'Social Media', icon: '📊' },
  { name: 'AI Carousel Maker', slug: 'ai-carousel-maker', description: 'Script multi-slide carousels for Instagram and LinkedIn', category: 'Social Media', icon: '🎠' },
  { name: 'AI Meme Generator', slug: 'ai-meme-generator', description: 'Generate funny, on-brand meme concepts for social media', category: 'Social Media', icon: '😂' },

  // ── Social Media ──────────────────────────────────────────────
  { name: 'Photo Captions Generator', slug: 'photo-captions-generator', description: 'Write scroll-stopping captions for any photo post', category: 'Social Media', icon: '📷' },
  { name: 'Hashtags Generator', slug: 'hashtags-generator', description: 'Generate targeted hashtag sets to boost your reach', category: 'Social Media', icon: '#️⃣' },
  { name: 'Tweet Writer', slug: 'tweet-writer', description: 'Write punchy, high-engagement tweets and X threads', category: 'Social Media', icon: '🐦' },
  { name: 'Social Media Quotes Generator', slug: 'social-media-quotes', description: 'Create shareable quote content for any niche or brand', category: 'Social Media', icon: '💬' },

  // ── Email ─────────────────────────────────────────────────────
  { name: 'AI Cold Email Generator', slug: 'cold-email-generator', description: 'Write personalized cold emails that get replies', category: 'Email', icon: '📧' },
  { name: 'Email Subject Generator', slug: 'email-subject-generator', description: 'Generate open-worthy email subject lines instantly', category: 'Email', icon: '✉️' },
  { name: 'AI Email Subject Line Optimizer', slug: 'email-subject-optimizer', description: 'Optimize subject lines to maximize open rates', category: 'Email', icon: '🔧' },
  { name: 'AI Email Template Designer', slug: 'email-template-designer', description: 'Design complete email templates for any campaign', category: 'Email', icon: '🎨' },
  { name: 'Welcome Email Generator', slug: 'welcome-email-generator', description: 'Write warm, converting welcome emails for new subscribers', category: 'Email', icon: '👋' },
  { name: 'Follow-Up Email Generator', slug: 'follow-up-email-generator', description: 'Write follow-up emails that reopen conversations', category: 'Email', icon: '🔁' },
  { name: 'Confirmation Email Generator', slug: 'confirmation-email-generator', description: 'Create clear, professional confirmation emails', category: 'Email', icon: '✅' },
  { name: 'Cancellation Email Generator', slug: 'cancellation-email-generator', description: 'Write empathetic cancellation emails that retain customers', category: 'Email', icon: '❌' },
  { name: 'Rejection Email Generator', slug: 'rejection-email-generator', description: 'Send professional rejection emails that preserve relationships', category: 'Email', icon: '🚫' },
  { name: 'Review Request Email Generator', slug: 'review-request-email', description: 'Write review request emails that generate 5-star feedback', category: 'Email', icon: '⭐' },
  { name: 'Survey Email Generator', slug: 'survey-email-generator', description: 'Create survey invitation emails with strong response rates', category: 'Email', icon: '📊' },
  { name: 'Event Promotion Email Generator', slug: 'event-promotion-email', description: 'Write event promotion emails that fill seats', category: 'Email', icon: '📅' },
  { name: 'Job Seeking Cold Email Generator', slug: 'job-seeking-email', description: 'Write cold emails to hiring managers that get interviews', category: 'Email', icon: '💼' },
  { name: 'Sales Demo Cold Email Generator', slug: 'sales-demo-email', description: 'Write cold emails that book sales demos consistently', category: 'Email', icon: '📞' },

  // ── Writing (Multilingual) ────────────────────────────────────
  { name: 'AI Multilingual Content Translator', slug: 'multilingual-translator', description: 'Translate marketing content into any language fluently', category: 'Writing', icon: '🌍' },

  // ── Advertising ───────────────────────────────────────────────
  { name: 'Google Ads Generator', slug: 'google-ads-generator', description: 'Write high-converting Google Ads headlines and descriptions', category: 'Advertising', icon: '🔍' },
  { name: 'Facebook Ad Headlines Generator', slug: 'facebook-ad-headlines', description: 'Generate Facebook ad headlines that stop the scroll', category: 'Advertising', icon: '👍' },
  { name: 'Facebook Ad Primary Text Generator', slug: 'facebook-ad-text', description: 'Write Facebook ad body copy that drives clicks', category: 'Advertising', icon: '📢' },
  { name: 'Linkedin Ads Generator', slug: 'linkedin-ads-generator', description: 'Create professional LinkedIn ad copy for B2B audiences', category: 'Advertising', icon: '💼' },

  // ── Copywriting Frameworks ────────────────────────────────────
  { name: 'AIDA Framework Generator', slug: 'aida-framework-generator', description: 'Apply the AIDA formula to any marketing message', category: 'Copywriting', icon: '📈' },
  { name: 'Pain-Agitate-Solution Generator', slug: 'pain-agitate-solution', description: 'Write PAS copy that connects emotionally and converts', category: 'Copywriting', icon: '💊' },
  { name: 'Before-After-Bridge Generator', slug: 'before-after-bridge', description: 'Use the BAB framework to show transformative results', category: 'Copywriting', icon: '🌉' },
  { name: "The 4P's Of Marketing Generator", slug: '4ps-marketing-generator', description: 'Build marketing strategy using the 4Ps framework', category: 'Copywriting', icon: '🎯' },
  { name: 'Feature-Advantage-Benefit Generator', slug: 'feature-advantage-benefit', description: 'Transform features into compelling customer benefits', category: 'Copywriting', icon: '✨' },
  { name: 'Persuasive Bullet Points Generator', slug: 'persuasive-bullet-points', description: 'Write benefit-focused bullets that sell your product', category: 'Copywriting', icon: '🎯' },
  { name: 'Sales Pitch Script Generator', slug: 'sales-pitch-script', description: 'Create a compelling sales pitch for any product or service', category: 'Copywriting', icon: '🎤' },

  // ── AI Analytics ──────────────────────────────────────────────
  { name: 'AI Brand Voice Analyzer', slug: 'brand-voice-analyzer', description: 'Analyze and define your brand voice with AI precision', category: 'AI Analytics', icon: '🔬' },
  { name: 'AI Content Gap Analyzer', slug: 'content-gap-analyzer', description: 'Identify content gaps your competitors are missing', category: 'AI Analytics', icon: '🕳️' },
  { name: 'AI Competitor Content Analyzer', slug: 'competitor-content-analyzer', description: 'Break down competitor content strategies and find opportunities', category: 'AI Analytics', icon: '🔍' },
  { name: 'AI Content Repurposing Engine', slug: 'content-repurposing-engine', description: 'Repurpose one piece of content into multiple formats', category: 'AI Analytics', icon: '♻️' },
  { name: 'AI Trend Forecaster', slug: 'ai-trend-forecaster', description: 'Predict content and marketing trends in your niche', category: 'AI Analytics', icon: '📡' },
  { name: 'AI Viral Content Predictor', slug: 'viral-content-predictor', description: 'Score and predict the viral potential of your content', category: 'AI Analytics', icon: '🔥' },
  { name: 'AI Sentiment Analysis Tool', slug: 'sentiment-analysis-tool', description: 'Analyze audience sentiment from reviews and comments', category: 'AI Analytics', icon: '😊' },

  // ── Business (Customer / CX) ──────────────────────────────────
  { name: 'AI Customer Persona Generator', slug: 'customer-persona-generator', description: 'Build detailed customer personas based on your business', category: 'Business', icon: '👤' },
  { name: 'AI Customer Journey Mapper', slug: 'customer-journey-mapper', description: 'Map every touchpoint of your customer experience', category: 'Business', icon: '🗺️' },
  { name: 'AI Review Response Generator', slug: 'review-response-generator', description: 'Generate professional responses to customer reviews', category: 'Business', icon: '⭐' },
  { name: 'FAQ Questions Generator', slug: 'faq-questions-generator', description: 'Generate the FAQs your customers are already asking', category: 'Business', icon: '❓' },
  { name: 'FAQ Answers Generator', slug: 'faq-answers-generator', description: 'Write clear, helpful answers to any FAQ list', category: 'Business', icon: '💬' },
  { name: 'AI Survey & Feedback Generator', slug: 'survey-feedback-generator', description: 'Design survey questions that generate actionable insights', category: 'Business', icon: '📋' },

  // ── Social Media (Influencer / Commerce) ──────────────────────
  { name: 'AI Influencer Matching Tool', slug: 'influencer-matching-tool', description: 'Identify the right influencers for your brand and budget', category: 'Social Media', icon: '🤝' },

  // ── Business (Events / Apps / Planning) ───────────────────────
  { name: 'AI Event Marketing Planner', slug: 'event-marketing-planner', description: 'Plan end-to-end event marketing campaigns with AI', category: 'Business', icon: '🎪' },
  { name: 'Event Promotion Poster Generator', slug: 'event-promotion-poster', description: 'Create event poster concepts and promotional copy', category: 'Business', icon: '🪧' },
  { name: 'App Notification Generator', slug: 'app-notification-generator', description: 'Write high-open-rate push notifications for apps', category: 'Business', icon: '🔔' },

  // ── Email (Segmentation) ──────────────────────────────────────
  { name: 'AI Email List Segmentation', slug: 'email-list-segmentation', description: 'Plan email list segments to boost campaign relevance', category: 'Email', icon: '🗂️' },

  // ── AI Analytics (Marketing Ops) ─────────────────────────────
  { name: 'AI Marketing Attribution Tracker', slug: 'marketing-attribution-tracker', description: 'Map attribution models to understand what drives revenue', category: 'AI Analytics', icon: '📍' },
  { name: 'AI ROI Calculator', slug: 'ai-roi-calculator', description: 'Calculate and forecast marketing ROI for any campaign', category: 'AI Analytics', icon: '💹' },
  { name: 'AI Marketing Budget Allocator', slug: 'marketing-budget-allocator', description: 'Allocate marketing budget across channels for max ROI', category: 'AI Analytics', icon: '💰' },
  { name: 'AI Performance Benchmark Tool', slug: 'performance-benchmark-tool', description: 'Benchmark your marketing metrics against industry standards', category: 'AI Analytics', icon: '📊' },

  // ── Business (Product / Startup) ─────────────────────────────
  { name: 'Product Growth Plan Generator', slug: 'product-growth-plan', description: 'Build a data-driven product growth strategy', category: 'Business', icon: '📈' },
  { name: 'Product Mission Generator', slug: 'product-mission-generator', description: 'Define a clear mission statement for your product', category: 'Business', icon: '🎯' },
  { name: 'Product Motto Generator', slug: 'product-motto-generator', description: 'Create a memorable product motto or tagline', category: 'Business', icon: '💬' },
  { name: 'Start-Up Ideas Generator', slug: 'startup-ideas-generator', description: 'Generate validated startup ideas based on market gaps', category: 'Business', icon: '🚀' },

  // ── Writing (Creative / General) ─────────────────────────────
  { name: 'Freestyle Template Generator', slug: 'freestyle-template-generator', description: 'Generate any content template you can describe', category: 'Writing', icon: '🆓' },
  { name: 'Explain A Concept To My Three Year Old Generator', slug: 'explain-concept-simple', description: 'Simplify complex ideas into crystal-clear explanations', category: 'Writing', icon: '👶' },
  { name: 'Express Your Feelings Generator', slug: 'express-feelings-generator', description: 'Put your emotions into the right words for any situation', category: 'Writing', icon: '💌' },

  // ── Email (Relationship) ──────────────────────────────────────
  { name: 'Congratulatory Email Generator', slug: 'congratulatory-email-generator', description: 'Write warm, genuine congratulatory emails', category: 'Email', icon: '🎉' },

  // ── Professional ─────────────────────────────────────────────
  { name: 'LinkedIn Invitation Generator', slug: 'linkedin-invitation-generator', description: 'Write LinkedIn connection requests that get accepted', category: 'Professional', icon: '🤝' },
  { name: 'LinkedIn Profile Generator', slug: 'linkedin-profile-generator', description: 'Write an engaging LinkedIn profile that attracts opportunities', category: 'Professional', icon: '👔' },
  { name: 'Performance Review Template Generator', slug: 'performance-review-generator', description: 'Generate fair, structured performance review templates', category: 'Professional', icon: '📊' },
  { name: 'AI Networking Assistant', slug: 'ai-networking-assistant', description: 'Plan networking strategies and craft outreach messages', category: 'Professional', icon: '🌐' },

  // ── Business (PR / Communications) ───────────────────────────
  { name: 'AI Press Release Writer', slug: 'press-release-writer', description: 'Write professional press releases that get media coverage', category: 'Business', icon: '📰' },
  { name: 'AI Webinar Content Creator', slug: 'webinar-content-creator', description: 'Plan and script webinars that educate and convert', category: 'Business', icon: '🎓' },
  { name: 'AI Jingle Composer', slug: 'ai-jingle-composer', description: 'Write catchy jingles and brand song concepts', category: 'Business', icon: '🎵' },
  { name: 'AI Crisis Management Assistant', slug: 'crisis-management-assistant', description: 'Draft crisis communication responses quickly and clearly', category: 'Business', icon: '🚨' },
  { name: 'AI Cross-sell Recommendation Engine', slug: 'cross-sell-recommendation', description: 'Generate cross-sell strategies and upsell messaging', category: 'Business', icon: '🛒' },

  // ── AI Analytics (Revenue) ───────────────────────────────────
  { name: 'AI Customer Lifetime Value Predictor', slug: 'customer-lifetime-value', description: 'Predict CLV and identify your most valuable customer segments', category: 'AI Analytics', icon: '💎' },

  // ── Social Media (Commerce) ───────────────────────────────────
  { name: 'AI Social Commerce Optimizer', slug: 'social-commerce-optimizer', description: 'Optimize social commerce listings for maximum conversions', category: 'Social Media', icon: '🛍️' },

  // ── Legacy tools (existing implementations) ───────────────────
  { name: 'Brand Voice Generator', slug: 'brand-voice', description: 'Create a complete brand voice guide for any business', category: 'Copywriting', icon: '🎙️' },
  { name: 'Social Media Calendar', slug: 'social-calendar', description: 'Generate a 30-day content calendar for any platform', category: 'Social Media', icon: '📅' },
  { name: 'Content Pillar Generator', slug: 'content-pillars', description: 'Build a complete content pillar framework for your brand', category: 'Blog', icon: '🏛️' },
  { name: 'Hook Generator', slug: 'hook-generator', description: 'Generate 15 scroll-stopping hooks for any topic', category: 'Copywriting', icon: '🎣' },
  { name: 'Ad Copy Generator', slug: 'ad-copy', description: 'Write 3 ad copy variations with hooks, body, and CTA', category: 'Advertising', icon: '📣' },
  { name: 'Marketing Strategy Generator', slug: 'marketing-strategy', description: 'Build a complete marketing strategy for any business', category: 'Business', icon: '🗺️' },
  { name: 'Landing Page Copy Generator', slug: 'landing-page-copy', description: 'Write full landing page copy that converts cold traffic', category: 'Copywriting', icon: '🚀' },
  { name: 'Competitor Audit Tool', slug: 'competitor-audit', description: 'Analyze competitors and find your positioning advantage', category: 'AI Analytics', icon: '🔬' },
  { name: 'Bio Generator', slug: 'bio-generator', description: 'Generate platform-optimized bio options in 4 styles', category: 'Professional', icon: '👤' },
  { name: 'Instagram Caption Generator', slug: 'instagram-caption', description: 'Create 5 ready-to-post Instagram captions with hashtags', category: 'Social Media', icon: '📸' },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolIndex(slug: string): number {
  return tools.findIndex((t) => t.slug === slug);
}

export function getNextTools(currentSlug: string, count = 10): Tool[] {
  const idx = getToolIndex(currentSlug);
  if (idx === -1) return tools.slice(0, count);
  const next: Tool[] = [];
  for (let i = 1; next.length < count; i++) {
    next.push(tools[(idx + i) % tools.length]);
  }
  return next;
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}
