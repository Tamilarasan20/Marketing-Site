import type { BlogPost } from './blogData';

const publishDate = 'October 10, 2026';

// Google Ads cluster, part A (ids 173-177): audit, search terms, AI Max, Performance Max, Smart Bidding.
// No third-party vendor names. Loraloop claims follow the Angie Google Ads capability list.
export const googleAdsClusterA: BlogPost[] = [
  {
    id: 173,
    slug: 'google-ads-audit-checklist-2026',
    title: 'Google Ads Audit Checklist for 2026: 20 Checks in the Order That Saves the Most Money',
    seoTitle: 'Google Ads Audit Checklist 2026: 20 Checks to Find Wasted Spend',
    description: 'A 20-point Google Ads audit checklist for 2026, ordered by money at stake: conversion tracking, wasted search terms, bidding, budgets, Performance Max, ads and landing pages.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 173,
    tableOfContents: [
      'Why Audit Order Matters',
      'Step 1: Conversion Tracking (Checks 1 to 4)',
      'Step 2: Wasted Spend (Checks 5 to 9)',
      'Step 3: Bidding and Budgets (Checks 10 to 13)',
      'Step 4: Structure and Performance Max (Checks 14 to 16)',
      'Step 5: Ads, Assets and Landing Pages (Checks 17 to 20)',
      'How Often to Run Each Check',
      'Automating the Audit With Loraloop',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "A Google Ads audit is only useful if it starts where the money is. Most checklists jump straight to ad copy and Quality Score, but if conversion tracking is wrong, every number after it is wrong too, and if a third of spend goes to irrelevant searches, rewriting headlines will not save the account. This checklist puts 20 checks in the order that protects the most money first: tracking, then wasted spend, then bidding and budgets, then structure, and only then ads and landing pages. Each check says where to look, what a red flag looks like and what to do about it." },
      { type: 'callout', text: "Quick answer: Audit a Google Ads account in this order. 1) Conversion tracking: is the primary conversion real, firing and counted once? 2) Wasted spend: search terms, keywords and placements that spend without converting. 3) Bidding and budgets: is the strategy right for your data volume, are targets realistic, are profitable campaigns limited by budget? 4) Structure: overlapping campaigns, fragmented budgets and Performance Max controls. 5) Ads, assets and landing pages. Fix each step before moving to the next." },
      { type: 'image',
        src: 'https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Close-up of a hand holding a pen over a printed inspection checklist on a clipboard',
        caption: 'Photo: Person Holding a Pen and Checklist of House Inspection via Pexels',
        captionLink: 'https://www.pexels.com/photo/person-in-yellow-reflective-safety-vest-holding-a-pen-and-checklist-of-house-inspection-8293680/' },

      { type: 'heading', text: 'Why Audit Order Matters' },
      { type: 'paragraph', text: "Google's bidding systems optimize toward whatever you tell them is a conversion. If a page view or a button click is counted as a primary conversion, Smart Bidding will happily buy cheap page views and report a great cost per conversion while sales fall. That is why tracking comes first. Wasted spend comes second because it is the fastest money to recover: a negative keyword takes effect the same day. Bidding, budgets and structure come next because they decide how the remaining money is spread. Creative and landing pages come last, not because they matter less, but because improving them inside a broken account is wasted effort." },
      { type: 'table', headers: ['Step', 'Checks', 'Typical time', 'Why it comes here'], rows: [
        ['1. Conversion tracking', '1 to 4', '30 minutes', 'Every other number depends on it'],
        ['2. Wasted spend', '5 to 9', '45 minutes', 'Fastest money to recover'],
        ['3. Bidding and budgets', '10 to 13', '30 minutes', 'Decides where the remaining money goes'],
        ['4. Structure and Performance Max', '14 to 16', '30 minutes', 'Removes overlap and gives automation enough data'],
        ['5. Ads, assets and landing pages', '17 to 20', '45 minutes', 'Lifts results once the money is flowing to the right place'],
      ]},

      { type: 'heading', text: 'Step 1: Conversion Tracking (Checks 1 to 4)' },
      { type: 'numbered-list', items: [
        'Is the primary conversion the one that makes money? Look in Goals, then Summary. Red flag: page views, scroll depth, time on site or "contact page visit" set as primary. Fix: make the real action (purchase, qualified lead, booked call) primary and move the rest to secondary so they are observed but not optimized toward.',
        'Are conversions still firing? Compare conversions by day for the last 14 days. Red flag: a sudden drop to zero on a day when clicks were normal. Fix: check the tag on the thank-you page or the form, and pause automated changes until it is fixed, because every keyword will look like it stopped converting.',
        'Is anything counted twice? Red flag: the same purchase tracked by both a Google tag conversion and an imported GA4 key event, both primary. Fix: keep one primary source per action. For leads, set counting to "One" per click; for purchases, "Every".',
        'Are enhanced conversions, consent mode and conversion values in place? Red flag: e-commerce conversions with no value, or a large gap between Google Ads conversions and real orders. Fix: pass dynamic order values, turn on enhanced conversions, and set up consent mode where your traffic requires it.',
      ]},

      { type: 'heading', text: 'Step 2: Wasted Spend (Checks 5 to 9)' },
      { type: 'numbered-list', items: [
        'Search terms that spent more than one target CPA without converting. Look in Insights and reports, then Search terms, for the last 30 to 90 days ending at least 3 days ago. Fix: add wrong-intent terms as negatives; give relevant ones a better ad or landing page instead.',
        'Keywords with spend and zero conversions over 90 days. Red flag: broad keywords that keep matching new junk. Fix: pause the keyword, tighten the match type, or add the negatives it keeps attracting.',
        'Placements on Display, Video and Performance Max that spend without results. Red flag: mobile apps or low-quality sites taking a large share of content spend. Fix: exclude them at campaign level or with an account-level placement exclusion list.',
        'Duplicate keywords across ad groups or campaigns. Red flag: the same keyword in several places, so your own campaigns compete and data is split. Fix: keep each keyword in one ad group and add cross-negatives where needed.',
        'Location settings. Red flag: "Presence or interest" for a local business, so people outside your service area see ads. Fix: switch to "Presence" (people in or regularly in your locations) and check the location report for spend outside the area.',
      ]},
      { type: 'paragraph', text: "Step 2 is where the free Google Ads Wasted Spend Finder helps: paste the search terms report and it totals zero-conversion spend, lists negative keyword candidates and shows the words that never convert." },

      { type: 'heading', text: 'Step 3: Bidding and Budgets (Checks 10 to 13)' },
      { type: 'numbered-list', items: [
        'Does the bid strategy fit your data? Red flag: target CPA or target ROAS on a campaign with a handful of conversions a month. Fix: consolidate campaigns, or use Maximize conversions without a target until volume builds.',
        'Are targets realistic? Red flag: a target CPA far below what the campaign actually achieves, which strangles delivery. Fix: set the target near the last 30 days of actual CPA, then tighten in small steps.',
        'Are profitable campaigns limited by budget? Look at search impression share lost to budget. Red flag: your best campaign loses impressions to budget while a weak one underspends. Fix: move budget from the weak campaign to the strong one.',
        'Are budgets fragmented? Red flag: ten campaigns with ten small budgets and a few conversions each. Fix: merge campaigns that share a goal so each one gets enough conversions to learn from.',
      ]},

      { type: 'heading', text: 'Step 4: Structure and Performance Max (Checks 14 to 16)' },
      { type: 'numbered-list', items: [
        'Overlapping campaigns. Red flag: two campaigns targeting the same keywords and locations, often a copy that was never removed. Fix: keep one, merge the history, remove the other.',
        'Performance Max controls. Red flag: no brand exclusions, no negative keywords, and nobody has opened the channel performance report. Fix: add brand exclusions if you run a brand Search campaign, add campaign-level negatives for wrong-intent themes, and review which channels the money goes to.',
        'Device and schedule gaps. Red flag: one device or time of day with a far higher cost per conversion over at least a month of data. Fix: with Smart Bidding, small adjustments are usually enough; reserve hard exclusions for clear, persistent waste.',
      ]},

      { type: 'heading', text: 'Step 5: Ads, Assets and Landing Pages (Checks 17 to 20)' },
      { type: 'numbered-list', items: [
        'Responsive search ad coverage. Red flag: fewer than 8 to 10 distinct headlines, everything pinned, or assets rated Low left running. Fix: replace low-rated assets with genuinely different angles, and pin only what legal or brand rules require.',
        'Quality Score components. Red flag: "Below average" on expected CTR, ad relevance or landing page experience for keywords that carry spend. Fix: tighter ad groups, headlines that echo the keyword, and landing pages that answer the search.',
        'Assets. Red flag: no sitelinks, callouts or images on Search campaigns. Fix: add at least four sitelinks, a set of callouts and image assets where eligible.',
        'Disapprovals and landing pages. Red flag: disapproved or limited ads, campaigns that are on but not serving, slow mobile pages. Fix: read the policy reason, fix the ad or page, and appeal in Google Ads where needed.',
      ]},

      { type: 'heading', text: 'How Often to Run Each Check' },
      { type: 'table', headers: ['Frequency', 'Checks', 'What you are looking for'], rows: [
        ['Daily', '2, 20', 'Tracking flatlines, disapprovals, campaigns not serving'],
        ['Weekly', '5, 6, 12', 'New wasted search terms, losing keywords, budget-limited winners'],
        ['Monthly', '7, 8, 9, 10, 11, 13, 16, 17, 18, 19', 'Placements, duplication, bid strategy fit, assets, Quality Score'],
        ['Quarterly', '1, 3, 4, 14, 15', 'Conversion setup, structure and Performance Max controls'],
      ]},

      { type: 'heading', text: 'Automating the Audit With Loraloop' },
      { type: 'paragraph', text: "Loraloop's ads agent, Angie, runs most of this checklist every night on connected Google Ads accounts. The audit scores wasted spend, CPA efficiency, budget pacing, delivery, conversion tracking presence and accuracy, primary-goal setup, search terms, keyword waste, Quality Score, placements, duplicate campaigns and keywords, fragmented budgets and impression share lost to ad rank. Recoverable spend is shown as a range rather than a single number, because nobody can know it exactly." },
      { type: 'paragraph', text: "Findings turn into proposals: one negative keyword proposal per account from wasted search terms, website placement exclusions, small target and bid steps, and rewrites of low-rated responsive search ad assets. A Fix all button can pause campaigns that spend with zero conversions, add ad schedules and set device adjustments, all waiting for your approval by default. If conversion tracking looks dead, Loraloop holds the fixes back, because the account's numbers cannot be trusted until it is repaired." },

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'How do I audit a Google Ads account?', a: 'Work in order of money at stake: conversion tracking first, then wasted spend in search terms, keywords and placements, then bidding and budgets, then campaign structure and Performance Max controls, and finally ads, assets and landing pages. Fix each step before moving on, because later checks depend on earlier ones.' },
        { q: 'How often should I audit Google Ads?', a: 'Check tracking and disapprovals daily, search terms and budgets weekly, and structure, bidding fit and assets monthly. A full audit like this one is worth doing quarterly, or whenever results change sharply.' },
        { q: 'What is the most common Google Ads mistake?', a: 'Counting the wrong thing as a conversion. When a page view or a minor click is a primary conversion, Smart Bidding optimizes toward it and reported results look good while real leads or sales fall. Wasted search terms are a close second.' },
        { q: 'Can I trust Google\'s Optimization Score as an audit?', a: 'Use it as a list of ideas, not an audit. Optimization Score measures how many of Google\'s recommendations you have applied, and many of those recommendations increase spend. Review each one against your own goals.' },
        { q: 'Can AI audit my Google Ads account?', a: 'Yes. An AI agent such as Loraloop can score the account every night, price the waste and draft the fixes for your approval. Keep a person in charge of changes that spend more money or publish new ads.' },
      ]},
      { type: 'cta', text: 'Get this audit every night instead of once a quarter: connect Google Ads and let Angie find the waste and draft the fixes for your approval.' },
    ],
  },

  {
    id: 174,
    slug: 'google-ads-search-terms-negative-keywords',
    title: 'How to Find Wasted Spend in Google Ads Search Terms and Turn It Into Negative Keywords',
    seoTitle: 'Google Ads Negative Keywords: Find Wasted Spend in Search Terms (2026)',
    description: 'How to review the Google Ads search terms report, pick the right negative match type and level, and stop paying for searches that never convert, without blocking good traffic.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 174,
    tableOfContents: [
      'What the Search Terms Report Shows and Hides',
      'The 30-Minute Search Terms Review',
      'Choosing the Right Negative Match Type',
      'Where to Add Negatives',
      'Negative Keyword Themes Most Businesses Need',
      'Mistakes That Block Good Traffic',
      'How Loraloop Mines Search Terms Every Night',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "The search terms report is where Google Ads money leaks. Your keywords describe what you meant to buy; search terms show what you actually paid for. With broad match, AI Max and Performance Max matching more searches than ever, the gap between the two keeps growing. The fix is a routine: review search terms on a schedule, block wrong-intent searches with the right negative keyword at the right level, and leave alone the relevant searches that simply have not converted yet." },
      { type: 'callout', text: "Quick answer: Open the search terms report for the last 30 to 90 days, ending at least 3 days ago. Sort by cost. Flag terms that spent more than your target cost per conversion without converting. Add wrong-intent ones (jobs, free, DIY, courses, unrelated products) as negatives: phrase match for a word or phrase, exact match for one specific search. Put themes that apply everywhere in a shared list or at account level. Repeat weekly." },
      { type: 'image',
        src: 'https://images.pexels.com/photos/17284804/pexels-photo-17284804.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Magnifying glass resting on printed financial charts and figures',
        caption: 'Photo: Magnifying Glass on Paper via Pexels',
        captionLink: 'https://www.pexels.com/photo/magnifying-glass-on-paper-17284804/' },

      { type: 'heading', text: 'What the Search Terms Report Shows and Hides' },
      { type: 'paragraph', text: "The report lists the searches that triggered your ads, with clicks, cost and conversions, and which keyword or matching source caught them. It does not list every search. Google shows terms searched by a significant number of people and groups the rest. In most accounts the visible terms still carry the majority of spend, so the report is the right place to start, but it is not a complete record." },
      { type: 'paragraph', text: "Timing matters as much as coverage. Conversions often arrive days after the click, especially for leads and considered purchases. If you judge a search term on yesterday's data, it can look like waste when the conversion simply has not been recorded yet. That is why every step below uses a date range that ends at least 3 days ago." },

      { type: 'heading', text: 'The 30-Minute Search Terms Review' },
      { type: 'numbered-list', items: [
        'Set the date range to the last 30 to 90 days, ending 3 days ago. Use 90 days for small accounts so each term has enough clicks to judge.',
        'Show the Cost, Clicks, Conversions and Cost per conversion columns and sort by cost, highest first.',
        'Mark every term that spent at least one target CPA with zero conversions. These are your candidates.',
        'For each candidate, ask one question: does this search show the intent to buy what I sell? If no, it is a negative. If yes, it is an ad, landing page or bid problem, not a negative.',
        'Look for repeated words across the candidates (jobs, salary, free, DIY, how to, course, used). One phrase-match negative on the word blocks the whole family.',
        'Add the negatives at the right level (next section), then note the date so next week you only review new terms.',
      ]},
      { type: 'paragraph', text: "If you would rather not sort spreadsheets, paste the report into the free Google Ads Wasted Spend Finder. It runs in your browser, totals the zero-conversion spend, lists candidates against your target CPA and ranks the words that only ever appear in non-converting searches." },

      { type: 'heading', text: 'Choosing the Right Negative Match Type' },
      { type: 'paragraph', text: "Negative keywords match differently from normal keywords. The most important difference: negatives do not expand to close variants, so a negative for \"shoe\" does not block \"shoes\". Add plurals and common misspellings yourself." },
      { type: 'table', headers: ['Negative match type', 'How you enter it', 'Blocks', 'Does not block'], rows: [
        ['Negative broad', 'running shoes', 'Searches containing both words in any order, such as "shoes for running"', '"running shoe" (singular), "trainers for running"'],
        ['Negative phrase', '"running shoes"', 'Searches containing the words in that order, such as "cheap running shoes"', '"shoes for running"'],
        ['Negative exact', '[running shoes]', 'Only the search "running shoes"', '"red running shoes", "running shoes sale"'],
      ]},
      { type: 'paragraph', text: "A practical default: use phrase match for wrong-intent words and short phrases (\"jobs\", \"free\", \"how to\"), and exact match when you want to block one specific search but keep its longer relatives." },

      { type: 'heading', text: 'Where to Add Negatives' },
      { type: 'table', headers: ['Level', 'Applies to', 'Use it for'], rows: [
        ['Ad group', 'One ad group', 'Routing: stopping a search from going to the wrong ad group inside a campaign'],
        ['Campaign', 'One campaign, including Performance Max', 'Themes that are wrong for this campaign only'],
        ['Shared negative keyword list', 'Every campaign the list is attached to', 'Themes that are wrong for most campaigns, such as jobs, free or DIY'],
        ['Account level', 'Eligible campaigns across the account', 'Brand-safety terms you never want to appear for'],
      ]},
      { type: 'paragraph', text: "Shared lists are the easiest to maintain. Build one list per theme (careers, free and cheap, DIY and education, competitor support pages) and attach the lists to every relevant campaign. When a new campaign launches, attaching the lists takes a minute." },

      { type: 'heading', text: 'Negative Keyword Themes Most Businesses Need' },
      { type: 'table', headers: ['Theme', 'Example words', 'Do not exclude if you...'], rows: [
        ['Jobs and careers', 'jobs, careers, salary, hiring, internship, apprenticeship', 'are a staffing agency or recruit through ads'],
        ['Free and cheap', 'free, cheap, discount code (if you never offer one)', 'sell a free plan, budget tier or run promotions'],
        ['DIY and how-to', 'how to, diy, tutorial, yourself', 'sell tools, kits or courses for doing it yourself'],
        ['Education', 'course, training, certification, degree, pdf', 'sell training'],
        ['Used and rental', 'used, second hand, rent, refurbished', 'sell or rent used or refurbished items'],
        ['Existing customers', 'login, sign in, support, cancel, refund', 'want to win back churned customers with a specific offer'],
        ['Research only', 'definition, meaning, wiki, statistics', 'sell information products'],
      ]},

      { type: 'heading', text: 'Mistakes That Block Good Traffic' },
      { type: 'list', items: [
        'Blocking a relevant search because it has not converted after a few clicks. Give relevant searches enough clicks to judge, or fix the landing page first.',
        'Using negative broad match on a single common word that also appears in good searches, such as "repair" for a business that sells repairs.',
        'Adding a negative at account level when it was only wrong for one campaign.',
        'Forgetting that negatives do not match plurals and misspellings.',
        'Judging search terms on the last 7 days, before late conversions arrive.',
        'Never reviewing old negatives. Products and offers change; a negative added two years ago may now block a service you sell.',
      ]},

      { type: 'heading', text: 'How Loraloop Mines Search Terms Every Night' },
      { type: 'paragraph', text: "Loraloop's ads agent, Angie, pulls your search terms every night for the last 30 days, leaving out the most recent 3 so conversions can settle. A waste sweep prices the search terms that spent without converting. Angie then groups them by theme and files one negative keyword proposal per account, so you approve a clean list instead of fifty separate cards. The AI only proposes; the change itself is made by a deterministic executor after you approve, and it can be undone." },
      { type: 'paragraph', text: "You can also ask in chat: add negatives to a campaign or ad group, add or remove terms in a shared negative list, remove a campaign negative that is blocking good traffic, or list the search terms behind a campaign's spend. Removing a negative restores serving, so it always waits for your approval." },

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'How often should I review Google Ads search terms?', a: 'Weekly for most accounts, and daily for the first two weeks after launching a new campaign or turning on broader matching such as broad match, AI Max or Performance Max. Always use a date range that ends at least 3 days ago.' },
        { q: 'How many negative keywords should a Google Ads account have?', a: 'There is no right number. A new account often starts with 50 to 200 negatives from shared themes like jobs, free and DIY, then adds more from its own search terms each week. Quality matters more than count: every negative should block a wrong-intent search.' },
        { q: 'Do negative keywords work in Performance Max?', a: 'Yes. Performance Max now accepts campaign-level negative keywords, and account-level negatives apply to eligible inventory too. Brand exclusions are a separate control for keeping brand searches out of Performance Max.' },
        { q: 'What is the difference between a negative keyword and pausing a keyword?', a: 'Pausing a keyword stops that keyword from triggering ads, but other keywords can still match the same search. A negative keyword blocks the search itself, whichever keyword would have matched it.' },
        { q: 'Can AI add negative keywords automatically?', a: 'Yes, and it is one of the safest jobs to give an AI because negatives reduce spend and are easy to reverse. Loraloop proposes negatives nightly and, by default, waits for your approval before adding them.' },
      ]},
      { type: 'cta', text: 'Stop paying for searches that never convert: let Angie read your search terms every night and hand you one clean negative keyword list to approve.' },
    ],
  },

  {
    id: 175,
    slug: 'ai-max-for-search-campaigns-guide',
    title: 'AI Max for Search Campaigns: When to Turn It On and How to Keep It Under Control',
    seoTitle: 'AI Max for Search Campaigns (2026): Setup, Controls and When to Use It',
    description: "A practical guide to Google's AI Max for Search: what it changes, who should turn it on, how to test it safely, and the controls that keep matching and generated ad copy on brand.",
    category: 'Advertising',
    date: publishDate,
    imageIndex: 175,
    tableOfContents: [
      'What AI Max Changes in a Search Campaign',
      'Who Should Turn It On, and Who Should Wait',
      'A Safe Way to Test AI Max',
      'The Controls That Keep AI Max on Brand',
      'How to Read AI Max Results',
      'Where an AI Agent Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "AI Max for Search campaigns is Google's one-click upgrade for standard Search campaigns. It lets Google match your ads to searches beyond your keyword list, write headline and description variations from your website, and send each click to the page on your site that best fits the search. For accounts with solid conversion tracking it can find valuable searches you never thought to bid on. For accounts with weak tracking or strict brand rules it can spend on loosely related searches and show copy nobody approved. This guide covers when to turn it on, how to test it, and the controls that keep it in bounds." },
      { type: 'callout', text: "Quick answer: Turn on AI Max for a Search campaign when conversion tracking is accurate, Smart Bidding is already running, and you can review search terms weekly. Test it on one campaign first, add brand exclusions, negative keyword lists and URL exclusions before you start, and compare cost per conversion and conversion volume against the previous four weeks. Wait if your conversion data is thin or every line of ad copy needs legal approval." },
      { type: 'image',
        src: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Laptop screen showing a web analytics dashboard with charts and conversion data',
        caption: 'Photo: Close-Up Shot of a Laptop Computer via Pexels',
        captionLink: 'https://www.pexels.com/photo/close-up-shot-of-a-laptop-computer-12969403/' },

      { type: 'heading', text: 'What AI Max Changes in a Search Campaign' },
      { type: 'paragraph', text: "AI Max is a campaign setting, not a new campaign type. Your keywords, ad groups and bidding stay where they are; AI Max adds three capabilities on top." },
      { type: 'table', headers: ['Feature', 'What it does', 'What to watch'], rows: [
        ['Search term matching', 'Uses your landing pages, ads and keywords to match searches beyond your keyword list, similar to broad match plus keywordless matching', 'New search terms with spend and no conversions'],
        ['Text customization', 'Generates headline and description variations from your site and existing ads, tailored to each search', 'Claims, prices or wording your brand or legal team would not approve'],
        ['Final URL expansion', 'Sends the click to the page on your site most relevant to the search, instead of always using your chosen final URL', 'Clicks landing on blog posts, careers or support pages'],
      ]},
      { type: 'paragraph', text: "Each of the three can be controlled separately, and you can keep search term matching while turning off text customization or URL expansion if your brand rules require it." },

      { type: 'heading', text: 'Who Should Turn It On, and Who Should Wait' },
      { type: 'table', headers: ['Good candidates', 'Better to wait'], rows: [
        ['Accounts with reliable primary conversions and steady volume', 'Accounts with a handful of conversions a month or broken tracking'],
        ['Campaigns already on Maximize conversions or Maximize conversion value', 'Campaigns on manual CPC that you manage keyword by keyword'],
        ['Sites with many relevant pages (products, services, locations)', 'Single-page sites, where URL expansion adds little'],
        ['Teams that review search terms weekly', 'Regulated industries where every line of copy needs sign-off'],
        ['Accounts that have mostly exact and phrase match and suspect they are missing demand', 'Accounts already struggling with irrelevant broad match traffic'],
      ]},

      { type: 'heading', text: 'A Safe Way to Test AI Max' },
      { type: 'numbered-list', items: [
        'Fix conversion tracking first. AI Max optimizes toward your primary conversions; if those are wrong, it will scale the wrong thing.',
        'Pick one Search campaign with steady conversions and a stable bid strategy. Note its last four weeks of conversions, cost per conversion and conversion value.',
        'Before switching on, attach your shared negative keyword lists, add brand inclusions or exclusions where they apply, and add URL exclusions for pages that should never be landing pages (careers, blog, support, login).',
        'Turn AI Max on, either through a campaign experiment if your account offers one, or directly on the chosen campaign.',
        'Review the search terms report twice a week for the first two weeks, then weekly. Add negatives for wrong-intent matches.',
        'After four to six weeks, compare against the baseline. Keep it if conversions rose at a similar or better cost per conversion; roll back or narrow it if cost rose without more conversions.',
      ]},
      { type: 'paragraph', text: "Google reported conversion lifts for advertisers who activated AI Max when it launched. Treat those as averages across Google's customers, not a forecast for your account; your own test is the only number that matters." },
      { type: 'youtube', videoId: 'wKp8lEICwZQ', title: 'Google Ads AI Max Explained by an Ex-Googler', caption: 'Video: Google Ads AI Max EXPLAINED by an ex-Googler (YouTube)' },

      { type: 'heading', text: 'The Controls That Keep AI Max on Brand' },
      { type: 'list', items: [
        'Brand controls: brand inclusions limit matching to searches about your brand (useful for brand campaigns); brand exclusions keep a campaign off brand searches you handle elsewhere.',
        'Locations of interest at ad group level: keeps matching tied to searches about the places you serve.',
        'URL exclusions: stop final URL expansion from sending clicks to pages that do not convert.',
        'Negative keywords and shared negative lists: still the main defense against wrong-intent matches.',
        'Turning off text customization: keeps only the headlines and descriptions you wrote.',
        'Asset review: check the generated variations in the asset report and remove any you would not have approved.',
      ]},

      { type: 'heading', text: 'How to Read AI Max Results' },
      { type: 'paragraph', text: "The search terms report shows which searches came from AI Max matching, so you can judge them separately from your keyword matches. Look at three things: the share of spend going to AI Max matches, their cost per conversion compared with your keyword matches, and the landing pages final URL expansion chose. If AI Max matches convert at a similar cost, the feature is finding demand you were missing. If they cost far more per conversion, tighten the controls before you decide it does not work." },
      { type: 'table', headers: ['What you see', 'What it means', 'What to do'], rows: [
        ['More conversions at a similar CPA', 'AI Max is finding real demand', 'Keep it on; review search terms weekly'],
        ['More spend, flat conversions', 'Matching is too loose for your offer', 'Add negatives and brand exclusions; consider turning off URL expansion'],
        ['Clicks landing on blog or support pages', 'URL expansion is choosing the wrong pages', 'Add URL exclusions'],
        ['Generated headlines you would not approve', 'Text customization is drawing on the wrong content', 'Remove those assets or turn off text customization'],
      ]},

      { type: 'heading', text: 'Where an AI Agent Fits' },
      { type: 'paragraph', text: "AI Max widens the funnel; somebody still has to watch what comes in. That is the job Loraloop's ads agent, Angie, does alongside it. Angie does not switch AI Max on for you. It reads every search term each night, including the broader matches, prices the ones that spend without converting and proposes negative keywords for your approval. It also flags disapproved ads and campaigns that are on but not serving, and tells you when conversion tracking has gone quiet, which is exactly when broad matching becomes most expensive." },

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'What is AI Max for Search campaigns?', a: 'AI Max is a setting for standard Google Search campaigns that adds search term matching beyond your keywords, text customization (generated headlines and descriptions) and final URL expansion. It works with Smart Bidding and comes with brand, location and URL controls.' },
        { q: 'Is AI Max the same as broad match?', a: 'No, but it overlaps. Broad match matches searches related to your keywords. AI Max search term matching also uses your landing pages and ads to find searches, works even beyond your keyword list, and comes bundled with generated copy and URL expansion.' },
        { q: 'Does AI Max replace keywords?', a: 'No. Keywords still matter: they tell Google what you want and get priority when they match a search closely. AI Max adds matching on top of them.' },
        { q: 'Can I use AI Max without generated ad copy?', a: 'Yes. Text customization and final URL expansion can be turned off separately, leaving only search term matching.' },
        { q: 'How long should I test AI Max?', a: 'Four to six weeks for most accounts, longer if conversions are few or your sales cycle is long. Judge it on conversions and cost per conversion against the previous period, not on clicks.' },
      ]},
      { type: 'cta', text: 'Turn on AI Max with a safety net: Angie reads your search terms every night and hands you the negatives to approve.' },
    ],
  },

  {
    id: 176,
    slug: 'performance-max-control-2026',
    title: 'How to Control Performance Max in 2026: Negatives, Channel Reports, Brand Exclusions and Asset Groups',
    seoTitle: 'How to Control Performance Max in 2026: Negatives, Channels and Asset Groups',
    description: 'Performance Max gives you more control in 2026 than most advertisers use: campaign negatives, channel reporting, brand exclusions, URL controls and asset groups. Here is a weekly routine.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 176,
    tableOfContents: [
      'What Performance Max Does Well, and Where It Hides Spend',
      'The Control Levers You Have in 2026',
      'Asset Groups That Give the Algorithm Something to Work With',
      'Reading the Channel Performance Report',
      'Performance Max and Search: Which Campaign Gets the Search?',
      'A Weekly Performance Max Routine',
      'How Loraloop Works With Performance Max',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Performance Max runs one campaign across Search, Shopping, YouTube, Display, Discover, Gmail and Maps, and lets Google decide where each dollar goes. When conversion tracking is clean and the assets and feed are strong, it often finds conversions a Search-only account would miss. When it is left on autopilot, it can drift toward cheap inventory and brand searches you would have won anyway. The good news for 2026 is that advertisers have more levers than they did at launch. This guide covers each one and a weekly routine for using them." },
      { type: 'callout', text: "Quick answer: Control Performance Max with five levers: campaign-level negative keywords for wrong-intent searches, brand exclusions to keep brand traffic in your brand Search campaign, URL controls so clicks land on pages that convert, well-themed asset groups with strong assets, and the channel performance report to see where spend goes. Review search term insights, channels and placements weekly, and judge results on conversions you trust, not on reported volume." },
      { type: 'image',
        src: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Tablet on a wooden desk showing a web analytics dashboard with graphs and charts',
        caption: 'Photo: Black Digital Tablet on Brown Surface via Pexels',
        captionLink: 'https://www.pexels.com/photo/close-up-photo-of-black-digital-tablet-on-brown-surface-10020092/' },

      { type: 'heading', text: 'What Performance Max Does Well, and Where It Hides Spend' },
      { type: 'paragraph', text: "Performance Max is strongest for e-commerce with a good product feed and for lead generation with reliable, value-based conversion tracking. It combines signals across channels that no person could weigh by hand. Its weak spots are predictable: it can claim credit for brand searches that would have converted anyway, push spend into Display or video placements of uneven quality, and optimize toward easy conversions if your goals are not set up carefully." },

      { type: 'heading', text: 'The Control Levers You Have in 2026' },
      { type: 'table', headers: ['Lever', 'What it does', 'When to use it'], rows: [
        ['Campaign-level negative keywords', 'Blocks wrong-intent searches from the campaign', 'Always, starting with your shared themes (jobs, free, DIY)'],
        ['Account-level negative keywords', 'Blocks searches across eligible campaigns', 'Brand-safety terms you never want to appear for'],
        ['Brand exclusions', 'Keeps the campaign off your own (or listed) brand searches', 'When a separate brand Search campaign handles brand traffic'],
        ['Final URL expansion and URL exclusions', 'Controls which pages clicks can land on', 'Always exclude careers, blog, support and login pages'],
        ['Audience signals', 'Suggests a starting audience; not a hard target', 'Use customer lists and site visitors to speed up learning'],
        ['Customer acquisition goal', 'Bids for new customers only, or bids higher for them', 'When new-customer growth matters more than repeat sales'],
        ['Conversion goals at campaign level', 'Chooses which conversions this campaign optimizes toward', 'Always; avoid micro-conversions as goals'],
        ['Placement exclusions', 'Keeps ads off sites and apps you do not want', 'When the placement report shows waste'],
      ]},

      { type: 'heading', text: 'Asset Groups That Give the Algorithm Something to Work With' },
      { type: 'paragraph', text: "An asset group is a set of headlines, descriptions, images, logos and videos built around one theme, plus audience signals and, for retailers, a set of products. The most common mistake is one asset group for everything. Split asset groups by what changes the message: product category, audience need or price point. Give each one the full range of assets, including vertical and square images and at least one video you made yourself, because Google will otherwise generate a basic video from your images." },
      { type: 'list', items: [
        'One theme per asset group, matching a landing page about that theme.',
        'Headlines that cover different angles: benefit, proof, offer, urgency, brand.',
        'Images in landscape, square and portrait formats; real product and people shots beat generic stock.',
        'At least one human-made video per asset group.',
        'Audience signals from your own data: customer lists, site visitors, converters.',
      ]},

      { type: 'heading', text: 'Reading the Channel Performance Report' },
      { type: 'paragraph', text: "The channel performance report shows how impressions, clicks, conversions and spend split across Search, YouTube, Display, Discover, Gmail and Maps. Use it to ask questions, not to micromanage: Performance Max does not let you set budgets per channel. If most spend goes to Display with weak conversion quality, the fix is upstream: better conversion goals, stronger product feed data, placement exclusions, or moving budget to a Search campaign that gives you more control." },
      { type: 'table', headers: ['Pattern', 'Likely cause', 'What to try'], rows: [
        ['Most conversions from Search, most spend from Display', 'Display is buying cheap, low-quality traffic', 'Check placements; tighten conversion goals'],
        ['High share of brand searches', 'Performance Max is taking brand traffic', 'Add brand exclusions and keep a brand Search campaign'],
        ['Video spend with no video assets you made', 'Google is running auto-generated video', 'Upload your own videos'],
        ['Conversions rising but sales flat', 'Optimizing toward a micro-conversion', 'Set purchase or qualified lead as the campaign goal'],
      ]},

      { type: 'heading', text: 'Performance Max and Search: Which Campaign Gets the Search?' },
      { type: 'paragraph', text: "When a search is identical to a keyword in an eligible Search campaign, the Search campaign is prioritized. Otherwise, Search and Performance Max compete on Ad Rank. In practice: keep exact and phrase keywords for your most important queries in Search, where you control ads and landing pages, and let Performance Max find the rest." },

      { type: 'heading', text: 'A Weekly Performance Max Routine' },
      { type: 'numbered-list', items: [
        'Check that conversions are still firing and that the campaign goal is the one that makes money.',
        'Review search term insights and add campaign negatives for wrong-intent themes.',
        'Open the channel performance report and note any big shifts.',
        'Check the placement report for sites and apps worth excluding.',
        'Look at asset performance; replace the weakest images and headlines with new angles.',
        'Compare cost per conversion and conversion value with the previous four weeks before changing targets.',
      ]},

      { type: 'heading', text: 'How Loraloop Works With Performance Max' },
      { type: 'paragraph', text: "Search is where Loraloop's daily automation goes deepest, and Performance Max is where it gives you visibility and drafts. Angie reads Performance Max results, including the breakdown by channel and placement, and proposes website placement exclusions where placements spend without converting. When you ask, it drafts a Performance Max campaign with an asset group, or adds an asset group or audience signals to an existing one. Everything is created paused and waits for your approval, and Performance Max builds need an account that already records conversions. You keep the product feed and the final creative decisions." },

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'Can you add negative keywords to Performance Max?', a: 'Yes. Performance Max supports campaign-level negative keywords, and account-level negatives apply to it as well. Brand exclusions are a separate setting for keeping brand searches out.' },
        { q: 'Should I run Performance Max and Search together?', a: 'For most accounts, yes. Keep Search for your most important keywords and your brand, where you control the ad and landing page, and use Performance Max to find additional conversions across channels.' },
        { q: 'How many asset groups should a Performance Max campaign have?', a: 'One per distinct theme, such as a product category or customer need, each with its own landing page. A handful of well-built asset groups usually beats one catch-all group or dozens of thin ones.' },
        { q: 'Why is Performance Max spending on Display?', a: 'Because Google predicts conversions there at your target. If those conversions are low quality, tighten your conversion goals, exclude poor placements and make sure the product feed and assets are strong.' },
        { q: 'How long does Performance Max need to learn?', a: 'Plan for several weeks before judging, longer for low conversion volumes. Avoid large target or budget changes during that time, and make changes in small steps.' },
      ]},
      { type: 'cta', text: 'See where your Performance Max money goes and get placement exclusions drafted for you: connect Google Ads to Loraloop.' },
    ],
  },

  {
    id: 177,
    slug: 'smart-bidding-target-cpa-vs-target-roas',
    title: 'Target CPA vs Target ROAS vs Maximize Conversions: How to Choose a Google Ads Bidding Strategy',
    seoTitle: 'Target CPA vs Target ROAS vs Maximize Conversions: Google Ads Bidding Guide',
    description: 'Which Google Ads bidding strategy fits your business: Maximize conversions, target CPA, Maximize conversion value or target ROAS. How to set targets and change them without breaking learning.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 177,
    tableOfContents: [
      'The Smart Bidding Strategies in Plain English',
      'Which Strategy Fits Your Business',
      'How to Set a Target You Can Actually Hit',
      'Changing Targets Without Breaking Learning',
      'When Manual CPC Still Makes Sense',
      'Testing a New Bidding Strategy Safely',
      'How Loraloop Adjusts Bids and Targets',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Choosing a Google Ads bidding strategy comes down to two questions: do your conversions have different values, and do you have enough of them for Google to learn from? If every lead is worth about the same, bid for conversions and, once you have volume, add a target cost per conversion (target CPA). If orders vary in value, bid for conversion value and, once you have volume, add a target return on ad spend (target ROAS). Everything else is about setting targets you can hit and changing them slowly." },
      { type: 'callout', text: "Quick answer: Use Maximize conversions for lead generation and other equal-value conversions, adding a target CPA once a campaign has steady volume. Use Maximize conversion value for e-commerce and other variable-value conversions, adding a target ROAS once you have enough conversions with values. Start targets near your last 30 days of actual results, change them in small steps, and wait a conversion cycle or more between changes." },
      { type: 'image',
        src: 'https://images.pexels.com/photos/7947669/pexels-photo-7947669.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Magnifying glass lying on a page of printed bar and line charts',
        caption: 'Photo: A Magnifying Glass on a Page of Various Charts via Pexels',
        captionLink: 'https://www.pexels.com/photo/a-magnifying-glass-on-a-page-of-various-charts-7947669/' },

      { type: 'heading', text: 'The Smart Bidding Strategies in Plain English' },
      { type: 'table', headers: ['Strategy', 'Optimizes for', 'Best when', 'Watch out for'], rows: [
        ['Maximize conversions', 'As many conversions as possible within budget', 'Conversions are roughly equal in value; you are building volume', 'Spends the full budget even if cost per conversion rises'],
        ['Maximize conversions with target CPA', 'Conversions at an average cost per conversion', 'Steady conversion volume and a known affordable CPA', 'A target set too low starves delivery'],
        ['Maximize conversion value', 'As much conversion value as possible within budget', 'Orders or leads have different values that you track', 'Needs accurate values; spends the full budget'],
        ['Maximize conversion value with target ROAS', 'Conversion value at a target return on spend', 'E-commerce with enough valued conversions', 'A target set too high starves delivery'],
        ['Target impression share', 'Showing up in a chosen position', 'Brand defense', 'Not built for profit; cap the CPC'],
        ['Manual CPC', 'Whatever bids you set', 'Very low volume, testing, tight control', 'Cannot use auction-time signals'],
      ]},
      { type: 'paragraph', text: "Enhanced CPC, the old half-step between manual and Smart Bidding, has been phased out for Search and Display campaigns, so the real choice today is between the Smart Bidding strategies above and manual CPC." },

      { type: 'heading', text: 'Which Strategy Fits Your Business' },
      { type: 'table', headers: ['Business', 'Start with', 'Move to', 'Conversion to track'], rows: [
        ['Local service (plumber, dentist, lawyer)', 'Maximize conversions', 'Target CPA', 'Calls and qualified form leads'],
        ['B2B lead generation', 'Maximize conversions', 'Target CPA, or value-based bidding with offline conversions', 'Qualified leads imported from your CRM'],
        ['E-commerce store', 'Maximize conversion value', 'Target ROAS', 'Purchases with order value'],
        ['App', 'Maximize conversions on installs', 'Target cost per install or in-app action', 'Installs, then key in-app events'],
        ['New account, few conversions', 'Maximize conversions (no target)', 'Add a target after volume builds', 'The best available real action'],
      ]},
      { type: 'paragraph', text: "If your leads vary a lot in quality, the biggest upgrade is not a bidding strategy but better data: import qualified leads or closed sales from your CRM as offline conversions, give them values, and switch to value-based bidding." },

      { type: 'heading', text: 'How to Set a Target You Can Actually Hit' },
      { type: 'numbered-list', items: [
        'Work out what you can afford. For e-commerce, use the break-even ROAS calculator; for leads, divide what a customer is worth by how many leads it takes to win one.',
        'Look at what the campaign actually achieved over the last 30 days.',
        'Set the first target close to the actual result, not the ideal one. A target far below reality stops the campaign from bidding in most auctions.',
        'Tighten in small steps toward the affordable number once the campaign is stable.',
      ]},
      { type: 'paragraph', text: "Use the Google Ads budget calculator alongside this: if the cost per conversion you can expect at today's CPC and conversion rate is above your target, no bidding strategy will close the gap. Fix conversion rate or traffic quality first." },

      { type: 'heading', text: 'Changing Targets Without Breaking Learning' },
      { type: 'list', items: [
        'Change one thing at a time: target, budget or structure, not all three.',
        'Move targets in small steps, often 10 to 15 percent, rather than big jumps.',
        'Wait at least one conversion cycle (the time from click to conversion) before judging, and longer for low volumes.',
        'Expect a learning period after a new strategy or a large change. Google says it usually takes up to about 50 conversion events or three conversion cycles to calibrate.',
        'Do not react to a single bad day. Judge on a week or more of settled data.',
      ]},

      { type: 'heading', text: 'When Manual CPC Still Makes Sense' },
      { type: 'paragraph', text: "Manual CPC still has a place: brand-new accounts with no conversion history, very small budgets, niche campaigns with a handful of clicks a day, or tests where you need exact control over what each keyword pays. Even there, plan to move to Smart Bidding once conversions are flowing, because auction-time signals such as device, location, time and query are only available to automated bidding." },

      { type: 'heading', text: 'Testing a New Bidding Strategy Safely' },
      { type: 'paragraph', text: "Rather than switching a whole campaign, run a campaign experiment: the test arm uses the new strategy on a share of traffic while the original keeps running, and both share the budget. After enough conversions to judge, end the experiment or apply the winning strategy to the campaign." },

      { type: 'heading', text: 'How Loraloop Adjusts Bids and Targets' },
      { type: 'paragraph', text: "Loraloop's ads agent, Angie, runs a nightly optimizer for Google Ads with four small, bounded moves: tighten a target CPA, tighten a target ROAS, lower a keyword CPC bid, and lower a daily budget a campaign cannot spend. It never raises a bid or budget on its own. Changing a bidding strategy, setting a new target CPA or ROAS, and adjusting device bids within a bounded range are available on request, and Angie can set up a bidding experiment on 10 to 90 percent of a Search or Display campaign's traffic, then end it or promote the winner. By default every change waits for your approval and can be undone, and daily, monthly and per-campaign spend caps are checked at the moment a change runs." },

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'Is target CPA or target ROAS better?', a: 'Neither is better in general. Target CPA suits conversions of roughly equal value, such as leads. Target ROAS suits conversions with different values, such as e-commerce orders. Choose the one that matches how your business makes money.' },
        { q: 'How many conversions do I need for target CPA?', a: 'Google no longer enforces a hard minimum, but Smart Bidding learns faster with more data. Many practitioners like about 30 conversions a month per campaign before setting a strict target, and use Maximize conversions without a target below that.' },
        { q: 'Why did my campaign stop spending after I set a target CPA?', a: 'The target is probably too low compared with what the campaign achieves, so it bids in very few auctions. Raise the target close to your recent actual CPA, then lower it gradually.' },
        { q: 'How often should I change my target CPA or ROAS?', a: 'Rarely, and in small steps. Wait at least one conversion cycle between changes, and longer if conversions are few, so you can see the effect of each change before making the next.' },
        { q: 'Can AI manage Google Ads bidding?', a: 'Google\'s Smart Bidding already sets the bid for every auction. An AI agent on your side, such as Loraloop, manages the targets, budgets and experiments around it, in small bounded steps and with your approval.' },
      ]},
      { type: 'cta', text: 'Keep targets and budgets on track without daily check-ins: Angie proposes small, reversible steps and you approve them in one place.' },
    ],
  },
];
