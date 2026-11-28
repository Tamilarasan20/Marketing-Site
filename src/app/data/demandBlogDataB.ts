import type { BlogPost } from './blogData';

// Demand batch B (ids 214-221), written November 28, 2026.
// Each post targets a search with measured demand (Treg -> DataForSEO Google Ads volume, Oct 2026)
// next to topics whose own posts had little demand, and lists those weaker posts in relatedSlugs.
// US/UK/CA monthly searches noted per post. No invented statistics: platform and policy facts are
// attributed to Meta, Google or the FTC; examples use fictional businesses and say so.
const publishDate = 'November 28, 2026';

export const demandBlogPostsB: BlogPost[] = [
  // "social media marketing for small business" US 1,900 / UK 140 / CA 170
  {
    id: 214,
    slug: 'social-media-marketing-for-small-business',
    title: 'Social Media Marketing for Small Business: A Simple Weekly Plan',
    seoTitle: 'Social Media Marketing for Small Business: A Simple Weekly Plan (2027)',
    description: 'A practical social media plan for small businesses: pick one or two platforms, set three content themes, batch a week of posts in one sitting, reply to every comment and measure the posts that bring customers.',
    category: 'Business',
    date: publishDate,
    imageIndex: 214,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Pick One or Two Platforms',
      'Step 2: Choose Three Content Themes',
      'Step 3: Batch a Week of Posts',
      'Step 4: Reply and Engage Every Day',
      'Step 5: Measure What Brings Customers',
      'A Simple Weekly Schedule',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small businesses do not fail at social media because of bad posts. They fail because posting stops after three weeks. A plan that fits in an hour or two a week beats an ambitious one you abandon. Here is a simple weekly system you can keep up." },
      { type: 'callout', text: "Quick answer: For small business social media, pick one or two platforms where your customers already are, choose three recurring content themes, write a week of posts in one sitting, reply to comments and messages daily, and track which posts lead to calls, bookings or sales rather than likes." },

      { type: 'heading', text: 'Step 1: Pick One or Two Platforms' },
      { type: 'table', headers: ['Platform', 'Works well for'], rows: [
        ['Instagram', 'Visual products, food, beauty, fitness, home services with before-and-after work'],
        ['Facebook', 'Local businesses, community groups, events, older customers'],
        ['TikTok', 'Products and services you can show quickly; behind-the-scenes content'],
        ['LinkedIn', 'B2B services, consultants, agencies'],
        ['Google Business Profile posts', 'Any local business; shows where people search for you'],
      ]},
      { type: 'paragraph', text: "Start with one platform plus your Google Business Profile if you serve a local area. Add a second platform only once the first runs every week without effort." },

      { type: 'heading', text: 'Step 2: Choose Three Content Themes' },
      { type: 'list', items: [
        'Show the work: before and after, products in use, the finished job.',
        'Answer questions: the things customers ask before buying.',
        'People and proof: your team, customer stories and reviews, with permission.',
      ]},
      { type: 'paragraph', text: "Rotate the three themes through the week. You never start from a blank page, and customers see what you do, how you think and that others trust you." },

      { type: 'heading', text: 'Step 3: Batch a Week of Posts' },
      { type: 'numbered-list', items: [
        'Block one hour at the same time each week.',
        'Pick three to five photos or short videos from the week\'s work.',
        'Write a caption for each with one clear point and one next step.',
        'Schedule them with the platform\'s own scheduler or a tool.',
        'Keep a running list of customer questions to turn into posts.',
      ]},

      { type: 'heading', text: 'Step 4: Reply and Engage Every Day' },
      { type: 'paragraph', text: "Social media is two-way. Reply to comments and messages within a day, thank people who tag you and spend ten minutes commenting on posts from local partners or customers. A quick, friendly reply often does more for sales than a new post." },

      { type: 'heading', text: 'Step 5: Measure What Brings Customers' },
      { type: 'table', headers: ['Measure', 'Why'], rows: [
        ['Messages and calls from social', 'Direct sign of buying intent'],
        ['Link clicks to your booking page or store', 'Shows which posts move people to act'],
        ['Saves and shares', 'Signals content people value enough to keep or pass on'],
        ['Followers', 'Useful context, but not the goal'],
      ]},
      { type: 'paragraph', text: "Ask new customers how they found you, and add tracking links to your profile and posts so you can see which ones send people to your site." },

      { type: 'heading', text: 'A Simple Weekly Schedule' },
      { type: 'table', headers: ['Day', 'Task', 'Time'], rows: [
        ['Monday', 'Batch and schedule the week\'s posts', '45-60 minutes'],
        ['Daily', 'Reply to comments and messages', '10 minutes'],
        ['Wednesday', 'Post a Google Business Profile update', '5 minutes'],
        ['Friday', 'Check which posts brought messages or clicks', '10 minutes'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans your week of posts from your three themes, drafts captions in your brand voice, schedules them across your channels and drafts replies to comments and messages. Sensitive replies are held for a person, and every post and reply waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'How often should a small business post on social media?', a: 'Consistency matters more than volume. Three to five posts a week on one platform, every week, is a strong start for most small businesses.' },
        { q: 'Which social media is best for a small business?', a: 'The one your customers already use. Visual businesses often start on Instagram, local businesses on Facebook and Google Business Profile, B2B services on LinkedIn.' },
        { q: 'Should a small business pay for social media ads?', a: 'Once organic posts show which messages work, promoting your best posts to people nearby is a low-risk way to start.' },
        { q: 'How long does social media marketing take to work?', a: 'Expect a few months of consistent posting before it brings steady inquiries. Replying quickly to messages can bring results sooner.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts and schedules your week of posts in your voice, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['ai-social-media-manager-small-business', 'small-business-marketing-ideas', 'multi-channel-content-calendar-with-ai', 'get-more-customers-local-business'],
  },

  // "instagram ads cost" US 1,600 / UK 480 / CA 320
  {
    id: 215,
    slug: 'instagram-ads-cost',
    title: 'How Much Do Instagram Ads Cost? Pricing and Budget Guide',
    seoTitle: 'Instagram Ads Cost in 2027: How Pricing Works and How to Budget',
    description: 'How much Instagram ads cost depends on Meta\'s auction, your audience, placement and creative. How Instagram ad pricing works, boosting vs Ads Manager, and how to set a budget from your target cost per sale.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 215,
    tableOfContents: [
      'The Short Answer',
      'How Instagram Ad Pricing Works',
      'Boosting a Post vs Ads Manager',
      'Placements: Feed, Stories, Reels and Explore',
      'How to Set an Instagram Ads Budget',
      'How to Lower Instagram Ad Costs',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Instagram ads run on the same system as Facebook ads: Meta's ads auction. There is no price list. You choose a budget, and the auction decides what you pay per impression, click or sale based on who you target, how relevant your ad is and how many other advertisers want the same people." },
      { type: 'callout', text: "Quick answer: Instagram ads cost what you choose to spend; Meta's auction sets your cost per result based on your bid, how likely people are to act on the ad and its quality. Budget from your target cost per sale or lead, run ads through Ads Manager for full control, and test Reels and Stories placements alongside the feed." },

      { type: 'heading', text: 'How Instagram Ad Pricing Works' },
      { type: 'paragraph', text: "Meta describes its auction as choosing the ad with the highest total value, combining your bid, the estimated chance the person takes the action you want, and ad quality. A more relevant ad can win while paying less, so creative made for Instagram, vertical, fast and native-looking, directly affects what you pay." },
      { type: 'table', headers: ['Metric', 'What it tells you'], rows: [
        ['CPM', 'What it costs to reach 1,000 people in your audience and placements'],
        ['CPC', 'What each click to your site or profile costs'],
        ['Cost per result', 'What each sale, lead or booking costs; the number that decides profit'],
        ['Frequency', 'How often each person saw the ad; rising frequency often raises costs'],
      ]},

      { type: 'heading', text: 'Boosting a Post vs Ads Manager' },
      { type: 'table', headers: ['', 'Boost from the Instagram app', 'Meta Ads Manager'], rows: [
        ['Setup', 'A few taps on an existing post', 'Full campaign setup'],
        ['Goals', 'Mostly visits, messages and profile activity', 'Every objective, including sales and leads'],
        ['Targeting and testing', 'Basic', 'Full targeting, multiple ads, A/B tests'],
        ['Best for', 'Quick reach for a post that already does well', 'Anything you measure in sales or leads'],
      ]},

      { type: 'heading', text: 'Placements: Feed, Stories, Reels and Explore' },
      { type: 'list', items: [
        'Feed: familiar format; works for clear product images and carousels.',
        'Stories: full-screen and vertical; quick, direct messages with a strong first frame.',
        'Reels: short vertical video; looks like native content and often reaches new people.',
        'Explore: reaches people browsing new content.',
      ]},
      { type: 'paragraph', text: "Letting Meta choose placements automatically is a sensible default; make sure each ad has a vertical version so it looks right in Stories and Reels." },

      { type: 'heading', text: 'How to Set an Instagram Ads Budget' },
      { type: 'numbered-list', items: [
        'Work out what a sale or lead is worth to you after costs.',
        'Set a target cost per result below that.',
        'Plan a weekly budget per ad set of roughly 50 times your target cost per result; Meta says an ad set generally needs about 50 optimization events a week to exit the learning phase.',
        'If that is too much, combine ad sets or optimize for an earlier step, such as adds to cart or messages.',
        'Run at least a week or two before judging, changing one thing at a time.',
      ]},

      { type: 'heading', text: 'How to Lower Instagram Ad Costs' },
      { type: 'list', items: [
        'Make vertical, native-looking creative; the first second decides whether people keep watching.',
        'Refresh ads when frequency climbs and results drop.',
        'Use broad targeting with strong creative rather than very narrow audiences.',
        'Fix tracking with the Meta Pixel and Conversions API.',
        'Send traffic to a page that repeats the ad\'s promise.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop monitors your Meta ads across Instagram and Facebook every day, drafts new vertical ad variations from your brand knowledge and proposes budget moves toward what works. Every new ad and budget change waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'How much do Instagram ads cost per day?', a: 'You set the daily budget. Meta shows the minimum daily budget in Ads Manager when you enter it; it depends on your currency and bid type.' },
        { q: 'Are Instagram ads cheaper than Facebook ads?', a: 'They run in the same auction, so it depends on your audience, placement and creative. Test both placements in one campaign and compare cost per result.' },
        { q: 'Is boosting a post on Instagram worth it?', a: 'For quick reach on a post that already performs well, yes. For sales or leads, Ads Manager gives you more control and better measurement.' },
        { q: 'Why are my Instagram ads expensive?', a: 'Common causes are creative that does not fit the format, fatigued ads, very narrow targeting, broken tracking or holiday-season competition.' },
      ]},
      { type: 'cta', text: 'Loraloop watches your Instagram and Facebook ads daily and proposes fixes, and nothing changes until you approve it.' },
    ],
    relatedSlugs: ['how-much-do-facebook-ads-cost', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'ugc-vs-static-vs-video-ads-meta', 'facebook-ad-examples'],
  },

  // "how to get more google reviews" US 590 / UK 90 / CA 70; "how to ask customers for reviews" US 480
  {
    id: 216,
    slug: 'how-to-get-more-google-reviews',
    title: 'How to Get More Google Reviews (and Ask Customers Without Being Awkward)',
    seoTitle: 'How to Get More Google Reviews: Ask Customers the Right Way (2027)',
    description: 'How to get more Google reviews: get your review link, ask at the right moment, make it one tap, reply to every review and stay within Google\'s and the FTC\'s rules on incentives and fake reviews. Includes message templates.',
    category: 'Business',
    date: publishDate,
    imageIndex: 216,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Get Your Google Review Link',
      'Step 2: Ask at the Right Moment',
      'Step 3: Make It One Tap',
      'Message Templates',
      'Step 4: Reply to Every Review',
      'What Not to Do',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most happy customers will leave a review if you ask at the right moment and make it easy. Most businesses simply never ask, or ask weeks later by email with three links to choose from. A short, personal request with one link, sent right after a good experience, does most of the work." },
      { type: 'callout', text: "Quick answer: To get more Google reviews, copy your review link from your Google Business Profile, ask every customer right after a good experience, send the link by text or email so leaving a review takes one tap, reply to every review, and never offer rewards for reviews or ask only happy customers, which Google's policies do not allow." },

      { type: 'heading', text: 'Step 1: Get Your Google Review Link' },
      { type: 'paragraph', text: "Google Business Profile gives you a direct link and QR code that open the review form for your business. Find the option to ask for reviews in your profile, copy the link and save it somewhere your whole team can reach." },

      { type: 'heading', text: 'Step 2: Ask at the Right Moment' },
      { type: 'list', items: [
        'Home services: as the job is finished and the customer is happy with it.',
        'Clinics and salons: at checkout, or by text the same day.',
        'Restaurants and cafes: with the bill, or a card on the table with a QR code.',
        'Online stores: once the order has arrived and been used, not at dispatch.',
        'B2B services: after a milestone or a good result, not at invoice time.',
      ]},

      { type: 'heading', text: 'Step 3: Make It One Tap' },
      { type: 'list', items: [
        'Send the direct review link, not a link to your website.',
        'Text messages usually get faster responses than email for local businesses.',
        'Put the QR code on receipts, invoices, counters and thank-you cards.',
        'Ask every customer the same way, so the request is fair and consistent.',
      ]},

      { type: 'heading', text: 'Message Templates' },
      { type: 'table', headers: ['When', 'Message'], rows: [
        ['Text after a job', 'Hi [Name], thanks for choosing us today. If you have a minute, a quick Google review helps other people find us: [link]. Thank you!'],
        ['Email after an order', 'Hi [Name], we hope you are enjoying your order. Would you share your experience on Google? It takes about a minute: [link].'],
        ['In person', 'Thanks so much. If you are happy with how it went, a Google review would really help us. I can text you the link.'],
        ['Gentle reminder', 'Hi [Name], just a reminder in case you meant to leave a review: [link]. No worries if not, and thanks again.'],
      ]},

      { type: 'heading', text: 'Step 4: Reply to Every Review' },
      { type: 'list', items: [
        'Thank positive reviewers by name and mention something specific.',
        'Reply to negative reviews calmly, take responsibility where it is fair and offer to resolve it offline.',
        'Never share private details about a customer in a reply.',
        'Reply within a day or two; prospective customers read replies as well as reviews.',
      ]},

      { type: 'heading', text: 'What Not to Do' },
      { type: 'list', items: [
        'Do not offer discounts, gifts or entries in exchange for reviews; Google\'s review policies prohibit incentives.',
        'Do not ask only customers you expect to be happy ("review gating"); Google\'s policies prohibit selectively soliciting positive reviews.',
        'Do not write, buy or swap reviews. In the US, the FTC\'s rule on fake reviews prohibits buying or faking them.',
        'Do not have staff review the business from their own accounts.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts review request messages and replies to every new review in your brand voice, and flags negative reviews so a person can respond. Every message and reply waits for your approval before it is sent or published." },

      { type: 'faq', items: [
        { q: 'How do I get my Google review link?', a: 'In your Google Business Profile, use the option to ask for reviews; it gives you a short link and a QR code that open the review form.' },
        { q: 'Can I offer a discount for a Google review?', a: 'No. Google\'s policies prohibit offering incentives for reviews, and in the US the FTC also restricts paid or incentivized reviews that misrepresent experiences.' },
        { q: 'How many Google reviews do I need?', a: 'There is no fixed number. A steady flow of recent, detailed reviews with replies matters more than a single total.' },
        { q: 'Should I reply to negative reviews?', a: 'Yes. A calm, helpful reply shows future customers how you handle problems, and sometimes the reviewer updates their review.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your review requests and review replies in your voice, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'google-business-profile-holiday-checklist-multi-location', 'local-seo-ai-era-near-me-recommendations', 'small-business-marketing-ideas'],
  },

  // "facebook ads for small business" US 590 / UK 30 / CA 50
  {
    id: 217,
    slug: 'facebook-ads-for-small-business',
    title: 'Facebook Ads for Small Business: A Beginner\'s Setup Guide',
    seoTitle: 'Facebook Ads for Small Business: Beginner\'s Setup Guide (2027)',
    description: 'How a small business can start Facebook and Instagram ads without wasting money: set up the Pixel and Conversions API, pick the right objective, keep the account simple, make strong creative and check results weekly.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 217,
    tableOfContents: [
      'The Short Answer',
      'Before You Start: Tracking',
      'Pick the Right Campaign Objective',
      'Keep the Account Structure Simple',
      'Audience and Creative',
      'Budget',
      'A Weekly Facebook Ads Routine',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Facebook and Instagram ads can bring a small business a steady flow of customers, or quietly spend money on clicks that never buy. The difference is usually setup: tracking that works, an objective that matches your goal, a simple account and creative that earns attention." },
      { type: 'callout', text: "Quick answer: Start Facebook ads by setting up the Meta Pixel and Conversions API, choosing the Sales or Leads objective, running one campaign with one or two ad sets, giving Meta several strong creatives to test, budgeting from your target cost per result and reviewing results once a week rather than daily." },

      { type: 'heading', text: 'Before You Start: Tracking' },
      { type: 'list', items: [
        'Create a Meta Business account and connect your Facebook Page and Instagram account.',
        'Install the Meta Pixel on your website, and add the Conversions API so events are sent from your server too.',
        'Decide which event matters: purchase, lead form, booking or call.',
        'Test the event yourself and check it appears in Events Manager.',
      ]},

      { type: 'heading', text: 'Pick the Right Campaign Objective' },
      { type: 'table', headers: ['Your goal', 'Objective'], rows: [
        ['Online sales', 'Sales'],
        ['Calls, forms, bookings', 'Leads'],
        ['Visits to your site', 'Traffic (only when visits are the goal)'],
        ['Messages', 'Engagement or Leads with messaging'],
        ['Getting known locally', 'Awareness'],
      ]},
      { type: 'paragraph', text: "Pick the objective that matches the result you pay for. Optimizing for clicks when you want sales usually brings cheap clicks and few sales." },

      { type: 'heading', text: 'Keep the Account Structure Simple' },
      { type: 'list', items: [
        'One campaign per goal, not one per product or idea.',
        'One or two ad sets, so each gets enough results to learn.',
        'Several ads per ad set, so Meta can find the creative that works.',
        'Name campaigns, ad sets and ads consistently so reports are readable.',
      ]},

      { type: 'heading', text: 'Audience and Creative' },
      { type: 'list', items: [
        'Start broad within your country or service area; Meta\'s delivery system finds buyers based on the creative and results.',
        'Exclude existing customers where you are selling something new.',
        'Make three to five ads with different angles: a demo, a customer review, a before and after.',
        'Make vertical versions for Stories and Reels.',
        'If you advertise housing, jobs, credit or social issues, Meta applies special ad category rules that limit targeting.',
      ]},

      { type: 'heading', text: 'Budget' },
      { type: 'paragraph', text: "Work out the most you can pay per sale or lead. Meta says an ad set generally needs about 50 optimization events in a week to leave the learning phase, so a weekly budget near 50 times your target cost per result gives it room to learn. If that is too high, use fewer ad sets or optimize for a more frequent event while volume grows." },

      { type: 'heading', text: 'A Weekly Facebook Ads Routine' },
      { type: 'table', headers: ['Check', 'Action'], rows: [
        ['Cost per result by ad', 'Pause clear losers; keep winners running'],
        ['Frequency', 'Add new creative when frequency climbs and results drop'],
        ['Events Manager', 'Confirm purchases or leads are still recording'],
        ['Landing page', 'Check it loads and the form or checkout works'],
        ['New creative', 'Add one or two new ads to test each week'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop reads your Meta ads every day, flags fatigued ads and tracking problems, drafts new ad variations and proposes budget moves. Every change waits for your approval before it goes live. The free Meta ads audit shows what your current account is wasting." },

      { type: 'faq', items: [
        { q: 'Are Facebook ads worth it for a small business?', a: 'They can be when tracking works, the objective matches your goal and you test creative regularly. Without tracking it is hard to tell whether ads pay for themselves.' },
        { q: 'How much should a small business spend on Facebook ads?', a: 'Start from your target cost per sale or lead and the roughly 50 results a week Meta suggests each ad set needs to learn, then scale what works.' },
        { q: 'Should I boost posts or use Ads Manager?', a: 'Boosting is quick for reach. Ads Manager gives you sales and lead objectives, testing and better measurement.' },
        { q: 'How long before Facebook ads work?', a: 'Give a new campaign at least one to two weeks before judging, and avoid big changes during the learning phase.' },
      ]},
      { type: 'cta', text: 'Start with the free Meta ads audit, then let Loraloop propose fixes you approve one by one.' },
    ],
    relatedSlugs: ['meta-ads-multiple-products-markets-account-structure', 'meta-ads-daily-monitoring-checklist', 'meta-ads-naming-convention-template', 'how-much-do-facebook-ads-cost'],
  },

  // "how to get customers for cleaning business" US 480 / UK 70 / CA 30
  {
    id: 218,
    slug: 'how-to-get-customers-for-cleaning-business',
    title: 'How to Get Customers for a Cleaning Business',
    seoTitle: 'How to Get Customers for a Cleaning Business: A Practical Guide (2027)',
    description: 'How to get cleaning clients: a complete Google Business Profile, reviews, service-area pages, local ads, partnerships with property managers and realtors, recurring plans and fast quotes.',
    category: 'Business',
    date: publishDate,
    imageIndex: 218,
    tableOfContents: [
      'The Short Answer',
      'Get Found Locally',
      'Win Trust Fast',
      'Partnerships That Bring Steady Work',
      'Paid Ads for Cleaning Businesses',
      'Turn One-Off Cleans Into Recurring Clients',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Cleaning customers usually search when they need help soon: a move-out, a busy month, a one-off deep clean. The cleaning businesses that grow are easy to find at that moment, look trustworthy at a glance, reply fast and turn first cleans into recurring visits." },
      { type: 'callout', text: "Quick answer: To get customers for a cleaning business, complete your Google Business Profile, collect reviews after every clean, build a page for each service and area, reply to quote requests within hours, partner with property managers, realtors and landlords, and offer recurring plans so first-time clients stay." },

      { type: 'heading', text: 'Get Found Locally' },
      { type: 'numbered-list', items: [
        'Complete your Google Business Profile: services, service areas, hours, photos and a booking or quote link.',
        'Build a page on your website for each service (deep clean, move-out, office, recurring) and the main areas you cover.',
        'Keep your name, phone and address consistent across directories.',
        'Post on Nextdoor and in local Facebook groups where cleaning recommendations are asked for, following each group\'s rules.',
      ]},

      { type: 'heading', text: 'Win Trust Fast' },
      { type: 'list', items: [
        'Ask every happy client for a Google review the same day.',
        'Show before-and-after photos, with the client\'s permission.',
        'State clearly that you are insured, and what is included in each clean.',
        'Show starting prices or price ranges so people can decide quickly.',
        'Reply to quote requests and missed calls within hours.',
      ]},

      { type: 'heading', text: 'Partnerships That Bring Steady Work' },
      { type: 'table', headers: ['Partner', 'What they need'], rows: [
        ['Property managers', 'Reliable turnover cleans between tenants'],
        ['Realtors', 'Pre-listing and move-out cleans on short notice'],
        ['Short-term rental hosts', 'Fast, consistent cleans between guests'],
        ['Landlords', 'End-of-tenancy cleans'],
        ['Moving companies', 'Move-in and move-out cleans for their customers'],
      ]},
      { type: 'paragraph', text: "Approach them with something useful: a reliable turnaround, a simple checklist they can trust and a direct line for urgent jobs. A few steady partners can fill the calendar more reliably than one-off ads." },

      { type: 'heading', text: 'Paid Ads for Cleaning Businesses' },
      { type: 'list', items: [
        'Google Search ads for "[service] near me" and "[service] [city]" searches, limited to your service area.',
        'Google Local Services Ads, if your category and area are eligible.',
        'Facebook and Instagram ads with before-and-after photos to people nearby.',
        'Track calls and quote requests from each so you know which ads pay.',
      ]},

      { type: 'heading', text: 'Turn One-Off Cleans Into Recurring Clients' },
      { type: 'list', items: [
        'Offer weekly, biweekly and monthly plans after every first clean.',
        'Make the recurring price clearly better value than one-off cleans.',
        'Send a short follow-up after the first clean asking how it went.',
        'Ask happy recurring clients for referrals and reward them where local rules allow.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop keeps your Google Business Profile and social posts current with before-and-after work, drafts review requests and replies, writes service-area pages and runs local search ads by area. Every post, reply and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is the fastest way to get cleaning clients?', a: 'A complete Google Business Profile with reviews, fast replies to quote requests and a few partnerships with property managers or realtors.' },
        { q: 'Should a cleaning business show prices?', a: 'Showing starting prices or ranges helps people decide faster and filters out poor fits.' },
        { q: 'Do Google ads work for cleaning businesses?', a: 'They can, because people search when they need a clean. Limit ads to your service area and track calls and quotes.' },
        { q: 'How do I get recurring cleaning clients?', a: 'Offer a recurring plan after every first clean, at a better rate than one-off cleans, and follow up personally.' },
      ]},
      { type: 'cta', text: 'Loraloop keeps your profile, posts and review replies current every week, and you approve everything first.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'how-to-get-more-google-reviews', 'turn-leads-into-booked-appointments', 'ai-marketing-for-local-service-businesses'],
  },

  // "how to get clients in real estate" US 390 / UK 10 / CA 30
  {
    id: 219,
    slug: 'how-to-get-clients-in-real-estate',
    title: 'How to Get Clients in Real Estate: A Practical Plan for Agents',
    seoTitle: 'How to Get Clients in Real Estate: A Practical Plan for Agents (2027)',
    description: 'How real estate agents get clients: work your sphere, own a neighborhood with useful local content, use open houses and reviews, follow up on a schedule and run housing ads within Meta\'s special ad category rules.',
    category: 'Business',
    date: publishDate,
    imageIndex: 219,
    tableOfContents: [
      'The Short Answer',
      'Start With Your Sphere',
      'Own a Neighborhood Online',
      'Open Houses and Events',
      'Reviews and Referrals',
      'Follow-Up That Does Not Drop Leads',
      'Ads for Real Estate Agents',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Real estate clients choose agents they already know and trust, often long before they are ready to move. Getting clients is mostly about being known, being useful and staying in touch until the timing is right." },
      { type: 'callout', text: "Quick answer: To get real estate clients, stay in regular touch with everyone you know, become the go-to source for one or two neighborhoods with useful local content, use open houses to meet buyers and neighbors, collect reviews after every closing, follow up with every lead on a schedule and run housing ads within Meta's special ad category rules." },

      { type: 'heading', text: 'Start With Your Sphere' },
      { type: 'list', items: [
        'List everyone you know: past clients, friends, family, former colleagues, local businesses.',
        'Contact them personally a few times a year, not only by newsletter.',
        'Send a useful monthly email: local market updates, new listings, homeowner tips.',
        'Ask past clients for introductions when they are happy with your work.',
      ]},

      { type: 'heading', text: 'Own a Neighborhood Online' },
      { type: 'list', items: [
        'Pick one or two neighborhoods you know well.',
        'Publish guides: schools, commute, parks, what homes are like, what people love about living there.',
        'Post short videos walking the area and its local businesses.',
        'Keep your Google Business Profile complete, with your service areas and reviews.',
      ]},

      { type: 'heading', text: 'Open Houses and Events' },
      { type: 'paragraph', text: "Open houses bring you buyers who are not yet working with an agent and neighbors curious about values. Collect contact details with permission, follow up within a day, and invite neighbors to see the home before the public open house." },

      { type: 'heading', text: 'Reviews and Referrals' },
      { type: 'list', items: [
        'Ask for a review after every closing, on Google and the platforms buyers use in your market.',
        'Share client stories with their permission.',
        'Partner with lenders, inspectors, contractors and movers who can refer clients.',
      ]},

      { type: 'heading', text: 'Follow-Up That Does Not Drop Leads' },
      { type: 'table', headers: ['Lead type', 'Follow-up'], rows: [
        ['New online inquiry', 'Reply within hours; offer a call or showing'],
        ['Open house visitor', 'Same or next day thank-you with similar listings'],
        ['Not ready yet', 'Monthly market update with permission; check in each quarter'],
        ['Past client', 'Home anniversary note and an annual value update'],
      ]},
      { type: 'paragraph', text: "Keep every lead in one CRM or spreadsheet with a next follow-up date. Most real estate deals come from people who were not ready the first time you spoke." },

      { type: 'heading', text: 'Ads for Real Estate Agents' },
      { type: 'paragraph', text: "On Meta, ads about housing must run in the housing special ad category, which limits targeting by age, gender and ZIP code to support fair housing rules. Focus on strong local creative and a clear offer, such as a free home valuation or a neighborhood guide, and follow up quickly on every lead." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts neighborhood guides, social posts, market update emails and review requests in your voice, and keeps your Google Business Profile current. Every post, email and ad waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'How do new real estate agents get clients?', a: 'Tell everyone you know, host or help at open houses, pick a neighborhood to know deeply and follow up with every lead on a schedule.' },
        { q: 'Do Facebook ads work for real estate?', a: 'They can for lead generation, within Meta\'s housing special ad category rules. Strong local creative and fast follow-up matter most.' },
        { q: 'How often should agents contact past clients?', a: 'A personal touch a few times a year plus a useful monthly email keeps you top of mind without being pushy.' },
        { q: 'What content works for real estate agents?', a: 'Neighborhood guides, local market updates, short area videos and client stories.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your neighborhood content and follow-up emails, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['client-acquisition', 'turn-leads-into-booked-appointments', 'local-seo-ai-era-near-me-recommendations', 'how-to-get-more-google-reviews'],
  },

  // "email marketing strategy" US 390 / UK 90 / CA 50; "email marketing campaigns examples" US 210
  {
    id: 220,
    slug: 'email-marketing-strategy',
    title: 'Email Marketing Strategy: A Simple Plan With Campaign Examples',
    seoTitle: 'Email Marketing Strategy for Small Businesses: Plan and Examples (2027)',
    description: 'A practical email marketing strategy: grow a permission-based list, set up four core automated flows, plan monthly campaigns, meet Gmail and Yahoo sender rules and measure clicks and revenue. With campaign examples.',
    category: 'Business',
    date: publishDate,
    imageIndex: 220,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Grow a Permission-Based List',
      'Step 2: Set Up Four Core Flows',
      'Step 3: Plan Monthly Campaigns',
      'Email Campaign Examples',
      'Step 4: Protect Deliverability',
      'Step 5: Measure What Matters',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Email is the one marketing channel you own: no algorithm decides who sees it. A good email strategy is simple: a list of people who asked to hear from you, a few automated emails that run every day, and regular campaigns with something worth opening." },
      { type: 'callout', text: "Quick answer: A practical email marketing strategy has four parts: grow a list with clear permission, automate a welcome, abandoned cart or follow-up, post-purchase and win-back flow, send one or two useful campaigns a month on a planned calendar, and measure clicks and revenue rather than opens." },

      { type: 'heading', text: 'Step 1: Grow a Permission-Based List' },
      { type: 'list', items: [
        'Collect emails at checkout, booking, in store and through a simple signup form.',
        'Offer a reason to join: a guide, early access, a first-order offer or useful updates.',
        'Be clear about what people will receive and how often.',
        'Never buy lists; they damage deliverability and break consent rules in many countries.',
      ]},

      { type: 'heading', text: 'Step 2: Set Up Four Core Flows' },
      { type: 'table', headers: ['Flow', 'Trigger', 'Goal'], rows: [
        ['Welcome', 'Someone joins the list', 'Introduce the brand and the best first step'],
        ['Abandoned cart or follow-up', 'Cart or inquiry left unfinished', 'Bring them back to finish'],
        ['Post-purchase', 'An order or booking', 'Help them get value; ask for a review'],
        ['Win-back', 'No purchase in a set time', 'Remind and re-engage lapsed customers'],
      ]},
      { type: 'paragraph', text: "Flows run every day without you. For most small businesses and online stores, they are the highest-value emails you will set up." },

      { type: 'heading', text: 'Step 3: Plan Monthly Campaigns' },
      { type: 'list', items: [
        'Plan one to four campaigns a month around launches, seasons and useful content.',
        'Mix value and offers: guides, stories and news, not only discounts.',
        'Segment where it helps: new vs repeat customers, product interest, location.',
        'Keep one clear purpose and one main button per email.',
      ]},

      { type: 'heading', text: 'Email Campaign Examples' },
      { type: 'paragraph', text: "Examples below use fictional businesses to show the structure." },
      { type: 'table', headers: ['Campaign type', 'Example subject line', 'What is inside'], rows: [
        ['New product', 'Meet the cold brew kit you asked for', 'Product story, photo, one button'],
        ['How-to', '3 ways to make your plants last the winter', 'Useful tips, product mentioned once'],
        ['Customer story', 'How Dana fixed her morning routine', 'Short story with photo and quote'],
        ['Seasonal', 'Valentine\'s gifts that arrive by Friday', 'Gift guide, shipping deadline'],
        ['Last chance', 'Ends tonight: free grinder with subscription', 'Clear offer and end time'],
        ['Local business update', 'New Saturday hours and a spring offer', 'News, booking link'],
      ]},

      { type: 'heading', text: 'Step 4: Protect Deliverability' },
      { type: 'list', items: [
        'Authenticate your sending domain with SPF, DKIM and DMARC. Google and Yahoo require authentication from bulk senders.',
        'Include a clear, one-click unsubscribe; Google and Yahoo require it for bulk marketing email.',
        'Remove people who never engage after a reasonable time.',
        'Keep spam complaints low by only emailing people who asked to hear from you.',
      ]},

      { type: 'heading', text: 'Step 5: Measure What Matters' },
      { type: 'table', headers: ['Metric', 'Why'], rows: [
        ['Click rate', 'Shows real interest; more reliable than opens'],
        ['Revenue or bookings per email', 'Shows business impact'],
        ['Unsubscribe and spam complaint rate', 'Warns when content or frequency is off'],
        ['List growth', 'Shows whether signup forms work'],
      ]},
      { type: 'paragraph', text: "Treat open rates with caution: privacy features in some email apps, such as Apple Mail Privacy Protection, can record opens that did not happen." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Clara, Loraloop's email specialist, plans your email calendar, drafts campaigns and flows in your brand voice and builds them in Klaviyo or Mailchimp. Every email and flow waits for your approval before anything is sent." },

      { type: 'faq', items: [
        { q: 'What is an email marketing strategy?', a: 'A plan for who you email, what you send them, when and why: list growth, automated flows, regular campaigns and how you measure results.' },
        { q: 'How often should a small business send marketing emails?', a: 'Most do well with one to four campaigns a month plus automated flows. Consistency matters more than volume.' },
        { q: 'What are the most important email flows?', a: 'Welcome, abandoned cart or follow-up, post-purchase and win-back.' },
        { q: 'Why are my emails going to spam?', a: 'Common causes are missing domain authentication, emailing people who did not opt in, no easy unsubscribe and high complaint rates.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your email campaigns and flows in Klaviyo or Mailchimp, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['ai-email-marketing-for-small-businesses-campaigns-newsletters-and-flows', 'after-black-friday-retention-plan-shopify', 'free-trial-to-paid-conversion', 'valentines-day-marketing-ideas'],
  },

  // "marketing report example" US 210 / UK 50 / CA 30; "marketing report template" US 110
  {
    id: 221,
    slug: 'marketing-report-template',
    title: 'Marketing Report Template and Example: What to Include Each Month',
    seoTitle: 'Marketing Report Template and Example: What to Include Each Month',
    description: 'A simple monthly marketing report template with an example: a one-line summary, results against goals, performance by channel, what worked, what did not and next month\'s decisions. Built for small teams and agencies.',
    category: 'Business',
    date: publishDate,
    imageIndex: 221,
    tableOfContents: [
      'The Short Answer',
      'The Monthly Marketing Report Template',
      'Marketing Report Example',
      'Metrics to Include by Channel',
      'Writing the Report So People Read It',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most marketing reports are too long and say too little. Leaders and clients want three things: did we hit the goal, why, and what are we doing next. A good report answers those on the first page and keeps the detail below." },
      { type: 'callout', text: "Quick answer: A monthly marketing report should open with a one-line summary, show results against the goals you set, break performance down by channel, explain what worked and what did not, and end with the decisions for next month. Keep the first page short enough to read in two minutes." },

      { type: 'heading', text: 'The Monthly Marketing Report Template' },
      { type: 'numbered-list', items: [
        'Summary: one or two sentences on the month\'s result and the main reason.',
        'Goals vs results: each goal, the target, the actual and the difference.',
        'Performance by channel: spend, results and cost per result for each.',
        'What worked: the two or three things that drove results, with evidence.',
        'What did not: what underperformed and why you think so.',
        'Decisions for next month: what you will keep, stop, start and test.',
        'Appendix: detailed tables for anyone who wants them.',
      ]},

      { type: 'heading', text: 'Marketing Report Example' },
      { type: 'paragraph', text: "This example uses a fictional online store and made-up numbers to show the format." },
      { type: 'table', headers: ['Section', 'Example'], rows: [
        ['Summary', 'Revenue from marketing grew this month, driven by the new welcome email flow; Meta ad costs rose in the last week.'],
        ['Goal: 150 new customers', 'Actual 162, ahead of target'],
        ['Goal: cost per new customer under $30', 'Actual $33, above target because of higher ad costs late in the month'],
        ['What worked', 'Welcome flow converted new subscribers; two customer-review ads beat the rest'],
        ['What did not', 'Product-only image ads fatigued after two weeks'],
        ['Next month', 'Add three new review-style ads, test a win-back flow, pause the weakest ad set'],
      ]},

      { type: 'heading', text: 'Metrics to Include by Channel' },
      { type: 'table', headers: ['Channel', 'Core metrics'], rows: [
        ['Paid social (Meta, TikTok)', 'Spend, results, cost per result, ROAS, frequency'],
        ['Google Ads', 'Spend, conversions, cost per conversion, top search terms'],
        ['Email', 'Revenue or bookings, click rate, list growth, unsubscribes'],
        ['SEO and content', 'Organic sessions, leads from organic, top pages, mentions in AI answers'],
        ['Social (organic)', 'Messages, link clicks, saves and shares'],
        ['Overall', 'New customers, cost per new customer, revenue from marketing'],
      ]},

      { type: 'heading', text: 'Writing the Report So People Read It' },
      { type: 'list', items: [
        'Lead with the answer, then the evidence.',
        'Compare against goals and last month, not just raw numbers.',
        'Explain changes in plain words; avoid unexplained jargon.',
        'Keep the decisions specific: who does what by when.',
        'Use the same template every month so changes are easy to spot.',
      ]},
      { type: 'paragraph', text: "Agencies can use the same structure per client, with one extra section on work delivered this month." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop pulls results from your ad accounts, analytics and email tools into a weekly and monthly report in this format, with the summary written in plain words. You review the report before it is sent to your team or clients, and any recommended change waits for your approval." },

      { type: 'faq', items: [
        { q: 'What should a marketing report include?', a: 'A short summary, results against goals, performance by channel, what worked and what did not, and decisions for next month.' },
        { q: 'How long should a monthly marketing report be?', a: 'One page for the summary and decisions, with detailed tables in an appendix.' },
        { q: 'What is the most important marketing metric?', a: 'Usually new customers and what each cost, tied to revenue. Channel metrics explain why those moved.' },
        { q: 'How often should I report on marketing?', a: 'A short weekly check for the team and a fuller monthly report for leaders or clients works for most small teams.' },
      ]},
      { type: 'cta', text: 'Loraloop builds your weekly and monthly marketing report automatically, and you review it before anyone else sees it.' },
    ],
    relatedSlugs: ['automated-marketing-reporting-small-business', 'meta-ads-client-reporting-agency-template', 'year-end-client-report-template-agencies', 'best-marketing-reporting-tools-small-teams-2026'],
  },
];
