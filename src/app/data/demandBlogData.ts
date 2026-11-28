import type { BlogPost } from './blogData';

// Demand batch (ids 207-213), written November 28, 2026.
// Each post targets a search with measured demand (Treg -> DataForSEO Google Ads volume, Oct 2026)
// next to a topic whose own posts had little demand, and lists those weaker posts in relatedSlugs so
// they gain internal links. US/UK/CA monthly searches are noted per post. No invented statistics:
// platform facts are attributed to Meta or Google, everything else is method, not numbers.
const publishDate = 'November 28, 2026';

export const demandBlogPosts: BlogPost[] = [
  // "how much do facebook ads cost" US 3,600 / UK 720 / CA 320; "facebook ads cost" US 1,300
  {
    id: 207,
    slug: 'how-much-do-facebook-ads-cost',
    title: 'How Much Do Facebook Ads Cost? A Budget Guide for Small Businesses',
    seoTitle: 'How Much Do Facebook Ads Cost in 2027? Budget Guide for Small Business',
    description: 'How much Facebook and Instagram ads cost depends on the auction, your audience and your creative. How Meta prices ads, the cost metrics to watch, and how to set a budget from your target cost per sale.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 207,
    tableOfContents: [
      'The Short Answer',
      'How Meta Decides What You Pay',
      'The Cost Metrics That Matter',
      'How to Set Your Budget From a Target Cost per Sale',
      'What Makes Facebook Ads Cost More',
      'How to Lower Your Cost per Result',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "There is no fixed price for Facebook ads. You set a budget, and Meta's auction decides what each impression, click or sale costs you. Two businesses with the same budget can pay very different amounts per customer, because the auction rewards relevant ads shown to the right people. The useful question is not \"how much do Facebook ads cost\" but \"how much can I afford to pay per customer, and what budget does that take?\"" },
      { type: 'callout', text: "Quick answer: Facebook ads cost whatever you choose to spend; Meta's auction then sets your cost per click, lead or sale based on your bid, how likely people are to act on your ad, and its quality. Work out the most you can pay per customer, then budget enough for Meta to get about 50 results per ad set each week, which is what Meta says an ad set needs to leave the learning phase." },

      { type: 'heading', text: 'How Meta Decides What You Pay' },
      { type: 'paragraph', text: "Meta runs an auction every time it can show an ad. According to Meta, the winning ad is the one with the highest total value, which combines three things:" },
      { type: 'list', items: [
        'Your bid: what you are willing to pay, set by you or by Meta\'s automatic bidding.',
        'Estimated action rate: how likely the person is to click, buy or sign up after seeing your ad.',
        'Ad quality: signals such as feedback from people who see or hide the ad.',
      ]},
      { type: 'paragraph', text: "That means a better ad can win the auction while paying less. Creative and targeting change your costs as much as your budget does." },

      { type: 'heading', text: 'The Cost Metrics That Matter' },
      { type: 'table', headers: ['Metric', 'What it means', 'When it matters'], rows: [
        ['CPM', 'Cost per 1,000 impressions', 'Shows how expensive your audience and placements are'],
        ['CPC (link)', 'Cost per link click', 'Shows whether people find the ad worth clicking'],
        ['CPA or cost per result', 'Cost per purchase, lead or signup', 'The number that decides whether ads are profitable'],
        ['ROAS', 'Revenue divided by ad spend', 'For stores tracking purchase value'],
        ['Frequency', 'Average times each person saw the ad', 'Rising frequency often means fatigue and higher costs'],
      ]},
      { type: 'paragraph', text: "Judge ads on cost per result and return, not on CPM or CPC alone. A cheap click from someone who never buys is still expensive." },

      { type: 'heading', text: 'How to Set Your Budget From a Target Cost per Sale' },
      { type: 'numbered-list', items: [
        'Work out your break-even cost per sale: average order value multiplied by your margin, or for leads, what a lead is worth to you.',
        'Set a target cost per result below break-even, leaving room for profit.',
        'Estimate a weekly budget per ad set of about 50 times that target. Meta says an ad set generally needs around 50 optimization events in a week to exit the learning phase.',
        'If that is more than you can spend, use fewer ad sets, or optimize for an event that happens more often, such as add to cart instead of purchase, until volume grows.',
        'Run for at least one to two weeks before judging, and change one thing at a time.',
      ]},
      { type: 'callout', text: "Example with made-up numbers for illustration only: if a sale is worth $40 of profit to you and you aim to pay $25 per sale, one ad set needs about 50 x $25 = $1,250 a week to learn. Your real numbers will differ; use your own margins." },

      { type: 'heading', text: 'What Makes Facebook Ads Cost More' },
      { type: 'list', items: [
        'Season: more advertisers compete in the holiday season, so costs commonly rise from late October through December and ease in January.',
        'Audience: small or heavily targeted audiences can cost more to reach than broad ones.',
        'Creative fatigue: when the same people see an ad too often, results drop and costs climb.',
        'Weak landing pages: if people click but do not buy, cost per sale rises even when clicks are cheap.',
        'Broken tracking: if Meta cannot see purchases, it cannot find more buyers, and costs rise.',
        'Location: costs differ by country and region.',
      ]},

      { type: 'heading', text: 'How to Lower Your Cost per Result' },
      { type: 'list', items: [
        'Test new creative every week and retire ads whose frequency keeps rising.',
        'Fix tracking first: the Meta Pixel and Conversions API sending the events you optimize for.',
        'Make the landing page repeat the ad\'s promise.',
        'Consolidate small ad sets so each gets enough results to learn.',
        'Exclude placements that bring spend without conversions.',
      ]},
      { type: 'paragraph', text: "Our guide to rising CPMs goes deeper on each fix, and the free Meta ads audit shows where your own account is wasting spend." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop reads your Meta Ads account every day, tracks cost per result, frequency and spend against the targets you set, and proposes fixes such as pausing a fatigued ad or moving budget to an ad set that is working. Every budget change waits for your approval before it goes live. You can start with the free Meta ads audit to see the spend at stake in your account." },

      { type: 'faq', items: [
        { q: 'How much do Facebook ads cost per month?', a: 'As much as you decide to spend. A practical starting point is a weekly budget that lets one ad set reach about 50 results, based on your target cost per result.' },
        { q: 'Is there a minimum budget for Facebook ads?', a: 'Meta sets a small minimum daily budget that depends on your currency and how you bid. Ads Manager shows the minimum when you enter a budget.' },
        { q: 'Why are my Facebook ads so expensive?', a: 'The usual causes are fatigued creative, an audience that is too narrow, broken conversion tracking, a weak landing page or the holiday season. The free audit checks most of these.' },
        { q: 'Do Facebook ads cost more in December?', a: 'Competition from holiday advertisers commonly pushes costs up through the end of the year. Many advertisers see costs ease in January.' },
      ]},
      { type: 'cta', text: 'Run the free Meta ads audit to see what your current ads are wasting, with fixes you approve one by one.' },
    ],
    relatedSlugs: ['meta-ads-cpm-rising-how-to-lower-cost-per-result', 'creative-fatigue-meta-ads-detect-and-fix', 'meta-ads-daily-monitoring-checklist', 'facebook-ad-examples'],
  },

  // "ai seo" US 6,600 / UK 1,600 / CA 880; "ai seo agency" US 1,600; "what is ai seo" US 590
  {
    id: 208,
    slug: 'what-is-ai-seo',
    title: 'What Is AI SEO? How It Works and When to Use an AI SEO Agency',
    seoTitle: 'What Is AI SEO? How It Works, and When to Hire an AI SEO Agency',
    description: 'AI SEO means two things: using AI to do SEO work, and optimizing so AI search (Google AI Overviews, ChatGPT, Perplexity) cites you. How both work, what to automate, and how to choose an AI SEO agency or service.',
    category: 'Business',
    date: publishDate,
    imageIndex: 208,
    tableOfContents: [
      'The Short Answer',
      'The Two Meanings of AI SEO',
      'Using AI to Do SEO Work',
      'Optimizing for AI Search',
      'What to Automate and What to Keep Human',
      'AI SEO Agency, Service or Platform?',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "\"AI SEO\" gets used for two different jobs. One is using AI to research, write and maintain content for search. The other is making sure AI-powered search, such as Google's AI Overviews, ChatGPT and Perplexity, finds your business and cites it in answers. Most businesses now need both." },
      { type: 'callout', text: "Quick answer: AI SEO is search engine optimization that uses AI to do the work (keyword research, briefs, drafts, internal links, refreshes) and that optimizes for AI-driven search results, where assistants answer questions directly and cite a few sources. The second part is also called GEO (generative engine optimization) or AEO (answer engine optimization)." },

      { type: 'heading', text: 'The Two Meanings of AI SEO' },
      { type: 'table', headers: ['', 'AI for SEO work', 'SEO for AI search'], rows: [
        ['Goal', 'Do SEO faster and more consistently', 'Get cited in AI answers'],
        ['Main tasks', 'Research, briefs, drafts, internal links, refreshes', 'Clear facts, structured data, mentions on sources AI reads'],
        ['Measured by', 'Rankings, organic traffic', 'Mentions in AI answers, referral traffic from AI tools'],
        ['Also called', 'AI-assisted SEO', 'GEO, AEO, AI search optimization'],
      ]},

      { type: 'heading', text: 'Using AI to Do SEO Work' },
      { type: 'list', items: [
        'Keyword research: grouping hundreds of keywords by intent and topic.',
        'Briefs: outlining what a page must answer, based on what already ranks.',
        'Drafts: first versions written from your brand knowledge, then edited by a person.',
        'Internal linking: finding pages that should link to each other.',
        'Refreshes: spotting pages losing traffic and suggesting updates.',
        'Technical checks: titles, descriptions, structured data and broken links at scale.',
      ]},

      { type: 'heading', text: 'Optimizing for AI Search' },
      { type: 'list', items: [
        'Answer first: open each page with a direct, quotable answer to the question it targets.',
        'Be consistent: state the same facts about your business on your site, profiles and directories.',
        'Use structured data that matches the page, such as FAQPage, Product or LocalBusiness.',
        'Earn mentions on sites AI tools read: reviews, roundups, community threads and press.',
        'Cover the questions buyers actually ask, including comparisons and "best for" questions.',
        'Track a fixed list of questions in the main assistants each month, plus referral traffic from them.',
      ]},

      { type: 'heading', text: 'What to Automate and What to Keep Human' },
      { type: 'table', headers: ['Automate', 'Keep human'], rows: [
        ['Keyword grouping and briefs', 'Choosing which topics matter to the business'],
        ['First drafts from approved brand knowledge', 'Final edit, claims and examples'],
        ['Internal link suggestions', 'Anything that makes a promise or a comparison'],
        ['Finding pages to refresh', 'Deciding what to cut or merge'],
        ['Monitoring rankings and AI mentions', 'Strategy and priorities each quarter'],
      ]},
      { type: 'paragraph', text: "Google has said that content made with AI is not penalized for that reason; what matters is whether it is helpful and made for people. Publishing large volumes of thin AI text is the risk, not the use of AI itself." },

      { type: 'heading', text: 'AI SEO Agency, Service or Platform?' },
      { type: 'table', headers: ['Option', 'Best for', 'Ask before you buy'], rows: [
        ['AI SEO agency', 'Teams that want strategy and execution done for them', 'Who edits the content? How do you report AI search visibility?'],
        ['AI SEO service (fixed package)', 'A defined project such as an audit or content sprint', 'What exactly is delivered, and by when?'],
        ['AI SEO tools', 'In-house marketers who do the work themselves', 'Does it fit your workflow, or add another tool to check?'],
        ['AI marketing platform', 'Lean teams that want SEO, content and other channels in one place', 'Does anything publish without your approval?'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Sophie, Loraloop's SEO and GEO specialist, researches keywords with real search data, writes briefs and articles from your brand knowledge, suggests internal links and refreshes, and tracks how AI assistants describe your brand. Every article and change waits for your approval before it is published to your site." },

      { type: 'faq', items: [
        { q: 'What is AI SEO in simple terms?', a: 'Using AI to do SEO work faster, and making your business easy for AI search tools to find and cite.' },
        { q: 'Is AI SEO the same as GEO?', a: 'GEO is one part of AI SEO: optimizing for generative AI answers. AI SEO also covers using AI to do classic SEO work.' },
        { q: 'Does Google penalize AI-written content?', a: 'Google says it rewards helpful content however it is produced. Thin, unedited content published at scale is what tends to perform badly.' },
        { q: 'Do I need an AI SEO agency?', a: 'Not always. If you have someone to own strategy and editing, tools or a platform may be enough. An agency makes sense when nobody in-house can own it.' },
      ]},
      { type: 'cta', text: 'Loraloop researches, drafts and refreshes SEO and GEO content from your brand knowledge, and you approve every page before it goes live.' },
    ],
    relatedSlugs: ['llms-txt-explained-2026', 'how-to-measure-geo-ai-citations-referral-traffic', 'ai-internal-linking-topical-authority', 'multimodal-seo-images-video-audio-ai-search'],
  },

  // "client acquisition" US 2,400 / UK 480 / CA 320; "how to get clients" US 1,600
  {
    id: 209,
    slug: 'client-acquisition',
    title: 'Client Acquisition: How to Get Clients for a Service Business',
    seoTitle: 'Client Acquisition: How to Get Clients for a Service Business (2027)',
    description: 'A practical client acquisition system for agencies, consultants and service businesses: define the client, build an easy first offer, pick two channels, follow up on a schedule and track what each client costs.',
    category: 'Business',
    date: publishDate,
    imageIndex: 209,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Define the Client You Want',
      'Step 2: Build an Easy First Offer',
      'Step 3: Pick Two Channels, Not Ten',
      'Step 4: Follow Up on a Schedule',
      'Step 5: Track What Each Client Costs',
      'A Weekly Client Acquisition Routine',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Client acquisition is the process of turning strangers into paying clients, again and again. Most service businesses rely on referrals until they slow down, then scramble. A simple system replaces the scramble: a clear client profile, an offer that is easy to say yes to, two channels you work every week and follow-up that does not depend on memory." },
      { type: 'callout', text: "Quick answer: To get clients consistently, define one type of client you serve best, create a small fixed-price first offer, choose two acquisition channels such as referrals and direct outreach, follow up with every lead on a set schedule, and track how many conversations, proposals and wins each channel produces." },

      { type: 'heading', text: 'Step 1: Define the Client You Want' },
      { type: 'list', items: [
        'Industry or type of business, and size.',
        'The problem they have today that you solve best.',
        'Who decides, and what they need to see to say yes.',
        'Where they spend time: communities, events, newsletters, platforms.',
        'Warning signs of a poor fit, so you can say no early.',
      ]},

      { type: 'heading', text: 'Step 2: Build an Easy First Offer' },
      { type: 'paragraph', text: "A retainer or long project is a big decision. A small, fixed-price first offer is a small one: an audit, a 30-day sprint, a strategy session with a written plan. It has a clear price, a clear deliverable and an end date, and it leads naturally into the larger engagement once the client sees results." },

      { type: 'heading', text: 'Step 3: Pick Two Channels, Not Ten' },
      { type: 'table', headers: ['Channel', 'Works best when', 'Start with'], rows: [
        ['Referrals', 'You already have happy clients', 'Ask every happy client for one introduction'],
        ['Direct outreach', 'Your client type is easy to list by name', 'A useful offer, not a pitch, to a short list'],
        ['Partnerships', 'Other businesses serve the same clients', 'A joint offer or referral swap'],
        ['Content and LinkedIn', 'Clients research before buying', 'Practical posts that show how you think'],
        ['Communities and events', 'Your clients gather in one place', 'Answer questions; be useful before promoting'],
        ['Paid ads', 'You have a proven offer and know what a client is worth', 'One campaign to your first offer'],
      ]},
      { type: 'paragraph', text: "Choose one channel that brings fast conversations, such as outreach or referrals, and one that builds over time, such as content. Work both every week before adding a third." },

      { type: 'heading', text: 'Step 4: Follow Up on a Schedule' },
      { type: 'list', items: [
        'Reply to every inquiry the same day.',
        'After a call, send a written summary and next step within a day.',
        'Follow up on proposals after two days and again after a week, each time with something useful.',
        'Keep people who said "not now" on a monthly email with useful updates, with their permission.',
      ]},

      { type: 'heading', text: 'Step 5: Track What Each Client Costs' },
      { type: 'table', headers: ['Number', 'Why it matters'], rows: [
        ['Conversations started per week', 'The input you control most directly'],
        ['Calls booked and proposals sent', 'Shows whether your offer lands'],
        ['Close rate by channel', 'Shows which channel brings the right clients'],
        ['Client acquisition cost', 'Time and money spent per new client, by channel'],
        ['Client lifetime value', 'Revenue per client over the whole relationship'],
      ]},

      { type: 'heading', text: 'A Weekly Client Acquisition Routine' },
      { type: 'table', headers: ['Day', 'Task'], rows: [
        ['Monday', 'Review last week\'s numbers; pick this week\'s outreach list'],
        ['Tuesday', 'Send outreach and referral asks'],
        ['Wednesday', 'Publish one useful post or case study'],
        ['Thursday', 'Follow up on open conversations and proposals'],
        ['Friday', 'Update the lead list; note what worked'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop handles the marketing around client acquisition: it drafts LinkedIn posts, case studies and newsletters in your voice, tracks competitors, and reports which channels bring inquiries each week. The conversations stay yours, and every post and email waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is client acquisition?', a: 'The repeatable process a business uses to find, win and onboard new clients, from first contact to signed work.' },
        { q: 'What is the fastest way to get clients?', a: 'Ask existing happy clients for introductions and reach out directly to a short list of good-fit businesses with a useful first offer.' },
        { q: 'How do I calculate client acquisition cost?', a: 'Add up what you spent on a channel, including time valued at an hourly rate, and divide by the number of clients it brought in over the same period.' },
        { q: 'How many channels should I use?', a: 'Two to start: one that brings conversations quickly and one that builds over time. Add more only when both run without you thinking about them.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts the posts, case studies and newsletters that warm up future clients, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['how-to-get-clients-for-marketing-agency', 'cold-outreach-that-gets-replies', 'how-to-get-first-customers-saas', 'turn-leads-into-booked-appointments'],
  },

  // "google ads for small business" US 1,600 / UK 70 / CA 110; "google ads for beginners" US 260
  {
    id: 210,
    slug: 'google-ads-for-small-business',
    title: 'Google Ads for Small Business: A Beginner\'s Setup Guide',
    seoTitle: 'Google Ads for Small Business: Beginner\'s Setup Guide (2027)',
    description: 'How a small business can start Google Ads without wasting budget: set up conversion tracking first, start with a Search campaign, choose keywords and match types, add negatives, set a budget and run a weekly check.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 210,
    tableOfContents: [
      'The Short Answer',
      'Before You Spend: Set Up Conversion Tracking',
      'Which Campaign Type to Start With',
      'Choosing Keywords and Match Types',
      'Negative Keywords From Day One',
      'Ads, Assets and Landing Pages',
      'Setting a Budget',
      'A Weekly Google Ads Routine',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Google Ads can bring a small business customers who are searching for exactly what it sells. It can also spend a month's budget on searches that never convert. The difference is mostly setup: tracking, campaign type, keywords and a weekly habit of checking what you paid for." },
      { type: 'callout', text: "Quick answer: Start Google Ads by setting up conversion tracking, then launch one Search campaign targeting your service area with a short list of phrase and exact match keywords, add negative keywords from the start, send each ad group to a matching landing page, set a budget from what a customer is worth, and review search terms every week." },

      { type: 'heading', text: 'Before You Spend: Set Up Conversion Tracking' },
      { type: 'list', items: [
        'Decide what counts as a conversion: a purchase, a form, a call, a booking.',
        'Set it up with the Google tag or by importing conversions from Google Analytics.',
        'Track calls from ads and from your website if phone calls matter.',
        'Test each conversion yourself before launching, and check it records once, not twice.',
      ]},
      { type: 'paragraph', text: "Without tracking, Google's automated bidding has nothing to learn from and you cannot tell which keywords make money." },

      { type: 'heading', text: 'Which Campaign Type to Start With' },
      { type: 'table', headers: ['Campaign type', 'Good for', 'For most small businesses'], rows: [
        ['Search', 'People searching for your service or product', 'Start here'],
        ['Performance Max', 'Reaching across Google\'s channels with one campaign', 'Add once conversion tracking and volume are solid'],
        ['Shopping', 'Online stores with a product feed', 'Start here if you sell products online'],
        ['Display and video', 'Awareness and remarketing', 'Later, with a clear goal'],
        ['Local Services Ads', 'Eligible local services in supported areas', 'Worth checking if your category qualifies'],
      ]},

      { type: 'heading', text: 'Choosing Keywords and Match Types' },
      { type: 'list', items: [
        'Start with searches that show intent to buy: "[service] near me", "[service] [city]", "[product] price".',
        'Group them tightly: one service per ad group, so ads and pages can match.',
        'Use phrase and exact match while you learn. Broad match reaches more searches and works best once conversion tracking and smart bidding have data.',
        'Avoid very general one-word keywords at first.',
      ]},

      { type: 'heading', text: 'Negative Keywords From Day One' },
      { type: 'paragraph', text: "Negative keywords stop your ads showing for searches you do not want. Add common ones before launch, such as \"free\", \"jobs\", \"salary\", \"course\" or \"DIY\" where they do not fit, then add more each week from the search terms report." },

      { type: 'heading', text: 'Ads, Assets and Landing Pages' },
      { type: 'list', items: [
        'Write responsive search ads that repeat the searched service, your area and a reason to choose you.',
        'Add assets: sitelinks, callouts, call and location assets where they apply.',
        'Send each ad group to the most specific page, not the homepage.',
        'Make the page load fast on a phone and show the phone number and booking button at the top.',
      ]},

      { type: 'heading', text: 'Setting a Budget' },
      { type: 'numbered-list', items: [
        'Work out what a customer is worth to you after costs.',
        'Decide the most you will pay for a lead or sale.',
        'Estimate how many leads you want a month and multiply by that cost.',
        'Start smaller, check results weekly and raise budget only on campaigns that convert at your target.',
      ]},

      { type: 'heading', text: 'A Weekly Google Ads Routine' },
      { type: 'table', headers: ['Check', 'What to do'], rows: [
        ['Search terms report', 'Add negatives for irrelevant searches; add winning terms as keywords'],
        ['Cost per conversion by campaign', 'Move budget toward what converts at target'],
        ['Conversion tracking', 'Make sure conversions are still recording'],
        ['Ads and assets', 'Pause weak ads; test one new headline idea'],
        ['Landing page', 'Check the page still loads and the form works'],
      ]},
      { type: 'paragraph', text: "Our Google Ads audit checklist covers a fuller monthly review, and the glossary explains every term in Google Ads reports." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your Google Ads account, checks search terms, conversion tracking and cost per conversion every day, and proposes negative keywords, budget moves and new ads. Every change waits for your approval before it goes live in your account." },

      { type: 'faq', items: [
        { q: 'Is Google Ads worth it for a small business?', a: 'It can be when people search for what you sell and you track conversions. Without tracking and a weekly check, it is easy to pay for clicks that never become customers.' },
        { q: 'How much should a small business spend on Google Ads?', a: 'Start from what a customer is worth and the most you will pay per lead, then multiply by the leads you want. Begin smaller and scale what converts.' },
        { q: 'Should I use Performance Max as a beginner?', a: 'Most small businesses learn more by starting with a Search campaign, then adding Performance Max once conversion tracking and volume are solid.' },
        { q: 'What are negative keywords?', a: 'Words or phrases that stop your ad showing for searches you do not want, such as job seekers or people looking for free options.' },
      ]},
      { type: 'cta', text: 'Loraloop checks your Google Ads every day and proposes fixes, and nothing changes in your account until you approve it.' },
    ],
    relatedSlugs: ['google-ads-audit-checklist-2026', 'google-ads-search-terms-negative-keywords', 'google-ads-conversion-tracking-checklist', 'google-ads-glossary'],
  },

  // "facebook ad examples" US 880 / UK 140 / CA 90; "facebook ad ideas" US 90
  {
    id: 211,
    slug: 'facebook-ad-examples',
    title: 'Facebook Ad Examples: 12 Ad Types That Work, With Templates',
    seoTitle: 'Facebook Ad Examples: 12 Ad Types That Work (With Templates)',
    description: 'Twelve Facebook and Instagram ad types with a template for each: problem and solution, before and after, customer review, founder story, demo, comparison and more, plus how to find real examples in the Meta Ad Library.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 211,
    tableOfContents: [
      'The Short Answer',
      '12 Facebook Ad Types With Templates',
      'How to Find Real Examples in Your Market',
      'How to Test Which Ad Type Works for You',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Good Facebook ads are rarely original from scratch. They follow a small number of proven structures, filled with your product, your customers and your proof. Below are twelve ad types with a template for each. The examples use a made-up coffee brand, Morning Roast, so you can see the structure; swap in your own product and claims you can support." },
      { type: 'callout', text: "Quick answer: The Facebook ad types that most often work are problem and solution, before and after, customer review, user-generated video, founder story, product demo, comparison, offer, \"X reasons\" carousel, objection answer, how-to and seasonal. Find live examples in your market in the Meta Ad Library, then test two or three types at a time." },

      { type: 'heading', text: '12 Facebook Ad Types With Templates' },
      { type: 'table', headers: ['Ad type', 'Template', 'Example (fictional brand)'], rows: [
        ['Problem and solution', 'Tired of [problem]? [Product] [result] in [time].', 'Tired of bitter office coffee? Morning Roast brews smooth in 2 minutes.'],
        ['Before and after', 'Show the starting point, then the result.', 'Split image: instant coffee jar vs a fresh pour-over.'],
        ['Customer review', 'Quote a real review word for word, with the reviewer\'s first name.', '"Finally coffee I don\'t need sugar in." - Dana'],
        ['User-generated video', 'A customer films themselves using the product, in their words.', 'Phone video of a customer\'s morning routine.'],
        ['Founder story', 'Why I started [brand]: the problem I had.', 'Founder explains sourcing from one farm.'],
        ['Product demo', 'Show the product working in the first three seconds.', 'Hands making a cup, start to finish, in 15 seconds.'],
        ['Comparison', 'Us vs the usual option, on the points buyers care about.', 'Morning Roast vs café coffee: price per cup, taste, time.'],
        ['Offer', 'A clear offer with a real end date.', 'Free grinder with your first subscription, ends Sunday.'],
        ['X reasons carousel', 'One reason per card.', '5 reasons customers switch to Morning Roast.'],
        ['Objection answer', 'Name the doubt, then answer it.', '"Is subscription hard to cancel?" Cancel in two clicks.'],
        ['How-to', 'Teach something useful; the product is one step.', '3 ways to make cold brew at home.'],
        ['Seasonal', 'Tie the product to a date or moment.', 'The gift for the coffee lover who has everything.'],
      ]},
      { type: 'paragraph', text: "Whatever the type, the first second of a video or the first line of copy does most of the work. Lead with a person, a problem or a result, not your logo." },

      { type: 'heading', text: 'How to Find Real Examples in Your Market' },
      { type: 'numbered-list', items: [
        'Open the Meta Ad Library and search for competitors and brands your customers also buy from.',
        'Filter to active ads in your country.',
        'Note ads that have been running for a long time; advertisers rarely keep paying for ads that do not work.',
        'Write down the ad type, the hook and the offer for each, then look for patterns.',
      ]},
      { type: 'paragraph', text: "Our step-by-step guide to the Meta Ad Library shows how to do this research in under an hour." },

      { type: 'heading', text: 'How to Test Which Ad Type Works for You' },
      { type: 'list', items: [
        'Pick two or three ad types, not twelve, and make two versions of each.',
        'Keep the audience and offer the same so the ad type is what you are testing.',
        'Judge on cost per purchase or lead, not likes or clicks.',
        'Give each test enough budget and time to get results before deciding.',
        'When a type works, make new versions of it with different hooks and angles.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Angie, Loraloop's ads specialist, drafts new ad variations from your brand knowledge and your best performers, tracks which angles competitors are scaling and spots fatigued ads early. Every new ad and budget change waits for your approval before it runs." },

      { type: 'faq', items: [
        { q: 'What makes a good Facebook ad?', a: 'A strong first line or first second, one clear message, proof the claim is true and a single next step.' },
        { q: 'Where can I see examples of Facebook ads?', a: 'The Meta Ad Library shows active ads from any advertiser on Facebook and Instagram, searchable by brand or keyword.' },
        { q: 'Do video ads work better than images?', a: 'It depends on the product and audience. Test both: some products sell best on a clear image, others need a demo.' },
        { q: 'How many ads should I test at once?', a: 'Two or three ad types with two versions each is enough for most small budgets.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts new ad variations from your best performers, and nothing runs until you approve it.' },
    ],
    relatedSlugs: ['find-new-ad-angles-when-winners-stop-working', 'meta-ads-creative-testing-framework-2026', 'ugc-vs-static-vs-video-ads-meta', 'competitor-ad-research-meta-ad-library'],
  },

  // "small business marketing ideas" US 720 / UK 110 / CA 50
  {
    id: 212,
    slug: 'small-business-marketing-ideas',
    title: 'Small Business Marketing Ideas for 2027: 25 Ideas You Can Start This Month',
    seoTitle: 'Small Business Marketing Ideas for 2027: 25 Practical Ideas',
    description: 'Twenty-five practical small business marketing ideas for 2027, grouped by local search, reviews, email, social, partnerships, ads and content, with how to pick the three that fit your business.',
    category: 'Business',
    date: publishDate,
    imageIndex: 212,
    tableOfContents: [
      'The Short Answer',
      'Local Search and Reviews',
      'Email and Text',
      'Social Media and Content',
      'Partnerships and Community',
      'Paid Ads',
      'How to Choose Your First Three',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small businesses do not need more marketing ideas. They need three that fit, done every week. Here are twenty-five practical ones, grouped by channel, followed by a simple way to choose where to start." },
      { type: 'callout', text: "Quick answer: The small business marketing ideas that pay off most reliably are keeping your Google Business Profile current, asking every happy customer for a review, emailing your customer list monthly, posting real work on one social channel, partnering with neighboring businesses and running a small search ad campaign for your main service." },

      { type: 'heading', text: 'Local Search and Reviews' },
      { type: 'numbered-list', items: [
        'Complete your Google Business Profile: hours, services, photos and booking link.',
        'Post a weekly update or offer on your profile.',
        'Ask every happy customer for a review, with a direct link.',
        'Reply to every review within a day or two.',
        'Keep your name, address and phone number identical across your site and directories.',
      ]},

      { type: 'heading', text: 'Email and Text' },
      { type: 'numbered-list', items: [
        'Collect emails at checkout or booking, with permission.',
        'Send one useful monthly email: news, a tip, an offer.',
        'Set up a welcome email for every new customer.',
        'Send a win-back message to customers you have not seen in a while.',
        'Set an automatic text reply for missed calls with your booking link.',
      ]},

      { type: 'heading', text: 'Social Media and Content' },
      { type: 'numbered-list', items: [
        'Pick one social channel where your customers are and post twice a week.',
        'Show real work: before and after, behind the scenes, your team.',
        'Answer the three questions customers ask most, in posts or short videos.',
        'Share customer stories, with their permission.',
        'Write one helpful article a month that answers a common question.',
      ]},

      { type: 'heading', text: 'Partnerships and Community' },
      { type: 'numbered-list', items: [
        'Partner with a nearby business that serves the same customers.',
        'Run a joint offer or event each quarter.',
        'Join one local business group and be genuinely helpful.',
        'Sponsor or take part in a local event your customers attend.',
        'Start a simple referral reward for existing customers, where local rules allow.',
      ]},

      { type: 'heading', text: 'Paid Ads' },
      { type: 'numbered-list', items: [
        'Run a small Google Search campaign for your main service in your area.',
        'Retarget website visitors with a reminder ad.',
        'Promote your best-performing social post to people nearby.',
        'Use location targeting tightly to avoid paying for people you cannot serve.',
        'Check results weekly and stop what does not bring customers.',
      ]},

      { type: 'heading', text: 'How to Choose Your First Three' },
      { type: 'table', headers: ['If your business...', 'Start with'], rows: [
        ['Gets found mainly through search', 'Google Business Profile, reviews, one search campaign'],
        ['Has many repeat customers', 'Email list, monthly email, win-back message'],
        ['Sells something visual', 'One social channel, before and after posts, customer stories'],
        ['Shares customers with nearby businesses', 'One partnership, a joint offer, local group'],
      ]},
      { type: 'paragraph', text: "Run your three ideas for a full month, track the customers each brings and replace the weakest one with a new idea next month." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans your month from these ideas, drafts posts, profile updates, emails and review replies in your brand voice, and reports which channels bring customers. Every post, email and reply waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'What is the best marketing for a small business?', a: 'Usually the cheapest channels first: a complete Google Business Profile, steady reviews and email to existing customers. Add paid ads once you know what a customer is worth.' },
        { q: 'How much should a small business spend on marketing?', a: 'It depends on margins and goals. Start with a fixed monthly amount you can sustain, track customers per channel and move money toward what works.' },
        { q: 'How can I market my business for free?', a: 'Google Business Profile, reviews, social posts, email to your list, referrals and partnerships cost time rather than money.' },
        { q: 'How many marketing channels should a small business use?', a: 'Two or three done consistently beat many done occasionally.' },
      ]},
      { type: 'cta', text: 'Loraloop turns your marketing plan into weekly posts, emails and updates, and you approve everything before it goes live.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'which-marketing-channels-small-business-prioritize', 'ai-marketing-for-local-service-businesses', 'turn-leads-into-booked-appointments'],
  },

  // "valentines day marketing ideas" US 210 (seasonal peak Jan-Feb), UK 20, CA 10
  {
    id: 213,
    slug: 'valentines-day-marketing-ideas',
    title: 'Valentine\'s Day Marketing Ideas for Small Businesses and DTC Brands (2027)',
    seoTitle: 'Valentine\'s Day Marketing Ideas for Small Businesses and DTC Brands 2027',
    description: 'Valentine\'s Day 2027 falls on a Sunday. Practical marketing ideas for online stores and local businesses: gift guides, bundles, shipping deadlines, gift cards, self-gifting and a planning timeline starting in January.',
    category: 'Business',
    date: publishDate,
    imageIndex: 213,
    tableOfContents: [
      'The Short Answer',
      'Valentine\'s Day 2027 Timeline',
      'Ideas for Online Stores and DTC Brands',
      'Ideas for Local Businesses',
      'Email, Social and Ads Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Valentine's Day is one of the first selling moments of the year, and in 2027 it falls on a Sunday. That changes the plan: shipping deadlines arrive earlier in the week, and weekend experiences matter more for local businesses. The brands that do well plan in January and make choosing easy for rushed buyers." },
      { type: 'callout', text: "Quick answer: Plan Valentine's Day 2027 marketing in January: build a gift guide and two or three bundles, announce your last order date for delivery before Sunday, February 14, offer digital gift cards for late shoppers, include a self-gifting or friends angle, and schedule email, social and ads in three waves." },

      { type: 'heading', text: 'Valentine\'s Day 2027 Timeline' },
      { type: 'table', headers: ['When', 'What to do'], rows: [
        ['Early to mid January', 'Choose products and bundles; plan offers; brief creators and design'],
        ['Late January', 'Publish the gift guide; start teaser emails and posts'],
        ['First week of February', 'Main email and ad push; announce your last order date'],
        ['Days before your shipping cutoff', 'Shipping deadline reminders'],
        ['After the cutoff to February 14', 'Switch to gift cards, local pickup or experiences'],
        ['February 15 onward', 'Thank-you email; note what sold for next year'],
      ]},

      { type: 'heading', text: 'Ideas for Online Stores and DTC Brands' },
      { type: 'list', items: [
        'Gift guide by budget and by person: for partners, friends, yourself.',
        'Two or three ready-made bundles with gift wrap or a note.',
        'A clear last order date for delivery before Sunday, February 14, shown on every page.',
        'Digital gift cards promoted to late shoppers once shipping closes.',
        'A self-gifting or "Galentine\'s" angle for buyers who are not shopping for a partner.',
        'Creator content showing the product as a gift, not just the product.',
      ]},

      { type: 'heading', text: 'Ideas for Local Businesses' },
      { type: 'list', items: [
        'Bookable experiences for the weekend: a set menu, a class, a treatment for two.',
        'A joint offer with a neighboring business, such as dinner plus flowers.',
        'Gift certificates sold online for last-minute buyers.',
        'Updated holiday hours and a Valentine\'s post on Google Business Profile.',
        'A short reminder to past customers a week before.',
      ]},

      { type: 'heading', text: 'Email, Social and Ads Plan' },
      { type: 'table', headers: ['Wave', 'Email', 'Social and ads'], rows: [
        ['Inspire (late January)', 'Gift guide', 'Gift ideas posts; creator content'],
        ['Convert (early February)', 'Bundles and offer', 'Ads to the gift guide and bundles'],
        ['Last chance (before cutoff)', 'Shipping deadline', 'Deadline reminders; retargeting'],
        ['Late shoppers (after cutoff)', 'Gift cards and local options', 'Gift card ads; local pickup posts'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans the Valentine's campaign around your key dates and products, drafts the gift guide, emails, posts and ads in your brand voice, and reminds you of shipping deadlines. Every email, post and ad waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'What day is Valentine\'s Day 2027?', a: 'Sunday, February 14, 2027.' },
        { q: 'When should I start Valentine\'s Day marketing?', a: 'Plan in early January and start promoting in late January, with the main push in the first week of February.' },
        { q: 'What sells well for Valentine\'s Day?', a: 'Ready-made gifts and bundles, experiences for two, gift cards for late shoppers and self-gifting products.' },
        { q: 'How do I reach last-minute Valentine\'s shoppers?', a: 'Promote digital gift cards, local pickup and bookable experiences once delivery deadlines have passed.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your Valentine\'s gift guide, emails and ads from your products, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['q1-marketing-plan-dtc-brands-after-holidays', 'get-new-customers-shopify-without-discounts', 'creator-ugc-partnerships-dtc-brands', 'small-business-marketing-ideas'],
  },
];
