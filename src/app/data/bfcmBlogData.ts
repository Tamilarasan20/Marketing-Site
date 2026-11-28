import type { BlogPost } from './blogData';

// Black Friday / Cyber Monday cluster (ids 183-186), written for the week after BFCM 2026.
// Built from the gaps in the existing blog: post-sale retention for Shopify brands, Meta ads after
// Cyber Monday, the BFCM post-mortem for agencies and in-house teams, and promo-trial churn for SaaS.
// Each post is hand-written (no shared template) and links to existing posts and free tools.
const publishDate = 'November 27, 2026';

export const bfcmBlogPosts: BlogPost[] = [
  {
    id: 183,
    slug: 'after-black-friday-retention-plan-shopify',
    title: 'After Black Friday: A 30-Day Plan to Turn Discount Buyers Into Repeat Customers',
    seoTitle: 'After Black Friday: 30-Day Retention Plan for Shopify Brands (2026)',
    description: 'A day-by-day plan for the 30 days after Black Friday: segment BFCM buyers, fix post-purchase flows in Klaviyo, time the second order and stop discount-only customers from churning.',
    category: 'Business',
    date: publishDate,
    imageIndex: 183,
    tableOfContents: [
      'Why the Month After Black Friday Matters More Than the Sale',
      'Day 1-3: Segment Your BFCM Buyers',
      'Day 3-10: Fix the Post-Purchase Experience',
      'Day 10-21: Earn the Second Order',
      'Day 21-30: Win Back the Discount-Only Buyers',
      'What to Measure',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday brings in more first-time buyers in one weekend than most Shopify brands see in a month. Most of them never come back. They bought because of the discount, the brand never gave them a reason to buy again, and by January they are just a row in a customer list that cost a lot of ad spend to fill. The month after Black Friday decides whether BFCM was a profitable acquisition event or an expensive clearance sale." },
      { type: 'callout', text: "Quick answer: In the 30 days after Black Friday, split your BFCM buyers into new, returning and discount-only segments, send a post-purchase series that teaches them how to get value from the product, ask for the second order at the point your product naturally runs out or gets used up, and run a win-back offer only for buyers who have not engaged by day 21. Measure repeat purchase rate of the BFCM cohort, not total December revenue." },

      { type: 'heading', text: 'Why the Month After Black Friday Matters More Than the Sale' },
      { type: 'paragraph', text: "Customer acquisition cost on Meta and Google usually peaks during BFCM, because every brand is bidding for the same shoppers at the same time. That means your BFCM customers were among the most expensive you acquired all year, and many of them paid a discounted price. If they buy once and leave, the margin on that first order rarely covers what it cost to win them." },
      { type: 'paragraph', text: "The second order is where the economics change. A returning customer costs a fraction of a new one to reach, because you can talk to them through email, SMS and your own social channels instead of paid ads. The goal of the next 30 days is simple: move as many BFCM buyers as possible from one order to two." },
      { type: 'list', items: [
        'Paid acquisition is at its most expensive during BFCM, so each new customer carries a high cost.',
        'Discounted first orders leave less margin to pay back that cost.',
        'A second order through owned channels (email, SMS, organic social) costs far less than the first.',
        'Buyers who return within the first 60 days are far more likely to become long-term customers than buyers who wait longer.',
      ]},

      { type: 'heading', text: 'Day 1-3: Segment Your BFCM Buyers' },
      { type: 'paragraph', text: "Do not send every BFCM buyer the same message. Before anything else, build three segments in Shopify or Klaviyo using order date (your sale window), customer order count and discount code usage." },
      { type: 'table', headers: ['Segment', 'How to define it', 'What they need next'], rows: [
        ['New BFCM customers', 'First order placed in the sale window', 'Onboarding: how to use the product, what to expect, why the brand is worth a second order'],
        ['Returning customers', 'Had at least one order before the sale', 'Recognition: thank-you, early access, no extra discount needed'],
        ['Discount-only buyers', 'First order in the sale window and used the biggest discount code or bundle', 'Proof of value at full price before any further offer'],
      ]},
      { type: 'paragraph', text: "Also tag buyers by the product they bought. A customer who bought a starter kit needs a different follow-up than one who bought a gift for someone else. If you asked a gift question at checkout, or the shipping address differs from the billing address, treat those orders as likely gifts and do not push replenishment emails to them." },

      { type: 'heading', text: 'Day 3-10: Fix the Post-Purchase Experience' },
      { type: 'paragraph', text: "Shipping takes longer during BFCM, and support inboxes fill up. The first job is to make sure nobody feels ignored between paying and receiving. Then use the days after delivery to make the product succeed, because a customer who gets a good result is the one who buys again." },
      { type: 'numbered-list', items: [
        'Send a shipping-delay note before customers ask. If carriers are slow, say so plainly and give a realistic date.',
        'Turn on or review your post-purchase flow in Klaviyo (or your email tool). Many brands pause flows during the sale and forget to switch them back on.',
        'Send a "how to get the most from it" email timed to the expected delivery date, not the order date.',
        'Add a short how-to video or guide for your best-selling BFCM product. One clear piece of content can serve every new buyer.',
        'Ask for a review only after the customer has had time to use the product, usually 10 to 14 days after delivery for most consumables and apparel.',
      ]},
      { type: 'callout', text: "Check this first: open your flows and confirm the welcome series, post-purchase, abandoned cart and browse abandonment flows are live. Pausing flows to avoid clashing with campaign sends is common during BFCM, and leaving them paused into December is one of the most expensive mistakes a Shopify brand can make." },

      { type: 'heading', text: 'Day 10-21: Earn the Second Order' },
      { type: 'paragraph', text: "Time the second-order ask to the product, not the calendar. A 30-day supplement should get a reorder reminder around day 25. A skincare product that lasts 6 weeks should get one around week 5. For products that do not run out, such as apparel or home goods, the second order comes from a complementary product: the matching item, the refill, the accessory." },
      { type: 'list', items: [
        'Consumables: send a replenishment reminder a few days before the product runs out, with a one-click reorder link.',
        'Apparel and accessories: recommend items that pair with what they bought, using real photos of the combination.',
        'Gifts: invite the buyer to shop for themselves, and capture the recipient as a new lead where you can do so with consent.',
        'High-ticket items: skip the upsell for now and focus on support, setup and a referral ask.',
      ]},
      { type: 'paragraph', text: "December also gives you a natural reason to talk: last order dates for holiday delivery. A short, honest \"order by\" email to the BFCM cohort is useful information, not a hard sell, and it often brings back new buyers who want to gift the product they just tried." },

      { type: 'heading', text: 'Day 21-30: Win Back the Discount-Only Buyers' },
      { type: 'paragraph', text: "By day 21 you can see who engaged with your emails, used the product and came back, and who went quiet. Only now should you consider another offer, and only for the quiet discount-only segment. Giving every BFCM buyer another discount teaches them to wait for the next sale." },
      { type: 'numbered-list', items: [
        'Pull the list of BFCM buyers with no opens, clicks or second order since their first purchase.',
        'Send one plain message that asks how the product is working and offers help.',
        'For those who still do not engage, send a single targeted offer on a complementary product, with a clear end date.',
        'Suppress anyone who still does not engage from heavy promotional sends in January to protect deliverability.',
      ]},

      { type: 'heading', text: 'What to Measure' },
      { type: 'paragraph', text: "Total December revenue mixes BFCM buyers with everyone else and hides whether the sale created customers. Track the BFCM cohort on its own." },
      { type: 'table', headers: ['Metric', 'Why it matters'], rows: [
        ['Repeat purchase rate of BFCM buyers at 30, 60 and 90 days', 'Shows whether the sale created customers or one-time buyers'],
        ['Second-order revenue from the BFCM cohort', 'Shows how much of the acquisition cost the cohort has paid back'],
        ['Flow revenue vs campaign revenue in December', 'Confirms your automated flows are live and working'],
        ['Unsubscribe and spam complaint rate', 'Warns you when post-sale sending is too aggressive'],
        ['Reviews collected from BFCM buyers', 'Feeds social proof for January ads and product pages'],
      ]},
      { type: 'paragraph', text: "Use the break-even ROAS calculator to check whether your BFCM campaigns were profitable on the first order alone, and how much repeat revenue you need to make them work." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop works like an AI marketing team connected to your store, email and ad accounts. After BFCM it can draft the segment definitions, write the post-purchase and replenishment emails in your brand voice, plan the December content calendar around your last delivery dates, and report on the BFCM cohort each week. Every email and offer goes to you for approval before anything is sent." },

      { type: 'faq', items: [
        { q: 'When should I send the first email after a Black Friday purchase?', a: 'Send the order confirmation immediately, a shipping update before customers ask, and the first value email timed to the expected delivery date. The first email that asks for another purchase should wait until the customer has had time to use the product.' },
        { q: 'Should I offer BFCM buyers another discount in December?', a: 'Not by default. Returning customers and engaged new buyers usually come back without one. Keep any extra offer for discount-only buyers who have not engaged by around day 21, and put a clear end date on it.' },
        { q: 'What is a good repeat purchase rate for BFCM customers?', a: 'It varies widely by category: consumables reorder far more often than furniture. Compare your BFCM cohort with customers acquired at full price in other months. If the BFCM cohort repeats much less often, your post-sale flows or your discount depth need work.' },
        { q: 'Which Klaviyo flows matter most after Black Friday?', a: 'The post-purchase series, replenishment or cross-sell flows, the welcome series for new subscribers who did not buy, and a win-back flow for buyers who go quiet. Check that all of them were switched back on after the sale.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your post-BFCM emails, plans December content and reports on your Black Friday cohort, with every send approved by you first.' },
    ],
    relatedSlugs: ['ai-marketing-automation-ecommerce-2026', 'ai-marketing-ecommerce-guide-2026', 'automated-marketing-reporting-small-business', 'how-to-scale-meta-ads-without-killing-roas'],
    relatedTools: ['break-even-roas-calculator', 'email-list-segmentation', 'review-request-email'],
  },
  {
    id: 184,
    slug: 'meta-ads-after-cyber-monday-december-plan',
    title: 'Meta Ads After Cyber Monday: What to Change in December',
    seoTitle: 'Meta Ads After Cyber Monday: December Plan for DTC Brands (2026)',
    description: 'What DTC brands and media buyers should change in Meta ads after Cyber Monday: budgets, BFCM retargeting audiences, creative refresh, last-shipping-day ads and the January reset.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 184,
    tableOfContents: [
      'What Changes After Cyber Monday',
      'Step 1: Turn Off Sale Creative on Time',
      'Step 2: Use the BFCM Audiences You Just Paid For',
      'Step 3: Rebalance Budget for December',
      'Step 4: Run Last-Shipping-Day and Gift Card Ads',
      'Step 5: Plan the January Reset Now',
      'A Daily Checklist for December',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Cyber Monday ends the most crowded week of the year on Meta. Auction pressure usually eases in the days after, while shoppers are still buying gifts for weeks. Brands that keep running sale creative, ignore the audiences they built during BFCM, or cut spend to zero leave December revenue on the table. Brands that plan the switch get some of the most efficient sales of the quarter." },
      { type: 'callout', text: "Quick answer: After Cyber Monday, pull all sale-specific creative on time, retarget BFCM site visitors and add-to-cart users who did not buy, shift budget toward gift-focused and full-price creative, run clear \"order by\" ads before your last shipping date, then switch to gift cards and January offers. Check frequency and cost per result daily, because December audiences fatigue fast." },

      { type: 'heading', text: 'What Changes After Cyber Monday' },
      { type: 'list', items: [
        'Competition in the auction usually drops once the big sales end, which can lower CPMs.',
        'Shoppers move from deal hunting to gift buying, so the message that converts changes.',
        'Shipping deadlines become the main source of urgency instead of discounts.',
        'Your pixel and Conversions API now hold a large pool of fresh visitors and cart abandoners.',
        'Creative fatigue arrives faster because December audiences have already seen a lot of ads.',
      ]},

      { type: 'heading', text: 'Step 1: Turn Off Sale Creative on Time' },
      { type: 'paragraph', text: "If your ad says \"ends Monday\" and runs on Tuesday, it costs you trust and can break your own promise to customers. Schedule end dates on every sale ad set before the sale starts. If you extend the sale, say so honestly and give a real reason rather than claiming customer demand forced it." },
      { type: 'numbered-list', items: [
        'Search Ads Manager for ads with sale wording (Black Friday, Cyber Monday, a discount amount) and confirm each has an end date.',
        'Check catalog ads and Advantage+ shopping campaigns for sale prices pulled from your product feed.',
        'Update landing pages and banners at the same time, so the ad and the page match.',
      ]},

      { type: 'heading', text: 'Step 2: Use the BFCM Audiences You Just Paid For' },
      { type: 'paragraph', text: "Every BFCM visitor cost money to bring in. Build custom audiences from the sale window and give them a reason to come back. Exclude people who already bought so you are not paying to show them the product they own." },
      { type: 'table', headers: ['Audience', 'Message', 'Exclude'], rows: [
        ['Added to cart in BFCM, did not buy', 'Product they viewed, gift angle, shipping deadline', 'Purchasers in the last 30 days'],
        ['Viewed product pages in BFCM', 'Best-sellers and social proof', 'Purchasers and cart abandoners (separate ad set)'],
        ['BFCM purchasers', 'Complementary products, gift for someone else', 'Anyone who bought in the last 7 days'],
        ['Engaged with Instagram or Facebook in BFCM', 'Brand story and reviews', 'Purchasers'],
      ]},

      { type: 'heading', text: 'Step 3: Rebalance Budget for December' },
      { type: 'paragraph', text: "Do not cut spend to zero on Tuesday. Watch cost per result day by day. If it improves as the auction calms, it can be worth moving budget back up while gift demand is strong. Move budget toward whatever is converting at full price, and keep a fixed share for new creative tests so you have fresh winners for January." },
      { type: 'list', items: [
        'Compare cost per purchase and ROAS daily against your pre-BFCM baseline, not against the sale weekend.',
        'Scale ad sets in steps rather than large jumps, so delivery stays stable.',
        'Keep 10 to 20% of spend for creative testing, even in December.',
        'Lower spend gradually in the days after your last shipping date, unless you sell digital products or gift cards.',
      ]},

      { type: 'heading', text: 'Step 4: Run Last-Shipping-Day and Gift Card Ads' },
      { type: 'paragraph', text: "Real deadlines are the honest urgency of December. Find your carrier's last reliable ship date for each region you sell to (the US, Canada, the UK and the EU often differ) and build a short ad sequence around it. After the deadline passes, switch to gift cards and digital delivery, which can still be bought at the last minute." },
      { type: 'numbered-list', items: [
        'One week before the deadline: "Order by [date] for delivery before the holidays."',
        'Two days before: a reminder with your best-selling gift.',
        'After the deadline: gift card creative, with a clear note that it is delivered by email instantly.',
      ]},

      { type: 'heading', text: 'Step 5: Plan the January Reset Now' },
      { type: 'paragraph', text: "January brings new-year buyers and resolution purchases, plus a chance to test fresh angles while auction pressure is lower. Brief January creative in early December, so it is ready to launch the day holiday creative comes down." },

      { type: 'heading', text: 'A Daily Checklist for December' },
      { type: 'list', items: [
        'Frequency on retargeting ad sets: rising frequency with falling click-through means fatigue.',
        'Cost per purchase against your pre-BFCM baseline.',
        'Ads still running with expired offers or past shipping dates.',
        'Spend pacing against your monthly budget.',
        'Product feed errors and out-of-stock items still being advertised.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your Meta ad account and checks it every day. It flags ads that still carry sale wording, retargeting ad sets with rising frequency and products being advertised while out of stock. It drafts new gift-focused creative and January briefs, and proposes budget changes with the reason for each. Nothing changes in your account until you approve it." },

      { type: 'faq', items: [
        { q: 'Do Meta CPMs drop after Cyber Monday?', a: 'They often ease once the biggest sales end and fewer advertisers compete, but this varies by year, category and country. Watch your own CPM and cost per purchase daily rather than assuming a drop.' },
        { q: 'Should I keep running my Black Friday ads in December?', a: 'Not with sale wording or expired prices. Keep the winning concepts, but change the offer to gifting, shipping deadlines or full-price value, and refresh the creative so the audience does not see the same ad again.' },
        { q: 'How long should a BFCM retargeting window be?', a: 'Use the sale window itself, usually from the start of your early access to Cyber Monday, and keep those audiences live through December. After that, fold them into your normal retargeting windows.' },
        { q: 'When should I stop holiday ads?', a: 'For physical products, reduce holiday spend after your last reliable shipping date in each region. Gift cards and digital products can keep running until the holiday itself.' },
      ]},
      { type: 'cta', text: 'Loraloop watches your Meta account every day in December and proposes each change for your approval.' },
    ],
    relatedSlugs: ['creative-fatigue-meta-ads-detect-and-fix', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'how-to-scale-meta-ads-without-killing-roas', 'after-black-friday-retention-plan-shopify'],
    relatedTools: ['break-even-roas-calculator', 'creative-testing-calculator', 'hook-rate-calculator'],
  },
  {
    id: 185,
    slug: 'bfcm-post-mortem-template-agencies',
    title: 'BFCM Post-Mortem: The Report to Build Before Your Monday Meeting',
    seoTitle: 'BFCM Post-Mortem Template for Agencies and In-House Teams (2026)',
    description: 'A practical Black Friday Cyber Monday post-mortem template: the numbers to pull from Shopify, Meta, Google Ads and email, how to read them honestly, and what to change for next year.',
    category: 'Business',
    date: publishDate,
    imageIndex: 185,
    tableOfContents: [
      'Why a Post-Mortem Beats a Recap',
      'The Numbers to Pull',
      'Read the Numbers Honestly',
      'What Worked, What Did Not, What to Change',
      'Writing It Up for Clients or Leadership',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Every agency and in-house team sends a BFCM recap. Most of them say revenue was up and the campaigns worked. A post-mortem is different: it compares what happened with what you planned, separates real growth from discounting, and ends with decisions for next year. Written in the week after Cyber Monday, while the details are fresh, it is the most useful document your team will produce all quarter." },
      { type: 'callout', text: "Quick answer: Pull revenue, orders, average order value, discount cost, new vs returning customers, ad spend, blended cost per acquisition and email revenue for the BFCM window and a comparable baseline period. Compare against your plan, not just last year. Then list three things to repeat, three to stop and three to test next year, each with an owner." },

      { type: 'heading', text: 'Why a Post-Mortem Beats a Recap' },
      { type: 'list', items: [
        'A recap reports totals. A post-mortem explains why the totals happened.',
        'It separates revenue you created from revenue you would have earned anyway at full price.',
        'It turns this year\'s lessons into next year\'s plan, so the team does not start from zero in October.',
        'For agencies, it shows clients your thinking, which retains accounts better than a pretty dashboard.',
      ]},

      { type: 'heading', text: 'The Numbers to Pull' },
      { type: 'paragraph', text: "Use the same date window in every tool, and pick a baseline: the same number of days just before your early-access period works well. If you sell in several regions, pull each region separately, because sale timing and shipping differ between the US, Canada, the UK and Europe." },
      { type: 'table', headers: ['Source', 'Numbers', 'Why'], rows: [
        ['Shopify (or your store)', 'Revenue, orders, AOV, discount amount, new vs returning customers, refunds', 'Shows what you sold and what the discount cost'],
        ['Meta Ads', 'Spend, purchases, cost per purchase, ROAS, CPM, frequency by campaign', 'Shows paid efficiency and where fatigue hit'],
        ['Google Ads', 'Spend, conversions, cost per conversion, impression share on brand terms', 'Shows search demand and whether competitors bid on your brand'],
        ['Email and SMS', 'Campaign revenue, flow revenue, list growth, unsubscribes', 'Shows owned-channel contribution'],
        ['GA4 or your analytics tool', 'Sessions by channel, conversion rate, top landing pages', 'Shows which pages and channels converted'],
      ]},

      { type: 'heading', text: 'Read the Numbers Honestly' },
      { type: 'paragraph', text: "Platform-reported ROAS adds up to more than your real revenue, because Meta, Google and email all claim credit for the same orders. Use blended numbers for the headline and platform numbers only to compare campaigns within one platform." },
      { type: 'list', items: [
        'Blended CPA = total ad spend divided by new customers from your store data.',
        'Marketing efficiency ratio (MER) = total revenue divided by total ad spend.',
        'Discount cost = full-price value of discounted orders minus what customers paid.',
        'Pull-forward check: did sales in the two weeks before the sale drop? If so, part of the BFCM revenue was purchases customers delayed to get the discount.',
        'New customer share: a sale that mostly sold to existing customers at a discount may have cost you margin without growing the business.',
      ]},
      { type: 'paragraph', text: "Use the break-even ROAS calculator to check each campaign against your real margin after discount, not your normal margin." },

      { type: 'heading', text: 'What Worked, What Did Not, What to Change' },
      { type: 'numbered-list', items: [
        'Repeat: the three tactics with the clearest evidence, for example an early-access list that converted far above the open sale.',
        'Stop: the three tactics that cost more than they returned, for example a discount depth that did not increase orders compared with a smaller one.',
        'Test next year: three ideas with a hypothesis and a success metric.',
        'Fix: operational issues such as stock-outs, slow site speed, paused flows or late creative approvals.',
        'Assign an owner and a date to every item, or the list will be forgotten by February.',
      ]},

      { type: 'heading', text: 'Writing It Up for Clients or Leadership' },
      { type: 'paragraph', text: "Lead with one paragraph that answers the only question leadership cares about: did BFCM make the business healthier? Then show the plan versus actual table, the honest read of the numbers, and the decisions. Keep platform screenshots in an appendix. For agencies, end with the January plan, so the client sees you already working on the next result." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify, Meta, Google Ads, email and analytics, so it can pull the same date window from every source, calculate blended CPA and MER, and draft the post-mortem with a plan-versus-actual table. Agencies managing several brands can produce one report per client from the same template. You review and edit the draft before it goes to anyone." },

      { type: 'faq', items: [
        { q: 'When should a BFCM post-mortem be written?', a: 'In the first week after Cyber Monday, while the team still remembers what happened and why. Update the retention numbers again at 30 and 60 days.' },
        { q: 'What baseline should I compare BFCM against?', a: 'Use the same number of days immediately before your early-access period, plus last year\'s BFCM. Comparing against last year alone can hide changes in pricing, products or ad costs.' },
        { q: 'Why does platform ROAS not match my store revenue?', a: 'Each platform counts conversions with its own attribution rules, so several platforms claim the same order. Use store data and blended metrics such as MER for the headline result.' },
        { q: 'What should an agency include in a BFCM report for a client?', a: 'A one-paragraph verdict, plan versus actual, blended results, what to repeat and stop, and the January plan. Keep platform detail in an appendix.' },
      ]},
      { type: 'cta', text: 'Loraloop pulls your BFCM numbers from every connected tool and drafts the post-mortem for your review.' },
    ],
    relatedSlugs: ['meta-ads-client-reporting-agency-template', 'automated-marketing-reporting-small-business', 'best-marketing-reporting-tools-small-teams-2026', 'meta-ads-after-cyber-monday-december-plan'],
    relatedTools: ['break-even-roas-calculator'],
  },
  {
    id: 186,
    slug: 'saas-black-friday-trials-churn',
    title: 'Black Friday Signups Churn Fast. How SaaS Teams Keep Them',
    seoTitle: 'SaaS Black Friday Deals: How to Keep Promo Signups From Churning',
    description: 'Why Black Friday trials and discounted SaaS signups churn, and a practical onboarding, activation and pricing plan to keep them, with a real example from Postiz.',
    category: 'Business',
    date: publishDate,
    imageIndex: 186,
    tableOfContents: [
      'The Problem With Black Friday Signups',
      'A Real Example',
      'Step 1: Get Every New Signup to Value in the First Session',
      'Step 2: Treat Promo Signups as Their Own Cohort',
      'Step 3: Plan the Moment the Discount Ends',
      'Step 4: Fix Churn Before Buying More Signups',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday deals bring B2B and prosumer SaaS products a spike in trials and discounted annual plans. The spike looks great in the weekly metrics. Then the churn arrives: users who signed up for a price, never set the product up, and cancel the moment the trial or discount ends. For many SaaS teams, the work that matters happens after the deal, not during it." },
      { type: 'callout', text: "Quick answer: Black Friday signups churn because many of them buy a price, not a solution. Keep them by getting every new user to their first real result in the first session, tracking promo signups as a separate cohort, planning what happens when the discount ends, and fixing the reasons existing users churn before you spend more to acquire new ones." },

      { type: 'heading', text: 'The Problem With Black Friday Signups' },
      { type: 'list', items: [
        'Deal hunters sign up for many tools at once and set up only a few.',
        'Trials started during a busy week get forgotten before users reach value.',
        'Discounts attract users outside your ideal customer profile, who are more likely to cancel.',
        'A big acquisition week can hide a churn problem in your total subscriber count.',
      ]},

      { type: 'heading', text: 'A Real Example' },
      { type: 'paragraph', text: "Nevo David, founder of the social media scheduling tool Postiz, shared his Black Friday numbers publicly at the end of November 2025. Postiz got 84 Black Friday trials, expected to add about $1,000 in monthly recurring revenue. But with roughly 18% monthly churn across 436 active subscriptions, close to 80 subscriptions were set to leave that same month. The new trials barely replaced the customers walking out." },
      { type: 'paragraph', text: "His December plan focused on retention instead of more acquisition: a cancellation offer for customers who had paid for at least one month, onboarding that pushed users to schedule their first post instead of only connecting an account, simpler UX, a proper FAQ and tutorials for every product area, and fixing bugs that caused churn. Source: Nevo David on X (x.com/wickedguro), November 2025." },

      { type: 'heading', text: 'Step 1: Get Every New Signup to Value in the First Session' },
      { type: 'paragraph', text: "Define the first real result for your product: the first report sent, the first post scheduled, the first campaign launched. Then design onboarding to reach it, not just to finish setup. Connecting an integration is setup. Seeing the integration do something useful is value." },
      { type: 'numbered-list', items: [
        'Pick one activation event that predicts retention in your product data.',
        'Remove every onboarding step that is not needed to reach it.',
        'Offer templates or sample data, so new users see a result before they invest time.',
        'Send onboarding emails based on what the user has and has not done, not on a fixed schedule.',
        'Measure the share of Black Friday signups who reach activation in the first 7 days.',
      ]},

      { type: 'heading', text: 'Step 2: Treat Promo Signups as Their Own Cohort' },
      { type: 'paragraph', text: "Tag every Black Friday signup by coupon or signup date and report on them separately. Measure churn by cohort and by ideal customer profile, not as one global number. A global churn rate mixes your best long-term customers with deal hunters and tells you little about either group." },
      { type: 'table', headers: ['Cohort metric', 'What it tells you'], rows: [
        ['Activation rate in first 7 days', 'Whether onboarding works for promo users'],
        ['Trial-to-paid conversion', 'Whether the deal attracted buyers or browsers'],
        ['Churn at month 1, 2 and 3', 'When promo users leave, and what to fix first'],
        ['Share of signups matching your ICP', 'Whether the deal reached the right people'],
      ]},

      { type: 'heading', text: 'Step 3: Plan the Moment the Discount Ends' },
      { type: 'paragraph', text: "Discounted monthly plans that jump to full price create a predictable wave of cancellations. Plan for it before it arrives." },
      { type: 'list', items: [
        'Email users before the price changes, with a summary of what they achieved in the product.',
        'Offer an annual plan at a fair price as the alternative to a monthly price increase.',
        'Add a cancellation flow that asks why and offers a downgrade or pause instead of only a discount.',
        'Avoid fake urgency and pressure tactics. They create chargebacks and bad reviews, and the customers you keep that way rarely stay long.',
      ]},

      { type: 'heading', text: 'Step 4: Fix Churn Before Buying More Signups' },
      { type: 'paragraph', text: "If churn is high, more acquisition fills a leaking bucket. Read cancellation reasons, talk to churned users from your ideal customer profile, and fix the top two causes. Lowering churn often grows revenue faster than any campaign, and it makes next year's Black Friday deal worth far more." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop helps SaaS teams run the marketing side of retention. It drafts behaviour-based onboarding emails, writes the FAQ and tutorial content for each product area, plans the pre-renewal messages and reports on your Black Friday cohort each week. Every email and post is approved by you before it goes out." },

      { type: 'faq', items: [
        { q: 'Should SaaS companies run Black Friday deals?', a: 'They can, if the deal brings in users from the ideal customer profile and onboarding is ready to activate them. A deal that mostly attracts deal hunters can add churn and support load without adding lasting revenue.' },
        { q: 'Is an annual or monthly Black Friday deal better for retention?', a: 'An annual deal keeps customers for at least a year and gives you time to deliver value, but the renewal needs planning. A monthly discount churns sooner when the price goes up.' },
        { q: 'How do I measure churn from a Black Friday campaign?', a: 'Tag those signups as a cohort and track activation, trial-to-paid conversion and churn at months 1, 2 and 3. Compare with users acquired at full price.' },
        { q: 'What is the fastest way to reduce churn from promo signups?', a: 'Get new users to their first real result in the first session, and follow up based on what they have done in the product. Users who never reach value are the ones who cancel.' },
      ]},
      { type: 'cta', text: 'Loraloop writes your onboarding, renewal and retention content, and reports on your Black Friday cohort, with every send approved by you.' },
    ],
    relatedSlugs: ['automated-marketing-reporting-small-business', 'bfcm-post-mortem-template-agencies', 'after-black-friday-retention-plan-shopify'],
    relatedTools: ['welcome-email-generator', 'cancellation-email-generator'],
  },
];
