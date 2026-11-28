import type { BlogPost } from './blogData';

// Long-form guides batch B (rewritten November 28, 2026): ids 211, 212, 216, 217, 218, 220.
// Research per post: Google results, People Also Ask and related searches (Treg -> cloro Google SERP, US,
// Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP, cited with source and date where returned) and
// platform or legal sources (Google, Meta, FTC, UK and Canadian rules) for policy facts. Statistics that
// appeared only in AI Overviews or vendor pages were left out. Worked examples are labelled as illustrative.
const publishDate = 'November 28, 2026';

export const guideBlogPostsB: BlogPost[] = [
  // "how to get more google reviews" US 590 + "how to ask customers for reviews" US 480
  {
    id: 216,
    slug: 'how-to-get-more-google-reviews',
    title: 'How to Get More Google Reviews: Scripts, Timing and the Rules',
    seoTitle: 'How to Get More Google Reviews: Scripts, Timing and Google\'s Rules (2027)',
    description: 'A complete guide to getting more Google reviews: find your review link and QR code, ask at the right moment, copy-paste text and email scripts by business type, reply to every review, handle negative ones, and stay within Google, FTC and UK rules.',
    category: 'Business',
    date: publishDate,
    imageIndex: 216,
    tableOfContents: [
      'The Short Answer',
      'Why Google Reviews Matter',
      'Step 1: Get Your Review Link and QR Code',
      'Step 2: Ask at the Right Moment',
      'Step 3: Make It One Tap',
      'Review Request Scripts by Business Type',
      'Step 4: Put Review Asks Everywhere Customers Look',
      'Step 5: Reply to Every Review',
      'Handling Negative Reviews',
      'The Rules: What Google, the FTC and UK Law Do Not Allow',
      'Multi-Location Brands and Agencies',
      'How to Measure Your Review Program',
      'A 30-Day Review Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "For a local business, Google reviews do three jobs at once. They persuade people comparing you with competitors, they help you show up in Google Search and Maps, and they give AI assistants something specific to say when someone asks for a recommendation. Most businesses have far fewer reviews than happy customers, simply because they never ask, or ask badly." },
      { type: 'paragraph', text: "This guide gives you the full system: where to find your review link, when to ask, exact scripts for different businesses, how to reply, and the rules you must not break." },
      { type: 'callout', text: "Quick answer: Get your review link and QR code from your Google Business Profile, ask every customer right after a good experience, send the link by text or email so leaving a review takes one tap, put the QR code where customers pay or finish, reply to every review within a day or two, and never offer rewards for reviews or ask only happy customers, which Google's policies prohibit." },

      { type: 'heading', text: 'Why Google Reviews Matter' },
      { type: 'list', items: [
        'Choice: people read recent reviews before calling or booking, and compare you with the next result.',
        'Visibility: Google lists reviews among the signals for local results, alongside relevance and distance.',
        'Trust signals everywhere: review text gives detail that your own marketing cannot, such as how you handled a problem.',
        'AI answers: assistants that recommend local businesses draw on reviews and profile details.',
      ]},

      { type: 'heading', text: 'Step 1: Get Your Review Link and QR Code' },
      { type: 'numbered-list', items: [
        'Make sure your Google Business Profile is verified.',
        'In your profile, choose the option to ask for reviews. Google gives you a short link that opens the review form, and a QR code.',
        'Save the link in your phone\'s text shortcuts, your email templates and your booking or invoicing tool.',
        'Print the QR code on cards, receipts, counter signs and invoices.',
      ]},
      { type: 'paragraph', text: "Customers need a Google Account to leave a review. It does not have to be a Gmail address; any email can be used to create one." },

      { type: 'heading', text: 'Step 2: Ask at the Right Moment' },
      { type: 'table', headers: ['Business', 'Best moment to ask'], rows: [
        ['Home services and trades', 'As the job is finished and the customer has seen the result'],
        ['Clinics, salons, gyms', 'At checkout, or by text the same day'],
        ['Restaurants and cafes', 'With the bill, or a QR card on the table'],
        ['Professional services', 'After a milestone or a delivered result'],
        ['Online stores (Google product or seller reviews)', 'After the order has arrived and been used'],
      ]},
      { type: 'paragraph', text: "The common thread: ask when the customer is happiest, not weeks later. If they praise you in person or in a message, that is your cue to ask." },

      { type: 'heading', text: 'Step 3: Make It One Tap' },
      { type: 'list', items: [
        'Send the direct review link, never your homepage or a page with several options.',
        'Text messages usually get faster responses than email for local businesses.',
        'Keep the message short and personal, with the customer\'s name.',
        'Send one reminder a few days later if they have not reviewed, then stop.',
      ]},

      { type: 'heading', text: 'Review Request Scripts by Business Type' },
      { type: 'table', headers: ['Business', 'Text message'], rows: [
        ['Cleaning or home service', 'Hi [Name], thanks for having us today. If you\'re happy with the clean, a quick Google review would really help us: [link]. Thank you!'],
        ['Clinic or salon', 'Thanks for visiting today, [Name]. If you have a minute, we\'d love a Google review: [link]. It helps other people find us.'],
        ['Restaurant', 'Thanks for dining with us! If you enjoyed it, a quick review helps a lot: [link].'],
        ['Professional service', 'Hi [Name], glad we got [result] done. Would you share your experience on Google? [link]'],
        ['Reminder', 'Hi [Name], just in case you meant to leave a review: [link]. No worries if not, and thanks again.'],
      ]},
      { type: 'paragraph', text: "In person: \"Thanks so much. If you\'re happy with how it went, a Google review would really help us. Can I text you the link?\" Then send it while they are still there." },

      { type: 'heading', text: 'Step 4: Put Review Asks Everywhere Customers Look' },
      { type: 'list', items: [
        'Email signatures and invoice footers.',
        'Receipts, thank-you cards and packaging inserts.',
        'Your website: a "Review us" page and a link on the contact page.',
        'The confirmation or follow-up email after every job or order.',
        'A small sign at the counter or door with the QR code.',
      ]},

      { type: 'heading', text: 'Step 5: Reply to Every Review' },
      { type: 'table', headers: ['Review type', 'Reply approach'], rows: [
        ['Positive, detailed', 'Thank them by name and mention something specific they said'],
        ['Positive, short', 'Short thanks; invite them back'],
        ['Mixed', 'Thank them, acknowledge the issue, say what you changed'],
        ['Negative', 'Stay calm, take responsibility where fair, offer to resolve it offline'],
      ]},
      { type: 'paragraph', text: "Reply within a day or two. People reading reviews read your replies too; they show how you treat customers." },

      { type: 'heading', text: 'Handling Negative Reviews' },
      { type: 'numbered-list', items: [
        'Do not reply in anger. Wait an hour if you need to.',
        'Thank them for the feedback and acknowledge what went wrong without arguing details in public.',
        'Never share private details about the customer.',
        'Offer a direct way to fix it: a phone number or email.',
        'If you resolve it, it is fine to ask whether they would update their review; never require it.',
        'Only flag a review for removal if it breaks Google\'s content policies (for example spam, conflict of interest or offensive content), not because it is negative.',
      ]},

      { type: 'heading', text: 'The Rules: What Google, the FTC and UK Law Do Not Allow' },
      { type: 'table', headers: ['Do not', 'Why'], rows: [
        ['Offer discounts, gifts, entries or bonuses for reviews', 'Google\'s policies prohibit incentives for reviews'],
        ['Ask only customers you expect to be happy (review gating)', 'Google\'s policies prohibit selectively soliciting positive reviews'],
        ['Buy, write or swap reviews', 'In the US, the FTC\'s rule on fake reviews prohibits them; in the UK, the Digital Markets, Competition and Consumers Act bans fake reviews and hidden incentivized ones'],
        ['Have staff or family review the business', 'Conflict of interest under Google\'s policies'],
        ['Set up review stations on your premises', 'Google discourages soliciting reviews in bulk from one location or device'],
      ]},
      { type: 'paragraph', text: "Is it legal to buy Google reviews? No: beyond breaking Google's policies, buying fake reviews can break consumer protection law in the US, UK and Canada, and Google can remove reviews or restrict your profile." },

      { type: 'heading', text: 'Multi-Location Brands and Agencies' },
      { type: 'list', items: [
        'Give every location its own review link and QR code, so reviews land on the right profile.',
        'Use one shared script library so every location asks the same, compliant way.',
        'Track review count, rating and reply time by location each month.',
        'Agencies: report review growth per client alongside calls and direction requests from the profile.',
      ]},

      { type: 'heading', text: 'How to Measure Your Review Program' },
      { type: 'table', headers: ['Metric', 'Why it matters'], rows: [
        ['New reviews per month', 'Shows whether asking is happening consistently'],
        ['Ask rate', 'Share of customers who received an ask; the number you control'],
        ['Average rating', 'Customer perception over time'],
        ['Reply rate and reply time', 'How engaged you look to prospective customers'],
        ['Calls, website clicks and directions from your profile', 'Whether reviews turn into business'],
      ]},

      { type: 'heading', text: 'A 30-Day Review Plan' },
      { type: 'table', headers: ['Week', 'Do this'], rows: [
        ['Week 1', 'Get your review link and QR code; save scripts; print cards and a counter sign'],
        ['Week 2', 'Ask every customer the same day; reply to every existing review'],
        ['Week 3', 'Add asks to invoices, email signatures and follow-up emails'],
        ['Week 4', 'Check new reviews, ask rate and replies; fix the step where asks are being missed'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts review requests and replies to every new review in your brand voice, flags negative reviews so a person can respond, and reports review growth by location. Every message and reply waits for your approval before it is sent or published." },

      { type: 'faq', items: [
        { q: 'How can I increase my Google reviews fast?', a: 'Ask every customer on the same day with your direct review link by text, put the QR code where customers pay, and send one reminder. Consistent asking beats any shortcut.' },
        { q: 'Is it legal to buy Google reviews?', a: 'No. It breaks Google\'s policies and can break consumer protection law, including the FTC\'s rule on fake reviews in the US and the UK\'s ban on fake reviews.' },
        { q: 'How do I get 1,000 Google reviews?', a: 'By asking every customer, every time, for as long as it takes. Businesses with many reviews usually have a high customer volume and an asking routine built into checkout or job completion.' },
        { q: 'How many 5-star reviews do I need to raise my rating?', a: 'It depends on your current count and average. With few reviews, each new one moves the average a lot; with many, change is slow. Focus on steady new reviews and great service.' },
        { q: 'Can I offer a discount for a Google review?', a: 'No. Google prohibits incentives for reviews, even if the review does not have to be positive.' },
        { q: 'Do customers need a Gmail account to leave a review?', a: 'They need a Google Account, which can be created with any email address.' },
        { q: 'Should I reply to every Google review?', a: 'Yes. Replies show prospective customers how you treat people, and a calm reply to a negative review can matter as much as the review itself.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your review requests and replies in your voice, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'google-business-profile-holiday-checklist-multi-location', 'local-seo-ai-era-near-me-recommendations', 'how-to-get-customers-for-cleaning-business'],
  },

  // "facebook ad examples" US 880 / UK 140 / CA 90
  {
    id: 211,
    slug: 'facebook-ad-examples',
    title: 'Facebook Ad Examples: 15 Ad Types That Work, With Templates and Hooks',
    seoTitle: 'Facebook Ad Examples: 15 Ad Types That Work, With Copy Templates (2027)',
    description: 'Fifteen Facebook and Instagram ad types with copy templates and hooks: problem and solution, before and after, UGC, reviews, demos, comparisons, local and lead-form ads, plus how to find real examples in the Meta Ad Library and test them.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 211,
    tableOfContents: [
      'The Short Answer',
      'What a Facebook Ad Looks Like',
      'The Anatomy of an Ad That Converts',
      'Write the Hook First',
      '15 Facebook Ad Types With Templates',
      'Examples by Business Type',
      'How to Find Real Examples in the Meta Ad Library',
      'Ad Copy Formulas',
      'The 20% Rule and Current Creative Trends',
      'How to Test Ad Examples on a Small Budget',
      'Mistakes That Waste Good Creative',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Looking at Facebook ad examples is useful only if you understand why an ad works and can adapt the structure to your own product. Big-brand galleries rarely help a local business or a small online store, because the budget, product and audience are different." },
      { type: 'paragraph', text: "This guide breaks down fifteen ad types that work across Facebook and Instagram, with a copy template for each, hook formulas, examples for different businesses, and a simple way to find and test real ads in your own market. The examples use clearly fictional businesses so you can see the structure; use your own claims and proof." },
      { type: 'callout', text: "Quick answer: The Facebook ad types that most often work are problem and solution, before and after, customer review, user-generated video, founder story, product demo, comparison, offer, \"X reasons\" carousel, objection answer, how-to, local proof, lead form, seasonal and retargeting reminders. Write the hook first, find live examples in your market in the Meta Ad Library, and test two or three types at a time." },

      { type: 'heading', text: 'What a Facebook Ad Looks Like' },
      { type: 'table', headers: ['Part', 'Where it appears', 'Job'], rows: [
        ['Primary text', 'Above the image or video', 'Hook and the main message'],
        ['Creative', 'Image, video or carousel', 'Stops the scroll and shows the product or result'],
        ['Headline', 'Below the creative', 'Restates the benefit or offer'],
        ['Call-to-action button', 'Beside the headline', 'Shop now, Learn more, Book now, Send message'],
        ['Destination', 'Website, form, Messenger, WhatsApp or Instagram DM', 'Where the action happens'],
      ]},
      { type: 'paragraph', text: "The same ad can run in Facebook and Instagram feeds, Stories and Reels. Give each ad a square or 4:5 version and a vertical 9:16 version." },

      { type: 'heading', text: 'The Anatomy of an Ad That Converts' },
      { type: 'list', items: [
        'A hook that names a person, a problem or a result in the first line or first second.',
        'One clear message, not five features.',
        'Proof: a review, a demo, a before and after, a number you can support.',
        'A specific next step that matches the button.',
        'A landing page or form that continues the same promise.',
      ]},

      { type: 'heading', text: 'Write the Hook First' },
      { type: 'paragraph', text: "Most people decide in the first moment whether to keep watching or reading. Nevo David, founder of Postiz, puts it bluntly for slideshow ads: slide 1 \"is the hook and the only slide that 95% of people will read\" (source: Nevo David, \"Selling SaaS Through Outcomes\", X article). His tested formula uses a specific person and a moment of doubt: \"[Another person] + [conflict or doubt] → showed them → they changed their mind\". In one test, a hook built that way reached 234,000 views while product-centred hooks reached 905, 879 and 2,671 views (source: Nevo David, \"How to Automate 4-5-Slide TikTok Posts with AI Agents\", X article)." },
      { type: 'list', items: [
        'Use a specific person: "my landlord", "my mum", "our first customer", not "people".',
        'Add a number or a time when you have a real one.',
        'Leave a small story the viewer wants to finish.',
        'Never invent numbers in hooks; Nevo warns against it and ad reviewers may reject unsupported claims.',
        'Show the final result first; hook styles wear out once everyone copies them.',
      ]},

      { type: 'heading', text: '15 Facebook Ad Types With Templates' },
      { type: 'table', headers: ['Ad type', 'Template', 'Example (fictional)'], rows: [
        ['Problem and solution', 'Tired of [problem]? [Product] [result] in [time].', 'Tired of bitter office coffee? Morning Roast brews smooth in 2 minutes.'],
        ['Before and after', 'Show the start, then the result, side by side.', 'Stained oven before, spotless after a Sparkle Cleaning visit.'],
        ['Customer review', 'Quote a real review word for word with the first name.', '"Finally a plumber who turned up on time." - Dana'],
        ['UGC video', 'A customer films themselves using it, in their words.', 'Phone video of a customer\'s morning routine.'],
        ['Founder story', 'Why I started [brand]: the problem I had.', 'Founder explains sourcing from one farm.'],
        ['Product demo', 'Show it working in the first three seconds.', 'Hands making a cup in 15 seconds.'],
        ['Comparison', 'Us vs the usual option on the points buyers care about.', 'Morning Roast vs cafe coffee: price per cup, taste, time.'],
        ['Offer', 'A clear offer with a real end date.', 'Free grinder with your first subscription, ends Sunday.'],
        ['X reasons carousel', 'One reason per card, a final card with the offer.', '5 reasons families switch to Sparkle Cleaning.'],
        ['Objection answer', 'Name the doubt, then answer it.', '"Is it hard to cancel?" Cancel in two clicks.'],
        ['How-to', 'Teach something useful; the product is one step.', '3 ways to make cold brew at home.'],
        ['Local proof', 'Name the area and show local work.', 'Another kitchen done in Riverside this week.'],
        ['Lead form', 'A useful offer in exchange for details.', 'Get a free cleaning quote in 60 seconds.'],
        ['Seasonal', 'Tie the product to a date or moment.', 'The gift for the coffee lover who has everything.'],
        ['Retargeting reminder', 'Remind visitors of what they viewed, with a reason to return.', 'Still thinking about the starter kit? Free shipping this week.'],
      ]},

      { type: 'heading', text: 'Examples by Business Type' },
      { type: 'table', headers: ['Business', 'Start with these types'], rows: [
        ['Online store (DTC)', 'UGC video, product demo, customer review, X reasons carousel, retargeting'],
        ['Local service', 'Before and after, local proof, review, lead form, offer'],
        ['SaaS', 'Problem and solution, demo, founder story, objection answer, comparison'],
        ['Agency (for clients)', 'Mirror the client\'s business type; add a case study ad for your own agency'],
        ['Restaurant or cafe', 'Product close-ups, seasonal, local proof, offer'],
      ]},

      { type: 'heading', text: 'How to Find Real Examples in the Meta Ad Library' },
      { type: 'numbered-list', items: [
        'Open the Meta Ad Library (facebook.com/ads/library); it is public and free.',
        'Choose your country and "All ads", then search competitors and brands your customers also buy from.',
        'Filter to active ads and note how long each has been running; advertisers rarely keep paying for ads that do not work.',
        'Write down the ad type, hook, offer and format for each long-running ad.',
        'Look for patterns across several advertisers, then adapt the structure to your product. Never copy creative directly.',
      ]},

      { type: 'heading', text: 'Ad Copy Formulas' },
      { type: 'table', headers: ['Formula', 'Structure', 'Use for'], rows: [
        ['PAS', 'Problem, agitate, solution', 'Pain-driven products and services'],
        ['Before, after, bridge', 'Life before, life after, how to get there', 'Transformation products'],
        ['Hook, outcome, how-to, CTA', 'Nevo\'s video structure', 'Short video and slideshows'],
        ['Feature, benefit, proof', 'What it does, what it means, evidence', 'Considered purchases'],
      ]},
      { type: 'paragraph', text: "Keep primary text short for cold audiences; longer copy can work for retargeting and considered purchases. Put the most important line first, because the rest is often cut off behind \"See more\"." },

      { type: 'heading', text: 'The 20% Rule and Current Creative Trends' },
      { type: 'paragraph', text: "The \"20% rule\" was Meta's old limit on how much text an ad image could contain. Meta dropped the hard rule in 2020, but images with less text still tend to perform better. Current practice favors native-looking video, real people, vertical formats for Reels and Stories, and many creative variations so Meta's delivery system can find what works. Be careful with AI-generated images: Nevo notes they can look sloppy and suggests modifying real reference photos instead (Nevo David on X, 2 Jun 2026)." },

      { type: 'heading', text: 'How to Test Ad Examples on a Small Budget' },
      { type: 'numbered-list', items: [
        'Pick two or three ad types that fit your business.',
        'Make two versions of each with different hooks.',
        'Run them in one campaign and ad set, with the same offer and audience.',
        'Judge on cost per purchase or lead after enough results, not on likes.',
        'Make new versions of the winning type with fresh hooks; retire losers.',
      ]},

      { type: 'heading', text: 'Mistakes That Waste Good Creative' },
      { type: 'list', items: [
        'Leading with the logo or brand name instead of the hook.',
        'Squeezing five messages into one ad.',
        'No vertical version, so Stories and Reels show a cropped ad.',
        'Sending the click to a homepage that does not match the ad.',
        'Changing everything at once, so you cannot tell what worked.',
        'Before-and-after or personal-attribute claims that break Meta\'s advertising standards; check them before you launch.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Angie, Loraloop's ads specialist, drafts new ad variations from your brand knowledge and best performers, tracks which angles competitors are scaling in the Meta Ad Library and spots fatigued ads early. Every new ad and budget change waits for your approval before it runs." },

      { type: 'faq', items: [
        { q: 'What does an ad look like on Facebook?', a: 'Primary text above an image, video or carousel, a headline below, a call-to-action button and a destination such as a website, form or Messenger.' },
        { q: 'What is the 20 rule on Facebook ads?', a: 'Meta\'s old limit on text covering more than 20% of an ad image. Meta dropped the hard rule in 2020, but less text on images still tends to perform better.' },
        { q: 'Where can I see examples of Facebook ads?', a: 'The Meta Ad Library shows active ads from any advertiser on Facebook and Instagram, searchable by brand or keyword.' },
        { q: 'Is $10 a day enough for Facebook ads?', a: 'It is enough to test hooks and ad types or get cheap leads; it is too little to optimize a sales campaign quickly.' },
        { q: 'What are the current Facebook ad trends?', a: 'Native-looking vertical video, real people and UGC, many creative variations, and broad targeting where the creative does the work.' },
        { q: 'Do video ads beat image ads?', a: 'Not always. Some products sell best on a clear image, others need a demo. Test both with the same offer.' },
        { q: 'How many ads should I run at once?', a: 'For small budgets, two or three ad types with two versions each in one ad set is enough.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts new ad variations from your best performers, and nothing runs until you approve it.' },
    ],
    relatedSlugs: ['find-new-ad-angles-when-winners-stop-working', 'competitor-ad-research-meta-ad-library', 'hook-rate-hold-rate-thumbstop-creative-metrics', 'ugc-vs-static-vs-video-ads-meta'],
  },

  // "facebook ads for small business" US 590 / UK 30 / CA 50
  {
    id: 217,
    slug: 'facebook-ads-for-small-business',
    title: 'Facebook Ads for Small Business: The Complete Setup and Strategy Guide',
    seoTitle: 'Facebook Ads for Small Business: Complete Setup and Strategy Guide (2027)',
    description: 'How a small business can run Facebook and Instagram ads that pay: whether they are worth it, account setup, Pixel and Conversions API, objectives, local targeting, lead forms and lead quality, creative, budget math, a weekly routine and when to hire help.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 217,
    tableOfContents: [
      'The Short Answer',
      'Are Facebook Ads Worth It for a Small Business?',
      'Step 1: Set Up Your Accounts',
      'Step 2: Tracking With the Pixel and Conversions API',
      'Step 3: Choose the Right Objective',
      'Step 4: Keep the Campaign Structure Simple',
      'Step 5: Audience and Local Targeting',
      'Step 6: Creative That Works for Small Businesses',
      'Step 7: Lead Forms and Lead Quality',
      'Budget: How Much to Spend',
      'Special Ad Categories and Ad Review',
      'A Weekly Facebook Ads Routine',
      'When to Get Help',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Facebook and Instagram ads can bring a small business a steady flow of customers. They can also quietly spend money on clicks and leads that never buy. The difference is rarely the budget. It is tracking that works, an objective that matches your goal, a simple account, creative that earns attention and follow-up that turns leads into customers." },
      { type: 'paragraph', text: "This guide walks through the full setup in order, explains the budget math, and covers the details small businesses often miss, such as lead form quality and special ad category rules." },
      { type: 'callout', text: "Quick answer: Set up a Meta business portfolio with your Page, Instagram and ad account, install the Meta Pixel and Conversions API, choose the Sales or Leads objective, run one campaign with one or two ad sets and several ads, target broadly within your area, test creative every week, follow up with leads fast, and budget from your target cost per result." },

      { type: 'heading', text: 'Are Facebook Ads Worth It for a Small Business?' },
      { type: 'paragraph', text: "They are worth it when your profit per customer can pay for your cost per customer, and you can measure both. The math matters most for low-priced subscriptions. Nevo David, founder of Postiz, gives two examples: \"If customer acquisition costs $50 and the customer pays $9 per month\", the customer has to stay a long time before the ad pays for itself, while an acquisition cost of $20 on a $9 plan pays back in approximately three months (sources: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\" and \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X articles). Local services with high job values and online stores with healthy margins usually have more room." },

      { type: 'heading', text: 'Step 1: Set Up Your Accounts' },
      { type: 'numbered-list', items: [
        'Create a Meta business portfolio (formerly Business Manager) owned by your business, not a staff member.',
        'Connect your Facebook Page and Instagram account.',
        'Create an ad account in the portfolio and add a payment method.',
        'Give team members or an agency access through the portfolio, so you keep ownership.',
      ]},

      { type: 'heading', text: 'Step 2: Tracking With the Pixel and Conversions API' },
      { type: 'list', items: [
        'Install the Meta Pixel on your website (most store and booking platforms have a built-in integration).',
        'Add the Conversions API so events are also sent from your server, which keeps tracking more reliable.',
        'Choose the event that matters: Purchase, Lead, Schedule or Contact.',
        'Test it in Events Manager by completing the action yourself.',
        'For lead forms on Facebook itself, connect a CRM or download leads daily.',
      ]},

      { type: 'heading', text: 'Step 3: Choose the Right Objective' },
      { type: 'table', headers: ['Your goal', 'Objective', 'Optimize for'], rows: [
        ['Online sales', 'Sales', 'Purchases'],
        ['Bookings or quote requests on your site', 'Leads or Sales', 'Lead or Schedule event'],
        ['Leads without a website', 'Leads', 'Instant Forms'],
        ['Messages', 'Engagement or Leads', 'Conversations in Messenger, WhatsApp or Instagram'],
        ['Local awareness', 'Awareness', 'Reach within your area'],
      ]},
      { type: 'paragraph', text: "Avoid the Traffic objective when you want customers. It finds people who click, not people who buy." },

      { type: 'heading', text: 'Step 4: Keep the Campaign Structure Simple' },
      { type: 'list', items: [
        'One campaign per goal.',
        'One or two ad sets, so each gets enough results to learn.',
        'Four to six ads per ad set with different angles.',
        'Advantage+ placements on, so ads run across Facebook, Instagram, Messenger and more.',
        'Clear names for campaigns, ad sets and ads.',
      ]},

      { type: 'heading', text: 'Step 5: Audience and Local Targeting' },
      { type: 'list', items: [
        'Online businesses: start broad within your country; let creative and conversion data guide delivery.',
        'Local businesses: target a radius or list of postcodes you actually serve, and choose people living in or recently in the area.',
        'Exclude existing customers when promoting a new-customer offer.',
        'Retarget website visitors and engaged Instagram or Facebook users with reminders and reviews.',
      ]},

      { type: 'heading', text: 'Step 6: Creative That Works for Small Businesses' },
      { type: 'list', items: [
        'Real photos and short videos of your work, product or team beat polished stock images.',
        'Before and after (within Meta\'s advertising standards), customer reviews and quick demos.',
        'A hook in the first line or first second: a person, a problem or a result.',
        'A vertical 9:16 version of every ad for Reels and Stories.',
        'New ads every week or two, because the same people will tire of the same ad.',
      ]},

      { type: 'heading', text: 'Step 7: Lead Forms and Lead Quality' },
      { type: 'paragraph', text: "Instant Forms let people send details without leaving Facebook, which brings more leads at a lower cost, and often lower quality. Improve quality with these settings and habits:" },
      { type: 'list', items: [
        'Choose the higher-intent form type, which adds a review step before submitting.',
        'Ask one or two qualifying questions: service needed, area, timing.',
        'State prices or ranges in the ad so people self-qualify.',
        'Call or message every lead within minutes or hours, not days.',
        'Track which leads became customers and judge ads by cost per customer, not cost per lead.',
      ]},

      { type: 'heading', text: 'Budget: How Much to Spend' },
      { type: 'paragraph', text: "Meta says an ad set generally needs about 50 optimization events a week to leave the learning phase. Budget per ad set is roughly 50 times your target cost per result each week." },
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: a cleaning business pays up to $25 per lead and closes 1 in 3, so a new customer costs about $75. One ad set at 50 leads a week would need about $1,250 a week. With $300 a week instead, run one ad set, optimize for leads, accept slower learning, and judge results over three to four weeks." },
      { type: 'paragraph', text: "Remember that Meta may spend up to 75% more than your daily budget on some days, keeping weekly spend within seven times the daily budget, according to Meta's documentation. Judge spend by the week." },

      { type: 'heading', text: 'Special Ad Categories and Ad Review' },
      { type: 'list', items: [
        'Ads about housing, employment, credit, or social issues, elections and politics must be declared in a special ad category, which limits targeting options.',
        'Every ad goes through Meta\'s review; claims about personal attributes, health or before-and-after results get extra scrutiny.',
        'Keep your landing page consistent with the ad; mismatches can cause rejections.',
      ]},

      { type: 'heading', text: 'A Weekly Facebook Ads Routine' },
      { type: 'table', headers: ['Check', 'Action'], rows: [
        ['Cost per result by ad', 'Pause clear losers; keep winners'],
        ['Frequency and CTR', 'Add new creative when frequency climbs and CTR falls'],
        ['Events Manager', 'Confirm purchases or leads are still recording'],
        ['Lead follow-up', 'Check every lead was contacted and note which became customers'],
        ['New tests', 'Add one or two new ads with a different angle'],
      ]},

      { type: 'heading', text: 'When to Get Help' },
      { type: 'paragraph', text: "Consider a freelancer, agency or platform when you have product-market fit but no time to test creative weekly, when spend grows beyond what you can monitor, or when tracking problems keep coming back. Keep the ad account and business portfolio in your name, agree a target cost per result, and ask for reports that include decisions, not just numbers." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop reads your Meta ads every day, flags fatigued ads and tracking problems, drafts new ad variations, and proposes budget moves. Every change waits for your approval before it goes live. The free Meta ads audit shows where your current account is wasting budget." },

      { type: 'faq', items: [
        { q: 'Are Facebook ads worth it for a small business?', a: 'Yes, when your profit per customer can cover your cost per customer and you can track results. Without tracking, it is hard to know whether ads pay.' },
        { q: 'How much do Facebook ads cost for a small business?', a: 'You choose the budget. Plan roughly 50 times your target cost per result per ad set each week, and adjust from real results.' },
        { q: 'Is $10 a day enough for Facebook ads?', a: 'It is enough for testing creative or getting cheap leads and messages locally, not enough to optimize a purchase campaign quickly.' },
        { q: 'What is the 20 rule on Facebook ads?', a: 'Meta\'s former limit on text covering 20% of an ad image. It was dropped in 2020, though less text still tends to perform better.' },
        { q: 'Can I run Facebook ads for free?', a: 'No, ads cost money, but organic posts, your Page, groups and Instagram are free. Promote posts that already perform well.' },
        { q: 'Should I use lead forms or my website?', a: 'Lead forms bring more leads at a lower cost; your website often brings better-qualified ones. Test both and compare cost per customer.' },
        { q: 'How long until Facebook ads work?', a: 'Give a new campaign at least one to two weeks, and avoid big changes during the learning phase.' },
      ]},
      { type: 'cta', text: 'Start with the free Meta ads audit, then let Loraloop propose fixes you approve one by one.' },
    ],
    relatedSlugs: ['how-much-do-facebook-ads-cost', 'meta-ads-multiple-products-markets-account-structure', 'meta-ads-daily-monitoring-checklist', 'facebook-ad-examples'],
  },

  // "small business marketing ideas" US 720 / UK 110 / CA 50
  {
    id: 212,
    slug: 'small-business-marketing-ideas',
    title: 'Small Business Marketing Ideas: 40 Practical Ideas and How to Choose',
    seoTitle: 'Small Business Marketing Ideas for 2027: 40 Low-Cost Ideas and a Plan',
    description: 'Forty practical small business marketing ideas, sorted by cost and time and by business type (local, online store, B2B), with a simple way to pick your first three, a 30-day plan and how to tell which ideas are working.',
    category: 'Business',
    date: publishDate,
    imageIndex: 212,
    tableOfContents: [
      'The Short Answer',
      'How to Choose: Cost, Time and Business Type',
      'Free Ideas: Local Search and Reviews',
      'Free Ideas: Email, Text and Referrals',
      'Free Ideas: Social Media and Content',
      'Free Ideas: Partnerships and Community',
      'Low-Cost Ideas: Print and In-Person',
      'Paid Ideas: Ads That Suit Small Budgets',
      'Ideas for Getting Found in AI Search',
      'Ideas by Business Type',
      'Your First 30 Days',
      'How to Tell Which Ideas Work',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small businesses do not need more marketing ideas. They need three that fit their business, done every week. Lists of 100 ideas tend to produce a burst of activity and then nothing. This guide gives you 40 practical ideas, sorted so you can pick quickly, plus a plan to make them stick." },
      { type: 'paragraph', text: "Nevo David, founder of Postiz, sums up the principle: \"Marketing rests on two things: an innovative way to get a lot of good traffic, and consistency. Execution matters more than tactics.\" (source: \"What to delegate in early-stage marketing and how to run a content system\", gitroom.com blog)." },
      { type: 'callout', text: "Quick answer: The small business marketing ideas that pay off most reliably are a complete Google Business Profile, asking every happy customer for a review, a monthly email to your customers, regular posts on one social channel, partnerships with nearby businesses and a small search ad campaign for your main service. Pick three, run them for a month and keep the ones that bring customers." },

      { type: 'heading', text: 'How to Choose: Cost, Time and Business Type' },
      { type: 'table', headers: ['Your situation', 'Start with'], rows: [
        ['No budget, some time', 'Google Business Profile, reviews, one social channel, partnerships'],
        ['Small budget, little time', 'Reviews, a monthly email and one small paid campaign'],
        ['Many repeat customers', 'Email list, loyalty and referral ideas'],
        ['New business, nobody knows you', 'Local groups, partnerships, events and Google Business Profile'],
      ]},
      { type: 'paragraph', text: "Balance quick wins with ideas that compound. Nevo describes the split as \"Long-term: Brand and SEO. Short-term: Hype cycles, launches, and social media.\" (source: \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X article)." },

      { type: 'heading', text: 'Free Ideas: Local Search and Reviews' },
      { type: 'numbered-list', items: [
        'Complete your Google Business Profile: categories, services, areas, hours, photos and booking link.',
        'Post a weekly update or offer on your profile.',
        'Ask every happy customer for a Google review with your direct link.',
        'Reply to every review within a day or two.',
        'Keep your name, address and phone identical on your website and every directory.',
        'Add a page for each service and area you cover.',
        'Answer common customer questions on your website, with prices or ranges where you can.',
      ]},

      { type: 'heading', text: 'Free Ideas: Email, Text and Referrals' },
      { type: 'numbered-list', items: [
        'Collect emails at checkout or booking, with clear permission.',
        'Offer a useful reason to join: a checklist, guide or first-order offer.',
        'Send one helpful monthly email: news, a tip, an offer.',
        'Set up a welcome email for every new subscriber or customer.',
        'Send a win-back message to customers you have not seen in a while.',
        'Turn on automatic text replies for missed calls, with your booking link.',
        'Ask every happy customer for one referral, and thank both people.',
        'Surprise loyal customers with something unexpected: a note, a small upgrade.',
      ]},

      { type: 'heading', text: 'Free Ideas: Social Media and Content' },
      { type: 'numbered-list', items: [
        'Choose one platform where your customers are and post on a schedule you can keep.',
        'Show real work: before and after, behind the scenes, products in use.',
        'Answer the questions customers ask most, as posts or short videos.',
        'Share customer stories and reviews, with permission.',
        'Film one short video a week using a hook, outcome, how-to and call to action.',
        'Write one helpful article a month on a question customers search for.',
        'Reply to every comment and message.',
      ]},

      { type: 'heading', text: 'Free Ideas: Partnerships and Community' },
      { type: 'numbered-list', items: [
        'Partner with a nearby business that serves the same customers.',
        'Run a joint offer or event each quarter.',
        'Swap referral cards or flyers with complementary businesses.',
        'Join one local business group or chamber and be genuinely helpful.',
        'Answer questions in local Facebook groups and Nextdoor, following each group\'s rules.',
        'Offer a free workshop or demo related to what you sell.',
      ]},

      { type: 'heading', text: 'Low-Cost Ideas: Print and In-Person' },
      { type: 'numbered-list', items: [
        'A clear sign with your phone number and QR code to your booking page.',
        'Business cards or inserts with a review QR code in every order or job.',
        'Branded vehicle signage for service businesses.',
        'A simple leave-behind folder with your services, prices or ranges, FAQs and reviews.',
        'Sponsor a local team or event your customers attend.',
        'Targeted local mail to nearby streets for seasonal offers.',
      ]},

      { type: 'heading', text: 'Paid Ideas: Ads That Suit Small Budgets' },
      { type: 'numbered-list', items: [
        'A Google Search campaign for your main service in your area.',
        'Google Local Services Ads, if your category is eligible (you pay per lead).',
        'Promote your best-performing social post to people nearby.',
        'Retarget website visitors with reviews and a reminder.',
        'A small Meta ads lead campaign with a clear offer and fast follow-up.',
      ]},
      { type: 'paragraph', text: "Before any paid idea, check you can track calls, forms or sales; otherwise you cannot tell whether it worked." },

      { type: 'heading', text: 'Ideas for Getting Found in AI Search' },
      { type: 'numbered-list', items: [
        'Describe clearly on your homepage what you do, for whom and where.',
        'Keep business facts consistent across your profile, site and directories.',
        'Collect detailed reviews that mention the service and area.',
        'Answer real customer questions on your site in plain words.',
      ]},

      { type: 'heading', text: 'Ideas by Business Type' },
      { type: 'table', headers: ['Business', 'Top three ideas to start'], rows: [
        ['Local service (cleaning, trades, clinics)', 'Google Business Profile and reviews; service-area pages; partnerships with related businesses'],
        ['Online store', 'Email welcome and win-back flows; UGC and creator posts; retargeting reviews'],
        ['Restaurant or cafe', 'Google Business Profile photos and posts; local events; loyalty for regulars'],
        ['B2B service or consultant', 'LinkedIn posts and case studies; referrals; a free first offer'],
        ['Niche business', 'Speak to one audience clearly; Nevo\'s example: "a CMS for doctors is more relevant than a generic CMS when a doctor is searching"'],
      ]},

      { type: 'heading', text: 'Your First 30 Days' },
      { type: 'table', headers: ['Week', 'Do this'], rows: [
        ['Week 1', 'Pick three ideas from the tables above; set up tracking (ask customers how they found you)'],
        ['Week 2', 'Launch all three; block the same time each week for them'],
        ['Week 3', 'Keep going; note early signs (messages, reviews, clicks)'],
        ['Week 4', 'Count customers from each idea; keep two, replace one'],
      ]},

      { type: 'heading', text: 'How to Tell Which Ideas Work' },
      { type: 'list', items: [
        'Ask every new customer how they found you, and write it down.',
        'Use tracking links on social posts, emails and QR codes.',
        'Check Google Business Profile insights for calls, clicks and direction requests.',
        'Compare each idea by customers won and time or money spent.',
        'Invest more in the winners; Nevo describes measuring which pages and tools generate revenue and then investing more in the highest performers.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop turns the ideas you choose into a weekly plan, drafts posts, profile updates, emails and review replies in your brand voice, and reports which channels bring customers. Every post, email and reply waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'What type of marketing is best for small businesses?', a: 'Usually the low-cost channels first: Google Business Profile, reviews, email to existing customers and referrals. Add paid ads once you know what a customer is worth.' },
        { q: 'What is the 3-3-3 rule for marketing?', a: 'There is no single agreed definition; it is used for several different rules of thumb. Focus instead on a few channels done consistently and measured.' },
        { q: 'What are some good marketing ideas for a small business?', a: 'A complete Google Business Profile, steady reviews, a monthly email, one social channel, local partnerships and a small search ad campaign.' },
        { q: 'How can I advertise my small business for free?', a: 'Google Business Profile, social media, local groups, partnerships, reviews and email to your customer list cost time rather than money.' },
        { q: 'How do I advertise my business locally?', a: 'Optimize your Google Business Profile, ask for reviews, partner with nearby businesses, take part in local events and run search ads limited to your area.' },
        { q: 'How many marketing ideas should I run at once?', a: 'Two or three done every week beat ten done occasionally.' },
      ]},
      { type: 'cta', text: 'Loraloop turns your chosen ideas into a weekly plan of posts, emails and updates, and you approve everything first.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'how-to-get-more-google-reviews', 'social-media-marketing-for-small-business', 'which-marketing-channels-small-business-prioritize'],
  },

  // "email marketing strategy" US 390 / UK 90 / CA 50; "email marketing campaigns examples" US 210
  {
    id: 220,
    slug: 'email-marketing-strategy',
    title: 'Email Marketing Strategy: The Complete Guide for Small Businesses',
    seoTitle: 'Email Marketing Strategy for Small Businesses: Complete Guide and Examples',
    description: 'A complete email marketing strategy for small businesses and online stores: grow a permission-based list, segment, automate key flows, plan campaigns with examples, meet Gmail and Yahoo sender rules and US, UK and Canadian law, and measure what matters.',
    category: 'Business',
    date: publishDate,
    imageIndex: 220,
    tableOfContents: [
      'The Short Answer',
      'Why Email Deserves a Strategy',
      'Step 1: Grow a Permission-Based List',
      'Step 2: Segment Your List',
      'Step 3: Automate Your Core Flows',
      'Step 4: Plan Your Campaign Calendar',
      'Email Campaign Examples',
      'Step 5: Write Emails People Open and Click',
      'Step 6: Deliverability and Sender Rules',
      'Email Laws in the US, UK and Canada',
      'Step 7: Measure and Improve',
      'Email Strategy by Business Type',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Email is the one marketing channel you fully own. No algorithm decides who sees it, and the people on your list already asked to hear from you. That is why a small list sent well can beat a large social following. Nevo David, founder of Postiz, puts it simply: \"an existing newsletter audience usually converts better than any other channel\" (source: \"Getting Around 10 Newsletter Subscribers a Day with Lead Magnets\", YouTube, Nevo David's channel)." },
      { type: 'paragraph', text: "This guide covers the full strategy: list growth, segmentation, automated flows, campaign planning with examples, the sender rules and laws you must follow, and how to measure results." },
      { type: 'callout', text: "Quick answer: A strong email marketing strategy grows a list with clear permission, segments it by behavior, automates a welcome, abandoned cart or follow-up, post-purchase and win-back flow, sends one to four useful campaigns a month from a planned calendar, follows Gmail and Yahoo sender rules and local law, and measures clicks, revenue and unsubscribes rather than opens." },

      { type: 'heading', text: 'Why Email Deserves a Strategy' },
      { type: 'list', items: [
        'You own the list: platform changes cannot take your audience away.',
        'Automation works every day: flows send the right message at the right moment without you.',
        'It turns one-time buyers into repeat customers, which is where most small businesses make their profit.',
        'It supports every other channel: social, ads and SEO all work better when you capture emails.',
      ]},

      { type: 'heading', text: 'Step 1: Grow a Permission-Based List' },
      { type: 'list', items: [
        'Put a signup form at the top of your website, not only in the footer. Nevo recommends placing signup prominently and sending at least one newsletter per month (source: "Using an Application-Only GitHub Waitlist CTA to Generate 100+ Leads in One Week", YouTube).',
        'Offer a reason to join: a guide, a checklist, early access or a first-order offer.',
        'Collect emails at checkout, booking and in store, with a clear opt-in.',
        'Ask for an email before giving a free tool or resource; Nevo notes fewer people sign up this way but a higher share convert.',
        'Never buy lists: they damage deliverability, attract complaints and can break the law.',
      ]},

      { type: 'heading', text: 'Step 2: Segment Your List' },
      { type: 'table', headers: ['Segment', 'Example use'], rows: [
        ['New subscribers', 'Welcome flow and first-purchase offer'],
        ['First-time customers', 'How-to content and a second-purchase nudge'],
        ['Repeat customers', 'Early access and loyalty rewards'],
        ['Lapsed customers', 'Win-back message'],
        ['Product or service interest', 'Relevant launches and tips'],
        ['Location', 'Local events, store hours, regional offers'],
        ['Engaged vs unengaged', 'Send more to engaged; re-engage or remove inactive'],
      ]},

      { type: 'heading', text: 'Step 3: Automate Your Core Flows' },
      { type: 'table', headers: ['Flow', 'Trigger', 'Typical sequence'], rows: [
        ['Welcome', 'Joins the list', 'Welcome and best first step; story or proof; offer or next step'],
        ['Abandoned cart or browse', 'Leaves without buying', 'Reminder; answers to objections or reviews; optional incentive'],
        ['Post-purchase', 'Buys or books', 'Thank you and how to get value; review request; related product or rebooking'],
        ['Win-back', 'No purchase in a set time', 'We miss you; what\'s new; last offer'],
        ['Service follow-up (local)', 'Quote sent or job done', 'Quote follow-up; review request; rebooking reminder'],
      ]},
      { type: 'paragraph', text: "Re-engagement can be creative. Postiz increased monthly revenue partly through product emails such as streak-expiry reminders sent \"two hours before the streak ends\" (source: Nevo David, \"How Postiz Increased Monthly Revenue From $15K to $18K Without Additional Traffic\", X post, 30 Jan 2026). For a small business, the equivalent is a reminder before a booking slot, offer or membership expires." },

      { type: 'heading', text: 'Step 4: Plan Your Campaign Calendar' },
      { type: 'list', items: [
        'Plan one to four campaigns a month around launches, seasons and useful content.',
        'Mix value and offers: most emails should help, some should sell.',
        'Map key dates a quarter ahead: holidays, your busy season, product launches.',
        'Give every email one purpose and one main button.',
      ]},

      { type: 'heading', text: 'Email Campaign Examples' },
      { type: 'paragraph', text: "Examples use fictional businesses to show the structure." },
      { type: 'table', headers: ['Campaign', 'Subject line', 'Inside'], rows: [
        ['New product', 'Meet the cold brew kit you asked for', 'Story, photo, one button'],
        ['How-to', '3 ways to keep your plants alive this winter', 'Tips; product mentioned once'],
        ['Customer story', 'How Dana fixed her morning routine', 'Short story, photo, quote'],
        ['Seasonal', 'Valentine\'s gifts that arrive by Friday', 'Gift guide and shipping deadline'],
        ['Last chance', 'Ends tonight: free grinder with subscription', 'Clear offer, end time'],
        ['Local update', 'New Saturday hours and a spring offer', 'News and booking link'],
        ['Behind the scenes', 'Why we changed our coffee supplier', 'Honest story that builds trust'],
      ]},

      { type: 'heading', text: 'Step 5: Write Emails People Open and Click' },
      { type: 'list', items: [
        'Subject lines: specific and honest; say what is inside.',
        'Preview text: continue the subject, do not repeat it.',
        'Mobile first: short paragraphs, large buttons, images that load fast.',
        'Personalize beyond the first name: use what they bought or showed interest in.',
        'One main call to action.',
        'Test one element at a time: subject line, send time or offer.',
      ]},

      { type: 'heading', text: 'Step 6: Deliverability and Sender Rules' },
      { type: 'list', items: [
        'Authenticate your sending domain with SPF, DKIM and DMARC. Google and Yahoo require this from bulk senders.',
        'Include a clear, one-click unsubscribe in marketing emails; Google and Yahoo require it for bulk marketing mail.',
        'Keep spam complaints low; Google asks bulk senders to keep their spam rate well below 0.3%.',
        'Send from a consistent name and address, and warm up a new domain gradually.',
        'Remove addresses that never engage after a reasonable time.',
      ]},

      { type: 'heading', text: 'Email Laws in the US, UK and Canada' },
      { type: 'table', headers: ['Region', 'Key rules (check the regulator\'s guidance)'], rows: [
        ['US (CAN-SPAM, FTC)', 'Honest headers and subject lines, your physical address, a working opt-out honored promptly'],
        ['UK (PECR and UK GDPR, ICO)', 'Consent for marketing email to individuals, with a "soft opt-in" for existing customers buying similar products, and an easy opt-out'],
        ['Canada (CASL, CRTC)', 'Express or implied consent before sending, sender identification and an unsubscribe in every message'],
      ]},
      { type: 'paragraph', text: "This is a summary, not legal advice. If you email across countries, follow the strictest rules that apply to your list." },

      { type: 'heading', text: 'Step 7: Measure and Improve' },
      { type: 'table', headers: ['Metric', 'Why'], rows: [
        ['Click rate', 'Real interest; more reliable than opens'],
        ['Revenue, bookings or replies per email', 'Business impact'],
        ['Flow revenue vs campaign revenue', 'Where your email profit comes from'],
        ['Unsubscribe and spam complaint rate', 'Early warning on content or frequency'],
        ['List growth and source', 'Which signup methods work'],
      ]},
      { type: 'paragraph', text: "Treat open rates with caution: privacy features such as Apple Mail Privacy Protection can record opens that did not happen." },

      { type: 'heading', text: 'Email Strategy by Business Type' },
      { type: 'table', headers: ['Business', 'Focus first'], rows: [
        ['Online store', 'Welcome, abandoned cart, post-purchase and win-back flows'],
        ['Local service', 'Quote follow-up, review request and rebooking reminders'],
        ['SaaS', 'Onboarding emails that get users to a first result, then upgrade prompts'],
        ['Agency', 'A monthly newsletter with case studies; per-client flows and reporting'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Clara, Loraloop's email specialist, plans your email calendar, drafts campaigns and flows in your brand voice and builds them in Klaviyo or Mailchimp. Every email and flow waits for your approval before anything is sent." },

      { type: 'faq', items: [
        { q: 'What is the best strategy for email marketing?', a: 'Grow a permission-based list, automate key flows, send useful campaigns on a schedule, follow sender rules and measure clicks and revenue.' },
        { q: 'What are the 5 Ts of email marketing?', a: 'A commonly cited framework: tease, target, teach, test and track. It is a useful checklist rather than an official standard.' },
        { q: 'What is the 80/20 rule in email marketing?', a: 'There is no single definition. It is often used to mean most emails should give value and a minority should promote, or that a small share of subscribers drives most results.' },
        { q: 'What is the 3-3-3 rule for marketing?', a: 'It has no agreed definition. Focus on proven basics: list growth, flows, regular campaigns and measurement.' },
        { q: 'How often should a small business send marketing emails?', a: 'One to four campaigns a month plus automated flows works for most. Consistency matters more than volume.' },
        { q: 'Why are my emails going to spam?', a: 'Common causes are missing domain authentication, emailing people who did not opt in, no easy unsubscribe and high complaint rates.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your email campaigns and flows in Klaviyo or Mailchimp, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['ai-email-marketing-for-small-businesses-campaigns-newsletters-and-flows', 'after-black-friday-retention-plan-shopify', 'marketing-report-template', 'valentines-day-marketing-ideas'],
  },

  // "how to get customers for cleaning business" US 480 / UK 70 / CA 30
  {
    id: 218,
    slug: 'how-to-get-customers-for-cleaning-business',
    title: 'How to Get Customers for a Cleaning Business: The Complete Guide',
    seoTitle: 'How to Get Cleaning Clients: Complete Guide for Cleaning Businesses (2027)',
    description: 'How to get cleaning clients fast and keep them: Google Business Profile, reviews, local groups, lead platforms, partnerships with property managers and realtors, commercial cleaning outreach, ads, quoting, follow-up and the math of a recurring client base.',
    category: 'Business',
    date: publishDate,
    imageIndex: 218,
    tableOfContents: [
      'The Short Answer',
      'Residential vs Commercial Cleaning Clients',
      'Fast Wins: Your First Clients',
      'Get Found Locally',
      'Win Trust Before the First Clean',
      'Lead Platforms and Local Groups',
      'Partnerships That Bring Steady Work',
      'Commercial Cleaning: Getting Office Contracts',
      'Paid Ads for Cleaning Businesses',
      'Quoting and Speed to Lead',
      'Turn One-Off Cleans Into Recurring Clients',
      'The Math of a Recurring Client Base',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Cleaning customers usually look for help when they need it soon: a move-out, a busy month, an office that needs a reliable service. The cleaning businesses that grow are easy to find at that moment, look trustworthy at a glance, reply fast and turn first cleans into recurring visits." },
      { type: 'paragraph', text: "This guide covers every channel that works for cleaning businesses, residential and commercial, with scripts and a simple way to plan how many clients you need." },
      { type: 'callout', text: "Quick answer: To get cleaning clients, set up and complete a Google Business Profile, ask every happy client for a review, answer recommendation requests in local groups quickly, partner with property managers, realtors and short-term rental hosts, pitch small offices directly, reply to every inquiry within hours, and offer recurring plans so first-time clients stay." },

      { type: 'heading', text: 'Residential vs Commercial Cleaning Clients' },
      { type: 'table', headers: ['', 'Residential', 'Commercial'], rows: [
        ['Who buys', 'Homeowners, tenants, landlords, hosts', 'Office managers, clinic owners, property managers'],
        ['How they find you', 'Google, reviews, local groups, referrals', 'Direct outreach, referrals, bids, Google'],
        ['What wins', 'Trust, reviews, availability, clear prices', 'Reliability, insurance, a walkthrough and a written proposal'],
        ['Timing', 'Often urgent', 'Planned; contracts and renewals'],
      ]},

      { type: 'heading', text: 'Fast Wins: Your First Clients' },
      { type: 'numbered-list', items: [
        'Tell friends, family and past colleagues, with a simple new-client offer and a referral thank-you.',
        'Create a Google Business Profile and a one-page website or booking page with services and prices or ranges.',
        'Watch local Facebook groups and Nextdoor for "recommend a cleaner" posts and reply quickly with a friendly, specific message.',
        'Contact three property managers or realtors with an offer for turnover or pre-listing cleans.',
        'Ask your first clients for reviews the same day you finish.',
      ]},

      { type: 'heading', text: 'Get Found Locally' },
      { type: 'list', items: [
        'Complete your Google Business Profile as a service-area business: services, areas, hours, photos and booking link. You can hide your home address.',
        'Build a page for each service (standard, deep clean, move-out, office) and your main areas.',
        'Keep your name and phone identical on your site and every directory.',
        'Post before-and-after photos (with permission) weekly on your profile and social channels.',
      ]},

      { type: 'heading', text: 'Win Trust Before the First Clean' },
      { type: 'list', items: [
        'Steady, recent reviews that mention the service and area.',
        'State that you are insured, and say what each clean includes.',
        'Show prices, starting prices or ranges so people can decide quickly.',
        'Introduce the team with real photos and names.',
        'Explain your process: booking, what to expect, how you handle issues.',
      ]},

      { type: 'heading', text: 'Lead Platforms and Local Groups' },
      { type: 'table', headers: ['Channel', 'How it works', 'Tips'], rows: [
        ['Local Facebook groups and Nextdoor', 'People ask for recommendations', 'Reply fast; follow group rules; ask happy clients to recommend you'],
        ['Lead marketplaces (Thumbtack, Bark; Checkatrade in the UK; HomeStars in Canada)', 'Pay per lead or per contact, depending on the platform', 'Respond within minutes; prefer recurring jobs over bargain one-offs'],
        ['Google Local Services Ads', 'Pay per lead, with Google screening, where your category is eligible', 'Check eligibility in your area'],
      ]},

      { type: 'heading', text: 'Partnerships That Bring Steady Work' },
      { type: 'table', headers: ['Partner', 'What they need', 'Your pitch'], rows: [
        ['Property managers', 'Turnover cleans between tenants', 'Reliable turnaround and a checklist they can trust'],
        ['Realtors', 'Pre-listing and move-out cleans at short notice', 'Fast booking and before-and-after photos'],
        ['Short-term rental hosts', 'Consistent cleans between guests', 'Scheduling around check-in times; restocking'],
        ['Window, carpet and pressure-washing businesses', 'Complementary services', 'Referral swap'],
        ['Contractors and renovators', 'Post-construction cleans', 'A clear post-construction package'],
      ]},

      { type: 'heading', text: 'Commercial Cleaning: Getting Office Contracts' },
      { type: 'numbered-list', items: [
        'List small offices, clinics, gyms and salons within your service area.',
        'Visit or call to ask who handles cleaning, and when the current contract renews.',
        'Offer a free walkthrough and a written proposal with scope, frequency and price.',
        'Show insurance, references and how you handle keys, alarms and quality checks.',
        'Follow up before their renewal date, even if they said no the first time.',
      ]},

      { type: 'heading', text: 'Paid Ads for Cleaning Businesses' },
      { type: 'list', items: [
        'Google Search ads for "[service] near me" and "[service] [city]", limited to your service area, sending each service to its own page.',
        'Facebook and Instagram lead ads with before-and-after photos to people in your area; call leads fast.',
        'Track calls and quote requests so you know the cost per client from each.',
      ]},

      { type: 'heading', text: 'Quoting and Speed to Lead' },
      { type: 'list', items: [
        'Reply to every inquiry within hours; set an automatic text for missed calls.',
        'Ask a few questions to quote: home size, rooms, condition, pets, frequency.',
        'Price from your time and costs: estimated hours x your hourly rate, plus supplies and travel, with a minimum charge. That answers "how much should I charge for three hours of cleaning?" for your own business.',
        'Send the quote the same day with a booking link.',
        'Follow up after two days and again after a week.',
      ]},

      { type: 'heading', text: 'Turn One-Off Cleans Into Recurring Clients' },
      { type: 'list', items: [
        'Offer weekly, biweekly and monthly plans after every first clean.',
        'Make the recurring rate clearly better value than one-off cleans.',
        'Send a short check-in after the first clean.',
        'Ask happy recurring clients for referrals, and reward them where local rules allow.',
      ]},
      { type: 'paragraph', text: "Sell the result, not the task. Nevo David, founder of Postiz, frames marketing as selling the result rather than the solution (source: \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article). For cleaning, that means a home that is ready for guests, an office that impresses clients, or weekends back, not \"two cleaners for three hours\"." },

      { type: 'heading', text: 'The Math of a Recurring Client Base' },
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: a cleaner who earns $120 per visit and wants $100,000 a year needs about 833 visits a year, or 16 visits a week. Clients cleaned biweekly account for 26 visits a year each, so about 32 biweekly clients would cover it, before costs. Running the same math with your prices tells you how many recurring clients to aim for." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop keeps your Google Business Profile and social posts current with before-and-after work, drafts review requests and replies, writes service and area pages, and runs local search ads by area. Every post, reply and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'How can I get cleaning clients fast?', a: 'Tell your network, reply quickly to recommendation requests in local groups, set up a Google Business Profile, ask first clients for reviews and contact property managers and realtors.' },
        { q: 'Where do house cleaners find clients successfully?', a: 'Google Search and Maps, reviews, local Facebook groups and Nextdoor, referrals, lead marketplaces and partnerships with property managers and realtors.' },
        { q: 'How many customers do I need to make $100,000 a year?', a: 'Divide your revenue goal by your price per visit, then by visits per client per year. The worked example above shows the method; use your own prices and costs.' },
        { q: 'How much should I charge for 3 hours of cleaning?', a: 'Multiply hours by your hourly rate, add supplies and travel, and set a minimum charge. Check local competitors to make sure you are in range.' },
        { q: 'How do I get commercial cleaning contracts?', a: 'Contact small offices and clinics directly, offer a free walkthrough and written proposal, show insurance and references, and follow up before renewal dates.' },
        { q: 'How can I get cleaning clients for free?', a: 'Google Business Profile, reviews, local groups, referrals and partnerships cost time, not money.' },
      ]},
      { type: 'cta', text: 'Loraloop keeps your profile, posts and review replies current every week, and you approve everything first.' },
    ],
    relatedSlugs: ['how-to-get-more-google-reviews', 'get-more-customers-local-business', 'turn-leads-into-booked-appointments', 'small-business-marketing-ideas'],
  },
];
