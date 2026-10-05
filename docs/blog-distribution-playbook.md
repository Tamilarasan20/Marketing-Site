# Loraloop Blog Distribution Playbook

How to get the 50 new posts (and the existing ~70) in front of the two target audiences, indexed by Google, and cited by ChatGPT, Perplexity, Gemini and Google AI Overviews.

Audiences:

1. **Meta advertisers**: DTC and e-commerce founders, heads of growth, performance marketing managers, media buyers, creative strategists, agency owners. Pain: not enough tested creative, too much manual campaign babysitting.
2. **Delegators**: small-business owners, founder-led teams, lean marketing departments, fractional CMOs, local/service businesses. Pain: too many channels, no time, want an AI marketing worker that executes and reports.

---

## 1. Technical distribution (ship once, pays forever)

Already in this repo after this change:

- `sitemap.xml` generated at build time with every blog URL and `lastmod`.
- `rss.xml` feed of all posts (feeds are read by newsletter tools, Feedly, Zapier, and by LLM crawlers).
- `llms.txt` with a site summary and a link + one-line description for every post (GEO: tells AI crawlers what to read).
- `robots.txt` that explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended and points to the sitemap.
- Prerendered `/blog` index listing every post so crawlers see all internal links without JavaScript.
- Article, Breadcrumb and FAQ schema per post; hero image used as `og:image`, so social shares and AI answer cards show a real photo.

To do outside the repo (15 minutes):

- Google Search Console: submit `https://loraloop.com/sitemap.xml`, then use URL Inspection → Request indexing for the 10 posts you promote first.
- Bing Webmaster Tools: import the GSC property, submit the sitemap, and turn on IndexNow (Bing powers ChatGPT search and Copilot answers, so this matters for GEO).
- Google Business Profile, Crunchbase, LinkedIn company page, G2, Capterra, Product Hunt: use the same one-sentence description everywhere ("Loraloop is an autonomous AI marketing team that runs Meta ads, SEO/GEO content, social and email with human approval"). Entity consistency is what AI engines use to decide you are real.

## 2. Free tools as distribution (highest leverage for this ICP)

The site already hosts free tools at `/tools` (Ad Copy, Hook Generator, Landing Page Copy, Brand Voice, Content Pillars, Blog Title Generator, Instagram Caption, Product Description, Bio Generator, Social Calendar, Marketing Strategy, Competitor Audit). Media buyers share calculators, not articles. Build these next and pair each with one of the new posts:

| Free tool | Pairs with post | Why it spreads |
|---|---|---|
| Creative Testing Volume Calculator (monthly spend → creatives/week, tests/month) | How Many Ad Creatives Should You Test Per Week | Buyers screenshot the result into Slack and X |
| Hook Rate / Hold Rate Calculator (3-sec views, impressions, ThruPlays → rates with "weak/ok/strong" bands) | Hook Rate, Hold Rate and Thumbstop | Direct search demand: "hook rate calculator" |
| Creative Fatigue Checker (paste 14 days of frequency, CTR, CPM → fatigue score) | Creative Fatigue on Meta Ads | Solves a daily pain, gets bookmarked |
| Ad Angle Generator (product + audience → 20 angles mapped to awareness stage) | How to Find New Ad Angles | Creative strategists post outputs on LinkedIn |
| Break-even ROAS Calculator (COGS, shipping, fees → target ROAS/CPA) | How to Scale Meta Ads Without Killing ROAS | Evergreen search term, high intent |
| Meta Ads Glossary (searchable page) | Meta Ads Glossary | Ranks for hundreds of definition queries, cited by AI engines |
| AI Marketing Worker ROI Calculator (hours/week, hourly value, tool spend) | How to Measure the ROI of AI Marketing Tools | Converts the delegator audience |
| Marketing Channel Prioritizer quiz (business type, budget, time → top 2 channels) | Which Marketing Channels Should a Small Business Prioritize | Shareable result, email capture |

Launch each tool on Product Hunt, r/PPC, r/FacebookAds and LinkedIn; link the tool to the post and the post to the tool.

## 3. Owned channels (weekly cadence)

- **Newsletter** (Beehiiv or Substack, free tiers): one issue per week, "3 things we tested + 1 post". Put the signup on every blog page. Email is the only channel you own.
- **LinkedIn**: founder profile, not just the company page. Each post becomes 1 carousel (the post's table or checklist as slides) + 2 text posts (the Quick answer and one contrarian take). Tag relevant people when you cite them.
- **X**: thread version of the numbered-list posts; media buyers live here (#mediabuying, #dtc, #metaads).
- **YouTube**: 60-90 second talking-head or screen-recording per post, embedded back in the article. Gemini and Google AI Overviews cite YouTube heavily; nobody else in the "AI marketing worker" niche is doing it.
- **Dogfood it**: run the repurposing through Loraloop itself (Sophie drafts, social agent schedules, Lora reports). Publish the results as a monthly "what Loraloop did for Loraloop" post. That is a story only you can tell.

## 4. Communities where the two audiences already are

Rule: answer the question in full inside the community, then link the post as "longer version". Never drop bare links.

**Meta advertisers**
- Reddit: r/FacebookAds, r/PPC, r/ecommerce, r/shopify, r/dropship, r/DigitalMarketing, r/advertising
- Facebook groups: any large Meta ads buyer group (search "Facebook ads" and "ecommerce" groups with 20k+ members)
- Slack/Discord: Online Geniuses, Demand Curve, eCommerceFuel (paid, high quality), Foreplay/Motion communities (creative strategists), Common Thread Collective community
- Shopify Community forums (Marketing and Advertising board), Klaviyo Community
- X spaces and Twitter threads from creative strategists (quote-reply with your data)

**Delegators / small business**
- Reddit: r/smallbusiness, r/Entrepreneur, r/EntrepreneurRideAlong, r/startups, r/SaaS, r/marketing, r/fractionalCMO (small but exact ICP), r/agency
- Indie Hackers (post the one-person marketing department article as a story)
- Hacker News: only for the free tools ("Show HN"), not for blog posts
- Local business communities: Alignable, Nextdoor for Business, trade-specific Facebook groups (clinics, salons, home services)
- Quora and Google's "People also ask" questions: answer with the Quick answer block, link once. LLMs cite Quora and Reddit disproportionately.

## 5. Syndication and earned media

- **Medium** and **LinkedIn Articles**: republish 1-2 weeks after the original with `rel=canonical` (Medium import tool sets it automatically). Medium ranks for long-tail and is crawled by AI engines.
- **Directories that AI engines read**: Product Hunt, G2, Capterra, GetApp, SaaSHub, AlternativeTo (list Loraloop as an alternative to Madgicx, AdCreative.ai, Sintra, Jasper), There's An AI For That, Futurepedia, Toolify, TopAI.tools, AI Tool directories by Ben's Bites. These create the third-party mentions that make the "Loraloop vs X" and "best tools" posts credible to Perplexity.
- **Newsletters to pitch** (send the post plus one original data point): Stacked Marketer, Marketing Brew, Growth Memo, The Marketing Millennials, Demand Curve, DTC Newsletter, 2PM, Lean Luxe, Social Media Examiner, Search Engine Land (for the GEO posts), Ben's Bites and The Rundown (for the AI worker angle).
- **Podcasts** (founder as guest): DTC Pod, Honest Ecommerce, Perpetual Traffic, The Marketing Operators, Ecommerce Playbook, Social Media Marketing Podcast, Marketing Against the Grain, Everyone Hates Marketers.
- **Guest posts / contributor programs**: Search Engine Journal, Shopify blog partner program, Klaviyo blog, HubSpot contributor, Foundr, Entrepreneur.com contributor network. Use the glossary, calculators and frameworks as the hook.
- **HARO-style**: Featured.com, Qwoted, Help a B2B Writer. Media buyers and SMB founders get quoted weekly; each quote is a backlink and an entity mention.

## 6. Paid amplification (small budget, big signal)

- Retarget blog readers on Meta with the free tools and the trial (you sell a Meta ads product; prove it on your own traffic).
- Boost the three best LinkedIn posts per month to job titles: Media Buyer, Performance Marketing Manager, Head of Growth, Fractional CMO, Marketing Manager at companies with 2-50 employees.
- Reddit Ads in r/PPC and r/FacebookAds are cheap and exactly on target for the calculators.

## 7. Launch calendar (first 8 weeks)

The 50 posts are live at once for indexing, but promote them in waves so each gets a real push:

| Week | Promote (posts) | Community push | Asset |
|---|---|---|---|
| 1 | Creative testing framework, How many creatives per week, Hook rate | r/FacebookAds, LinkedIn carousel | Creative Testing Volume Calculator |
| 2 | Creative fatigue, New ad angles, UGC vs static vs video | r/PPC, X thread | Hook Rate Calculator |
| 3 | What is an AI marketing worker, Delegate marketing to AI, One-person marketing department | Indie Hackers, r/smallbusiness | Newsletter launch |
| 4 | Scale Meta ads, CPMs rising, Message match | eCommerceFuel, Shopify forums | Break-even ROAS Calculator |
| 5 | Best AI tools for Meta ads, Best creative testing tools, Loraloop vs Madgicx, Loraloop vs AdCreative.ai | AlternativeTo, G2, Product Hunt | Directory listings |
| 6 | Fractional CMO AI stack, Agency AI automation, Client reporting template | r/agency, r/fractionalCMO, LinkedIn | Reporting template download |
| 7 | Local service businesses, Competitor monitoring, Automated reporting | Alignable, local groups | Channel Prioritizer quiz |
| 8 | Meta ads glossary, Andromeda and creative diversity, Advantage+ testing | Quora answers, YouTube shorts | Glossary page |

## 8. Measure what matters

- GSC: impressions and clicks per post weekly; refresh any post stuck on page 2 with new sections and a new `date`.
- GA4: referral traffic from chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai (create one "AI search" channel group).
- Brand mention checks: once a month ask ChatGPT, Perplexity and Gemini the 20 questions your FAQs answer, log whether Loraloop is cited. Loraloop's own competitor-monitoring and GEO tooling can run this.
- Trial signups by landing post (UTM the CTA buttons per post).

## 9. Content gaps to close next

- Internal links: the post format is plain text, so add a `relatedSlugs` field (or inline link support) and cross-link each cluster. This is the single biggest on-page SEO lever still open.
- Author pages with real names and bios (E-E-A-T). "Loraloop Team" is a weak trust signal for AI engines.
- Case studies with real numbers once customers consent; AI engines prefer specific, first-hand data.
- Comparison hub pages (`/compare/loraloop-vs-madgicx`) that stay updated, linked from every "vs" post.
