import type { BlogPost } from './blogData';

// Long-form guides batch E (rewritten November 28, 2026): ids 183, 184, 185, 186, 192, 193.
// Research per post: Google results, People Also Ask and related searches (Treg -> cloro Google SERP, US,
// Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP; it returns condensed summaries, so his points are
// paraphrased and attributed with platform and date) and official sources for legal and platform facts
// (FTC, FCC, Meta Business Help Center, Google Analytics Help, OpenAI docs). Statistics seen only in AI
// Overviews or unsourced posts were left out. Worked examples are labelled as illustrative.
// This is general information, not legal advice.
const publishDate = 'November 28, 2026';

export const guideBlogPostsE: BlogPost[] = [
  // "post black friday customer retention"
  {
    id: 183,
    slug: 'after-black-friday-retention-plan-shopify',
    title: 'After Black Friday: A 30-Day Plan to Turn Discount Buyers Into Repeat Customers',
    seoTitle: 'Black Friday Customer Retention: A 30-Day Plan for Shopify',
    description: 'A day-by-day plan for Shopify brands to turn Black Friday and Cyber Monday buyers into repeat customers without another discount: segment the cohort, deliver the first order well, check consent, onboard, separate gift buyers, make a second-order offer and measure repeat rate and margin.',
    category: 'Business',
    date: publishDate,
    imageIndex: 183,
    tableOfContents: [
      'The Short Answer',
      'Why Black Friday Buyers Are a Different Cohort',
      'Days 0-2: Tag and Segment the Cohort',
      'Days 0-7: Make the First Order Go Right',
      'Check Consent Before You Message Anyone',
      'Days 3-10: Onboarding That Teaches',
      'Gift Buyers and Self Buyers Need Different Paths',
      'Days 10-21: A Second-Order Offer That Is Not Another Discount',
      'Ask for Reviews the Right Way',
      'Paid Ads: Retarget at a Profit',
      'Days 21-30: Measure the Cohort',
      'Win Back the Discount-Only Buyers',
      'What to Stop Doing',
      'A 30-Day Calendar You Can Copy',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday fills your customer list with people who bought on a discount, many for the first time and many as gifts. Most will not buy again unless you give them a reason that is not another sale. This plan covers the 30 days after Cyber Monday (November 30, 2026), in order, with the checks that most retention guides skip." },
      { type: 'callout', text: "Quick answer: Split Black Friday buyers into first-time and returning, gift and self, and by product. Make sure the first order arrives well, message only people who agreed to marketing, teach them to use the product, then offer one reason to come back in days 10-21 that is not a discount: a refill, a matching product, a bundle or loyalty points. Measure the cohort's repeat rate and second-order margin against your normal customers." },

      { type: 'heading', text: 'Why Black Friday Buyers Are a Different Cohort' },
      { type: 'list', items: [
        'More first-time buyers who found you through a deal, not through the brand.',
        'More gift buyers: the person who will use the product is not the one on your list.',
        'Deeper discounts, so their first order often made little profit.',
        'Higher expectations of the next deal.',
      ]},
      { type: 'paragraph', text: "That is why the retention plan has to focus on the second order being profitable, not only on getting one. Nevo David, founder of Postiz, argues that shifting attention from acquisition to retention can grow a business faster without changing the marketing (Nevo David on X, 28 Nov 2025)." },

      { type: 'heading', text: 'Days 0-2: Tag and Segment the Cohort' },
      { type: 'table', headers: ['Segment', 'How to find it in Shopify', 'What they need next'], rows: [
        ['First-time buyers', 'Customers with one order, placed Nov 27-30', 'Onboarding and a reason to trust the brand'],
        ['Returning customers', 'Customers with earlier orders', 'Thanks, early access, loyalty points'],
        ['Likely gift buyers', 'Gift message, gift wrap, or a different shipping name', 'A post-holiday offer for themselves'],
        ['By product category', 'Product type or collection on the order', 'The right refill or matching product'],
        ['By discount depth', 'Discount code or amount on the order', 'Watch margin on the second order'],
      ]},
      { type: 'paragraph', text: "Tag these customers now (for example \"bfcm-2026-first\") so every later email, ad audience and report uses the same group." },

      { type: 'heading', text: 'Days 0-7: Make the First Order Go Right' },
      { type: 'paragraph', text: "The biggest retention lever after Black Friday is the first order arriving on time and as described. Few guides mention it." },
      { type: 'list', items: [
        'Send clear shipping updates, and tell customers about any delay straight away. The FTC Mail Order Rule requires shipping within the time you stated (or 30 days if you stated none) and offering a cancellation option when you cannot.',
        'Make your holiday returns window and process easy to find.',
        'Have someone answer support messages quickly during the busiest week.',
        'Check reviews and support tickets daily for problems with a specific product.',
      ]},

      { type: 'heading', text: 'Check Consent Before You Message Anyone' },
      { type: 'list', items: [
        'Shopify records email and SMS marketing consent separately on each customer. Buying does not opt someone in.',
        'Order and shipping notifications are transactional; promotional emails need the CAN-SPAM basics: accurate sender, honest subject line, a postal address and an opt-out honored within 10 business days.',
        'Marketing texts in the US need prior express written consent under the TCPA, and should be sent at reasonable local hours.',
        'Gmail and Yahoo require bulk senders to authenticate their domain (SPF, DKIM, DMARC), offer one-click unsubscribe and keep spam complaints low.',
        'For Canada (CASL), the UK (PECR) and the EU, check the consent rules before mailing buyers there.',
      ]},

      { type: 'heading', text: 'Days 3-10: Onboarding That Teaches' },
      { type: 'paragraph', text: "Once the order is delivered, send a short series that helps the customer get the most from the product: how to use it, how to care for it, sizing or fit tips, and the one mistake new customers make. These emails build trust and reduce returns. Keep sales out of them; the second-order offer comes later." },

      { type: 'heading', text: 'Gift Buyers and Self Buyers Need Different Paths' },
      { type: 'table', headers: ['Buyer', 'Path'], rows: [
        ['Bought for themselves', 'Onboarding, then a refill or matching product'],
        ['Bought as a gift', 'A thank-you, then a January offer for themselves'],
        ['Gift recipient', 'Only reachable if they sign up, for example through an insert card with a QR code to a care guide'],
      ]},

      { type: 'heading', text: 'Days 10-21: A Second-Order Offer That Is Not Another Discount' },
      { type: 'table', headers: ['Offer', 'Best for'], rows: [
        ['Refill or replenishment reminder', 'Consumables: skincare, supplements, coffee, pet food'],
        ['Matching product', 'Items that work with what they bought'],
        ['Bundle or kit', 'Raising order value without cutting unit price'],
        ['Loyalty points or credit for a second order', 'Customers who bought on a deep discount'],
        ['Early access to a new product or restock', 'Returning customers'],
      ]},
      { type: 'paragraph', text: "Keep urgency honest. Nevo warns against the tired tactic of claiming customer emails forced an expired deal to be extended (Nevo David on X, 4 Dec 2025)." },

      { type: 'heading', text: 'Ask for Reviews the Right Way' },
      { type: 'list', items: [
        'Ask every customer, after delivery, not only the ones you think are happy.',
        'If you offer an incentive, it must not depend on the review being positive; the FTC rule on consumer reviews and testimonials bans that.',
        'Disclose incentivized reviews.',
        'Reply to negative reviews with a fix.',
      ]},

      { type: 'heading', text: 'Paid Ads: Retarget at a Profit' },
      { type: 'list', items: [
        'Exclude recent buyers from prospecting campaigns so you do not pay to reach them again at full cost.',
        'Use the buyer segments for cross-sell ads to the matching product.',
        'Cap frequency; the same ads to the same people wear out fast.',
        'Judge retargeting by second-order margin, not only return on ad spend.',
      ]},

      { type: 'heading', text: 'Days 21-30: Measure the Cohort' },
      { type: 'table', headers: ['Metric', 'Compare against'], rows: [
        ['Repeat purchase rate (30, 60, 90 days)', 'Customers acquired in a normal month'],
        ['Second-order margin', 'First-order margin after discount'],
        ['Unsubscribes and spam complaints', 'Your normal sending'],
        ['Returns rate', 'Last year\'s holiday cohort'],
        ['Revenue per customer at 90 days', 'Other acquisition channels'],
      ]},
      { type: 'paragraph', text: "There is no reliable industry benchmark for repeat rate; it depends on category and time window. Your own cohorts are the right comparison." },

      { type: 'heading', text: 'Win Back the Discount-Only Buyers' },
      { type: 'paragraph', text: "Some buyers only ever purchase on a deep discount. Find them (customers whose only orders used a large code), and decide on purpose how to treat them rather than letting them shape your whole calendar." },
      { type: 'list', items: [
        'Send them the same value-led second-order offer as everyone else first.',
        'If they do not respond by day 30, move them to a lower-frequency list so they do not drag down engagement and deliverability.',
        'Invite them to early access for your next planned sale instead of creating extra discounts for them.',
        'Stop paying to retarget them at full cost if they never buy without a code.',
      ]},
      { type: 'paragraph', text: "Illustrative example: a brand acquires 1,000 first-time buyers over BFCM at an average 30% discount. If 120 of them place a full-price second order with a 55% gross margin, that second order is where the cohort becomes profitable. Use your own margin and order values to see what repeat rate makes your Black Friday spend pay back." },

      { type: 'heading', text: 'What to Stop Doing' },
      { type: 'list', items: [
        'Sending another discount as the first message after the sale.',
        'Daily blasts to the whole list in December.',
        'Fake countdowns and "extended by popular demand" claims.',
        'Mailing people who did not agree to marketing.',
      ]},

      { type: 'heading', text: 'A 30-Day Calendar You Can Copy' },
      { type: 'table', headers: ['Days after Cyber Monday', 'Action'], rows: [
        ['0-2', 'Tag the cohort; check consent fields; brief support'],
        ['0-7', 'Shipping updates and delay notices; monitor reviews'],
        ['3-10', 'Onboarding emails after delivery'],
        ['7-14', 'Review request; gift buyers get a thank-you'],
        ['10-21', 'Second-order offer by segment; cross-sell ads'],
        ['21-30', 'Measure the cohort; plan January for gift buyers'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify and Klaviyo, builds the BFCM segments, drafts the onboarding, review and second-order emails, and sets up cross-sell audiences on Meta. It reports the cohort's repeat rate and margin each week. Every segment, email and ad waits for your approval." },

      { type: 'faq', items: [
        { q: 'What is a reasonable customer retention rate?', a: 'There is no agreed benchmark; it varies by category, purchase cycle and how you define retained. Compare each cohort with your own earlier cohorts.' },
        { q: 'What is another way to say customer retention?', a: 'Repeat purchase rate, repeat-customer rate or customer loyalty. For subscriptions, churn is the opposite measure. Define which one you report.' },
        { q: 'Is a 20% returning customer rate good?', a: 'It depends on the product and the time window; consumables repeat more than durable goods. Compare your Black Friday cohort with normal customers.' },
        { q: 'Should I send Black Friday buyers another discount?', a: 'Not as the first message. Start with a smooth delivery and useful onboarding, then offer a refill, bundle or points.' },
        { q: 'When should the first marketing email go out?', a: 'After the order is delivered. Shipping and order emails come first.' },
        { q: 'How long should a retention plan run?', a: 'Plan the first 30 days in detail and measure the cohort at 60 and 90 days.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your post-Black Friday segments, emails and audiences, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['email-marketing-strategy', 'get-new-customers-shopify-without-discounts', 'bfcm-post-mortem-template-agencies', 'meta-ads-after-cyber-monday-december-plan'],
  },

  // "meta ads after black friday" / December
  {
    id: 184,
    slug: 'meta-ads-after-cyber-monday-december-plan',
    title: 'Meta Ads After Cyber Monday: What to Change in December',
    seoTitle: 'Meta Ads After Black Friday: What to Change in December',
    description: 'A week-by-week December plan for Meta ads after Cyber Monday: read BFCM results first, step budgets down instead of switching off, replace discount creative with gift and delivery-date angles, retarget browsers, exclude buyers, plan around shipping cut-offs and check attribution before comparing results.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 184,
    tableOfContents: [
      'The Short Answer',
      'What Changes After Cyber Monday',
      'Step 1: Read Your BFCM Results First',
      'Step 2: Step Budgets Down, Do Not Switch Off',
      'Step 3: Replace Discount Creative',
      'Step 4: Retarget Browsers Who Did Not Buy',
      'Step 5: Exclude Recent Buyers From Prospecting',
      'Step 6: Plan Around Your Shipping Cut-Off',
      'Step 7: Give Advantage+ Fresh Variety',
      'Step 8: Check Attribution Before Reporting',
      'Step 9: Watch Account Health',
      'Step 10: Plan the January Reset Now',
      'A Week-by-Week December Checklist',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most Meta ads advice online is written before Black Friday. This guide is for the weeks after Cyber Monday (November 30, 2026), when buyers stop hunting deals and start worrying about gifts arriving on time. The changes below keep your campaigns stable and profitable through December." },
      { type: 'callout', text: "Quick answer: After Cyber Monday, review your BFCM results before changing anything, lower budgets in steps rather than switching campaigns off, replace discount creative with gift guides, delivery dates and gift cards, retarget people who browsed but did not buy, exclude recent buyers from prospecting, plan three phases around your last shipping date and note which attribution setting you use before comparing December with last year." },

      { type: 'heading', text: 'What Changes After Cyber Monday' },
      { type: 'list', items: [
        'Buyers move from "best deal" to "right gift, delivered in time".',
        'Auction pressure eases from the BFCM peak but stays high until mid-December.',
        'Last-minute shoppers respond to delivery promises and gift cards.',
        'Your BFCM buyers become a cross-sell audience.',
      ]},

      { type: 'heading', text: 'Step 1: Read Your BFCM Results First' },
      { type: 'list', items: [
        'Compare store revenue with Meta-reported revenue; they use different attribution and will not match.',
        'Check total revenue divided by total ad spend across channels (often called MER).',
        'Split new and returning customers.',
        'List the top five ads by spend and what they share: angle, format, offer.',
      ]},
      { type: 'paragraph', text: "Our BFCM post-mortem guide has a full template." },

      { type: 'heading', text: 'Step 2: Step Budgets Down, Do Not Switch Off' },
      { type: 'paragraph', text: "Meta says an ad set needs about 50 optimization events in a week to exit the learning phase, and significant edits such as large budget changes or pausing for a week or more can send it back. Lower budgets gradually over several days, keep your best campaigns running, and pause only what clearly loses money. Nevo David also notes that stopping and starting ads repeatedly can disrupt delivery (Nevo David on X, 5 Dec 2025)." },

      { type: 'heading', text: 'Step 3: Replace Discount Creative' },
      { type: 'table', headers: ['Out', 'In'], rows: [
        ['"40% off, today only"', 'Gift guides by person or budget'],
        ['Countdown timers for Cyber Monday', '"Order by [date] for delivery before Christmas"'],
        ['Sitewide sale banners', 'Bundles and gift sets'],
        ['Discount codes', 'Gift cards and digital gifts after the shipping cut-off'],
      ]},
      { type: 'paragraph', text: "Delivery claims must be accurate. Misleading claims break Meta's Advertising Standards and the FTC Act, and the FTC Mail Order Rule requires shipping within the time you state." },

      { type: 'heading', text: 'Step 4: Retarget Browsers Who Did Not Buy' },
      { type: 'list', items: [
        'People who viewed products or added to cart during BFCM but did not buy.',
        'Show the products they viewed, with delivery dates instead of a discount.',
        'Keep the window short (7-30 days) and cap frequency.',
      ]},

      { type: 'heading', text: 'Step 5: Exclude Recent Buyers From Prospecting' },
      { type: 'paragraph', text: "Exclude customers who bought during BFCM from prospecting campaigns so you do not pay to reach them as if they were new. Use them in a separate cross-sell campaign for matching products, or leave them to email." },

      { type: 'heading', text: 'Step 6: Plan Around Your Shipping Cut-Off' },
      { type: 'table', headers: ['Phase', 'What to run'], rows: [
        ['Before standard shipping cut-off', 'Gift guides, bundles, best sellers with delivery dates'],
        ['Express shipping only', 'Smaller budget; best sellers with express delivery'],
        ['After the last shipping date', 'Gift cards, digital products, local pickup; then pause physical-product prospecting'],
      ]},
      { type: 'paragraph', text: "Check this year's dates on the USPS, UPS and FedEx holiday shipping pages and your own warehouse's cut-off." },

      { type: 'heading', text: 'Step 7: Give Advantage+ Fresh Variety' },
      { type: 'paragraph', text: "Meta's delivery system rewards a range of distinct creative concepts, not many copies of one ad. Add new concepts (a gift guide, a delivery-date message, a customer video) rather than small edits. Nevo's advice applies: ads wear out when the same people see the same creative, so rotate often (Nevo David on X, 2 Jul 2026)." },

      { type: 'heading', text: 'Step 8: Check Attribution Before Reporting' },
      { type: 'paragraph', text: "Meta's default attribution is 7-day click and 1-day view, and Meta has changed which windows and click types it reports. Before comparing December with last year, note which attribution setting each campaign used, and compare with store orders as well as Meta-reported conversions." },

      { type: 'heading', text: 'Step 9: Watch Account Health' },
      { type: 'list', items: [
        'Keep a backup payment method so failed charges do not stop delivery.',
        'Keep at least two admins and two-factor authentication on the business portfolio.',
        'Avoid sudden large spend jumps on new accounts.',
        'Check rejected ads daily; our guide on restricted Meta ad accounts explains what to do if one is blocked.',
      ]},

      { type: 'heading', text: 'Step 10: Plan the January Reset Now' },
      { type: 'paragraph', text: "January brings returns, gift-card redemptions and new-year buyers with different needs. Set it up in the last week of December so you are not starting from zero on January 2." },
      { type: 'list', items: [
        'Build audiences now: holiday buyers for cross-sell, gift-card buyers and recipients, and site visitors who did not buy.',
        'Prepare creative for new-year angles: fresh starts, routines, using the gift card, restocks.',
        'Decide your January budget from December margin, not from BFCM revenue.',
        'Book creative refreshes for the first two weeks; holiday ads will look dated quickly.',
        'Set a date to review returns and re-pull net revenue for your BFCM report.',
      ]},
      { type: 'paragraph', text: "Nevo David's general rule for ads also applies to January: once something works, repeat it until it stops working (source: \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article). Start the new year with your best December concepts, adapted, before testing new ones." },

      { type: 'heading', text: 'A Week-by-Week December Checklist' },
      { type: 'table', headers: ['Week', 'Focus'], rows: [
        ['Dec 1-6', 'Read BFCM results; step budgets down; launch gift creative; retarget browsers'],
        ['Dec 7-13', 'Exclude buyers; cross-sell campaign; refresh creative'],
        ['Dec 14-20', 'Delivery-date and express messaging; shift to gift cards as cut-offs pass'],
        ['Dec 21-31', 'Gift cards and digital; plan January audiences and creative'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to your Meta ad account and Shopify, compares Meta-reported results with store orders, proposes budget step-downs, drafts gift and delivery-date creative and builds the buyer exclusion and cross-sell audiences. Every budget change, ad and audience waits for your approval before it touches a live campaign." },

      { type: 'faq', items: [
        { q: 'Should I turn off Meta ads after Black Friday?', a: 'Usually not all at once. Step budgets down and keep profitable campaigns running until your shipping cut-off.' },
        { q: 'How much do 1,000 clicks cost on Facebook?', a: 'There is no fixed price; Meta runs an auction, and cost depends on audience, placement, objective, creative and season. Use your own cost-per-click history.' },
        { q: 'Why are there so many ads on Facebook now?', a: 'The fourth quarter is the busiest advertising period of the year, and Meta shows ads across more placements such as Reels and Stories.' },
        { q: 'When do holiday ad costs come down?', a: 'There is no reliable public figure. Track your own cost per thousand impressions by week.' },
        { q: 'Should I use discounts in December ads?', a: 'Use them sparingly. Delivery dates, gift guides and gift cards usually matter more to December shoppers.' },
        { q: 'What should I prepare for January?', a: 'Audiences from holiday buyers and gift recipients, fresh creative, and a plan for the post-holiday slowdown.' },
      ]},
      { type: 'cta', text: 'Loraloop proposes your December budget and creative changes, and nothing changes in a live campaign until you approve it.' },
    ],
    relatedSlugs: ['creative-fatigue-meta-ads-detect-and-fix', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'bfcm-post-mortem-template-agencies', 'meta-ad-account-restricted-what-to-do'],
  },

  // "bfcm post mortem"
  {
    id: 185,
    slug: 'bfcm-post-mortem-template-agencies',
    title: 'BFCM Post-Mortem: The Report to Build Before Your Monday Meeting',
    seoTitle: 'BFCM Post-Mortem Template for Agencies: What to Report',
    description: 'A BFCM post-mortem template for agencies and in-house teams: save the data before it changes, agree definitions, report results vs plan, customers, paid media, site and checkout, stock and returns, then finish with three decisions and a one-page client summary.',
    category: 'Business',
    date: publishDate,
    imageIndex: 185,
    tableOfContents: [
      'The Short Answer',
      'What a BFCM Post-Mortem Is',
      'Save the Data This Weekend',
      'Agree the Definitions First',
      'Section 1: Results vs Plan',
      'Section 2: Customers',
      'Section 3: Paid Media',
      'Section 4: Site and Checkout',
      'Section 5: Stock, Fulfillment and Returns',
      'Section 6: Keep, Stop and Test',
      'The One-Page Client Summary',
      'Running Post-Mortems Across Many Clients',
      'A Copyable Template',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday Cyber Monday 2026 ran from November 27 to November 30. Clients will want to know how it went at the first meeting after. A good post-mortem answers that in one page and ends with decisions, not a pile of charts. This template works for agencies and in-house teams." },
      { type: 'callout', text: "Quick answer: A BFCM post-mortem compares plan with results across revenue, margin, customers, paid media, site and checkout, and stock, then ends with three decisions for next year. Save ads, pages and discount data this weekend, agree the definitions before pulling numbers, give the first read in the week after Cyber Monday and re-pull net revenue after returns settle in January." },

      { type: 'heading', text: 'What a BFCM Post-Mortem Is' },
      { type: 'paragraph', text: "A post-mortem is a structured review of what happened against what you planned, and why. For a brand, it guides next year's plan. For an agency, it also shows the client the value of your work and sets up the January plan, so it needs a short client-facing summary as well as the detailed working version." },

      { type: 'heading', text: 'Save the Data This Weekend' },
      { type: 'list', items: [
        'Screenshot live ads, landing pages, pop-ups and the homepage before they change.',
        'Export discount code usage and the exact offer terms.',
        'Record stock levels and items that sold out, with the time they sold out.',
        'In Google Analytics 4, check Admin > Data retention: standard properties default to two months of event data for Explorations; extend it to 14 months so you can compare next year.',
        'Note anything that went wrong and when: site errors, payment problems, ad rejections.',
      ]},

      { type: 'heading', text: 'Agree the Definitions First' },
      { type: 'table', headers: ['Decide', 'Example'], rows: [
        ['Date range', 'Nov 27-30, or the full promotion period'],
        ['Time zone', 'The store\'s time zone'],
        ['Revenue', 'Gross sales, net of discounts, or net of returns'],
        ['Attribution', 'Store orders vs Meta and Google reported, with the windows used'],
        ['Comparison', 'Last year\'s BFCM, the plan, and a normal week'],
      ]},

      { type: 'heading', text: 'Section 1: Results vs Plan' },
      { type: 'list', items: [
        'Revenue, orders and average order value against plan and last year.',
        'Margin after discounts, shipping and ad spend.',
        'Best and worst days and hours.',
        'Top products by revenue and by margin.',
      ]},

      { type: 'heading', text: 'Section 2: Customers' },
      { type: 'list', items: [
        'New vs returning customers, and revenue from each.',
        'Average discount depth for each group.',
        'Email and SMS list growth and revenue from email and SMS.',
        'Plans for the post-BFCM retention program.',
      ]},

      { type: 'heading', text: 'Section 3: Paid Media' },
      { type: 'list', items: [
        'Spend by platform against plan.',
        'Total revenue divided by total ad spend (MER), alongside platform-reported return on ad spend.',
        'Platform-reported conversions vs store orders, with the attribution windows noted.',
        'Top five ads by spend: what they shared in angle, format and offer.',
        'Cost per thousand impressions by day, compared with a normal week.',
      ]},

      { type: 'heading', text: 'Section 4: Site and Checkout' },
      { type: 'list', items: [
        'Conversion rate by day and by device.',
        'Checkout drop-off by step and by hour.',
        'Payment declines and errors.',
        'Page speed and any downtime.',
      ]},

      { type: 'heading', text: 'Section 5: Stock, Fulfillment and Returns' },
      { type: 'list', items: [
        'Sell-outs and the revenue they likely cost.',
        'Overstock left after the sale.',
        'Shipping times and delays.',
        'Returns: re-pull in January when the holiday returns window closes, then update net revenue.',
      ]},

      { type: 'heading', text: 'Section 6: Keep, Stop and Test' },
      { type: 'paragraph', text: "End with three decisions at most: one thing to keep, one to stop and one to test next year. A long list of learnings gets forgotten. Nevo David makes a related point about any recurring problem: repeating the same tactic tends to give small gains, while a real change of approach can do more (source: \"How Postiz Used Open Source, Underserved Channels, Automation, SEO, and Outreach to Reach $20K MRR\", X article)." },

      { type: 'heading', text: 'The One-Page Client Summary' },
      { type: 'numbered-list', items: [
        'Headline: revenue and margin against plan, in one sentence.',
        'Three numbers: revenue, new customers, MER.',
        'What worked, with one example ad or email.',
        'What did not, and why.',
        'Three decisions and the January plan.',
      ]},
      { type: 'paragraph', text: "Present it in ten minutes and keep the detailed version as an appendix." },

      { type: 'heading', text: 'Running Post-Mortems Across Many Clients' },
      { type: 'list', items: [
        'Use one template so reports are comparable and quick to build.',
        'Keep each client\'s data in its own workspace and report.',
        'Never share one client\'s numbers with another without permission; check your contracts and, for EU and UK clients, data protection rules.',
        'If you review "was/now" pricing, flag any price comparison the client cannot support under the FTC Guides Against Deceptive Pricing.',
      ]},

      { type: 'heading', text: 'A Copyable Template' },
      { type: 'table', headers: ['Section', 'What to include', 'Source'], rows: [
        ['Summary', 'Revenue and margin vs plan; three decisions', 'All sections'],
        ['Results', 'Revenue, orders, AOV, margin, top products', 'Shopify Analytics'],
        ['Customers', 'New vs returning, list growth', 'Shopify, Klaviyo'],
        ['Paid media', 'Spend, MER, top ads, platform vs store', 'Meta, Google, Shopify'],
        ['Site', 'Conversion, checkout drop-off, errors', 'GA4, Shopify'],
        ['Stock and returns', 'Sell-outs, delays, returns (January)', 'Shopify, warehouse'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop pulls Shopify, Meta and Google data for each client into a draft post-mortem using this structure, compares platform-reported and store results, and drafts the one-page summary. Each client's data stays in its own workspace, and every report waits for your team's review and approval before it goes to the client." },

      { type: 'faq', items: [
        { q: 'What does BFCM stand for?', a: 'Black Friday Cyber Monday: the US shopping period from the Friday after Thanksgiving through the following Monday. In 2026 it ran from November 27 to November 30.' },
        { q: 'How long is BFCM?', a: 'Strictly four days, Friday to Monday; "Cyber 5" adds Thanksgiving. Many brands run longer promotions, so state the date range your report uses.' },
        { q: 'When should you run a BFCM post-mortem?', a: 'A first read in the week after Cyber Monday and a final read after the returns window closes, often in January.' },
        { q: 'Should I trust platform-reported ROAS for BFCM?', a: 'Use it alongside store orders. Platforms use different attribution windows and will not match your store.' },
        { q: 'What is MER?', a: 'Marketing efficiency ratio: total revenue divided by total marketing or ad spend across channels.' },
        { q: 'How many recommendations should the report include?', a: 'Three at most: one to keep, one to stop and one to test.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts each client\'s BFCM report from connected data, and nothing is sent until your team approves it.' },
    ],
    relatedSlugs: ['meta-ads-client-reporting-agency-template', 'marketing-report-template', 'meta-ads-after-cyber-monday-december-plan', 'after-black-friday-retention-plan-shopify'],
  },

  // "saas black friday deal churn"
  {
    id: 186,
    slug: 'saas-black-friday-trials-churn',
    title: 'Black Friday Signups Churn Fast. How SaaS Teams Keep Them',
    seoTitle: 'SaaS Black Friday Churn: How to Keep Discount Signups',
    description: 'Why SaaS Black Friday signups churn and how to keep them: measure them as their own cohort, choose the right deal type, get users to first value in week one, send the trial and renewal notices the law requires, plan the discount end, build a fair save flow and run win-back.',
    category: 'Business',
    date: publishDate,
    imageIndex: 186,
    tableOfContents: [
      'The Short Answer',
      'Why Black Friday Signups Churn Faster',
      'Measure Them as a Separate Cohort',
      'Annual Deal, Monthly Discount or Trial',
      'Week 1: Get Every Signup to First Value',
      'Ask One Question at Signup',
      'Trial-End and Renewal Notices',
      'Plan the Discount End',
      'A Cancellation Save Flow That Is Fair',
      'Win-Back for Those Who Leave',
      'What Not to Do',
      'A 60-Day Calendar for the Black Friday Cohort',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Black Friday deals bring a burst of SaaS signups, and a month later many of them cancel. Nevo David shared his own numbers from Black Friday 2025 at Postiz: 84 Black Friday trials expected to add about $1,000 in monthly revenue, while churn across 436 active subscriptions meant almost 80 subscriptions would leave (Nevo David on X, 30 Nov 2025). New signups do not help if more customers leave. This guide shows how to keep the Black Friday cohort." },
      { type: 'callout', text: "Quick answer: Black Friday signups churn because many came for the price, not the problem. Track them as their own cohort, measure churn after the first payment rather than during the trial, get each user to one meaningful result in week one, tell them clearly when the trial or discount ends, and offer a fair save option at cancellation instead of another discount for everyone." },

      { type: 'heading', text: 'Why Black Friday Signups Churn Faster' },
      { type: 'list', items: [
        'Price-led intent: some buyers wanted the deal more than the product.',
        'Wrong fit: deals attract people outside your ideal customer profile.',
        'No habit: users who sign up during a busy week often never set up the product.',
        'Surprise at the full price when the discount ends.',
      ]},

      { type: 'heading', text: 'Measure Them as a Separate Cohort' },
      { type: 'list', items: [
        'Tag every signup from the Black Friday period in your billing tool and product analytics.',
        'Measure cancellations after the first payment, not only during the trial; Nevo recommends configuring Stripe billing reports this way (Nevo David on X, 26 Nov 2025).',
        'Track how many active trials are set to cancel, which Stripe does not show on its main dashboard.',
        'Compare activation, retention and revenue with signups from a normal month.',
      ]},

      { type: 'heading', text: 'Annual Deal, Monthly Discount or Trial' },
      { type: 'table', headers: ['Deal type', 'Retention effect', 'Watch for'], rows: [
        ['Discounted annual plan', 'Cash up front; churn hidden until renewal', 'A large renewal cliff in 12 months'],
        ['Monthly discount for a few months', 'Churn shows quickly when the price rises', 'A drop when the discount ends'],
        ['Extended or card-required trial', 'Many cancel before paying', 'Trial-end notices and virtual cards'],
        ['Lifetime deal', 'No subscription churn, but no recurring revenue', 'Support costs over time'],
      ]},
      { type: 'paragraph', text: "Nevo has noted that a lifetime deal makes churn less important as a metric, but the revenue does not recur (Nevo David on X, 30 Nov 2025)." },

      { type: 'heading', text: 'Week 1: Get Every Signup to First Value' },
      { type: 'numbered-list', items: [
        'Define one activation action that shows the product working.',
        'Point onboarding straight at it; Postiz changed onboarding from connecting a first channel to scheduling a first post.',
        'Send behavior-based emails: a nudge if the action is not done after a day, the next step once it is.',
        'Fix the bugs new users hit first; Nevo calls bugs one of the biggest causes of churn.',
      ]},

      { type: 'heading', text: 'Ask One Question at Signup' },
      { type: 'paragraph', text: "Ask \"What do you want to do first?\" with three or four options, and route onboarding by the answer. It improves activation and tells you how many deal signups match your ideal customer profile." },

      { type: 'heading', text: 'Trial-End and Renewal Notices' },
      { type: 'list', items: [
        'US: the Restore Online Shoppers\' Confidence Act (ROSCA) requires clear disclosure of terms before collecting billing details, express informed consent and a simple way to cancel.',
        'The FTC\'s amended negative-option ("click-to-cancel") rule was vacated by a federal appeals court in July 2025; check its current status, but ROSCA still applies.',
        'California\'s automatic renewal law, updated from July 2025, requires consent, online cancellation for online signups, reminders for annual plans and notice before price changes. Other states have their own rules.',
        'Visa and Mastercard rules require reminders before free or discounted trials convert to paid.',
        'UK and EU consumer subscription rules add reminders and cooling-off rights for consumers.',
      ]},
      { type: 'paragraph', text: "Clear notices also reduce chargebacks and angry cancellations. This is general information, not legal advice." },

      { type: 'heading', text: 'Plan the Discount End' },
      { type: 'list', items: [
        'Tell customers the regular price and the date it starts, at signup and again before it changes.',
        'Show what they have achieved in the product before the price changes.',
        'Offer an annual plan at that point for those who want to lock in a price.',
      ]},

      { type: 'heading', text: 'A Cancellation Save Flow That Is Fair' },
      { type: 'table', headers: ['Reason given', 'Save offer'], rows: [
        ['Too expensive', 'A smaller plan, or a discount for customers who have paid at least once'],
        ['Not using it', 'Setup help or a pause'],
        ['Missing a feature', 'Roadmap timing or a workaround'],
        ['Switching to a competitor', 'Ask why; no offer needed'],
      ]},
      { type: 'paragraph', text: "Nevo's December plan offered customers who had paid for at least one month a cancellation deal such as 50% off the next three months (Nevo David on X, 30 Nov 2025). Keep cancelling simple: one screen with an offer, then a clear cancel button." },

      { type: 'heading', text: 'Win-Back for Those Who Leave' },
      { type: 'list', items: [
        'Ask one question about why they left, then thank them.',
        'Email again when you ship what they asked for.',
        'Offer a return path before next year\'s Black Friday, not a constant discount.',
      ]},

      { type: 'heading', text: 'What Not to Do' },
      { type: 'list', items: [
        'Fake deal extensions or countdowns.',
        'Hidden renewals or charges without notice.',
        'Threatening to delete data to force renewal, which Nevo calls a dark pattern (Nevo David on X, 5 Dec 2025).',
        'Cancellation flows with many screens, which the FTC\'s staff report on dark patterns highlights.',
      ]},

      { type: 'heading', text: 'A 60-Day Calendar for the Black Friday Cohort' },
      { type: 'table', headers: ['Days', 'Action'], rows: [
        ['0-7', 'Tag the cohort; onboarding to first value; fix top bugs'],
        ['7-14', 'Behavior-based emails; one-question routing'],
        ['Before trial or discount ends', 'Required notices; show results; offer annual plan'],
        ['30', 'Measure post-payment churn vs normal cohorts'],
        ['30-60', 'Save flow and win-back; review which deal type retained best'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts the onboarding emails, trial-end and renewal notices, save-flow copy and win-back sequence for your Black Friday cohort, and reports which acquisition channels brought customers who stayed. Every email and sequence waits for your approval before it is sent." },

      { type: 'faq', items: [
        { q: 'Should SaaS companies run Black Friday discounts?', a: 'Only if the deal attracts your ideal customers. Annual-plan deals collect cash up front but can hide churn until renewal.' },
        { q: 'What is a good churn rate for SaaS?', a: 'There is no agreed figure; it depends on price, customer size, billing period and whether you measure customer or revenue churn. Compare the Black Friday cohort with normal signups.' },
        { q: 'What is the average churn rate for SaaS companies?', a: 'Published averages vary widely by survey and segment, so there is no reliable single number.' },
        { q: 'What is the 3-3-2-2-2 rule of SaaS?', a: 'A growth rule of thumb (often called T2D3): triple annual recurring revenue for two years, then double it for three. It is not a churn metric.' },
        { q: 'What is the rule of 40 in SaaS?', a: 'Revenue growth rate plus profit margin should be at least 40%. It is mainly used for later-stage companies.' },
        { q: 'Do lifetime deals cause churn?', a: 'They remove subscription churn but bring no recurring revenue and can add support costs.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your onboarding, renewal and win-back emails for the Black Friday cohort, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['free-trial-to-paid-conversion', 'saas-pricing-to-acquire-customers', 'saas-annual-plan-campaign-december', 'bfcm-post-mortem-template-agencies'],
  },

  // "how to get recommended by chatgpt" (SaaS)
  {
    id: 192,
    slug: 'how-to-get-saas-recommended-by-chatgpt',
    title: 'How to Get Your SaaS Recommended by ChatGPT',
    seoTitle: 'How to Get Your SaaS Recommended by ChatGPT (2027 Guide)',
    description: 'How ChatGPT decides which SaaS products to recommend and what to do about it: let OpenAI\'s search crawler in, describe who the product is for plainly, own a narrow use case, publish comparison pages, earn accurate mentions on Reddit, GitHub and review sites, fix wrong descriptions and measure the results.',
    category: 'Business',
    date: publishDate,
    imageIndex: 192,
    tableOfContents: [
      'The Short Answer',
      'How ChatGPT Decides Which SaaS to Recommend',
      'Step 1: Let ChatGPT Reach Your Site',
      'Step 2: Say Who It Is For in Plain Words',
      'Step 3: Own a Narrow Use Case',
      'Step 4: Publish the Pages Buyers Ask About',
      'Step 5: Earn Accurate Third-Party Mentions',
      'Step 6: Fix Wrong Descriptions of Your Product',
      'Step 7: Be Indexed on Bing and Keep Facts Consistent',
      'How to Audit Your ChatGPT Visibility',
      'What Does Not Work',
      'How Long It Takes and How to Measure It',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Buyers now ask ChatGPT \"what is the best tool for X?\" before they search Google. Most advice on getting recommended is written for local businesses: Google reviews and business profiles. SaaS works differently. ChatGPT compares your product with competitors using your site, comparison pages and what people say about you elsewhere." },
      { type: 'callout', text: "Quick answer: To get your SaaS recommended by ChatGPT, allow OpenAI's search crawler (OAI-SearchBot) on your site, state plainly who the product is for and what it does, target a narrow use case you can win, publish comparison, alternatives and pricing pages, earn accurate mentions on Reddit, GitHub, review sites and LinkedIn articles, correct outdated descriptions, and track a fixed set of prompts every month." },

      { type: 'heading', text: 'How ChatGPT Decides Which SaaS to Recommend' },
      { type: 'list', items: [
        'Trained knowledge: what the model learned about your category before its training cut-off.',
        'Live search: for many questions, ChatGPT searches the web and cites sources in its answer.',
        'Comparison: Nevo David notes that LLMs rank a company against its competitors\' content, so what others publish about you matters (source: "Distribution Playbook for Growing Postiz from $2M to $3M ARR", X article).',
      ]},

      { type: 'heading', text: 'Step 1: Let ChatGPT Reach Your Site' },
      { type: 'table', headers: ['OpenAI crawler', 'What it does', 'Control'], rows: [
        ['OAI-SearchBot', 'Finds pages to show in ChatGPT search answers', 'Allow it in robots.txt if you want to appear'],
        ['GPTBot', 'Collects content that may be used to train models', 'Separate choice; blocking it is about training'],
        ['ChatGPT-User', 'Visits pages when a user or agent asks ChatGPT to', 'User-initiated; see OpenAI\'s bot documentation'],
      ]},
      { type: 'list', items: [
        'Check robots.txt for each user agent separately.',
        'Check your CDN or firewall: some now block AI crawlers by default.',
        'Make sure key content is in the HTML, not only rendered by JavaScript.',
      ]},

      { type: 'heading', text: 'Step 2: Say Who It Is For in Plain Words' },
      { type: 'paragraph', text: "Your homepage, pricing page and docs should say, in one sentence each, who the product is for, what it does and how it differs. Vague copy such as \"the all-in-one platform for modern teams\" gives ChatGPT nothing to match a buyer's question to." },

      { type: 'heading', text: 'Step 3: Own a Narrow Use Case' },
      { type: 'paragraph', text: "You are unlikely to be the first answer for \"best CRM\". You can be the best answer for \"CRM for real estate teams of five\". Nevo's playbook says the narrower the niche and the more specific the query, the easier it becomes to appear (source: Distribution Playbook, X article)." },

      { type: 'heading', text: 'Step 4: Publish the Pages Buyers Ask About' },
      { type: 'table', headers: ['Page', 'Matches prompts like'], rows: [
        ['Comparison: You vs Competitor', '"Is X better than Y?"'],
        ['Alternatives', '"Alternatives to Y"'],
        ['Best tool for [use case]', '"Best tool for [job] for [buyer]"'],
        ['Pricing with clear plans', '"How much does X cost?"'],
        ['Integrations', '"Does X work with Shopify?"'],
      ]},
      { type: 'paragraph', text: "Be fair in comparisons. Pages that only praise you are less likely to be trusted or cited." },

      { type: 'heading', text: 'Step 5: Earn Accurate Third-Party Mentions' },
      { type: 'list', items: [
        'Reddit: answer real questions in detail and follow each subreddit\'s rules. Nevo notes a single useful Reddit conversation can become a source an LLM keeps citing.',
        'GitHub: README files and curated lists; Nevo points out that GitHub is one of the high-authority sites ChatGPT looks at.',
        'Review sites and directories in your category.',
        'LinkedIn and X articles, guest posts and podcasts.',
        'Disclose any paid or incentivized mention under the FTC Endorsement Guides; never post fake reviews.',
      ]},

      { type: 'heading', text: 'Step 6: Fix Wrong Descriptions of Your Product' },
      { type: 'paragraph', text: "LLMs repeat what they read. Nevo describes competitors' comparison pages leading LLMs to describe Postiz as only open source and leave out its cloud product, and fixing it by stating clearly on the README and website that the product was not only open source (Nevo David on X, 23 Sep 2026). Ask ChatGPT about your product, note anything wrong, and correct it at the source: your site, your docs, directory listings and outdated articles." },

      { type: 'heading', text: 'Step 7: Be Indexed on Bing and Keep Facts Consistent' },
      { type: 'list', items: [
        'ChatGPT search has used third-party search providers, including Bing; verify your site in Bing Webmaster Tools.',
        'Keep your product name, category, pricing and positioning consistent across your site, directories, social profiles and press.',
        'Update old pages when pricing or features change.',
      ]},

      { type: 'heading', text: 'How to Audit Your ChatGPT Visibility' },
      { type: 'numbered-list', items: [
        'Write 20 to 30 prompts a buyer would use, in their words, across your use cases.',
        'Run them monthly and record whether you appear, how you are described and which sources are cited.',
        'Find the sites cited for competitors and get covered there; this is step three of Nevo\'s sequence.',
        'Log what you changed so you can link changes to results.',
      ]},

      { type: 'heading', text: 'What Does Not Work' },
      { type: 'list', items: [
        'Buying fake mentions or reviews: banned by the FTC rule on fake reviews, and against Reddit\'s rules.',
        'Relying on llms.txt: it is a community proposal, and OpenAI has not documented using it.',
        'Mass-produced pages stuffed with keywords.',
        'Expecting ads to buy organic recommendations; organic answers cannot be bought.',
      ]},

      { type: 'heading', text: 'How Long It Takes and How to Measure It' },
      { type: 'paragraph', text: "Live search results can change within weeks of new pages and mentions being indexed; trained knowledge changes only with new model versions. Measure referral traffic from chatgpt.com (ChatGPT adds utm_source=chatgpt.com to many links), branded search growth, your monthly prompt audit and \"how did you hear about us?\" answers." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop runs your prompt audit across ChatGPT, Perplexity and Gemini, shows which sources are cited, and drafts comparison pages, alternatives pages and helpful answers for communities in your voice. Every page and post waits for your approval before it is published." },

      { type: 'faq', items: [
        { q: 'How do I get my brand mentioned by ChatGPT?', a: 'Let OAI-SearchBot crawl your site, describe your product clearly, and get covered accurately on sources ChatGPT cites, such as review sites, forums and comparison articles.' },
        { q: 'How do I make AI recommend me?', a: 'Make consistent, specific facts about who you serve and how you compare easy to find, and focus on narrow questions you can answer best. Results are not guaranteed.' },
        { q: 'Does blocking GPTBot stop ChatGPT recommending me?', a: 'GPTBot is OpenAI\'s training crawler; appearing in ChatGPT search depends on OAI-SearchBot. Check OpenAI\'s bot documentation for current details.' },
        { q: 'Does llms.txt help with ChatGPT?', a: 'There is no agreed standard and no OpenAI documentation that ChatGPT uses it.' },
        { q: 'Can I pay to be recommended by ChatGPT?', a: 'No. Organic answers cannot be bought; any advertising is separate from organic recommendations.' },
        { q: 'How do I know if ChatGPT sends me traffic?', a: 'Look for chatgpt.com referrals and utm_source=chatgpt.com in your analytics, and ask new signups how they found you.' },
      ]},
      { type: 'cta', text: 'Loraloop audits how AI assistants describe your product and drafts the pages to fix it, and nothing is published until you approve it.' },
    ],
    relatedSlugs: ['how-to-get-brand-mentioned-chatgpt-perplexity-gemini', 'optimize-for-chatgpt-search-2026', 'how-to-measure-geo-ai-citations-referral-traffic', 'what-is-ai-seo'],
  },

  // "meta ad account restricted"
  {
    id: 193,
    slug: 'meta-ad-account-restricted-what-to-do',
    title: 'Meta Ad Account Restricted or Disabled? What to Do and How to Protect the Next One',
    seoTitle: 'Meta Ad Account Restricted? How to Fix It and Prevent It',
    description: 'What to do when your Meta ad account is restricted or disabled: check whether you were hacked, find the reason in Account Quality, request one well-documented review, avoid new accounts and unban scams, keep sales going meanwhile and protect your accounts before busy seasons.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 193,
    tableOfContents: [
      'The Short Answer',
      'Which Asset Is Actually Restricted',
      'First 15 Minutes: Check Whether You Were Hacked',
      'Find the Reason in Account Quality',
      'Common Causes',
      'How to Request a Review That Gets Read',
      'Identity Confirmation',
      'When Meta Does Not Remove the Restriction',
      'Getting a Human at Meta',
      'What Not to Do',
      'Keep the Business Running Meanwhile',
      'Protect the Next Account',
      'A Pre-Launch Checklist for Busy Seasons',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "A restricted Meta ad account during December can stop most of a brand's sales overnight. The fix depends on which asset is restricted and why, and the wrong reaction (opening new accounts or paying an \"unban\" service) can make it worse. Here is what to do, in order, using Meta's own help pages." },
      { type: 'callout', text: "Quick answer: Open Account Quality from Meta Business Support Home to see which asset is restricted and why. If you might have been hacked, secure the account first. Then request one clear, specific review with evidence. Do not open new accounts to get around the restriction: Meta treats that as circumventing its systems. Keep selling through email and other channels meanwhile." },

      { type: 'heading', text: 'Which Asset Is Actually Restricted' },
      { type: 'table', headers: ['Asset', 'What it means'], rows: [
        ['Ad account', 'That account cannot run ads'],
        ['Your personal profile (advertising access)', 'You cannot run ads on any account, even if the ad account is fine'],
        ['Business portfolio (Business Manager)', 'Every ad account and asset in it may be affected'],
        ['Facebook Page or Instagram account', 'Ads using that Page or account cannot run'],
      ]},
      { type: 'paragraph', text: "A restricted admin can block a business's ads even when the ad account itself has no problem, so check each linked asset." },

      { type: 'heading', text: 'First 15 Minutes: Check Whether You Were Hacked' },
      { type: 'list', items: [
        'Look for ads, admins or payment methods you did not add.',
        'Change passwords and turn on two-factor authentication.',
        'Remove unknown people and partners from the business portfolio.',
        'If you cannot get in, use Meta\'s hacked-account recovery at facebook.com/hacked.',
      ]},

      { type: 'heading', text: 'Find the Reason in Account Quality' },
      { type: 'paragraph', text: "Meta's help page \"Troubleshoot a disabled or restricted account\" directs you to Meta Business Support Home, where Account Overview (Account Quality) lists each restricted asset, the reason and whether you can request a review. Read the reason carefully before doing anything else." },

      { type: 'heading', text: 'Common Causes' },
      { type: 'list', items: [
        'Ads that break Meta\'s Advertising Standards, especially repeated rejections.',
        'Unusual activity, often a sign of a hacked account.',
        'Unpaid balances or failed payments.',
        'Identity not confirmed when Meta asked.',
        'Links to other restricted accounts, Pages or people.',
        'Restricted categories such as health, finance or weight loss, and Special Ad Categories with extra rules.',
      ]},

      { type: 'heading', text: 'How to Request a Review That Gets Read' },
      { type: 'numbered-list', items: [
        'Use "Request review" in Account Quality, as described in Meta\'s "Request a review for a restricted advertising account" page.',
        'Request it once. Reviews are usually allowed once per decision.',
        'Be specific: what your business sells, why you believe the decision is wrong, and what you changed.',
        'Fix the cause first: remove or edit rejected ads, pay outstanding balances, secure the account.',
        'Keep records of your request and any reference numbers.',
      ]},

      { type: 'heading', text: 'Identity Confirmation' },
      { type: 'paragraph', text: "Meta may ask you to confirm your identity with an ID document or a video selfie. Use your real details, matching the name on the profile, and complete it from a device and location you normally use." },

      { type: 'heading', text: 'When Meta Does Not Remove the Restriction' },
      { type: 'paragraph', text: "If you see \"We did not remove restrictions from your ad account\", the decision may be final, and further appeals usually are not possible. At that point, check that no other assets in your business portfolio are affected, read the policy you were restricted under so it does not happen again on other accounts you legitimately run, and put your effort into other channels." },

      { type: 'heading', text: 'Getting a Human at Meta' },
      { type: 'list', items: [
        'Meta Verified for Business is a paid subscription that includes access to support in many countries; it does not guarantee reinstatement.',
        'Agencies and larger advertisers may have a Meta partner or account representative.',
        'Meta does not charge to review a restriction.',
      ]},

      { type: 'heading', text: 'What Not to Do' },
      { type: 'list', items: [
        'Open new ad accounts or business portfolios to get around the restriction. Meta\'s Advertising Standards treat this as circumvention, and it can get more assets restricted.',
        'Rent or borrow someone else\'s account.',
        'Pay "unban" services or fake "Meta support" pages; they are a common scam.',
        'Submit many review requests at once.',
      ]},

      { type: 'heading', text: 'Keep the Business Running Meanwhile' },
      { type: 'paragraph', text: "Nevo David warns that platforms can reduce features or block accounts without explanation, so owned channels matter (Nevo David on X, 12 Mar 2026). During a restriction, lean on email and SMS to customers who agreed to marketing, Google Ads and other platforms, organic social posts and partners. A business with only one ad channel is always one restriction away from a bad month." },

      { type: 'heading', text: 'Protect the Next Account' },
      { type: 'list', items: [
        'Require two-factor authentication for everyone in the business portfolio (Security Center).',
        'Keep at least two trusted admins.',
        'Complete Business verification.',
        'Give agencies access through partner access, never shared logins.',
        'Keep a backup payment method and pay balances on time.',
        'Raise spend gradually on new accounts instead of jumping overnight.',
        'Check ads against the Advertising Standards before launch.',
      ]},

      { type: 'heading', text: 'A Pre-Launch Checklist for Busy Seasons' },
      { type: 'table', headers: ['Check', 'Done when'], rows: [
        ['Two-factor authentication for all users', 'Required in Security Center'],
        ['Two admins', 'Both can access Business Settings'],
        ['Backup payment method', 'Added and verified'],
        ['Unknown users and partners removed', 'Access list reviewed'],
        ['Ads reviewed for restricted claims', 'Health, finance and before-and-after claims checked'],
        ['Spend plan', 'Increases spread over days, not one jump'],
        ['Owned channels ready', 'Email and SMS flows live for consenting customers'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop checks ad copy and creative against Meta's Advertising Standards before launch, flags risky claims, watches delivery and rejected ads daily, and keeps your email and organic channels running so one platform never holds all your sales. Every ad and change waits for your approval." },

      { type: 'faq', items: [
        { q: 'How do I unrestrict my Facebook ad account?', a: 'Open Account Quality from Meta Business Support Home, read the reason, fix the cause and use "Request review" if it is offered. Only Meta can lift a restriction.' },
        { q: 'Why is my Meta account restricted?', a: 'Common reasons are Advertising Standards violations, unusual activity such as a hack, payment problems, failed identity confirmation or links to other restricted assets.' },
        { q: 'Why did my ad account get restricted?', a: 'Often repeated ad rejections, an unpaid balance, suspected compromise or a restricted admin profile. Check every linked asset.' },
        { q: 'How do I remove restrictions on Meta?', a: 'Through a review request in Account Quality. Third parties cannot remove restrictions, and paid unban offers are a common scam.' },
        { q: 'Can I just open a new ad account?', a: 'Not to get around a restriction. Meta treats that as circumvention and may restrict more of your assets.' },
        { q: 'How long does a Meta review take?', a: 'It varies. Check Account Quality for updates and avoid sending repeat requests.' },
      ]},
      { type: 'cta', text: 'Loraloop checks your ads against Meta\'s rules before launch, and nothing goes live until you approve it.' },
    ],
    relatedSlugs: ['meta-ads-daily-monitoring-checklist', 'meta-ads-after-cyber-monday-december-plan', 'how-to-use-ai-to-manage-meta-ads-step-by-step', 'facebook-ads-for-small-business'],
  },
];
