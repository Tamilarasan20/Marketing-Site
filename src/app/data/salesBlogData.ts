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
    id: 198,
    slug: 'cold-outreach-that-gets-replies',
    title: 'Cold Outreach That Gets Replies: The Give-First Method',
    seoTitle: 'Cold Outreach That Gets Replies: A Give-First Email and LinkedIn Method',
    description: 'How to run cold email and LinkedIn outreach that people answer: build a list of exact-fit prospects, protect your main domain, lead with a real offer, keep the message short and follow up with value.',
    category: 'Business',
    date: publishDate,
    imageIndex: 198,
    tableOfContents: [
      'Why Most Cold Outreach Fails',
      'The Give-First Rule',
      'Step 1: Build a Small, Exact List',
      'Step 2: Protect Your Main Domain',
      'Step 3: Make an Offer Worth Answering',
      'Step 4: Write a Short, Human Message',
      'Step 5: Follow Up With Value, Not Pressure',
      'Email, LinkedIn or Communities?',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Cold outreach has a bad name because most of it is lazy: a sales pitch to a scraped list, sent from the company domain, with a subject line that screams automation. Done well, it is the fastest way to reach a narrow buyer when you have no audience. The difference is what you offer and who you send it to." },
      { type: 'callout', text: "Quick answer: Cold outreach gets replies when it goes to a short list of exact-fit people, comes from a separate warmed-up domain, opens with something useful for the recipient instead of a pitch, reads like one person wrote it to another, and follows up with more value rather than pressure." },

      { type: 'heading', text: 'Why Most Cold Outreach Fails' },
      { type: 'list', items: [
        'It sells in the first message. People ignore or block messages that sell software or services.',
        'It goes to anyone who loosely fits, so the message cannot be specific.',
        'It is sent from the main company domain, so spam reports damage everyday email.',
        'It announces itself as cold outreach, looks machine-written or has errors. Nevo David called out exactly these mistakes in a cold email he received (source: Nevo David on X, March 2026).',
      ]},

      { type: 'heading', text: 'The Give-First Rule' },
      { type: 'paragraph', text: "Before you send, ask whether you would want to receive this message. Nevo David notes that people happily reply to messages offering to hire them or invest in them, and ignore messages selling to them. The test: bring something, ask for something small, and keep what you give in proportion to what you ask (source: Nevo David, Alex is Building interview, July 2026)." },

      { type: 'heading', text: 'Step 1: Build a Small, Exact List' },
      { type: 'list', items: [
        'Start from one buyer type and one place they gather: a community, a directory, a list of companies using a tool.',
        'Collect name, company, role, email and the profile where each person is active.',
        'Nevo hired a contractor to collect group owners, group names and emails for his n8n campaign; today an AI agent or a simple scraper can do the same job.',
        'Remove anyone who is not a clear fit. A list of 200 right people beats 5,000 maybes.',
      ]},

      { type: 'heading', text: 'Step 2: Protect Your Main Domain' },
      { type: 'numbered-list', items: [
        'Buy a separate domain for outreach, for example get[yourbrand].com.',
        'Set up SPF, DKIM and DMARC on it.',
        'Warm it up for one to two weeks with a warming service before the first real email. Nevo used Lemwarm; Instantly offers the same.',
        'Send in small daily batches from a few inboxes rather than one big blast.',
      ]},

      { type: 'heading', text: 'Step 3: Make an Offer Worth Answering' },
      { type: 'paragraph', text: "The offer does the work, not the copy. When Nevo asked n8n group owners to feature Postiz in their templates, he offered a free lifetime plan, a feature in the Postiz newsletter, introductions to his network and a backlink from the Postiz site. He reports that about 80% replied, all positively (source: Nevo David, Alex is Building interview, July 2026)." },
      { type: 'table', headers: ['If you are...', 'Offers that work'], rows: [
        ['A SaaS founder', 'Free access for their community, a feature in your newsletter, an integration with their product'],
        ['An agency', 'A short free audit of one channel with three specific fixes'],
        ['An eCommerce brand seeking partners', 'Product for their audience, a revenue share, co-created content'],
        ['A local business', 'A joint offer with a neighboring business that shares your customers'],
      ]},

      { type: 'heading', text: 'Step 4: Write a Short, Human Message' },
      { type: 'list', items: [
        'Subject line: short and plain. Nevo used a lowercase "hi", the person\'s name and an emoji, as a pattern break.',
        'First line: why you are writing to this person specifically.',
        'Middle: the offer in one or two sentences.',
        'End: one easy question, and a line saying you will not email again if they are not interested.',
        'Under 120 words. No attachments, no tracking-heavy links in the first email.',
      ]},

      { type: 'heading', text: 'Step 5: Follow Up With Value, Not Pressure' },
      { type: 'paragraph', text: "Most replies come from follow-ups, but \"just bumping this\" adds nothing. Each follow-up should carry something new: a short guide, an example, a relevant result. People who sign up for your free offer should get useful content on a regular schedule, so that when they need a paid product, you are the obvious one to ask. Nevo describes this as turning outbound into inbound: the prospect starts the commercial conversation." },

      { type: 'heading', text: 'Email, LinkedIn or Communities?' },
      { type: 'table', headers: ['Channel', 'Best for', 'Watch out for'], rows: [
        ['Email', 'Reaching many exact-fit people with a clear offer', 'Domain reputation and spam reports'],
        ['LinkedIn', 'B2B buyers who are active there', 'Connection requests that pitch immediately'],
        ['X direct messages', 'People who already follow you', 'Messages to non-followers land in a hidden inbox'],
        ['Communities', 'Owners who can open a door to many members', 'Rules against self-promotion'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Outreach works better when people can look you up and find useful work. Loraloop drafts the LinkedIn posts, articles and newsletter issues that do that, in your brand voice, and tracks competitors so your offers stay specific. It does not send cold email for you: every post and email it drafts waits for your approval." },

      { type: 'faq', items: [
        { q: 'Is cold email legal?', a: 'B2B cold email is allowed in many countries if you identify yourself, target people for a relevant business reason and honor opt-outs. Rules differ in the EU, UK and Canada, so check the law where your recipients are.' },
        { q: 'How many follow-ups should I send?', a: 'Two or three, a few days apart, each with something new. Stop at the first sign of no interest.' },
        { q: 'Should I use AI to personalize messages?', a: 'Use it to research and draft, then edit every message yourself. Messages that read as machine-written get ignored.' },
        { q: 'Why use a separate domain?', a: 'If recipients mark outreach as spam, the damage stays on the outreach domain instead of affecting your company email.' },
      ]},
      { type: 'cta', text: 'Loraloop keeps your posts and newsletter going so prospects find useful work when they look you up, with every draft approved by you.' },
    ],
    relatedSlugs: ['how-to-get-first-customers-saas', 'how-to-get-clients-for-marketing-agency', 'sell-outcomes-not-features', 'which-marketing-channels-small-business-prioritize'],
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
    id: 200,
    slug: 'sell-outcomes-not-features',
    title: 'Sell the Outcome, Not the Tool: Marketing Messages That Close Sales',
    seoTitle: 'Sell Outcomes, Not Features: How to Write Marketing That Closes Sales',
    description: 'Why buyers pay for results, not feature lists, and how to rewrite your homepage, ads and sales emails around the outcome your product delivers, with proof from real customers.',
    category: 'Business',
    date: publishDate,
    imageIndex: 200,
    tableOfContents: [
      'Tool Alternative or New Outcome?',
      'Find the Outcome Your Customers Already Get',
      'Check It Is Repeatable',
      'Rewrite Your Message Around It',
      'Prove It With Customer Stories',
      'Where to Use Outcome Messages',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "If your marketing says \"the best [category] tool\", you are in a feature fight with every competitor. Buyers compare checklists and prices, and the cheapest acceptable option wins. Selling the outcome changes the question from \"which tool?\" to \"how do I get that result?\", and your product becomes part of the answer." },
      { type: 'callout', text: "Quick answer: Selling outcomes means leading with the result a customer gets, such as more sales, booked calls or hours saved, instead of features. Find the result your best customers already get, check that others can repeat it, write your homepage, ads and emails around it, and prove it with real customer stories." },

      { type: 'heading', text: 'Tool Alternative or New Outcome?' },
      { type: 'paragraph', text: "Nevo David describes two ways to sell a product: as an alternative to an existing tool, or as a new opportunity or outcome. Selling an alternative reaches only people already shopping for the category and ends in feature comparisons and build-versus-buy debates. He argues that growing past $100K MRR at Postiz required selling an outcome instead (source: Nevo David, X article, September 2026)." },
      { type: 'table', headers: ['Selling the tool', 'Selling the outcome'], rows: [
        ['"Schedule posts to 30 channels"', '"Turn one video a week into a month of posts that bring customers"'],
        ['"AI ad creative generator"', '"New ads ready before your current winners wear out"'],
        ['"Marketing reporting dashboard"', '"Know every Monday which channel paid for itself"'],
      ]},

      { type: 'heading', text: 'Find the Outcome Your Customers Already Get' },
      { type: 'numbered-list', items: [
        'List customers who stayed longest or upgraded.',
        'Ask them what changed in their business since they started, in their words.',
        'Look for one result that comes up again and again.',
        'Write it down as a measurable change: more sales, more calls, less time, lower cost.',
      ]},
      { type: 'paragraph', text: "Postiz did this by finding creators who already used the product, learning how they made money with it and documenting the process (source: Nevo David, YouTube interview on Postiz growth, 2026)." },

      { type: 'heading', text: 'Check It Is Repeatable' },
      { type: 'paragraph', text: "One customer's lucky result is a story, not a promise. Before you build a message around an outcome, confirm that other customers can follow the same steps and get a similar result. If they can, turn it into a simple process readers can follow, with your product as one part of it." },

      { type: 'heading', text: 'Rewrite Your Message Around It' },
      { type: 'list', items: [
        'Headline: the outcome and who it is for.',
        'Subheadline: how the product gets them there, in one sentence.',
        'First section: the steps, with your product shown doing its part.',
        'Proof: a customer story with the before and after.',
        'Call to action: start the process, not "learn more about features".',
      ]},

      { type: 'heading', text: 'Prove It With Customer Stories' },
      { type: 'paragraph', text: "Nevo notes that customer success stories are effective at increasing conversions (source: Nevo David on X, April 2026). A good story names the customer type, the starting point, what they did and what changed. Ask permission, use the customer's own words and avoid rounding results up." },

      { type: 'heading', text: 'Where to Use Outcome Messages' },
      { type: 'table', headers: ['Place', 'How to apply it'], rows: [
        ['Homepage', 'Outcome headline, steps, one customer story above the fold or just below'],
        ['Ads', 'Lead with the result and show it happening, not the interface'],
        ['Sales emails', 'Open with a result a similar company got'],
        ['Articles and SEO posts', 'Teach the process; show the product as one step'],
        ['Onboarding', 'Push users to the first step of the outcome, not to settings'],
      ]},
      { type: 'paragraph', text: "One warning: outcome promises raise expectations. If users like the promise but never take the steps, they cancel. Outcome marketing only works when onboarding gets people to that first result quickly." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop works from your brand knowledge, including customer stories and results you add, so the ads, landing pages, posts and emails it drafts lead with outcomes instead of feature lists. You review and approve every piece before it is published." },

      { type: 'faq', items: [
        { q: 'What does selling outcomes mean?', a: 'Leading your marketing with the result a customer gets from your product, such as more sales or time saved, instead of listing what the product does.' },
        { q: 'Should I still list features?', a: 'Yes, lower on the page and in comparison content. Buyers who are close to deciding check features; buyers who are just arriving need to see the result first.' },
        { q: 'What if I have no customer results yet?', a: 'Show the result on your own business or on a pilot customer, and say clearly that it is your own example.' },
        { q: 'Can outcome marketing increase churn?', a: 'It can if onboarding does not get people to the result. Pair outcome messages with onboarding built around the first step.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts ads, pages and emails that lead with the results your customers get, and you approve every piece.' },
    ],
    relatedSlugs: ['free-trial-to-paid-conversion', 'how-to-get-first-customers-saas', 'ad-to-landing-page-message-match', 'brand-voice-consistency-across-channels-ai'],
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
    id: 202,
    slug: 'saas-pricing-to-acquire-customers',
    title: 'SaaS Pricing That Pays for Customer Acquisition',
    seoTitle: 'SaaS Pricing and CAC: How to Price So Ads Can Pay for New Customers',
    description: 'How SaaS pricing decides which channels you can afford: compare customer acquisition cost with revenue per user, push annual plans, avoid the second-cheapest trap and build tiers customers grow into.',
    category: 'Business',
    date: publishDate,
    imageIndex: 202,
    tableOfContents: [
      'Why Price Decides Your Channels',
      'Compare Acquisition Cost With Revenue Per User',
      'Push Annual Plans',
      'Do Not Be the Second Cheapest',
      'Build Tiers Customers Grow Into',
      'Always Show a Pricing Page',
      'Change Pricing on Purpose',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Founders often set a low price to win customers, then find they cannot afford to acquire them. Your price decides how much you can spend to get each customer, and that decides which channels you can use. Price too low and you are stuck with free channels that grow slowly." },
      { type: 'callout', text: "Quick answer: Price your SaaS so the cost of acquiring a customer stays below what that customer pays you early on. Compare CAC with revenue per user, push annual plans so ad-driven sales pay back at once, avoid sitting second cheapest in your market, and add features to higher tiers so customers upgrade as they grow." },

      { type: 'heading', text: 'Why Price Decides Your Channels' },
      { type: 'paragraph', text: "Ads cost roughly the same per customer whether you charge $5 or $69. Nevo David notes that a paid customer rarely costs less than about $50 to acquire outside events like Black Friday, so a $5 product loses money on every ad-driven sale until the customer has stayed for many months (source: Nevo David, X article, October 2026). That is why low-priced products depend on organic and viral channels." },

      { type: 'heading', text: 'Compare Acquisition Cost With Revenue Per User' },
      { type: 'table', headers: ['Term', 'What it means'], rows: [
        ['CAC', 'What you spend on average to get one paying customer'],
        ['ARPU', 'Average revenue per user per month'],
        ['Payback period', 'Months until a customer has paid back their CAC'],
        ['LTV', 'Price multiplied by the months a customer stays'],
      ]},
      { type: 'paragraph', text: "The healthier position keeps CAC below ARPU, so each customer pays for themselves quickly. Nevo gives an example: with a $20 acquisition cost and a $9 starting price, the payback period is about three months and the business stays cash-flow negative until then (source: Nevo David, X article, February 2026)." },

      { type: 'heading', text: 'Push Annual Plans' },
      { type: 'paragraph', text: "An annual plan collects a year of revenue upfront, so an ad-driven sale pays back on day one. Nevo mentions pushing customers toward yearly subscriptions as the way to keep each paid acquisition cash-flow positive (source: Nevo David, X article, October 2026). Offer a clear annual discount and show the annual price by default on your pricing page." },
      { type: 'paragraph', text: "December is a natural moment for this: many buyers have budget left to spend before the year closes or are planning next year's tools. A year-end annual-plan offer with a clear end date gives them a reason to commit now, without a permanent price cut." },

      { type: 'heading', text: 'Do Not Be the Second Cheapest' },
      { type: 'paragraph', text: "Nevo's experience is that lower prices often convert worse, because buyers assume something is missing. Being the cheapest can be a position; being second cheapest, between a budget tool and a premium one, says nothing to the buyer. He prices at the high end of the market and competes on value (source: Nevo David, YouTube talk on pricing, 2024)." },

      { type: 'heading', text: 'Build Tiers Customers Grow Into' },
      { type: 'list', items: [
        'Avoid only two packages, such as free and pro. Customers have nowhere to grow, so lifetime value stops rising.',
        'Do not separate tiers by a single limit such as seats or usage. Customers upgrade only when they hit it.',
        'Add features to each higher tier so customers upgrade when they need them.',
        'Grow revenue per customer with upgrades and add-ons rather than across-the-board price rises.',
      ]},

      { type: 'heading', text: 'Always Show a Pricing Page' },
      { type: 'paragraph', text: "A missing pricing page makes a product look like a side project, or like a company that will surprise you with a big bill later. Nevo recommends a pricing page even before you charge, stating that you are not charging yet (source: Nevo David, gitroom.com blog on open-source pricing). Hide prices only if you sell large deals through sales calls." },

      { type: 'heading', text: 'Change Pricing on Purpose' },
      { type: 'paragraph', text: "Pricing should change as the product and market change. Test one change at a time, keep existing customers on their plan or give them notice, and watch conversion, upgrades and churn for at least a full billing cycle before judging the result." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop helps you see what each channel costs and returns. It reads your ad accounts and analytics, reports cost per customer by channel each week and drafts the campaigns that promote annual plans or upgrades. Budget changes and campaigns wait for your approval before anything goes live." },

      { type: 'faq', items: [
        { q: 'What is a good CAC to LTV ratio?', a: 'Many SaaS companies aim for lifetime value several times higher than acquisition cost. Early on, payback period matters more: how many months until a customer has paid back what you spent to get them.' },
        { q: 'Should I offer a cheaper plan to win more customers?', a: 'Only if you can still afford to acquire those customers. A low plan that only works through free channels limits how fast you can grow.' },
        { q: 'How much discount should an annual plan have?', a: 'Enough to make the choice easy, commonly the equivalent of two to three months free. Make sure the discounted price still covers your acquisition cost.' },
        { q: 'When should I raise prices?', a: 'When customers consistently say yes without pushing back, when you add clear value, or when your price no longer covers acquisition. Give existing customers notice or keep them on their current plan.' },
      ]},
      { type: 'cta', text: 'Loraloop reports cost per customer by channel every week and proposes budget changes for your approval.' },
    ],
    relatedSlugs: ['free-trial-to-paid-conversion', 'how-to-get-first-customers-saas', 'saas-annual-plan-campaign-december', 'marketing-budget-2027-small-teams'],
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
    id: 204,
    slug: 'creator-ugc-partnerships-dtc-brands',
    title: 'Creator and UGC Partnerships for DTC Brands: How to Pick, Pay and Measure',
    seoTitle: 'Creator and UGC Partnerships for DTC Brands: Pick, Pay and Measure (2027)',
    description: 'A practical guide for DTC brands working with creators and UGC: choose creators who use the product and match your buyer, write a clear brief, pay after publishing and measure by comparing push weeks with normal weeks.',
    category: 'Business',
    date: publishDate,
    imageIndex: 204,
    tableOfContents: [
      'The Short Answer',
      'Creator Posts vs UGC for Ads',
      'Step 1: Pick Creators Who Use the Product',
      'Step 2: Match the Audience, Not the Follower Count',
      'Step 3: Write a Brief That Leaves Room',
      'Step 4: Pay Fairly and After Publishing',
      'Step 5: Measure the Push, Not the Click',
      'Step 6: Scale What Works',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Creator content is now one of the main ways DTC brands reach new buyers, and also one of the easiest ways to waste budget. The difference is rarely the creator's size. It is whether they actually use the product, whether their audience is your buyer and whether you measure the right thing." },
      { type: 'callout', text: "Quick answer: Pick creators who already use your product and whose audience matches your buyer, give them a short brief with the outcome and the must-haves but room for their own style, pay a fixed fee after the post is live, and measure by comparing orders in weeks with a creator push against normal weeks, not only by clicks." },

      { type: 'heading', text: 'Creator Posts vs UGC for Ads' },
      { type: 'table', headers: ['Type', 'What you get', 'Best for'], rows: [
        ['Creator posts', 'Content on the creator\'s own account, to their audience', 'Reach and trust with a new audience'],
        ['UGC for ads', 'Videos you run as ads from your own account', 'Testing many angles in paid social'],
        ['Whitelisted ads', 'Ads run from the creator\'s handle, with permission', 'Combining creator trust with ad targeting'],
      ]},

      { type: 'heading', text: 'Step 1: Pick Creators Who Use the Product' },
      { type: 'paragraph', text: "Nevo David only works with creators who actually use Postiz and get results from it. A creator who has never used the product can still produce something that gets views, he says, but it will not be good (source: Nevo David, Alex is Building interview, July 2026). For a DTC brand that means starting with customers who already post, people who left detailed reviews and creators who bought on their own." },

      { type: 'heading', text: 'Step 2: Match the Audience, Not the Follower Count' },
      { type: 'list', items: [
        'Look at who comments, not how many follow. Are they your buyer?',
        'Check the creator\'s recent posts for engagement from real people.',
        'Prefer a creator with a smaller audience of exact buyers over a big general one.',
        'Only judge content in categories you understand well enough to tell good from bad.',
      ]},

      { type: 'heading', text: 'Step 3: Write a Brief That Leaves Room' },
      { type: 'list', items: [
        'The moment or outcome to show, not a script.',
        'Two or three facts that must be correct: claims you can support, price, where to buy.',
        'What to avoid: health or results claims you cannot back up, competitor names.',
        'Formats that work: a first second or first slide with a person, a doubt and a reveal.',
        'Disclosure: the paid partnership label, as platform rules and advertising law require.',
      ]},

      { type: 'heading', text: 'Step 4: Pay Fairly and After Publishing' },
      { type: 'paragraph', text: "Agree a fixed fee per post or video, and pay once it is live so posts are not delayed or skipped. For ongoing short-form content, Nevo reports that hiring a creator to publish a video every day typically costs between $20 and $45 per video (source: Nevo David, X article, September 2026). Rates vary widely by niche, audience and usage rights, so agree usage rights for ads in writing." },

      { type: 'heading', text: 'Step 5: Measure the Push, Not the Click' },
      { type: 'paragraph', text: "Many people who see a creator post search for the brand later instead of clicking the link, so direct attribution undercounts. Nevo measures his creator campaigns by comparing total trials in weeks with a big push against normal weeks (source: Nevo David, Alex is Building interview, July 2026). For a DTC brand, do the same with new customers and branded search." },
      { type: 'table', headers: ['Signal', 'How to read it'], rows: [
        ['New customers in push weeks vs normal weeks', 'The main measure of a creator push'],
        ['Branded search volume', 'Rises when people look you up after a post'],
        ['Code or link sales', 'A floor, not the full effect'],
        ['Saves, shares and comments asking where to buy', 'Early signs a post is selling'],
      ]},

      { type: 'heading', text: 'Step 6: Scale What Works' },
      { type: 'numbered-list', items: [
        'Keep the creators and formats that moved new customers.',
        'Turn the best creator posts into ads, with permission.',
        'Give repeat creators a monthly retainer for a set number of posts.',
        'Replace formats when they stop working; no format lasts forever.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts creator briefs from your brand knowledge, turns approved creator content into ad variations, tracks which angles competitors are scaling and reports new customers by channel each week. You approve every brief, ad and budget change before it goes out." },

      { type: 'faq', items: [
        { q: 'How much should a DTC brand pay creators?', a: 'It depends on the niche, audience size and whether you can use the content in ads. Agree a fixed fee per post, pay after publishing and pay more for usage rights.' },
        { q: 'Micro creators or big creators?', a: 'Start with smaller creators whose audience is exactly your buyer. They are easier to test, and their recommendations often feel more personal.' },
        { q: 'Do creators need to disclose paid posts?', a: 'Yes. Use the platform\'s paid partnership label and follow advertising rules in the countries where you sell, such as FTC guidance in the US and ASA rules in the UK.' },
        { q: 'How do I find creators who already use my product?', a: 'Search your brand name and tagged posts on each platform, check reviews with photos, and ask customers in your post-purchase email whether they create content.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts creator briefs and turns approved creator posts into ad variations, with your approval on every piece.' },
    ],
    relatedSlugs: ['get-new-customers-shopify-without-discounts', 'ugc-vs-static-vs-video-ads-meta', 'ad-creative-production-pipeline-dtc', 'hook-rate-hold-rate-thumbstop-creative-metrics'],
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
    description: 'How service businesses lose leads between the first message and the booking, and how to fix it: reply fast, give one booking link, ask a few qualifying questions, follow up on a schedule and track every lead.',
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
        'Set an automatic text reply for missed calls with your booking link.',
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
