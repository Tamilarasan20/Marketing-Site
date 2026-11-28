import type { BlogPost } from './blogData';

// Long-form guides batch F (rewritten November 28, 2026): ids 187, 188, 189, 190, 191, 194.
// Research per post: Google results, People Also Ask and related searches (Treg -> cloro Google SERP,
// US, and Google UK for id 194, Nov 28 2026), Nevo David's playbook (Nevo's Brain MCP; it returns condensed
// summaries, so his points are paraphrased and attributed with platform and date) and official sources for
// legal and platform facts (FTC, CMA, ASA/CAP, UK legislation, Google). Tips from Nevo that conflict with
// platform rules (paid backlinks, undisclosed paid engagement, always-on checkout coupons) were left out.
// No invented statistics or budget benchmarks; examples are labelled as illustrative.
// This is general information, not legal advice.
const publishDate = 'November 28, 2026';

export const guideBlogPostsF: BlogPost[] = [
  // "year end client report"
  {
    id: 187,
    slug: 'year-end-client-report-template-agencies',
    title: 'Year-End Client Report: A Template Agencies Can Send in December',
    seoTitle: 'Year-End Client Report Template for Marketing Agencies',
    description: 'A section-by-section year-end client report template for marketing agencies: when to send it, which data to save before it disappears, goals vs results, channel results with year-over-year caveats, what did not work, the 2027 plan as decisions, permission rules and turning it into a renewal.',
    category: 'Business',
    date: publishDate,
    imageIndex: 187,
    tableOfContents: [
      'The Short Answer',
      'What a Year-End Client Report Is',
      'When to Send It',
      'Save the Data Before It Disappears',
      'The Template, Section by Section',
      'Section 1: One-Page Summary',
      'Section 2: Goals Agreed vs Results',
      'Section 3: Channel Results',
      'Section 4: What Did Not Work',
      'Section 5: The 2027 Plan and Decisions',
      'Data, Privacy and Permission',
      'How to Present It',
      'Turn the Report Into a Renewal and a Case Study',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Search for \"year-end client report\" and you mostly find corporate annual reports and LLC filing rules. This guide is for marketing agencies: the December report that recaps the year for each client, shows what you delivered and asks for the decisions that set up 2027." },
      { type: 'callout', text: "Quick answer: A year-end client report shows the goals you agreed at the start of the year, results against each one with the data source and date range named, spend against budget, what did not work and what you changed, and a short 2027 plan written as decisions the client approves. Keep it to a one-page summary plus six to eight pages, or one dashboard, and send it before the client's holiday shutdown." },

      { type: 'heading', text: 'What a Year-End Client Report Is' },
      { type: 'paragraph', text: "It is a 12-month marketing recap for one client, not a financial annual report or a state filing. Its job is to show progress against agreed goals, explain the numbers honestly, and turn the year's lessons into next year's plan and budget." },

      { type: 'heading', text: 'When to Send It' },
      { type: 'table', headers: ['Date', 'Step'], rows: [
        ['Early December', 'Pull and save data; confirm goals from the contract or kickoff'],
        ['Mid December', 'Send the report and book a 30-minute review'],
        ['Before the client\'s shutdown', 'Hold the review; agree the 2027 decisions'],
        ['January', 'Update with December and holiday results; confirm the Q1 plan'],
      ]},
      { type: 'paragraph', text: "Many clients set budgets in December, so a report that arrives in January can miss the decision." },

      { type: 'heading', text: 'Save the Data Before It Disappears' },
      { type: 'list', items: [
        'Google Analytics 4: standard properties keep event-level data for Explorations for two or 14 months (default two). Set it to 14 months now, or next year\'s comparison will be empty. Standard reports are not affected.',
        'Google Search Console keeps 16 months of performance data; export the full year.',
        'Ad platforms: export campaign results by month, and note the attribution setting used, since Meta has changed the windows it reports.',
        'Save examples of top ads, emails and pages as screenshots.',
      ]},

      { type: 'heading', text: 'The Template, Section by Section' },
      { type: 'table', headers: ['Section', 'Length', 'For'], rows: [
        ['1. One-page summary', '1 page', 'The person who signs the invoice'],
        ['2. Goals vs results', '1 page', 'Everyone'],
        ['3. Channel results', '2-3 pages', 'The marketing lead'],
        ['4. What did not work', 'Half a page', 'Trust'],
        ['5. 2027 plan and decisions', '1-2 pages', 'Approval'],
      ]},

      { type: 'heading', text: 'Section 1: One-Page Summary' },
      { type: 'list', items: [
        'One sentence on the year: the main result against the main goal.',
        'Three numbers that matter to the business, such as revenue, leads or customers, cost per result.',
        'The best piece of work, with one example.',
        'The decisions you need from them for 2027.',
      ]},

      { type: 'heading', text: 'Section 2: Goals Agreed vs Results' },
      { type: 'table', headers: ['Goal (agreed in January)', 'Result', 'Source and date range', 'Status'], rows: [
        ['Example: 300 qualified leads', 'Example: 342', 'CRM, Jan 1-Nov 30', 'Met'],
        ['Example: cost per lead under $60', 'Example: $71', 'Ad platforms + CRM', 'Missed'],
        ['Example: launch email program', 'Live in April', 'Email platform', 'Met'],
      ]},
      { type: 'paragraph', text: "Examples are illustrative. Name the source and date range for every number, so nobody argues about where it came from." },

      { type: 'heading', text: 'Section 3: Channel Results' },
      { type: 'list', items: [
        'Paid: spend, results and cost per result by month, with the attribution setting noted.',
        'Organic search: clicks, top pages and the queries that grew.',
        'Email: list growth, revenue or leads from email, unsubscribe rate.',
        'Social: reach and the posts that drove visits or leads, not just likes.',
        'Year-over-year caveats: tracking changes, attribution changes, new channels.',
      ]},
      { type: 'paragraph', text: "Report the customers who matter. Nevo David recommends measuring churn for your ideal-customer group rather than overall, because overall figures move with growth speed and marketing mix (Nevo David on X, Oct 2026). The same applies to client reports: segment results by the customer type the client cares about." },

      { type: 'heading', text: 'Section 4: What Did Not Work' },
      { type: 'paragraph', text: "List two or three things that underperformed, why you think so, and what you changed. Clients trust reports that admit misses, and it protects you from surprises at renewal." },

      { type: 'heading', text: 'Section 5: The 2027 Plan and Decisions' },
      { type: 'numbered-list', items: [
        'Goals for 2027, each with one metric and a source.',
        'The plan by quarter, tied to the client\'s calendar.',
        'Budget by channel, with what changes from this year and why.',
        'Decisions needed: approve budget, approve new channel, approve a test.',
        'What you need from them: access, approvals, product information.',
      ]},

      { type: 'heading', text: 'Data, Privacy and Permission' },
      { type: 'list', items: [
        'Keep customer-level personal data (names, emails) out of the report deck.',
        'Get written permission before using client results, logos or quotes in a public case study, and check your contract.',
        'Public case studies must reflect real results; under the FTC Endorsement Guides, say what clients can generally expect if results are not typical.',
        'Under UK and EU GDPR, an agency usually processes data for the client; follow the contract terms.',
      ]},

      { type: 'heading', text: 'How to Present It' },
      { type: 'table', headers: ['Format', 'Best for'], rows: [
        ['PDF or slides plus a 30-minute call', 'Clients who need to share it internally'],
        ['Live dashboard plus a one-page summary', 'Clients who check results often'],
        ['Short video walkthrough', 'Busy clients across time zones'],
      ]},

      { type: 'heading', text: 'Turn the Report Into a Renewal and a Case Study' },
      { type: 'list', items: [
        'End the review by agreeing the 2027 decisions and the start date.',
        'Propose one new service tied to a gap in the report.',
        'Ask permission to turn the best result into a case study.',
        'Ask for a referral if the client is happy.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop pulls each client's ad, analytics, search and email data into a draft year-end report using this structure, notes attribution settings and date ranges, and drafts the summary and 2027 plan. Each client's data stays in its own workspace, and every report waits for your team's review and approval before the client sees it." },

      { type: 'faq', items: [
        { q: 'What should a year-end report include?', a: 'Goals agreed at the start of the year, results against each with source and date range, spend vs budget, what did not work and what changed, and a next-year plan for approval.' },
        { q: 'What does a year-end report look like?', a: 'There is no agreed format. Agency versions usually have a one-page summary, a goals-vs-results table, channel sections and a next-year plan, as a PDF, slides or a dashboard.' },
        { q: 'What is an example of an annual report?', a: 'For a public company, the yearly report to shareholders. For an agency client, a 12-month marketing recap with results and next year\'s plan.' },
        { q: 'Does every LLC need to file an annual report?', a: 'That is a separate state filing, and requirements differ by US state; it is unrelated to a marketing report.' },
        { q: 'How long should a client report be?', a: 'Short enough to read: a one-page summary plus six to eight pages is enough for most clients.' },
        { q: 'When should I send a year-end report?', a: 'Mid-December, before the client sets budgets and closes for the holidays.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts every client\'s year-end report from connected data, and nothing is sent until your team approves it.' },
    ],
    relatedSlugs: ['bfcm-post-mortem-template-agencies', 'meta-ads-client-reporting-agency-template', 'marketing-report-template', 'how-to-get-clients-for-marketing-agency'],
  },

  // "q1 marketing plan ecommerce"
  {
    id: 188,
    slug: 'q1-marketing-plan-dtc-brands-after-holidays',
    title: 'Q1 Marketing Plan for DTC Brands: What to Do After the Holidays',
    seoTitle: 'Q1 Marketing Plan for DTC Brands: January to March 2027',
    description: 'A week-by-week Q1 2027 marketing plan for DTC and Shopify brands: the days between Christmas and New Year, the January audit, second orders from holiday buyers, returns season, list clean-up, ad resets, Valentine\'s Day, spring launches, a fill-in template and a compliance checklist.',
    category: 'Business',
    date: publishDate,
    imageIndex: 188,
    tableOfContents: [
      'The Short Answer',
      'Why Q1 Is a Different Job',
      'Late December: Between Christmas and New Year',
      'Week 1 of January: The Post-Holiday Audit',
      'Turn Holiday Buyers Into Second-Time Buyers',
      'Handle Returns Season Without Losing the Customer',
      'Clean Your Email and SMS List',
      'Paid Ads in January',
      'February: Offers, Bundles and Valentine\'s Day',
      'March: Spring Launches and Mother\'s Day',
      'Key Q1 2027 Dates',
      'A Q1 Plan Template',
      'Compliance Checklist for Q1',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Q4 is about volume. Q1 is about keeping what you bought: turning holiday customers into repeat customers, handling returns well, cleaning lists and accounts, and testing what to scale for spring. This plan runs from December 26, 2026 to March 31, 2027." },
      { type: 'callout', text: "Quick answer: A DTC Q1 plan turns holiday buyers into second-time buyers, handles returns and cleans up email lists and ad accounts in January, tests offers, bundles and creative in February around Valentine's Day, and builds toward spring launches and Mother's Day (May 9, 2027 in the US) in March, with one owner and one metric for each month." },

      { type: 'heading', text: 'Why Q1 Is a Different Job' },
      { type: 'list', items: [
        'Many customers are new and bought on a discount or as a gift.',
        'Returns and exchanges peak in January.',
        'Ad competition usually eases after the holidays, which makes it a good time to test.',
        'Shoppers respond to fresh-start, routine and value messages more than sales.',
      ]},
      { type: 'paragraph', text: "Nevo David argues that moving focus from acquisition to retention can grow a business faster without changing the marketing (Nevo David on X, 28 Nov 2025). Q1 is the natural time to do it." },

      { type: 'heading', text: 'Late December: Between Christmas and New Year' },
      { type: 'list', items: [
        'Gift-card ads and emails, with clear terms.',
        'A "treat yourself" message to people who bought gifts for others.',
        'Exchange-first messaging for gift returns.',
        'A planned sale only if it is in your calendar, with honest end dates.',
      ]},

      { type: 'heading', text: 'Week 1 of January: The Post-Holiday Audit' },
      { type: 'table', headers: ['Check', 'Question'], rows: [
        ['Sales and margin', 'What did Q4 really earn after discounts, shipping and returns?'],
        ['Customer acquisition cost', 'What did a new customer cost by channel?'],
        ['New vs returning', 'How many holiday buyers were new?'],
        ['List growth', 'How many email and SMS subscribers did you add, with consent?'],
        ['Stock', 'What is overstocked or running out?'],
      ]},

      { type: 'heading', text: 'Turn Holiday Buyers Into Second-Time Buyers' },
      { type: 'numbered-list', items: [
        'Send a post-purchase series that teaches people to use the product well.',
        'Time a refill or replenishment reminder to when the product runs out.',
        'Offer a matching product or bundle instead of a discount.',
        'Give loyalty points or credit for a second order.',
        'Measure 30-, 60- and 90-day repeat rates for the holiday cohort against normal months.',
      ]},
      { type: 'paragraph', text: "Our post-Black Friday retention plan has the full 30-day sequence." },

      { type: 'heading', text: 'Handle Returns Season Without Losing the Customer' },
      { type: 'list', items: [
        'Offer exchanges and store credit first, with refunds still easy.',
        'Make the returns page clear; your posted policy is what you must honour.',
        'Send a helpful follow-up after a return: the right size, a better match.',
        'Record return reasons by product and fix pages that cause them.',
      ]},

      { type: 'heading', text: 'Clean Your Email and SMS List' },
      { type: 'list', items: [
        'Remove or re-engage subscribers who have not opened in months.',
        'Gmail and Yahoo require bulk senders to authenticate (SPF, DKIM, DMARC), offer one-click unsubscribe and keep spam complaints low.',
        'Check every SMS subscriber has given marketing consent.',
        'Send a short preference email: what they want to hear about and how often.',
      ]},
      { type: 'paragraph', text: "Nevo calls a newsletter an owned channel; an existing list usually converts better than other channels when you sell (source: \"Getting Around 10 Newsletter Subscribers a Day with Lead Magnets\", YouTube)." },

      { type: 'heading', text: 'Paid Ads in January' },
      { type: 'list', items: [
        'Reset budgets from real Q4 margin, not Q4 revenue.',
        'Replace holiday creative in the first week.',
        'Check tracking: pixel, conversions API, consent and attribution settings.',
        'Use Q4 buyers for cross-sell and exclude them from prospecting.',
        'Test new angles while competition is lighter.',
      ]},

      { type: 'heading', text: 'February: Offers, Bundles and Valentine\'s Day' },
      { type: 'paragraph', text: "Valentine's Day falls on Sunday, February 14, 2027. Plan gift guides, bundles and \"order by\" dates from late January, and include self-gifting and friend angles as well as couples. Test offers that add value, such as bundles, gift wrap and gift-with-purchase, rather than deep discounts. Our Valentine's Day marketing guide has ideas by business type." },

      { type: 'heading', text: 'March: Spring Launches and Mother\'s Day' },
      { type: 'list', items: [
        'Launch spring products or refreshes, with a waitlist for subscribers.',
        'Plan Easter (March 28, 2027) promotions if they fit your category.',
        'Build Mother\'s Day creative and gift guides for the US (May 9, 2027). In the UK, Mothering Sunday is March 7, 2027.',
        'Review Q1 results and set the Q2 budget.',
      ]},

      { type: 'heading', text: 'Key Q1 2027 Dates' },
      { type: 'table', headers: ['Date', 'Moment'], rows: [
        ['Jan 1', 'New Year\'s Day; fresh-start messaging'],
        ['Jan 18', 'Martin Luther King Jr. Day (US)'],
        ['Feb 14', 'Valentine\'s Day (Sunday)'],
        ['Feb 15', 'Presidents\' Day (US)'],
        ['Mar 7', 'Mothering Sunday (UK)'],
        ['Mar 17', 'St. Patrick\'s Day'],
        ['Mar 28', 'Easter Sunday'],
      ]},

      { type: 'heading', text: 'A Q1 Plan Template' },
      { type: 'table', headers: ['Month', 'Goal', 'Metric', 'Owner', 'Budget', 'Approved'], rows: [
        ['January', 'Second orders from holiday buyers', '60-day repeat rate', 'Email lead', '$ / £', 'Yes/No'],
        ['February', 'Profitable Valentine\'s campaign', 'Margin per order', 'Growth lead', '$ / £', 'Yes/No'],
        ['March', 'Spring launch', 'Launch revenue', 'Founder', '$ / £', 'Yes/No'],
      ]},

      { type: 'heading', text: 'Compliance Checklist for Q1' },
      { type: 'list', items: [
        'Review requests go to all customers and do not reward positive reviews only (FTC rule on consumer reviews and testimonials).',
        'Marketing texts have prior express written consent (TCPA); opt-outs are honoured promptly.',
        'Commercial emails meet CAN-SPAM: honest subject lines, postal address, working opt-out.',
        '"Was" prices are genuine former prices (FTC Guides Against Deceptive Pricing).',
        'Shipping promises for backorders have a reasonable basis (FTC Mail Order Rule).',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects to Shopify, Klaviyo and your ad accounts, runs the January audit, drafts the second-order flows, Valentine's and spring campaigns and fresh ad creative, and reports results against your Q1 template each week. Every email, ad and budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'What should a DTC brand do in January?', a: 'Audit Q4 results, turn holiday buyers into repeat customers, handle returns well, clean the email list and refresh ad creative.' },
        { q: 'What is the 80/20 rule in ecommerce?', a: 'The Pareto principle: a minority of products or customers often drive most revenue. The split varies; check your own data.' },
        { q: 'What is the 3-3-3 rule for marketing?', a: 'There is no agreed definition; different writers use it for different ideas.' },
        { q: 'What are the 5 Cs of e-commerce?', a: 'There is no agreed list; versions often borrow the marketing 5 Cs: company, customers, competitors, collaborators and context.' },
        { q: 'Is ecommerce still worth it in 2026?', a: 'It depends on your margins, acquisition costs and repeat purchase rate rather than the market as a whole.' },
        { q: 'Are ads cheaper in January?', a: 'Competition usually eases after the holidays, but costs vary by account. Check your own cost per result by week.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your Q1 campaigns and flows from your store data, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['after-black-friday-retention-plan-shopify', 'valentines-day-marketing-ideas', 'email-marketing-strategy', 'meta-ads-after-cyber-monday-december-plan'],
  },

  // "saas annual plan discount"
  {
    id: 189,
    slug: 'saas-annual-plan-campaign-december',
    title: 'How SaaS Teams Sell Annual Plans in December',
    seoTitle: 'Annual Plan Campaigns for SaaS: A December Playbook',
    description: 'A December playbook for SaaS annual plan campaigns: why December works, who to target, how to choose and price the offer so renewal does not shock customers, a week-by-week calendar, sample emails, in-app prompts, invoices for budget deadlines, renewal rules and how to measure cash vs MRR.',
    category: 'Business',
    date: publishDate,
    imageIndex: 189,
    tableOfContents: [
      'The Short Answer',
      'Why December Works for Annual Plans',
      'Who to Target',
      'Pick the Offer',
      'Price It So Renewal Does Not Shock Customers',
      'The Campaign Calendar',
      'Emails That Sell Annual Plans',
      'In-App Prompts and the Billing Page',
      'Invoices for Teams With a Budget Deadline',
      'Rules on Renewal Notices and Honest Pricing',
      'Measure Cash, MRR and Renewal',
      'Mistakes to Avoid',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most articles on SaaS annual discounts debate the right percentage. This one is a campaign plan: who to target in December, what to offer, the emails and in-app prompts to send, the renewal rules to follow, and what to watch when those plans renew next December." },
      { type: 'callout', text: "Quick answer: Sell annual plans in December by offering monthly customers who already use the product a clear, honest saving for paying yearly, timing emails and in-app prompts around budget deadlines, offering invoices for teams that need to spend this year's budget, and stating the renewal price, renewal date and cancellation terms up front." },

      { type: 'heading', text: 'Why December Works for Annual Plans' },
      { type: 'list', items: [
        'Teams with leftover budget want to spend it before the year ends.',
        'Teams planning next year want costs fixed.',
        'You collect cash before Q1, which funds acquisition.',
        'Annual customers have a year to get value before deciding again.',
      ]},
      { type: 'paragraph', text: "Nevo David recommends recovering acquisition costs quickly by selling higher tiers, yearly plans or lifetime deals, because optimizing for lifetime value needs cash (Nevo David on X, 5 Dec 2025)." },

      { type: 'heading', text: 'Who to Target' },
      { type: 'table', headers: ['Segment', 'Why'], rows: [
        ['Monthly customers active for three months or more', 'Proven value; low risk'],
        ['Teams with several users', 'Larger savings; often have budgets'],
        ['Customers who hit plan limits', 'Combine annual with an upgrade'],
        ['Trial users near conversion', 'Offer annual alongside monthly'],
      ]},
      { type: 'paragraph', text: "Leave out inactive customers: an annual plan they do not use becomes a refund request or a lost renewal." },

      { type: 'heading', text: 'Pick the Offer' },
      { type: 'table', headers: ['Offer', 'Example', 'Note'], rows: [
        ['Months free', 'Pay for 10 months, get 12', 'Easy to understand'],
        ['Percentage off', '20% off the annual price', 'Clear if the monthly price is real'],
        ['Added value', 'Annual plan includes onboarding or extra seats', 'Protects price'],
        ['Price lock', 'Keep this year\'s price for the next year', 'Useful before a planned price rise'],
      ]},

      { type: 'heading', text: 'Price It So Renewal Does Not Shock Customers' },
      { type: 'paragraph', text: "If the December deal is far below your normal annual price, renewal next December becomes a price rise. Decide now what customers will pay at renewal, tell them at purchase, and remind them before it renews. A permanent saving for paying yearly is easier to keep than a one-off deal. Keep the regular monthly price genuine; a \"full\" price nobody ever pays is misleading under the FTC Guides Against Deceptive Pricing." },

      { type: 'heading', text: 'The Campaign Calendar' },
      { type: 'table', headers: ['Week', 'Action'], rows: [
        ['Dec 1-6', 'Announce the annual offer by email and in-app to target segments'],
        ['Dec 7-13', 'Personal emails or calls to teams with several users; invoice option'],
        ['Dec 14-20', 'Reminder with a use-case story; budget-deadline message'],
        ['Dec 21-31', 'Final reminder with the real end date; then close the offer'],
      ]},

      { type: 'heading', text: 'Emails That Sell Annual Plans' },
      { type: 'list', items: [
        'Subject: "Lock in [product] for 2027 and save [amount]"',
        'Open with what they did in the product this year.',
        'Show the saving in money, not only a percentage.',
        'State the renewal price and date, and how to cancel.',
        'One button to switch, with an invoice option for teams.',
      ]},

      { type: 'heading', text: 'In-App Prompts and the Billing Page' },
      { type: 'list', items: [
        'A small banner on the billing page showing the annual saving.',
        'A prompt after a user reaches a meaningful result.',
        'Monthly and annual prices side by side, with the saving shown.',
        'No pop-ups that block work.',
      ]},

      { type: 'heading', text: 'Invoices for Teams With a Budget Deadline' },
      { type: 'paragraph', text: "Many teams cannot pay by card or need an invoice to use this year's budget. Offer invoicing for annual plans above a set amount, accept purchase orders, and make the quote easy to forward to finance." },

      { type: 'heading', text: 'Rules on Renewal Notices and Honest Pricing' },
      { type: 'list', items: [
        'US: ROSCA requires clear disclosure of terms before taking billing details, express informed consent and a simple way to stop recurring charges.',
        'The FTC\'s amended negative-option ("click-to-cancel") rule was vacated in July 2025; check its current status, but ROSCA still applies.',
        'California\'s automatic renewal law, updated from July 2025, requires affirmative consent, online cancellation for online signups, renewal reminders for annual plans and notice of price changes. Other states have their own rules.',
        'UK and EU consumer rules add reminders and cooling-off rights for consumers; business-to-business sales are usually treated differently.',
      ]},
      { type: 'paragraph', text: "This is general information, not legal advice." },

      { type: 'heading', text: 'Measure Cash, MRR and Renewal' },
      { type: 'table', headers: ['Metric', 'Why'], rows: [
        ['Cash collected', 'The main short-term goal'],
        ['Customers switched to annual', 'Campaign reach'],
        ['MRR or ARR', 'Annual prepayments are recognized over the year, not all at once'],
        ['Usage of annual customers', 'Early warning for renewal'],
        ['Renewal rate next December', 'The real test of the campaign'],
      ]},

      { type: 'heading', text: 'Mistakes to Avoid' },
      { type: 'list', items: [
        'Fake deadlines and "extended by popular demand" extensions, which Nevo calls overused (Nevo David on X, 4 Dec 2025).',
        'Hiding the renewal price.',
        'Threatening to delete data to force renewal, which Nevo calls a dark pattern (Nevo David on X, 5 Dec 2025).',
        'Selling annual plans to customers who are not using the product.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop builds the target segments from your billing and usage data, drafts the December emails, in-app copy and renewal reminders, and reports cash collected and switches each week. Every email and message waits for your approval before it is sent." },

      { type: 'faq', items: [
        { q: 'How much discount should a SaaS annual plan have?', a: 'There is no reliable benchmark. Many companies offer around two months free; choose a saving you can keep at renewal.' },
        { q: 'What is the 3-3-2-2-2 rule of SaaS?', a: 'A growth rule of thumb (T2D3): triple annual recurring revenue for two years, then double it for three. It describes venture-scale targets.' },
        { q: 'What is the rule of 40 in SaaS?', a: 'Revenue growth rate plus profit margin should be at least 40%. Which margin to use varies.' },
        { q: 'What is a good renewal rate for a SaaS company?', a: 'There is no universal benchmark; it depends on segment, contract size and how you define renewal. Compare your own cohorts.' },
        { q: 'What is replacing SaaS?', a: 'There is no agreed answer. AI agents and usage-based pricing are changing how software is sold, but subscription software is still growing.' },
        { q: 'Should I offer a lifetime deal instead?', a: 'Lifetime deals bring cash but no recurring revenue. Annual plans keep the relationship and the renewal.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your annual plan campaign and renewal reminders, and nothing is sent until you approve it.' },
    ],
    relatedSlugs: ['saas-black-friday-trials-churn', 'saas-pricing-to-acquire-customers', 'free-trial-to-paid-conversion', 'how-to-get-first-customers-saas'],
  },

  // "marketing budget for small business"
  {
    id: 190,
    slug: 'marketing-budget-2027-small-teams',
    title: '2027 Marketing Budget for Small Teams: How to Split Ads, Email, SEO and Content',
    seoTitle: '2027 Marketing Budget for Small Business: How to Split It',
    description: 'How to set and split a 2027 marketing budget for a small team: why the percentage-of-revenue rules disagree, how to start from your own numbers, fixed costs first, how to divide money between proven channels, compounding channels and tests, example splits at three budget levels, a template and monthly review rules.',
    category: 'Business',
    date: publishDate,
    imageIndex: 190,
    tableOfContents: [
      'The Short Answer',
      'How Much Should a Small Team Spend?',
      'Start From Your Own Numbers',
      'Fixed Costs First',
      'Split the Rest: Proven, Compounding and Tests',
      'Paid Ads: When They Make Sense',
      'Email: The Cheapest Channel to Keep Funded',
      'SEO and Content: Budget for Months, Not Weeks',
      'Social and Creators',
      'Example Splits at Three Budget Levels',
      'A 2027 Budget Template',
      'When to Move Money Between Channels',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Search for a small business marketing budget and you will find rules that disagree: 2-5% of revenue, 5-20%, 7-8%. Most are poorly sourced, and the best-known surveys describe large companies. This guide gives you a method based on your own numbers, then shows how to split the money between ads, email, SEO and content." },
      { type: 'callout', text: "Quick answer: Set your total from your revenue goal and what a customer is worth, pay fixed costs (tools, people, freelancers) first, keep most of the rest on channels that already bring customers, give email and SEO or content a steady base because they compound, and hold a small test budget that you review every month. There is no single correct percentage." },

      { type: 'heading', text: 'How Much Should a Small Team Spend?' },
      { type: 'paragraph', text: "There is no reliable benchmark for small teams. Gartner's CMO Spend Survey reports marketing budgets as a share of revenue for large enterprises, and other figures are often repeated without a source. A business growing fast with healthy margins can spend a larger share than one protecting cash. Work out what you can afford from your own customer value and payback period." },

      { type: 'heading', text: 'Start From Your Own Numbers' },
      { type: 'numbered-list', items: [
        'Revenue goal for 2027 and how many new customers it needs.',
        'Gross margin: what is left from each sale after product and delivery costs.',
        'Customer value: margin from a typical customer over 12 months.',
        'Affordable acquisition cost: the most you can pay for a customer and still profit within your payback period.',
        'Budget = new customers needed x affordable acquisition cost, plus fixed costs.',
      ]},
      { type: 'paragraph', text: "Illustrative example: you need 400 new customers, each is worth $150 in margin over a year, and you want payback within six months, so you can pay about $75 per customer. That points to roughly $30,000 for acquisition over the year, plus tools and freelancers." },

      { type: 'heading', text: 'Fixed Costs First' },
      { type: 'list', items: [
        'Tools: email platform, website, design, analytics, scheduling.',
        'People: freelancers, an agency or part of a salary.',
        'Content production: photos, video, writing.',
        'Review subscriptions every quarter and cancel what you do not use.',
      ]},

      { type: 'heading', text: 'Split the Rest: Proven, Compounding and Tests' },
      { type: 'table', headers: ['Bucket', 'What goes in it', 'How to think about it'], rows: [
        ['Proven', 'Channels that already bring customers at a profit', 'The largest share'],
        ['Compounding', 'Email, SEO and content', 'Steady every month; pays off over time'],
        ['Tests', 'New channels, creators, new ad angles', 'Small, with a clear pass or fail rule'],
      ]},
      { type: 'paragraph', text: "This mirrors the 70/20/10 idea (most on what works, some on improving, a little on experiments), but the right split depends on what you have already proven." },

      { type: 'heading', text: 'Paid Ads: When They Make Sense' },
      { type: 'list', items: [
        'When you know what a customer is worth and your site converts.',
        'When your margin or price leaves room for acquisition costs.',
        'When you can fund ads steadily; Nevo David notes that a tiny balance forces pauses that can hurt delivery (Nevo David on X, 5 Dec 2025).',
        'For subscriptions, when churn is under control; Nevo warns that paid ads rarely pay back with high churn (Nevo David on X, 10 Dec 2025).',
      ]},
      { type: 'paragraph', text: "Google Ads has no required minimum spend, and Meta sets small minimum daily budgets that vary by currency, so the practical minimum is what gives you enough results to learn from." },

      { type: 'heading', text: 'Email: The Cheapest Channel to Keep Funded' },
      { type: 'paragraph', text: "Email costs little beyond the platform and the time to write it, and it sells to people who already know you. Keep it funded every month: a welcome series, a regular newsletter and automated flows. Keep the list clean so you meet Gmail and Yahoo's sender requirements." },

      { type: 'heading', text: 'SEO and Content: Budget for Months, Not Weeks' },
      { type: 'paragraph', text: "SEO and content take months to show results and then keep working. Nevo's rule of thumb: choose SEO when people already search for your category, and use social and creators when they do not; start with specific, lower-competition searches (source: \"Research vs. Browse: Choosing SEO or Push Distribution Based on Search Volume\", YouTube, June 2024). Budget for at least six to twelve months. Do not spend on paid links: buying links that pass ranking credit breaks Google's spam policies." },

      { type: 'heading', text: 'Social and Creators' },
      { type: 'list', items: [
        'Organic posting: mostly time, so budget for content production.',
        'Boosting posts that already perform organically.',
        'Paying small creators for content you can reuse in ads; paid posts need clear disclosure.',
      ]},

      { type: 'heading', text: 'Example Splits at Three Budget Levels' },
      { type: 'table', headers: ['Monthly budget', 'Ads', 'Email', 'SEO and content', 'Social and creators', 'Tests'], rows: [
        ['$1,000', '$300', '$100', '$350', '$150', '$100'],
        ['$5,000', '$2,250', '$400', '$1,250', '$600', '$500'],
        ['$15,000', '$7,500', '$1,000', '$3,500', '$1,500', '$1,500'],
      ]},
      { type: 'paragraph', text: "These are illustrations, not benchmarks. A local service business may put more into Google Ads and reviews; a SaaS startup may put more into content; a DTC brand may put more into Meta and creators." },

      { type: 'heading', text: 'A 2027 Budget Template' },
      { type: 'table', headers: ['Channel', 'Monthly plan', 'Monthly actual', 'Result', 'Cost per result', 'Keep, cut or grow'], rows: [
        ['Paid search', '', '', 'Leads or sales', '', ''],
        ['Paid social', '', '', 'Sales', '', ''],
        ['Email', '', '', 'Revenue', '', ''],
        ['SEO and content', '', '', 'Organic visits and leads', '', ''],
        ['Tools and people', '', '', 'n/a', '', ''],
      ]},

      { type: 'heading', text: 'When to Move Money Between Channels' },
      { type: 'list', items: [
        'Review monthly; change budgets only after a few weeks of data.',
        'Move money toward channels with the lowest cost per customer at your margin.',
        'Give tests a fixed budget and a clear goal; stop or promote them at the end.',
        'Do not judge SEO or content on one month.',
        'Track which pages and campaigns bring revenue, then fund the best ones, as Nevo describes doing for Postiz\'s blog pages and free tools.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop connects your ad accounts, analytics and email platform, tracks spend and results against your budget template, and proposes monthly moves between channels with the reasons. Every budget change waits for your approval." },

      { type: 'faq', items: [
        { q: 'How much should my marketing budget be?', a: 'There is no reliable single benchmark for small businesses. Work from your revenue goal, customer value and payback period.' },
        { q: 'What is the 70/20/10 rule for marketing budget?', a: 'A planning rule of thumb: about 70% on proven activity, 20% on improving or emerging ideas and 10% on experiments.' },
        { q: 'What is the 50/30/20 rule in marketing?', a: 'It is originally a personal budgeting rule (needs, wants, savings). Some marketers borrow the split, but there is no agreed marketing definition.' },
        { q: 'What is the 3-3-3 rule for marketing?', a: 'There is no agreed definition; different writers use it for different ideas.' },
        { q: 'How much does advertising cost a small business per month?', a: 'It depends on the channel, market and goal. Start with an amount that brings enough results to learn from, and scale what is profitable.' },
        { q: 'Is marketing a tax-deductible expense?', a: 'In the US, ordinary and necessary advertising costs are generally deductible business expenses. Check with an accountant.' },
      ]},
      { type: 'cta', text: 'Loraloop tracks your marketing spend against your plan and proposes changes, and nothing changes until you approve it.' },
    ],
    relatedSlugs: ['which-marketing-channels-small-business-prioritize', 'small-business-marketing-ideas', 'how-much-do-facebook-ads-cost', 'one-person-marketing-department-with-ai'],
  },

  // "geo services agency pricing"
  {
    id: 191,
    slug: 'how-agencies-sell-geo-services',
    title: 'How Agencies Can Sell GEO: Packages, Pricing Models and Reporting',
    seoTitle: 'How Agencies Sell GEO: Packages, Pricing Models, Reporting',
    description: 'How marketing agencies package, price and report GEO (generative engine optimization): what the service includes, three packages, pricing models compared, how to scope a proposal, what you must not promise, how to report AI visibility and how to sell it to existing SEO clients.',
    category: 'Business',
    date: publishDate,
    imageIndex: 191,
    tableOfContents: [
      'The Short Answer',
      'What GEO Means',
      'Why Clients Are Asking for It',
      'What a GEO Service Includes',
      'Package 1: GEO Audit or Pilot',
      'Package 2: Monthly GEO Program',
      'Package 3: GEO as an SEO Add-On',
      'Pricing Models Compared',
      'How to Scope a GEO Proposal',
      'What You Must Not Promise',
      'Reporting GEO Results',
      'A Monthly GEO Report Template',
      'Selling GEO to Existing SEO Clients',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Clients now ask agencies whether they show up in ChatGPT, Google's AI answers and Perplexity. Most pages about GEO are written for buyers or are agencies promoting themselves. This guide is for the agency selling it: what to include, how to package and price it, and how to report results honestly." },
      { type: 'callout', text: "Quick answer: Agencies sell GEO as an audit or pilot followed by a monthly program that improves how often a client is cited or recommended in AI answers. Price it as a fixed project, a retainer or an add-on to SEO, scope it by prompts, competitors and markets, and report tracked prompt visibility, citations and AI referral traffic. Never promise a guaranteed placement." },

      { type: 'heading', text: 'What GEO Means' },
      { type: 'paragraph', text: "GEO stands for generative engine optimization: improving how a brand appears in answers from AI tools such as ChatGPT, Google AI Overviews and AI Mode, Perplexity, Gemini and Claude. The term comes from a 2023 research paper. It is not the same as \"geo\" meaning geographic or local SEO, so define it in every proposal. Nevo David calls the same work AEO, answer engine optimization." },

      { type: 'heading', text: 'Why Clients Are Asking for It' },
      { type: 'list', items: [
        'Buyers ask AI tools for recommendations before they search.',
        'Smaller competitors sometimes appear in AI answers when the client does not; Nevo describes newer, smaller competitors outranking Postiz in AI Overviews and ChatGPT (Nevo David on X, 14 Mar 2026).',
        'AI answers can describe a business inaccurately.',
        'Leadership wants to know where the brand stands.',
      ]},

      { type: 'heading', text: 'What a GEO Service Includes' },
      { type: 'table', headers: ['Workstream', 'What you do'], rows: [
        ['Measurement', 'Track a fixed set of buyer prompts across AI tools; record mentions and cited sources'],
        ['Technical access', 'Check robots.txt and CDN settings for OAI-SearchBot, PerplexityBot and Google crawlers'],
        ['On-site content', 'Clear descriptions, comparison and alternatives pages, FAQs, structured data'],
        ['Off-site sources', 'Accurate coverage on review sites, directories, Reddit, GitHub, LinkedIn and industry publications'],
        ['Corrections', 'Fix outdated or wrong information at its source'],
      ]},

      { type: 'heading', text: 'Package 1: GEO Audit or Pilot' },
      { type: 'list', items: [
        'Fixed fee, two to four weeks.',
        'Baseline across 30 to 50 buyer prompts in the main AI tools.',
        'Competitor comparison and cited-source map.',
        'Technical access check.',
        'A prioritized 90-day plan.',
      ]},

      { type: 'heading', text: 'Package 2: Monthly GEO Program' },
      { type: 'list', items: [
        'Monthly retainer with a fixed scope of pages and outreach.',
        'Monthly prompt tracking and reporting.',
        'New or improved content each month.',
        'Off-site source work and corrections.',
        'Quarterly review of the prompt set.',
      ]},

      { type: 'heading', text: 'Package 3: GEO as an SEO Add-On' },
      { type: 'paragraph', text: "For existing SEO clients, add prompt tracking and AI-focused content to the SEO retainer. Google says there are no extra requirements to appear in AI Overviews or AI Mode beyond normal SEO best practice, so much of the work overlaps; price the add-on for the extra measurement and off-site work." },

      { type: 'heading', text: 'Pricing Models Compared' },
      { type: 'table', headers: ['Model', 'Best for', 'Risk'], rows: [
        ['Fixed project (audit, pilot)', 'New clients; proving value', 'Scope creep'],
        ['Monthly retainer', 'Ongoing programs', 'Results take months'],
        ['Per prompt set or market', 'Multi-market or multi-product clients', 'Hard to explain'],
        ['Performance-linked bonus', 'Clients who want shared risk', 'AI answers vary; define metrics carefully'],
      ]},
      { type: 'paragraph', text: "Price figures published by agencies are their own quotes, not market benchmarks. Price from your hours, team cost and the value to the client." },

      { type: 'heading', text: 'How to Scope a GEO Proposal' },
      { type: 'numbered-list', items: [
        'Agree the buyer prompts, in the customer\'s words, across use cases.',
        'Name the competitors to compare against.',
        'Choose the AI tools and markets to track.',
        'Set the content and outreach volume per month.',
        'Define the metrics and how often you report.',
      ]},
      { type: 'paragraph', text: "Narrow prompts are easier to win. Nevo's playbook says the narrower the niche and the more specific the query, the easier this work becomes (source: \"Distribution Playbook for Growing Postiz from $2M to $3M ARR\", X article)." },

      { type: 'heading', text: 'What You Must Not Promise' },
      { type: 'list', items: [
        'Guaranteed placement in ChatGPT or any AI tool; claims need evidence under the FTC Act.',
        'Undisclosed paid mentions or agency-written posts presented as customer opinions; these break Reddit\'s rules and the FTC Endorsement Guides.',
        'Paid links that pass ranking credit; they break Google\'s spam policies.',
        'llms.txt as a ranking factor; it is a proposal, and Google has said it does not use it.',
      ]},

      { type: 'heading', text: 'Reporting GEO Results' },
      { type: 'list', items: [
        'Prompt visibility: share of tracked prompts where the client is mentioned.',
        'Citations: how often the client\'s pages are cited as sources.',
        'Share of voice against named competitors.',
        'AI referral traffic, for example from chatgpt.com and perplexity.ai.',
        'Accuracy: whether answers describe the client correctly.',
      ]},
      { type: 'paragraph', text: "AI answers vary by user, location, time and model version, so tracking is a sample, not a ranking. Say so in every report." },

      { type: 'heading', text: 'A Monthly GEO Report Template' },
      { type: 'table', headers: ['Section', 'Content'], rows: [
        ['Summary', 'Visibility and citations vs last month; one highlight'],
        ['Prompt results', 'Mentioned, cited or absent for each tracked prompt'],
        ['Competitors', 'Share of voice vs named competitors'],
        ['Traffic', 'AI referral visits and conversions'],
        ['Work done', 'Pages published, sources earned, corrections made'],
        ['Next month', 'Planned work for client approval'],
      ]},

      { type: 'heading', text: 'Selling GEO to Existing SEO Clients' },
      { type: 'list', items: [
        'Run a free mini audit on ten prompts and show the gaps.',
        'Position GEO as an extension of SEO, not a replacement, so the retainer is not at risk.',
        'Start with a pilot, then fold it into the retainer.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop tracks prompt visibility and citations for each client across ChatGPT, Perplexity and Gemini, drafts comparison pages and source outreach, and produces the monthly GEO report in each client's workspace. Every page, post and report waits for approval by your team or the client." },

      { type: 'faq', items: [
        { q: 'What is the difference between GEO and SEO?', a: 'SEO targets rankings and clicks in search results; GEO targets being cited or recommended inside AI answers. They overlap heavily.' },
        { q: 'What is the cost of GEO?', a: 'There is no standard price. Agencies charge fixed fees for audits and monthly retainers for programs; published prices are their own quotes.' },
        { q: 'How much does SEO usually cost?', a: 'There is no reliable single benchmark; it is priced hourly, by project or by monthly retainer and varies by scope and market.' },
        { q: 'What is the best GEO agency?', a: 'There is no objective ranking. Judge agencies on their method, how transparently they measure and their references.' },
        { q: 'Can an agency guarantee ChatGPT placement?', a: 'No. AI answers change by user, time and model, and nobody controls them.' },
        { q: 'How long does GEO take to show results?', a: 'Live-search answers can change within weeks of new pages and mentions; trained model knowledge changes only with new versions.' },
      ]},
      { type: 'cta', text: 'Loraloop tracks AI visibility for every client and drafts the work, and nothing is published until it is approved.' },
    ],
    relatedSlugs: ['how-to-get-saas-recommended-by-chatgpt', 'aeo-vs-seo-vs-geo-2026', 'how-to-measure-geo-ai-citations-referral-traffic', 'what-is-ai-seo'],
  },

  // "boxing day marketing ideas" (Google UK)
  {
    id: 194,
    slug: 'boxing-day-january-sales-marketing-uk',
    title: 'Boxing Day and January Sales Marketing Ideas for UK Brands',
    seoTitle: 'Boxing Day and January Sales Marketing Ideas for UK Brands',
    description: 'Boxing Day 2026 and January sales marketing for UK brands: key dates including the bank holiday on Monday 28 December, warming up your list, launch timing, ideas beyond a flat discount, social and ads, running January in honest phases, gift returns, in-store and the UK rules on pricing, urgency, returns and email consent.',
    category: 'Business',
    date: publishDate,
    imageIndex: 194,
    tableOfContents: [
      'The Short Answer',
      'Key Dates for Boxing Day 2026 and the January Sales',
      'Before Christmas: Warm Up Your List',
      'Launch: Christmas Evening or Boxing Day',
      'Ideas Beyond a Flat Discount',
      'Social Posts and Ads for 26-31 December',
      'Run the January Sales in Honest Phases',
      'Gift Returns: Turn Returners Into Buyers',
      'In-Store and Local',
      'UK Rules on Sale Prices and Urgency',
      'Email and SMS Consent in the UK',
      'A Boxing Day to End-of-January Calendar',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Boxing Day is still the start of the UK winter sales, both online and in store, and the January sales now run for weeks. Most advice online comes from email software vendors and ignores UK dates and pricing rules. This guide covers both, for 2026." },
      { type: 'callout', text: "Quick answer: Warm up your list before Christmas, launch on the evening of Christmas Day or on Boxing Day with genuine, clearly priced reductions, offer more than a flat discount (early access, bundles, gift-card bonuses), run January in a few honest phases with real end dates, turn gift returns into exchanges, and follow UK rules on was/now prices, urgency claims, returns and marketing consent." },

      { type: 'heading', text: 'Key Dates for Boxing Day 2026 and the January Sales' },
      { type: 'table', headers: ['Date', 'What it means'], rows: [
        ['Friday 25 December', 'Christmas Day; large shops in England, Wales and Scotland must close; online sales can launch in the evening'],
        ['Saturday 26 December', 'Boxing Day; the traditional sale start'],
        ['Sunday 27 December', 'Sunday trading hours apply to large shops in England and Wales'],
        ['Monday 28 December', 'Substitute bank holiday for Boxing Day'],
        ['Friday 1 January', 'New Year\'s Day bank holiday'],
        ['Throughout January', 'January sales and post-Christmas payday weekend'],
      ]},
      { type: 'paragraph', text: "Check gov.uk for bank holiday dates and your local trading rules." },

      { type: 'heading', text: 'Before Christmas: Warm Up Your List' },
      { type: 'list', items: [
        'Email your list regularly in December so the Boxing Day email does not land after weeks of silence; Nevo David warns that emailing after a long gap can look like spam.',
        'Invite subscribers to early access for the sale.',
        'Save products people browsed and wishlisted for sale-day reminders.',
        'Prepare sale pages, prices and stock before you close for Christmas.',
      ]},

      { type: 'heading', text: 'Launch: Christmas Evening or Boxing Day' },
      { type: 'table', headers: ['Channel', 'Launch'], rows: [
        ['Email', 'Early access to subscribers on Christmas evening or early Boxing Day'],
        ['SMS', 'Only to customers who agreed; a short message on Boxing Day morning'],
        ['Website', 'Sale banner, clear was/now prices, delivery dates'],
        ['Ads', 'Switch to sale creative overnight; check approvals before Christmas'],
      ]},

      { type: 'heading', text: 'Ideas Beyond a Flat Discount' },
      { type: 'list', items: [
        'VIP early access for subscribers or loyalty members.',
        'Bundles and multi-buy offers.',
        'Gift-card bonuses, for example a bonus when spending gift money.',
        'Gift with purchase.',
        '"Treat yourself" campaigns for people who spent December buying for others.',
        'Clearance of seasonal stock with clear reasons for the reduction.',
      ]},

      { type: 'heading', text: 'Social Posts and Ads for 26-31 December' },
      { type: 'list', items: [
        'Short videos of best sellers at sale prices.',
        'Posts answering "what should I buy with my gift card?"',
        'Retargeting people who browsed in December.',
        'Opening hours and click-and-collect posts for shops.',
      ]},

      { type: 'heading', text: 'Run the January Sales in Honest Phases' },
      { type: 'table', headers: ['Phase', 'Dates (example)', 'Offer'], rows: [
        ['Launch', '26 Dec-3 Jan', 'Main reductions'],
        ['Further reductions', '4 Jan-17 Jan', 'Extra reductions on remaining stock'],
        ['Final clearance', '18 Jan-31 Jan', 'Last items; then end the sale'],
      ]},
      { type: 'paragraph', text: "Phases are fine when each one is real. Saying a sale ends on a date and then extending it can be a banned practice: falsely stating that terms are available only for a very limited time. Nevo also calls the \"extended by popular demand\" email an overused tactic (Nevo David on X, 4 Dec 2025)." },

      { type: 'heading', text: 'Gift Returns: Turn Returners Into Buyers' },
      { type: 'list', items: [
        'Make exchanges easy, and offer a small bonus for choosing an exchange or credit.',
        'Show sale items on the returns page and in the returns confirmation email.',
        'Train shop staff to help with exchanges, not only process refunds.',
      ]},

      { type: 'heading', text: 'In-Store and Local' },
      { type: 'list', items: [
        'Update opening hours on Google Business Profile, Apple Maps and your website.',
        'Promote click-and-collect for people avoiding delivery delays.',
        'Post in-store sale photos on Google Business Profile.',
      ]},

      { type: 'heading', text: 'UK Rules on Sale Prices and Urgency' },
      { type: 'list', items: [
        'The Digital Markets, Competition and Consumers Act 2024 lets the CMA fine businesses directly for consumer law breaches, up to 10% of global turnover.',
        'Prices must include mandatory charges; adding unavoidable fees late (drip pricing) is a misleading practice.',
        'Was/now prices must be genuine: the earlier price should be one the item was really sold at for a reasonable period, following pricing guidance for traders.',
        '"Up to X% off" claims need the maximum saving to apply to a significant proportion of the range (ASA/CAP Code rules on prices).',
        'Prices must be clear and include VAT under the Price Marking Order.',
        'False claims that an offer is available only for a very limited time are banned.',
      ]},
      { type: 'paragraph', text: "Returns: under the Consumer Contracts Regulations, online buyers can cancel within 14 days of receiving goods and then have 14 days to return them, including sale items. Under the Consumer Rights Act 2015, faulty goods can be rejected within 30 days, sale or not. Gift returns of non-faulty items bought in store are up to your own policy. This is general information, not legal advice." },

      { type: 'heading', text: 'Email and SMS Consent in the UK' },
      { type: 'list', items: [
        'Under PECR, marketing emails and texts to individuals need consent, or the "soft opt-in" for existing customers about similar products, with an opt-out offered when you collected the details and in every message.',
        'Include a working unsubscribe in every email and text.',
        'Fines for PECR breaches are rising to UK GDPR levels under the Data (Use and Access) Act 2025; check the ICO for timing.',
      ]},

      { type: 'heading', text: 'A Boxing Day to End-of-January Calendar' },
      { type: 'table', headers: ['Date', 'Action'], rows: [
        ['Mid-December', 'Early-access invite; prepare prices and pages'],
        ['25 December evening', 'Early-access email to subscribers'],
        ['26 December', 'Public launch: email, SMS (with consent), ads, social'],
        ['28 December', 'Bank holiday reminder; gift-card message'],
        ['Early January', 'Exchanges and returns follow-up; payday weekend email'],
        ['Mid-January', 'Further reductions phase, if planned'],
        ['End of January', 'Final clearance; end the sale on the stated date'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop drafts your Boxing Day and January sale emails, SMS, social posts and ad creative in UK English, schedules them around the 2026 dates, and checks that sale end dates in your copy match your plan. Every email, post and ad waits for your approval." },

      { type: 'faq', items: [
        { q: 'When is the Boxing Day bank holiday in 2026?', a: 'Boxing Day falls on Saturday 26 December 2026, so the substitute bank holiday is Monday 28 December. Check gov.uk for confirmation.' },
        { q: 'What are some creative marketing ideas for December?', a: 'VIP early access to sales, gift guides, last-order-date reminders, gift-card offers and treat-yourself campaigns after Christmas.' },
        { q: 'What is the best thing to do on Boxing Day?', a: 'For shoppers, it is a traditional sales day; for retailers, it is usually the start of the winter sale online and in store.' },
        { q: 'What are some creative Christmas-themed marketing ideas?', a: 'Gift guides by budget, advent-calendar offers, charity tie-ins and customer photo competitions. Prize promotions must follow the CAP Code.' },
        { q: 'Can I extend my January sale?', a: 'If you said it would end on a date, extending it can mislead customers. Plan real phases instead.' },
        { q: 'Do customers have a right to return sale items?', a: 'Online purchases have a 14-day cancellation right, including sale items; faulty goods can be rejected within 30 days.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your UK Boxing Day and January sale campaign, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['after-black-friday-retention-plan-shopify', 'q1-marketing-plan-dtc-brands-after-holidays', 'meta-ads-after-cyber-monday-december-plan', 'email-marketing-strategy'],
  },
];
