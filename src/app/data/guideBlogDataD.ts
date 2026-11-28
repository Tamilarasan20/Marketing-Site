import type { BlogPost } from './blogData';

// Long-form guides batch D (rewritten November 28, 2026): ids 197, 199, 201, 203, 205, 206.
// Research per post: Google results, People Also Ask and related searches (Treg -> cloro Google SERP, US,
// Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP, cited with source and date where returned) and
// official sources for legal and platform facts (FTC, FCC, Google, Meta, Shopify). Statistics that appeared
// only in AI Overviews or vendor pages were left out. Worked examples are labelled as illustrative.
// This is general information, not legal advice.
const publishDate = 'November 28, 2026';

export const guideBlogPostsD: BlogPost[] = [
  // "how to get first customers" / first SaaS customers
  {
    id: 197,
    slug: 'how-to-get-first-customers-saas',
    title: 'How to Get Your First SaaS Customers (Without an Audience)',
    seoTitle: 'How to Get Your First SaaS Customers Without an Audience (2027 Guide)',
    description: 'A step-by-step plan to get your first 10 to 100 SaaS customers with no audience: pick a buyer you can name, have one-to-one conversations, give before you ask, charge from day one, use communities and partnerships, and know which signals mean it is working.',
    category: 'Business',
    date: publishDate,
    imageIndex: 197,
    tableOfContents: [
      'The Short Answer',
      'Why the First Customers Come From Conversations',
      'Step 1: Pick One Buyer You Can Name',
      'Step 2: Start With People You Can Reach',
      'Step 3: Give Before You Ask',
      'Step 4: Go Where Your Buyers Gather',
      'Step 5: Charge From Day One',
      'Step 6: Sell the Outcome',
      'Step 7: Turn Early Customers Into Proof and Referrals',
      'Step 8: Add Repeatable Channels',
      'Your First 100 Customers: A 90-Day Plan',
      'Signals That It Is Working',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most founders imagine the first customers arriving from a launch day. In practice they come from a few hundred direct, unscalable conversations with a narrow group of people who have the problem today. You do not need an audience for that. Nevo David, founder of Postiz, notes that most successful founders do not have one (Nevo David on X, 28 Nov 2025)." },
      { type: 'callout', text: "Quick answer: To get your first SaaS customers, choose one buyer type you can list by name, contact people you can already reach, offer something genuinely useful before you pitch, show up where those buyers gather, charge from the first customer, describe the outcome rather than the features, and turn every early customer into a case study and a referral." },

      { type: 'heading', text: 'Why the First Customers Come From Conversations' },
      { type: 'list', items: [
        'You learn the exact words buyers use for the problem, which becomes your marketing copy.',
        'You find out what stops them buying, which becomes your roadmap.',
        'Early buyers forgive rough edges if you are responsive; strangers from ads do not.',
        'Ads and SEO need a proven message and conversion data you do not have yet.',
      ]},

      { type: 'heading', text: 'Step 1: Pick One Buyer You Can Name' },
      { type: 'paragraph', text: "\"Small businesses\" is not a buyer. \"Shopify skincare brands doing $20K-$200K a month\" is. A narrow buyer tells you where to look and what to say. Narrow by audience, not by market size: Nevo's example is that a CMS for doctors is more relevant to a doctor than a generic CMS, as long as there are enough doctors to sell to (source: \"How to Choose a Startup Idea in 2026\", X article)." },
      { type: 'list', items: [
        'Write one sentence: who they are, what they sell, what is going wrong now.',
        'Check you can list at least a few hundred of them by name.',
        'Check they already pay for something to solve the problem, even badly.',
      ]},

      { type: 'heading', text: 'Step 2: Start With People You Can Reach' },
      { type: 'numbered-list', items: [
        'List 10 to 20 warm contacts who fit, or who know people who fit.',
        'Ask for a 20-minute conversation about the problem, not a demo.',
        'Ask each person for two introductions.',
        'Build a list of 100 more good-fit prospects from directories, communities and tools they use.',
      ]},

      { type: 'heading', text: 'Step 3: Give Before You Ask' },
      { type: 'paragraph', text: "With no audience, lead with value. Nevo's method: build a free lead magnet first, then send a humble email that offers only that value, from a separate warmed-up domain (source: \"Outbound-to-Inbound Cold Outreach for Open-Source Developers\", YouTube, May 2024). His free lifetime deals to community owners in exchange for templates and videos coincided with revenue doubling \"from $6K MRR to $12K MRR\" in a month (source: \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X article)." },
      { type: 'table', headers: ['Give', 'Example'], rows: [
        ['A free tool or template', 'A calculator or checklist your buyer uses weekly'],
        ['A free audit', 'A short review of their current setup with three fixes'],
        ['Free access for a community', 'Lifetime or extended access for a group\'s members'],
        ['A feature', 'A spot in your newsletter, a backlink, an introduction'],
      ]},
      { type: 'paragraph', text: "If you trade free access for reviews or videos, the people posting must disclose that connection under the FTC's Endorsement Guides and similar rules in the UK and Canada." },

      { type: 'heading', text: 'Step 4: Go Where Your Buyers Gather' },
      { type: 'table', headers: ['Place', 'How to show up'], rows: [
        ['Slack, Discord, Skool and Circle groups', 'Answer questions in detail; message owners with an offer for members'],
        ['Subreddits', 'Share full workflows that use several tools, following each subreddit\'s rules'],
        ['LinkedIn', 'Post practical lessons; message people who match your buyer'],
        ['Paid communities', 'Nevo joined several (such as Small Bets, Starter Story and Growth Mentor) to build relationships first'],
        ['Integration marketplaces', 'List your app where your buyers already shop for tools'],
      ]},

      { type: 'heading', text: 'Step 5: Charge From Day One' },
      { type: 'paragraph', text: "Nevo is blunt: \"10 paying customers will teach you more than 100 free users ever will.\" Free users tend to request more free features and keep refusing to pay (Nevo David on X, Mar 2026). Offer a paid pilot or founding-customer price, publish a pricing page even if you are not charging yet, and do not compete on being cheapest." },

      { type: 'heading', text: 'Step 6: Sell the Outcome' },
      { type: 'paragraph', text: "Early buyers buy a result they can picture: more booked calls, fewer hours on reports, a lower cost per sale. Describe the product as the way to that result and show one example, even if it is your own business. Our guide to features vs benefits shows how to rewrite a feature list into outcome copy." },

      { type: 'heading', text: 'Step 7: Turn Early Customers Into Proof and Referrals' },
      { type: 'list', items: [
        'Write a short case study for each early customer: starting point, what changed, a quote.',
        'Ask happy customers for one introduction each.',
        'Ask how they would describe your product to a peer, and use their words.',
        'Ask every new signup how they found you.',
      ]},

      { type: 'heading', text: 'Step 8: Add Repeatable Channels' },
      { type: 'list', items: [
        'Content that answers the questions buyers search for, written from what you learned in conversations.',
        'A newsletter fed by a lead magnet; Nevo reports lead magnets bringing "around 10 newsletter subscribers per day" (source: "Getting Around 10 Newsletter Subscribers a Day with Lead Magnets", YouTube, May 2024).',
        'Small, tracked paid tests once your message converts.',
        'Partnerships and integrations with tools your buyers already use.',
      ]},
      { type: 'paragraph', text: "Keep building and selling in balance; Nevo suggests splitting effort \"50% toward marketing and 50% toward product\" (Nevo David on X, Mar 2026)." },

      { type: 'heading', text: 'Your First 100 Customers: A 90-Day Plan' },
      { type: 'table', headers: ['Weeks', 'Focus'], rows: [
        ['1-2', 'Define the buyer; 20 conversations with warm contacts; write down their words'],
        ['3-4', 'Build a free offer; set up a separate outreach domain; list 100 prospects'],
        ['5-8', 'Give-first outreach and community answers every week; paid pilots'],
        ['9-10', 'Case studies and referral asks; fix what blocks buying'],
        ['11-13', 'Content from real questions; first small paid test; review which channel brought customers'],
      ]},

      { type: 'heading', text: 'Signals That It Is Working' },
      { type: 'list', items: [
        'People reply to outreach and ask follow-up questions.',
        'Prospects describe the problem in the same words, unprompted.',
        'Some people pay without a discount.',
        'Customers use the product weekly and refer others.',
        'You can say which channel brought each customer.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop handles the marketing around your founder-led sales: it drafts LinkedIn posts, articles and newsletters in your voice, turns customer stories into case studies and reports which channels bring signups each week. The conversations stay yours, and every post and email waits for your approval." },

      { type: 'faq', items: [
        { q: 'How do I get my first 100 customers?', a: 'Through direct conversations with a narrow buyer, give-first outreach, community participation, charging early and turning each customer into a case study and referral, then adding content and small paid tests.' },
        { q: 'What is the 3-3-2-2-2 rule of SaaS?', a: 'A growth path rather than a sales tactic: triple annual recurring revenue for two years, then double it for three (often called T2D3). It is a benchmark for venture-backed companies.' },
        { q: 'What is the rule of 40 in SaaS?', a: 'A guideline that revenue growth rate plus profit margin should be at least 40%. It matters later; for first customers, focus on conversations and retention.' },
        { q: 'Should I offer my product free to get first users?', a: 'Offer a free resource or a time-limited trial, but charge early. Paying customers give clearer signals than free users.' },
        { q: 'Do I need an audience to sell SaaS?', a: 'No. Direct outreach to a narrow buyer with a useful offer works before you have followers.' },
        { q: 'When should I start paid ads?', a: 'Once your message converts in conversations and on your site, and you know what a customer is worth.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts the posts, articles and emails that warm up your buyers, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['cold-outreach-that-gets-replies', 'sell-outcomes-not-features', 'saas-pricing-to-acquire-customers', 'free-trial-to-paid-conversion'],
  },

  // "free trial to paid conversion" / "trial to paid conversion rate"
  {
    id: 199,
    slug: 'free-trial-to-paid-conversion',
    title: 'Free Trial to Paid Conversion: How to Turn Trial Users Into Customers',
    seoTitle: 'Free Trial to Paid Conversion: Rate, Formula and How to Improve It (2027)',
    description: 'How to measure and raise SaaS free trial to paid conversion: the formula, card vs no-card trials vs freemium, what happens before signup, checkout, onboarding to a first result, trial emails, fraud filters, cancellation saves and the rules on auto-renewal.',
    category: 'Business',
    date: publishDate,
    imageIndex: 199,
    tableOfContents: [
      'The Short Answer',
      'How to Calculate Trial to Paid Conversion',
      'Why Benchmarks Mislead',
      'Free Tier, No-Card Trial or Card Trial?',
      'Fix What Happens Before Signup',
      'Put Plans and Payment on One Page',
      'Get Users to a First Result',
      'Trial Emails That Convert',
      'Filter Out Fake Trials',
      'Save Cancellations',
      'Measure by Cohort and Customer Type',
      'Rules on Trials and Auto-Renewal',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "More traffic is the expensive way to grow a SaaS business. Converting more of the trials you already get is the cheap one. Nevo David reports that Postiz grew monthly revenue \"from $15,000 to $18,000 without additional traffic\" by improving trial conversion (source: \"How Postiz Increased Monthly Revenue From $15K to $18K Without Additional Traffic\", X post, 30 Jan 2026). This guide covers every lever, in the order users meet them." },
      { type: 'callout', text: "Quick answer: Trial to paid conversion = paying customers from a trial cohort / trials started in that cohort x 100. To raise it, choose the trial model that fits your buyer, show the outcome before signup, keep plan choice and payment on one page, push every user to a first result in their first session, send behavior-based trial emails, filter fake signups, offer a save before cancellation and measure by cohort." },

      { type: 'heading', text: 'How to Calculate Trial to Paid Conversion' },
      { type: 'table', headers: ['Step', 'Example (illustrative)'], rows: [
        ['Pick a cohort', 'Trials started in March'],
        ['Count trials in the cohort', '1,000'],
        ['Count those who became paying customers', '150'],
        ['Divide and multiply by 100', '150 / 1,000 x 100 = 15%'],
      ]},
      { type: 'paragraph', text: "Measure by start-date cohort, not by calendar month, and decide whether a failed first charge counts as converted (it should not)." },

      { type: 'heading', text: 'Why Benchmarks Mislead' },
      { type: 'paragraph', text: "Published \"good conversion rates\" vary enormously because they mix card-required trials, no-card trials and freemium, different price points and different buyers. Compare yourself with your own previous cohorts. For context, Nevo reports 45% trial-to-paid at Postiz with a card-required trial and a $1 verification charge (Nevo David on X, 12 Sep 2026), and earlier warned that only about 30% of completed card-required trials may convert because some cards are virtual or empty (Nevo David on X, 28 Nov 2025)." },

      { type: 'heading', text: 'Free Tier, No-Card Trial or Card Trial?' },
      { type: 'table', headers: ['Model', 'What happens', 'Best for'], rows: [
        ['Freemium', 'Many signups; few upgrade; users can stay free indefinitely', 'Reach, word of mouth, an email list'],
        ['Trial without a card', 'Users must actively decide to pay', 'Products that need time to show value'],
        ['Trial with a card', 'Fewer signups, more paying users; users must actively cancel', 'Products that show value within days'],
      ]},
      { type: 'paragraph', text: "Nevo summarizes the trade-off: with \"start free\" you must later persuade users to start paying; with \"start a trial\" the job becomes preventing cancellation (Nevo David on X, 6 May 2026). He adds that card-upfront trials control costs, filter for serious users and create urgency, but bring higher paid churn because less motivated users also enter (Nevo David on X, 12-13 Aug 2026)." },

      { type: 'heading', text: 'Fix What Happens Before Signup' },
      { type: 'list', items: [
        'Show the outcome, not a product tour: Postiz added a homepage video demonstrating what users can achieve.',
        'Make the headline about the result and who it is for.',
        'Put proof near the signup button: customer logos, short testimonials, real examples.',
        'Say clearly what happens when the trial ends.',
      ]},

      { type: 'heading', text: 'Put Plans and Payment on One Page' },
      { type: 'paragraph', text: "Many SaaS products show plans on one page and send users to a separate checkout. Postiz moved plan choice and payment onto one page with an embedded payment form, which left room for trust signals beside the card field, and added an automatically applied \"20% discount coupon\" to create urgency (source: Nevo David, X post, 30 Jan 2026). Check your payment provider's documentation for the compliance requirements of embedded payment forms." },

      { type: 'heading', text: 'Get Users to a First Result' },
      { type: 'numbered-list', items: [
        'Define the first result: the one action that shows the product working.',
        'Make onboarding push to that result, not to settings. Postiz changed onboarding from connecting a channel to scheduling a first post.',
        'Offer templates so the first result takes minutes.',
        'Remove every step that is not needed before the first result.',
        'Track the share of trials reaching the first result; it is your leading indicator.',
      ]},

      { type: 'heading', text: 'Trial Emails That Convert' },
      { type: 'table', headers: ['Trigger', 'Email'], rows: [
        ['Signup', 'Welcome and the one first step'],
        ['No first result after a day', 'A template or short video that gets them there'],
        ['First result reached', 'The next step that builds the habit'],
        ['Inactive for several days', 'A specific nudge with help on offer'],
        ['A few days before the trial ends', 'What they set up, what they will lose, plan options'],
        ['Trial ended without paying', 'A short question about why, and an easy way back'],
      ]},

      { type: 'heading', text: 'Filter Out Fake Trials' },
      { type: 'list', items: [
        'Require a card, or a small refundable verification charge; Postiz uses a "$1 verification charge".',
        'Block reuse of the same account, card or connected profile across trials.',
        'Watch for card-testing patterns and follow your payment provider\'s guidance.',
        'Treat card trials as uncertain pipeline until the first charge succeeds.',
      ]},

      { type: 'heading', text: 'Save Cancellations' },
      { type: 'paragraph', text: "Ask why people cancel, and offer a relevant save: a pause, a smaller plan, help with setup, or a discount for customers who have paid at least once. Nevo describes offering \"50% off the next three months\" as a cancellation deal (Nevo David on X, Nov 2025). Keep cancellation itself easy; saves must not become obstacles." },

      { type: 'heading', text: 'Measure by Cohort and Customer Type' },
      { type: 'table', headers: ['Cut', 'Question it answers'], rows: [
        ['By acquisition channel', 'Which sources bring trials that pay?'],
        ['By customer type', 'Which buyers convert and stay?'],
        ['By first result reached', 'How much does onboarding drive conversion?'],
        ['By plan chosen', 'Is the entry plan priced to convert?'],
      ]},
      { type: 'paragraph', text: "Nevo applies the same idea to churn: filter it to your ideal customer profile and improve that number first (Nevo David on X, Oct 2026)." },

      { type: 'heading', text: 'Rules on Trials and Auto-Renewal' },
      { type: 'list', items: [
        'US: the Restore Online Shoppers\' Confidence Act (ROSCA) requires clear disclosure of terms before collecting billing information, express informed consent and a simple way to cancel (ftc.gov). Check the current status of the FTC\'s negative-option rules.',
        'Several US states, including California, have automatic-renewal laws with reminder and cancellation requirements.',
        'UK: subscription contract rules under the Digital Markets, Competition and Consumers Act are being phased in; check gov.uk for timing.',
        'Canada: provincial consumer protection rules apply to renewals.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts your trial email sequence, landing page copy and customer stories that move users to a first result, and builds Klaviyo or Mailchimp flows from welcome to win-back. Its weekly report shows which channels bring trials that convert. Every email, page change and flow waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is trial to paid conversion rate?', a: 'The share of users who start a trial and become paying customers, measured by start-date cohort.' },
        { q: 'What is a good trial conversion rate?', a: 'It depends heavily on whether you require a card, your price and your buyer. Compare against your own past cohorts and improve month over month.' },
        { q: 'What is a good freemium conversion rate?', a: 'Freemium usually converts a much smaller share than trials, because users can stay free. Judge it by revenue per signup and by the reach it brings.' },
        { q: 'Should I require a credit card for a trial?', a: 'Require one if your product shows value within the trial and you want fewer, more serious users. Skip it if buyers need longer to see value.' },
        { q: 'How long should a trial be?', a: 'Long enough for a typical user to reach a first real result; shorter trials create urgency.' },
        { q: 'Do checkout discounts help conversion?', a: 'A small, clearly time-limited discount can give people a reason to start now. Constant discounts teach buyers to wait.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your trial emails and onboarding flows from welcome to win-back, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['saas-pricing-to-acquire-customers', 'how-to-get-first-customers-saas', 'saas-black-friday-trials-churn', 'sell-outcomes-not-features'],
  },

  // "how to get clients for marketing agency"
  {
    id: 201,
    slug: 'how-to-get-clients-for-marketing-agency',
    title: 'How to Get Clients for a Marketing Agency: A Complete Playbook',
    seoTitle: 'How to Get Clients for a Marketing Agency: First Clients to Steady Growth',
    description: 'How marketing agencies get clients, from the first one to steady growth: pick a niche, package an audit or pilot, run give-first outreach on email and LinkedIn, build referrals and partnerships, publish case studies, use communities and add paid channels later.',
    category: 'Business',
    date: publishDate,
    imageIndex: 201,
    tableOfContents: [
      'The Short Answer',
      'Your First Client vs Your Next Ten',
      'Step 1: Pick a Niche You Can Prove Results In',
      'Step 2: Package an Easy First Offer',
      'Step 3: Give-First Outreach on Email and LinkedIn',
      'Step 4: Referrals and Partnerships',
      'Step 5: Case Studies That Sell',
      'Step 6: Show Up in Communities',
      'Step 7: Content and SEO for Inbound Leads',
      'Step 8: Paid Channels, Once the Offer Works',
      'Qualify, Propose and Close',
      'Timing: Use December to Fill January',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most agencies grow by referral until referrals slow down, then scramble. Steady client flow comes from a system: a niche where you can prove results, an offer that is easy to say yes to, outreach that gives before it asks, and proof you can show any prospect." },
      { type: 'callout', text: "Quick answer: Agencies get clients by choosing a niche where they can prove results, offering a free audit or a small paid pilot, reaching out to a short list of good-fit businesses with a specific, useful observation instead of a pitch, asking every happy client for referrals, partnering with businesses that serve the same clients, publishing case studies with real numbers, and adding paid channels only once the offer converts." },

      { type: 'heading', text: 'Your First Client vs Your Next Ten' },
      { type: 'table', headers: ['Stage', 'What works best'], rows: [
        ['First client', 'Your network, one strong niche offer, a discounted or fixed-price pilot in exchange for a case study'],
        ['Clients 2-10', 'Referrals, targeted outreach with an audit, partnerships, case studies'],
        ['Beyond 10', 'Content and SEO, community presence, events, paid channels with proven offers'],
      ]},

      { type: 'heading', text: 'Step 1: Pick a Niche You Can Prove Results In' },
      { type: 'paragraph', text: "\"Full-service digital agency\" competes with everyone. \"Meta ads for Shopify supplement brands\" competes with few. A niche lets you reuse case studies, write sharper outreach and charge more. Nevo David, founder of Postiz, recommends finding a distinct niche to enter a saturated market (Nevo David on X, 10 Jul 2026)." },

      { type: 'heading', text: 'Step 2: Package an Easy First Offer' },
      { type: 'table', headers: ['Offer', 'Why it works'], rows: [
        ['Free audit of one channel with three fixes and the money at stake', 'Low risk; shows your thinking'],
        ['Fixed-price 30-day pilot', 'Clear scope and end date; leads into a retainer'],
        ['Strategy session with a written plan', 'Paid, quick, and valuable on its own'],
      ]},

      { type: 'heading', text: 'Step 3: Give-First Outreach on Email and LinkedIn' },
      { type: 'paragraph', text: "Agency outreach usually opens with \"we can improve your conversion rate\", which Nevo notes people ignore; they answer messages that bring them something and ask for little (source: Alex is Building interview with Nevo David, X). Open with a specific observation about their ads or site and offer the audit." },
      { type: 'list', items: [
        'Build a list of businesses in your niche; enrich it with company size and where the decision-maker is active.',
        'LinkedIn is Nevo\'s top outreach recommendation; email alone can feel impersonal (source: "Getting Discovery Calls and Leads from Self-Serve Open-Source Users", gitroom.com blog).',
        'Use a separate, warmed-up email domain so spam reports never touch your main domain.',
        'Follow the rules where recipients are: CAN-SPAM (US), PECR (UK), CASL (Canada).',
        'Follow up with new value, not "just checking in".',
      ]},

      { type: 'heading', text: 'Step 4: Referrals and Partnerships' },
      { type: 'list', items: [
        'Ask every happy client for an introduction at the moment of a visible result.',
        'Partner with web developers, designers, consultants and software vendors your clients use.',
        'Offer partners something useful: referrals back, co-hosted workshops, a share of revenue where allowed.',
        'Thank referrers properly, and track where every new client came from.',
      ]},

      { type: 'heading', text: 'Step 5: Case Studies That Sell' },
      { type: 'list', items: [
        'One page per client: who they are, the starting point, what you changed, what happened, over what period.',
        'Real numbers with the client\'s permission; avoid implying the result is typical if it is not (FTC Endorsement Guides).',
        'A quote in the client\'s words.',
        'Use them in outreach, on niche pages and in proposals.',
      ]},

      { type: 'heading', text: 'Step 6: Show Up in Communities' },
      { type: 'paragraph', text: "Your clients gather somewhere: Slack and Discord groups, Skool and Circle communities, LinkedIn groups, industry forums. Answer questions in detail and be useful long before you mention your agency. Remember that most members read rather than post; a helpful answer reaches far more people than the ones who reply." },

      { type: 'heading', text: 'Step 7: Content and SEO for Inbound Leads' },
      { type: 'list', items: [
        'Publish practical breakdowns on LinkedIn that show how you think.',
        'Create niche pages on your site ("Meta ads for supplement brands") with case studies.',
        'Answer the questions your niche searches for in articles.',
        'Keep your agency described consistently in directories so search engines and AI assistants describe you correctly.',
      ]},

      { type: 'heading', text: 'Step 8: Paid Channels, Once the Offer Works' },
      { type: 'paragraph', text: "Ads can bring agency clients once your niche offer converts in outreach and on your site. Start with one campaign to the audit or pilot, measure cost per qualified call, and stop if it does not beat your outreach and referrals." },

      { type: 'heading', text: 'Qualify, Propose and Close' },
      { type: 'numbered-list', items: [
        'Use a short form: company, role, problem, budget range, timing.',
        'On the call, spend most of the time on their problem and the result they want.',
        'Send a short proposal within a day: result, plan, price, start date.',
        'Follow up after two days and after a week with something useful.',
        'Start with the pilot or audit if they hesitate on a retainer.',
      ]},

      { type: 'heading', text: 'Timing: Use December to Fill January' },
      { type: 'paragraph', text: "Brands review holiday results and plan the new year in December. Offer a short review of how their holiday campaigns performed, with three fixes for January, before the holiday break, and follow up in the first week of January with a fixed-scope first-quarter package." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop gives each client its own workspace with its brand voice, connected accounts, approvals and reports, so your team can take on new clients without hiring for each one. It also runs the free Meta ads audit you can use as an entry offer and drafts your agency's own LinkedIn posts and case studies. Every change, post and report waits for approval by your team or the client." },

      { type: 'faq', items: [
        { q: 'How can I attract clients for my advertising agency?', a: 'Pick a niche, offer a free audit or pilot, reach out with specific observations, ask for referrals, partner with related businesses and publish case studies.' },
        { q: 'How do I get my first client as a marketing agency?', a: 'Start with your network and one niche offer, such as a fixed-price pilot in exchange for a case study.' },
        { q: 'How do I get my first 100 clients?', a: 'Combine outreach, referrals, partnerships and case studies until a few channels bring clients reliably, then add content and paid channels.' },
        { q: 'What is the 1% rule in marketing?', a: 'Usually the online participation rule of thumb: a small share of people create content, more engage, and most only read. It is a reminder that communities reach far more people than reply.' },
        { q: 'What is the 3-3-3 rule in marketing?', a: 'There is no single agreed definition. Focus on a clear niche, an easy first offer and consistent outreach.' },
        { q: 'Should agencies use cold email?', a: 'Yes, if it goes to a short, well-matched list with a useful offer and follows the law where recipients are.' },
      ]},
      { type: 'cta', text: 'Loraloop gives every client its own workspace and approvals, so you can add clients without hiring for each one.' },
    ],
    relatedSlugs: ['cold-outreach-that-gets-replies', 'client-acquisition', 'meta-ads-client-reporting-agency-template', 'ai-marketing-tools-for-agencies-scale-delivery'],
  },

  // "how to get customers on shopify" / growth without discounts
  {
    id: 203,
    slug: 'get-new-customers-shopify-without-discounts',
    title: 'How to Get Customers on Shopify Without Discounting',
    seoTitle: 'How to Get Customers on Shopify Without Discounts: 10 Ways That Work',
    description: 'How Shopify stores win new customers without training buyers to wait for sales: short-form video and creator content, offers that add value instead of cutting price, product pages that convert, search, email capture, paid ads to proven content and retention.',
    category: 'Business',
    date: publishDate,
    imageIndex: 203,
    tableOfContents: [
      'The Short Answer',
      'Why Constant Discounts Cost You',
      'Offers That Add Value Instead of Cutting Price',
      'Short-Form Video: The Volume Game',
      'Creators and UGC',
      'Product Pages That Convert',
      'Search: Google, Shopping and AI Answers',
      'Email and SMS Capture Without a Coupon',
      'Paid Ads on Content That Already Works',
      'Retention and Referrals',
      'What Sells Fast on Shopify',
      'Rules on Endorsements, Reviews and Texts',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most advice on getting Shopify customers starts with a discount code. It works once, then customers learn to wait for the next one and your margin pays for it. This guide covers the ways to win new customers that protect your price." },
      { type: 'callout', text: "Quick answer: Get Shopify customers without discounting by posting short-form video every day across several accounts, working with creators who show the product in use, offering bundles, gifts or guarantees instead of price cuts, building product pages that answer every question, appearing in Google Shopping and AI answers, capturing emails with useful content, spending ad money only on content that already performs, and turning buyers into repeat customers and referrers." },

      { type: 'heading', text: 'Why Constant Discounts Cost You' },
      { type: 'list', items: [
        'Margin: a 20% discount on a 40% gross margin product halves your profit per order.',
        'Expectation: customers who bought on discount wait for the next one.',
        'Brand: frequent sales signal that the full price is not the real price.',
        'Attribution: discounts mostly reward people who would have bought anyway.',
      ]},
      { type: 'paragraph', text: "Nevo David's advice for products in general applies here: do not compete by being the cheapest; compete on quality and the result the buyer gets (source: \"How Postiz Used Open Source... to Reach $20K MRR\", X article)." },

      { type: 'heading', text: 'Offers That Add Value Instead of Cutting Price' },
      { type: 'table', headers: ['Offer', 'Why it protects margin'], rows: [
        ['Bundle or kit', 'Raises order value; the customer sees savings without a lower unit price'],
        ['Free gift with purchase', 'Low-cost sample introduces another product'],
        ['Free shipping threshold', 'Lifts order size toward the threshold'],
        ['Guarantee or easy returns', 'Removes risk instead of lowering price'],
        ['Early access or limited edition', 'Rewards subscribers without discounting'],
        ['Donation tie-in', 'Gives a reason to buy now, such as on Giving Tuesday'],
      ]},

      { type: 'heading', text: 'Short-Form Video: The Volume Game' },
      { type: 'paragraph', text: "Short-form video on TikTok, Instagram Reels and YouTube Shorts is the cheapest way to reach new buyers, and it rewards volume. Nevo's distribution playbook: post one to two videos a day across about ten accounts, follow a simple structure (hook, outcome, how-to, call to action), and expect most videos to get a few hundred views; he reports one video passing 200K views after around 30 attempts (Nevo David on X, 7 Sep 2026). Recreating formats that already went viral in your niche, with your product, is a reliable starting point (Nevo David on X, 27 Nov 2025)." },
      { type: 'list', items: [
        'Show the product solving a problem in the first second.',
        'Use the questions customers ask as video topics.',
        'Reuse each video across all short-form platforms.',
        'Check each platform\'s rules on multiple accounts and reposted content.',
      ]},

      { type: 'heading', text: 'Creators and UGC' },
      { type: 'paragraph', text: "Pay small creators to make content showing the product in real use. Nevo's playbook budgets \"$20-$30\" per UGC video, which makes testing many hooks affordable (source: Distribution Playbook, Nevo's Brain). Use the best ones as organic posts and as ads through partnership ads. Every paid or gifted creator post needs a clear disclosure such as #ad under the FTC Endorsement Guides, UK CAP Code rules and Canada's Competition Bureau guidance." },

      { type: 'heading', text: 'Product Pages That Convert' },
      { type: 'list', items: [
        'A headline about the result, not only the product name.',
        'Photos and short videos of the product in use, including size and scale.',
        'Answers to the questions customers email you: fit, ingredients, delivery times, returns.',
        'Real reviews, including critical ones; never filter out negative reviews.',
        'Clear shipping costs and delivery dates before checkout.',
      ]},

      { type: 'heading', text: 'Search: Google, Shopping and AI Answers' },
      { type: 'list', items: [
        'Connect the Google & YouTube app so products can appear in free Shopping listings.',
        'Write product titles and descriptions with the words buyers search for.',
        'Publish buying guides and comparison articles that answer real questions.',
        'Keep product data (price, availability, reviews) accurate in structured data, which helps search engines and AI assistants describe your products correctly.',
      ]},

      { type: 'heading', text: 'Email and SMS Capture Without a Coupon' },
      { type: 'paragraph', text: "A \"10% off\" pop-up trains new subscribers to expect discounts. Offer something useful instead: a size guide, a recipe pack, a care guide, early access to drops or a quiz that recommends the right product. Nevo's comment-to-get lead magnets on Instagram work for this: people comment a keyword and receive the guide. For SMS, collect express written consent for marketing texts in the US (TCPA) and follow CASL and PECR elsewhere." },

      { type: 'heading', text: 'Paid Ads on Content That Already Works' },
      { type: 'paragraph', text: "Use organic video as free creative testing. When a post or creator video performs well organically, put ad budget behind it on Meta or TikTok. Start with a modest daily budget, measure cost per purchase against your margin, and scale only what stays profitable." },

      { type: 'heading', text: 'Retention and Referrals' },
      { type: 'list', items: [
        'A post-purchase email series that helps customers use the product well.',
        'A replenishment reminder timed to when the product runs out.',
        'A referral program that rewards both sides with credit or a gift.',
        'A review request after delivery, sent to every customer, not only happy ones.',
      ]},

      { type: 'heading', text: 'What Sells Fast on Shopify' },
      { type: 'paragraph', text: "Products that show a visible result on video, solve a specific problem and are bought repeatedly tend to grow fastest: skincare, supplements, pet products, home and kitchen tools, and niche hobby gear. What sells fast for you depends on the audience you can reach and the margin left after ads, shipping and returns." },

      { type: 'heading', text: 'Rules on Endorsements, Reviews and Texts' },
      { type: 'list', items: [
        'Creator and affiliate posts need clear disclosure (FTC Endorsement Guides; UK CAP Code; Canada Competition Bureau).',
        'The FTC rule on fake reviews and testimonials bans buying fake reviews and suppressing negative ones.',
        'Marketing texts in the US need prior express written consent under the TCPA.',
        'Shopify fees depend on your plan and payment method; check shopify.com/pricing for current rates.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify and drafts the short-form scripts, captions, product page copy and Klaviyo flows covered above, then reports which posts and ads bring orders. It can spot the organic posts worth promoting and propose a budget for them. Every post, email and ad change waits for your approval." },

      { type: 'faq', items: [
        { q: 'How do I get customers on Shopify without paying for ads?', a: 'Post short-form video every day, work with small creators, appear in free Google Shopping listings, publish buying guides and collect emails with useful content.' },
        { q: 'How much does Shopify take from a $100 sale?', a: 'It depends on your plan and payment method, because payment processing rates differ by plan and by whether you use Shopify Payments. Check shopify.com/pricing for current rates.' },
        { q: 'Is Shopify still worth it in 2026?', a: 'For most small online stores, yes: it handles checkout, payments, apps and sales channels. Compare total monthly cost, including apps, with your expected sales.' },
        { q: 'What sells fast on Shopify?', a: 'Products that show a result on video, solve a clear problem and are bought repeatedly, such as skincare, supplements and pet products.' },
        { q: 'Can I hire someone to set up my Shopify store?', a: 'Yes. Shopify lists vetted Partners, and many freelancers offer setup. Agree the scope, the apps and who owns the accounts in writing.' },
        { q: 'Should I ever run discounts?', a: 'Occasionally, at planned moments such as Black Friday, with a clear end date. Use value offers the rest of the year.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your videos, product pages and email flows from your Shopify data, and nothing goes live until you approve it.' },
    ],
    relatedSlugs: ['creator-ugc-partnerships-dtc-brands', 'facebook-ads-for-small-business', 'email-marketing-strategy', 'how-much-do-facebook-ads-cost'],
  },

  // "how to get more customers for local business"
  {
    id: 205,
    slug: 'get-more-customers-local-business',
    title: 'How to Get More Customers for a Local Business',
    seoTitle: 'How to Get More Customers for a Local Business: 12 Practical Ways',
    description: 'Practical ways for a local business to get more customers: Google Business Profile, reviews, local search, referrals, partnerships with nearby businesses, community events, social media, email and text, local ads and follow-up, plus the rules on reviews and texts.',
    category: 'Business',
    date: publishDate,
    imageIndex: 205,
    tableOfContents: [
      'The Short Answer',
      'Start Where Local Customers Search',
      'Build a Steady Flow of Reviews',
      'Make Your Website Answer Local Questions',
      'Referral Programs That Work',
      'Partner With Nearby Businesses',
      'Show Up in the Community',
      'Social Media for Local Reach',
      'Email and Text for Repeat Visits',
      'Local Ads, Once the Basics Work',
      'Follow Up on Every Inquiry',
      'Rules on Reviews, Referrals and Texts',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Local customers usually find a business in one of three ways: a Google search or map, a recommendation from someone they trust, or seeing the business in their neighborhood. The plan below strengthens all three and makes sure no inquiry goes unanswered." },
      { type: 'callout', text: "Quick answer: Get more local customers by completing your Google Business Profile, asking every customer for a review, making your website answer local questions, rewarding referrals, partnering with nearby businesses, showing up at community events, posting useful local content, keeping in touch by email and text with consent, adding local ads once the basics work, and replying to every inquiry quickly." },

      { type: 'heading', text: 'Start Where Local Customers Search' },
      { type: 'numbered-list', items: [
        'Claim and verify your Google Business Profile.',
        'Choose the most accurate primary category and add services with prices where possible.',
        'Add real photos of your work, team and premises, and update them monthly.',
        'Keep hours, holiday hours, phone and booking link correct.',
        'Post offers, events and updates on the profile.',
        'Keep your name, address and phone the same on Apple Maps, Bing, Yelp and directories.',
      ]},

      { type: 'heading', text: 'Build a Steady Flow of Reviews' },
      { type: 'list', items: [
        'Ask every customer, by text or email with a direct review link, soon after the visit.',
        'Reply to every review, positive or negative, politely and specifically.',
        'Do not offer rewards for reviews and do not ask only happy customers; Google\'s policies prohibit both.',
        'Note that Yelp asks businesses not to request reviews at all.',
      ]},
      { type: 'paragraph', text: "Our guide on how to get more Google reviews covers request templates and timing." },

      { type: 'heading', text: 'Make Your Website Answer Local Questions' },
      { type: 'list', items: [
        'One page per service, with the areas you serve, prices or price ranges and photos.',
        'Clear phone number and booking button on every page.',
        'Answers to common questions: how long it takes, what it costs, what to expect.',
        'Fast loading on phones, where most local searches happen.',
      ]},

      { type: 'heading', text: 'Referral Programs That Work' },
      { type: 'paragraph', text: "Happy customers already recommend you; a referral program reminds them to. Keep it simple: a credit or gift for the referrer and a welcome offer for the friend. Nevo David describes a points system for an event (one point for each friend who joins, capped at five people), which helped bring around 5,000 participants in one month (source: gitroom.com blog). The same principles apply locally: a small reward, a clear limit and easy tracking." },
      { type: 'list', items: [
        'Give each customer a card or link to share.',
        'Ask at the moment of a visible result.',
        'Thank referrers personally.',
        'Check rules in regulated fields: referral fees are restricted in real estate settlement services (RESPA), legal and some healthcare services.',
      ]},

      { type: 'heading', text: 'Partner With Nearby Businesses' },
      { type: 'table', headers: ['Your business', 'Good partners'], rows: [
        ['Gym or yoga studio', 'Physical therapists, health food stores, sportswear shops'],
        ['Hair or beauty salon', 'Wedding planners, photographers, boutiques'],
        ['Cleaning service', 'Real estate agents, property managers, moving companies'],
        ['Restaurant or cafe', 'Offices, event venues, local producers'],
      ]},
      { type: 'paragraph', text: "Swap referrals, run joint offers, share window space or co-host a small event." },

      { type: 'heading', text: 'Show Up in the Community' },
      { type: 'list', items: [
        'Sponsor or attend local events, school fundraisers and markets.',
        'Run a workshop or open day related to what you do.',
        'Join local business groups and neighborhood online groups, and be helpful.',
        'Support a local cause, for example on Giving Tuesday or Small Business Saturday.',
      ]},

      { type: 'heading', text: 'Social Media for Local Reach' },
      { type: 'list', items: [
        'Short videos of your work, before and after results, and your team.',
        'Tag your location and nearby landmarks.',
        'Answer common customer questions in posts.',
        'Feature local partners and customers who agree to be featured.',
      ]},

      { type: 'heading', text: 'Email and Text for Repeat Visits' },
      { type: 'paragraph', text: "Repeat customers are usually cheaper to win than new ones. Collect emails and phone numbers at checkout or booking, with permission, and send reminders, seasonal offers and useful tips. Keep messages short and local, and make it easy to book again." },

      { type: 'heading', text: 'Local Ads, Once the Basics Work' },
      { type: 'table', headers: ['Ad type', 'Best for'], rows: [
        ['Google Local Services Ads', 'Eligible service businesses; pay per lead'],
        ['Google Search ads with a location radius', 'People searching for your service nearby'],
        ['Meta ads with a local radius', 'Promoting an offer or event to nearby people'],
      ]},
      { type: 'paragraph', text: "Start small, track calls and bookings, and stop what does not bring customers at a cost you can afford." },

      { type: 'heading', text: 'Follow Up on Every Inquiry' },
      { type: 'paragraph', text: "Many local leads go to whoever replies first. Reply to calls, messages and form inquiries as quickly as you can, text back missed calls, and follow up on quotes. Our guide on turning leads into booked appointments shows how." },

      { type: 'heading', text: 'Rules on Reviews, Referrals and Texts' },
      { type: 'list', items: [
        'Fake reviews and review suppression are banned by the FTC rule on consumer reviews and testimonials; the UK and Canada have similar rules.',
        'Google prohibits incentives for reviews, review gating and reviews from employees.',
        'Referral rewards should be disclosed when referrers post publicly about you.',
        'Marketing texts need consent (TCPA in the US, CASL in Canada, PECR in the UK).',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts your Google Business Profile posts, social posts, review replies and reminder emails, and reports which channels bring calls and bookings each week. Every post, reply and message waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is the fastest way to get local customers?', a: 'Complete your Google Business Profile, ask existing customers for reviews and referrals, and reply to every inquiry quickly.' },
        { q: 'What are the 7 steps to attracting new customers?', a: 'There is no single official list. A practical sequence: know your customer, be findable, build reviews, make an offer, get referrals, follow up and keep in touch.' },
        { q: 'What is the 10-5-3 rule in customer service?', a: 'Versions vary, but it is usually a greeting rule: acknowledge customers with eye contact at about 10 feet and greet them at about 5 feet. It is a guideline, not a standard.' },
        { q: 'What is the 3-3-3 rule in sales?', a: 'There is no single agreed definition. Focus on following up consistently with every lead.' },
        { q: 'How do I get my first 100 local customers?', a: 'Start with friends, neighbors and local groups, run an opening offer or event, ask every customer for a review and referral, and partner with nearby businesses.' },
        { q: 'Are paid ads worth it for local businesses?', a: 'Often, once your profile, reviews and follow-up are in place. Start small and track calls and bookings.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your local posts, review replies and reminders, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['how-to-get-more-google-reviews', 'small-business-marketing-ideas', 'social-media-marketing-for-small-business', 'turn-leads-into-booked-appointments'],
  },

  // "lead follow up" / "how to turn leads into appointments"
  {
    id: 206,
    slug: 'turn-leads-into-booked-appointments',
    title: 'How to Turn Leads Into Booked Appointments: A Follow-Up System',
    seoTitle: 'Lead Follow-Up: How to Turn Leads Into Booked Appointments (2027)',
    description: 'A practical lead follow-up system for service businesses: reply fast, text back missed calls, make booking easy, follow a set cadence, use templates that sound human, reduce no-shows and follow the rules on calls, texts and recording.',
    category: 'Business',
    date: publishDate,
    imageIndex: 206,
    tableOfContents: [
      'The Short Answer',
      'What Is a Lead Follow-Up System?',
      'Reply Fast',
      'Text Back Missed Calls',
      'Make Booking Easy',
      'A Follow-Up Cadence That Respects People',
      'Templates That Sound Human',
      'Reduce No-Shows',
      'Track Every Lead',
      'Rules on Calls, Texts and Recording',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most service businesses do not have a lead problem; they have a follow-up problem. Leads call while you are on a job, fill in a form at night or ask for a quote and hear nothing for days. A simple follow-up system turns more of those leads into appointments without spending more on ads." },
      { type: 'callout', text: "Quick answer: Turn leads into booked appointments by replying within minutes, texting back missed calls, offering a booking link with real times, following a set cadence of calls, texts and emails over about two weeks, using short templates that sound human, sending reminders to cut no-shows and tracking every lead to the end." },

      { type: 'heading', text: 'What Is a Lead Follow-Up System?' },
      { type: 'paragraph', text: "A lead follow-up system is a set process for contacting every new inquiry: who replies, how fast, on which channels, how many times and when to stop. It can live in a CRM, a booking tool or a shared spreadsheet. What matters is that no lead depends on someone remembering." },

      { type: 'heading', text: 'Reply Fast' },
      { type: 'list', items: [
        'Aim to reply within minutes during working hours; people often contact several businesses.',
        'Send an instant acknowledgment for forms and messages outside working hours, with a booking link.',
        'Answer in the channel the lead used: a text gets a text, a DM gets a DM.',
        'On Messenger and Instagram, reply within Meta\'s 24-hour messaging window for standard messages.',
      ]},

      { type: 'heading', text: 'Text Back Missed Calls' },
      { type: 'paragraph', text: "When you miss a call, send a text straight away: \"Sorry we missed your call. This is [name] at [business]. How can we help? You can also book here: [link].\" A reply to the person's own inquiry is generally treated as informational, but anything promotional needs marketing consent. In the US, business texting from a regular local number usually requires A2P 10DLC registration through your provider." },

      { type: 'heading', text: 'Make Booking Easy' },
      { type: 'list', items: [
        'Offer a booking link with real available times, or two specific times by text.',
        'Ask only what you need to book: name, contact, service, address if needed.',
        'Show prices or price ranges so people are not afraid to book.',
        'Match the call to action to the lead: Nevo David notes that "Book a call" is a heavy step that filters people out, while a lighter option such as joining a waitlist can work better when people are not ready (source: gitroom.com blog).',
      ]},

      { type: 'heading', text: 'A Follow-Up Cadence That Respects People' },
      { type: 'table', headers: ['When', 'Channel', 'Message'], rows: [
        ['Within minutes', 'Call, then text', 'Answer the question and offer times'],
        ['Same day', 'Email', 'Details, prices and a booking link'],
        ['Day 2', 'Text', 'A short check-in with one specific time'],
        ['Day 4', 'Call', 'Answer any questions; offer to hold a slot'],
        ['Day 7', 'Email', 'Something useful: a guide, a photo of similar work, a review'],
        ['Day 14', 'Text', 'A polite last message that leaves the door open'],
      ]},
      { type: 'paragraph', text: "Stop as soon as someone books or asks you to stop. After the cadence ends, add people who agreed to it to your newsletter so they hear from you when they are ready." },

      { type: 'heading', text: 'Templates That Sound Human' },
      { type: 'list', items: [
        '"Hi [name], it\'s [your name] from [business]. I can come out Thursday at 10 or Friday at 2. Which suits you?"',
        '"Following up on your quote for [job]. Happy to answer any questions or adjust anything."',
        '"Here are photos of a similar [job] we finished last week, in case it helps."',
        '"I won\'t keep messaging. If you\'d like to book later, here\'s the link."',
      ]},
      { type: 'paragraph', text: "A professional way to say \"follow up\" is to name the topic and give a next step: \"I'm getting back to you about your [job] quote. Would Tuesday work?\"" },

      { type: 'heading', text: 'Reduce No-Shows' },
      { type: 'list', items: [
        'Send a confirmation right after booking with date, time, address and what to expect.',
        'Send a reminder the day before and a short one on the day.',
        'Make rescheduling easy so people move rather than miss.',
        'Ask for a deposit for long or high-value appointments.',
      ]},

      { type: 'heading', text: 'Track Every Lead' },
      { type: 'table', headers: ['Track', 'Why'], rows: [
        ['Source', 'Which channels bring leads that book'],
        ['Time to first reply', 'The easiest number to improve'],
        ['Stage', 'New, contacted, quoted, booked, lost'],
        ['Reason lost', 'Price, timing, chose someone else, no reply'],
      ]},
      { type: 'paragraph', text: "With low lead volume, a light CRM or spreadsheet is enough; Nevo recommends custom emails and simple tracking with a follow-up after a set time when volume is small (source: gitroom.com blog)." },

      { type: 'heading', text: 'Rules on Calls, Texts and Recording' },
      { type: 'list', items: [
        'US: marketing calls and texts using automated systems need prior express written consent under the TCPA; some states, such as Florida, add their own rules.',
        'US business texting from local numbers usually requires A2P 10DLC registration.',
        'Call recording: some US states require every party\'s consent; tell callers if you record.',
        'Canada (CASL) and the UK (PECR) require consent for marketing messages.',
        'WhatsApp business messages outside a customer-started conversation need approved templates.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts your follow-up emails, reminder sequences and lead-form replies in your voice, and reports which channels bring leads that book. Every message and sequence waits for your approval before it is sent." },

      { type: 'faq', items: [
        { q: 'What is a lead follow-up?', a: 'Contacting a person who showed interest, such as by calling, filling in a form or asking for a quote, to answer questions and book the next step.' },
        { q: 'How often should you follow up with a lead?', a: 'Several times over about two weeks across calls, texts and emails, stopping as soon as they book or ask you to stop.' },
        { q: 'What is a lead follow-up system?', a: 'A set process for who contacts each lead, how fast, on which channels, how often and when to stop, tracked in a CRM, booking tool or spreadsheet.' },
        { q: 'How do you professionally say follow up?', a: 'Name the topic and offer a next step, for example: "I\'m getting back to you about your quote. Would Tuesday at 10 work?"' },
        { q: 'Can I text a lead who called me?', a: 'A reply to their own inquiry is generally fine; promotional texts need marketing consent. Check the rules where you operate.' },
        { q: 'How do I reduce no-shows?', a: 'Confirm right away, remind the day before and on the day, make rescheduling easy and take deposits for long appointments.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your follow-up and reminder sequences, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'how-to-get-customers-for-cleaning-business', 'how-to-get-clients-in-real-estate', 'cold-outreach-that-gets-replies'],
  },
];
