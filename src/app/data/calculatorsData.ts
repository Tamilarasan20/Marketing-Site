/**
 * Static SEO content for the interactive calculators under /tools. The React component does
 * the math; this file feeds the page copy, FAQ schema and the prerendered HTML so the pages
 * rank and get cited without JavaScript.
 */
export interface CalculatorInfo {
  slug: string;
  name: string;
  /** One line for cards and the tools index. */
  shortDescription: string;
  /** Meta description, 140-160 chars. */
  description: string;
  intro: string;
  howTo: string[];
  benchmarks?: { label: string; weak: string; ok: string; strong: string }[];
  faq: { q: string; a: string }[];
  relatedPosts: string[];
}

export const calculators: CalculatorInfo[] = [
  {
    slug: 'hook-rate-calculator',
    name: 'Hook Rate and Hold Rate Calculator',
    shortDescription: 'Turn 3-second plays, ThruPlays and impressions into hook rate, hold rate and a verdict',
    description: 'Free hook rate calculator for Meta ads: enter impressions, 3-second video plays and ThruPlays to get hook rate, hold rate, thumbstop ratio and what to fix.',
    intro: 'Hook rate tells you whether the first three seconds of a video ad stop the scroll. Hold rate tells you whether the body of the ad keeps people watching once they stopped. Together they explain why a creative is winning or losing before ROAS does. Paste the numbers from Ads Manager below.',
    howTo: [
      'In Ads Manager, add the columns Impressions, 3-Second Video Plays, ThruPlays and Link Clicks (Customize Columns).',
      'Select one ad and one date range with at least 1,000 impressions; smaller samples swing too much to judge.',
      'Enter the four numbers below. Hook rate is 3-second plays divided by impressions. Hold rate is ThruPlays divided by 3-second plays.',
      'Read the verdict: a weak hook means fix the opener (first frame, first line, motion). A weak hold means fix the body (pacing, proof, offer reveal). A weak click-through with strong hook and hold means fix the call to action or the landing page promise.',
    ],
    benchmarks: [
      { label: 'Hook rate (3s plays / impressions)', weak: 'Under 20%', ok: '20% to 30%', strong: 'Over 30%' },
      { label: 'Hold rate (ThruPlays / 3s plays)', weak: 'Under 10%', ok: '10% to 25%', strong: 'Over 25%' },
      { label: 'Outbound CTR (link clicks / impressions)', weak: 'Under 0.8%', ok: '0.8% to 1.5%', strong: 'Over 1.5%' },
    ],
    faq: [
      { q: 'What is a good hook rate for Meta ads?', a: 'Most media buyers treat a hook rate under 20 percent as weak, 20 to 30 percent as acceptable and above 30 percent as strong. These are practitioner ranges, not Meta figures, and they vary by category, placement and whether the ad runs to cold or warm audiences. Compare ads against your own account average first.' },
      { q: 'How do you calculate hook rate?', a: 'Hook rate equals 3-second video plays divided by impressions, multiplied by 100. If an ad had 50,000 impressions and 12,500 3-second plays, the hook rate is 25 percent. Some teams use thumbstop ratio as a synonym.' },
      { q: 'What is hold rate and how is it different from hook rate?', a: 'Hold rate equals ThruPlays (plays to 15 seconds or completion) divided by 3-second plays. Hook rate measures whether the opener stops the scroll; hold rate measures whether the rest of the video keeps the people who stopped. A high hook rate with a low hold rate means the opener over-promises or the body drags.' },
      { q: 'Does hook rate matter for static image ads?', a: 'No. Hook rate and hold rate are video metrics. For statics, use outbound CTR and cost per result, and compare the first-frame concept of your video ads against the static versions of the same angle.' },
      { q: 'Is this calculator free?', a: 'Yes. It runs in your browser, nothing is stored, and no login is required. It is one of the free marketing tools from Loraloop, the AI marketing team that generates, launches and optimizes Meta ads with your approval.' },
    ],
    relatedPosts: ['hook-rate-hold-rate-thumbstop-creative-metrics', 'creative-fatigue-meta-ads-detect-and-fix', 'ugc-vs-static-vs-video-ads-meta', 'meta-ads-glossary'],
  },
  {
    slug: 'creative-testing-calculator',
    name: 'Creative Testing Volume Calculator',
    shortDescription: 'How many ad creatives you can afford to test each week at your spend, CPA and test budget share',
    description: 'Free creative testing calculator: enter monthly Meta spend, target CPA and test budget share to see how many ad creatives you can test per week with real signal.',
    intro: 'Testing more creatives than your budget can judge produces noise, not learning. Testing too few leaves the algorithm with nothing fresh. This calculator turns your monthly spend, cost per result and test budget share into the number of variants you can actually read each week, and compares it with the ranges experienced buyers use.',
    howTo: [
      'Enter your total monthly Meta spend and your current or target cost per result (purchase, lead or signup).',
      'Set the share of spend you reserve for testing. Most accounts run 15 to 25 percent; new accounts go higher because everything is a test.',
      'Set how many results a variant needs before you judge it. Five is a common minimum; ten gives a cleaner read on expensive products.',
      'The result shows weekly test budget, how many variants that budget can validate, and whether you are under or over the typical range for your spend tier. Adjust the share or the minimum until the two agree.',
    ],
    benchmarks: [
      { label: 'Under $10k monthly spend', weak: 'Fewer than 2 new creatives a week', ok: '2 to 4', strong: 'Consistent 4 with iterations of winners' },
      { label: '$10k to $30k', weak: 'Fewer than 4', ok: '4 to 8', strong: '8 with angle and format diversity' },
      { label: '$30k to $100k', weak: 'Fewer than 8', ok: '8 to 15', strong: '15 with a weekly review cadence' },
      { label: 'Over $100k', weak: 'Fewer than 15', ok: '15 to 30', strong: '30 or more across products and markets' },
    ],
    faq: [
      { q: 'How many ad creatives should I test per week on Meta?', a: 'A common rule of thumb: 2 to 4 new creatives a week under $10,000 in monthly spend, 4 to 8 between $10,000 and $30,000, 8 to 15 up to $100,000 and 15 or more above that. The limiting factor is whether each variant can collect enough results to be judged, which is what this calculator checks.' },
      { q: 'What percentage of my budget should go to creative testing?', a: 'Most buyers reserve 15 to 25 percent of spend for a dedicated testing campaign and keep the rest in scaling campaigns that only receive proven winners. New accounts and new products run closer to 100 percent testing until the first winners emerge.' },
      { q: 'How many conversions does a creative need before I can judge it?', a: 'Five results is the practical minimum many buyers use to avoid killing a good ad on a bad afternoon; ten gives a cleaner read. For high-priced products, judge on a cheaper upstream signal such as add to cart or qualified lead first, then confirm on purchases.' },
      { q: 'Should I test more creatives or raise the budget?', a: 'If the calculator shows you can validate fewer variants than your spend tier suggests, raise the test share or lower the minimum results per variant before raising total budget. If you can validate more than you produce, the bottleneck is production, not budget.' },
      { q: 'Does Loraloop produce the creatives this calculator says I need?', a: 'Yes. Loraloop\'s ads agent generates ad creatives and copy from your brand knowledge base, drafts the test campaign, launches on your approval and proposes daily budget changes. A generated ad with creative, copy and campaign draft costs 10 credits, so the Starter plan covers roughly 30 a month.' },
    ],
    relatedPosts: ['how-many-ad-creatives-to-test-per-week', 'meta-ads-creative-testing-framework-2026', 'ad-creative-production-pipeline-dtc', 'how-to-scale-meta-ads-without-killing-roas'],
  },
  {
    slug: 'break-even-roas-calculator',
    name: 'Break-even ROAS Calculator',
    shortDescription: 'Find the ROAS and max CPA where an ad stops losing money, from AOV, COGS, shipping and fees',
    description: 'Free break-even ROAS calculator for e-commerce: enter average order value, COGS, shipping and payment fees to get break-even ROAS, max CPA and your target ROAS.',
    intro: 'Scaling to a ROAS target you copied from someone else is how brands lose money at scale. Your break-even ROAS depends only on your own unit economics: what an order brings in and what it costs to fulfil. This calculator gives you the break-even point, the most you can pay for a purchase, and the target ROAS that leaves the profit margin you want.',
    howTo: [
      'Enter your average order value (AOV) before shipping charged to the customer, or include shipping revenue if you want a fully loaded view.',
      'Enter cost of goods per order, shipping and fulfilment cost per order, payment processing as a percentage, and any other variable cost (packaging, returns allowance, affiliate fees).',
      'Set the net profit margin you want to keep per order after ad spend. Zero gives you pure break-even.',
      'Read the results: contribution margin per order, break-even ROAS (AOV divided by contribution margin), maximum CPA (contribution margin minus target profit) and target ROAS. Use target ROAS as the scaling threshold and break-even ROAS as the kill threshold.',
    ],
    faq: [
      { q: 'How do you calculate break-even ROAS?', a: 'Break-even ROAS equals average order value divided by contribution margin per order, where contribution margin is AOV minus cost of goods, shipping and fulfilment, payment fees and other variable costs. If AOV is $80 and contribution margin is $32, break-even ROAS is 2.5.' },
      { q: 'What is a good ROAS for Meta ads?', a: 'There is no universal good ROAS. A brand with 70 percent gross margin can profit at 1.8 while a brand with 35 percent margin loses money at 2.5. Calculate your own break-even first, then set a target above it that leaves the profit you need. Platform-reported ROAS also over-credits ads, so compare against blended revenue divided by total spend too.' },
      { q: 'What is the difference between break-even ROAS and target ROAS?', a: 'Break-even ROAS is the point where an order neither makes nor loses money after ad spend. Target ROAS adds the profit margin you want per order. Scale campaigns that beat target ROAS, hold campaigns between break-even and target, and cut campaigns below break-even once they have enough data.' },
      { q: 'Should I include repeat purchases or lifetime value?', a: 'For first-order break-even, no. For a scaling threshold you can lower the target by the expected contribution from repeat orders within a fixed window such as 60 or 90 days, but only if you have the retention data to back it up.' },
      { q: 'Can Loraloop apply these thresholds automatically?', a: 'Loraloop\'s ads agent uses your targets to propose daily budget moves: shifting spend toward ad sets above target, pausing those below break-even, and flagging anything in between. Changes wait for your approval until you decide to loosen the rules.' },
    ],
    relatedPosts: ['how-to-scale-meta-ads-without-killing-roas', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'marketing-for-ecommerce-brands-under-1m-revenue', 'meta-ads-glossary'],
  },
  {
    slug: 'google-ads-wasted-spend-finder',
    name: 'Google Ads Wasted Spend Finder',
    shortDescription: 'Paste a search terms report to find zero-conversion spend, negative keyword candidates and words that never convert',
    description: 'Free Google Ads wasted spend finder: paste your search terms report to see spend with zero conversions, negative keyword candidates and words that never convert.',
    intro: 'Most wasted Google Ads spend hides in the search terms report, not the keyword list, and it grows as AI Max, broad match and Performance Max match you to more searches. Paste your report below. The finder adds up spend on searches that never converted, lists the ones that cost more than a conversion is worth, and pulls out the words that only ever appear in non-converting searches.',
    howTo: [
      'In Google Ads, open Insights and reports, then Search terms. Pick a date range of 30 to 90 days that ends at least 3 days ago, so late conversions have arrived.',
      'Make sure the Cost and Conversions columns are showing (Clicks is optional), then download the report as CSV or select the table and copy it.',
      'Paste it into the box and enter your target cost per conversion. Any search term that spent at least that much with zero conversions is flagged as a negative keyword candidate; half that amount puts it on the watch list.',
      'Review the words that never convert. Add the ones that signal the wrong intent (jobs, salary, free, DIY, course) as phrase-match negatives at campaign level or in a shared list. Keep words that describe something you sell; they may simply need a better ad or landing page.',
    ],
    benchmarks: [
      { label: 'Share of search term spend with zero conversions (30+ days)', weak: 'Over 30%', ok: '15% to 30%', strong: 'Under 15%' },
      { label: 'Negative keyword review cadence', weak: 'Monthly or less', ok: 'Every two weeks', strong: 'Weekly, or nightly with an AI agent' },
    ],
    faq: [
      { q: 'How do I find wasted spend in Google Ads?', a: 'Open the search terms report for the last 30 to 90 days, ending at least 3 days ago, and sort by cost. Search terms that spent more than your target cost per conversion without converting are wasted spend; add the wrong-intent ones as negative keywords. This tool does the sorting and adds up the total for you.' },
      { q: 'What is a negative keyword in Google Ads?', a: 'A negative keyword stops your ads from showing for searches that contain it. Negative keywords can be broad, phrase or exact match and can be added to an ad group, a campaign, a shared list or the whole account. Unlike normal keywords, negatives do not match close variants, so add plurals and misspellings separately.' },
      { q: 'Should I add every zero-conversion search term as a negative?', a: 'No. Some searches convert slowly, some had too few clicks to judge, and some describe exactly what you sell. Block wrong-intent searches (jobs, free, DIY, competitor support pages) and give relevant searches with no conversions a better ad, landing page or bid instead.' },
      { q: 'Why does my search terms report not show every search?', a: 'Google only lists search terms that were searched by a significant number of people. The rest are grouped as other search terms. The visible terms still usually account for most of the spend, which is why the report is the best place to start.' },
      { q: 'Can Loraloop find and add negative keywords for me?', a: "Yes. Loraloop's ads agent, Angie, reads your search terms every night (skipping the most recent 3 days so conversions can settle), groups the wasted ones and files one negative keyword proposal per account. You approve it in the inbox, and every change can be undone." },
    ],
    relatedPosts: ['google-ads-search-terms-negative-keywords', 'google-ads-audit-checklist-2026', 'ai-max-for-search-campaigns-guide', 'best-ai-for-google-ads-2026'],
  },
  {
    slug: 'google-ads-budget-calculator',
    name: 'Google Ads Budget Calculator',
    shortDescription: 'Turn a conversion goal, CPC, conversion rate and target CPA into a monthly and daily Google Ads budget',
    description: 'Free Google Ads budget calculator: enter conversions wanted, average CPC, conversion rate and target CPA to get monthly and daily budget and whether the plan is realistic.',
    intro: 'A Google Ads budget should start from how many conversions you need and what each one is worth, not from a round number. Enter your goal, your cost per click and conversion rate, and the most you can pay per conversion. The calculator returns the monthly and daily budget, the cost per conversion to expect, and whether your target is reachable at today’s numbers.',
    howTo: [
      'Enter the number of conversions you want each month: leads, sales, booked calls or sign-ups, matching your primary conversion action.',
      "Enter your average cost per click. For a new account, use the top-of-page bid range from Keyword Planner for your main keywords.",
      'Enter your conversion rate (conversions divided by clicks). If you do not know it, 3 to 5 percent is a cautious starting assumption for a focused landing page; replace it with real data after two to four weeks.',
      'Enter your target cost per conversion. If the expected CPA comes out above target, more budget will not help: lower the CPC with tighter keywords and negatives, or raise the conversion rate on the landing page.',
    ],
    faq: [
      { q: 'How much should I spend on Google Ads per month?', a: 'Multiply the conversions you want by your cost per conversion. If you want 40 leads a month and a lead costs about $70, plan for roughly $2,800. Then divide by 30.4 for the daily budget. Starting below what one or two conversions a day costs makes it hard for Smart Bidding to learn.' },
      { q: 'How is a Google Ads daily budget charged?', a: 'Google can spend up to twice your average daily budget on a busy day, but across a month you are not charged more than the average daily budget multiplied by 30.4. That is why this calculator divides the monthly figure by 30.4.' },
      { q: 'What is a good conversion rate for Google Ads?', a: 'It depends on the industry, the offer and the landing page, so your own account is the best benchmark. Treat any published average as a rough reference only, and measure your rate on at least a few hundred clicks before using it to set budgets.' },
      { q: 'How many conversions does Smart Bidding need?', a: 'Smart Bidding learns faster with more conversions. Many practitioners like about 30 conversions a month per campaign before setting a strict target CPA or target ROAS. With fewer, consolidate campaigns or start with Maximize conversions without a target.' },
      { q: 'Can Loraloop keep my Google Ads inside this budget?', a: "Loraloop checks daily, monthly and per-campaign spend caps at the moment any change runs, and its nightly optimizer only tightens targets or lowers bids and unspendable budgets. Raising a budget always waits for a person." },
    ],
    relatedPosts: ['smart-bidding-target-cpa-vs-target-roas', 'google-ads-conversion-tracking-checklist', 'who-should-manage-google-ads-small-business', 'best-ai-for-google-ads-2026'],
  },
];

export function getCalculator(slug: string): CalculatorInfo | undefined {
  return calculators.find((c) => c.slug === slug);
}
