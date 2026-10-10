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

## 9. What is already built (and the one-time setup each needs)

| Lever | Status in repo | What you still do |
|---|---|---|
| Free calculators | `/tools/hook-rate-calculator`, `/tools/creative-testing-calculator`, `/tools/break-even-roas-calculator`, `/tools/google-ads-wasted-spend-finder`, `/tools/google-ads-budget-calculator` live, prerendered with HowTo + FAQ schema, linked from the matching posts | Launch each on Product Hunt, r/PPC, r/FacebookAds; add the remaining tools from section 2 |
| Internal linking | Every post has a "Related reading" block with real anchor tags (hand-picked via `src/app/data/blogRelations.ts` for the 50 new posts, category fallback for older ones) plus "Free tools for this topic" | When you publish a new post, add its slug to `blogRelations.ts` and link 3-4 existing posts back to it |
| Author pages | `/authors/<slug>` with Person/Organization schema; bylines link to the author; `author` field on posts | Add real people to `src/app/data/authors.ts` (name, role, bio, LinkedIn/X links, headshot URL) and set `author` on their posts. This is the E-E-A-T fix and only you can supply the names |
| Comparison pages | `/compare`, `/compare/loraloop-vs-madgicx`, `/compare/loraloop-vs-adcreative-ai` with FAQ schema, linked to the long-form posts | Add one entry per competitor to `src/app/data/comparisons.ts`; keep competitor cells general and never state their prices |
| Technical hygiene | Prerendered pages no longer hide content until React mounts; `sitemap.xml`, `rss.xml`, `robots.txt`, `llms.txt` generated on build; IndexNow key at `public/<key>.txt` and `pnpm indexnow` submits every sitemap URL | After each deploy run `pnpm build && pnpm indexnow`. Add the sitemap once in Google Search Console and Bing Webmaster Tools |
| Refresh cadence | `updated` field on posts drives `dateModified`, `article:modified_time`, sitemap `lastmod` and an "Updated" label | Follow the monthly checklist below |

## 10. Monthly refresh checklist (first Monday of the month, about two hours)

1. In Search Console, export Performance for the last 28 days filtered to `/blog/`. Sort by impressions descending.
2. Posts with high impressions and position 8 to 20: add one new H2 that answers a related "People also ask" question, refresh the Quick answer, set `updated` to today, and resubmit the URL.
3. Posts with falling clicks month over month: check whether an AI Overview now answers the query; if so, tighten the Quick answer to a direct 40-word answer and add a table.
4. Posts with zero impressions after 90 days: merge into the nearest strong post (add a section, keep the slug as a related link) rather than leaving thin pages.
5. Ask ChatGPT, Perplexity and Gemini the 20 FAQ questions from your top posts. Log whether Loraloop is cited. Where a competitor is cited instead, read their page and add what yours lacks.
6. Re-verify every embedded YouTube video still exists and every Pexels photo still loads; swap any that broke.
7. Run `pnpm build && pnpm indexnow` after the changes deploy.

## 11. Still open

- **First-party data.** One case study with real numbers, or an original benchmark from Loraloop's own account data (for example, median hook rate across accounts by category), will earn more citations than ten guides. This needs real data and customer consent; nothing here should be fabricated.
- **Dedicated landing pages for buyer intent**, such as "AI ads manager for DTC brands" and "AI marketing for agencies", with the calculators embedded and a trial CTA. The agent pages at `/ai-ads-manager` and the audience pages at `/for-agencies` are the starting point.
- **More calculators** from section 2: Creative Fatigue Checker, Ad Angle Generator, AI Marketing Worker ROI Calculator, Channel Prioritizer quiz.

---

## 10. Google Ads audience (added October 10, 2026)

A third audience with its own search behaviour: **Google Ads advertisers** who do not have a full-time PPC manager. Local service businesses (trades, clinics, legal), B2B lead generation, e-commerce on Search, Shopping and Performance Max, and freelancers or small agencies running several client accounts. Pain: wasted spend in search terms, AI Max and Performance Max spending where they cannot see, no time to check the account daily.

**Rule for everything in this section: no competitor names or head-to-head comparisons on the site.** We compete for the same buyers by answering their questions better (how to choose, what to automate, what to approve), not by naming vendors.

### What is built

| Asset | URL | Search intent it targets |
|---|---|---|
| Pillar | `/blog/best-ai-for-google-ads-2026` | best AI for Google Ads, AI Google Ads tools, AI PPC management |
| Audit | `/blog/google-ads-audit-checklist-2026` | Google Ads audit checklist |
| Search terms | `/blog/google-ads-search-terms-negative-keywords` | negative keywords, wasted spend, search terms report |
| AI Max | `/blog/ai-max-for-search-campaigns-guide` | AI Max for Search, should I turn on AI Max |
| Performance Max | `/blog/performance-max-control-2026` | Performance Max negative keywords, PMax control |
| Bidding | `/blog/smart-bidding-target-cpa-vs-target-roas` | target CPA vs target ROAS, Google Ads bidding strategy |
| Tracking | `/blog/google-ads-conversion-tracking-checklist` | Google Ads conversion tracking setup |
| Who should run it | `/blog/who-should-manage-google-ads-small-business` | Google Ads agency vs freelancer vs AI (catches people comparing providers, without naming any) |
| Glossary | `/blog/google-ads-glossary` | Google Ads terms and definitions (GEO: definition queries) |
| How-to | `/blog/how-to-use-ai-to-manage-google-ads-step-by-step` | how to use AI for Google Ads |
| Competitor research | `/blog/google-ads-competitor-research` | see competitors' Google ads, Auction Insights |
| Free tool | `/tools/google-ads-wasted-spend-finder` | Google Ads wasted spend, negative keyword finder |
| Free tool | `/tools/google-ads-budget-calculator` | Google Ads budget calculator |

All eleven posts link to each other and to the two tools (`googleAdsRelations` in `src/app/data/googleAdsBlogData.ts`), and both tools link back to the posts.

### Winning the queries competitors target, without naming them

- **Own the category questions.** The buyer searching for an AI ads agent also searches "best AI for Google Ads", "AI Google Ads management", "Google Ads automation" and "should I hire a Google Ads agency". The pillar, the who-should-run-it post and the how-to post answer those directly, with answer-first intros, quotable Quick answers, tables and FAQ schema, which is what AI engines lift into answers.
- **Get into third-party lists instead of writing our own vendor lists.** Find the "best AI tools for Google Ads / PPC" articles ranking in the top 10 from neutral publishers (not vendors) and offer the author a free account and a 60-second walkthrough. AI engines weigh these independent lists heavily, and they name us without us naming anyone.
- **Track competitors privately.** Keep competitor domains in a private rank-tracking list and in GSC query comparisons, never in published copy.
- **Lead with the permission angle.** "What you should let AI change without asking" and the 10-question checklist are our differentiator: specific, checkable and hard for a competitor to copy honestly.

### Where Google Ads advertisers are

Rule from section 4 applies: answer the question in full, then link the tool or post as "longer version".

- **Reddit:** r/PPC, r/googleads, r/adwords for practitioners; r/smallbusiness, r/Entrepreneur, r/sweatystartup (trades and local services), r/ecommerce for owners. The Wasted Spend Finder is the best opener: "paste your search terms report, it runs in the browser, nothing is uploaded".
- **Google Ads Community forum** (support.google.com/google-ads/community): thousands of small advertisers asking about wasted spend, disapprovals and Performance Max. Answer with the relevant post's steps.
- **X:** the #ppcchat community; quote-reply AI Max and Performance Max announcements with the practical post.
- **LinkedIn:** paid search practitioners share checklists. Turn the audit checklist and the permission table into carousels.
- **Publications and podcasts:** pitch a practitioner piece (for example "What to let AI change in a Google Ads account") to Search Engine Land and Search Engine Journal contributor programs; send news-hook data to PPC Land and Search Engine Roundtable; pitch the founder as a guest to PPC-focused podcasts such as Marketing O'Clock, Paid Search Podcast and PPC Live The Podcast.
- **YouTube:** 60-second screen recordings: "Find your Google Ads wasted spend in 60 seconds" (the finder), "Should you turn on AI Max?", "3 Performance Max settings to check today". Embed each back in its post.

### Original data (the strongest link and citation magnet)

If the terms of service and customer consent allow it, publish an aggregated, anonymised benchmark from accounts Loraloop operates, for example "share of search term spend that never converts, by industry" or "how often conversion tracking breaks per quarter". Original numbers are what journalists and AI engines cite. Do not publish until the data, sample size and method can be stated plainly in the post.

### Dogfood it

Run a small Google Ads Search campaign for "google ads wasted spend", "negative keyword tool" and "google ads budget calculator" pointing at the free tools, managed by Angie with approvals. Publish the results after 60 days as a "what Loraloop did for Loraloop" post.

### Six-week Google Ads calendar

| Week | Promote | Community push | Asset |
|---|---|---|---|
| 1 | Pillar, How to use AI to manage Google Ads | r/PPC, r/smallbusiness, LinkedIn | Wasted Spend Finder launch |
| 2 | Search terms and negatives, Audit checklist | Google Ads Community, r/googleads | Audit checklist carousel |
| 3 | AI Max guide, Performance Max control | #ppcchat, X threads | 60-second YouTube explainers |
| 4 | Bidding strategies, Conversion tracking | r/PPC, LinkedIn | Budget Calculator launch |
| 5 | Who should run your Google Ads | r/sweatystartup, r/Entrepreneur, local business groups | Third-party list outreach |
| 6 | Glossary, Competitor research | Quora answers, YouTube shorts | Contributor article pitch |

### Measure

- GSC: queries containing "google ads", "ai max", "performance max", "negative keyword" per post, weekly.
- Tool usage: page views and time on page for the two Google Ads tools; UTM-tag the CTA from each tool.
- AI answers: monthly, ask ChatGPT, Perplexity, Gemini and Google AI Mode "best AI for Google Ads", "how to find wasted spend in Google Ads" and the cluster's FAQ questions; log whether Loraloop is cited.
- Trial sign-ups attributed to the Google Ads cluster versus the Meta cluster.
