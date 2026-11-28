import type { BlogPost } from './blogData';

// Long-form guides batch C (rewritten November 28, 2026): ids 198, 200, 202, 204, 219, 221.
// Research per post: Google results, People Also Ask and related searches (Treg -> cloro Google SERP, US,
// Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP, cited with source and date where returned) and
// official sources for legal and platform facts (FTC, CRTC, ICO, HUD, NAR, Meta, Google). Statistics that
// appeared only in AI Overviews or vendor pages were left out. Worked examples are labelled as illustrative.
// This is general information, not legal advice.
const publishDate = 'November 28, 2026';

export const guideBlogPostsC: BlogPost[] = [
  // "cold email" US 3,600 / UK 590 / CA 720; "cold outreach" US 720
  {
    id: 198,
    slug: 'cold-outreach-that-gets-replies',
    title: 'Cold Email That Gets Replies: The Give-First Outreach Method',
    seoTitle: 'Cold Email That Gets Replies: A Give-First Cold Outreach Method (2027)',
    description: 'A complete guide to cold email that gets replies: what cold email is, whether it is legal in the US, UK and Canada, list building, domain setup and warm-up, give-first offers, templates, follow-ups, and how agencies run outreach for clients.',
    category: 'Business',
    date: publishDate,
    imageIndex: 198,
    tableOfContents: [
      'The Short Answer',
      'What Cold Email Is (and Is Not)',
      'Is Cold Email Legal? US, UK and Canada',
      'Why Most Cold Email Fails',
      'Step 1: Build a Small, Exact List',
      'Step 2: Set Up a Separate, Warmed-Up Domain',
      'Step 3: Make an Offer Worth Answering',
      'Step 4: Write a Short, Human Email',
      'Cold Email Templates',
      'Step 5: Follow Up With Value',
      'Step 6: Handle Replies and Track Results',
      'Cold Email for Agencies and Their Clients',
      'Email, LinkedIn or Communities?',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Cold email has a bad reputation because most of it is lazy: a sales pitch blasted to a scraped list from a company domain, with a subject line that screams automation. Done well, it is still one of the fastest ways to reach a specific buyer when you have no audience. The difference is who you send to, what you offer and how you set it up." },
      { type: 'paragraph', text: "This guide covers the full method, including the legal basics in the US, UK and Canada, technical setup, offers that get answered, templates, follow-ups and how agencies run outreach for clients." },
      { type: 'callout', text: "Quick answer: Cold email gets replies when it goes to a short list of exact-fit people, is sent from a separate warmed-up domain, leads with something genuinely useful instead of a pitch, reads like one person wrote it to another, follows up with new value rather than pressure, and follows the law where the recipient is (CAN-SPAM in the US, PECR in the UK, CASL in Canada)." },

      { type: 'heading', text: 'What Cold Email Is (and Is Not)' },
      { type: 'paragraph', text: "A cold email is a message to someone you have no prior relationship with, sent because you have a specific, relevant reason to contact them. What separates it from spam is targeting and relevance: one person, a real reason, and an easy way to say no. Mass-mailing the same pitch to thousands of loosely matched addresses is spam, whatever you call it." },

      { type: 'heading', text: 'Is Cold Email Legal? US, UK and Canada' },
      { type: 'table', headers: ['Region', 'Key rules (summary)', 'Source'], rows: [
        ['US', 'CAN-SPAM allows B2B commercial email without prior consent, but requires accurate headers, a non-deceptive subject line, your physical postal address and a working opt-out you honor promptly', 'ftc.gov'],
        ['UK', 'PECR treats corporate addresses (e.g. name@company) differently from individuals, sole traders and some partnerships; you must identify yourself and offer an opt-out, and UK GDPR applies to the personal data you hold', 'ico.org.uk'],
        ['Canada', 'CASL is consent-based: you need express or implied consent (for example, an address conspicuously published for business purposes, relevant to the person\'s role), plus sender identification and an unsubscribe', 'crtc.gc.ca'],
        ['EU', 'GDPR and national rules vary by country; check the local regulator', 'edpb.europa.eu'],
      ]},
      { type: 'paragraph', text: "This is a summary, not legal advice. If you email across countries, follow the strictest rules that apply, keep records of where each contact came from, and honor every opt-out." },

      { type: 'heading', text: 'Why Most Cold Email Fails' },
      { type: 'list', items: [
        'It sells in the first message. Nevo David, founder of Postiz, notes that people ignore pitches like "I can improve your conversion rate by..." but reply to offers to hire or invest in them (source: Alex is Building interview with Nevo David, X).',
        'It goes to anyone who loosely fits, so the message cannot be specific.',
        'It comes from the main company domain, so spam complaints damage everyday email.',
        'It is obviously AI-written; Nevo notes B2B audiences recognize and reject AI-generated cold emails (Nevo David on X, May 2026).',
        'It asks for too much: a 30-minute call from a stranger.',
      ]},

      { type: 'heading', text: 'Step 1: Build a Small, Exact List' },
      { type: 'list', items: [
        'Start from one buyer type and one place they gather: a directory, a community, companies using a specific tool, advertisers running ads in the Meta Ad Library.',
        'Collect name, company, role, email and where each person is active.',
        'Write down why each person is a fit; if you cannot, remove them.',
        'A list of 200 right people beats 5,000 maybes.',
      ]},

      { type: 'heading', text: 'Step 2: Set Up a Separate, Warmed-Up Domain' },
      { type: 'numbered-list', items: [
        'Buy a separate domain for outreach, for example get[yourbrand].com, so complaints never touch your main domain.',
        'Set up SPF, DKIM and DMARC on it.',
        'Create inboxes for real people, with names and photos.',
        'Warm it up before sending. Nevo used a warm-up service and notes that "after approximately two weeks, the first real outreach email is less likely to land in spam" (source: "Outbound-to-Inbound Cold Outreach for Open-Source Developers", YouTube, May 2024).',
        'Send small daily batches from a few inboxes, not one large blast.',
      ]},

      { type: 'heading', text: 'Step 3: Make an Offer Worth Answering' },
      { type: 'paragraph', text: "Nevo's rule is \"give, give, give, give, then take in private\": offer free value until the prospect starts the commercial conversation. The offer has to match the size of the ask. When he asked n8n community owners to feature Postiz in their templates, he offered a lifetime plan, a newsletter feature, introductions and a backlink. He reports that \"about 80% of recipients replied, all positively\", and that MRR \"went from about $6K to $12K\" that month (source: Alex is Building interview with Nevo David, X)." },
      { type: 'table', headers: ['If you are...', 'Offers that get answered'], rows: [
        ['An agency', 'A short audit of one channel with three specific fixes and the money at stake'],
        ['A SaaS founder', 'Free access for their team or community, a feature in your newsletter, an integration'],
        ['A consultant', 'A short teardown of their funnel or landing page'],
        ['A DTC brand seeking partners', 'Product for their audience, a co-created guide, a revenue share'],
        ['A local business', 'A joint offer with a business that shares your customers'],
      ]},

      { type: 'heading', text: 'Step 4: Write a Short, Human Email' },
      { type: 'list', items: [
        'Subject: short and plain. Nevo used a lowercase "hi", the person\'s name and an emoji as a pattern break.',
        'First line: why you are writing to this person, specifically.',
        'Middle: the free offer in one or two sentences, with one line of proof if you have it.',
        'Ask: one small question, such as "Want me to send it over?"',
        'Exit: a line saying you will not email again if it is not useful.',
        'Keep it short, with no attachments and few links.',
      ]},

      { type: 'heading', text: 'Cold Email Templates' },
      { type: 'table', headers: ['Situation', 'Email (edit every line for the person)'], rows: [
        ['Agency audit offer', 'Hi [Name], I noticed [company] is running [specific ad] in the Meta Ad Library. I put together three things I\'d test to lower cost per sale. Want me to send them over? If not useful, just say and I won\'t email again.'],
        ['SaaS partnership', 'Hi [Name], your [community/newsletter] helps [audience] with [problem]. We\'d like to give your members free access to [product] and feature you in our newsletter. Interested?'],
        ['Consultant teardown', 'Hi [Name], I looked at [company]\'s [landing page]. Two quick changes could make the offer clearer. Happy to send a short video walkthrough, free.'],
        ['Follow-up with value', 'Hi [Name], one more idea for [company]: [specific tip]. Happy to share the rest if helpful.'],
      ]},

      { type: 'heading', text: 'Step 5: Follow Up With Value' },
      { type: 'list', items: [
        'Send two or three follow-ups a few days apart, each with something new: a tip, an example, a short resource.',
        'Never "just bumping this".',
        'Stop at the first sign of no interest, and honor opt-outs immediately.',
        'People who accept your free offer get useful content weekly or monthly until they ask to work with you.',
      ]},
      { type: 'paragraph', text: "Done this way, outreach rarely annoys people. Nevo reports that, of everyone he contacted with a give-first email, \"approximately one person reported the message as spam\" (source: \"Outbound-to-Inbound Cold Outreach for Open-Source Developers\", YouTube, May 2024)." },

      { type: 'heading', text: 'Step 6: Handle Replies and Track Results' },
      { type: 'table', headers: ['Metric', 'What it tells you'], rows: [
        ['Delivered (not bounced)', 'List quality'],
        ['Reply rate', 'Whether the offer and targeting work'],
        ['Positive reply rate', 'Whether the right people are interested'],
        ['Calls booked', 'Whether replies turn into conversations'],
        ['Clients won and revenue', 'Whether outreach pays'],
        ['Spam complaints and unsubscribes', 'Whether you are annoying people'],
      ]},
      { type: 'paragraph', text: "Reply to every positive response the same day, and log every conversation in a CRM or spreadsheet with a next follow-up date." },

      { type: 'heading', text: 'Cold Email for Agencies and Their Clients' },
      { type: 'list', items: [
        'Use a separate domain per client, owned by the client.',
        'Get the client\'s written approval of the list source, offer and copy before sending.',
        'Check who counts as the "sender" under CAN-SPAM and local rules; both the client and the agency can be responsible.',
        'Report replies, calls and clients won per campaign, not just emails sent.',
      ]},

      { type: 'heading', text: 'Email, LinkedIn or Communities?' },
      { type: 'table', headers: ['Channel', 'Best for', 'Watch out for'], rows: [
        ['Email', 'Exact-fit lists with a clear offer', 'Domain reputation and local law'],
        ['LinkedIn', 'B2B buyers active there; Nevo calls it his top outreach recommendation', 'Connection requests that pitch immediately'],
        ['X direct messages', 'People who already follow you', 'Messages to non-followers often go unseen'],
        ['Slack, Discord, Skool, Circle groups', 'Owners who can open a door to many members', 'Rules on self-promotion'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Outreach works better when prospects look you up and find useful work. Loraloop drafts the LinkedIn posts, articles and newsletters that do that, in your brand voice, and runs the free Meta ads audit you can use as a give-first offer. It does not send cold email for you; every post and email it drafts waits for your approval." },

      { type: 'faq', items: [
        { q: 'What does "cold email" mean?', a: 'An email to someone you have no prior relationship with, sent for a specific, relevant reason. Targeting and relevance are what separate it from spam.' },
        { q: 'Are cold emails illegal?', a: 'Not in general. In the US, CAN-SPAM allows B2B cold email if you follow its rules. The UK and Canada have stricter consent rules, especially for individuals; check the regulator\'s guidance for where your recipients are.' },
        { q: 'Is cold emailing ok?', a: 'It is when it goes to well-matched people, offers something useful, identifies you honestly and honors opt-outs.' },
        { q: 'What is the 30/30/50 rule for cold emails?', a: 'It is a rule of thumb that circulates with different definitions, usually about how much effort to put into the subject line, the opening and the call to action. There is no single agreed version; test your own emails.' },
        { q: 'How many follow-ups should I send?', a: 'Two or three, a few days apart, each with something new. Stop at the first sign of no interest.' },
        { q: 'Should I use AI to write cold emails?', a: 'Use it to research and draft, then rewrite every email yourself. Obvious AI emails get ignored.' },
      ]},
      { type: 'cta', text: 'Loraloop keeps your posts and newsletter going so prospects find useful work when they look you up, with every draft approved by you.' },
    ],
    relatedSlugs: ['client-acquisition', 'how-to-get-clients-for-marketing-agency', 'how-to-get-first-customers-saas', 'competitor-ad-research-meta-ad-library'],
  },

  // "ugc creators" US 49,500 / UK 6,600 / CA 6,600 (brand-side angle)
  {
    id: 204,
    slug: 'creator-ugc-partnerships-dtc-brands',
    title: 'UGC Creators for DTC Brands: How to Find, Brief, Pay and Measure Them',
    seoTitle: 'UGC Creators for DTC Brands: How to Find, Brief, Pay and Measure (2027)',
    description: 'A brand-side guide to UGC creators: what they are, how they differ from influencers, where to find them, how to brief and price them, usage rights and disclosure rules, and how to measure UGC in ads and organic.',
    category: 'Business',
    date: publishDate,
    imageIndex: 204,
    tableOfContents: [
      'The Short Answer',
      'What UGC Creators Are',
      'UGC Creators vs Influencers',
      'Step 1: Decide What You Need',
      'Step 2: Find the Right Creators',
      'Step 3: Write a Brief That Leaves Room',
      'Step 4: Price, Pay and Agree Usage Rights',
      'Step 5: Disclosure and the Rules',
      'Step 6: Test Hooks and Measure Results',
      'The Volume Approach',
      'Managing Creators at Scale',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most articles about UGC creators are written for people who want to become one. This guide is for the other side: DTC brands and agencies that want to find, brief, pay and measure UGC creators, and turn their content into ads and organic posts that sell." },
      { type: 'callout', text: "Quick answer: UGC creators make short, native-looking videos and photos of your product for your own channels and ads; you pay for the content and the right to use it, not for posting to their followers. Find creators who match your buyer and can deliver on camera, give them a short brief with the outcome to show, agree usage rights in writing, require proper ad disclosure, test many hooks and measure by cost per purchase and by push weeks against normal weeks." },

      { type: 'heading', text: 'What UGC Creators Are' },
      { type: 'paragraph', text: "UGC (user-generated content) creators produce content that looks like it came from a real customer: unboxings, demos, reviews, routines, before and after. Brands use it in paid social ads, on product pages, in emails and on their own social accounts. A UGC creator does not need a large following, because the content runs on your channels, not theirs." },

      { type: 'heading', text: 'UGC Creators vs Influencers' },
      { type: 'table', headers: ['', 'UGC creator', 'Influencer'], rows: [
        ['What you pay for', 'Content and usage rights', 'Access to their audience'],
        ['Where it runs', 'Your ads and channels', 'Their account'],
        ['Followers needed', 'None required', 'Central to the deal'],
        ['Best for', 'Testing many ad angles; product pages', 'Reach and trust with a new audience'],
        ['Can combine', 'Partnership (whitelisted) ads run from the creator\'s handle', 'Influencers can also license content for your ads'],
      ]},
      { type: 'paragraph', text: "Nevo David, founder of Postiz, notes that UGC can beat sponsorships from huge influencers (Nevo David on X, 27 Aug 2026)." },

      { type: 'heading', text: 'Step 1: Decide What You Need' },
      { type: 'list', items: [
        'Use: paid ads, organic social, product pages, email, or all of them.',
        'Formats: 15-30 second vertical videos, photos, hooks only, or full scripts.',
        'Angles: problem and solution, demo, review, routine, unboxing, comparison.',
        'Volume: how many videos a month you can actually test.',
        'Rights: organic only, paid ads, whitelisting, and for how long and where.',
      ]},

      { type: 'heading', text: 'Step 2: Find the Right Creators' },
      { type: 'table', headers: ['Source', 'Good for'], rows: [
        ['Your own customers', 'The most authentic content; search tagged posts and reviews with photos'],
        ['UGC marketplaces and creator platforms', 'Fast access to many creators with portfolios'],
        ['TikTok and Instagram search', 'Finding creators already making content in your category'],
        ['Freelance marketplaces', 'Volume work; screen carefully'],
        ['Communities of UGC creators', 'Reaching creators who actively look for brand work'],
      ]},
      { type: 'paragraph', text: "Screen for on-camera delivery, natural speech, good lighting and sound, and whether they look and sound like your buyer. Ask for a short paid test before a large order. Nevo also suggests working with creators who actually use the product, because real results and screenshots beat a paid read (source: Alex is Building interview with Nevo David, X)." },

      { type: 'heading', text: 'Step 3: Write a Brief That Leaves Room' },
      { type: 'list', items: [
        'The outcome or moment to show, not a word-for-word script.',
        'Three hook ideas to try in the first second.',
        'Must-say facts you can support: product name, key benefit, price or offer, where to buy.',
        'Must-avoid: health, earnings or results claims you cannot substantiate; competitor names.',
        'Format: vertical 9:16, length, raw clips plus an edited version, captions on or off.',
        'Structure: Nevo\'s hook, outcome, how-to, call to action works well for short video (source: Nevo David, "Selling SaaS Through Outcomes", X article, 7 Sep 2026).',
        'Deadline, revisions included, and file delivery.',
      ]},

      { type: 'heading', text: 'Step 4: Price, Pay and Agree Usage Rights' },
      { type: 'paragraph', text: "Rates vary widely by creator experience, number of videos, raw versus edited footage, and above all usage rights. Paid ad usage, longer terms and wider territories cost more than organic-only use. For high-volume, organic-first programs, Nevo describes a different model: \"One UGC video costs approximately $20-$30\" and \"one creator can produce 1-2 videos per day\" (source: Nevo David, \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article)." },
      { type: 'table', headers: ['Put in writing', 'Why'], rows: [
        ['Deliverables and deadlines', 'Avoid disputes over what was ordered'],
        ['Usage: organic, paid ads, whitelisting', 'Paid use is the most valuable right'],
        ['Duration and territories', 'Rights for 3 months in one country differ from perpetual worldwide rights'],
        ['Revisions', 'How many, and what counts as one'],
        ['Payment terms', 'Pay on delivery or on approval; agree the method'],
        ['Disclosure duties', 'Who adds labels and how'],
      ]},
      { type: 'paragraph', text: "Paying creators may come with tax paperwork, such as contractor forms in the US; check current requirements where you and the creator are based." },

      { type: 'heading', text: 'Step 5: Disclosure and the Rules' },
      { type: 'list', items: [
        'US: the FTC\'s Endorsement Guides require clear disclosure of material connections, and brands can be responsible for misleading claims creators make (ftc.gov).',
        'US: the FTC\'s 2024 rule on consumer reviews and testimonials bans fake testimonials, including AI-generated ones presented as real people.',
        'UK: ads must be obviously identifiable as ads under the CAP Code; the ASA and CMA expect clear labels such as #ad (asa.org.uk).',
        'Canada: Ad Standards influencer disclosure guidelines apply (adstandards.ca).',
        'Platforms: use Meta partnership ads and TikTok\'s branded content settings where required.',
        'AI-generated "UGC" people: label AI content as platforms require, and never present a synthetic person as a real customer.',
      ]},

      { type: 'heading', text: 'Step 6: Test Hooks and Measure Results' },
      { type: 'table', headers: ['Metric', 'What it tells you'], rows: [
        ['Hook rate (3-second views / impressions)', 'Whether the first second stops the scroll'],
        ['Hold rate', 'Whether people keep watching'],
        ['CTR', 'Whether the video makes people act'],
        ['Cost per purchase and ROAS', 'Whether it sells profitably'],
        ['Push weeks vs normal weeks', 'Total effect, including people who search for you later'],
      ]},
      { type: 'paragraph', text: "Much of UGC's effect is not directly attributable, because people see a video and search for the brand later. Nevo measures this by comparing total results in weeks with a big content push against normal weeks (source: Alex is Building interview with Nevo David, X)." },

      { type: 'heading', text: 'The Volume Approach' },
      { type: 'paragraph', text: "Most videos underperform and a few win, so volume matters. Nevo reports that with a daily posting structure, \"each video typically receives around 200-500 views\", \"approximately one video reaches more than 200K views\", and a breakout \"generally takes around 30 videos published once per day\" (source: Nevo David, \"Selling SaaS Through Outcomes\", X article, 7 Sep 2026). Publish about ten videos, find what works, then double down on that type (Nevo David on X, Mar 2026)." },

      { type: 'heading', text: 'Managing Creators at Scale' },
      { type: 'list', items: [
        'Keep a creator roster with rates, rights, past results and contact details.',
        'Use one brief template and one folder structure for deliveries.',
        'Tag every creative with creator, angle and hook so results can be compared.',
        'Agencies: separate rosters and rights per client, and report results by creator and angle.',
        'Budget operational time: tracking, editing, payments and messages add up.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts creator briefs and hook ideas from your brand knowledge, turns approved creator videos into ad variations, tracks hook rate, CTR and cost per purchase by creator and angle, and watches which angles competitors are scaling. Every brief, ad and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'What are UGC creators?', a: 'People who make customer-style videos and photos of products for brands to use on their own channels and in ads, usually paid per piece plus usage rights.' },
        { q: 'Can you do UGC with no followers?', a: 'Yes. UGC is judged on the content, not the creator\'s audience, because it runs on the brand\'s channels.' },
        { q: 'How do brands find UGC creators?', a: 'Through their own customers, UGC marketplaces, TikTok and Instagram search, freelance sites and creator communities, followed by a paid test.' },
        { q: 'How much do UGC creators cost?', a: 'It varies widely with experience, volume, editing and especially usage rights. Paid-ads usage and longer terms cost more; get quotes and test before committing.' },
        { q: 'Do UGC videos need an #ad label?', a: 'When there is a material connection and the content is advertising, disclosure rules apply: FTC guides in the US, CAP Code in the UK and Ad Standards in Canada.' },
        { q: 'How do I measure UGC performance?', a: 'Track hook rate, hold rate, CTR and cost per purchase per video, and compare total sales in push weeks against normal weeks.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts creator briefs and turns approved creator videos into ad variations, with your approval on every piece.' },
    ],
    relatedSlugs: ['get-new-customers-shopify-without-discounts', 'ugc-vs-static-vs-video-ads-meta', 'hook-rate-hold-rate-thumbstop-creative-metrics', 'facebook-ad-examples'],
  },

  // "saas pricing" US 320 / UK 70 / CA 40
  {
    id: 202,
    slug: 'saas-pricing-to-acquire-customers',
    title: 'SaaS Pricing Strategy: How to Price So You Can Afford to Acquire Customers',
    seoTitle: 'SaaS Pricing Strategy: Models, Tiers and CAC Payback (2027 Guide)',
    description: 'A practical SaaS pricing guide: pricing models (per seat, usage, hybrid, value-based), how price decides which acquisition channels you can afford, tiers, free tier vs trial, annual plans, price increases and the rules on auto-renewal.',
    category: 'Business',
    date: publishDate,
    imageIndex: 202,
    tableOfContents: [
      'The Short Answer',
      'SaaS Pricing Models',
      'Why Price Decides Your Acquisition Channels',
      'CAC, ARPU, Payback and LTV',
      'Free Tier, Trial or Card-Required Trial?',
      'Designing Tiers Customers Grow Into',
      'Positioning: Do Not Be the Second Cheapest',
      'Annual Plans, Lifetime Deals and Discounts',
      'Always Show a Pricing Page',
      'How to Raise Prices Safely',
      'Auto-Renewal, Cancellation and Tax Rules',
      'Pricing for AI Products and Agencies',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Founders often price low to win customers, then discover they cannot afford to acquire them. Your price decides how much you can spend on each new customer, which decides which channels you can use. Price too low and you are stuck with slow, free channels; price well and paid acquisition, partners and sales become possible." },
      { type: 'callout', text: "Quick answer: Choose a pricing model that matches how customers get value (per seat, usage, flat tiers or a hybrid), set prices so your cost to acquire a customer pays back quickly, offer at least three tiers that differ by features as well as limits, push annual plans, show your prices publicly, and raise prices deliberately as the product improves." },

      { type: 'heading', text: 'SaaS Pricing Models' },
      { type: 'table', headers: ['Model', 'How it works', 'Fits', 'Watch out for'], rows: [
        ['Flat tiers', 'Fixed price per plan', 'Simple products, SMB buyers', 'Customers outgrow plans with nowhere to go'],
        ['Per seat', 'Price per user', 'Collaboration tools', 'AI can reduce seats needed'],
        ['Usage-based', 'Price per unit used', 'APIs, AI, infrastructure', 'Revenue swings; hard to budget for buyers'],
        ['Hybrid', 'Base subscription plus usage or add-ons', 'Many B2B and AI products', 'Clear explanation needed'],
        ['Value-based', 'Price set by the outcome delivered', 'Products with measurable ROI', 'Requires clear proof of value'],
      ]},
      { type: 'paragraph', text: "Model is the structure; strategy is why you choose the numbers. Most early-stage products do well with simple tiers, adding usage or add-ons where costs scale with use, such as AI credits." },

      { type: 'heading', text: 'Why Price Decides Your Acquisition Channels' },
      { type: 'paragraph', text: "Ads cost roughly the same per customer whether you charge $5 or $69. Nevo David, founder of Postiz, gives the arithmetic: \"Expect roughly $50 CAC for B2B SaaS. With a $29 subscription, recovering CAC takes about two months\", and recommends recovering CAC immediately with \"tiers priced at $50+, yearly plans, or lifetime deals\" (Nevo David on X, 5 Dec 2025). At lower prices the problem gets worse: with a CAC of $20 and a $9 price, payback takes approximately three months and the business is cash-flow negative until then (source: \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X article). He also notes B2B can usually be priced much higher than B2C, which is why B2C relies more on organic and viral channels." },

      { type: 'heading', text: 'CAC, ARPU, Payback and LTV' },
      { type: 'table', headers: ['Metric', 'Formula'], rows: [
        ['CAC', 'Sales and marketing spend / new paying customers'],
        ['ARPU', 'Monthly recurring revenue / paying customers'],
        ['Payback period', 'CAC / (ARPU x gross margin)'],
        ['LTV', 'ARPU x gross margin x average months a customer stays'],
        ['LTV:CAC', 'How many times over a customer pays back their acquisition cost'],
      ]},
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: CAC $60, ARPU $40, gross margin 80%. Payback = 60 / (40 x 0.8) = about 1.9 months. If customers stay 18 months on average, LTV = 40 x 0.8 x 18 = $576, about 9.6 times CAC. Raising ARPU to $55 with a better tier mix shortens payback to about 1.4 months." },

      { type: 'heading', text: 'Free Tier, Trial or Card-Required Trial?' },
      { type: 'table', headers: ['Option', 'Effect', 'Use when'], rows: [
        ['Free tier', 'Many more users, lower conversion; users can stay free for a long time', 'You want reach, word of mouth and an email list'],
        ['Free trial, no card', 'Users must actively decide to pay', 'The product needs time to show value'],
        ['Trial with card', 'Fewer signups, more paying users; users must actively cancel', 'The product shows value within days'],
      ]},
      { type: 'paragraph', text: "Nevo summarizes the trade-off: with a \"start a trial\" flow, the job becomes preventing cancellation, while fully free plans make conversion much harder (Nevo David on X, 6 May 2026). Postiz uses a card-required trial with no free tier, a one-page plan and payment screen and an automatically applied 20% discount coupon (source: \"How Postiz Increased Monthly Revenue From $15K to $18K Without Additional Traffic\", X post, 30 Jan 2026)." },

      { type: 'heading', text: 'Designing Tiers Customers Grow Into' },
      { type: 'list', items: [
        'Offer at least three paid tiers. Only two packages (free and pro) leave no room for lifetime value to grow (source: "Open-Source SaaS Pricing", gitroom.com blog).',
        'Differentiate tiers by features as well as limits; if tiers differ only by seats or usage, customers upgrade only when they hit the cap.',
        'Put the features larger customers need in higher tiers: team roles, more workspaces, integrations, priority support.',
        'Grow revenue per customer with upgrades and add-ons rather than relying on price increases for everyone.',
      ]},

      { type: 'heading', text: 'Positioning: Do Not Be the Second Cheapest' },
      { type: 'paragraph', text: "Nevo's view: being the cheapest can be a position; being second cheapest, between a budget tool and a premium one, \"does not communicate anything meaningful\". In his experience lower prices often convert worse, and customers who find a tool too expensive tend to churn faster anyway. If you position as the best, price at the high end and compete on value (sources: \"How to Set Pricing for Open Source Companies\", YouTube; Nevo David on X, 28 Jun 2026)." },

      { type: 'heading', text: 'Annual Plans, Lifetime Deals and Discounts' },
      { type: 'list', items: [
        'Annual plans collect revenue upfront, so a paid acquisition can pay back on day one. Show the annual price by default with a clear saving.',
        'Lifetime deals bring cash and early users but no recurring revenue from those customers; use sparingly and for a defined period.',
        'Time-limited discounts at checkout can lift trial starts; constant discounts teach buyers to wait.',
      ]},

      { type: 'heading', text: 'Always Show a Pricing Page' },
      { type: 'paragraph', text: "A missing pricing page makes a product look like a side project or a company that will surprise you with a large bill. Nevo recommends a pricing page even before you charge, stating that you are not charging yet. Hide prices only if you sell large deals through sales calls, and then say clearly how pricing works." },

      { type: 'heading', text: 'How to Raise Prices Safely' },
      { type: 'numbered-list', items: [
        'Raise prices for new customers first; decide separately whether and when existing customers move.',
        'Give existing customers clear notice and, where possible, an option to lock in an annual plan at the old price.',
        'Explain what has improved since they joined.',
        'Watch conversion, upgrades and churn for at least a full billing cycle.',
      ]},
      { type: 'paragraph', text: "Nevo cites research he encountered in which raising prices by 50% or 60% \"caused around 20% of customers to churn while still increasing overall revenue\" (source: \"How to Set Pricing for Open Source Companies\", YouTube). Treat that as one data point, not a rule; test with your own customers." },

      { type: 'heading', text: 'Auto-Renewal, Cancellation and Tax Rules' },
      { type: 'list', items: [
        'US: the Restore Online Shoppers\' Confidence Act (ROSCA) requires clear disclosure, express consent and a simple way to cancel for online subscriptions, and several states, including California, have automatic-renewal laws. Check the FTC\'s current guidance on negative-option rules (ftc.gov).',
        'UK: subscription contract rules under the Digital Markets, Competition and Consumers Act are being phased in; check gov.uk for current timing.',
        'Canada: provincial consumer protection rules cover renewals and cancellation.',
        'Sales tax, VAT and GST on software vary by US state, the UK and Canada; a merchant-of-record payment provider can handle collection.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal or tax advice." },

      { type: 'heading', text: 'Pricing for AI Products and Agencies' },
      { type: 'list', items: [
        'AI products: include a credit or usage allowance per tier so heavy users pay for the compute they use.',
        'Agency tools: price by client workspace or brand, which matches how agencies grow.',
        'Show what a credit buys in plain terms, so buyers can estimate monthly cost.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop reports cost per customer by channel each week from your ad accounts and analytics, so you can see which channels your price can afford, and drafts campaigns promoting annual plans or upgrades. Budget changes and campaigns wait for your approval before anything goes live." },

      { type: 'faq', items: [
        { q: 'What is SaaS pricing?', a: 'How a software-as-a-service company charges customers: the model (tiers, per seat, usage, hybrid) and the price points within it.' },
        { q: 'What is the 3-3-2-2-2 rule of SaaS?', a: 'It describes a growth path, not a pricing rule: triple annual recurring revenue for two years, then double it for three (often called T2D3). It is a benchmark for venture-backed companies, not a requirement.' },
        { q: 'Is ChatGPT considered SaaS?', a: 'Broadly yes: it is software delivered over the internet on a subscription, with usage-based pricing for its API.' },
        { q: 'Do I need an LLC for a SaaS?', a: 'Many founders use a company structure to separate business and personal liability, but requirements depend on your country and situation. Ask a local accountant or lawyer.' },
        { q: 'Should I offer a free plan?', a: 'Offer one if you want reach and word of mouth and can afford many free users. If you need revenue efficiency, a trial usually converts better.' },
        { q: 'How often should SaaS prices change?', a: 'Review pricing at least yearly, and as the product adds value. A company that never adjusts pricing is usually leaving money on the table.' },
      ]},
      { type: 'cta', text: 'Loraloop reports cost per customer by channel every week and proposes budget changes for your approval.' },
    ],
    relatedSlugs: ['free-trial-to-paid-conversion', 'how-to-get-first-customers-saas', 'saas-annual-plan-campaign-december', 'how-much-do-facebook-ads-cost'],
  },

  // "features vs benefits" / "benefits vs features" US 320 / UK 70 / CA 40
  {
    id: 200,
    slug: 'sell-outcomes-not-features',
    title: 'Features vs Benefits: Sell the Outcome, Not the Tool',
    seoTitle: 'Features vs Benefits: Examples and How to Sell Outcomes (2027 Guide)',
    description: 'Features vs benefits explained with examples, plus the step beyond: selling outcomes. How to turn a feature list into benefits and outcomes, find the outcome customers already get, prove it safely, and rewrite your homepage, ads and emails.',
    category: 'Business',
    date: publishDate,
    imageIndex: 200,
    tableOfContents: [
      'The Short Answer',
      'Features, Advantages, Benefits and Outcomes',
      'Features vs Benefits Examples',
      'Why Selling Outcomes Beats Selling Features',
      'Step 1: Find the Outcome Customers Already Get',
      'Step 2: Check It Is Repeatable',
      'Step 3: Turn a Feature List Into Outcome Copy',
      'Step 4: Prove It, Within the Rules',
      'Where to Use Outcome Messages',
      'When Features Still Matter',
      'Examples by Business Type',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "If your marketing lists what your product does, buyers compare it with every other product's list and pick the cheapest acceptable option. If your marketing shows the result customers get, the question changes from \"which tool?\" to \"how do I get that?\", and your product becomes part of the answer." },
      { type: 'callout', text: "Quick answer: A feature is what a product has or does; a benefit is what the customer gains from it; an outcome is the measurable result in their life or business. Lead with outcomes and benefits in headlines, ads and emails, and use features as proof lower down, in specs and comparisons." },

      { type: 'heading', text: 'Features, Advantages, Benefits and Outcomes' },
      { type: 'table', headers: ['Term', 'Answers', 'Example (scheduling tool)'], rows: [
        ['Feature', 'What does it have or do?', 'Schedules posts to 30 channels'],
        ['Advantage', 'Why is that better than the alternative?', 'One upload instead of logging in to each app'],
        ['Benefit', 'What does the customer gain?', 'Hours back every week'],
        ['Outcome', 'What measurable result do they get?', 'A month of posts from one video that bring in customers'],
      ]},
      { type: 'paragraph', text: "The \"advantage\" step comes from the classic features-advantages-benefits (FAB) framework used in sales. Outcomes take it one step further, to the result the buyer is actually paying for." },

      { type: 'heading', text: 'Features vs Benefits Examples' },
      { type: 'table', headers: ['Product', 'Feature', 'Benefit', 'Outcome'], rows: [
        ['Noise-cancelling headphones', 'Active noise cancellation', 'Quiet on flights', 'Arrive rested'],
        ['Accounting software', 'Automatic bank sync', 'No manual entry', 'Books closed in a day, not a week'],
        ['Cleaning service', 'Eco-friendly products', 'Safe around kids and pets', 'A clean home without worry'],
        ['Meta ads tool', 'Daily fatigue alerts', 'Catch dying ads early', 'Lower cost per sale'],
        ['Coffee subscription', 'Roasted within a week', 'Fresher taste', 'Cafe-quality mornings at home'],
      ]},

      { type: 'heading', text: 'Why Selling Outcomes Beats Selling Features' },
      { type: 'paragraph', text: "Nevo David, founder of Postiz, describes two ways to sell: as a tool alternative or as a new opportunity or outcome. Selling as a tool creates a feature fight and \"eventually creates a growth ceiling\"; in his words, \"Passing $100K MRR requires selling a new opportunity or outcome\" (source: Nevo David, \"Selling SaaS Through Outcomes\", X article, 7 Sep 2026). Outcome content also reaches people who were not searching for your category, creating demand instead of competing for it." },
      { type: 'paragraph', text: "His example: market \"get 1 million TikTok views in 10 days\", not \"schedule posts for TikTok\" (Nevo David on X, 7 Aug 2026). And keep repeating it: buyers remember outcomes after seeing them many times (Nevo David on X, 3 Sep 2026)." },

      { type: 'heading', text: 'Step 1: Find the Outcome Customers Already Get' },
      { type: 'numbered-list', items: [
        'List the customers who stayed longest, upgraded or referred others.',
        'Ask them what changed in their business since they started, in their own words.',
        'Look for the result that comes up again and again.',
        'Write it as a measurable change: more sales, more calls, fewer hours, lower cost.',
      ]},
      { type: 'paragraph', text: "Postiz followed this process: find real users, document how they get results, check it is repeatable, then publish it as a step-by-step (source: \"How Postiz Uses Developer Distribution, Agents, and Outcome-Based Marketing to Grow\", YouTube, Nevo David's channel)." },

      { type: 'heading', text: 'Step 2: Check It Is Repeatable' },
      { type: 'paragraph', text: "One lucky result is a story, not a promise. Confirm several customers can follow the same steps and get a similar result before you build marketing around it. Outcomes also wear out as competitors copy them; Nevo suggests keeping a durable core product and refreshing the outcome you sell around it every few years (Nevo David on X, 7 Aug 2026)." },

      { type: 'heading', text: 'Step 3: Turn a Feature List Into Outcome Copy' },
      { type: 'table', headers: ['Before (features)', 'After (outcome-led)'], rows: [
        ['AI ad creative generator with 50 templates', 'New ads ready before your current winners wear out'],
        ['Marketing dashboard with 20 integrations', 'Know every Monday which channel paid for itself'],
        ['Online booking widget', 'Fill next week\'s calendar while you work'],
        ['Email automation with segmentation', 'Turn first-time buyers into repeat customers, with every email approved by you'],
      ]},
      { type: 'list', items: [
        'Headline: the outcome and who it is for, in plain words.',
        'Subheadline: how the product gets them there, in one sentence.',
        'Body: the steps, with the product doing its part.',
        'Proof: a customer story with a before and after.',
        'Call to action: start the outcome ("Get your first month of posts"), not "Learn more".',
        'Avoid bare "better, faster, stronger" without saying at what and how; Nevo\'s advice for unknown companies is a clear, plain headline (source: "Writing a clear website headline for a developer product", gitroom.com blog).',
      ]},

      { type: 'heading', text: 'Step 4: Prove It, Within the Rules' },
      { type: 'list', items: [
        'Outcome claims need evidence. In the US, the FTC expects advertisers to have a reasonable basis for objective claims; in the UK, the CAP Code requires evidence for objective claims; in Canada, performance claims need adequate and proper testing.',
        'Testimonials must not mislead about typical results; if a result is exceptional, say what customers generally achieve (FTC Endorsement Guides).',
        'Use real customer data with permission, and state the period and conditions.',
        'Avoid "guaranteed" results; ad platforms restrict exaggerated claims.',
        'Comparisons that name competitors must be accurate and fair.',
      ]},

      { type: 'heading', text: 'Where to Use Outcome Messages' },
      { type: 'table', headers: ['Place', 'How'], rows: [
        ['Homepage', 'Outcome headline, steps and one customer story near the top'],
        ['Ads', 'Show the result happening; lead with a person, problem or result'],
        ['Sales emails', 'Open with a result a similar customer got'],
        ['Articles and SEO', 'Teach the process; show the product as one step'],
        ['Onboarding', 'Push new users to the first step of the outcome'],
      ]},
      { type: 'paragraph', text: "Outcome promises raise expectations. If onboarding does not get people to the first result quickly, they cancel, so pair outcome marketing with onboarding built around that first step." },

      { type: 'heading', text: 'When Features Still Matter' },
      { type: 'list', items: [
        'Technical buyers who need to check fit: integrations, security, limits.',
        'Comparison pages, where buyers line up options side by side.',
        'Pricing pages, where features justify the step between tiers.',
        'Late-stage decisions, after the outcome has already sold the idea.',
      ]},

      { type: 'heading', text: 'Examples by Business Type' },
      { type: 'table', headers: ['Business', 'Outcome to lead with', 'Proof'], rows: [
        ['DTC brand', 'The moment the product creates: better mornings, confident skin', 'Reviews with photos, UGC'],
        ['SaaS', 'Time or money saved, revenue gained', 'Customer metrics with permission'],
        ['Agency', 'Lower cost per sale, more qualified leads, hours saved for the client team', 'Case studies with real numbers'],
        ['Local service', 'A clean home, a fixed problem, a booked calendar', 'Before and after, Google reviews'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop works from your brand knowledge, including customer stories and results you add, so the ads, landing pages, posts and emails it drafts lead with outcomes instead of feature lists. You review and approve every piece before it is published." },

      { type: 'faq', items: [
        { q: 'What is the difference between a feature and a benefit?', a: 'A feature is what the product has or does; a benefit is what the customer gains from it. "Automatic bank sync" is a feature; "no manual data entry" is the benefit.' },
        { q: 'What are features and benefits?', a: 'Two ways to describe a product: by its characteristics (features) or by the value to the customer (benefits). Good marketing leads with benefits and outcomes and uses features as proof.' },
        { q: 'What are examples of features?', a: 'Battery life, number of integrations, materials, delivery time, file formats, team seats.' },
        { q: 'What does selling outcomes mean?', a: 'Leading with the measurable result a customer gets, such as more sales or hours saved, rather than with what the product does.' },
        { q: 'Should I still list features?', a: 'Yes, lower on the page, in comparisons and on pricing pages, where buyers check fit.' },
        { q: 'Can outcome marketing increase churn?', a: 'It can if onboarding does not deliver the first result. Pair outcome messages with onboarding built around that first step.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts ads, pages and emails that lead with the results your customers get, and you approve every piece.' },
    ],
    relatedSlugs: ['free-trial-to-paid-conversion', 'how-to-get-first-customers-saas', 'facebook-ad-examples', 'ad-to-landing-page-message-match'],
  },

  // "how to get clients in real estate" US 390 / UK 10 / CA 30
  {
    id: 219,
    slug: 'how-to-get-clients-in-real-estate',
    title: 'How to Get Clients in Real Estate: A Complete Plan for Agents',
    seoTitle: 'How to Get Clients in Real Estate: Complete Plan for New and Experienced Agents',
    description: 'How real estate agents get clients: sphere and referrals, farming a neighborhood, open houses, FSBO and expired listings within do-not-call rules, Google Business Profile and reviews, content, compliant housing ads, follow-up and the math of your first year.',
    category: 'Business',
    date: publishDate,
    imageIndex: 219,
    tableOfContents: [
      'The Short Answer',
      'How Most Agents Get Clients',
      'Step 1: Work Your Sphere',
      'Step 2: Farm One Neighborhood',
      'Step 3: Open Houses That Produce Clients',
      'Step 4: FSBO and Expired Listings, Within the Rules',
      'Step 5: Google Business Profile, Reviews and Content',
      'Step 6: Partnerships',
      'Step 7: Ads for Real Estate, Compliantly',
      'Step 8: Follow-Up That Does Not Drop Leads',
      'Rules Every Agent Should Know',
      'The Math of Your First Year',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Real estate clients choose agents they already know and trust, often long before they are ready to move. That means getting clients is mostly about being known in a specific place, being useful, and staying in touch until the timing is right. Paid leads and teams can speed things up, but they cost money or commission." },
      { type: 'callout', text: "Quick answer: Agents get clients by staying in regular touch with their sphere and asking for referrals, becoming the go-to agent for one neighborhood, running open houses that capture and follow up with visitors, contacting FSBO and expired listings within do-not-call rules, building reviews and local content, partnering with lenders and other pros, running housing ads within fair-housing rules, and following up with every lead on a schedule." },

      { type: 'heading', text: 'How Most Agents Get Clients' },
      { type: 'list', items: [
        'Repeat clients and referrals from people who already know them.',
        'Being known in a specific area through signs, open houses and local presence.',
        'Online: Google, reviews, social content and listing portals.',
        'Prospecting: FSBO, expired listings, door-knocking around new sales.',
        'Paid leads and teams, in exchange for fees or a commission split.',
      ]},
      { type: 'paragraph', text: "Pick two or three methods and do them consistently. Spreading effort across ten produces little." },

      { type: 'heading', text: 'Step 1: Work Your Sphere' },
      { type: 'list', items: [
        'List everyone you know: past clients, friends, family, former colleagues, local business owners.',
        'Contact them personally a few times a year, not only by newsletter.',
        'Send a useful monthly email: local market updates, homeowner tips, new listings.',
        'Ask for referrals at the moments people are happiest: after an offer is accepted and at closing.',
        'Mark home anniversaries and send an annual value update.',
      ]},

      { type: 'heading', text: 'Step 2: Farm One Neighborhood' },
      { type: 'paragraph', text: "Pick one area you can know deeply and that has enough turnover. Niche down, but not so far that there is no business: Nevo David's general rule is to narrow your audience without shrinking the market until it is too small (source: \"How to Choose a Startup Idea in 2026\", X article)." },
      { type: 'list', items: [
        'Publish neighborhood guides: schools, commute, parks, what homes are like.',
        'Post short videos walking the area and featuring local businesses.',
        'Send local market updates to homeowners in the area, by mail or email with permission.',
        'Door-knock or leave notes around new listings and sales, offering useful information.',
      ]},

      { type: 'heading', text: 'Step 3: Open Houses That Produce Clients' },
      { type: 'numbered-list', items: [
        'Invite neighbors to a preview before the public open house; some are future sellers.',
        'Use a sign-in sheet or digital sign-in with clear permission to follow up.',
        'Ask each visitor what they are looking for and whether they are working with an agent.',
        'Follow up the same or next day with similar listings or market information.',
        'Use buyer interest to approach nearby owners who may want to sell.',
      ]},

      { type: 'heading', text: 'Step 4: FSBO and Expired Listings, Within the Rules' },
      { type: 'paragraph', text: "Owners selling without an agent (FSBO) and owners whose listings expired are motivated. Contact them with something useful, such as a pricing analysis or a marketing plan, rather than a pitch. Before calling or texting, check the National Do Not Call Registry, TCPA rules and your state's rules; text messages and auto-dialers have stricter consent requirements (fcc.gov, donotcall.gov). Mail and in-person visits avoid many of these issues." },

      { type: 'heading', text: 'Step 5: Google Business Profile, Reviews and Content' },
      { type: 'list', items: [
        'Complete your Google Business Profile with your service areas, photos and contact details.',
        'Ask for a review after every closing, on Google and the platforms buyers use in your market.',
        'Share client stories with permission.',
        'Publish answers to buyer and seller questions: costs, timelines, what to expect.',
        'Keep personal and business content separate.',
      ]},

      { type: 'heading', text: 'Step 6: Partnerships' },
      { type: 'table', headers: ['Partner', 'Why'], rows: [
        ['Mortgage lenders and brokers', 'They meet buyers early'],
        ['Inspectors, contractors, stagers', 'They meet owners preparing to sell'],
        ['Attorneys, accountants, financial planners', 'Life events that lead to moves'],
        ['Movers and property managers', 'Clients in transition'],
      ]},
      { type: 'paragraph', text: "Offer something useful in return: referrals, co-hosted events, content features. Check your local rules on referral fees and disclosures." },

      { type: 'heading', text: 'Step 7: Ads for Real Estate, Compliantly' },
      { type: 'list', items: [
        'The Fair Housing Act prohibits discrimination in housing advertising based on race, color, religion, sex, national origin, familial status and disability; many states add more protected classes (hud.gov).',
        'Meta requires housing ads to run in its housing special ad category, which limits targeting by age, gender and ZIP code and restricts certain audience types.',
        'Google applies restrictions to personalized ads for housing.',
        'State license law sets rules on advertising, such as showing your brokerage name.',
        'Focus on strong local creative and useful offers, such as a home valuation or neighborhood guide, and follow up fast.',
      ]},

      { type: 'heading', text: 'Step 8: Follow-Up That Does Not Drop Leads' },
      { type: 'table', headers: ['Lead type', 'Follow-up'], rows: [
        ['New online inquiry', 'Reply within hours; offer a call or showing'],
        ['Open house visitor', 'Same or next day thank-you with relevant listings'],
        ['Not ready yet', 'Monthly market update with permission; check in each quarter'],
        ['Past client', 'Home anniversary note and annual value update'],
      ]},
      { type: 'paragraph', text: "Keep every lead in one CRM or spreadsheet with a next follow-up date. With low lead volumes, write personal messages rather than automated sequences; Nevo makes the same point for small lead volumes in general (source: \"Waitlist, Book-a-Call and Lead Follow-Up\", gitroom.com blog)." },

      { type: 'heading', text: 'Rules Every Agent Should Know' },
      { type: 'list', items: [
        'Following the NAR settlement changes, buyers working with an agent who is a REALTOR® generally sign a written agreement before touring homes, and offers of buyer-broker compensation are no longer made on the MLS; check current NAR guidance and your state\'s rules (nar.realtor).',
        'Fair housing rules apply to every ad and every conversation.',
        'Do-not-call and TCPA rules apply to calls and texts.',
        'Canada: provincial regulators (such as RECO in Ontario) set advertising and conduct rules; UK agents follow property redress and material information requirements.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'The Math of Your First Year' },
      { type: 'callout', text: "Worked example with made-up numbers for illustration only: if an agent's average commission after brokerage split is $6,000 per closing, earning $100,000 takes about 17 closings. If 1 in 10 serious conversations leads to a closing, that is about 170 serious conversations a year, or 3 to 4 a week. Use your own split, average price and conversion to plan." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts neighborhood guides, social posts, market update emails and review requests in your voice, keeps your Google Business Profile current and reports which channels bring inquiries. Every post, email and ad waits for your approval, and housing ads should follow fair-housing and special ad category rules." },

      { type: 'faq', items: [
        { q: 'How do most realtors get clients?', a: 'Mostly through repeat clients and referrals from people who already know them, followed by local presence, open houses, online reviews and prospecting.' },
        { q: 'How can a new agent make $100,000 in the first year?', a: 'Work out how many closings you need from your average commission after split, then how many conversations that takes, and build a weekly routine around it. It is achievable for some agents, not typical for all.' },
        { q: 'What is the 80/20 rule for realtors?', a: 'A common saying that a minority of agents do most of the business, or that most of your business comes from a minority of sources. It is a rule of thumb, not a statistic.' },
        { q: 'What smell attracts home buyers?', a: 'Clean, neutral and fresh usually works best. Strong scents can put buyers off or make them wonder what is being covered.' },
        { q: 'How do I get real estate clients without cold calling?', a: 'Work your sphere, farm one neighborhood with useful content, run open houses, build reviews and partner with lenders and other pros.' },
        { q: 'Can I target Facebook ads by age or ZIP code for real estate?', a: 'Not for housing ads. Meta\'s housing special ad category limits age, gender and ZIP-level targeting.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your neighborhood content and follow-up emails, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['client-acquisition', 'turn-leads-into-booked-appointments', 'how-to-get-more-google-reviews', 'local-seo-ai-era-near-me-recommendations'],
  },

  // "marketing report example" US 210 + "marketing report template" US 110
  {
    id: 221,
    slug: 'marketing-report-template',
    title: 'Marketing Report Template and Example: What to Include and How to Write It',
    seoTitle: 'Marketing Report Template and Example: Monthly Report Guide (2027)',
    description: 'A complete monthly marketing report template with a filled-in example, versions for DTC, SaaS, local businesses and agencies, how to handle attribution gaps, how to write insights and next steps, and how to automate it.',
    category: 'Business',
    date: publishDate,
    imageIndex: 221,
    tableOfContents: [
      'The Short Answer',
      'The Monthly Marketing Report Template',
      'A Filled-In Example',
      'Report Versions by Business Type',
      'Metrics to Include by Channel',
      'Why Your Numbers Do Not Match Across Tools',
      'Measuring What You Cannot Attribute',
      'How to Write Insights and Next Steps',
      'Reports for Agencies and Clients',
      'Automating Your Marketing Report',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most marketing reports are long and say little. Leaders and clients want three answers: did we hit the goal, why, and what are we doing next. A good report answers those on the first page and keeps the detail below. Nevo David, founder of Postiz, puts the stakes simply: \"Growth becomes harder when SaaS performance cannot be measured\" (source: \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X article). The same is true for any business." },
      { type: 'callout', text: "Quick answer: A monthly marketing report should include a header (period, prepared for and by), a one-paragraph executive summary, results against goals, a channel breakdown, insights on what worked and what did not and why, and next steps with owners and dates. Keep the first page readable in two minutes and the detail in an appendix." },

      { type: 'heading', text: 'The Monthly Marketing Report Template' },
      { type: 'numbered-list', items: [
        'Header: business or client, period, prepared by, prepared for.',
        'Executive summary: the headline result, spend vs budget, the main reason, one win and one challenge.',
        'Goals vs results: each KPI with target, actual, difference vs goal and vs last period.',
        'Channel breakdown: spend, results and cost per result for paid, SEO and content, email, organic social and partnerships.',
        'Insights: what worked, what underperformed, and why you think so.',
        'Next steps: keep, stop, start and test, each with an owner, date and any budget change.',
        'Appendix: detailed tables for anyone who wants them.',
      ]},

      { type: 'heading', text: 'A Filled-In Example' },
      { type: 'paragraph', text: "This example uses a fictional online store and made-up numbers to show the format." },
      { type: 'table', headers: ['Section', 'Example content'], rows: [
        ['Summary', 'New customers beat target, driven by the new welcome email flow; Meta costs rose in the last week of the month.'],
        ['Goal: 150 new customers', 'Actual 162 (+8% vs goal, +12% vs last month)'],
        ['Goal: cost per new customer under $30', 'Actual $33, above target due to higher late-month ad costs'],
        ['Goal: email revenue share of 20%', 'Actual 24%, welcome flow launched mid-month'],
        ['What worked', 'Welcome flow converted new subscribers; two customer-review ads beat all others on cost per purchase'],
        ['What did not', 'Product-only image ads fatigued after two weeks; frequency climbed'],
        ['Next steps', 'Add three review-style ads (owner: ads lead, by the 7th); launch a win-back flow (email lead, by the 15th); pause the weakest ad set'],
      ]},

      { type: 'heading', text: 'Report Versions by Business Type' },
      { type: 'table', headers: ['Business', 'Lead metrics'], rows: [
        ['DTC / online store', 'New customers, cost per new customer, ROAS, average order value, repeat rate, email revenue'],
        ['SaaS', 'Trials, trial-to-paid, new MRR, CAC, payback period, churn'],
        ['Local business', 'Calls, bookings, Google Business Profile views and actions, reviews, cost per lead'],
        ['B2B services', 'Qualified inquiries, calls booked, proposals, clients won, pipeline value'],
        ['Agency (per client)', 'The client\'s main KPI, spend vs budget, work delivered, next month\'s plan'],
      ]},

      { type: 'heading', text: 'Metrics to Include by Channel' },
      { type: 'table', headers: ['Channel', 'Core metrics'], rows: [
        ['Meta and TikTok ads', 'Spend, results, cost per result, ROAS, frequency, top creatives'],
        ['Google Ads', 'Spend, conversions, cost per conversion, top search terms, impression share'],
        ['SEO and content', 'Organic sessions, leads from organic, top pages, rankings for priority terms, mentions in AI answers'],
        ['Email', 'Revenue or bookings, click rate, list growth, unsubscribes, flow vs campaign revenue'],
        ['Organic social', 'Messages, link clicks, saves and shares, followers as context'],
        ['Overall', 'New customers, cost per new customer, revenue from marketing'],
      ]},

      { type: 'heading', text: 'Why Your Numbers Do Not Match Across Tools' },
      { type: 'list', items: [
        'Ad platforms and analytics tools use different attribution windows and models, so Meta, Google Ads and Google Analytics will each credit sales differently.',
        'Platforms report modeled conversions where tracking is limited.',
        'Google Analytics 4 can apply data thresholds and retention limits that hide or drop some data.',
        'Pick one source of truth for each KPI (often your store, CRM or payment system), state it in the report, and use platform numbers to compare channels.',
      ]},

      { type: 'heading', text: 'Measuring What You Cannot Attribute' },
      { type: 'paragraph', text: "Content, UGC, brand and word of mouth often do not show up as last-click conversions. Nevo's approach is to compare total results in weeks with a big push against normal weeks (source: Alex is Building interview with Nevo David, X). Add \"how did you hear about us?\" to checkout or booking forms, and track branded search and direct traffic over time." },

      { type: 'heading', text: 'How to Write Insights and Next Steps' },
      { type: 'list', items: [
        'Lead with the answer, then the evidence: "Cost per customer rose because ad frequency climbed and creative fatigued."',
        'Compare against goals and last period, not just raw numbers.',
        'Separate what you know from what you think, and say how you will test it.',
        'Make next steps specific: who does what by when, and what budget changes.',
        'Use decision rules: for example, pause any ad above twice the target cost per result after enough spend.',
      ]},
      { type: 'paragraph', text: "When a key metric stays broken despite tactical fixes, say so. Nevo notes that repeating the same tactic on a structurally broken metric \"may produce only a 1%-5% improvement\", and a bigger change may be needed (source: \"How Postiz Used Open Source... to Reach $20K MRR\", X article)." },

      { type: 'heading', text: 'Reports for Agencies and Clients' },
      { type: 'list', items: [
        'Use partner or manager access to client accounts (Google Ads manager accounts, Meta business portfolio partners) instead of shared logins.',
        'Keep personal data out of reports; summarize customer data rather than exporting lists.',
        'Add a "work delivered" section and the plan for next month.',
        'Roll up results across clients for your own management view.',
      ]},

      { type: 'heading', text: 'Automating Your Marketing Report' },
      { type: 'numbered-list', items: [
        'Connect ad accounts, analytics, email and your store or CRM to one reporting tool.',
        'Build the template once, with goals stored alongside actuals.',
        'Schedule the data refresh weekly and monthly.',
        'Spend your time on the summary, insights and next steps, which automation should not replace.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop pulls results from your ad accounts, analytics and email tools into weekly and monthly reports in this format, with the summary and next steps written in plain words. You review the report before it goes to your team or clients, and any recommended change waits for your approval." },

      { type: 'faq', items: [
        { q: 'How do you write a marketing report?', a: 'Start with a one-paragraph summary, show results against goals, break results down by channel, explain what worked and what did not, and finish with specific next steps.' },
        { q: 'What do marketing reports look like?', a: 'Usually a short summary page with a KPI table, a channel breakdown, insights and next steps, followed by detailed tables or dashboards.' },
        { q: 'What is the 3-3-3 rule in marketing?', a: 'There is no single agreed definition. For reports, a useful habit is three headline results, three insights and three next steps on the first page.' },
        { q: 'What are the 7 parts of a marketing plan?', a: 'Common versions include goals, target audience, positioning, channels, budget, timeline and measurement. A report then tracks progress against that plan.' },
        { q: 'How long should a monthly marketing report be?', a: 'One page for the summary and decisions, with detail in an appendix.' },
        { q: 'Why do Meta and Google Analytics show different numbers?', a: 'They use different attribution models and windows. Choose one source of truth per KPI and use platform numbers for comparing channels.' },
      ]},
      { type: 'cta', text: 'Loraloop builds your weekly and monthly marketing report automatically, and you review it before anyone else sees it.' },
    ],
    relatedSlugs: ['automated-marketing-reporting-small-business', 'meta-ads-client-reporting-agency-template', 'year-end-client-report-template-agencies', 'best-marketing-reporting-tools-small-teams-2026'],
  },
];
