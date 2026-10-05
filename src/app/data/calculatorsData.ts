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
];

export function getCalculator(slug: string): CalculatorInfo | undefined {
  return calculators.find((c) => c.slug === slug);
}
