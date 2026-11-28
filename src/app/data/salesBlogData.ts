import type { BlogPost } from './blogData';

// Sales and customer acquisition batch (ids 197-206), written November 28, 2026.
// 197-202: SaaS founders and agencies. 203-204: DTC and Shopify brands. 205-206: local businesses.
// Source: Nevo David's playbook (Nevo's Brain MCP): how he grew Postiz with give-first outreach, trial
// conversion work, pricing and outcome-led marketing. Every number is his, quoted with its source and date.
// Treg was unavailable, so titles were not checked against search volume yet. No invented statistics.
const publishDate = 'November 28, 2026';

export const salesBlogPosts: BlogPost[] = [
  {
    id: 197,
    slug: 'how-to-get-first-customers-saas',
    title: 'How to Get Your First Customers for a SaaS (Without an Audience)',
    seoTitle: 'How to Get Your First SaaS Customers Without an Audience (2026)',
    description: 'A practical plan to get your first paying SaaS customers when you have no audience: pick a narrow buyer, find where they gather, give before you ask, sell an outcome and charge from day one.',
    category: 'Business',
    date: publishDate,
    imageIndex: 197,
    tableOfContents: [
      'The Short Answer',
      'Step 1: Pick One Buyer You Can Find',
      'Step 2: Go Where They Already Gather',
      'Step 3: Give Before You Ask',
      'Step 4: Sell the Outcome',
      'Step 5: Charge From Day One',
      'Step 6: Split Your Week Between Product and Selling',
      'What to Track in the First 90 Days',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most founders think the first customers come from a launch. They usually come from a few hundred direct conversations with a narrow group of people who have the problem today. You do not need an audience for that. You need a buyer you can name, a place where those buyers gather and a reason for them to talk to you." },
      { type: 'callout', text: "Quick answer: To get your first SaaS customers without an audience, choose one buyer type you can list by name, find the communities where they already gather, offer them something useful for free, describe the result your product gets them rather than its features, and charge from the first customer so you learn who will actually pay." },

      { type: 'heading', text: 'Step 1: Pick One Buyer You Can Find' },
      { type: 'paragraph', text: "\"Small businesses\" is not a buyer. \"Shopify brands selling skincare between $20K and $200K a month\" is. A narrow buyer tells you where to look, what to say and who to ignore. Narrow the audience, not the market: Nevo David, who grew Postiz, warns against niching so far that only a handful of companies could ever buy (source: Nevo David on X, @wickedguro, September 2026)." },
      { type: 'list', items: [
        'Write one sentence: who they are, what they sell and what is going wrong for them right now.',
        'Check you can build a list of at least a few hundred of them by name.',
        'Check they already pay for something to solve the problem, even badly.',
      ]},

      { type: 'heading', text: 'Step 2: Go Where They Already Gather' },
      { type: 'paragraph', text: "Your buyers already spend time together somewhere: a Slack or Discord server, a Skool or Circle group, a subreddit, a LinkedIn niche, a paid community. Nevo found the owners of n8n groups on Skool and treated each group owner as a door to hundreds of the right users (source: Nevo David, Alex is Building interview, July 2026)." },
      { type: 'table', headers: ['Where', 'What works there'], rows: [
        ['Slack, Discord, Skool and Circle groups', 'Answer questions in detail; message the owner with an offer for their members'],
        ['Subreddits', 'Share a full workflow that uses several tools, yours among them'],
        ['LinkedIn', 'Direct messages to people who match your buyer, after you have posted useful work'],
        ['Paid communities', 'Build relationships first; promote rarely and only where it is welcome'],
      ]},

      { type: 'heading', text: 'Step 3: Give Before You Ask' },
      { type: 'paragraph', text: "Messages that sell get ignored or reported. Messages that give get answered. Nevo's rule is \"give, give, give, then take in private\": offer free value in public until people start the sales conversation themselves. When he offered n8n group owners a free lifetime plan, a newsletter feature and introductions, he reports that about 80% replied and Postiz revenue went from about $6K to $12K MRR that month (source: Nevo David, Alex is Building interview, July 2026)." },
      { type: 'paragraph', text: "The full method, including how to protect your domain, is in our guide to cold outreach that gets replies." },

      { type: 'heading', text: 'Step 4: Sell the Outcome' },
      { type: 'paragraph', text: "Early buyers do not buy a feature list. They buy a result they can picture: more booked calls, fewer hours on reports, a cheaper cost per sale. Describe your product as the way to that result, and show one real example of someone getting it. If you have no customers yet, show the result on your own business." },

      { type: 'heading', text: 'Step 5: Charge From Day One' },
      { type: 'paragraph', text: "Free users tell you what they would like. Paying users tell you what they need. Nevo put it plainly: free users usually teach you how not to make money, because they ask for more free features (source: Nevo David on X, March 2026). Publish a pricing page even before you are ready to bill, so visitors know the product is a real business." },

      { type: 'heading', text: 'Step 6: Split Your Week Between Product and Selling' },
      { type: 'paragraph', text: "Founders who build all week and sell on Friday rarely get customers. Nevo recommends splitting effort roughly half product and half marketing, across more than one channel (source: Nevo David on X, March 2026). Block the selling time on your calendar the same way you block build time." },

      { type: 'heading', text: 'What to Track in the First 90 Days' },
      { type: 'table', headers: ['Metric', 'Why it matters'], rows: [
        ['Conversations started per week', 'The only input you fully control early on'],
        ['Replies and calls booked', 'Shows whether your message and offer land'],
        ['Trials or pilots started', 'Shows whether the outcome is believable'],
        ['Paying customers and reasons they bought', 'Tells you which buyer and message to double down on'],
        ['Reasons people said no', 'Tells you what to fix in the product or the pitch'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "The conversations should stay yours. Loraloop handles the marketing around them: it drafts the LinkedIn posts, articles and emails that make you known to your buyers before you message them, tracks competitors and reports which channels bring signups each week. Every post, email and change waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'How many conversations does it take to get the first customer?', a: 'It depends on your price and buyer. Track conversations, replies and calls each week so you learn your own numbers within a month instead of guessing.' },
        { q: 'Should I launch on Product Hunt first?', a: 'A launch brings a spike of visitors, not a steady flow of the right buyers. Use it once you have a clear message that already converts in direct conversations.' },
        { q: 'Should my first customers get a discount?', a: 'A founding-customer price in return for feedback and a case study is fair. Avoid making the product free, because you lose the signal of who will pay.' },
        { q: 'Do I need an audience to sell SaaS?', a: 'No. Many founders sell without one. Direct outreach to a narrow buyer, done with a useful offer, works before you have any followers.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts the posts, articles and emails that warm up your buyers, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['cold-outreach-that-gets-replies', 'sell-outcomes-not-features', 'saas-pricing-to-acquire-customers', 'founder-led-marketing-without-doing-everything'],
  },

  {
    id: 199,
    slug: 'free-trial-to-paid-conversion',
    title: 'How to Turn Free Trial Users Into Paying Customers',
    seoTitle: 'Free Trial to Paid Conversion: How to Turn Trial Users Into Customers',
    description: 'How to raise SaaS free trial to paid conversion: choose between card and no-card trials, show the outcome before signup, put plans and payment on one page, guide users to a first result and catch failed payments.',
    category: 'Business',
    date: publishDate,
    imageIndex: 199,
    tableOfContents: [
      'The Short Answer',
      'Free Tier, No-Card Trial or Card Trial?',
      'Fix What Happens Before Signup',
      'Put Plans and Payment on One Page',
      'Get Users to a First Result',
      'Filter Out Fake Trials',
      'After Black Friday: Converting the Trial Spike',
      'Measure Conversion by Customer Type',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "More traffic is the expensive way to grow a SaaS. Converting more of the trials you already get is the cheap one. Nevo David reports that Postiz grew monthly revenue from $15K to $18K in one month with about the same number of trials, only by improving trial conversion (source: Nevo David on X, January 2026). Here is what changed, and what to look at in your own funnel." },
      { type: 'callout', text: "Quick answer: To turn more trial users into paying customers, choose the trial model that fits your buyer, show what the product achieves before signup, keep plan choice and payment on one page, get every new user to one real result in the first session, filter out fake signups, and measure conversion for your ideal customers rather than everyone." },

      { type: 'heading', text: 'Free Tier, No-Card Trial or Card Trial?' },
      { type: 'table', headers: ['Model', 'What happens', 'Best for'], rows: [
        ['Free tier', 'Many signups, few upgrades; users can stay free for a long time', 'Reach, word of mouth and an email list'],
        ['Trial without a card', 'Users must actively decide to pay at the end', 'Products that need time to show value'],
        ['Trial with a card', 'Users must actively cancel; fewer signups, more paying users', 'Products that show value in days'],
      ]},
      { type: 'paragraph', text: "Nevo summarized the difference: with a \"start free\" flow you must later persuade people to start paying; with a \"start a trial\" flow, the job becomes preventing cancellation before the first charge (source: Nevo David on X, May 2026). Card trials also bring higher churn later, because less motivated users enter payment details too." },

      { type: 'heading', text: 'Fix What Happens Before Signup' },
      { type: 'paragraph', text: "Whether someone enters a card depends on what they saw before signing up. Postiz added a short video to its homepage that shows the impressive things users can do with the product, not a tour of the app (source: Nevo David on X, January 2026)." },
      { type: 'list', items: [
        'Show the result: a finished output, a before-and-after, a customer story.',
        'Keep the headline about the outcome, not the feature list.',
        'Add proof near the signup button: customer logos, short testimonials, a real example.',
      ]},

      { type: 'heading', text: 'Put Plans and Payment on One Page' },
      { type: 'paragraph', text: "Many SaaS products show plans on one page and send users to a separate checkout. Postiz moved plan choice and payment onto a single page with an embedded payment form, which also left room for trust signals next to the card field. It added an automatically applied discount to give people a reason to start now (source: Nevo David on X, January 2026)." },

      { type: 'heading', text: 'Get Users to a First Result' },
      { type: 'paragraph', text: "Users who never reach a result cancel. Nevo noted that without a focus on outcomes, trial users often do nothing at all because they do not know what to do first (source: Nevo David on X, August 2026)." },
      { type: 'numbered-list', items: [
        'Define the first result: the one action that shows the product working, such as a first scheduled post or a first report.',
        'Make onboarding push to that result, not to settings or integrations.',
        'Offer templates so the first result takes minutes.',
        'Send short emails during the trial that point to the next step, based on what the user has or has not done.',
        'Before the trial ends, remind users what they set up and what they will lose access to.',
      ]},

      { type: 'heading', text: 'Filter Out Fake Trials' },
      { type: 'paragraph', text: "Card trials attract virtual and empty cards. Nevo suggests treating card trials as uncertain pipeline and using a 20% to 25% trial-to-paid rate as a planning rule of thumb (source: Nevo David on X, December 2025). Later, with a $1 verification charge and checks that stop the same social account being reused across trials, he reported 45% trial-to-paid conversion for Postiz (source: Nevo David on X, September 2026)." },

      { type: 'heading', text: 'After Black Friday: Converting the Trial Spike' },
      { type: 'paragraph', text: "Black Friday and Cyber Monday deals bring a burst of trials that convert in December. Nevo David's advice for the month is not to count on a December surge, and to use it instead to improve onboarding, fix bugs and build flows that win back cancelled subscribers (source: Nevo David on X, December 2025). For the trials you already have:" },
      { type: 'list', items: [
        'Tag every trial that started on a Black Friday or Cyber Monday offer so you can track that group separately.',
        'Send that group a short sequence that gets them to a first result before the trial ends.',
        'Offer people who cancel after paying at least once a clear reason to stay, such as a lower price for the next few months.',
        'Compare this group with your regular trials in January before deciding whether to repeat the offer.',
      ]},

      { type: 'heading', text: 'Measure Conversion by Customer Type' },
      { type: 'paragraph', text: "A single conversion rate mixes your best-fit customers with people who were never going to buy. Split trial conversion by customer type and acquisition channel. Nevo applies the same idea to churn: filter it to your ideal customer profile and improve that number first (source: Nevo David on X, October 2026)." },
      { type: 'table', headers: ['Cut', 'Question it answers'], rows: [
        ['By channel', 'Which sources bring trials that pay?'],
        ['By customer type', 'Which buyers convert best and should get more attention?'],
        ['By first-result reached', 'How much does onboarding drive conversion?'],
        ['By plan chosen', 'Is the entry plan priced to convert?'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts the trial email sequence, the landing page copy and the customer stories that move trial users to a first result, and builds Klaviyo or Mailchimp flows from welcome to win-back. Its weekly report shows which channels bring trials that convert. Every email, page change and flow waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is a good free trial to paid conversion rate?', a: 'It depends on whether you ask for a card, your price and your buyer. Track your own rate by channel and customer type, and improve it month over month rather than chasing a benchmark.' },
        { q: 'Should I ask for a credit card at signup?', a: 'Ask for one if your product shows value within the trial. Skip it if buyers need longer to see results, and make up for it with stronger onboarding emails.' },
        { q: 'How long should a free trial be?', a: 'Long enough for a typical user to reach a first real result. Shorter trials create urgency; longer trials suit products that need setup.' },
        { q: 'Do discounts at checkout help?', a: 'A small, clearly time-limited discount can give people a reason to start now. Constant discounts teach buyers to wait.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your trial emails and onboarding flows from welcome to win-back, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['saas-pricing-to-acquire-customers', 'sell-outcomes-not-features', 'saas-black-friday-trials-churn', 'ad-to-landing-page-message-match'],
  },

  {
    id: 201,
    slug: 'how-to-get-clients-for-marketing-agency',
    title: 'How to Get New Clients for a Marketing Agency in 2027',
    seoTitle: 'How to Get Clients for a Marketing Agency: 7 Methods That Work in 2027',
    description: 'Practical ways for marketing agencies to win new clients: a narrow niche, free audits as the offer, give-first outreach, community partnerships, case studies with real numbers and productized packages.',
    category: 'Business',
    date: publishDate,
    imageIndex: 201,
    tableOfContents: [
      'The Short Answer',
      '1. Pick a Niche You Can Prove Results In',
      '2. Lead With a Free Audit',
      '3. Run Give-First Outreach',
      '4. Partner With Community Owners',
      '5. Publish Case Studies With Real Numbers',
      '6. Productize Your Entry Offer',
      'Timing: Use December to Fill January',
      '7. Stay Visible Where Buyers Look',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most agencies grow by referral until referrals slow down, then scramble. A steady flow of new clients comes from a repeatable system: a clear niche, an offer that is easy to say yes to and regular contact with the right buyers. None of it needs a big ad budget." },
      { type: 'callout', text: "Quick answer: Agencies win new clients most reliably by focusing on one niche, offering a free audit with specific fixes, reaching out with that offer instead of a pitch, partnering with people who own audiences of their buyers, publishing case studies with real numbers and selling a fixed-scope first package before the retainer." },

      { type: 'heading', text: '1. Pick a Niche You Can Prove Results In' },
      { type: 'paragraph', text: "\"Full-service digital agency\" competes with everyone. \"Meta ads for Shopify supplement brands\" competes with a handful. A niche lets you reuse case studies, write sharper outreach and price higher because you speak the client's language. Choose a niche where you already have one or two strong results." },

      { type: 'heading', text: '2. Lead With a Free Audit' },
      { type: 'paragraph', text: "A free audit is the easiest yes in agency sales: it costs the prospect nothing, shows your thinking and gives them a reason to talk. Keep it focused on one channel and end with three specific fixes and the money or time at stake. Prospects who act on the fixes themselves still remember who found them." },
      { type: 'list', items: [
        'Meta or Google ads: wasted spend, tracking gaps, fatigued creative.',
        'SEO: pages that lost traffic, missing pages competitors rank with.',
        'Email: missing flows, list health, revenue left in abandoned carts.',
      ]},

      { type: 'heading', text: '3. Run Give-First Outreach' },
      { type: 'paragraph', text: "Agency outreach usually fails because it opens with \"we can improve your conversion rate\". Nevo David points out that people ignore messages selling services and answer messages that bring them something (source: Nevo David, Alex is Building interview, July 2026). Open with the audit result, or one specific observation about their account, and ask one small question. Use a separate domain for outreach so spam reports never touch your main inbox." },

      { type: 'heading', text: '4. Partner With Community Owners' },
      { type: 'paragraph', text: "Find the people who already have your buyers' attention: newsletter writers, community owners, software vendors your clients use, consultants in adjacent services. Offer them something useful for their audience, such as a workshop, a template or a discount for their members. Nevo's approach with community owners was to give them more than he asked for (source: Nevo David, Alex is Building interview, July 2026)." },

      { type: 'heading', text: '5. Publish Case Studies With Real Numbers' },
      { type: 'list', items: [
        'One page per case study: client type, starting point, what you changed, what happened.',
        'Use real numbers with the client\'s permission, and say over what period.',
        'Quote the client in their own words.',
        'Link each case study from your niche pages and use it in outreach.',
      ]},

      { type: 'heading', text: '6. Productize Your Entry Offer' },
      { type: 'paragraph', text: "A retainer is a big decision for a new client. A fixed-scope first package, such as a 30-day ads rebuild or a content sprint, is a smaller one. It has a clear price, a clear deliverable and a clear end date, and it leads naturally into the retainer once the client sees results." },

      { type: 'heading', text: 'Timing: Use December to Fill January' },
      { type: 'paragraph', text: "Brands review results after Black Friday and Cyber Monday and plan the first quarter in December. That makes the next few weeks a good time for audit-led outreach: offer a short review of how their holiday campaigns performed, with three fixes for January. Send it before the holiday break, and follow up in the first week of January with a fixed-scope first-quarter package." },

      { type: 'heading', text: '7. Stay Visible Where Buyers Look' },
      { type: 'paragraph', text: "Outreach works better when prospects can look you up and find useful work. Post practical breakdowns on LinkedIn, write articles that answer the questions your niche asks, and keep your agency described consistently across directories and review sites so AI assistants describe you correctly when buyers ask for a recommendation." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop gives each client its own workspace with its own brand voice, connected accounts, approvals and reports, so your team can take on new clients without hiring for each one. It also runs the free Meta ads audit you can use as an entry offer, and drafts your agency's own LinkedIn posts and articles. Every change, post and report waits for approval by your team or the client." },

      { type: 'faq', items: [
        { q: 'What is the fastest way for a new agency to get clients?', a: 'Pick a niche, build a list of businesses in it, and offer a short free audit with specific fixes. Referrals from your first clients follow once they see results.' },
        { q: 'Should agencies run ads to get clients?', a: 'Ads can work once you have a proven offer and case studies. Before that, direct outreach and partnerships cost less and teach you more.' },
        { q: 'How do I price my first package?', a: 'Price by the outcome and the work involved, not by the hour. A fixed-scope first package with a clear deliverable is easier to sell than an open retainer.' },
        { q: 'Do free audits attract the wrong clients?', a: 'They can if anyone can request one. Qualify requests by business type and size before doing the work.' },
      ]},
      { type: 'cta', text: 'Loraloop gives every client its own workspace and approvals, so you can add clients without hiring for each one.' },
    ],
    relatedSlugs: ['cold-outreach-that-gets-replies', 'bfcm-post-mortem-template-agencies', 'year-end-client-report-template-agencies', 'ai-marketing-tools-for-agencies-scale-delivery'],
  },

  {
    id: 203,
    slug: 'get-new-customers-shopify-without-discounts',
    title: 'How to Get New Customers for a Shopify Brand Without Discounting',
    seoTitle: 'How to Get New Customers for Your Shopify Store Without Discounts (2027)',
    description: 'How DTC and Shopify brands win new customers after Black Friday without training them to wait for sales: story-led content, creators who use the product, partnerships, proof on every page and ads that match the landing page.',
    category: 'Business',
    date: publishDate,
    imageIndex: 203,
    tableOfContents: [
      'The Short Answer',
      'Why Discount-Led Growth Stalls in January',
      '1. Sell the Moment, Not the Product',
      '2. Post Story-Led Short Content',
      '3. Work With Creators Who Use the Product',
      '4. Partner With Brands That Share Your Buyer',
      '5. Put Proof Where People Decide',
      '6. Match Ads to the Landing Page',
      'What to Track',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday and Cyber Monday bring a rush of first orders at your lowest margin of the year. If January marketing keeps leading with a code, you teach new customers to wait for the next sale. Brands that keep growing after the holidays win attention with stories, people and proof, and save discounts for specific moments." },
      { type: 'callout', text: "Quick answer: To get new Shopify customers without discounting, sell the moment the product creates rather than the product itself, post story-led short videos and slideshows, work with creators who already use your product, partner with brands that sell to the same buyer, show reviews and customer photos where people decide, and make every ad match the page it sends people to." },

      { type: 'heading', text: 'Why Discount-Led Growth Stalls in January' },
      { type: 'list', items: [
        'Customers acquired with a deep discount are more likely to wait for the next one.',
        'Margins after a discount leave less room to pay for ads.',
        'Every brand is discounting in the same weeks, so a code is not a reason to choose you.',
      ]},

      { type: 'heading', text: '1. Sell the Moment, Not the Product' },
      { type: 'paragraph', text: "People do not buy a candle, a serum or a protein bar. They buy the evening, the confidence or the morning routine. Describe the moment your product creates and show a real person in it. Nevo David makes the same point for software: features matter less than the moment created by the story (source: Nevo David, X article, September 2026)." },

      { type: 'heading', text: '2. Post Story-Led Short Content' },
      { type: 'paragraph', text: "Social platforms now show posts to people interested in the topic, not only to followers, so small brand accounts can reach new buyers. Nevo lists eCommerce and physical businesses among the categories where short TikTok slideshows work, and describes the formula that performs best: another person, a moment of doubt, then a reveal that changes their mind (source: Nevo David, X article, April 2026)." },
      { type: 'table', headers: ['Format', 'Example for a DTC brand'], rows: [
        ['Person + doubt + reveal', '"My sister said I would never stick to a skincare routine, so I showed her week 4"'],
        ['X things to get Y', '"5 small swaps that fixed my afternoon energy crash"'],
        ['Problem, then fixes', 'Slide 1: a common problem. Every slide after: one fix, one featuring your product'],
      ]},
      { type: 'paragraph', text: "Slide one or the first second does most of the work. Name a specific person, add a number or a time, and leave a small story the viewer wants to finish." },

      { type: 'heading', text: '3. Work With Creators Who Use the Product' },
      { type: 'paragraph', text: "A creator who actually uses your product shows real routines, real results and honest details. A creator reading a script does not. Start with customers who already post about you, then look for creators whose audience matches your buyer. Our guide to creator and UGC partnerships covers how to pick, pay and measure them." },

      { type: 'heading', text: '4. Partner With Brands That Share Your Buyer' },
      { type: 'paragraph', text: "A coffee brand and a mug maker, a running-shoe brand and a recovery drink: brands that sell to the same buyer can share audiences without competing. Offer more than you ask: a bundle, a co-created guide, a feature in your email to their audience. The give-first approach Nevo uses with community owners works the same way between brands." },

      { type: 'heading', text: '5. Put Proof Where People Decide' },
      { type: 'list', items: [
        'Reviews with photos on product pages, near the add-to-cart button.',
        'Short customer stories on landing pages: who they are, what changed.',
        'Answers to the top three objections, in plain words, on the product page.',
        'Delivery, returns and guarantee details visible before checkout.',
      ]},

      { type: 'heading', text: '6. Match Ads to the Landing Page' },
      { type: 'paragraph', text: "An ad that promises one thing and lands on a generic homepage wastes the click. Send each ad to a page that repeats the same promise, shows the same product and answers the same question. Story-led ads should land on pages that continue the story, with proof." },

      { type: 'heading', text: 'What to Track' },
      { type: 'table', headers: ['Metric', 'Why'], rows: [
        ['New customers by channel', 'Shows which channels bring first orders, not only clicks'],
        ['Share of orders with a discount code', 'Shows whether you are growing without discounts'],
        ['Second-order rate within 60 to 90 days', 'Shows whether new customers are the right customers'],
        ['Cost per new customer', 'Shows what you can afford to spend on each channel'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts story-led ad creative, social posts, product content and creator briefs from your brand knowledge, tracks the angles competitors are scaling and reports new customers by channel. It works from your Shopify and ad data. Every ad, post and budget change waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'How do I get customers for a new Shopify store?', a: 'Start with one buyer and one moment your product creates, post short story-led content where that buyer spends time, work with a few creators who use the product and put reviews and photos on every product page.' },
        { q: 'Should I stop discounting completely?', a: 'No. Keep discounts for specific moments such as launches, Black Friday or win-back emails. Avoid making a code the main reason anyone buys.' },
        { q: 'Do TikTok slideshows work for eCommerce?', a: 'They can. Short slideshows with a strong first slide and a real story suit many product categories. Test several formats and keep the ones that bring orders, not just views.' },
        { q: 'How long until new channels bring customers?', a: 'Content and creator work often takes several weeks to show in orders. Compare weeks with a push against normal weeks rather than expecting direct clicks.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts story-led ads, posts and creator briefs from your Shopify data, and nothing goes live until you approve it.' },
    ],
    relatedSlugs: ['creator-ugc-partnerships-dtc-brands', 'after-black-friday-retention-plan-shopify', 'q1-marketing-plan-dtc-brands-after-holidays', 'ad-to-landing-page-message-match'],
  },

  {
    id: 205,
    slug: 'get-more-customers-local-business',
    title: 'How to Get More Customers for a Local Business: Referrals, Reviews and Partnerships',
    seoTitle: 'How to Get More Customers for a Local Business: Referrals, Reviews and Partnerships',
    description: 'Practical ways for clinics, home services, cafes, gyms and salons to win more local customers: ask for referrals, earn reviews, keep Google Business Profile current, partner with neighboring businesses and post short local content.',
    category: 'Business',
    date: publishDate,
    imageIndex: 205,
    tableOfContents: [
      'The Short Answer',
      '1. Ask Every Happy Customer for a Referral',
      '2. Earn Reviews Steadily',
      '3. Keep Google Business Profile Current',
      '4. Partner With Neighboring Businesses',
      '5. Post Short Local Content',
      '6. Show Up in Local Groups',
      'Holiday and New Year Timing',
      'A Simple Monthly Routine',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most local businesses get customers the same way: someone asks a friend, searches nearby or walks past. The businesses that grow make each of those moments work harder. They ask for referrals on purpose, collect reviews every week, keep their listing current and build relationships with the businesses around them." },
      { type: 'callout', text: "Quick answer: Local businesses get more customers by asking every happy customer for a referral, collecting reviews steadily, keeping their Google Business Profile complete and current, partnering with neighboring businesses that serve the same people, posting short local content and taking part in local online groups." },

      { type: 'heading', text: '1. Ask Every Happy Customer for a Referral' },
      { type: 'list', items: [
        'Ask at the moment the customer is happiest: right after a great result, not weeks later.',
        'Make it specific: "Do you know anyone else on your street who needs this?"',
        'Give them something easy to share: a card, a link, a short message they can forward.',
        'Thank both people, with a small reward if it fits your business and local rules.',
      ]},

      { type: 'heading', text: '2. Earn Reviews Steadily' },
      { type: 'paragraph', text: "Recent, detailed reviews help people choose you and help search engines and AI assistants recommend you. Ask every customer the same way, with a direct link, and reply to every review within a day or two. Never offer a reward for a positive review; platforms prohibit it." },

      { type: 'heading', text: '3. Keep Google Business Profile Current' },
      { type: 'list', items: [
        'Correct hours, including holiday hours.',
        'Services and prices where you can share them.',
        'Recent photos of your work, team and premises.',
        'Regular posts with offers, events and news.',
        'The same name, address and phone number as your website and directories.',
      ]},

      { type: 'heading', text: '4. Partner With Neighboring Businesses' },
      { type: 'paragraph', text: "A gym and a physio clinic, a florist and a wedding venue, a plumber and a kitchen fitter share customers without competing. Approach them the way Nevo David approaches partners: lead with what you give, such as a joint offer for both customer lists, a referral card in your premises or a shared event, and ask for something small in return (source: Nevo David, Alex is Building interview, July 2026)." },

      { type: 'heading', text: '5. Post Short Local Content' },
      { type: 'paragraph', text: "Platforms now show posts to nearby people interested in the topic, not only to followers. Nevo lists cafes, gyms and beauty businesses among the categories where short slideshows work (source: Nevo David, X article, April 2026). Show real work: a before-and-after, a day on the job, answers to common questions, your team." },
      { type: 'table', headers: ['Business', 'Content idea'], rows: [
        ['Home services', 'Before-and-after of a job with the problem explained'],
        ['Clinic or salon', 'Three questions every new client asks, answered'],
        ['Cafe or restaurant', 'A new item, who makes it and why'],
        ['Gym', 'A member\'s first month, with their permission'],
      ]},

      { type: 'heading', text: '6. Show Up in Local Groups' },
      { type: 'paragraph', text: "Neighborhood Facebook groups, Nextdoor and local forums are where people ask for recommendations. Answer questions helpfully, follow each group's rules on promotion and let customers recommend you rather than posting ads." },

      { type: 'heading', text: 'Holiday and New Year Timing' },
      { type: 'paragraph', text: "December is a good month to ask for reviews from the year's happiest customers, update holiday hours and plan a January offer with a neighboring business. Many people book new services in January, so have your listing, reviews and booking link ready before the new year." },

      { type: 'heading', text: 'A Simple Monthly Routine' },
      { type: 'table', headers: ['When', 'Task'], rows: [
        ['Every week', 'Ask for reviews, reply to every review, post once or twice'],
        ['Every month', 'Update Google Business Profile photos and posts, check hours'],
        ['Every quarter', 'Run one partnership or joint offer with a neighboring business'],
        ['Always', 'Ask happy customers for a referral'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts local posts, Google Business Profile updates and review replies in your brand voice, plans the monthly content calendar and runs local search ads by area. Sensitive replies, such as complaints or health questions, are always held for a person. Every post, reply and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is the cheapest way for a local business to get customers?', a: 'Referrals and reviews from existing customers cost almost nothing and convert well. Ask every happy customer, every time.' },
        { q: 'How many Google reviews does a local business need?', a: 'There is no fixed number. Aim for a steady flow of recent, detailed reviews and reply to all of them.' },
        { q: 'Should local businesses use TikTok?', a: 'Many can. Short posts that show real work and answer common questions can reach nearby people who do not follow you yet.' },
        { q: 'How do I find partner businesses?', a: 'List the businesses your customers use before and after you, then approach the ones nearby with a specific joint offer.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts local posts and review replies for your approval, so your listing and social stay current every week.' },
    ],
    relatedSlugs: ['turn-leads-into-booked-appointments', 'ai-marketing-for-local-service-businesses', 'local-seo-ai-era-near-me-recommendations', 'google-business-profile-holiday-checklist-multi-location'],
  },

  {
    id: 206,
    slug: 'turn-leads-into-booked-appointments',
    title: 'How to Turn Calls, Forms and DMs Into Booked Appointments',
    seoTitle: 'How to Turn Leads Into Booked Appointments: Calls, Forms and DMs',
    description: 'How service businesses lose leads between the first message and the booking, and how to fix it: missed call text back, reply fast, give one booking link, ask a few qualifying questions, follow up on a schedule and track every lead.',
    category: 'Business',
    date: publishDate,
    imageIndex: 206,
    tableOfContents: [
      'The Short Answer',
      'Where Leads Get Lost',
      'Step 1: Reply Fast, Everywhere',
      'Step 2: Give One Clear Booking Step',
      'Step 3: Ask a Few Qualifying Questions',
      'Step 4: Follow Up on a Schedule',
      'Step 5: Track Every Lead',
      'Step 6: Stay in Touch With People Not Ready Yet',
      'Holiday Enquiries and January Bookings',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Many service businesses spend money to make the phone ring, then lose the lead in the gap between the first message and the booking. A missed call, a form nobody answered until the next day, a DM seen and forgotten. Fixing that gap is often cheaper than finding more leads." },
      { type: 'callout', text: "Quick answer: To turn more leads into booked appointments, reply quickly on every channel, give people one clear booking link, ask only the questions you need to qualify them, follow up on a fixed schedule, track every lead in one simple list and keep in touch with people who are not ready yet." },

      { type: 'heading', text: 'Where Leads Get Lost' },
      { type: 'list', items: [
        'Calls during busy hours that go to voicemail with no callback.',
        'Website forms that land in an inbox nobody checks on weekends.',
        'Instagram and Facebook messages answered days later.',
        'Quotes sent once and never followed up.',
        'People who said "not yet" and never heard from you again.',
      ]},

      { type: 'heading', text: 'Step 1: Reply Fast, Everywhere' },
      { type: 'list', items: [
        'Turn on missed call text back: an automatic text to every missed caller with your booking link.',
        'Send an instant confirmation for web forms that says when you will reply.',
        'Turn on saved replies for common DM questions such as prices, areas and availability.',
        'Decide who checks each channel, and when, including weekends.',
      ]},

      { type: 'heading', text: 'Step 2: Give One Clear Booking Step' },
      { type: 'paragraph', text: "Every extra step loses people. Use one booking link everywhere: website, Google Business Profile, social bios, email signatures and missed-call texts. Nevo David notes that \"book a call\" is a heavy filter that few visitors take, and that a lighter first step can bring in more leads (source: gitroom.com blog, waitlist and book-a-call guide). For a service business, that can mean offering a quick quote form or a callback request beside the booking link." },

      { type: 'heading', text: 'Step 3: Ask a Few Qualifying Questions' },
      { type: 'list', items: [
        'What do you need? (service type)',
        'Where are you? (if you cover set areas)',
        'When do you need it?',
        'Anything we should know before we come or you visit?',
      ]},
      { type: 'paragraph', text: "Ask only what changes your answer. Long forms lose people; short ones with the right questions let you reply with a real quote or time slot." },

      { type: 'heading', text: 'Step 4: Follow Up on a Schedule' },
      { type: 'table', headers: ['When', 'Follow-up'], rows: [
        ['Same day', 'Reply with an answer, a price range or available times'],
        ['Day 2', 'A short check-in with the booking link'],
        ['Day 5 to 7', 'A useful note: what to expect, a customer story, a common question answered'],
        ['Day 14', 'A last message, and an offer to stay in touch'],
      ]},
      { type: 'paragraph', text: "Lead volume for most local businesses is small enough to answer personally. Nevo's advice for small lead volumes is the same: do not over-automate early sales conversations; read each request and reply to what that person needs (source: gitroom.com blog, waitlist and book-a-call guide)." },

      { type: 'heading', text: 'Step 5: Track Every Lead' },
      { type: 'paragraph', text: "You do not need a heavy CRM. A shared spreadsheet or a simple CRM with name, channel, request, date, status and next follow-up date is enough. Nevo recommends putting every prospect in a CRM so you can follow up after a set time instead of relying on memory (source: gitroom.com blog, waitlist and book-a-call guide)." },

      { type: 'heading', text: 'Step 6: Stay in Touch With People Not Ready Yet' },
      { type: 'paragraph', text: "Someone who asked about a kitchen refit in November may book in March. With their permission, add them to a short monthly email with useful tips, seasonal reminders and recent work. When they are ready, you are the business they already know." },

      { type: 'heading', text: 'Holiday Enquiries and January Bookings' },
      { type: 'paragraph', text: "Enquiries often arrive during the holidays when nobody is watching the inbox. Before you close, set holiday auto-replies with your return date and booking link, and block time in the first week of January to follow up every enquiry that came in over the break." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts replies to comments and DMs, follow-up emails and the monthly newsletter for people who are not ready yet, in your brand voice. Sensitive messages are held for a person. Calls and bookings stay in your existing phone and booking tools, and every reply and email waits for your approval before it is sent." },

      { type: 'faq', items: [
        { q: 'What is missed call text back?', a: 'An automatic text message sent to anyone whose call you miss, usually with a short apology and your booking link. Most business phone systems and booking tools offer it as a setting.' },
        { q: 'How fast should a business reply to a lead?', a: 'As fast as you reasonably can, ideally the same day. An instant automatic reply with a booking link covers the gap until a person answers.' },
        { q: 'Should I put prices on my website?', a: 'Showing a price range filters out people who are not a fit and answers the most common question before they ask.' },
        { q: 'What is the best free way to track leads?', a: 'A shared spreadsheet with name, channel, request, status and next follow-up date works for most small businesses.' },
        { q: 'How many times should I follow up?', a: 'Three or four times over two weeks, each with something useful, then move them to an occasional newsletter if they agree.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts DM replies and follow-up emails in your voice, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'ai-marketing-for-local-service-businesses', 'google-business-profile-holiday-checklist-multi-location', 'cold-outreach-that-gets-replies'],
  },
];
