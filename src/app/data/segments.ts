/**
 * Industry pages (/for-*). One template, six target groups from the owner's ICP list.
 * Every job below maps to a feature that exists in the main app (Angie ads, Sophie SEO/GEO,
 * Clara email, Lora planning and briefing, approvals, workspaces, competitor ads, market data).
 * No customer numbers: add real ones when the owner supplies them.
 */
export interface SegmentJob {
  tag: string;
  title: string;
  body: string;
  tools: string[];
}

export interface Segment {
  slug: string; // route, e.g. "/for-ecommerce"
  menuLabel: string;
  menuNote: string;
  /** <title> without the " | Loraloop" suffix; keep the result at or under 60 characters. */
  title: string;
  description: string;
  kicker: string;
  h1Lead: string;
  h1Rest: string;
  lead: string;
  /** Answer-first summary AI search can quote. */
  answer: string;
  jobs: SegmentJob[];
  week: { day: string; task: string }[];
  stack: string[];
  faq: { q: string; a: string }[];
  ctaLead: string;
  ctaRest: string;
  /** Free guides for this buyer, shown above the FAQ (internal links to blog posts and free tools). */
  guides?: { to: string; title: string; note: string }[];
}

export const SHARED_FAQ: { q: string; a: string }[] = [
  {
    q: 'How is Loraloop different from ChatGPT or Claude?',
    a: 'ChatGPT and Claude answer questions and draft text when you ask. Loraloop is connected to your store, ad, email and analytics accounts, plans the work every week, produces it, launches it after approval and reports the results each morning. It also works inside Claude and ChatGPT if your team lives there.',
  },
  {
    q: 'Will it publish or spend money without us?',
    a: 'Only if you allow it. You set the autonomy level per area: observe, suggest, approve every change (the default), or act inside spend limits you set. Every change is logged with the before-state so it can be undone, and the AI can ask for approval but never grant it.',
  },
];

export const segments: Segment[] = [
  {
    slug: '/for-ecommerce',
    menuLabel: 'eCommerce and DTC',
    menuNote: 'Shopify, Klaviyo, Meta and Google Ads',
    title: 'AI Marketing Agent for Shopify and DTC Brands',
    description: 'Loraloop runs ad creative, Klaviyo flows, product content and SEO for Shopify, DTC and CPG brands, with your approval on every change.',
    kicker: 'Loraloop for eCommerce',
    h1Lead: 'Your store sells all night.',
    h1Rest: 'Your marketing should too.',
    lead: 'Fresh ad creative, Klaviyo flows that bring customers back, product content and buyer-intent SEO, planned from your Shopify and ad data and shipped after your OK.',
    answer: 'Loraloop is an AI marketing team for Shopify, DTC and CPG brands. It connects to Shopify, Klaviyo, Meta Ads, Google Ads and Google Analytics, keeps ad creative fresh, builds email flows, writes product and buying-guide content, and reports revenue each morning.',
    jobs: [
      { tag: 'Paid social', title: 'Creative refreshed before it fatigues', body: 'Angie watches frequency and click-through every day, drafts new hooks and variations, and proposes moving budget to the winners.', tools: ['Meta Ads', 'TikTok Ads'] },
      { tag: 'Search ads', title: 'Wasted Google spend found weekly', body: 'Search terms that spend without converting become negative keywords, with each change and its reason waiting for your OK.', tools: ['Google Ads'] },
      { tag: 'Email', title: 'Flows that earn the second order', body: 'Clara writes welcome, post-purchase, replenishment and win-back flows in your voice and schedules campaigns around your launches.', tools: ['Klaviyo', 'Mailchimp'] },
      { tag: 'Content', title: 'Product content from your real catalogue', body: 'Posts, captions and launch assets built from your products, offers and reviews, not invented details.', tools: ['Shopify', 'Instagram', 'TikTok'] },
      { tag: 'SEO and GEO', title: 'Found when shoppers search or ask AI', body: 'Sophie picks buying-guide topics from real search volume and writes articles that rank on Google and get cited by AI assistants.', tools: ['Search Console', 'WordPress', 'Webflow'] },
      { tag: 'Reporting', title: 'Revenue, ROAS and email in one briefing', body: 'Every morning Lora reports what sold, what each channel returned and what needs your decision.', tools: ['Google Analytics', 'Shopify'] },
    ],
    week: [
      { day: 'Mon', task: 'Briefing: weekend revenue, ROAS by campaign, 3 drafts waiting' },
      { day: 'Tue', task: 'Angie proposes pausing 2 fatigued ads and scaling a UGC winner' },
      { day: 'Wed', task: 'Clara schedules the launch email and a win-back for lapsed buyers' },
      { day: 'Thu', task: 'Sophie publishes a buying guide for a high-volume category term' },
      { day: 'Fri', task: 'Competitor scan: a rival started a free-shipping offer' },
    ],
    stack: ['Shopify', 'Klaviyo', 'Meta Ads', 'Google Ads', 'Google Analytics', 'Search Console', 'Instagram', 'TikTok', 'Pinterest'],
    faq: [
      { q: 'Does Loraloop work with Shopify and Klaviyo?', a: 'Yes. It reads products and orders from Shopify and writes and schedules campaigns and flows in Klaviyo or Mailchimp once you approve them.' },
      { q: 'Will it change our ad budgets without asking?', a: 'Not by default. Budget changes are proposed with the reason and wait for your media buyer or marketing manager. You can allow small automatic changes inside spend limits if you want.' },
      { q: 'Can it plan seasonal campaigns like BFCM?', a: 'Yes. Set your key dates and offers, and Lora plans the campaign across ads, email, social and SEO and produces the assets ahead of time for approval.' },
    ],
    ctaLead: 'Keep the store growing',
    ctaRest: 'while your team sleeps.',
    guides: [
      { to: '/free-meta-ads-audit', title: 'Free Meta ads audit', note: 'See what your Black Friday and Cyber Monday spend wasted, with a ranked list of fixes.' },
      { to: '/blog/get-new-customers-shopify-without-discounts', title: 'New customers without discounting', note: 'Story-led content, creators and proof that keep sales coming after the holidays.' },
      { to: '/blog/creator-ugc-partnerships-dtc-brands', title: 'UGC creators for DTC brands', note: 'How to pick, pay and measure creators who actually use your product.' },
      { to: '/blog/after-black-friday-retention-plan-shopify', title: 'After Black Friday: retention plan', note: 'Turn this weekend\'s first-time buyers into repeat customers.' },
    ],
  },
  {
    slug: '/for-saas',
    menuLabel: 'B2B SaaS',
    menuNote: 'SEO, GEO, LinkedIn and pipeline reporting',
    title: 'AI Marketing Agent for B2B SaaS Teams',
    description: 'Loraloop gives lean SaaS growth teams SEO and GEO content, LinkedIn posts, competitor tracking and weekly reporting, with approval on every piece.',
    kicker: 'Loraloop for B2B SaaS',
    h1Lead: 'Two marketers cannot be a demand-gen team.',
    h1Rest: 'With Loraloop, they can.',
    lead: 'Search content that ranks and gets cited by AI, a steady LinkedIn presence, competitor tracking and a weekly report leadership can read, run by an AI team your marketers direct.',
    answer: 'Loraloop is an AI marketing team for B2B SaaS. It researches keywords from real search data, writes SEO and GEO articles, drafts LinkedIn posts in your founder\'s voice, tracks competitors and reports traffic and conversions every week.',
    jobs: [
      { tag: 'SEO', title: 'Articles that rank for buyer searches', body: 'Sophie picks topics from real keyword volume and difficulty, writes the article and publishes it to your CMS after review.', tools: ['Search Console', 'WordPress', 'Webflow'] },
      { tag: 'GEO', title: 'Cited when buyers ask ChatGPT', body: 'Answer-first sections, definitions and comparisons structured so AI assistants quote and recommend you.', tools: ['Google AI Overviews', 'ChatGPT', 'Perplexity'] },
      { tag: 'Social', title: 'LinkedIn that never goes quiet', body: 'Founder and company posts drafted weekly from your product news, customer wins and articles.', tools: ['LinkedIn', 'X'] },
      { tag: 'Paid', title: 'Search and social ads kept efficient', body: 'Angie monitors Google, Meta and LinkedIn campaigns and proposes budget and keyword changes with the reason.', tools: ['Google Ads', 'LinkedIn Ads', 'Meta Ads'] },
      { tag: 'Intelligence', title: 'Competitors tracked every week', body: 'New ads, offers and messaging from competitors, plus market data on the keywords and backlinks they win.', tools: ['Meta Ad Library', 'Market data'] },
      { tag: 'Reporting', title: 'A weekly report leadership reads', body: 'Traffic, signups, content shipped and paid performance in one briefing instead of five dashboards.', tools: ['Google Analytics', 'Search Console'] },
    ],
    week: [
      { day: 'Mon', task: 'Briefing: organic signups up, 2 articles waiting for review' },
      { day: 'Tue', task: 'Sophie publishes a comparison page for a competitor term' },
      { day: 'Wed', task: 'Three LinkedIn posts drafted from the product changelog' },
      { day: 'Thu', task: 'Angie flags a Google keyword spending without signups' },
      { day: 'Fri', task: 'Competitor scan: a rival launched a new pricing page' },
    ],
    stack: ['Google Analytics', 'Search Console', 'LinkedIn', 'LinkedIn Ads', 'Google Ads', 'WordPress', 'Webflow', 'Slack'],
    faq: [
      { q: 'Does Loraloop write content that ranks?', a: 'It starts from real search data: volume, difficulty and what already ranks. Articles are structured for Google and for AI answers, and nothing publishes until someone on your team approves it.' },
      { q: 'Can it post on LinkedIn for our founder?', a: 'Yes. It drafts posts in the founder\'s voice from your brand knowledge base and schedules them after approval.' },
      { q: 'Can it track competitors?', a: 'Yes. It watches competitor ads each week and uses market data to show the keywords and backlinks they win.' },
    ],
    ctaLead: 'Ship demand gen every day',
    ctaRest: 'with the team you have.',
  },
  {
    slug: '/for-agencies',
    menuLabel: 'Agencies',
    menuNote: 'One workspace per client',
    title: 'AI Marketing Team for Agencies',
    description: 'Run content, SEO, paid media and reporting for every client from its own workspace, without hiring for each new retainer.',
    kicker: 'Loraloop for agencies',
    h1Lead: 'Add clients,',
    h1Rest: 'not hires.',
    lead: 'Each client gets its own workspace with its brand voice, connections, approvals and reports. Your team sets the strategy; Loraloop does the production and the Monday reports.',
    answer: 'Loraloop is an AI marketing team for agencies and fractional CMOs. Each client has a separate workspace with its own brand knowledge, connected accounts and approvals, so one team can run content, SEO, paid media and reporting across many clients.',
    jobs: [
      { tag: 'Workspaces', title: 'One workspace per client', body: 'Separate brand knowledge, connections, calendars and team access for every client, so nothing crosses over.', tools: ['Workspaces'] },
      { tag: 'Reporting', title: 'Client reports that write themselves', body: 'A weekly report per client with what shipped, what it returned and what needs a decision.', tools: ['Google Analytics', 'Meta Ads', 'Google Ads'] },
      { tag: 'Content', title: 'Daily production across every client', body: 'Posts, articles and emails drafted in each client\'s voice and sent to the right approver.', tools: ['Instagram', 'LinkedIn', 'WordPress'] },
      { tag: 'Paid media', title: 'More accounts per media buyer', body: 'Angie checks every client\'s Meta and Google accounts daily and queues the fixes, so buyers review instead of digging.', tools: ['Meta Ads', 'Google Ads'] },
      { tag: 'Approvals', title: 'Client sign-off built in', body: 'Route drafts to the client or to your team lead, and approve from the app, email or Slack.', tools: ['Slack'] },
      { tag: 'Intelligence', title: 'Competitor tracking for every client', body: 'New ads and offers from each client\'s competitors, plus market data on the keywords they win, ready for your next strategy call.', tools: ['Meta Ad Library', 'Market data'] },
    ],
    week: [
      { day: 'Mon', task: 'Client reports drafted for all accounts, ready to send' },
      { day: 'Tue', task: 'Angie queues fixes in 4 client ad accounts' },
      { day: 'Wed', task: 'Next week\'s content calendars sent for client approval' },
      { day: 'Thu', task: 'Two client articles published after sign-off' },
      { day: 'Fri', task: 'Competitor scan per client: new offers and ads' },
    ],
    stack: ['Meta Ads', 'Google Ads', 'Google Analytics', 'Search Console', 'Klaviyo', 'Shopify', 'Instagram', 'LinkedIn', 'Slack'],
    faq: [
      { q: 'Can each client have its own workspace?', a: 'Yes. Each workspace has its own brand knowledge, connected accounts, approvals and team access.' },
      { q: 'Can clients approve work themselves?', a: 'Yes. Invite the client to approve drafts in their workspace, or keep approvals inside your team.' },
      { q: 'Does Loraloop replace our team?', a: 'No. It replaces the repetitive production and reporting work so your strategists and buyers can handle more clients.' },
    ],
    ctaLead: 'Scale client output',
    ctaRest: 'and keep the margin.',
  },
  {
    slug: '/for-media-buyers',
    menuLabel: 'Media buyers and growth leads',
    menuNote: 'Daily Meta and Google optimisation',
    title: 'AI Media Buyer for Meta and Google Ads',
    description: 'Loraloop checks your Meta and Google accounts every day, finds fatigue and wasted spend, generates new creative and proposes budget changes within your guardrails.',
    kicker: 'Loraloop for media buyers',
    h1Lead: 'Your ad accounts, checked every morning.',
    h1Rest: 'Changes ready before you are.',
    lead: 'Angie reads CPA, ROAS, CTR and frequency across Meta and Google, finds what is fatiguing or wasting spend, drafts new creative and proposes the fix. You approve in the app or Slack.',
    answer: 'Loraloop is an AI media buyer for Meta and Google Ads. It monitors accounts daily, flags creative fatigue and wasted spend, generates new ad variations, tracks competitor ads and proposes budget changes that apply only within limits you set.',
    jobs: [
      { tag: 'Monitoring', title: 'A daily check of every account', body: 'CPA, ROAS, CTR and frequency compared with your targets, with anything off flagged in the morning briefing.', tools: ['Meta Ads', 'Google Ads'] },
      { tag: 'Creative', title: 'Fatigue caught early, variations ready', body: 'When an ad starts to tire, new hooks and variations are drafted from what is working for you and for competitors.', tools: ['Meta Ads', 'TikTok Ads'] },
      { tag: 'Budget', title: 'Budget moves with the reason attached', body: 'Scale winners and pause losers as proposals with the numbers behind them, or let small changes run inside your limits.', tools: ['Meta Ads', 'Google Ads'] },
      { tag: 'Search', title: 'Wasted spend turned into negatives', body: 'Search terms that spend without converting are listed weekly with suggested negative keywords.', tools: ['Google Ads'] },
      { tag: 'Competitors', title: 'Competitor hooks, every week', body: 'New ads, offers and the angles competitors are scaling, pulled from the Meta Ad Library.', tools: ['Meta Ad Library'] },
      { tag: 'Control', title: 'Spend caps, quiet hours, undo', body: 'Limits are checked again when a change runs, nothing runs in quiet hours, and every change can be reversed.', tools: ['Slack'] },
    ],
    week: [
      { day: 'Mon', task: 'Weekend check: 2 ad sets above target CPA' },
      { day: 'Tue', task: 'Six new variations drafted for a fatiguing winner' },
      { day: 'Wed', task: 'Budget shifted to the top ad set after your OK in Slack' },
      { day: 'Thu', task: '14 negative keywords proposed from search terms' },
      { day: 'Fri', task: 'Competitor scan: 3 new hooks worth testing' },
    ],
    stack: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Meta Ad Library', 'Google Analytics', 'Shopify', 'Slack'],
    faq: [
      { q: 'Can Loraloop change budgets on its own?', a: 'Only if you allow it. The default is that every budget change waits for approval. You can let small changes run inside spend caps you set, and every change records the before-state so it can be undone.' },
      { q: 'Can I approve changes from Slack?', a: 'Yes. Ad change proposals and alerts can go to Slack, where you approve or reject them.' },
      { q: 'Does it make new ad creative?', a: 'Yes. It drafts hooks, copy and variations from your brand knowledge, your winning ads and competitor angles, for you to review before launch.' },
    ],
    ctaLead: 'Spend less time in Ads Manager,',
    ctaRest: 'more time on strategy.',
  },
  {
    slug: '/for-marketing-teams',
    menuLabel: 'Lean marketing teams',
    menuNote: 'Daily execution for one to ten people',
    title: 'AI Marketing Team for Lean In-House Teams',
    description: 'Loraloop handles daily marketing execution for lean teams: scheduling, content, email, ad checks and reporting, so people can focus on strategy.',
    kicker: 'Loraloop for in-house teams',
    h1Lead: 'You set the strategy.',
    h1Rest: 'Loraloop handles the daily work.',
    lead: 'Content scheduling, routine ad changes, email campaigns and reporting, run every day by an AI team that waits for your approval before anything goes live.',
    answer: 'Loraloop is an AI marketing team for lean in-house teams and solo marketers. It plans the week from your goals, produces content, emails and ad changes, routes them for approval and sends one briefing each morning.',
    jobs: [
      { tag: 'Planning', title: 'A weekly plan from your goals', body: 'Lora turns goals such as pipeline, repeat revenue or lower CPA into priorities grounded in your data.', tools: ['Google Analytics'] },
      { tag: 'Content', title: 'A calendar that fills itself', body: 'Posts, captions and articles drafted for every channel and scheduled after approval.', tools: ['Instagram', 'LinkedIn', 'TikTok', 'YouTube'] },
      { tag: 'Email', title: 'Campaigns without the blank page', body: 'Newsletters, launches and promotions written in your voice and scheduled in your email tool.', tools: ['Klaviyo', 'Mailchimp'] },
      { tag: 'Ads', title: 'Routine budget changes handled', body: 'Daily checks on Meta and Google with proposed budget moves and new creative.', tools: ['Meta Ads', 'Google Ads'] },
      { tag: 'Engagement', title: 'Comments and messages answered', body: 'Replies drafted for comments and DMs across your social accounts, held for review when needed.', tools: ['Instagram', 'Facebook'] },
      { tag: 'Reporting', title: 'One briefing for your boss', body: 'What shipped, what it returned and what needs a decision, every morning.', tools: ['Google Analytics', 'Search Console'] },
    ],
    week: [
      { day: 'Mon', task: 'Weekly plan and briefing ready before standup' },
      { day: 'Tue', task: 'Next week\'s posts drafted for every channel' },
      { day: 'Wed', task: 'Newsletter written and scheduled after approval' },
      { day: 'Thu', task: 'Ad check: one budget change proposed' },
      { day: 'Fri', task: 'Monthly results summary drafted for leadership' },
    ],
    stack: ['Google Analytics', 'Search Console', 'Meta Ads', 'Google Ads', 'Klaviyo', 'Mailchimp', 'Instagram', 'LinkedIn', 'Slack'],
    faq: [
      { q: 'We are a team of two. Is Loraloop for us?', a: 'Yes. It is built for teams of one to ten who need the output of a bigger team without hiring for every channel.' },
      { q: 'How long does setup take?', a: 'Add your website and connect your accounts. Lora builds your brand knowledge base and the first weekly plan from there.' },
      { q: 'Can we keep our agency?', a: 'Yes. You can keep a specialist for brand or strategy and use Loraloop for the daily production and reporting.' },
    ],
    ctaLead: 'Ship more every week',
    ctaRest: 'with the team you have.',
  },
  {
    slug: '/for-local-businesses',
    menuLabel: 'Local and multi-location',
    menuNote: 'Clinics, home services and franchises',
    title: 'AI Marketing for Local and Multi-Location Brands',
    description: 'Loraloop runs local SEO content, social posts, comment replies and local search ads for clinics, home services and franchises, with approval built in.',
    kicker: 'Loraloop for local businesses',
    h1Lead: 'Customers search nearby.',
    h1Rest: 'Make sure they find you first.',
    lead: 'Location pages and local articles that rank, steady social posts for every location, replies to comments and messages, and local search ads that stay on budget.',
    answer: 'Loraloop is an AI marketing team for local and multi-location businesses such as clinics, home services and franchises. It writes local SEO content, posts for each location, drafts replies to comments and messages, and manages local Google and Meta ads within your budget.',
    jobs: [
      { tag: 'Local SEO', title: 'Pages for every service and area', body: 'Service and location pages plus local articles chosen from real search data for each area you serve.', tools: ['Search Console', 'WordPress', 'Webflow'] },
      { tag: 'Social', title: 'Every location stays active', body: 'Offers, seasonal posts and updates scheduled for each location from one calendar.', tools: ['Instagram', 'Facebook'] },
      { tag: 'Engagement', title: 'Comments and messages answered', body: 'Reply drafts for comments and DMs, with sensitive ones always held for a person to approve.', tools: ['Instagram', 'Facebook'] },
      { tag: 'Local ads', title: 'Local search ads on budget', body: 'Google and Meta campaigns by area, checked daily, with budget changes proposed for approval.', tools: ['Google Ads', 'Meta Ads'] },
      { tag: 'Compliance', title: 'Your rules on every post', body: 'Claims to avoid, required disclaimers and tone live in the brand knowledge base and apply to every draft.', tools: ['Brand knowledge base'] },
      { tag: 'Reporting', title: 'Results by location', body: 'Traffic, leads and ad results by location in one weekly report.', tools: ['Google Analytics'] },
    ],
    week: [
      { day: 'Mon', task: 'Briefing: leads by location, 2 replies waiting' },
      { day: 'Tue', task: 'New service page drafted for a growing area' },
      { day: 'Wed', task: 'Weekend offer scheduled for every location' },
      { day: 'Thu', task: 'Local ads: budget moved to the best-performing area' },
      { day: 'Fri', task: 'Comment replies drafted, sensitive ones held for review' },
    ],
    stack: ['Google Ads', 'Meta Ads', 'Google Analytics', 'Search Console', 'Instagram', 'Facebook', 'WordPress'],
    faq: [
      { q: 'Can Loraloop handle many locations?', a: 'Yes. Plan and schedule content per location from one calendar, or give each location or franchisee its own workspace.' },
      { q: 'Can sensitive replies wait for a person?', a: 'Yes. Set which replies always need approval. Anything about health, pricing disputes or complaints can be held for your team.' },
      { q: 'Does it help with local search?', a: 'Yes. It writes service and area pages from local search data and runs local Google and Meta ads within your budget.' },
    ],
    ctaLead: 'Fill the calendar',
    ctaRest: 'in every location.',
    guides: [
      { to: '/blog/get-more-customers-local-business', title: 'Get more local customers', note: 'Referrals, reviews and partnerships with the businesses around you.' },
      { to: '/blog/turn-leads-into-booked-appointments', title: 'Turn calls and DMs into bookings', note: 'Reply fast, give one booking link and follow up on a schedule.' },
      { to: '/blog/google-business-profile-holiday-checklist-multi-location', title: 'Holiday Google Business Profile checklist', note: 'Hours, posts and reviews for every location through December.' },
      { to: '/blog/local-seo-ai-era-near-me-recommendations', title: 'Get recommended for "near me"', note: 'How local search and AI assistants pick which business to suggest.' },
    ],
  },
];

export const segmentBySlug = (slug: string) => segments.find((s) => s.slug === slug);
