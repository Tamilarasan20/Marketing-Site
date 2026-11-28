import type { BlogPost } from './blogData';

// December batch B: ids 195-196 remain here (192-194 were rewritten into guideBlogDataE/F.ts), written November 28, 2026.
// Topics picked from Loraloop market data (Treg): live Google results and People Also Ask for
// "how to get your SaaS recommended by ChatGPT", r/FacebookAds threads on ad account bans and a
// slow Black Friday, UK Google suggestions for "boxing day marketing ideas", plus Nevo David's
// playbook on AI-search positioning. Hand-written, answer-first, no invented statistics.
const publishDate = 'November 28, 2026';

export const decemberBlogPostsB: BlogPost[] = [
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
