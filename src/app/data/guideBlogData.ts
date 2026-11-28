import type { BlogPost } from './blogData';

// Long-form guides (rewritten November 28, 2026) for the six highest-demand topics from the Treg research:
// ids 207, 208, 209, 210, 214, 215. Research per post: Google results, People Also Ask and related searches
// (Treg -> cloro Google SERP, US, Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP, cited with source and
// date where returned) and platform documentation (Meta, Google, Instagram). Benchmarks found online conflict,
// so these guides teach the math with your own numbers instead of repeating them. Worked examples are labelled.
const publishDate = 'November 28, 2026';

export const guideBlogPosts: BlogPost[] = [
  // "how much do facebook ads cost" US 3,600 / UK 720 / CA 320
  {
    id: 207,
    slug: 'how-much-do-facebook-ads-cost',
    title: 'How Much Do Facebook Ads Cost? The Complete Budget Guide for Small Businesses',
    seoTitle: 'How Much Do Facebook Ads Cost in 2027? Budget Guide and Cost Math',
    description: 'How much Facebook ads cost, explained with the math: how Meta\'s auction sets your price, the metrics that matter, how to work out your own cost per sale, whether $10 a day is enough, and how to lower your costs.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 207,
    tableOfContents: [
      'The Short Answer',
      'Why Every Cost Benchmark You Find Is Different',
      'How Meta\'s Auction Decides What You Pay',
      'The Five Numbers That Make Up Your Cost',
      'How to Work Out Your Own Cost per Sale Before You Spend',
      'How to Set Your Budget',
      'Is $10 a Day Enough for Facebook Ads?',
      'What Makes Facebook Ads Cost More',
      'How to Lower Your Cost per Result',
      'Costs for Different Businesses',
      'Paying Someone to Run Your Ads',
      'When Facebook Ads Are Not Worth It Yet',
      'A First-30-Days Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Search \"how much do Facebook ads cost\" and you will find a different number on every page. One guide says clicks cost under a dollar, another says several dollars; one says a lead costs $10, another says $50. They are not lying. They are averaging different industries, countries, objectives and years. The honest answer is that Facebook ads cost what you choose to spend, and what you get for that spend depends on your offer, your creative and your targeting." },
      { type: 'paragraph', text: "This guide does not hand you another benchmark. It shows you how Meta prices ads, which numbers decide your cost per customer, and how to calculate a budget from your own margins so you know before you spend whether ads can work for your business." },
      { type: 'callout', text: "Quick answer: Facebook (and Instagram) ads run on an auction, so there is no fixed price. You set a daily or lifetime budget and Meta's auction decides what each impression, click and sale costs you. Work out the most you can pay per customer from your margin, then budget enough for each ad set to get about 50 results a week, which is what Meta says an ad set needs to leave the learning phase." },

      { type: 'heading', text: 'Why Every Cost Benchmark You Find Is Different' },
      { type: 'paragraph', text: "Published averages for cost per click, cost per thousand impressions and cost per lead disagree because they mix very different situations:" },
      { type: 'list', items: [
        'Industry: insurance, legal and finance compete for the same expensive audiences; a local cafe does not.',
        'Objective: a campaign optimized for purchases reaches people likely to buy, and that costs more per impression than one optimized for clicks.',
        'Country: the same audience size costs different amounts in the US, UK and Canada.',
        'Season: costs commonly climb from late October through December as holiday advertisers compete.',
        'Creative quality: the auction rewards ads people engage with, so two advertisers in the same industry can pay very different prices.',
      ]},
      { type: 'paragraph', text: "Use benchmarks only as a rough sense of scale. Your own numbers after one or two weeks of testing are the only ones that matter." },

      { type: 'heading', text: 'How Meta\'s Auction Decides What You Pay' },
      { type: 'paragraph', text: "Every time Meta can show an ad to someone, it runs an auction. According to Meta, the ad that wins is the one with the highest total value, which combines three things:" },
      { type: 'table', headers: ['Factor', 'What it means', 'How you influence it'], rows: [
        ['Bid', 'What you are willing to pay, set by you or by automatic bidding', 'Bid strategy and budget'],
        ['Estimated action rate', 'How likely this person is to take the action you optimize for', 'Offer, creative, landing page, tracking'],
        ['Ad quality', 'Signals such as people hiding or reporting the ad', 'Relevant creative; no clickbait'],
      ]},
      { type: 'paragraph', text: "The practical result: a more relevant ad can beat a bigger bid. Better creative and a better offer are the cheapest ways to lower your costs." },

      { type: 'heading', text: 'The Five Numbers That Make Up Your Cost' },
      { type: 'table', headers: ['Metric', 'Formula', 'Where to see it'], rows: [
        ['CPM', 'Spend / impressions x 1,000', 'Ads Manager columns'],
        ['CTR (link)', 'Link clicks / impressions', 'Ads Manager columns'],
        ['CPC (link)', 'Spend / link clicks', 'Ads Manager columns'],
        ['Conversion rate', 'Purchases or leads / link clicks', 'Ads Manager or your store analytics'],
        ['Cost per result (CPA)', 'Spend / purchases or leads', 'Ads Manager "Cost per result"'],
      ]},
      { type: 'paragraph', text: "These connect in one chain: cost per sale = CPM / (1,000 x CTR x conversion rate). That formula explains every cost problem. If your cost per sale is too high, one of three things is wrong: the audience is expensive to reach (CPM), the ad does not earn clicks (CTR), or the page does not convert (conversion rate)." },

      { type: 'heading', text: 'How to Work Out Your Own Cost per Sale Before You Spend' },
      { type: 'numbered-list', items: [
        'Find your profit per first order: average order value multiplied by your gross margin, minus shipping and payment fees you pay.',
        'Decide how much of that you will spend to win a customer. For repeat-purchase businesses you may accept spending all of the first-order profit, because later orders bring the profit.',
        'Estimate CPM, CTR and conversion rate. If you have run ads before, use your own numbers. If not, run a small test for a week to measure them.',
        'Calculate expected cost per sale with the formula above and compare it with what you can afford.',
      ]},
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: a store with a $60 average order and a 50% margin makes $30 profit per first order. If its ads have a $15 CPM, a 1.2% link CTR and a 2.5% conversion rate, cost per sale = 15 / (1,000 x 0.012 x 0.025) = $50. That is above $30, so the store needs a better conversion rate, a higher order value (bundles) or repeat purchases to make ads pay. Raising conversion rate to 4% alone brings cost per sale to about $31." },

      { type: 'heading', text: 'How to Set Your Budget' },
      { type: 'paragraph', text: "Meta says an ad set generally needs around 50 optimization events in a week to exit the learning phase, the period when delivery is still unstable. That gives a simple rule: weekly budget per ad set is roughly 50 times your target cost per result." },
      { type: 'table', headers: ['Target cost per result', 'Weekly budget per ad set', 'Daily budget per ad set'], rows: [
        ['$5 (messages or leads)', '$250', 'About $36'],
        ['$15', '$750', 'About $107'],
        ['$30', '$1,500', 'About $214'],
      ]},
      { type: 'paragraph', text: "If that is more than you can spend, do not spread a small budget across many ad sets. Instead:" },
      { type: 'list', items: [
        'Run one campaign with one ad set and several ads.',
        'Optimize for an event that happens more often, such as add to cart or a lead form, until volume grows.',
        'Use a broader audience so Meta has room to find buyers.',
      ]},
      { type: 'paragraph', text: "Also note how Meta spends a daily budget: Meta's documentation says it may spend up to 75% more than your daily budget on some days, while keeping weekly spend within seven times the daily budget. Do not panic at one expensive day; judge by the week." },

      { type: 'heading', text: 'Is $10 a Day Enough for Facebook Ads?' },
      { type: 'paragraph', text: "$10 a day is $70 a week. Whether that works depends on your cost per result:" },
      { type: 'list', items: [
        'For messages or cheap leads (a few dollars each), $70 a week can bring enough results to learn and to fill a local calendar.',
        'For online sales costing $25 or more, $70 a week buys two or three sales. That is too few for Meta to optimize well, and too few for you to judge.',
        'For awareness in a small local area, $10 a day can reach a meaningful share of nearby people.',
      ]},
      { type: 'paragraph', text: "A small budget is fine for testing creative and messages. It is not enough to judge a purchase campaign quickly. Put it into one ad set, not several." },

      { type: 'heading', text: 'What Makes Facebook Ads Cost More' },
      { type: 'table', headers: ['Cause', 'Sign in Ads Manager', 'Fix'], rows: [
        ['Holiday competition', 'CPM rises in Q4 across all ads', 'Plan budget around it; push retargeting and existing customers'],
        ['Creative fatigue', 'Frequency climbs, CTR falls week over week', 'Add new ads every week; retire tired ones'],
        ['Narrow targeting', 'High CPM, delivery struggles', 'Broaden audiences; let creative do the targeting'],
        ['Weak landing page', 'Good CTR but low conversion rate', 'Match the page to the ad; speed up mobile load'],
        ['Broken tracking', 'Purchases in your store but not in Ads Manager', 'Fix the Pixel and Conversions API'],
        ['Wrong objective', 'Cheap clicks, few sales', 'Optimize for purchases or leads, not traffic'],
      ]},

      { type: 'heading', text: 'How to Lower Your Cost per Result' },
      { type: 'numbered-list', items: [
        'Fix tracking first. Install the Meta Pixel and add the Conversions API so Meta sees every purchase or lead.',
        'Test more creative. New angles and formats are the strongest lever on CTR and on the auction\'s estimated action rate.',
        'Make vertical versions for Reels and Stories, where placements are often cheaper per impression.',
        'Raise conversion rate: one clear offer, reviews near the button, fast mobile pages.',
        'Raise order value with bundles and thresholds so each sale can afford a higher cost.',
        'Consolidate ad sets so each gets enough results to learn.',
        'Exclude placements and audiences that spend without converting.',
      ]},
      { type: 'paragraph', text: "Creative volume matters more than most advertisers expect. Nevo David, founder of Postiz, points to user-generated content as a cheaper source of attention than paid reach: he describes one UGC video costing approximately $20-$30 and notes that one video can receive a million views, \"while purchasing 1 million views through ads is extremely expensive\" (source: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article). Strong UGC also makes strong ads." },

      { type: 'heading', text: 'Costs for Different Businesses' },
      { type: 'table', headers: ['Business', 'What to optimize for', 'Budget logic'], rows: [
        ['Online store (DTC)', 'Purchases', 'Target cost per sale from first-order profit; consider repeat purchases'],
        ['SaaS', 'Trials or demo requests', 'Target cost per trial = (price x months kept x trial-to-paid rate) with a margin of safety'],
        ['Local service', 'Leads, calls or messages', 'Target cost per lead from close rate and job value'],
        ['Agency client', 'The client\'s main conversion', 'Agree target CPA and monthly spend before launch'],
      ]},
      { type: 'paragraph', text: "Subscription businesses with low monthly prices need care. Nevo warns that \"if customer acquisition costs $50 and the customer pays $9 per month\", the customer has to stay a long time before the ad pays for itself (source: Nevo David, Distribution Playbook, X article). Annual plans and higher-value tiers make paid ads easier to justify." },

      { type: 'heading', text: 'Paying Someone to Run Your Ads' },
      { type: 'paragraph', text: "Ad spend and management are separate costs. Freelancers often charge hourly or a monthly fee; agencies usually charge a monthly retainer or a percentage of spend, sometimes with a minimum. Whatever the model, agree three things in writing: the target cost per result, who owns the ad account (it should be you), and how often you get a report with decisions, not just numbers." },

      { type: 'heading', text: 'When Facebook Ads Are Not Worth It Yet' },
      { type: 'list', items: [
        'You cannot track purchases or leads yet.',
        'Your website converts poorly even for visitors who already know you.',
        'Your profit per sale is too small to pay for any realistic cost per sale.',
        'You have no creative beyond a logo and a product photo.',
      ]},
      { type: 'paragraph', text: "Fix those first. Reviews, a better landing page and email capture often pay off faster than ads, and they make ads cheaper later." },

      { type: 'heading', text: 'A First-30-Days Plan' },
      { type: 'table', headers: ['Week', 'Do this'], rows: [
        ['Week 1', 'Set up the Pixel and Conversions API, test events, calculate your target cost per result'],
        ['Week 2', 'Launch one campaign, one ad set, four to six ads with different angles; do not edit for several days'],
        ['Week 3', 'Read CPM, CTR, conversion rate and cost per result; pause clear losers; add two new ads'],
        ['Week 4', 'Keep winners, fix the weakest link in the chain (audience, ad or page), decide whether to scale'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your Meta Ads account, tracks CPM, CTR, conversion rate and cost per result against the targets you set, spots fatigued ads early and drafts new variations from your brand knowledge. It proposes fixes and budget moves; every change waits for your approval before it goes live. Start with the free Meta ads audit to see what your current account is wasting." },

      { type: 'faq', items: [
        { q: 'How much do Facebook ads cost per month?', a: 'As much as you choose to spend. A practical starting point is a weekly budget of about 50 times your target cost per result for each ad set, which is what Meta says an ad set needs to learn.' },
        { q: 'Is $10 a day good for Facebook ads?', a: 'It is enough to test messages or get cheap leads or messages for a local business. For online sales costing $25 or more, it buys too few results to optimize or judge quickly.' },
        { q: 'How much does 1,000 views cost on Facebook ads?', a: 'That is your CPM, and it varies by audience, country, season and creative. Run a small test and read CPM in Ads Manager; published averages differ widely.' },
        { q: 'What is the 20% rule on Facebook ads?', a: 'Meta used to limit delivery of images with more than 20% text. It dropped that rule in 2020, but ads with less text on the image still tend to perform better.' },
        { q: 'Is it worth paying for ads on Facebook?', a: 'It is when your profit per sale can cover your cost per sale and you can track results. If not, fix conversion, order value or tracking first.' },
        { q: 'Why did Facebook spend more than my daily budget?', a: 'Meta may spend up to 75% more than your daily budget on some days, while keeping weekly spend within seven times the daily budget.' },
        { q: 'Are Instagram ads cheaper than Facebook ads?', a: 'They run in the same auction. Compare cost per result by placement in one campaign rather than assuming either is cheaper.' },
        { q: 'Do Facebook ads cost more in December?', a: 'Competition from holiday advertisers commonly raises costs through the end of the year; many advertisers see costs ease in January.' },
      ]},
      { type: 'cta', text: 'Run the free Meta ads audit to see where your budget is going, with fixes you approve one by one.' },
    ],
    relatedSlugs: ['meta-ads-cpm-rising-how-to-lower-cost-per-result', 'instagram-ads-cost', 'facebook-ads-for-small-business', 'creative-fatigue-meta-ads-detect-and-fix'],
  },

  // "instagram ads cost" US 1,600 / UK 480 / CA 320
  {
    id: 215,
    slug: 'instagram-ads-cost',
    title: 'How Much Do Instagram Ads Cost? Pricing, Budgets and How to Pay Less',
    seoTitle: 'Instagram Ads Cost in 2027: Pricing, Budget Math and How to Pay Less',
    description: 'How much Instagram ads cost and why: the auction, Feed vs Stories vs Reels, boosting vs Ads Manager, the Apple fee on in-app boosts, whether $5 a day is enough, and how to budget from your own numbers.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 215,
    tableOfContents: [
      'The Short Answer',
      'How Instagram Ad Pricing Works',
      'Feed, Stories, Reels and Explore',
      'Boosting a Post vs Ads Manager',
      'The Apple Fee on In-App Boosts',
      'Work Out What Instagram Ads Will Cost You',
      'Is $5 a Day Enough for Instagram Ads?',
      'Instagram Ads vs Organic Reels and UGC',
      'How to Lower Your Instagram Ad Costs',
      'What Agencies and Freelancers Charge',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Instagram ads are bought through Meta, in the same auction as Facebook ads. There is no rate card. You choose a budget, and the auction decides what each impression, click and sale costs. That is why every \"Instagram ads cost\" article quotes different numbers: they average different industries, objectives, placements and years." },
      { type: 'paragraph', text: "This guide explains what actually drives your price on Instagram, the choices that change it most (placement, boosting vs Ads Manager, creative) and how to estimate your own cost per sale before you spend." },
      { type: 'callout', text: "Quick answer: Instagram ads cost what you choose to spend; Meta's auction sets your cost per result from your bid, how likely people are to act and your ad's quality. Run campaigns in Ads Manager rather than boosting from the app when you want sales or leads, use vertical creative for Reels and Stories, avoid paying for boosts through the iPhone app, and budget about 50 times your target cost per result per ad set each week." },

      { type: 'heading', text: 'How Instagram Ad Pricing Works' },
      { type: 'paragraph', text: "Meta's auction picks the ad with the highest total value: your bid, the estimated chance this person takes your chosen action, and ad quality. On Instagram, native-looking creative matters even more, because ads that look like ads get skipped, which lowers the estimated action rate and raises your price." },
      { type: 'table', headers: ['Cost metric', 'What it tells you'], rows: [
        ['CPM', 'Price of reaching 1,000 people in your audience and placements'],
        ['CPC (link)', 'Price of each click to your site'],
        ['Cost per result', 'Price of each sale, lead, message or booking'],
        ['Frequency', 'How often each person sees the ad; rising frequency often means rising cost'],
      ]},

      { type: 'heading', text: 'Feed, Stories, Reels and Explore' },
      { type: 'table', headers: ['Placement', 'Format', 'Good for'], rows: [
        ['Feed', 'Square or 4:5 image, carousel, video', 'Product detail, carousels, offers'],
        ['Stories', 'Full-screen vertical, 9:16', 'Quick, direct messages; swipe to shop'],
        ['Reels', 'Short vertical video, 9:16', 'Reaching new people with native-looking video'],
        ['Explore', 'Feed-style', 'People browsing new content'],
      ]},
      { type: 'paragraph', text: "Vertical placements are often cheaper per impression than the Feed, but cheap impressions only help if they convert. Let Meta choose placements automatically (Advantage+ placements), give every ad a vertical 9:16 version, and compare cost per result by placement in your reports after a week or two." },

      { type: 'heading', text: 'Boosting a Post vs Ads Manager' },
      { type: 'table', headers: ['', 'Boost in the Instagram app', 'Meta Ads Manager'], rows: [
        ['Setup time', 'A minute', '15-30 minutes'],
        ['Goals', 'Profile visits, website visits, messages', 'All objectives, including sales and leads'],
        ['Audiences and placements', 'Basic', 'Full control, including Facebook placements'],
        ['Testing', 'One post at a time', 'Several ads, A/B tests, rules'],
        ['Reporting', 'Basic', 'Full, with conversion data'],
        ['Use it for', 'Extra reach for a post that already does well', 'Anything measured in sales or leads'],
      ]},

      { type: 'heading', text: 'The Apple Fee on In-App Boosts' },
      { type: 'paragraph', text: "Instagram's help center notes that boosting from the Instagram app on an iPhone or iPad can include Apple's service charge, which it lists at 30%. That means part of what you pay never reaches the ad auction. To avoid it, pay for promotions on the web or in Meta Ads Manager instead of through the iOS app." },

      { type: 'heading', text: 'Work Out What Instagram Ads Will Cost You' },
      { type: 'paragraph', text: "Your cost per sale comes from a simple chain: cost per sale = CPM / (1,000 x CTR x conversion rate)." },
      { type: 'numbered-list', items: [
        'Find what a first sale is worth to you: average order value x margin, minus fees.',
        'Run a one- to two-week test to measure your CPM, link CTR and site conversion rate.',
        'Plug them into the formula and compare with what you can afford per sale.',
        'If it is too high, fix the weakest link: audience (CPM), creative (CTR) or page and offer (conversion rate).',
      ]},
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: a $10 CPM, a 0.9% link CTR and a 3% conversion rate give a cost per sale of 10 / (1,000 x 0.009 x 0.03) = about $37. If each first sale earns $25, the creative needs to lift CTR (to about 1.4%) or the page needs to lift conversion before ads pay." },

      { type: 'heading', text: 'Is $5 a Day Enough for Instagram Ads?' },
      { type: 'paragraph', text: "$5 a day is $35 a week. It is enough to test which posts and hooks earn clicks, to promote a local event, or to get a few messages. It is not enough to optimize a sales campaign quickly: Meta says an ad set generally needs about 50 optimization events a week to leave the learning phase. With a small budget, run one ad set, optimize for a frequent action (such as messages or landing page views) and judge creative, not profit, in the first weeks." },

      { type: 'heading', text: 'Instagram Ads vs Organic Reels and UGC' },
      { type: 'paragraph', text: "Paid reach is not the only way to get seen on Instagram. Nevo David, founder of Postiz, runs user-generated content (UGC) pages on Instagram and Facebook as a lower-cost source of attention. He describes one UGC video costing approximately $20-$30 and one creator producing one to two videos a day, and uses a simple structure for each video: hook, outcome, how-to, call to action (sources: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\" and \"Selling SaaS Through Outcomes\", X articles). He also notes that UGC \"can perform better than sponsorships from huge influencers\" (Nevo David on X, 27 Aug 2026)." },
      { type: 'paragraph', text: "The practical lesson: use organic posts and UGC to find the content people respond to, then put ad budget behind proven winners. Your best ads usually start as your best posts." },

      { type: 'heading', text: 'How to Lower Your Instagram Ad Costs' },
      { type: 'list', items: [
        'Make native creative: vertical, real people, the product in use, a strong first second.',
        'Test several hooks per product; retire ads as frequency rises and results fall.',
        'Use Advantage+ placements so Meta can find cheaper inventory, then check cost per result by placement.',
        'Track purchases and leads with the Meta Pixel and Conversions API.',
        'Send traffic to a page that repeats the ad\'s promise and loads fast on mobile.',
        'Plan for higher costs from late October to December; lean on retargeting then.',
      ]},

      { type: 'heading', text: 'What Agencies and Freelancers Charge' },
      { type: 'paragraph', text: "If you pay someone to run Instagram ads, the fee is separate from ad spend. Freelancers often charge hourly or a fixed monthly fee; agencies tend to charge a monthly retainer or a percentage of spend, sometimes with a minimum. If you are the freelancer or agency, price by the outcome and workload (number of campaigns, creative production, reporting) rather than ad spend alone, and keep ad accounts owned by the client." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop monitors your Meta ads across Instagram and Facebook daily, compares placements by cost per result, flags fatigued ads, drafts new vertical variations from your brand knowledge and your best organic posts, and proposes budget moves. Every new ad and change waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'How much do Instagram ads cost per day?', a: 'You set the daily budget. Meta shows the minimum when you enter a budget in Ads Manager; it depends on your currency and bid type.' },
        { q: 'Is $5 a day enough for Instagram ads?', a: 'It is enough to test hooks, promote a local event or get a few messages. It is too little to optimize a sales campaign quickly.' },
        { q: 'Is it worth paying for Instagram ads?', a: 'It is when your profit per sale covers your cost per sale and you can track results. Test with a small budget first and measure cost per result, not likes.' },
        { q: 'How much should I charge for running Instagram ads?', a: 'Freelancers and agencies usually charge a monthly fee or a percentage of ad spend, separate from the spend itself. Price by workload and outcome, and agree target cost per result up front.' },
        { q: 'What is the cheapest social media platform to advertise on?', a: 'The cheapest platform is the one with the lowest cost per customer for your business, not the lowest CPM. Test two platforms with the same offer and compare cost per result.' },
        { q: 'Why do Instagram boosts cost more on iPhone?', a: 'Instagram\'s help center notes Apple\'s service charge on boosts paid through the iOS app. Pay on the web or in Ads Manager to avoid it.' },
        { q: 'Are Reels ads cheaper than Feed ads?', a: 'Vertical placements are often cheaper per impression, but compare cost per result, not CPM. Give every ad a 9:16 version and let Meta test placements.' },
      ]},
      { type: 'cta', text: 'Loraloop watches your Instagram and Facebook ads every day and proposes fixes, and nothing changes until you approve it.' },
    ],
    relatedSlugs: ['how-much-do-facebook-ads-cost', 'ugc-vs-static-vs-video-ads-meta', 'creator-ugc-partnerships-dtc-brands', 'meta-ads-cpm-rising-how-to-lower-cost-per-result'],
  },

  // "google ads for small business" US 1,600 / UK 70 / CA 110
  {
    id: 210,
    slug: 'google-ads-for-small-business',
    title: 'Google Ads for Small Business: The Complete Beginner\'s Guide',
    seoTitle: 'Google Ads for Small Business: Complete Beginner\'s Guide (2027)',
    description: 'A complete Google Ads guide for small businesses: whether it is worth it, Search vs Local Services Ads vs Performance Max, how much to budget (is $20 a day or $500 a month enough?), setup step by step, and a weekly routine.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 210,
    tableOfContents: [
      'The Short Answer',
      'Is Google Ads Worth It for a Small Business?',
      'Which Campaign Type to Use',
      'How Much to Budget',
      'Is $20 a Day or $500 a Month Enough?',
      'Step 1: Set Up Conversion Tracking',
      'Step 2: Build Your First Search Campaign',
      'Step 3: Keywords and Match Types',
      'Step 4: Negative Keywords',
      'Step 5: Ads, Assets and Landing Pages',
      'Settings That Waste Small Budgets',
      'Competitor and Comparison Keywords',
      'A First-30-Days Plan and Weekly Routine',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Google Ads puts your business in front of people who are searching for what you sell, at the moment they are looking. That intent is what makes it work for many small businesses, and also why it can waste money fast: a few broad keywords and default settings can spend a month's budget on searches that never become customers." },
      { type: 'paragraph', text: "This guide covers the decisions that matter most for a small budget: which campaign type to start with, how to calculate a budget, the setup steps in order, the default settings to change, and the weekly routine that keeps costs under control." },
      { type: 'callout', text: "Quick answer: For most small businesses, start with conversion tracking and one Search campaign targeting your service area, with a short list of phrase and exact match keywords, negative keywords from day one, Display Network and Search Partners turned off, and ads that send each service to its own landing page. Budget from what a customer is worth and review search terms every week." },

      { type: 'heading', text: 'Is Google Ads Worth It for a Small Business?' },
      { type: 'paragraph', text: "It is worth it when three things are true:" },
      { type: 'list', items: [
        'People search for what you sell: there are searches like "[service] near me" or "[product] price" in your area.',
        'A customer is worth enough to pay for several clicks before one converts.',
        'You can track calls, forms, bookings or sales from the ads.',
      ]},
      { type: 'paragraph', text: "When it works, it can become a top channel. Nevo David, founder of Postiz, reports that Google Ads was the first paid channel that worked for Postiz, and that on one Sunday \"a total spend of $94 generated 64.5 trials at $1.47 per trial\" (source: Nevo David on X, 21 Jun 2026). He also warns that lead quality \"depends on the keywords and landing page\": generic category and competitor keywords produced a much higher cost per customer (Nevo David on X, 23 Jun 2026)." },

      { type: 'heading', text: 'Which Campaign Type to Use' },
      { type: 'table', headers: ['Campaign type', 'How you pay', 'Best for', 'Small business verdict'], rows: [
        ['Search', 'Per click', 'People searching for your service or product', 'Start here for most businesses'],
        ['Local Services Ads', 'Per lead', 'Eligible local services in supported areas', 'Check eligibility; strong for local trades and services'],
        ['Shopping', 'Per click', 'Online stores with a product feed', 'Start here if you sell products online'],
        ['Performance Max', 'Per click/conversion across Google', 'Accounts with solid tracking and assets', 'Add later, once conversions are reliable'],
        ['Display and Video', 'Per impression or view', 'Awareness and remarketing', 'Later, with a clear goal'],
      ]},
      { type: 'paragraph', text: "Google's own comparison of Google Ads and Local Services Ads comes down to this: Search ads charge when someone clicks, Local Services Ads charge when a customer contacts you, and only certain local business categories qualify for Local Services Ads." },

      { type: 'heading', text: 'How Much to Budget' },
      { type: 'numbered-list', items: [
        'Work out what a customer is worth after costs (for repeat customers, include what they spend over time).',
        'Decide the most you will pay for a lead: customer value x your close rate, with a safety margin.',
        'Estimate cost per click for your keywords with Google Keyword Planner.',
        'Estimate your landing page conversion rate (from your site data, or start conservatively).',
        'Budget = leads wanted per month x cost per lead, where cost per lead = cost per click / conversion rate.',
      ]},
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: a plumber whose average job is worth $400 after costs closes 1 in 3 leads, so a lead is worth up to about $130. If clicks cost $6 and 10% of visitors call or book, each lead costs $60. Twenty leads a month need about $1,200 of spend, and should produce about seven jobs worth $2,800 after costs." },

      { type: 'heading', text: 'Is $20 a Day or $500 a Month Enough?' },
      { type: 'paragraph', text: "$20 a day is about $600 a month; $500 a month is about $16 a day. Divide by your cost per click to see how many clicks that buys, then multiply by your conversion rate:" },
      { type: 'table', headers: ['Monthly budget', 'Cost per click', 'Clicks', 'Leads at 10% conversion'], rows: [
        ['$500', '$2', '250', '25'],
        ['$500', '$8', 'about 62', 'about 6'],
        ['$600', '$15', '40', '4'],
      ]},
      { type: 'paragraph', text: "Illustrative numbers. The point: in low-cost categories $500 a month can bring a steady flow of leads; in expensive categories it buys only a handful, so you need tight keywords, a strong page and a narrow area to make it work." },

      { type: 'heading', text: 'Step 1: Set Up Conversion Tracking' },
      { type: 'list', items: [
        'Decide what a conversion is: a call, a form, a booking or a purchase.',
        'Install the Google tag on your site, or import conversions from Google Analytics.',
        'Track calls from ads and calls from your website if the phone matters.',
        'Test each conversion yourself and check it records once.',
      ]},

      { type: 'heading', text: 'Step 2: Build Your First Search Campaign' },
      { type: 'list', items: [
        'One campaign for your main service and area.',
        'One ad group per service, so keywords, ads and landing pages match.',
        'Location set to the area you actually serve, using "presence" (people in the area) rather than interest.',
        'Ad schedule matched to when you can answer calls, at least at first.',
        'Bidding: start with maximize clicks or manual bidding with a cap while you collect data, then move to conversion-based bidding once conversions are reliable.',
      ]},

      { type: 'heading', text: 'Step 3: Keywords and Match Types' },
      { type: 'table', headers: ['Match type', 'Shows for', 'Use when'], rows: [
        ['Exact', 'Searches with the same meaning as the keyword', 'You know the exact searches that convert'],
        ['Phrase', 'Searches that include the meaning of the keyword', 'Starting out; a balance of reach and control'],
        ['Broad', 'Related searches, guided by Google\'s systems', 'Later, with conversion tracking and smart bidding'],
      ]},
      { type: 'paragraph', text: "Start with five to ten tightly related keywords per ad group that show buying intent: \"emergency plumber [city]\", \"[service] near me\", \"[product] price\". Avoid single generic words." },

      { type: 'heading', text: 'Step 4: Negative Keywords' },
      { type: 'paragraph', text: "Negative keywords stop ads showing for searches you do not want. Add a starter list before launch, such as \"free\", \"jobs\", \"salary\", \"course\", \"DIY\" or \"how to\" where they do not fit your business, then add more every week from the search terms report." },

      { type: 'heading', text: 'Step 5: Ads, Assets and Landing Pages' },
      { type: 'list', items: [
        'Responsive search ads that repeat the searched service, your area and why to choose you.',
        'Assets: sitelinks, callouts, call and location assets where they apply.',
        'Each ad group sends people to the matching page, not the homepage.',
        'The page shows the phone number and booking button at the top on mobile and loads fast.',
      ]},

      { type: 'heading', text: 'Settings That Waste Small Budgets' },
      { type: 'list', items: [
        'Display Network: turn it off for Search campaigns; it sends lower-intent traffic.',
        'Search Partners: turn it off at first and test it later.',
        'Location "interest": use presence so people outside your area do not see your ads.',
        'Auto-applied recommendations: review them rather than letting them apply automatically.',
        'Broad match without conversion tracking: Google has nothing to learn from.',
      ]},

      { type: 'heading', text: 'Competitor and Comparison Keywords' },
      { type: 'paragraph', text: "Bidding on competitors' names can work if you send those clicks to an honest comparison page. Be careful with ambiguous names. In a case study Nevo covers, the developer tool mirrord spent \"$1,600 per month\" on competitor-keyword ads to a comparison page, and removing one ambiguous bare keyword cut costs \"by about 50%\" while click-through rate stayed similar (source: \"How mirrord Reached Hacker News Through Reddit, Used Influencers, Comparison Pages and Google Ads\", YouTube, Nevo David's channel)." },

      { type: 'heading', text: 'A First-30-Days Plan and Weekly Routine' },
      { type: 'table', headers: ['When', 'Do this'], rows: [
        ['Days 1-3', 'Tracking set up and tested; campaign built; negatives added; settings checked'],
        ['Week 1', 'Check search terms daily; add negatives; confirm conversions record'],
        ['Weeks 2-3', 'Pause keywords with spend and no conversions; test one new headline'],
        ['Week 4', 'Compare cost per lead with your target; adjust budget, areas or keywords'],
        ['Every week after', 'Search terms, cost per conversion, tracking check, one new test'],
      ]},
      { type: 'paragraph', text: "Look at results by day and hour once you have a few weeks of data. Nevo's Sunday result is a reminder that some days convert far better than others for some businesses; your ad schedule can follow your own data." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your Google Ads account, checks search terms, conversion tracking and cost per conversion every day, and proposes negative keywords, budget moves, schedule changes and new ads. Every change waits for your approval before it goes live in your account." },

      { type: 'faq', items: [
        { q: 'Are Google Ads worth it for a small business?', a: 'Yes, when people search for what you sell, a customer is worth several clicks and you can track conversions. Without tracking and a weekly check, it is easy to waste budget.' },
        { q: 'Is $20 a day good for Google Ads?', a: 'It depends on your cost per click. At $2 a click it buys about 300 clicks a month; at $15 it buys about 40. Divide budget by cost per click and multiply by your conversion rate to see the leads it can bring.' },
        { q: 'Is $500 a month enough for Google Ads?', a: 'In lower-cost categories it can bring a steady flow of leads. In expensive categories it buys only a few, so keep keywords tight, the area narrow and the landing page strong.' },
        { q: 'How much do Google Ads cost for a small business?', a: 'You set the budget and pay per click (or per lead with Local Services Ads). Your real cost is cost per click divided by conversion rate, compared with what a customer is worth.' },
        { q: 'Should I use Local Services Ads or Google Ads?', a: 'If your category and area are eligible, Local Services Ads charge per lead and are worth testing. Search ads give more control and work for any business.' },
        { q: 'Can I run Google Ads for free?', a: 'Ads cost money, but Google Business Profile is free and shows your business in Search and Maps. Get that right first.' },
        { q: 'Should beginners use Performance Max?', a: 'Most small businesses learn more by starting with Search, then adding Performance Max once conversion tracking and volume are solid.' },
      ]},
      { type: 'cta', text: 'Loraloop checks your Google Ads every day and proposes fixes, and nothing changes in your account until you approve it.' },
    ],
    relatedSlugs: ['google-ads-audit-checklist-2026', 'google-ads-search-terms-negative-keywords', 'google-ads-conversion-tracking-checklist', 'who-should-manage-google-ads-small-business'],
  },

  // "ai seo" US 6,600 / UK 1,600 / CA 880; "what is ai seo" US 590; "ai seo agency" US 1,600
  {
    id: 208,
    slug: 'what-is-ai-seo',
    title: 'What Is AI SEO? A Practical Guide to Ranking in Google and AI Answers',
    seoTitle: 'What Is AI SEO? How It Works, What It Is Called Now, and How to Start',
    description: 'AI SEO explained for business owners: the difference between AI SEO and AI for SEO, what GEO, AEO and LLMO mean, how ChatGPT, Perplexity and Google AI Overviews choose sources, how to check if they mention you, and a safe content workflow.',
    category: 'Business',
    date: publishDate,
    imageIndex: 208,
    tableOfContents: [
      'The Short Answer',
      'AI SEO vs AI for SEO',
      'What AI SEO Is Called Now: GEO, AEO and LLMO',
      'How AI Answers Choose Their Sources',
      'Step 1: Check Whether AI Mentions You Today',
      'Step 2: Make Your Own Site Easy to Quote',
      'Step 3: Be Present Where AI Tools Read',
      'Step 4: Use AI for SEO Work Without Hurting Quality',
      'Local Businesses: AI SEO for Near Me Searches',
      'Ecommerce and SaaS: Being Recommended',
      'How to Measure AI SEO',
      'AI SEO Tools, Services and Agencies',
      'A First-Month AI SEO Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Customers now ask ChatGPT, Perplexity, Gemini and Google's AI Overviews the questions they used to type into a search box: which tool to use, which agency to hire, which product is best for their problem. These assistants answer directly and name a few businesses. If yours is not one of them, you may lose the customer before they ever see a list of links." },
      { type: 'paragraph', text: "AI SEO is how you get named in those answers, and how you use AI to do the SEO work that gets you there. This guide explains both, in plain words, with a step-by-step plan a small team can follow." },
      { type: 'callout', text: "Quick answer: AI SEO means optimizing so AI search tools such as Google AI Overviews, ChatGPT and Perplexity understand, cite and recommend your business. It is also called GEO (generative engine optimization), AEO (answer engine optimization) or LLMO. It builds on classic SEO: clear answers on your own pages, consistent facts about your business everywhere, and mentions on sites these tools read. Separately, \"AI for SEO\" means using AI tools to do SEO tasks faster." },

      { type: 'heading', text: 'AI SEO vs AI for SEO' },
      { type: 'table', headers: ['', 'AI SEO (optimizing for AI answers)', 'AI for SEO (using AI tools)'], rows: [
        ['Goal', 'Be cited and recommended in AI-generated answers', 'Do SEO work faster and at a higher standard'],
        ['Examples', 'Answer-first pages, consistent business facts, mentions on Reddit and LinkedIn', 'Keyword grouping, briefs, drafts, internal links, refreshes'],
        ['Measured by', 'Mentions in AI answers, referral traffic from AI tools', 'Rankings, organic traffic, time saved'],
        ['Risk', 'Being described wrongly or not at all', 'Publishing thin, unedited AI text'],
      ]},

      { type: 'heading', text: 'What AI SEO Is Called Now: GEO, AEO and LLMO' },
      { type: 'list', items: [
        'GEO, generative engine optimization: being cited in answers generated by AI tools.',
        'AEO, answer engine optimization: being the source an engine uses for a direct answer, including featured snippets and voice answers.',
        'LLMO or LLM SEO: optimizing for large language models such as ChatGPT and Claude.',
        'AI search optimization: a plain-English umbrella term for all of the above.',
      ]},
      { type: 'paragraph', text: "The names overlap. What matters is the work, which is largely the same." },

      { type: 'heading', text: 'How AI Answers Choose Their Sources' },
      { type: 'list', items: [
        'They match the question to a topic or category, then look for sources that clearly belong to it.',
        'Many search the web live and read several pages at once: your site, comparison pages, reviews, directories and community threads.',
        'They prefer facts that agree across sources, and specific, first-hand detail over generic text.',
        'They lean on sites with lots of real discussion. Nevo David, founder of Postiz, notes that LLMs cite LinkedIn and Reddit heavily, increasingly X too, and that \"optimising for social media spills over into LLM answers\" (source: \"Postiz marketing playbook: Reddit launches, n8n templates, X articles with creators and paid quote reposts\", YouTube, Nevo David\'s channel).',
      ]},
      { type: 'paragraph', text: "That changes one rule of classic SEO. As Nevo puts it, with SEO your content must live on your site; with AEO it does not, because ChatGPT searches many pages at once, so content spread across platforms still counts (source: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article)." },

      { type: 'heading', text: 'Step 1: Check Whether AI Mentions You Today' },
      { type: 'numbered-list', items: [
        'Write 20 to 30 questions your buyers ask: "best [category] for [type of business]", "[your brand] vs [competitor]", "how to [problem you solve]".',
        'Ask them in ChatGPT, Perplexity, Gemini and Google (look at AI Overviews), logged out where possible.',
        'Record for each: are you mentioned, how are you described, which competitors appear, and which sources are cited.',
        'Note every wrong or outdated fact about your business.',
        'Repeat monthly with the same list so you can see change.',
      ]},

      { type: 'heading', text: 'Step 2: Make Your Own Site Easy to Quote' },
      { type: 'list', items: [
        'State clearly on your homepage what you are, who it is for and where you operate.',
        'Open each important page with a direct two- to three-sentence answer to the question it targets.',
        'Use question-style headings and short FAQs that match how buyers ask.',
        'Add structured data that matches the page: Organization, LocalBusiness, Product, FAQPage.',
        'Publish original detail AI cannot get elsewhere: your process, pricing logic, real examples and results.',
        'Keep pages crawlable and indexed in both Google and Bing; several AI tools draw on Bing\'s index.',
      ]},

      { type: 'heading', text: 'Step 3: Be Present Where AI Tools Read' },
      { type: 'table', headers: ['Source', 'What to do'], rows: [
        ['Reddit and forums', 'Answer real questions in detail as yourself; never post fake recommendations'],
        ['LinkedIn and X', 'Publish practical posts and articles under founder and team names'],
        ['Review sites and Google Business Profile', 'Ask every happy customer for a review; reply to all'],
        ['Directories and marketplaces', 'Complete, consistent listings in the places buyers in your category look'],
        ['Comparison and "best of" articles', 'Ask authors to correct wrong facts; publish your own honest comparisons'],
        ['Curated lists', 'Get listed where relevant; Nevo calls GitHub awesome-lists "the easiest SEO and AI-search (AEO) win" for developer products'],
      ]},

      { type: 'heading', text: 'Step 4: Use AI for SEO Work Without Hurting Quality' },
      { type: 'paragraph', text: "AI is excellent at the slow parts of SEO, and dangerous when used to mass-publish generic articles. Nevo describes exactly that trap: daily auto-generated AI blog posts first raised Postiz traffic, then traffic declined, and he warns that low-quality AI content can lead LLMs and Google to classify a site as low quality. After replacing them with AI workflows built from his own original X articles and credited YouTube videos, \"Traffic increased sharply within a few days\" (source: Nevo David, \"How to Automate High-Quality SEO Content from X Articles and YouTube Videos with Two Agentic Skills\", X article, 23 Apr 2026)." },
      { type: 'table', headers: ['Let AI do', 'Keep a person on'], rows: [
        ['Group keywords by intent and topic', 'Choosing which topics matter to the business'],
        ['Draft briefs from what already ranks', 'Adding first-hand experience and examples'],
        ['First drafts from your own source material', 'Final edit, claims and anything that compares or promises'],
        ['Suggest internal links and refreshes', 'Deciding what to merge, cut or rewrite'],
        ['Monitor rankings and AI mentions', 'Strategy and priorities each quarter'],
      ]},
      { type: 'paragraph', text: "Google has said it rewards helpful content however it is produced. The problem is not AI; it is thin content made at scale for search engines instead of people." },

      { type: 'heading', text: 'Local Businesses: AI SEO for Near Me Searches' },
      { type: 'list', items: [
        'Complete your Google Business Profile: services, areas, hours, photos and booking link.',
        'Keep your name, address and phone identical on your site and every directory.',
        'Collect steady, detailed reviews that mention the service and area.',
        'Give each service and area its own page with a clear description and prices or ranges.',
        'Answer local questions on your site: costs, timings, what to expect.',
      ]},

      { type: 'heading', text: 'Ecommerce and SaaS: Being Recommended' },
      { type: 'list', items: [
        'Own a narrow category you can lead, stated plainly on your site: not "project management software" but "project management for construction subcontractors".',
        'Publish honest comparison pages so assistants have an accurate source for "X vs Y" questions.',
        'Keep product data, pricing and documentation public and current.',
        'For products AI agents can use, publish an integration (for example an MCP server or skill) and list it in the relevant directories. Nevo reports Postiz has about 1.2 million downloads on Claude\'s marketplace and that Claude now cites it unprompted (source: \"Marketing to AI agents\" podcast episode, Spotify).',
      ]},

      { type: 'heading', text: 'How to Measure AI SEO' },
      { type: 'table', headers: ['Metric', 'How to measure'], rows: [
        ['Mention rate', 'Share of your tracked questions where each assistant names you'],
        ['Accuracy', 'Whether descriptions of your business are correct'],
        ['Cited sources', 'Which pages assistants link to when they mention you or competitors'],
        ['AI referral traffic', 'Visits from chatgpt.com, perplexity.ai and similar in your analytics'],
        ['Branded search', 'People searching your name after seeing you in an answer'],
      ]},

      { type: 'heading', text: 'AI SEO Tools, Services and Agencies' },
      { type: 'table', headers: ['Option', 'Best for', 'Ask before you buy'], rows: [
        ['Keyword and SEO tools with AI features', 'In-house marketers doing the work', 'Does it fit your workflow and budget?'],
        ['AI visibility trackers', 'Teams that want to monitor mentions in AI answers', 'Which assistants, how many questions, how often?'],
        ['AI SEO services (fixed projects)', 'A defined audit or content sprint', 'What is delivered, by when, and who edits?'],
        ['AI SEO agencies', 'Teams with nobody to own SEO in-house', 'How do they report AI visibility? Who owns the content?'],
        ['AI marketing platforms', 'Lean teams that want SEO and other channels together', 'Does anything publish without your approval?'],
      ]},

      { type: 'heading', text: 'A First-Month AI SEO Plan' },
      { type: 'table', headers: ['Week', 'Do this'], rows: [
        ['Week 1', 'Write your question list; record how each assistant answers today'],
        ['Week 2', 'Fix your homepage description, key pages\' opening answers, FAQs and structured data'],
        ['Week 3', 'Correct wrong facts in directories and listings; ask for reviews; answer two real community questions'],
        ['Week 4', 'Publish one original, detailed guide or comparison; re-run your question list'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Sophie, Loraloop's SEO and GEO specialist, researches keywords with real search data, writes briefs and articles from your brand knowledge and your own source material, suggests internal links and refreshes, and tracks how AI assistants describe your business. Every article and change waits for your approval before it is published." },

      { type: 'faq', items: [
        { q: 'What is AI SEO called now?', a: 'It goes by several names: GEO (generative engine optimization), AEO (answer engine optimization), LLMO or LLM SEO, and AI search optimization. They describe overlapping work.' },
        { q: 'Can ChatGPT do SEO?', a: 'It can help with research, briefs, outlines and drafts, but it cannot check live rankings or know your business without your input. Use it as an assistant, and keep a person on strategy, facts and final edits.' },
        { q: 'What are the best AI SEO tools?', a: 'It depends on the job: keyword research tools with AI features for planning, AI visibility trackers for monitoring mentions, and writing assistants for drafts. Choose by workflow, not by feature list.' },
        { q: 'How do I learn AI SEO?', a: 'Learn classic SEO basics first (search intent, on-page structure, links), then practice by tracking how AI assistants answer questions in your category each month and improving the sources they cite.' },
        { q: 'Is AI SEO different from regular SEO?', a: 'It builds on it. The same fundamentals apply, plus a stronger focus on direct answers, consistent facts across the web and presence on community and review sites.' },
        { q: 'Does Google penalize AI-written content?', a: 'Google says it rewards helpful content however it is made. Thin, unedited AI content published at scale is what tends to hurt.' },
        { q: 'How do I know if ChatGPT recommends my business?', a: 'Ask it the questions your buyers ask, record the answers each month, and watch for visits from chatgpt.com in your analytics.' },
      ]},
      { type: 'cta', text: 'Loraloop researches, writes and refreshes SEO and GEO content from your own material, and you approve every page before it goes live.' },
    ],
    relatedSlugs: ['how-to-get-brand-mentioned-chatgpt-perplexity-gemini', 'how-to-measure-geo-ai-citations-referral-traffic', 'llms-txt-explained-2026', 'geo-vs-seo-2026'],
  },

  // "client acquisition" US 2,400 / UK 480 / CA 320; "how to get clients" US 1,600
  {
    id: 209,
    slug: 'client-acquisition',
    title: 'Client Acquisition: A Complete System for Getting Clients',
    seoTitle: 'Client Acquisition: Strategy, Process and Costs for Service Businesses',
    description: 'A complete client acquisition system for agencies, consultants and service businesses: define your ideal client, build an easy first offer, run give-first outreach, turn content into inbound leads, set up referrals and calculate client acquisition cost.',
    category: 'Business',
    date: publishDate,
    imageIndex: 209,
    tableOfContents: [
      'The Short Answer',
      'What Client Acquisition Means',
      'The Client Acquisition Process',
      'Step 1: Define Your Ideal Client',
      'Step 2: Build an Offer That Is Easy to Say Yes To',
      'Step 3: Choose Your Channels',
      'Step 4: Outbound That People Answer',
      'Step 5: Turn Content and Social Into Inbound Leads',
      'Step 6: Referrals and Partnerships',
      'Step 7: Discovery Calls, Proposals and Follow-Up',
      'Client Acquisition Cost and Payback',
      'Your First 10 Clients: A 30-Day Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most service businesses grow by referral until referrals slow down. Then comes a scramble: some ads, some cold emails, a burst of LinkedIn posts, then back to waiting. A client acquisition system replaces that cycle with a small number of channels you work every week, an offer that is easy to accept and numbers that tell you what each client costs." },
      { type: 'paragraph', text: "This guide is written for agencies, consultants, freelancers and local service businesses. It covers the full process, from choosing who to serve to calculating your acquisition cost, with templates you can use this week." },
      { type: 'callout', text: "Quick answer: Client acquisition is the process of attracting, qualifying and converting prospects into paying clients. A working system has five parts: a clearly defined ideal client, an easy first offer, two channels you work every week (one fast, such as outreach or referrals, and one that compounds, such as content), a follow-up process that does not depend on memory, and tracking of what each client costs and is worth." },

      { type: 'heading', text: 'What Client Acquisition Means' },
      { type: 'paragraph', text: "\"Client acquisition\" and \"customer acquisition\" describe the same idea. \"Client\" is used for services and B2B relationships, where a buyer usually talks to you, compares proposals and expects an ongoing relationship. That makes trust, proof and follow-up more important than for a one-click purchase." },
      { type: 'table', headers: ['Stage', 'Goal', 'Typical activities'], rows: [
        ['Attract', 'Get the right people to notice you', 'Outreach, content, referrals, partners, ads'],
        ['Qualify', 'Spend time only on good-fit prospects', 'Short forms, discovery calls, clear pricing'],
        ['Convert', 'Turn good-fit prospects into clients', 'Proposals, first offers, follow-up'],
        ['Retain and expand', 'Keep clients and win referrals', 'Results reporting, check-ins, referral asks'],
      ]},

      { type: 'heading', text: 'The Client Acquisition Process' },
      { type: 'numbered-list', items: [
        'Define the ideal client and the problem you solve best.',
        'Package an easy first offer.',
        'Choose two acquisition channels and a weekly routine for each.',
        'Qualify inquiries quickly and run focused discovery calls.',
        'Send proposals fast and follow up on a schedule.',
        'Onboard well, report results and ask for referrals.',
        'Track numbers by channel and adjust monthly.',
      ]},

      { type: 'heading', text: 'Step 1: Define Your Ideal Client' },
      { type: 'list', items: [
        'Industry or type of business, and size (revenue, team, locations).',
        'The specific problem they have now that you solve best.',
        'Who decides and what proof they need.',
        'Where they spend time: communities, events, newsletters, platforms.',
        'Red flags that mean a poor fit, so you can say no early.',
      ]},
      { type: 'paragraph', text: "A narrow definition makes everything else easier: outreach lists, content topics, case studies and pricing." },

      { type: 'heading', text: 'Step 2: Build an Offer That Is Easy to Say Yes To' },
      { type: 'paragraph', text: "A retainer is a big decision for a new client. A small, fixed-price first offer is a small one: an audit, a 30-day sprint, a strategy session with a written plan. Describe it by the result, not the activity. Nevo David, founder of Postiz, frames this as selling the result rather than the solution: the problem, the solution, and the result the buyer gets (source: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article)." },
      { type: 'table', headers: ['Business', 'Example first offer'], rows: [
        ['Marketing agency', 'Ad account audit with three ranked fixes and the spend at stake'],
        ['SEO consultant', 'Content gap review against two competitors with a 90-day plan'],
        ['Bookkeeper', 'Month-end clean-up of one month, fixed price'],
        ['Local contractor', 'Free on-site quote within 48 hours'],
      ]},

      { type: 'heading', text: 'Step 3: Choose Your Channels' },
      { type: 'table', headers: ['Channel', 'Speed', 'Works best when', 'Start with'], rows: [
        ['Referrals', 'Fast', 'You have happy clients', 'Ask every happy client for one introduction'],
        ['Direct outreach', 'Fast', 'Your clients are easy to list by name', 'A free, useful offer to a short list'],
        ['Partnerships', 'Medium', 'Others serve the same clients', 'A joint offer or referral swap'],
        ['Content and LinkedIn', 'Slow, compounds', 'Clients research before buying', 'Practical posts that show how you think'],
        ['SEO', 'Slow, compounds', 'Clients search for your service', 'Service pages and answers to buyer questions'],
        ['Paid ads', 'Fast once tuned', 'You know what a client is worth', 'One campaign to your first offer'],
      ]},
      { type: 'paragraph', text: "Pick one fast channel and one compounding channel. Work both every week for at least a quarter before adding a third." },

      { type: 'heading', text: 'Step 4: Outbound That People Answer' },
      { type: 'paragraph', text: "Outreach makes most sense when you have no audience yet, or when your ideal clients are a small, specific group. Nevo's rule is not to \"sell by selling\": messages that pitch get ignored; messages that give get answered. His method (source: \"Outbound-to-Inbound Cold Outreach for Open-Source Developers\", YouTube, May 2024):" },
      { type: 'numbered-list', items: [
        'Build something free and useful first: an audit, a template, a listing, a report.',
        'Send from a separate domain, so spam reports never touch your main email.',
        'Warm that domain up for about two weeks before the first real message.',
        'Write a short, humble email that offers only the free value and promises not to email again if they are not interested.',
        'Nurture people who say yes with useful content weekly or monthly until they ask to work with you.',
      ]},
      { type: 'paragraph', text: "Nevo reports that with this approach, of everyone contacted, \"approximately one person reported the message as spam\". For B2B, he recommends LinkedIn as the top outreach channel, because direct messages on X to people who do not follow you often go unseen." },
      { type: 'table', headers: ['Part of the message', 'Example'], rows: [
        ['Subject', 'Quick idea for [company]\'s Meta ads'],
        ['Why them', 'I noticed [company] is running [specific ad] in the Meta Ad Library.'],
        ['The give', 'I put together three things I would test to lower your cost per sale. Happy to send them over, free.'],
        ['The easy exit', 'If this is not useful, just say so and I will not email again.'],
      ]},

      { type: 'heading', text: 'Step 5: Turn Content and Social Into Inbound Leads' },
      { type: 'list', items: [
        'Publish one practical post a week on the platform your clients use, usually LinkedIn for B2B.',
        'Turn each client result into a short case study: starting point, what you did, what changed.',
        'Put a clear next step on every page and post: the first offer, a call link or a short form.',
        'Collect emails with a useful resource and send a monthly newsletter.',
      ]},
      { type: 'paragraph', text: "Being known first makes selling much easier. Nevo makes the point for senior buyers: once they have heard of you, the sales conversation is far easier (source: \"Reaching Decision Makers (CXOs) from a Community-Driven Open-Source Company\", gitroom.com blog)." },

      { type: 'heading', text: 'Step 6: Referrals and Partnerships' },
      { type: 'numbered-list', items: [
        'Ask at the moment of a visible result, not at invoice time.',
        'Make it specific: "Do you know one other [type of business] who struggles with [problem]?"',
        'Give them something to forward: a short note describing your first offer.',
        'Thank both people, and reward referrals if it fits your business and local rules.',
        'List businesses that serve your clients before or after you, and propose a joint offer or referral swap.',
      ]},

      { type: 'heading', text: 'Step 7: Discovery Calls, Proposals and Follow-Up' },
      { type: 'list', items: [
        'Use a short form before calls: company, role, problem, timing, budget range, and whether they are buying for themselves or their company. Nevo singles out a "Working for: Myself / The Company" field as his favorite qualifier (source: "Getting Discovery Calls and Leads from Self-Serve Open-Source Users", gitroom.com blog).',
        'On the call, spend most of the time on their problem and the result they want.',
        'Send a short proposal within a day: the result, the plan, the price, the start date.',
        'Follow up after two days and after a week, each time with something useful.',
        'Keep every prospect in one CRM or spreadsheet with a next follow-up date.',
      ]},

      { type: 'heading', text: 'Client Acquisition Cost and Payback' },
      { type: 'table', headers: ['Number', 'Formula'], rows: [
        ['Client acquisition cost (CAC)', 'Money and time spent on a channel / clients it brought'],
        ['Client lifetime value (CLV)', 'Average monthly revenue x gross margin x months a client stays'],
        ['Payback period', 'CAC / monthly gross profit per client'],
        ['Close rate', 'Clients won / proposals sent'],
      ]},
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: an agency spends 20 hours a month on outreach (valued at $50 an hour) plus $200 in tools, $1,200 in total, and wins two clients. CAC is $600 per client. If a client pays $2,000 a month at a 50% margin, monthly gross profit is $1,000, so payback is under a month. If clients stay 8 months on average, CLV is $8,000." },
      { type: 'paragraph', text: "There is no single \"typical\" acquisition cost; it depends on your price, industry and channels. What matters is the ratio: CLV should be several times CAC, and payback should be short enough for your cash flow." },

      { type: 'heading', text: 'Your First 10 Clients: A 30-Day Plan' },
      { type: 'table', headers: ['Week', 'Do this'], rows: [
        ['Week 1', 'Define the ideal client; package the first offer; set up a separate outreach domain and start warming it'],
        ['Week 2', 'Ask past clients and contacts for introductions; publish two practical posts; list 100 good-fit prospects'],
        ['Week 3', 'Send give-first outreach to the first 50; follow up on every reply the same day'],
        ['Week 4', 'Run discovery calls; send proposals within a day; follow up; review numbers by channel'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop handles the marketing around client acquisition: it drafts LinkedIn posts, case studies and newsletters in your voice, tracks competitors, runs the free Meta ads audit you can use as a first offer, and reports which channels bring inquiries each week. The conversations stay yours, and every post and email waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is client acquisition?', a: 'The repeatable process of attracting, qualifying and converting prospects into paying clients, and keeping them long enough to refer others.' },
        { q: 'What is a typical customer acquisition cost?', a: 'It varies widely by price, industry and channel. Calculate your own: total spend and time on a channel divided by the clients it brought, and compare it with client lifetime value.' },
        { q: 'How do you get client acquisition right?', a: 'Define one ideal client, offer something easy to accept, work two channels every week, follow up on a schedule and track numbers by channel.' },
        { q: 'What does a client acquisition manager do?', a: 'They own the process of finding and winning new clients: prospect lists, outreach, partnerships, qualifying leads, proposals and the numbers behind them.' },
        { q: 'What is the fastest way to get clients?', a: 'Referrals from happy clients and give-first outreach to a short list of good-fit prospects usually bring conversations fastest.' },
        { q: 'Is cold email still effective?', a: 'It is when it goes to an exact-fit list, comes from a separate warmed-up domain and leads with something useful instead of a pitch.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts the posts, case studies and newsletters that bring clients to you, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['cold-outreach-that-gets-replies', 'how-to-get-clients-for-marketing-agency', 'turn-leads-into-booked-appointments', 'how-to-get-clients-in-real-estate'],
  },

  // "social media marketing for small business" US 1,900 / UK 140 / CA 170
  {
    id: 214,
    slug: 'social-media-marketing-for-small-business',
    title: 'Social Media Marketing for Small Business: The Complete Practical Guide',
    seoTitle: 'Social Media Marketing for Small Business: Strategy, Plan and Costs (2027)',
    description: 'A complete social media guide for small businesses: choose platforms, set goals, plan content with simple rules like 5-3-2, make short video that works, post on a realistic schedule, engage without looking like a bot, measure sales and know what it costs.',
    category: 'Business',
    date: publishDate,
    imageIndex: 214,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Choose One or Two Platforms',
      'Step 2: Set Goals You Can Measure',
      'Step 3: Plan Your Content Mix',
      'The 5-3-2 and Other Posting Rules',
      'Step 4: Make Short Video That Works',
      'Step 5: Test Ideas Before You Invest',
      'Step 6: Post on a Realistic Schedule',
      'Step 7: Engage Like a Person, Not a Bot',
      'Step 8: Measure What Brings Customers',
      'What Social Media Marketing Costs',
      'Playbooks by Business Type',
      'A Weekly Plan for a One-Person Business',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small businesses know they should be on social media. Few have a plan they can keep up for more than a few weeks. The result is a burst of posts, silence, and a feeling that social \"does not work\" for their business." },
      { type: 'paragraph', text: "It usually does work, slowly, when it is consistent and aimed at the right people. This guide gives you a complete system: which platforms to pick, what to post, how often, how to make short video without a studio, and how to measure what brings customers." },
      { type: 'callout', text: "Quick answer: Pick one or two platforms where your customers already spend time, set one measurable goal, plan content around three themes (show the work, answer questions, people and proof), give far more value than promotion, post on a schedule you can keep, reply to every comment and message, and measure messages, clicks and sales rather than followers." },

      { type: 'heading', text: 'Step 1: Choose One or Two Platforms' },
      { type: 'table', headers: ['Platform', 'Best for', 'Content that works'], rows: [
        ['Instagram', 'Visual products, food, beauty, fitness, home services', 'Reels, before and after, carousels, Stories'],
        ['Facebook', 'Local businesses, community, events, older customers', 'Updates, events, groups, local offers'],
        ['TikTok', 'Products and services you can show quickly; younger customers', 'Short video, behind the scenes, slideshows'],
        ['LinkedIn', 'B2B services, consultants, agencies, SaaS', 'Founder posts, case studies, practical advice'],
        ['YouTube', 'How-to, demos, longer explanations', 'Tutorials, Shorts'],
        ['Google Business Profile', 'Any local business', 'Weekly updates, offers, photos'],
      ]},
      { type: 'paragraph', text: "Start with one main platform, plus Google Business Profile if you serve a local area. Add a second only when the first runs every week without effort." },

      { type: 'heading', text: 'Step 2: Set Goals You Can Measure' },
      { type: 'list', items: [
        'Local service: messages, calls and bookings from social.',
        'Online store: clicks to product pages and sales from social.',
        'B2B: inquiries, newsletter signups and conversations with good-fit prospects.',
        'New business: reach among local or target customers, then messages.',
      ]},

      { type: 'heading', text: 'Step 3: Plan Your Content Mix' },
      { type: 'table', headers: ['Theme', 'Examples', 'Why it works'], rows: [
        ['Show the work', 'Before and after, product in use, finished job, behind the scenes', 'Proves you deliver'],
        ['Answer questions', 'Prices, timings, how to choose, common mistakes', 'Builds trust; matches what people search'],
        ['People and proof', 'Team, customer stories, reviews, with permission', 'Makes you human and credible'],
        ['Offers', 'Seasonal offers, launches, events', 'Turns attention into sales; use sparingly'],
      ]},

      { type: 'heading', text: 'The 5-3-2 and Other Posting Rules' },
      { type: 'paragraph', text: "Several rules of thumb circulate online, and they all say the same thing in different ways: give more than you ask. The most common, the 5-3-2 rule, suggests that out of every 10 posts, 5 share useful content from others, 3 are your own helpful content, and 2 are personal or behind-the-scenes. Other versions (3-3-3, 5-3-1) slice it differently. Treat them as reminders, not laws. A practical version for a small business: most posts give value, a few show your people, and a small share sell." },

      { type: 'heading', text: 'Step 4: Make Short Video That Works' },
      { type: 'paragraph', text: "Short vertical video reaches people who do not follow you yet on Instagram, TikTok, YouTube Shorts and Facebook. You do not need a studio; you need a repeatable structure. Nevo David, founder of Postiz, uses four parts: hook, outcome, how-to, call to action. He reports that after around 30 videos published once a day, typical videos got around 200-500 views and about one reached more than 200K (source: Nevo David, \"Selling SaaS Through Outcomes: X Articles, UGC Pages, and TikTok Slideshows\", X article). The lesson: volume and consistency find the winners." },
      { type: 'table', headers: ['Part', 'What to say or show', 'Example (fictional bakery)'], rows: [
        ['Hook (first second)', 'A person, a problem or a result', '"We sold out of this by 10am. Here\'s why."'],
        ['Outcome', 'The result the viewer wants', 'A tray of fresh croissants'],
        ['How-to', 'Two or three quick steps', 'Lamination, proofing, bake'],
        ['Call to action', 'One next step', '"Order for Saturday pickup: link in bio."'],
      ]},

      { type: 'heading', text: 'Step 5: Test Ideas Before You Invest' },
      { type: 'paragraph', text: "Small accounts get little reach from followers, so test topics where reach does not depend on audience size. Nevo suggests posting daily on Reddit, where views do not depend on how many followers you have, then reusing the topics that work on LinkedIn, YouTube Shorts and X (source: \"Growing a founder's social following from under 1k followers\", gitroom.com blog). For a local business, local Facebook groups and Nextdoor can play the same role: see which questions and posts get responses, then turn them into content on your main platform." },

      { type: 'heading', text: 'Step 6: Post on a Realistic Schedule' },
      { type: 'table', headers: ['Time you have', 'Realistic schedule'], rows: [
        ['1 hour a week', 'Three posts on one platform plus one Google Business Profile update'],
        ['3 hours a week', 'Four to five posts, including two short videos, on one platform'],
        ['5+ hours a week', 'Daily short video on one platform and repurposing to a second'],
      ]},
      { type: 'paragraph', text: "Repetition matters because people rarely buy the first time they see you. Nevo puts it this way: a buyer \"needs to see a brand seven or eight times before buying\" (source: \"Postiz marketing playbook\", YouTube, Nevo David's channel). A steady schedule is how you earn those touches." },

      { type: 'heading', text: 'Step 7: Engage Like a Person, Not a Bot' },
      { type: 'list', items: [
        'Reply to comments and messages within a day.',
        'Thank people who tag or mention you.',
        'Spend ten minutes a day commenting on posts from customers, local partners and peers.',
        'Schedule posts in advance; scheduling itself does not reduce reach, according to Nevo, but accounts that never engage and automate everything risk being flagged as bots (Nevo David on X, 11 Sep 2026).',
        'Keep personal or political opinions on a separate account; Nevo notes they attract the wrong followers (Nevo David on X, 22 Jun 2026).',
      ]},

      { type: 'heading', text: 'Step 8: Measure What Brings Customers' },
      { type: 'table', headers: ['Measure', 'Why it matters'], rows: [
        ['Messages, calls and bookings from social', 'Direct buying intent'],
        ['Link clicks (with tracking links)', 'Which posts move people to act'],
        ['Sales from social (store analytics)', 'Business impact'],
        ['Saves and shares', 'Content people value enough to keep or pass on'],
        ['Followers', 'Context only, not the goal'],
      ]},
      { type: 'paragraph', text: "Add tracking links to your bio and posts, and ask every new customer how they found you." },

      { type: 'heading', text: 'What Social Media Marketing Costs' },
      { type: 'table', headers: ['Approach', 'What you pay', 'Good for'], rows: [
        ['Do it yourself', 'Your time, plus optional design and scheduling tools', 'Owners who enjoy it and can stay consistent'],
        ['Freelancer', 'Hourly or a monthly fee', 'Businesses that want help with content creation'],
        ['Agency', 'Monthly retainer, often with a minimum term', 'Businesses wanting strategy, content and ads together'],
        ['AI marketing platform', 'Monthly subscription', 'Lean teams that want planning and drafting done, with approval'],
        ['Paid promotion', 'Ad budget on top of any of the above', 'Amplifying posts that already work'],
      ]},

      { type: 'heading', text: 'Playbooks by Business Type' },
      { type: 'table', headers: ['Business', 'Main platform', 'Focus'], rows: [
        ['Local service', 'Facebook or Instagram + Google Business Profile', 'Before and after, reviews, local offers, fast replies'],
        ['Online store', 'Instagram or TikTok', 'Product in use, UGC, creators, launches'],
        ['B2B service or SaaS', 'LinkedIn', 'Founder posts, case studies, practical advice'],
        ['Restaurant or cafe', 'Instagram + Google Business Profile', 'New items, people behind the food, events'],
      ]},

      { type: 'heading', text: 'A Weekly Plan for a One-Person Business' },
      { type: 'table', headers: ['Day', 'Task', 'Time'], rows: [
        ['Monday', 'Batch the week: pick photos and clips, write captions, schedule', '45-60 minutes'],
        ['Daily', 'Reply to comments and messages; comment on five posts', '10-15 minutes'],
        ['Wednesday', 'Film one short video using hook, outcome, how-to, call to action', '20 minutes'],
        ['Thursday', 'Post a Google Business Profile update', '5 minutes'],
        ['Friday', 'Check messages, clicks and sales from social; note what worked', '10 minutes'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans your week from your content themes, drafts captions and short video scripts in your brand voice, schedules posts across your channels and drafts replies to comments and messages. Sensitive replies are held for a person, and every post and reply waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'What is the 5-3-2 rule for social media?', a: 'A rule of thumb: out of every 10 posts, 5 share useful content from others, 3 are your own helpful content and 2 are personal. The point is to give more value than you promote.' },
        { q: 'What are the 3-3-3 and 5-3-1 rules?', a: 'Variations of the same idea with different ratios. None is official; use them as reminders to keep promotion a small share of what you post.' },
        { q: 'How much does social media marketing cost for a small business?', a: 'Doing it yourself costs time and optional tools; freelancers charge hourly or monthly; agencies charge monthly retainers; ad budget is extra in every case.' },
        { q: 'How often should a small business post?', a: 'Consistency matters more than volume. Three to five posts a week on one platform, every week, is a strong start.' },
        { q: 'Which social media platform is best for marketing a small business?', a: 'The one your customers use: often Instagram or TikTok for visual products, Facebook and Google Business Profile for local businesses, LinkedIn for B2B.' },
        { q: 'How can I promote my business on social media for free?', a: 'Post useful content consistently, reply to everyone, join local or industry groups, collaborate with partners and ask customers to share their experience.' },
        { q: 'How long does social media take to bring customers?', a: 'Expect a few months of consistent posting. Fast replies to messages and promoting proven posts can bring results sooner.' },
      ]},
      { type: 'cta', text: 'Loraloop plans, drafts and schedules your social posts in your voice, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['ai-social-media-manager-small-business', 'small-business-marketing-ideas', 'how-to-get-more-google-reviews', 'creator-ugc-partnerships-dtc-brands'],
  },
];
