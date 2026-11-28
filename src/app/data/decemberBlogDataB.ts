import type { BlogPost } from './blogData';

// December batch B (ids 192-196), written November 28, 2026 for Dec 1-7.
// Topics picked from Loraloop market data (Treg): live Google results and People Also Ask for
// "how to get your SaaS recommended by ChatGPT", r/FacebookAds threads on ad account bans and a
// slow Black Friday, UK Google suggestions for "boxing day marketing ideas", plus Nevo David's
// playbook on AI-search positioning. Hand-written, answer-first, no invented statistics.
const publishDate = 'November 28, 2026';

export const decemberBlogPostsB: BlogPost[] = [
  {
    id: 192,
    slug: 'how-to-get-saas-recommended-by-chatgpt',
    title: 'How to Get Your SaaS Recommended by ChatGPT',
    seoTitle: 'How to Get Your SaaS Recommended by ChatGPT (2026 Guide)',
    description: 'How B2B SaaS companies get recommended by ChatGPT, Claude and Perplexity: own a narrow category, fix how comparison pages describe you, earn reviews and listings, and track the questions buyers ask.',
    category: 'Business',
    date: publishDate,
    imageIndex: 192,
    tableOfContents: [
      'How AI Assistants Choose Which SaaS to Recommend',
      'Step 1: Own a Narrow Category',
      'Step 2: Say Clearly What You Are on Your Own Site',
      'Step 3: Fix How Others Describe You',
      'Step 4: Be Present Where AI Tools Read',
      'Step 5: Get Listed Where Agents Look',
      'How to Track Whether It Is Working',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "B2B buyers now ask ChatGPT, Claude and Perplexity for a shortlist before they visit any vendor site. When the assistant names three tools and yours is not one of them, you lose the deal before you knew it existed. Getting recommended is not a trick. It comes from being clearly described, in a category narrow enough to win, on the sources these assistants read." },
      { type: 'callout', text: "Quick answer: To get your SaaS recommended by ChatGPT, pick a narrow category you can lead, state it plainly on your homepage and docs, correct how comparison pages and directories describe you, earn reviews and mentions on sites AI assistants read, list your product in the ChatGPT and Claude app or connector directories, and track a fixed set of buyer questions every month." },

      { type: 'heading', text: 'How AI Assistants Choose Which SaaS to Recommend' },
      { type: 'list', items: [
        'They match the buyer\'s question to a category, then look for products clearly described as members of it.',
        'They read many pages at once: your site, comparison pages, review sites, directories, community threads and articles.',
        'They favor products with consistent facts across sources and positive, specific mentions.',
        'They compare you with competitors\' content, so a category crowded with bigger brands is harder to win.',
      ]},

      { type: 'heading', text: 'Step 1: Own a Narrow Category' },
      { type: 'paragraph', text: "A broad category such as \"project management software\" puts you against the biggest brands, and AI answers will name them first. A narrow one, such as \"project management for construction subcontractors\", gives the assistant a clear reason to name you. Nevo David, founder of Postiz, described this shift: instead of competing as a general social media scheduler against much larger tools, Postiz focused its content on social media scheduling for AI agents, and it appears for questions in that niche (source: Nevo David on X, @wickedguro, August 2026)." },

      { type: 'heading', text: 'Step 2: Say Clearly What You Are on Your Own Site' },
      { type: 'list', items: [
        'Homepage headline: the category and who it is for, in plain words.',
        'A short definition block that answers "What is [your product]?" in two or three sentences.',
        'Pages per use case and per buyer type, each opening with a direct answer.',
        'Question-form FAQs that match how buyers ask assistants.',
        'Structured data (Organization, SoftwareApplication, FAQPage) with the same facts as the page.',
      ]},

      { type: 'heading', text: 'Step 3: Fix How Others Describe You' },
      { type: 'paragraph', text: "AI assistants repeat what other sites say about you, including your competitors' comparison pages. If those pages describe an old version of your product or the wrong category, assistants repeat the mistake. Nevo David noted that when Postiz was described as open-source only, AI answers left out its cloud product, and the fix was to state clearly on the website and README that it was more than open source (source: Nevo David on X, September 2026)." },
      { type: 'numbered-list', items: [
        'Ask the main assistants how they describe your product and note every wrong fact.',
        'Find the pages they cite: comparison articles, directories, old reviews.',
        'Update your own pages first, then ask directory and review site owners to correct listings.',
        'Publish your own honest comparison pages so assistants have an accurate source.',
      ]},

      { type: 'heading', text: 'Step 4: Be Present Where AI Tools Read' },
      { type: 'table', headers: ['Source', 'What to do'], rows: [
        ['Review sites', 'Ask active customers for reviews on the sites buyers in your category use'],
        ['Industry lists and roundups', 'Pitch inclusion with a clear description and a use case'],
        ['Community threads', 'Answer real buyer questions with useful detail, not promotion'],
        ['LinkedIn and X articles', 'Publish practical guides under founder and team names'],
        ['Your docs and changelog', 'Keep them public and current; assistants read them for facts'],
      ]},
      { type: 'paragraph', text: "Do not depend on one source. AI assistants change which sites they cite. Nevo David pointed out in August 2026 that Reddit had largely disappeared from ChatGPT's cited sources after a change in how it searched, which hurt anyone relying only on Reddit for AI visibility." },

      { type: 'heading', text: 'Step 5: Get Listed Where Agents Look' },
      { type: 'paragraph', text: "If your product has an API, make it usable by AI agents through an MCP server or a published skill, and submit it to the ChatGPT and Claude app or connector directories and to curated lists of MCP servers. Assistants can recommend products they can connect to, and directory listings are another source they read." },

      { type: 'heading', text: 'How to Track Whether It Is Working' },
      { type: 'table', headers: ['Metric', 'How to measure'], rows: [
        ['Mention rate', 'Share of 20 to 50 tracked buyer questions where an assistant names you'],
        ['Accuracy', 'Whether the description of your product is correct'],
        ['AI referral traffic', 'Visits from ChatGPT, Perplexity, Claude and Gemini in your analytics'],
        ['AI crawler activity', 'How often AI crawlers fetch your pages'],
        ['Trials from AI sources', 'Signups whose first visit came from an AI assistant'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop helps SaaS teams do the steady work behind AI recommendations: it drafts use-case pages, comparison pages and FAQs in your brand voice, plans articles for each buyer question and reports AI referral traffic with your connected analytics. Every page and post is approved by your team before it is published." },

      { type: 'faq', items: [
        { q: 'How do I get ChatGPT to recommend my company?', a: 'Describe your product clearly in a narrow category, correct inaccurate descriptions on other sites, earn reviews and mentions on sources AI assistants read, and list your product where agents look. Then track a fixed set of buyer questions monthly.' },
        { q: 'How long does it take to show up in ChatGPT answers?', a: 'It varies. On-site fixes can be picked up when assistants next read your pages, while reviews and mentions build over months. Track progress monthly rather than expecting a fixed date.' },
        { q: 'Can you pay to be recommended by ChatGPT?', a: 'Organic AI answers cannot be bought directly. What you can do is make your product easy to understand and well described on the sources the assistant reads.' },
        { q: 'Is SEO still needed for AI recommendations?', a: 'Yes. Clear, well-structured pages that rank in search are also the pages AI assistants read and cite. GEO builds on SEO rather than replacing it.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts the pages, FAQs and comparisons that help AI assistants describe your SaaS correctly, with every page approved by your team.' },
    ],
    relatedSlugs: ['how-to-get-brand-mentioned-chatgpt-perplexity-gemini', 'optimize-for-chatgpt-search-2026', 'how-to-measure-geo-ai-citations-referral-traffic', 'how-agencies-sell-geo-services'],
    relatedTools: ['meta-description-generator'],
  },
  {
    id: 193,
    slug: 'meta-ad-account-restricted-what-to-do',
    title: 'Meta Ad Account Restricted or Disabled? What to Do and How to Protect the Next One',
    seoTitle: 'Meta Ad Account Restricted or Disabled: What to Do (2026)',
    description: 'What to do when Meta restricts or disables your ad account or Business Manager: check Account Quality, request a review, fix the cause, and set up backups so one ban does not stop your sales.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 193,
    tableOfContents: [
      'Why This Is Happening to So Many Advertisers',
      'First Hour: What to Check',
      'Requesting a Review',
      'Common Causes and Fixes',
      'Protecting Your Account Before the Next Problem',
      'What Not to Do',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Advertisers in communities such as r/FacebookAds have been reporting waves of restricted profiles, Business Managers and ad accounts through late 2026, often with little explanation. A restriction in the middle of the holiday season can stop a brand's main sales channel overnight. You cannot control Meta's review systems, but you can respond in the right order and set up your accounts so one restriction does not take everything down." },
      { type: 'callout', text: "Quick answer: Open Account Quality in Meta Business Suite to see exactly what is restricted and why, request a review there with clear evidence, fix the likely cause (a policy issue in an ad or landing page, a payment problem, or an unverified business), and do not create new accounts to get around the restriction. Then protect the next account: verify the business, add backup admins with two-factor authentication, and keep payment details current." },

      { type: 'heading', text: 'Why This Is Happening to So Many Advertisers' },
      { type: 'list', items: [
        'Automated review systems flag ads, accounts and profiles at scale, and some flags are mistakes.',
        'Compromised personal profiles of admins can get a Business Manager restricted.',
        'Payment failures and sudden spend changes can trigger extra checks.',
        'Landing pages, claims and products in sensitive categories draw more scrutiny.',
      ]},

      { type: 'heading', text: 'First Hour: What to Check' },
      { type: 'numbered-list', items: [
        'Open Account Quality in Meta Business Suite and note which asset is affected: the ad account, the Business Manager, a Page or an admin profile.',
        'Read the stated reason and the policy it links to.',
        'Check whether any admin profile was compromised: unknown logins, changed emails or new admins you did not add.',
        'Check billing: failed payments, expired cards or a payment method under review.',
        'Pause new launches in other accounts until you understand the cause.',
      ]},

      { type: 'heading', text: 'Requesting a Review' },
      { type: 'paragraph', text: "Request the review from Account Quality, on the asset that is restricted. Be brief and factual: what the business sells, that the flagged ads and pages follow the named policy, and what you changed if something was wrong. Business verification documents, if requested, should match the business name and address exactly. Reviews can take time; keep a record of every request and response." },

      { type: 'heading', text: 'Common Causes and Fixes' },
      { type: 'table', headers: ['Likely cause', 'What to fix'], rows: [
        ['Ad or landing page breaks a policy', 'Edit or remove the flagged ad, fix claims on the landing page, then request review'],
        ['Compromised admin profile', 'Secure the profile, remove unknown admins, turn on two-factor authentication'],
        ['Payment problem', 'Update or verify the payment method and settle any failed charge'],
        ['Unverified business', 'Complete business verification with matching documents'],
        ['Sudden unusual activity', 'Scale spend in steps and avoid many new accounts or admins at once'],
      ]},

      { type: 'heading', text: 'Protecting Your Account Before the Next Problem' },
      { type: 'list', items: [
        'Complete business verification while nothing is wrong.',
        'Add at least two trusted admins, each with two-factor authentication.',
        'Keep a current, valid payment method and a backup.',
        'Review ads and landing pages against Meta\'s advertising standards before big launches.',
        'Keep your email list and other channels healthy so a restriction does not stop all sales.',
      ]},

      { type: 'heading', text: 'What Not to Do' },
      { type: 'list', items: [
        'Do not create new ad accounts or profiles to get around a restriction. Meta treats that as circumvention, which can make the problem permanent.',
        'Do not run the same flagged ad in another account.',
        'Do not buy or rent accounts from third parties.',
        'Do not send many review requests at once for the same asset.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop checks connected Meta ad accounts every day and flags delivery that suddenly stops, so you see a problem the morning it starts rather than at the end of the week. It drafts ad copy that stays within the claims you approve, and it never launches or changes anything without your approval." },

      { type: 'faq', items: [
        { q: 'Why was my Meta ad account disabled?', a: 'Common reasons include ads or landing pages that break an advertising policy, a compromised admin profile, payment problems and unverified businesses. Account Quality in Meta Business Suite shows the stated reason.' },
        { q: 'How do I appeal a Meta ad account restriction?', a: 'Request a review from Account Quality on the restricted asset, explain briefly why it follows the named policy or what you fixed, and provide any verification documents Meta asks for.' },
        { q: 'Should I open a new ad account if mine is banned?', a: 'No. Creating accounts to get around a restriction breaks Meta\'s rules and can lead to permanent restrictions on the business and its admins.' },
        { q: 'How can I protect my Meta ad account?', a: 'Verify the business, add backup admins with two-factor authentication, keep payment methods current and review ads and landing pages against Meta\'s standards before large launches.' },
      ]},
      { type: 'cta', text: 'Loraloop checks your Meta accounts every morning and flags stopped delivery early, with every change approved by you.' },
    ],
    relatedSlugs: ['meta-ads-daily-monitoring-checklist', 'meta-ads-after-cyber-monday-december-plan', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'how-to-use-ai-to-manage-meta-ads-step-by-step'],
    relatedTools: ['break-even-roas-calculator'],
  },
  {
    id: 194,
    slug: 'boxing-day-january-sales-marketing-uk',
    title: 'Boxing Day and January Sales Marketing Ideas for UK Brands',
    seoTitle: 'Boxing Day Marketing Ideas for UK Brands: 2026 Plan',
    description: 'Boxing Day and January sales marketing ideas for UK eCommerce brands: when to announce, how to use Black Friday learnings, email and Meta ads timing, and how to avoid training customers to wait.',
    category: 'Business',
    date: publishDate,
    imageIndex: 194,
    tableOfContents: [
      'Why Boxing Day Still Matters After Black Friday',
      'Decide What the Sale Is For',
      'Five Boxing Day Marketing Ideas',
      'The Timeline From December 20 to January 31',
      'Email and Ads Plan',
      'Mistakes to Avoid',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "In the UK, Boxing Day on December 26 starts the January sales, and many shoppers wait for it with gift money and vouchers to spend. For brands that already ran Black Friday, the question is not whether to discount again, but what this second sale should achieve: clear stock, win new customers, or bring Black Friday buyers back." },
      { type: 'callout', text: "Quick answer: Decide what your Boxing Day sale is for, then plan backwards. Tease it to your email list before Christmas, launch early on December 26, focus on gift card holders and products you need to clear, and run the January sale as a short, clear event rather than a month of discounts. Use your Black Friday results to choose products and creative." },

      { type: 'heading', text: 'Why Boxing Day Still Matters After Black Friday' },
      { type: 'list', items: [
        'Shoppers have gift money and vouchers to spend.',
        'Many people are off work and browsing on their phones.',
        'It is the natural time to clear winter stock before spring lines.',
        'Customers who bought gifts on Black Friday may now shop for themselves.',
      ]},

      { type: 'heading', text: 'Decide What the Sale Is For' },
      { type: 'table', headers: ['Goal', 'What to put on sale', 'Who to target'], rows: [
        ['Clear stock', 'Seasonal and slow-moving lines', 'Deal-seeking audiences and your full list'],
        ['Win new customers', 'Best-sellers with healthy margin', 'Lookalikes and people who visited in Q4'],
        ['Bring buyers back', 'Products that pair with Black Friday purchases', 'Q4 buyers and gift recipients'],
      ]},

      { type: 'heading', text: 'Five Boxing Day Marketing Ideas' },
      { type: 'numbered-list', items: [
        'Gift card top-up: a bonus for customers spending gift cards or vouchers, so they spend more than the card value.',
        'Early access for subscribers: open the sale to your email and SMS list on Christmas evening or early Boxing Day.',
        'Complete the set: offers on items that pair with what customers bought on Black Friday.',
        'Last chance on seasonal lines: clear winter stock with an honest end date.',
        'New year starter bundles: themed bundles for January goals and routines.',
      ]},

      { type: 'heading', text: 'The Timeline From December 20 to January 31' },
      { type: 'table', headers: ['Dates', 'Action'], rows: [
        ['Dec 20-23', 'Tease the sale to your list; prepare creative and landing pages'],
        ['Dec 24-25', 'Schedule emails and ads; send early access on Christmas evening if you use it'],
        ['Dec 26', 'Launch publicly in the morning; ads, email and social live'],
        ['Dec 27-31', 'Follow-up emails by product interest; refresh ads if frequency climbs'],
        ['Jan 1-15', 'January sale continues with fewer, clearer offers'],
        ['Jan 16-31', 'End the sale on a set date; move to full-price new-year messaging'],
      ]},

      { type: 'heading', text: 'Email and Ads Plan' },
      { type: 'list', items: [
        'Segment email by what customers bought in Q4 and by gift buyers versus self buyers.',
        'Retarget Q4 site visitors and cart abandoners who did not buy.',
        'Reuse your best Black Friday creative with new copy and a new date, rather than the same ad.',
        'Watch cost per purchase daily against your margin after the discount.',
      ]},

      { type: 'heading', text: 'Mistakes to Avoid' },
      { type: 'list', items: [
        'Running the same discount from Black Friday to the end of January, which trains customers to never pay full price.',
        'Claiming "was" prices that were not genuinely charged before. UK consumer protection rules require price comparisons to be accurate and not misleading.',
        'Forgetting returns from gifts. Make exchanges easy and use them to suggest the right product.',
        'Leaving Christmas creative running after December 25.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify, Klaviyo and your ad accounts. It can draft the Boxing Day and January sale plan from your Black Friday results, write the emails in your brand voice, schedule social posts and check your Meta and Google accounts every day. Every email, ad and budget change waits for your approval, including over the holidays." },

      { type: 'faq', items: [
        { q: 'When should UK brands start Boxing Day marketing?', a: 'Tease it to your email list in the days before Christmas, prepare ads and pages in advance, and launch publicly early on December 26.' },
        { q: 'Should I run a Boxing Day sale if I already did Black Friday?', a: 'Yes, if it has a clear goal such as clearing seasonal stock or bringing Black Friday buyers back. Avoid running the same discount continuously.' },
        { q: 'How long should the January sale last?', a: 'Long enough to reach your list and audiences, with a set end date. Many brands finish by mid-to-late January and move back to full-price messaging.' },
        { q: 'What are good Boxing Day marketing ideas?', a: 'Gift card top-ups, early access for subscribers, offers that complete a Black Friday purchase, honest clearance on seasonal lines and new year bundles.' },
      ]},
      { type: 'cta', text: 'Loraloop plans and drafts your Boxing Day and January sale across email, ads and social, with every send approved by you.' },
    ],
    relatedSlugs: ['after-black-friday-retention-plan-shopify', 'q1-marketing-plan-dtc-brands-after-holidays', 'meta-ads-after-cyber-monday-december-plan', 'bfcm-post-mortem-template-agencies'],
    relatedTools: ['email-subject-generator', 'promotion-headlines-generator'],
  },
  {
    id: 195,
    slug: 'meta-ads-naming-convention-template',
    title: 'Meta Ads Naming Convention: A Template for Agencies and Media Buyers',
    seoTitle: 'Meta Ads Naming Convention Template (Campaigns, Ad Sets, Ads)',
    description: 'A Meta ads campaign naming convention for agencies and media buyers: what to put in campaign, ad set and ad names, a copyable template with examples, and how it speeds up reporting.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 195,
    tableOfContents: [
      'Why Naming Conventions Matter',
      'The Rules of a Good Convention',
      'Campaign Names',
      'Ad Set Names',
      'Ad Names',
      'Full Example',
      'Rolling It Out Across Accounts',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "A naming convention is the cheapest reporting tool a media buyer has. When every campaign, ad set and ad follows the same pattern, you can filter Ads Manager in seconds, group results in a spreadsheet without manual tagging, and hand an account to a colleague without a walkthrough. Agencies running many accounts get the biggest benefit, because one pattern works across every client." },
      { type: 'callout', text: "Quick answer: Put the details you report on into the names, in a fixed order, separated by a consistent character. A common pattern is Campaign: objective_funnel stage_market_offer_launch date. Ad set: audience_placement_optimization. Ad: concept_format_hook_creator_version. Keep fields short, use the same abbreviations everywhere, and document them in one shared sheet." },

      { type: 'heading', text: 'Why Naming Conventions Matter' },
      { type: 'list', items: [
        'Filter results in Ads Manager by any field without building custom tags.',
        'Group spend and results by concept, format or audience in a spreadsheet using the name alone.',
        'See which creative angles win across many accounts.',
        'Hand over accounts and onboard new buyers faster.',
      ]},

      { type: 'heading', text: 'The Rules of a Good Convention' },
      { type: 'numbered-list', items: [
        'Fixed order: every name lists fields in the same sequence.',
        'One separator: an underscore or a pipe, never both.',
        'Short codes: agreed abbreviations, written down in one place.',
        'Dates in one format, such as 2026-12-01, so names sort correctly.',
        'No spaces or special characters that break exports.',
      ]},

      { type: 'heading', text: 'Campaign Names' },
      { type: 'table', headers: ['Field', 'Example values'], rows: [
        ['Objective', 'SALES, LEADS, TRAFFIC'],
        ['Funnel stage', 'PROS (prospecting), RET (retargeting), RETEN (retention)'],
        ['Market', 'US, UK, CA, EU'],
        ['Offer or theme', 'EVERGREEN, BFCM, JANSALE'],
        ['Launch date', '2026-12-01'],
      ]},
      { type: 'paragraph', text: "Example: SALES_PROS_US_JANSALE_2026-12-26" },

      { type: 'heading', text: 'Ad Set Names' },
      { type: 'table', headers: ['Field', 'Example values'], rows: [
        ['Audience', 'BROAD, LAL-PURCH-1, INT-FITNESS, WEB-30D'],
        ['Placement', 'ADV (Advantage+ placements), FEEDS, REELS'],
        ['Optimization', 'PURCH, ATC, LEAD'],
        ['Test label (optional)', 'TEST-HOOKS-W49'],
      ]},
      { type: 'paragraph', text: "Example: BROAD_ADV_PURCH_TEST-HOOKS-W49" },

      { type: 'heading', text: 'Ad Names' },
      { type: 'table', headers: ['Field', 'Example values'], rows: [
        ['Concept or angle', 'GIFTGUIDE, PAINFIX, SOCIALPROOF'],
        ['Format', 'UGC, STATIC, VIDEO, CAROUSEL'],
        ['Hook', 'H1, H2, H3 (matched to a hook list)'],
        ['Creator or source', 'CR-ANNA, IN-HOUSE, TTSHOP (reused TikTok Shop video)'],
        ['Version', 'V1, V2'],
      ]},
      { type: 'paragraph', text: "Example: GIFTGUIDE_UGC_H2_CR-ANNA_V1" },

      { type: 'heading', text: 'Full Example' },
      { type: 'table', headers: ['Level', 'Name'], rows: [
        ['Campaign', 'SALES_PROS_UK_JANSALE_2026-12-26'],
        ['Ad set', 'BROAD_ADV_PURCH'],
        ['Ad', 'GIFTCARD-TOPUP_STATIC_H1_IN-HOUSE_V1'],
        ['Ad', 'GIFTCARD-TOPUP_UGC_H3_CR-SAM_V2'],
      ]},

      { type: 'heading', text: 'Rolling It Out Across Accounts' },
      { type: 'numbered-list', items: [
        'Write the convention and the code list in one shared sheet.',
        'Apply it to all new launches from a set date.',
        'Rename only active campaigns in old accounts; leave history as it is.',
        'Check names weekly for a month until the team uses it by habit.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop can follow your naming convention when it drafts campaigns and ads, so every new launch matches the pattern, and it reports results grouped by concept, format and audience across accounts. Nothing is created or launched in your ad account until you approve it." },

      { type: 'faq', items: [
        { q: 'What is a good naming convention for Meta ads?', a: 'One with a fixed order of fields at each level, a single separator and short agreed codes. For example, campaign: objective_funnel_market_offer_date; ad set: audience_placement_optimization; ad: concept_format_hook_creator_version.' },
        { q: 'Should I rename old campaigns?', a: 'Rename only active ones. Leave historical campaigns as they are and apply the convention to everything new from a set date.' },
        { q: 'Do naming conventions affect Meta ad performance?', a: 'No. Names do not change delivery. They make analysis, reporting and handovers much faster.' },
        { q: 'What separator should I use in ad names?', a: 'Pick one, such as an underscore, and use it everywhere. Avoid spaces and special characters that can break exports and formulas.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts Meta campaigns that follow your naming convention and reports by concept and format, with every launch approved by you.' },
    ],
    relatedSlugs: ['meta-ads-glossary', 'meta-ads-creative-testing-framework-2026', 'meta-ads-client-reporting-agency-template', 'meta-ads-multiple-products-markets-account-structure'],
    relatedTools: ['creative-testing-calculator', 'hook-rate-calculator'],
  },
  {
    id: 196,
    slug: 'google-business-profile-holiday-checklist-multi-location',
    title: 'Google Business Profile Holiday Checklist for Multi-Location Businesses',
    seoTitle: 'Google Business Profile Holiday Hours Checklist (Multi-Location)',
    description: 'A December checklist for clinics, home services and franchises with several locations: set holiday hours on every Google Business Profile, post updates, reply to reviews and keep details consistent.',
    category: 'Business',
    date: publishDate,
    imageIndex: 196,
    tableOfContents: [
      'Why Holiday Hours Matter for Local Search',
      'The Checklist',
      'Setting Special Hours Across Many Locations',
      'Posts and Photos for December',
      'Reviews Over the Holidays',
      'Keeping Details Consistent for AI Search',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "In December, people search \"open now\" and \"near me\" before they visit or call. If a location shows the wrong hours on Google, a customer drives to a closed door or calls a line nobody answers, and that bad experience often ends up in a review. For businesses with many locations, getting holiday hours right on every profile is one of the most useful pieces of local marketing all month." },
      { type: 'callout', text: "Quick answer: Before the holidays, set special hours for every date your locations close or change hours, on every Google Business Profile, using bulk tools if you manage many locations. Post a short holiday update per location, refresh photos, reply to new reviews within a day or two, and make sure your name, address, phone and hours match on your website and directories." },

      { type: 'heading', text: 'Why Holiday Hours Matter for Local Search' },
      { type: 'list', items: [
        'Google shows hours directly in search and Maps, so many customers never visit your website.',
        'Wrong hours lead to wasted trips, missed calls and negative reviews.',
        'Accurate, consistent details help both search and AI assistants describe each location correctly.',
      ]},

      { type: 'heading', text: 'The Checklist' },
      { type: 'numbered-list', items: [
        'List every location and its hours for each holiday date in one sheet.',
        'Set special hours on every profile for each changed date, including days closed.',
        'Update holiday hours on your website\'s location pages to match.',
        'Post a short holiday message on each profile with hours and how to book.',
        'Add a few current photos per location.',
        'Assign someone to reply to reviews during the holiday period.',
        'Check every profile again a week before the first holiday date.',
      ]},

      { type: 'heading', text: 'Setting Special Hours Across Many Locations' },
      { type: 'paragraph', text: "Google Business Profile lets you set special hours for specific dates, separate from regular hours, so normal hours come back automatically afterwards. Businesses that manage many locations can group them and edit hours in bulk, or use bulk upload through a spreadsheet. Set them well before the dates so the changes are live in time." },

      { type: 'heading', text: 'Posts and Photos for December' },
      { type: 'table', headers: ['Post', 'When', 'What to include'], rows: [
        ['Holiday hours', 'Early December', 'Changed dates and how to book or reach you'],
        ['Seasonal offer or service', 'Mid December', 'One clear offer, with an end date'],
        ['New year booking', 'Late December', 'Appointments or services available in January'],
      ]},

      { type: 'heading', text: 'Reviews Over the Holidays' },
      { type: 'list', items: [
        'Reply to new reviews within a day or two, including negative ones.',
        'Keep replies specific to the location and the customer\'s experience.',
        'Never offer incentives for positive reviews; ask every customer the same way.',
        'Note recurring complaints by location and fix the cause in January.',
      ]},

      { type: 'heading', text: 'Keeping Details Consistent for AI Search' },
      { type: 'paragraph', text: "AI assistants and search engines compare your business details across your profile, website and directories. Keep the business name, address, phone number and hours identical everywhere, give each location its own page on your website with those details, and add LocalBusiness structured data to each location page." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop helps multi-location businesses run local marketing from one place. It drafts holiday posts and review replies for each location in your brand voice, plans the December content calendar and keeps location pages and social updates consistent. Every post and reply waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'How do I set holiday hours on Google Business Profile?', a: 'Use the special hours option for each date your hours change or you are closed. Regular hours return automatically after those dates.' },
        { q: 'Can I update holiday hours for many locations at once?', a: 'Yes. Businesses that manage many locations can edit hours for groups of profiles in bulk or upload changes through a spreadsheet.' },
        { q: 'When should I set holiday hours?', a: 'Early in December, and well before the first changed date, so the updates are live when customers search.' },
        { q: 'Do holiday posts on Google Business Profile help?', a: 'They give customers clear, current information where they are already looking and keep each profile active and up to date.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts holiday posts and review replies for every location, with every post approved by your team.' },
    ],
    relatedSlugs: ['local-seo-ai-era-near-me-recommendations', 'ai-marketing-for-local-service-businesses', 'schema-markup-for-ai-search-guide', 'entity-seo-topical-authority-ai-search'],
    relatedTools: ['review-request-email'],
  },
];
