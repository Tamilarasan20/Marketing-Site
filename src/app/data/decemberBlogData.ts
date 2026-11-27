import type { BlogPost } from './blogData';

// December planning cluster (ids 187-191), published for the 10 days after Black Friday 2026,
// when searches move from deals to year-end reports, annual plans and next year's budget.
// One post per target buyer: agencies, DTC brands, B2B SaaS, lean teams, and agencies selling GEO.
// Hand-written, answer-first, no invented statistics. Voice follows the Loraloop brand profile:
// direct, practical, and every automated action stays on the user's approval.
const publishDate = 'November 28, 2026';

export const decemberBlogPosts: BlogPost[] = [
  {
    id: 187,
    slug: 'year-end-client-report-template-agencies',
    title: 'Year-End Client Report: A Template Agencies Can Send in December',
    seoTitle: 'Year-End Marketing Report Template for Agency Clients (2026)',
    description: 'A year-end marketing report template for agencies: the eight sections clients read, the numbers to pull from Meta, Google, email and analytics, and how to turn the review into next year\'s retainer.',
    category: 'Business',
    date: publishDate,
    imageIndex: 187,
    tableOfContents: [
      'Why the Year-End Report Matters More Than Any Monthly Report',
      'The Eight Sections Clients Actually Read',
      'The Numbers to Pull',
      'How to Explain a Bad Quarter',
      'Turning the Review Into Next Year\'s Plan',
      'A Two-Week Schedule for December',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "December is when clients decide whether to renew, cut scope or move to another agency. Most of them decide based on one document: the year-end review. A monthly report shows activity. A year-end report has to show that the agency moved the business forward and knows what to do next. Agencies that send a clear one in the first half of December walk into January planning meetings with the client already agreeing on the direction." },
      { type: 'callout', text: "Quick answer: A year-end client report should open with a one-paragraph verdict, then show results against the goals agreed at the start of the year, the three wins with evidence, what did not work and why, channel results using blended numbers, what the agency learned about the client's customers, and a proposed plan with budget for the first quarter. Keep platform screenshots in an appendix." },

      { type: 'heading', text: 'Why the Year-End Report Matters More Than Any Monthly Report' },
      { type: 'list', items: [
        'It is the one report the client\'s leadership reads, not only your day-to-day contact.',
        'It lands while next year\'s budgets are being set, so it shapes how much the client spends with you.',
        'It shows whether the agency understands the business or only manages ad accounts.',
        'A strong review makes the renewal conversation about scope, not about whether to stay.',
      ]},

      { type: 'heading', text: 'The Eight Sections Clients Actually Read' },
      { type: 'numbered-list', items: [
        'The verdict: one paragraph on whether marketing made the business healthier this year.',
        'Goals vs results: the targets agreed in January and where each one landed.',
        'Three wins: what worked, the evidence, and what it was worth.',
        'What did not work: the honest version, with the reason and what changed because of it.',
        'Channel results: paid social, paid search, email, SEO and organic social on one page.',
        'Customer learnings: which audiences, offers and messages converted best.',
        'Next year\'s plan: priorities for the first quarter, with budget and expected outcomes.',
        'Appendix: platform detail, screenshots and definitions.',
      ]},

      { type: 'heading', text: 'The Numbers to Pull' },
      { type: 'table', headers: ['Source', 'Numbers', 'What it answers'], rows: [
        ['Store or CRM', 'Revenue, orders or deals, new vs returning customers, average order value', 'Did the business grow?'],
        ['Meta Ads', 'Spend, purchases or leads, cost per result, ROAS by quarter', 'Did paid social get more efficient or less?'],
        ['Google Ads', 'Spend, conversions, cost per conversion, brand vs non-brand split', 'Is search demand growing?'],
        ['Email (Klaviyo or similar)', 'Revenue from flows and campaigns, list growth, unsubscribe rate', 'Is the owned audience growing and buying?'],
        ['Analytics and Search Console', 'Organic sessions, top landing pages, queries gaining clicks', 'Is the brand easier to find?'],
      ]},
      { type: 'paragraph', text: "Use blended metrics for the headline. Marketing efficiency ratio (total revenue divided by total marketing spend) and blended cost per acquisition (total spend divided by new customers) avoid the double counting that happens when every platform claims the same sale. Show platform-reported numbers only when comparing campaigns inside one platform." },

      { type: 'heading', text: 'How to Explain a Bad Quarter' },
      { type: 'paragraph', text: "Every client has one. Hiding it costs more trust than the result itself. State what happened, separate what was outside your control (platform changes, stock problems, rising auction costs) from what was inside it, and show what you changed. A client who sees you diagnose a bad quarter clearly is more likely to renew than one who only sees good news." },
      { type: 'list', items: [
        'Name the quarter and the metric that dropped.',
        'Give the cause with evidence, not a guess.',
        'Show the fix you made and whether it worked.',
        'Say what you will watch next year so it does not repeat.',
      ]},

      { type: 'heading', text: 'Turning the Review Into Next Year\'s Plan' },
      { type: 'paragraph', text: "End the report with a short plan, not a list of ideas. Three priorities for the first quarter, each with the budget it needs, the metric it should move and the date you will review it. This turns the year-end review into the start of next year's scope, and it gives the client something concrete to approve." },

      { type: 'heading', text: 'A Two-Week Schedule for December' },
      { type: 'table', headers: ['Days', 'Work'], rows: [
        ['Dec 1-3', 'Pull every number for the full year and each quarter, using the same date ranges in every tool'],
        ['Dec 4-6', 'Write the verdict, the wins and what did not work'],
        ['Dec 7-9', 'Draft the first-quarter plan and budget'],
        ['Dec 10-12', 'Internal review, then send to the client'],
        ['Dec 13-18', 'Review meeting with the client before holidays start'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to each client's ad accounts, store, email and analytics, so it can pull the full year from every source with the same date ranges, calculate blended metrics and draft the review for each client from one template. Agencies managing several brands get one draft per client to edit. Nothing is sent to a client until your team approves it." },

      { type: 'faq', items: [
        { q: 'When should an agency send the year-end report?', a: 'In the first half of December, before client teams leave for the holidays and while next year\'s budgets are still being decided.' },
        { q: 'How long should a year-end marketing report be?', a: 'Short enough that leadership reads it: a one-page summary, a few pages of results and plan, and an appendix for platform detail.' },
        { q: 'Should the report include what did not work?', a: 'Yes. Explaining a weak result with its cause and the fix builds more trust than a report that only shows wins.' },
        { q: 'What metrics should lead a year-end report?', a: 'Business results and blended efficiency: revenue or pipeline, new customers, marketing efficiency ratio and blended cost per acquisition. Platform metrics belong in the detail.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts a year-end review for every client from their connected accounts, and your team approves each one before it goes out.' },
    ],
    relatedSlugs: ['bfcm-post-mortem-template-agencies', 'meta-ads-client-reporting-agency-template', 'ai-marketing-tools-for-agencies-scale-delivery', 'how-to-measure-roi-of-ai-marketing-tools'],
    relatedTools: ['break-even-roas-calculator'],
  },
  {
    id: 188,
    slug: 'q1-marketing-plan-dtc-brands-after-holidays',
    title: 'Q1 Marketing Plan for DTC Brands: What to Do After the Holidays',
    seoTitle: 'Q1 2027 Marketing Plan for DTC Brands: January to March',
    description: 'A Q1 marketing plan for DTC and Shopify brands: how to use holiday customers, reset Meta creative in January, plan email by week, and set budgets for January, February and March.',
    category: 'Business',
    date: publishDate,
    imageIndex: 188,
    tableOfContents: [
      'Why Q1 Is a Different Quarter',
      'January: Retain, Reset and Test',
      'February: Find the Next Winners',
      'March: Scale What Worked',
      'Budget by Month',
      'The Q1 Calendar on One Page',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Q4 rewards brands that spend into demand. Q1 rewards brands that keep the customers they just paid for and find new creative while competition is lower. Many DTC brands plan Black Friday for months and plan January in a weekend. A simple quarter plan, written in December, makes the first weeks of the year productive instead of reactive." },
      { type: 'callout', text: "Quick answer: In January, focus on turning holiday buyers into repeat customers and test new creative while auction competition is usually lower. In February, find the next winning angles and products. In March, scale what worked into spring. Write the plan in December so creative, emails and budgets are ready on January 2." },

      { type: 'heading', text: 'Why Q1 Is a Different Quarter' },
      { type: 'list', items: [
        'You have the largest group of new customers of the year, most of them one-time buyers so far.',
        'Ad auctions are often less crowded after the holidays, which makes testing cheaper.',
        'Shoppers respond to new-year themes: resets, routines, goals and organization.',
        'Returns and exchanges from gifts create support load and a chance to win back the buyer.',
      ]},

      { type: 'heading', text: 'January: Retain, Reset and Test' },
      { type: 'numbered-list', items: [
        'Segment Q4 buyers into first-time, returning and gift buyers, and send each a different follow-up.',
        'Turn on or review post-purchase, replenishment and win-back flows before January 2.',
        'Retire holiday creative on December 26 and launch new-year creative the same day.',
        'Run a creative testing batch built around three to four new angles, not small edits of old ads.',
        'Make returns and exchanges easy, and use the exchange flow to suggest the right product.',
      ]},

      { type: 'heading', text: 'February: Find the Next Winners' },
      { type: 'paragraph', text: "By February you know which January tests worked. Double the winners into new formats (UGC, static, short video) and test the next set of angles. February also has Valentine's Day for many categories, which works best as a gift guide to existing customers and warm audiences rather than a broad discount." },
      { type: 'list', items: [
        'Promote January test winners into your main campaigns.',
        'Brief the next batch of creative from what won, not from scratch.',
        'Check which products new customers bought second, and feature them in flows.',
        'Refresh product pages with reviews collected from holiday buyers.',
      ]},

      { type: 'heading', text: 'March: Scale What Worked' },
      { type: 'paragraph', text: "March is the time to scale budgets behind proven creative and offers before spring promotions. Scale in steps rather than large jumps so delivery stays stable, and keep a fixed share of spend for testing so you have fresh winners for Q2." },

      { type: 'heading', text: 'Budget by Month' },
      { type: 'table', headers: ['Month', 'Main goal', 'Where the budget leans'], rows: [
        ['January', 'Keep holiday customers, test new creative', 'Email and retention first; paid testing at a controlled budget'],
        ['February', 'Find the next winners', 'Graduate winners; keep a steady testing share'],
        ['March', 'Scale into spring', 'Increase spend behind proven ads and offers in steps'],
      ]},
      { type: 'paragraph', text: "Use your break-even ROAS for each product to decide how far spend can scale. If your margin changed over the holidays because of discounts or shipping costs, recalculate it before January." },

      { type: 'heading', text: 'The Q1 Calendar on One Page' },
      { type: 'table', headers: ['Week', 'Email', 'Paid', 'Content'], rows: [
        ['Jan 1-2', 'Thank-you and how-to emails to holiday buyers', 'Holiday ads off, new-year creative live', 'New-year theme posts'],
        ['Jan 3-4', 'Replenishment and cross-sell flows', 'First test batch', 'Customer how-to content'],
        ['Feb 1-2', 'Gift guide to existing customers', 'Graduate January winners', 'Reviews and UGC'],
        ['Feb 3-4', 'Win-back for quiet buyers', 'Second test batch', 'Product education'],
        ['Mar 1-4', 'Spring launch sequence', 'Scale winners in steps', 'Launch content and FAQs'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify, Klaviyo and your ad accounts. It can draft the Q1 plan from your holiday results, write the January flows and campaign emails in your brand voice, brief new creative angles and check your Meta and Google accounts every day. Every email, ad and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'When should a DTC brand plan Q1 marketing?', a: 'In early December, so January creative, emails and budgets are ready before the holiday rush ends and the team takes time off.' },
        { q: 'Should DTC brands cut ad spend in January?', a: 'Not automatically. Many brands keep testing in January because auctions are often less crowded. Base the decision on your cost per purchase and margin, not the calendar.' },
        { q: 'What should the first email after the holidays be?', a: 'A useful one: how to get the most from what they bought, setup tips or care instructions. Save offers for later in January and for customers who have gone quiet.' },
        { q: 'How many new ad creatives should a DTC brand test in Q1?', a: 'Enough to test three to four distinct angles every week or two at your budget. The number depends on spend; the rule is new ideas, not small edits.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your Q1 plan, January emails and new creative briefs from your holiday results, with every change approved by you.' },
    ],
    relatedSlugs: ['after-black-friday-retention-plan-shopify', 'meta-ads-after-cyber-monday-december-plan', 'meta-ads-creative-testing-framework-2026', 'marketing-for-ecommerce-brands-under-1m-revenue'],
    relatedTools: ['break-even-roas-calculator', 'creative-testing-calculator'],
  },
  {
    id: 189,
    slug: 'saas-annual-plan-campaign-december',
    title: 'How SaaS Teams Sell Annual Plans in December',
    seoTitle: 'Year-End SaaS Annual Plan Campaign: A December Playbook',
    description: 'A December playbook for B2B SaaS: who to offer annual plans to, how to time the emails, in-app prompts and ads, and how to avoid discount fatigue after Black Friday.',
    category: 'Business',
    date: publishDate,
    imageIndex: 189,
    tableOfContents: [
      'Why December Works for Annual Plans',
      'Who to Offer the Annual Plan To',
      'The Offer: Value First, Discount Second',
      'The Campaign, Week by Week',
      'Avoiding Discount Fatigue After Black Friday',
      'What to Measure',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "December is one of the best months to move monthly SaaS customers to annual plans. Many companies have budget left to spend before the year ends, teams plan next year's tools, and a customer who pays for twelve months has a year to get value instead of a month to decide whether to cancel. The catch is that most customers have just seen a week of Black Friday offers, so a December campaign has to feel different." },
      { type: 'callout', text: "Quick answer: Offer annual plans in December to active monthly customers who reached real value, not to everyone. Lead with what they achieved and what a year looks like, then the saving. Run it as a short sequence of emails, in-app prompts and retargeting from early to mid December, and finish before most teams leave for the holidays." },

      { type: 'heading', text: 'Why December Works for Annual Plans' },
      { type: 'list', items: [
        'Buyers with unused budget often want to commit it before the year ends.',
        'Tool decisions for next year are made now, in planning meetings.',
        'Annual customers usually churn less, because they have more time to build the product into their work.',
        'Cash collected up front funds next year\'s growth.',
      ]},

      { type: 'heading', text: 'Who to Offer the Annual Plan To' },
      { type: 'table', headers: ['Segment', 'Offer it?', 'Why'], rows: [
        ['Active monthly customers who use core features weekly', 'Yes, first', 'They already get value; annual locks it in'],
        ['Teams that added seats or usage this year', 'Yes', 'Growing usage signals a longer commitment'],
        ['Customers who joined in a Black Friday promotion', 'Later', 'Let them reach value before asking for a year'],
        ['Low-usage or at-risk accounts', 'No', 'Help them succeed first; an annual push can trigger a cancel'],
      ]},

      { type: 'heading', text: 'The Offer: Value First, Discount Second' },
      { type: 'paragraph', text: "Customers have just seen many discounts, so a price cut alone blends in. Start with what this customer achieved in the product this year, then show what a year on the plan includes, and only then the saving compared with paying monthly. If you already discount annual plans all year, say so plainly instead of presenting the normal annual price as a holiday deal." },
      { type: 'list', items: [
        'A personal summary: what they did in the product this year.',
        'The plan that fits their usage, not the most expensive one.',
        'The real saving against monthly billing.',
        'Anything that helps them start the year well: onboarding for new team members, a planning session or templates.',
      ]},

      { type: 'heading', text: 'The Campaign, Week by Week' },
      { type: 'table', headers: ['Week', 'Email', 'In-app', 'Paid'], rows: [
        ['Dec 1-5', 'Year in review for each customer, with the annual option', 'Banner for eligible accounts', 'Retarget pricing-page visitors'],
        ['Dec 8-12', 'Plan for next year: what annual includes', 'Prompt at the moment of success (report sent, campaign live)', 'Retarget trial users who reached value'],
        ['Dec 15-19', 'Last reminder before the holidays', 'Prompt for admins only', 'Pause before the holidays'],
      ]},

      { type: 'heading', text: 'Avoiding Discount Fatigue After Black Friday' },
      { type: 'list', items: [
        'Do not send the same subject lines and banners as your Black Friday campaign.',
        'Exclude customers who bought a Black Friday deal from the first wave.',
        'Send fewer emails, each more personal, rather than a daily countdown.',
        'Do not invent urgency. A real end date is fine; a fake one damages trust.',
      ]},

      { type: 'heading', text: 'What to Measure' },
      { type: 'list', items: [
        'Share of eligible monthly customers who moved to annual.',
        'Revenue collected up front from the campaign.',
        'Unsubscribes and cancellations during the campaign, to catch pressure that backfires.',
        'Renewal rate of December annual customers a year later, compared with other cohorts.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts the year-in-review emails, the annual plan sequence and the retargeting ads, plans the timing around your calendar and reports on results each week. Every email and ad goes to your team for approval before it is sent or launched." },

      { type: 'faq', items: [
        { q: 'Should SaaS companies discount annual plans in December?', a: 'Only if the discount is real and fits your pricing all year. Leading with the customer\'s results and next year\'s value converts without training customers to wait for sales.' },
        { q: 'Who should get an annual plan offer?', a: 'Active monthly customers who use core features regularly and teams whose usage grew. Skip low-usage accounts until they reach value.' },
        { q: 'When should a December annual campaign end?', a: 'Before most teams go on holiday, usually around the middle of December, so decision makers see the last message while they are still at work.' },
        { q: 'Do annual plans reduce churn?', a: 'They usually do, because customers have more time to build the product into their work. Measure it on your own cohorts by comparing December annual customers with monthly ones.' },
      ]},
      { type: 'cta', text: 'Loraloop writes your December annual plan campaign across email, in-app and ads, and your team approves every message.' },
    ],
    relatedSlugs: ['saas-black-friday-trials-churn', 'how-to-write-marketing-strategy-with-ai', 'automated-marketing-reporting-small-business', 'how-to-measure-roi-of-ai-marketing-tools'],
    relatedTools: ['email-subject-generator'],
  },
  {
    id: 190,
    slug: 'marketing-budget-2027-small-teams',
    title: '2027 Marketing Budget for Small Teams: How to Split Ads, Email, SEO and Content',
    seoTitle: '2027 Marketing Budget Plan for Small Teams (Template)',
    description: 'How small marketing teams should plan a 2027 budget: start from goals and unit economics, split spend across ads, email, SEO and content by stage, and keep a testing reserve.',
    category: 'Business',
    date: publishDate,
    imageIndex: 190,
    tableOfContents: [
      'Start From the Goal, Not Last Year\'s Budget',
      'Work Out What a Customer Can Cost',
      'Split the Budget by Stage',
      'People, Tools and Media: The Three Lines',
      'Keep a Testing Reserve',
      'A One-Page Budget Template',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small teams build next year's marketing budget by taking this year's number and adding a percentage. That repeats this year's mistakes at a bigger size. A better budget starts from the revenue goal, works out how much each new customer can cost, and then decides how much goes to paid ads, email, SEO and content based on what each channel has actually done for you." },
      { type: 'callout', text: "Quick answer: Set the revenue goal, calculate how many new customers it needs, and work out the most you can pay for each one from your margin and repeat purchases. That gives your total acquisition budget. Split it by stage: paid channels for demand you can buy now, email and retention for customers you already have, SEO and content for demand that compounds. Hold 10 to 20% back for tests." },

      { type: 'heading', text: 'Start From the Goal, Not Last Year\'s Budget' },
      { type: 'numbered-list', items: [
        'Write the revenue goal for the year.',
        'Split it into revenue from existing customers and from new customers.',
        'Divide new-customer revenue by your average first-year value per customer to get the number of new customers needed.',
        'Check whether that number is realistic against this year\'s results by channel.',
      ]},

      { type: 'heading', text: 'Work Out What a Customer Can Cost' },
      { type: 'paragraph', text: "Your maximum cost per customer comes from margin and repeat purchases, not from industry averages. A brand whose customers buy three times a year can pay much more to win them than a brand with one-time buyers. Use your break-even ROAS for paid channels and your first-year customer value for the total." },
      { type: 'table', headers: ['Input', 'Where to find it'], rows: [
        ['Gross margin after shipping and payment fees', 'Your store or finance reports'],
        ['Average first-year revenue per customer', 'Store or billing data for customers acquired a year ago'],
        ['Current blended cost per new customer', 'Total marketing spend divided by new customers'],
        ['Break-even ROAS per product', 'Price and margin, or the break-even ROAS calculator'],
      ]},

      { type: 'heading', text: 'Split the Budget by Stage' },
      { type: 'table', headers: ['Stage', 'Channels', 'What it does', 'How to size it'], rows: [
        ['Capture demand now', 'Meta, Google, TikTok ads', 'Buys customers this month', 'Set by your maximum cost per customer and test results'],
        ['Keep customers', 'Email, SMS, retention offers', 'Turns first orders into repeat revenue', 'Usually a small budget with high return; fund it first'],
        ['Compound demand', 'SEO, GEO, content, social', 'Builds traffic and AI-search visibility over months', 'A steady monthly amount you do not cut in slow months'],
        ['Test', 'New channels, creative, offers', 'Finds next year\'s winners', '10 to 20% of the total'],
      ]},
      { type: 'paragraph', text: "Early-stage brands with little search demand often lean on paid and social first, because SEO takes months to pay back. Brands in categories people already search for get more from SEO and GEO, because each article keeps bringing visitors after it is published." },

      { type: 'heading', text: 'People, Tools and Media: The Three Lines' },
      { type: 'paragraph', text: "Small teams often budget media spend and forget the cost of making the marketing: people, freelancers, agencies and software. List all three. If most of the budget goes to execution costs and little is left for media, look at which work can be automated with approval so more of the budget reaches customers." },
      { type: 'list', items: [
        'People: salaries, freelancers, agency retainers.',
        'Tools: analytics, email, design, scheduling, AI tools.',
        'Media: ad spend, sponsorships, paid placements.',
      ]},

      { type: 'heading', text: 'Keep a Testing Reserve' },
      { type: 'paragraph', text: "Hold 10 to 20% of the budget for tests you cannot plan yet: a new channel, a creative format that starts working, a trend in your category. Review it each quarter and move money from tests that failed to the channels that earned it." },

      { type: 'heading', text: 'A One-Page Budget Template' },
      { type: 'table', headers: ['Line', 'Q1', 'Q2', 'Q3', 'Q4', 'Owner'], rows: [
        ['Paid social', '', '', '', '', ''],
        ['Paid search', '', '', '', '', ''],
        ['Email and retention', '', '', '', '', ''],
        ['SEO, GEO and content', '', '', '', '', ''],
        ['Tools and software', '', '', '', '', ''],
        ['People and freelancers', '', '', '', '', ''],
        ['Testing reserve', '', '', '', '', ''],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your ad accounts, store, email and analytics, so it can pull this year's results by channel, calculate blended cost per customer and draft next year's budget split. During the year it runs content, email, SEO and ads work on your approval and reports spend against the plan every week." },

      { type: 'faq', items: [
        { q: 'How much should a small business spend on marketing?', a: 'Work it out from your goal and unit economics: the number of new customers you need multiplied by what you can afford to pay for each one, plus retention and content costs. Percentage-of-revenue rules ignore your margin and repeat purchases.' },
        { q: 'How should a small team split budget between ads and SEO?', a: 'Paid ads for demand you can capture now, SEO and content for demand that compounds. Brands in categories with search demand should fund SEO steadily; brands creating a new category often lean on paid and social first.' },
        { q: 'Should email marketing get its own budget?', a: 'Yes. It is usually inexpensive compared with ads and turns first-time buyers into repeat customers, so fund it before scaling acquisition.' },
        { q: 'What is a testing budget?', a: 'A reserved share of the budget, often 10 to 20%, for new channels, creative and offers. It finds next year\'s winners without risking the core plan.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your 2027 budget from this year\'s results and runs the plan on your approval.' },
    ],
    relatedSlugs: ['which-marketing-channels-small-business-prioritize', 'how-to-measure-roi-of-ai-marketing-tools', 'one-person-marketing-department-with-ai', 'ai-marketing-employee-vs-hiring-marketer-cost'],
    relatedTools: ['break-even-roas-calculator'],
  },
  {
    id: 191,
    slug: 'how-agencies-sell-geo-services',
    title: 'How Agencies Can Sell GEO: Packages, Pricing Models and Reporting',
    seoTitle: 'How Agencies Sell GEO Services: Packages, Pricing and Reports',
    description: 'How marketing agencies can package and sell generative engine optimization (GEO): what to include, three pricing models, how to report AI visibility, and how to pitch it to existing SEO clients.',
    category: 'Business',
    date: publishDate,
    imageIndex: 191,
    tableOfContents: [
      'Why Clients Are Asking About AI Search',
      'What a GEO Service Includes',
      'Three Ways to Package It',
      'How to Price GEO Work',
      'How to Report AI Visibility',
      'Pitching GEO to Existing SEO Clients',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Clients are starting to ask why ChatGPT, Perplexity, Gemini or Google AI Overviews recommend a competitor and not them. That question is a sales opportunity for agencies that can answer it with a clear service. Generative engine optimization (GEO) is the work of making a brand easy for AI assistants to understand, trust and cite. Agencies that package it now, before every competitor does, can add it to existing SEO retainers and win new clients on it." },
      { type: 'callout', text: "Quick answer: A GEO service audits how AI assistants describe a client today, fixes the content and structure AI systems read (answer-first pages, FAQs, schema, entity clarity), builds mentions on the sources AI tools cite (reviews, Reddit, LinkedIn, directories, industry lists) and reports AI visibility monthly. Sell it as an add-on to SEO retainers, a standalone sprint, or a monthly visibility program." },

      { type: 'heading', text: 'Why Clients Are Asking About AI Search' },
      { type: 'list', items: [
        'Buyers ask AI assistants for recommendations before they visit any website.',
        'AI answers often name a few brands, so being left out means being invisible for that question.',
        'Clients see AI crawlers in their analytics and want to know what to do about them.',
        'Traditional SEO reports do not show whether a brand appears in AI answers.',
      ]},

      { type: 'heading', text: 'What a GEO Service Includes' },
      { type: 'table', headers: ['Workstream', 'What the agency does'], rows: [
        ['AI visibility audit', 'Asks the main AI assistants the client\'s key buyer questions and records which brands they name and which sources they cite'],
        ['On-site fixes', 'Answer-first sections, question-form FAQs, clear definitions, comparison pages, schema markup, consistent brand facts'],
        ['Entity clarity', 'The same company description, category and facts across the website, directories and profiles'],
        ['Off-site mentions', 'Reviews, useful Reddit and community answers, LinkedIn articles, industry lists and digital PR'],
        ['Monitoring', 'Monthly re-check of the same questions, AI crawler activity and referral traffic from AI tools'],
      ]},

      { type: 'heading', text: 'Three Ways to Package It' },
      { type: 'table', headers: ['Package', 'Who it suits', 'Contents'], rows: [
        ['GEO add-on to SEO', 'Existing SEO clients', 'Quarterly AI visibility audit, FAQ and schema work, monthly AI visibility line in the SEO report'],
        ['GEO sprint', 'New clients, one-off budget', 'Audit, priority fixes on key pages, a mention plan, delivered in four to six weeks'],
        ['Monthly visibility program', 'Clients in competitive categories', 'Ongoing content, off-site mentions, monitoring and a monthly report'],
      ]},

      { type: 'heading', text: 'How to Price GEO Work' },
      { type: 'list', items: [
        'Fixed-fee sprint: priced on the number of pages fixed and buyer questions tracked.',
        'Retainer add-on: a set monthly amount on top of SEO, tied to the number of questions monitored and pieces produced.',
        'Program retainer: a monthly fee covering content, outreach and reporting, reviewed each quarter against visibility goals.',
      ]},
      { type: 'paragraph', text: "Avoid guaranteeing that a client will appear in a specific AI answer. AI assistants change their answers often. Sell the work and the measurement, and set goals around the share of tracked questions where the client is named or cited." },

      { type: 'heading', text: 'How to Report AI Visibility' },
      { type: 'table', headers: ['Metric', 'How to measure'], rows: [
        ['Mention rate', 'Share of tracked buyer questions where an AI assistant names the client'],
        ['Citation rate', 'Share of answers that link to the client\'s own pages'],
        ['AI referral traffic', 'Visits from ChatGPT, Perplexity, Gemini and similar sources in analytics'],
        ['AI crawler activity', 'How often AI crawlers fetch the client\'s pages, from server logs or analytics'],
        ['Competitor comparison', 'Which competitors are named for the same questions'],
      ]},

      { type: 'heading', text: 'Pitching GEO to Existing SEO Clients' },
      { type: 'numbered-list', items: [
        'Run a short AI visibility check on five of the client\'s most important buyer questions.',
        'Show which competitors AI assistants name and which sources they cite.',
        'Point to two or three fixes on the client\'s own site and one off-site source to target.',
        'Offer the add-on with a quarterly review, so the client sees progress before committing further.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop helps agencies deliver GEO across many clients. It drafts answer-first content, FAQs and comparison pages in each client's brand voice, plans the content calendar, and reports results with each client's connected analytics. Agencies keep control: every page and post is approved by your team before it is published." },

      { type: 'faq', items: [
        { q: 'What is GEO in marketing?', a: 'Generative engine optimization is the work of making a brand easy for AI assistants such as ChatGPT, Perplexity, Gemini and Google AI Overviews to understand, trust and cite when answering buyer questions.' },
        { q: 'Is GEO different from SEO?', a: 'It builds on SEO. SEO aims for rankings and clicks from search results. GEO aims for the brand to be named and cited inside AI answers, which also depends on mentions on sites the AI tools read.' },
        { q: 'Can an agency guarantee AI search visibility?', a: 'No. AI answers change often. Agencies should sell the work and the measurement, and set goals on the share of tracked questions where the client is named or cited.' },
        { q: 'How do you measure GEO results?', a: 'Track a fixed set of buyer questions each month and record mention and citation rates, plus AI referral traffic and AI crawler activity from analytics.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts GEO content for every client in their own voice, and your team approves each page before it goes live.' },
    ],
    relatedSlugs: ['aeo-vs-seo-vs-geo-2026', 'ai-visibility-audit-how-to', 'how-to-measure-geo-ai-citations-referral-traffic', 'ai-marketing-tools-for-agencies-scale-delivery'],
    relatedTools: ['meta-description-generator'],
  },
];
