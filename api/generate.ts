import { GoogleGenerativeAI } from '@google/generative-ai';

const MAX_INPUT_LENGTH = 2000;

type ToolType =
  | 'brand-voice'
  | 'social-calendar'
  | 'content-pillars'
  | 'hook-generator'
  | 'ad-copy'
  | 'marketing-strategy'
  | 'landing-page-copy'
  | 'product-description'
  | 'competitor-audit'
  | 'bio-generator'
  | 'blog-title-generator'
  | 'instagram-caption'
  | 'generic';

function buildPrompt(tool: ToolType, inputs: Record<string, string>): string {
  switch (tool) {
    case 'brand-voice':
      return `You are a world-class brand strategist. Create a comprehensive, specific brand voice guide based on this business.

Business Name: ${inputs.businessName}
What They Sell: ${inputs.description}
Target Audience: ${inputs.audience}
Brand Personality Words: ${inputs.personality}
Brands They Admire: ${inputs.admiredBrands || 'Not specified'}
Primary Platform: ${inputs.platform}

Generate a Brand Voice Guide with EXACTLY these sections:

## Brand Personality
List 4-5 key personality traits with a 1-sentence explanation of each. Be specific to this business.

## Tone of Voice
Describe exactly how this brand should sound in 4-6 sentences. Include specific characteristics — formal vs casual, serious vs playful, etc.

## Words to Use (15 examples)
List 15 specific words and phrases that perfectly fit this brand. Include a short note on why each fits.

## Words to Avoid (10 examples)
List 10 words/phrases that clash with this brand and would feel off. Include why.

## Example Captions (3 examples)
Write 3 platform-native captions for ${inputs.platform} they could post TODAY. Make them real and ready to publish — not templates.

## Example Ad Copy (2 examples)
Write 2 short ad copy examples (Hook + 2-3 sentences + CTA). Make them specific to what they sell.

## Content Pillars (5 pillars)
List 5 content themes. For each:
- Pillar name and description
- Why it resonates with their audience
- 3 specific post ideas

Be direct, specific, and make every line useful. Avoid generic marketing advice.`;

    case 'social-calendar':
      return `You are a social media strategist. Create a complete 30-day content calendar for this business.

Business Type: ${inputs.businessType}
Target Audience: ${inputs.audience}
Goal: ${inputs.goal}
Platform: ${inputs.platform}
Posting Frequency: ${inputs.frequency}

Generate a 30-day content calendar:

## Strategy Overview
3-4 sentences explaining the overall approach and why it fits this business and goal.

## Content Mix
Percentage breakdown of content types (e.g., 40% educational, 30% entertaining, 30% promotional). Explain the rationale.

## Week 1 (Days 1–7)
For each post day, include:
- Day & Date reference (Day 1, Day 2, etc.)
- Format: [Reel / Carousel / Static Post / Story]
- Topic/Theme
- Hook (opening line or visual concept)
- Caption direction (2-3 sentences on what to write)

## Week 2 (Days 8–14)
Same format.

## Week 3 (Days 15–21)
Same format.

## Week 4 (Days 22–30)
Same format.

## Hashtag Strategy
15 hashtags organized into: Large (1M+), Medium (100K–1M), Niche (under 100K). Pick hashtags relevant to this specific business.

## Engagement Tactics
4 specific tactics for ${inputs.platform} to boost reach and engagement for this audience.

Make every day specific and actionable. No filler content.`;

    case 'content-pillars':
      return `You are a content strategist. Create a complete content pillar framework for this business.

Business Niche: ${inputs.niche}
Target Audience: ${inputs.audience}
Main Goals: ${inputs.goals}
Number of Pillars: ${inputs.pillars || '5'}

Generate a complete content pillar framework:

## Strategy Overview
3-4 sentences on the content approach and why these pillars fit this niche.

## Content Pillars

For each of the ${inputs.pillars || '5'} pillars, include:

### Pillar [N]: [Name]
**Purpose:** What this pillar achieves for the business
**Audience Value:** What the audience gets from it
**Funnel Stage:** Awareness / Trust / Conversion (or combination)

**10 Specific Post Ideas:**
1. [Specific post idea]
(continue for all 10)

**Best Formats:** Which content formats work best for this pillar

## Content Mix Recommendation
Weekly posting split across pillars with rationale.

## Content Calendar Integration
How to schedule these pillars across 7 days.

## Quick Wins — 5 Posts to Create This Week
Specific, detailed post briefs they can execute immediately.

Be specific to this niche. Every post idea should be usable as-is.`;

    case 'hook-generator':
      return `You are a viral content strategist who understands exactly what makes people stop scrolling.

Topic/Niche: ${inputs.topic}
Platform: ${inputs.platform}
Content Angle: ${inputs.angle}
Target Audience: ${inputs.audience}

Generate 15 powerful, ready-to-use hooks organized by type. For EACH hook:
- Write the hook (complete, ready to use — not a template)
- Note the psychological trigger it activates
- Mark virality potential: 🔥 High / ⚡ Medium

## Pain-Point Hooks (3)
## Curiosity & Open Loop Hooks (3)
## Bold Statement Hooks (3)
## Story Hooks (3)
## Result & Transformation Hooks (3)

## Bonus: 5 Headline-Style Hooks for Carousels/Ads

Every hook must be specific to "${inputs.topic}" — zero generic filler.`;

    case 'ad-copy':
      return `You are a direct-response copywriter who writes ads that actually convert.

Product/Service: ${inputs.product}
What It Does: ${inputs.description}
Target Audience: ${inputs.audience}
Main Pain Point: ${inputs.painPoint}
Offer/Deal: ${inputs.offer}
Platform: ${inputs.platform}

Write 3 complete ad copy variations:

## Ad 1: Emotional / Story Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## Ad 2: Direct-Response / Benefit Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## Ad 3: Problem / Agitate / Solution Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## 5 Headline A/B Test Variations

## ${inputs.platform}-Specific Tips
4 platform-specific tactics to maximize this ad's performance.`;

    case 'marketing-strategy':
      return `You are a growth marketer. Create a focused, executable marketing strategy.

Business Type: ${inputs.businessType}
Product/Service: ${inputs.product}
Target Audience: ${inputs.audience}
Monthly Budget: ${inputs.budget}
Primary Goal: ${inputs.goal}
Current Channels: ${inputs.channels || 'None currently'}
Timeline: ${inputs.timeline}

Generate a complete marketing strategy:

## Executive Summary
## Target Audience Deep-Dive
## Positioning Statement
## Recommended Channels (Prioritized)
## Content Strategy
## ${inputs.timeline} Action Plan
## KPIs & Success Metrics
## Quick Wins (First 2 Weeks)`;

    case 'landing-page-copy':
      return `You are a conversion copywriter who writes landing pages that convert cold traffic into customers.

Product/Service: ${inputs.product}
What It Does: ${inputs.description}
Target Audience: ${inputs.audience}
Main Benefit/Outcome: ${inputs.benefit}
Price Point: ${inputs.price}
Primary CTA Goal: ${inputs.ctaGoal}

Write complete, conversion-optimized landing page copy:

## Hero Section
## Problem Section
## Solution Bridge
## Benefits (5)
## Features (5)
## Social Proof Section
## FAQ (5 Questions)
## Final CTA Section
## SEO Meta Description`;

    case 'product-description':
      return `You are an eCommerce copywriter who writes product copy that sells.

Product Name: ${inputs.productName}
Category: ${inputs.category}
Key Features: ${inputs.features}
Target Customer: ${inputs.targetCustomer}
Platform: ${inputs.platform}
Tone: ${inputs.tone}

Generate complete product copy:

## SEO-Optimized Title
## Short Description (50-80 words)
## Long Description (200-250 words)
## Bullet Points (5)
## Meta Description
## Instagram/Facebook Caption
## Short Ad Copy (Facebook/Instagram)
## Suggested Alt Text`;

    case 'competitor-audit':
      return `You are a competitive intelligence analyst.

Your Business/Niche: ${inputs.yourBusiness}
Competitor Name: ${inputs.competitorName}
Competitor Bio/About: ${inputs.competitorBio}
Their Recent Posts/Content: ${inputs.recentPosts}
Platform: ${inputs.platform}

Generate a comprehensive competitive analysis:

## Competitor Overview
## Content Analysis
## Your Opportunity Map
## Immediate Actions (This Week)
## 90-Day Positioning Plan`;

    case 'bio-generator':
      return `You are an expert copywriter specialising in social media profiles and personal brand positioning. Generate compelling, platform-optimised bio options.

Name / Brand: ${inputs.name}
Platform: ${inputs.platform}
Role / What They Do: ${inputs.role}
Target Audience: ${inputs.audience}
Value / What They Help People Achieve: ${inputs.offer}
Personality / Tone: ${inputs.personality || 'Professional yet approachable'}

Generate bio options with EXACTLY these sections:

## Platform-Optimised Bio Options

### Option 1 — Direct and Value-Led
Write a bio that leads with the clear value for the audience. Stay within platform character limits (150 chars for Instagram/TikTok, 220 chars for LinkedIn summary line, 160 chars for X).

### Option 2 — Personality-Forward
Write a bio that leads with personality and tone, then value. Should feel distinctive and human.

### Option 3 — Keyword-Rich (best for discoverability)
Write a bio that front-loads the role keyword for platform search, includes the audience, and ends with a CTA or hook.

### Option 4 — Ultra-Short (for tight character limits)
A 60–80 character bio that works as a one-liner anywhere.

## Hashtag / Keyword Suggestions
List 8–10 hashtags or keywords relevant to this niche for discoverability in their platform's search.

## CTA Ideas for Bio Link
Give 3 link-in-bio CTA phrases they can use to drive clicks (e.g. "Free guide →", "Book a call →", "Shop now →").

Make each bio feel genuinely different — not just slight rewrites of the same sentence.`;

    case 'blog-title-generator':
      return `You are an expert SEO content strategist. Generate 10 high-performing blog title options that are keyword-targeted, click-worthy, and optimised for search intent.

Article Topic: ${inputs.topic}
Target Keyword: ${inputs.keyword || 'Not specified — infer from topic'}
Search Intent: ${inputs.intent}
Target Audience: ${inputs.audience}
Industry / Niche: ${inputs.industry || 'General'}

Generate titles with EXACTLY this structure:

## 10 Blog Title Options

For each title, provide:
- The title itself (bolded)
- Character count
- Brief note on why it works (keyword placement, intent match, click trigger)

### Titles 1–3: List / Roundup format
e.g. "X Best [Topic] for [Audience] in [Year]"

### Titles 4–6: How-to / Guide format
e.g. "How to [Achieve Result] Without [Common Pain]"

### Titles 7–8: Comparison / vs format
e.g. "[Option A] vs [Option B]: Which Is Better for [Audience]?"

### Titles 9–10: Question / Problem-aware format
e.g. "Why [Audience] Struggle With [Problem] (And What Actually Works)"

## Top 3 Recommended
Pick the 3 strongest titles with a one-sentence reason why each would perform well in search.

## H1 Variations
For the top recommended title, suggest 2 slightly adapted H1 versions that work better on-page while keeping the keyword.`;

    case 'instagram-caption':
      return `You are an expert Instagram content writer. Generate 5 ready-to-post Instagram captions that stop the scroll, deliver value, and drive action.

Business / Brand: ${inputs.businessName}
Post Type: ${inputs.postType}
Post Topic / Content: ${inputs.topic}
Target Audience: ${inputs.audience}
Brand Tone: ${inputs.tone}
Call-to-Action Goal: ${inputs.cta || 'Engage with the post / visit link in bio'}

Generate captions with EXACTLY this structure:

## 5 Instagram Caption Options

For each caption:
- A clear label (Caption 1, Caption 2, etc.) with a style descriptor (e.g. "Story-led", "Educational", "Punchy")
- The full caption text, formatted with line breaks as it would appear on Instagram
- Relevant hashtags at the end (5–8 targeted hashtags)
- Character count (excluding hashtags)

### Caption 1 — Hook-led (strong opening line that stops the scroll)
### Caption 2 — Story/narrative style (opens with a relatable situation)
### Caption 3 — Educational / value-first (starts with a tip or insight)
### Caption 4 — Bold/direct (short, punchy, no fluff)
### Caption 5 — Question-led (opens with a question that gets comments)

## Hashtag Bank
List 15–20 relevant hashtags (mix of niche-specific, mid-size, and broad) they can rotate across posts.

## CTA Variations
Give 5 different CTA phrases they can swap into any caption to test what drives the most action.

Make every caption feel authentic to the brand tone, not generic. Write as if you know the brand well.`;

    case 'generic':
      return `You are an expert AI assistant powering the "${inputs.toolName}" tool. Your task is to ${inputs.toolDescription}.

User Input:
${inputs.userInput}

Provide a comprehensive, high-quality, well-structured response. Use clear headings, bullet points, and sections where appropriate. Be specific, actionable, and practical. Tailor the output precisely to the user's input.`;

    default:
      throw new Error(`Unknown tool: ${tool}`);
  }
}

function buildTemplateFallback(tool: ToolType, inputs: Record<string, string>): string {
  switch (tool) {
    case 'brand-voice': {
      const { businessName = 'Your Business', description = 'products/services', audience = 'your target audience', personality = 'Professional, Trustworthy, Innovative', platform = 'Instagram', admiredBrands = '' } = inputs;
      const traits = personality.split(/[,;]/).map(t => t.trim()).filter(Boolean).slice(0, 5);
      while (traits.length < 5) traits.push(['Authentic', 'Reliable', 'Creative', 'Bold', 'Empathetic'][traits.length]);
      return `## Brand Personality

${traits.map((t, i) => `${i + 1}. **${t}** — ${businessName} communicates this by staying consistent across every touchpoint with ${audience}, ensuring the brand feels ${t.toLowerCase()} whether in a caption, ad, or customer reply.`).join('\n')}

## Tone of Voice

${businessName} speaks with a ${traits[0].toLowerCase()}, ${traits[1].toLowerCase()} voice that ${audience} immediately recognises and trusts. The communication style is clear and direct without being cold — every message should feel human and intentional. Content avoids jargon and filler, getting to the point quickly while still sounding like a brand people want to follow. On ${platform}, the tone skews slightly more ${platform === 'LinkedIn' ? 'professional and insight-driven' : 'conversational and personality-led'} while staying true to the core brand character.

## Words to Use (15 examples)

1. **${traits[0]}** — Core brand signal, use freely
2. **Transform** — Speaks to outcomes ${audience} want
3. **Proven** — Builds credibility around ${description}
4. **Effortless** — Communicates ease of experience
5. **Smart** — Appeals to the aspirations of ${audience}
6. **Results** — Focuses on what matters most
7. **Discover** — Creates curiosity and invites action
8. **Trusted** — Long-term brand credibility signal
9. **Seamless** — Removes perceived friction
10. **${traits[1]}** — Secondary personality anchor
11. **Community** — Fosters belonging among ${audience}
12. **Exclusive** — Creates value and desirability
13. **Simple** — Removes complexity from the decision
14. **Real** — Authenticity signal (works well with testimonials)
15. **Now** — Drives urgency without being pushy

## Words to Avoid (10 examples)

1. **Cheap** — Undermines the perceived value of ${description}
2. **Just** — Minimises what you offer ("just $X" devalues the product)
3. **Try** — Shows lack of confidence; use "start" or "get" instead
4. **Maybe** — Creates uncertainty; be direct
5. **Problems** — Negative framing; use "challenges" or "goals" instead
6. **Synergy** — Overused corporate filler
7. **Innovative** (overused) — Show it, don't say it
8. **World-class** — Unsubstantiated superlatives erode trust
9. **Honestly** — Implies dishonesty elsewhere
10. **Basic** — Conflicts with the premium brand positioning

## Example Captions (3 examples)

**Caption 1:**
The results don't lie. ${audience} who switch to ${businessName} see a real difference — and fast. Ready to find out what the difference looks like for you? → Link in bio.

**Caption 2:**
Most ${audience} are still doing this the hard way. ${businessName} was built so you don't have to. ${description ? `We handle ${description} so you can focus on what actually matters.` : 'Less friction. More results.'} Swipe to see how ↓

**Caption 3:**
${traits[0]}. ${traits[1]}. ${traits[2]}. That's the standard we hold ourselves to at ${businessName} — every single day. ${admiredBrands ? `Inspired by brands like ${admiredBrands}, built for ${audience}.` : `Built for ${audience} who expect more.`}

## Example Ad Copy (2 examples)

**Ad 1 — Benefit-led:**
Hook: What if ${description ? `getting the most from ${description}` : 'achieving your goal'} was actually this simple?
${businessName} gives ${audience} a smarter way to get results — without the guesswork, the wasted time, or the frustration. Join the people who've already made the switch.
CTA: Get Started Today →

**Ad 2 — Social proof:**
Hook: "I wish I'd found ${businessName} sooner." — A real ${audience} customer.
${description ? `When you need ${description}` : 'When results matter'}, the brand you choose matters. ${businessName} has helped thousands of ${audience} achieve [outcome]. Don't keep putting it off.
CTA: See What's Possible →

## Content Pillars (5 pillars)

### Pillar 1: Education & Value
**Purpose:** Establish ${businessName} as the go-to expert on ${description}
**Audience Value:** ${audience} gets actionable information they can use immediately
**Funnel Stage:** Awareness → Trust
**3 Specific Post Ideas:**
1. "5 things every ${audience} should know about [topic related to ${description}]"
2. Step-by-step guide to getting your best results
3. Common mistakes ${audience} make — and how to fix them

### Pillar 2: Behind the Scenes
**Purpose:** Humanise ${businessName} and build emotional connection
**Audience Value:** ${audience} gets transparency and authenticity
**Funnel Stage:** Trust
**3 Specific Post Ideas:**
1. How ${description} gets made / delivered at ${businessName}
2. A day in the life of the team
3. The story behind why ${businessName} was built

### Pillar 3: Customer Success
**Purpose:** Convert trust into purchase intent through proof
**Audience Value:** ${audience} sees themselves in the success stories
**Funnel Stage:** Trust → Conversion
**3 Specific Post Ideas:**
1. Customer testimonial with before/after narrative
2. "Why [customer type] chose ${businessName} over alternatives"
3. Results breakdown: what changed in 30/60/90 days

### Pillar 4: Inspiration & Motivation
**Purpose:** Build emotional resonance with ${audience}
**Audience Value:** Relevant insights and energy that keeps them following
**Funnel Stage:** Awareness → Trust
**3 Specific Post Ideas:**
1. Quote or insight that speaks directly to ${audience}'s biggest goal
2. Reframe of a common frustration into an opportunity
3. "This is what success looks like for ${audience}"

### Pillar 5: Product/Service Features
**Purpose:** Convert warm followers into customers
**Audience Value:** Clear understanding of what ${businessName} offers
**Funnel Stage:** Conversion
**3 Specific Post Ideas:**
1. Feature spotlight with a specific use case for ${audience}
2. "Here's exactly what you get" — full breakdown post
3. FAQ-style post answering the top 3 objections`;
    }

    case 'social-calendar': {
      const { businessType = 'Business', audience = 'target audience', goal = 'grow brand awareness', platform = 'Instagram', frequency = '5 times per week' } = inputs;
      return `## Strategy Overview

This 30-day calendar is built around ${goal} for ${businessType}. The content mix balances value-driven posts with conversion-focused content, optimised for ${platform}'s algorithm and designed to resonate with ${audience}. Posting at ${frequency} keeps the brand consistently visible without over-saturating the feed.

## Content Mix

- **40% Educational/Value** — Builds authority and keeps ${audience} coming back
- **30% Entertainment/Personality** — Increases shares, saves, and reach
- **20% Promotional** — Converts engaged followers into customers
- **10% User-Generated/Community** — Builds social proof and loyalty

## Week 1 (Days 1–7)

**Day 1** | Format: Carousel | Topic: Who We Are & What We Do
Hook: "If you're a [${audience}], this is for you →" | Introduce ${businessType}, the mission, and what ${audience} gains from following.

**Day 2** | Format: Reel | Topic: Quick Win Tip
Hook: "[Quick result] in under 60 seconds" | Short, punchy educational reel that delivers instant value.

**Day 3** | Format: Static Post | Topic: Relatable Frustration
Hook: "Why does [common problem for ${audience}] always happen at the worst time?" | Opens a conversation and drives comments.

**Day 4** | Format: Story (poll + link) | Topic: Audience Question
Ask ${audience} which content they want to see more of. Use results to inform Week 2.

**Day 5** | Format: Carousel | Topic: Educational Deep Dive
Hook: "5 things most ${audience} don't know about [topic]" | 5-slide swipeable guide.

**Day 6** | Format: Static Post | Topic: Testimonial or Quote
Feature a real result or an inspiring quote relevant to ${goal}.

**Day 7** | Format: Reel | Topic: Behind the Scenes
Hook: "Here's what actually goes into [product/service] →" | Humanises the brand.

## Week 2 (Days 8–14)

**Day 8** | Format: Carousel | Topic: Myth vs Reality
Hook: "Everything you've been told about [topic] is wrong." | Debunk 3 common myths.

**Day 9** | Format: Reel | Topic: Product/Service Spotlight
Hook: "This changed how we [outcome]" | Feature one specific aspect of the offering.

**Day 10** | Format: Static Post | Topic: Engagement Prompt
Hook: "Drop a 🙋 if this sounds like you…" | Drives comments and boosts algorithmic reach.

**Day 11** | Format: Carousel | Topic: How-To Guide
Hook: "How to [achieve result relevant to ${audience}] — step by step" | 6-8 slides.

**Day 12** | Format: Story | Topic: Polls & Q&A
Use interactive Stories to collect questions for a future FAQ post.

**Day 13** | Format: Static Post | Topic: Milestone or Achievement
Share a win, a number, or a milestone that builds credibility with ${audience}.

**Day 14** | Format: Reel | Topic: Week-in-Review or Summary
Hook: "The week in 60 seconds" | Quick recap of key content or a fun moment.

## Week 3 (Days 15–21)

**Day 15** | Format: Carousel | Topic: Comparison Post
Hook: "[Option A] vs [Option B]: which one actually works for ${audience}?" | Data-backed comparison.

**Day 16** | Format: Reel | Topic: Trending Audio + Value
Pair a trending sound with an educational tip or transformation.

**Day 17** | Format: Static Post | Topic: Promotion or Offer
Announce a specific offer, promotion, or reason to buy now.

**Day 18** | Format: Carousel | Topic: FAQ Answers
Answer the 5 most common questions from ${audience}. Great for saves.

**Day 19** | Format: Story | Topic: Behind-the-Scenes
Informal, real-time look at operations, people, or process.

**Day 20** | Format: Reel | Topic: Transformation Story
Hook: "Before ${businessType} vs after" — visual or narrative transformation.

**Day 21** | Format: Static Post | Topic: Community Shoutout
Feature or celebrate a ${audience} member, customer, or follower.

## Week 4 (Days 22–30)

**Day 22** | Format: Carousel | Topic: Monthly Roundup
Hook: "The best [topic] content this month — all in one place" | Repurpose top content.

**Day 23** | Format: Reel | Topic: Quick Product Demo
30-second, visual showcase of a key feature or result.

**Day 24** | Format: Static Post | Topic: Thought Leadership
Bold opinion or prediction relevant to ${audience}'s world.

**Day 25** | Format: Story | Topic: Limited Offer or Countdown
Create urgency around a promotion or upcoming event.

**Day 26** | Format: Carousel | Topic: Case Study
Walk through a real result achieved for or by ${audience}.

**Day 27** | Format: Reel | Topic: "Did you know?" Fact
Surprising stat or insight relevant to ${goal}.

**Day 28** | Format: Static Post | Topic: Personal Story
Founder or team story that connects emotionally with ${audience}.

**Day 29** | Format: Carousel | Topic: Tips & Checklist
A highly saveable "checklist for ${audience}" post.

**Day 30** | Format: Reel | Topic: Month Recap + CTA
Celebrate 30 days and drive action: follow, visit link, book, buy.

## Hashtag Strategy

**Large (1M+ posts):** #${platform.replace(/\s/g,'')} #ContentCreator #Marketing #SmallBusiness #Entrepreneur

**Medium (100K–1M):** #${businessType.replace(/\s/g,'')}Life #${audience.replace(/\s/g,'')}Tips #ContentMarketing #GrowthHacking #BrandBuilding

**Niche (under 100K):** #${goal.replace(/\s/g,'')} #${businessType.replace(/\s/g,'')}Community #${platform}Strategy #NicheMarketing #${audience.replace(/\s/g,'')}Goals

## Engagement Tactics

1. **Reply within 60 minutes** — The first hour after posting is critical for ${platform} reach; reply to every comment promptly.
2. **Use interactive Stories daily** — Polls, questions, and sliders drive micro-engagement that feeds the main feed algorithm.
3. **Save-worthy content** — Design every carousel to be saved, not just liked. Saves signal high value to the algorithm.
4. **Collaborate with aligned accounts** — One collab post per week with a complementary ${businessType} can double your reach instantly.`;
    }

    case 'content-pillars': {
      const { niche = 'your niche', audience = 'your audience', goals = 'grow brand awareness and drive conversions', pillars = '5' } = inputs;
      const pillarsCount = parseInt(pillars) || 5;
      const pillarNames = ['Education & Expertise', 'Behind the Scenes', 'Community & Social Proof', 'Inspiration & Motivation', 'Product & Offers', 'Industry Trends', 'FAQs & Objections'].slice(0, pillarsCount);

      const pillarBlocks = pillarNames.map((name, i) => `### Pillar ${i + 1}: ${name}
**Purpose:** ${['Build authority and trust in the ${niche} space', 'Humanise the brand and create emotional connection', 'Build social proof and foster belonging among ${audience}', 'Energise ${audience} and connect emotionally to the brand mission', 'Convert engaged followers into paying customers', 'Position the brand as a thought leader in ${niche}', 'Address doubts and move ${audience} closer to conversion'][i]}
**Audience Value:** ${['Actionable knowledge they can use immediately', 'Transparency and authenticity they can trust', 'Recognition and community they want to be part of', 'Inspiration and clarity aligned with their goals', 'Clear reasons to choose this brand over alternatives', 'Fresh, relevant insights they can not get elsewhere', 'Confidence and answers before they need to ask'][i]}
**Funnel Stage:** ${['Awareness → Trust', 'Trust', 'Trust → Conversion', 'Awareness → Trust', 'Conversion', 'Awareness', 'Trust → Conversion'][i]}

**10 Specific Post Ideas:**
1. "The beginner's guide to [topic in ${niche}]"
2. "5 things every ${audience} should know about [subtopic]"
3. "The biggest myth in ${niche} — debunked"
4. "How to get started with [specific task] in under 10 minutes"
5. "What nobody tells ${audience} about [topic]"
6. "[Number] tools/resources every ${audience} needs"
7. "Step-by-step: how to [achieve result] the right way"
8. "Why [common approach] doesn't work — and what does"
9. "The checklist every ${audience} needs before [action]"
10. "Quick tip: [single actionable insight for ${audience}]"

**Best Formats:** Carousel (educational steps), Reel (quick tips), Static (quotes/stats)`).join('\n\n');

      return `## Strategy Overview

This content pillar framework is designed specifically for ${niche}, targeting ${audience} with the goal of ${goals}. The ${pillarsCount} pillars work together to cover every stage of the customer journey — from first impression to loyal advocate. Each pillar serves a distinct purpose while reinforcing a consistent brand identity.

## Content Pillars

${pillarBlocks}

## Content Mix Recommendation

**Weekly posting split (based on ${pillarsCount} pillars):**
- Pillar 1 (Education): 2× per week — highest value, drives saves and shares
- Pillar 2 (BTS): 1× per week — humanises the brand, boosts trust
- Pillar 3 (Community): 1× per week — drives comments and engagement
- Remaining pillars: rotate 1–2× per week based on your goals for the month

## Content Calendar Integration

**Monday:** Education/Expertise pillar — start the week with value
**Tuesday:** Behind the Scenes — build connection mid-week
**Wednesday:** Community/Social Proof — peak engagement day on most platforms
**Thursday:** Product/Offers or Industry Trends
**Friday:** Inspiration — end the week on a high note
**Weekend:** Light content, Stories, or community engagement

## Quick Wins — 5 Posts to Create This Week

1. **"[Number] things every ${audience} needs to know about ${niche}"** — write a 5-slide carousel with one actionable tip per slide
2. **Behind the scenes of [your process]** — film a 30-second Reel showing how you work
3. **Customer result spotlight** — share a specific outcome achieved by a real ${audience} member
4. **Myth-busting post** — pick the most common misconception in ${niche} and debunk it clearly
5. **"Save this if you're a ${audience}"** — a practical checklist or resource post they'll bookmark`;
    }

    case 'hook-generator': {
      const { topic = 'your topic', platform = 'Instagram', angle = 'educational', audience = 'your audience' } = inputs;
      return `## Pain-Point Hooks (3)

**1.** "If you're a ${audience} still doing [common struggle related to ${topic}] the old way, this will change your approach completely."
*Psychological trigger: Problem recognition + promise of relief* 🔥 High

**2.** "The reason most ${audience} fail at ${topic} has nothing to do with effort — and everything to do with this one mistake."
*Psychological trigger: Curiosity + reframing blame* 🔥 High

**3.** "Nobody warned me how much time I'd waste on ${topic} before I found this."
*Psychological trigger: Shared frustration + empathy* ⚡ Medium

## Curiosity & Open Loop Hooks (3)

**4.** "There's a reason the best ${audience} always [specific behaviour related to ${topic}] — and it's not what you think."
*Psychological trigger: Curiosity gap + authority* 🔥 High

**5.** "I tested [approach] with ${topic} for 30 days. Here's what actually happened →"
*Psychological trigger: Experiment curiosity + data promise* 🔥 High

**6.** "Most people skip step 3 when it comes to ${topic}. That's where everything goes wrong."
*Psychological trigger: Open loop + fear of missing out* ⚡ Medium

## Bold Statement Hooks (3)

**7.** "Everything you've been taught about ${topic} is making it harder, not easier."
*Psychological trigger: Pattern interrupt + contrarianism* 🔥 High

**8.** "${topic} doesn't have to take [time/effort]. Here's proof."
*Psychological trigger: Bold claim + promise of evidence* ⚡ Medium

**9.** "The ${audience} who master ${topic} in ${new Date().getFullYear()} will have an unfair advantage. Here's why."
*Psychological trigger: FOMO + aspiration* 🔥 High

## Story Hooks (3)

**10.** "Six months ago I knew nothing about ${topic}. This is what I learned the hard way so you don't have to."
*Psychological trigger: Transformation arc + empathy* 🔥 High

**11.** "I was about to give up on ${topic} entirely. Then I tried this."
*Psychological trigger: Vulnerability + redemption* ⚡ Medium

**12.** "The conversation that completely changed how I think about ${topic} for ${audience}."
*Psychological trigger: Curiosity + story promise* ⚡ Medium

## Result & Transformation Hooks (3)

**13.** "Here's how ${audience} are achieving [specific result] with ${topic} — faster than they expected."
*Psychological trigger: Social proof + aspiration* 🔥 High

**14.** "From zero to [measurable result] with ${topic} — the exact steps I used."
*Psychological trigger: Transformation + specificity* 🔥 High

**15.** "What changed when I stopped overthinking ${topic} and just did this instead."
*Psychological trigger: Simplicity + action bias* ⚡ Medium

## Bonus: 5 Headline-Style Hooks for Carousels/Ads

1. **"The ${topic} Formula That's Helping ${audience} Get Real Results"**
2. **"Why Most ${audience} Struggle With ${topic} (And What Actually Works)"**
3. **"${topic} in ${new Date().getFullYear()}: The Complete Guide for ${audience}"**
4. **"Stop Guessing at ${topic} — Here's the Exact System That Works"**
5. **"The ${angle} Approach to ${topic} Every ${audience} Needs to Know"**`;
    }

    case 'ad-copy': {
      const { product = 'your product', description = 'helps you achieve your goals', audience = 'your audience', painPoint = 'a common challenge', offer = 'a special offer', platform = 'Facebook' } = inputs;
      return `## Ad 1: Emotional / Story Angle

**Hook:** "I used to [struggle with ${painPoint}]. Then I found ${product}."

**Primary Text:**
For so long, ${audience} have been told that [solving ${painPoint}] takes [time/money/effort]. That was our story too — until we built ${product}.

${description}. No fluff, no overwhelm. Just the outcome you actually want.

Real ${audience} are seeing real results. And right now, ${offer}.

**Headline:** Finally — A Solution Built for ${audience}

**CTA:** Learn More

**Why it works:** Opens with a relatable struggle, positions the product as the solution, adds social proof, and closes with a specific offer. The emotional arc moves from pain → relief → proof → action.

---

## Ad 2: Direct-Response / Benefit Angle

**Hook:** "If you're a ${audience} dealing with ${painPoint}, read this."

**Primary Text:**
${product} ${description}. Here's what that means for you:

✅ [Primary benefit — time saved, results achieved, stress removed]
✅ [Secondary benefit — ease, clarity, confidence]
✅ [Tertiary benefit — social proof, credibility, community]

No learning curve. No complicated setup. Just results from day one.

${offer}. Offer ends soon.

**Headline:** ${product}: Built for ${audience} Who Want Results

**CTA:** Shop Now / Get Started

**Why it works:** Leads with audience identification, delivers benefits in a scannable format, pre-empts objections, and adds urgency with a time-limited offer.

---

## Ad 3: Problem / Agitate / Solution Angle

**Hook:** "Why does ${painPoint} keep happening — even when you're doing everything right?"

**Primary Text:**
It's not your fault. Most ${audience} struggle with ${painPoint} because the standard advice doesn't account for [root cause]. You keep trying harder, but the results don't match the effort.

Here's the truth: you don't need to work harder. You need the right tool.

${product} ${description}. Thousands of ${audience} have already made the switch — and they're not going back.

${offer}. Try it now, risk-free.

**Headline:** Stop Fighting ${painPoint}. Start Using ${product}.

**CTA:** Try Risk-Free

**Why it works:** Classic PAS framework — identifies, amplifies, then solves. The "it's not your fault" line releases resistance and opens the audience to the solution.

---

## 5 Headline A/B Test Variations

1. "${product}: The [Benefit] Solution for ${audience}"
2. "Finally — [Solve ${painPoint}] Without [Common Sacrifice]"
3. "Join [X] ${audience} Who've Switched to ${product}"
4. "${offer} — Don't Miss This"
5. "${audience}: Here's the [Benefit] You've Been Looking For"

## ${platform}-Specific Tips

1. **Visual-first creative:** On ${platform}, the image or video must stop the scroll before copy does. Lead with an emotion-evoking visual that represents the before (pain) or after (result).
2. **Keep primary text front-loaded:** Most ${platform} users don't click "see more" — get your hook and key benefit into the first 125 characters.
3. **Test multiple headlines:** The headline is often the highest-leverage variable on ${platform}. Run 3–5 variations simultaneously to find the winner quickly.
4. **Retargeting layer:** Re-run Ad 1 (story angle) to people who engaged with Ads 2 or 3. Emotional stories convert warmer audiences better than direct-response.`;
    }

    case 'marketing-strategy': {
      const { businessType = 'Business', product = 'product/service', audience = 'target audience', budget = '$1,000/month', goal = 'grow revenue', channels = 'None currently', timeline = '90 days' } = inputs;
      return `## Executive Summary

This ${timeline} marketing strategy for ${businessType} is focused on ${goal}. The plan prioritises high-ROI channels for a ${budget} monthly budget, targeting ${audience} across both organic and paid touchpoints. Success is measured by [primary KPI] and tracked weekly to allow rapid optimisation.

## Target Audience Deep-Dive

**Primary Audience:** ${audience}

**Demographics:** [Age range], professionals/consumers interested in ${product}

**Psychographics:**
- Core desire: [Primary outcome they want]
- Core frustration: [Primary pain point they have]
- Buying triggers: Social proof, value clarity, ease of access
- Objections to overcome: Price, trust, time-to-value

**Where they spend time online:** ${channels !== 'None currently' ? channels : 'Social media, search engines, email'}

## Positioning Statement

For ${audience} who struggle with [pain point], ${businessType} offers ${product} that delivers [primary benefit] — unlike alternatives which [key differentiator]. We exist to [mission statement].

## Recommended Channels (Prioritised by ROI for ${budget}/month)

**Priority 1: Organic Content (${budget === '$0' || !budget ? 'Free' : 'Low cost'})**
- Platform: ${channels !== 'None currently' ? channels.split(',')[0] : 'Instagram or LinkedIn'}
- Frequency: 3–5 posts/week
- Focus: Educational content that builds trust with ${audience}
- Time to results: 60–90 days

**Priority 2: Email Marketing (Low cost, high ROI)**
- Build a list via a lead magnet relevant to ${audience}
- Weekly newsletter: value-first, occasional promotion
- Time to results: 30–45 days

**Priority 3: Paid Social/Search (Scales with budget)**
- Allocate 30–40% of ${budget} to paid ads after organic validation
- Test 3 ad creatives before scaling
- Time to results: 14–21 days

## Content Strategy

**Content pillars (3 core themes):**
1. **Education** — Help ${audience} understand/solve [core problem] (40% of content)
2. **Proof** — Case studies, testimonials, results for ${product} (30% of content)
3. **Conversion** — Direct calls to action, offers, product features (30% of content)

**Content formats:** Short-form video, carousels, email newsletters, blog/SEO content

**Publishing cadence:** Daily on primary platform, 3× per week on secondary, weekly email

## ${timeline} Action Plan

**Month 1 — Foundation**
- Week 1: Audit existing assets, set up analytics, define content pillars
- Week 2: Create 30 days of content in batch, schedule first 2 weeks
- Week 3: Launch organic content strategy, begin list building
- Week 4: Review Week 1–2 performance, double down on what worked

**Month 2 — Growth**
- Launch lead magnet and email sequence
- Begin paid testing with $[portion of budget] on top-performing organic content
- Establish weekly content rhythm with ${audience} engagement

**Month 3 — Optimisation**
- Scale paid channels based on Week 4–8 data
- Launch referral or loyalty programme for existing customers
- Review ${timeline} goals and plan next quarter

## KPIs & Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| Reach/Impressions | +30% month-over-month | Platform analytics |
| Email subscribers | +200/month | Email platform |
| Conversion rate | [X]% | Website analytics |
| CAC (Cost per Acquisition) | Under $[X] | Ad platform data |
| Revenue from marketing | ${goal} | CRM/Sales data |

## Quick Wins (First 2 Weeks)

1. **Post a "who we are" piece** — Introduce ${businessType} to ${audience} with a clear value prop (carousel or video)
2. **Set up a lead magnet** — Offer a free [resource] in exchange for an email address; promote it everywhere
3. **Reach out to 10 potential partners** — Find complementary businesses serving ${audience} for cross-promotion
4. **Run a poll/question** — Ask ${audience} what their biggest challenge is with [topic]; use responses to inform content`;
    }

    case 'landing-page-copy': {
      const { product = 'your product', description = 'helps you achieve your goals', audience = 'your audience', benefit = 'the primary outcome', price = '', ctaGoal = 'sign up' } = inputs;
      return `## Hero Section

**Headline:** ${benefit} — Without the Guesswork

**Subheadline:** ${product} ${description}. Designed for ${audience} who are ready to get real results.

**CTA Button:** ${ctaGoal.charAt(0).toUpperCase() + ctaGoal.slice(1)} ${price ? `— Starting at ${price}` : 'Free'}

**Supporting proof line:** Trusted by [X]+ ${audience} worldwide

---

## Problem Section

**Headline:** You're doing everything right. So why isn't it working?

Most ${audience} face the same frustrations:
- ❌ [Pain point 1 — time wasted, money lost, frustration]
- ❌ [Pain point 2 — complexity, confusion, overwhelm]
- ❌ [Pain point 3 — results that don't match the effort invested]

The problem isn't you. It's the tools and methods that weren't built for ${audience} like you.

---

## Solution Bridge

**Headline:** Introducing ${product} — built specifically for ${audience}.

${description}. We've taken everything ${audience} need and removed everything they don't. The result is the fastest, clearest path to ${benefit}.

---

## Benefits (5)

1. **[Benefit 1]** — [One-sentence explanation of how this helps ${audience}]
2. **[Benefit 2]** — [One-sentence explanation; focus on outcome, not feature]
3. **[Benefit 3]** — [One-sentence explanation; address a specific pain point]
4. **[Benefit 4]** — [One-sentence explanation; speak to time or effort saved]
5. **[Benefit 5]** — [One-sentence explanation; build confidence in the result]

---

## Features (5)

1. **[Feature 1]** — [What it does + why it matters to ${audience}]
2. **[Feature 2]** — [Technical detail with a clear user benefit]
3. **[Feature 3]** — [Unique differentiator from alternatives]
4. **[Feature 4]** — [Integration, compatibility, or ease-of-use detail]
5. **[Feature 5]** — [Support, guarantee, or reliability feature]

---

## Social Proof Section

**Headline:** Real ${audience}. Real Results.

> "Since using ${product}, I've [achieved specific result]. I wish I'd found it sooner."
> — [Customer Name], [Role/Location]

> "${product} ${description}. It's exactly what I needed."
> — [Customer Name], [Role/Location]

> "I was sceptical at first, but [specific result] in [timeframe] changed my mind completely."
> — [Customer Name], [Role/Location]

**Stats:** [X]+ users | [X]% customer satisfaction | [X]+ [results achieved]

---

## FAQ (5 Questions)

**Q: Is ${product} right for me if I'm a [beginner/specific type of ${audience}]?**
A: Yes. ${product} was designed with ${audience} in mind at every stage. Whether you're just starting out or looking to [improve existing results], you'll find it intuitive from day one.

**Q: How long until I see results?**
A: Most ${audience} start seeing [initial result] within [timeframe]. Full results typically appear within [longer timeframe], depending on [factor].

**Q: What happens if it doesn't work for me?**
A: We stand behind ${product} completely. [Describe guarantee — money-back, free trial, etc.] No questions asked.

**Q: How is ${product} different from [common alternative]?**
A: While alternatives focus on [feature], ${product} is built specifically to deliver ${benefit} for ${audience}. [Specific differentiator].

**Q: ${price ? `What's included at ${price}?` : 'Is there a free option?'}**
A: ${price ? `At ${price}, you get [full feature list]. No hidden fees, no surprise charges.` : 'Yes. Start free with [free tier], and upgrade anytime as your needs grow.'}

---

## Final CTA Section

**Headline:** The results you want are closer than you think.

Stop waiting for the right moment. ${audience} who start today are seeing [result] within [timeframe].

**CTA Button:** ${ctaGoal.charAt(0).toUpperCase() + ctaGoal.slice(1)} Now ${price ? `— ${price}` : '— Free to Start'}

**Risk reversal:** [Guarantee statement — 30-day money back, free trial, cancel anytime]

---

## SEO Meta Description

${product}: ${description}. Built for ${audience} looking to achieve ${benefit}. ${price ? `Starting from ${price}.` : 'Free to get started.'} Join [X]+ ${audience} already getting results.`;
    }

    case 'product-description': {
      const { productName = 'Product', category = 'General', features = 'key features', targetCustomer = 'customers', platform = 'eCommerce', tone = 'professional' } = inputs;
      return `## SEO-Optimised Title

${productName} — [Primary Keyword] for ${targetCustomer} | [Key Benefit]

---

## Short Description (50–80 words)

${productName} is the ${category} solution built for ${targetCustomer} who want [primary outcome]. Featuring ${features}, it delivers [key benefit] without [common frustration]. Whether you're [use case 1] or [use case 2], ${productName} is designed to [achieve result]. ${tone === 'playful' ? 'No fuss, just results.' : 'Engineered for performance, built for reliability.'} Trusted by [X]+ ${targetCustomer} worldwide.

---

## Long Description (200–250 words)

**The ${category} Built Around You**

${targetCustomer} know that [common challenge in ${category}] can make all the difference. That's exactly why ${productName} was designed from the ground up to solve [core problem] without compromise.

${features}. Each element has been carefully considered to ensure ${targetCustomer} get the best possible experience from the moment they [first interaction] to [ongoing use].

**Why ${targetCustomer} Choose ${productName}:**

Unlike standard ${category} options that [shortcoming], ${productName} delivers [key differentiator]. The result? [Measurable outcome 1] and [measurable outcome 2] — exactly what ${targetCustomer} need to [achieve goal].

The ${tone} design means it fits naturally into [use context], while the [standout feature from ${features}] ensures [ongoing benefit]. Whether you're a first-time buyer or a loyal customer upgrading, you'll notice the difference immediately.

Join the growing community of ${targetCustomer} who've made ${productName} their go-to ${category}. [Social proof statement — e.g. "Rated 4.8/5 by X+ verified buyers."]

---

## Bullet Points (5)

• **[Primary Feature]:** [Benefit-focused description in one line for ${targetCustomer}]
• **[Secondary Feature from ${features}]:** [How it solves a specific ${targetCustomer} problem]
• **[Design/Quality Feature]:** [Why it's built to last or perform]
• **[Ease of Use]:** [No setup, no learning curve — [result] from day one]
• **[Trust/Guarantee]:** [Risk-reversal statement — returns, warranty, satisfaction guarantee]

---

## Meta Description

Buy ${productName} — the top-rated ${category} for ${targetCustomer}. Features ${features}. [Key benefit]. Ships fast. [Guarantee statement]. Shop now.

---

## Instagram/Facebook Caption

Meet ${productName} 🎯 The ${category} that actually delivers for ${targetCustomer}. ${features.split(',')[0] || 'Built for performance'}. [Key benefit]. Link in bio to shop — limited stock available.

---

## Short Ad Copy (Facebook/Instagram)

**Hook:** If you're a ${targetCustomer} still using [inferior alternative], this will change your mind.
**Body:** ${productName} ${features ? `features ${features.split(',')[0]}` : 'is built differently'} — and ${targetCustomer} notice the difference immediately. [Key benefit]. Limited availability.
**CTA:** Shop ${productName} →

---

## Suggested Alt Text

"${productName} — ${category} product for ${targetCustomer}, showing [describe key visual element, e.g. front view on white background]"`;
    }

    case 'competitor-audit': {
      const { yourBusiness = 'Your Business', competitorName = 'Competitor', competitorBio = '', recentPosts = '', platform = 'Instagram' } = inputs;
      return `## Competitor Overview

**Competitor:** ${competitorName}
**Platform Analysed:** ${platform}
**Analysis Summary:** ${competitorBio || `${competitorName} operates in the same space as ${yourBusiness} and targets a similar audience.`}

**Follower/Audience Signals:** Based on their bio and positioning, ${competitorName} appears to target [audience type] with a focus on [core value proposition]. Their account signals [growth stage — established/growing/new].

**Key Positioning:** ${competitorBio ? `Their bio emphasises: "${competitorBio.slice(0, 100)}${competitorBio.length > 100 ? '...' : ''}"` : `${competitorName} positions around [inferred positioning from available data].`}

---

## Content Analysis

**Recent Content Patterns:**
${recentPosts ? `Based on their recent posts: "${recentPosts.slice(0, 200)}${recentPosts.length > 200 ? '...' : ''}"` : `${competitorName}'s content on ${platform} follows observable patterns in this niche.`}

**What's working for them:**
- ✅ [Content type 1] — appears to drive strong engagement based on format signals
- ✅ Consistent posting cadence — signals investment in the channel
- ✅ [Positioning angle] — resonates with their audience segment
- ✅ [Visual/brand element] — creates recognisable brand presence

**Gaps and weaknesses observed:**
- ⚠️ Limited [content type they're missing] — an opportunity for ${yourBusiness}
- ⚠️ [Engagement gap or response weakness]
- ⚠️ No visible [feature/asset — e.g. lead magnet, community, etc.]
- ⚠️ [Tone or messaging gap you can exploit]

**Estimated engagement style:** [High volume / Niche / Community-driven]

---

## Your Opportunity Map

**Differentiation angles ${yourBusiness} can own:**

1. **[Positioning gap #1]** — ${competitorName} doesn't visibly address [topic]. ${yourBusiness} can own this angle by [approach].

2. **[Content gap #2]** — There's no evidence of [content format/topic] in their strategy. This is high-value for your audience and a clear white space.

3. **[Audience segment they're ignoring]** — Their content seems to target [segment A]; ${yourBusiness} can serve [segment B or underserved segment] with content specifically for them.

4. **[Tone or style differentiation]** — If ${competitorName} skews [formal/casual/salesy], ${yourBusiness} can win loyalty by being [contrasting tone].

5. **[Trust or proof gap]** — If they lack visible social proof, customer stories, or transparency, ${yourBusiness} can lead on this dimension immediately.

---

## Immediate Actions (This Week)

1. **Audit their top 9 posts** — screenshot their grid; identify which formats get the most engagement and note the themes
2. **Create your differentiation statement** — in one sentence, articulate why ${yourBusiness} is the better choice for [audience ${competitorName} is targeting]
3. **Post on their weak spots** — create one piece of content specifically addressing [gap identified above]
4. **Engage with their audience** — find comments from dissatisfied or curious followers and respond helpfully (without badmouthing ${competitorName})
5. **Document the audit** — record what you found today so you can track how ${competitorName} evolves over the next 90 days

---

## 90-Day Positioning Plan

**Days 1–30: Establish your differentiation**
- Develop 3 content series that specifically address the gaps identified in this audit
- Be visible where ${competitorName} is absent (community forums, collab content, underserved content topics)
- Build a lead magnet or offer that serves the audience ${competitorName} is overlooking

**Days 31–60: Win the comparison**
- Create side-by-side comparison content (feature, value, approach) that positions ${yourBusiness} as the logical choice
- Collect and publish customer stories that speak directly to [${competitorName}'s weaknesses]
- Start targeting [specific audience segment] with paid content if budget allows

**Days 61–90: Consolidate and scale**
- Double down on the content formats and topics where you're outperforming ${competitorName}
- Launch a referral or community initiative that builds loyalty ${competitorName} can't easily replicate
- Reassess: which of their audience members are now following or engaging with ${yourBusiness}?`;
    }

    case 'bio-generator': {
      const { name = 'Your Name', platform = 'Instagram', role = 'your role', audience = 'your audience', offer = 'what you help people achieve', personality = 'Professional yet approachable' } = inputs;
      const charLimits: Record<string, number> = { Instagram: 150, TikTok: 150, LinkedIn: 220, X: 160, Twitter: 160 };
      const limit = charLimits[platform] || 150;
      return `## Platform-Optimised Bio Options

### Option 1 — Direct and Value-Led
*(${limit} character limit for ${platform})*

**${name} | ${role} | Helping ${audience} ${offer}. [CTA — link below or DM me]**

*Character note:* Keep this under ${limit} chars. Front-load the role keyword for search, and make the value to ${audience} unmistakably clear.

---

### Option 2 — Personality-Forward

**${personality.split(',')[0] || 'Creative'} ${role} helping ${audience} ${offer} — without [common obstacle]. ${name}. [CTA]**

*Why it works:* Opens with a personality signal before the value prop. Feels human and distinctive rather than resume-like.

---

### Option 3 — Keyword-Rich (Best for Discoverability)

**${role} for ${audience} | ${offer} | ${platform === 'Instagram' ? '#' : ''}${role.replace(/\s/g, '')} | [CTA — link in bio]**

*Why it works:* Front-loads the exact keyword ${audience} use to search for someone like ${name}. Strong for ${platform} search and discovery.

---

### Option 4 — Ultra-Short (60–80 characters)

**${role}. Helping ${audience} ${offer.split(' ').slice(0, 5).join(' ')}.**

*Use case:* Works as a one-liner on any platform, in email signatures, or anywhere character space is tight.

---

## Hashtag / Keyword Suggestions

For discoverability on ${platform}, use a mix of these in posts and (where applicable) bio:

1. #${role.replace(/\s/g, '')}
2. #${audience.replace(/\s/g, '')}Tips
3. #${role.replace(/\s/g, '')}Life
4. #${offer.split(' ').slice(0, 2).join('').replace(/[^a-zA-Z]/g, '')}
5. #${platform}Creator
6. #${role.replace(/\s/g, '')}Community
7. #${audience.replace(/\s/g, '')}Goals
8. #${offer.split(' ').slice(0, 1).join('').replace(/[^a-zA-Z]/g, '')}Expert
9. #${platform}Growth
10. #${role.replace(/\s/g, '')}Coach

---

## CTA Ideas for Bio Link

Use one of these to maximise clicks from your ${platform} bio link:

1. "Get [free resource] →" *(high-value, low-friction)*
2. "Work with ${name} →" *(direct, for service providers)*
3. "[Offer or result] — start here →" *(outcome-focused, high intent)*`;
    }

    case 'blog-title-generator': {
      const { topic = 'your topic', keyword = '', intent = 'informational', audience = 'readers', industry = 'General' } = inputs;
      const kw = keyword || topic;
      return `## 10 Blog Title Options

### Titles 1–3: List / Roundup Format

**1. "10 Best ${topic} Strategies for ${audience} in ${new Date().getFullYear()}"**
*Characters: ~${50 + topic.length + audience.length}* | Targets "${kw}" with list format (high CTR), signals freshness with year, matches informational intent.

**2. "${topic}: The ${audience} Guide to [Specific Result] (With Examples)"**
*Characters: ~${55 + topic.length + audience.length}* | Audience-qualified, example promise increases clicks, keyword-front-loaded.

**3. "The Top [X] ${topic} Tools Every ${audience} Should Know in ${new Date().getFullYear()}"**
*Characters: ~${58 + topic.length + audience.length}* | Resource-list format drives saves and bookmarks; high perceived value.

### Titles 4–6: How-To / Guide Format

**4. "How to ${topic}: The Step-by-Step Guide for ${audience}"**
*Characters: ~${52 + topic.length + audience.length}* | Classic how-to format, clear intent match, actionable promise.

**5. "How to ${topic} Without [Common Sacrifice] — A ${audience} Playbook"**
*Characters: ~${60 + topic.length + audience.length}* | "Without" construction directly addresses the #1 objection in the niche.

**6. "The Beginner's Guide to ${topic}: Everything ${audience} Need to Know"**
*Characters: ~${60 + topic.length + audience.length}* | Low-competition angle if ${industry} has sophisticated content; high search volume from new entrants.

### Titles 7–8: Comparison / vs Format

**7. "[Option A] vs [Option B] for ${topic}: Which Is Better for ${audience}?"**
*Characters: ~${58 + topic.length + audience.length}* | Comparison format targets high-intent searchers who are close to a decision.

**8. "${topic}: [Approach A] vs [Approach B] — What Actually Works for ${audience}"**
*Characters: ~${58 + topic.length + audience.length}* | Conversational tone + "what actually works" pattern performs well in ${industry}.

### Titles 9–10: Question / Problem-Aware Format

**9. "Why ${audience} Struggle With ${topic} (And What to Do About It)"**
*Characters: ~${55 + topic.length + audience.length}* | Problem-aware hook, resonates with readers who feel stuck; drives emotional click-through.

**10. "Is ${topic} Worth It for ${audience} in ${new Date().getFullYear()}? Here's the Truth"**
*Characters: ~${55 + topic.length + audience.length}* | Sceptic-aware angle; "here's the truth" signals objectivity and drives curiosity clicks.

---

## Top 3 Recommended

**#1: "How to ${topic}: The Step-by-Step Guide for ${audience}"**
→ Strong search intent match, clear audience signal, and the "step-by-step" promise reduces bounce rate by setting expectations upfront.

**#2: "Why ${audience} Struggle With ${topic} (And What to Do About It)"**
→ Problem-aware framing resonates with the broadest segment of your target audience and drives strong emotional CTR.

**#3: "10 Best ${topic} Strategies for ${audience} in ${new Date().getFullYear()}"**
→ Year-tagged list posts consistently outperform in organic search for ${industry} topics — freshness + list format is a proven combination.

---

## H1 Variations (for Top Recommended Title)

For on-page use, slightly expand the H1 beyond the title tag for context and keyword depth:

1. **"How to ${topic}: A Complete Step-by-Step Guide for ${audience} Who Want [Specific Result]"**
2. **"The ${audience}'s Step-by-Step Guide to ${topic}: From Zero to [Outcome]"**`;
    }

    case 'instagram-caption': {
      const { businessName = 'Your Brand', postType = 'educational', topic = 'your topic', audience = 'your audience', tone = 'conversational', cta = 'Engage with the post' } = inputs;
      return `## 5 Instagram Caption Options

### Caption 1 — Hook-led *(stops the scroll)*

This is the one thing about ${topic} that ${audience} always get wrong. 👇

[Two or three lines expanding on the hook — deliver the insight or reframe clearly. Keep sentences short and punchy. One idea per line.]

[Closing line that connects back to ${businessName} or invites a response.]

${cta.includes('link') ? '→ Link in bio.' : cta.includes('comment') ? '💬 Drop your thoughts below.' : '🔗 Link in bio for more.'}

#${topic.replace(/\s/g, '')} #${audience.replace(/\s/g, '')}Tips #${businessName.replace(/\s/g, '')}
*~180 characters (excl. hashtags)*

---

### Caption 2 — Story/narrative style *(opens with a relatable situation)*

I used to think [relatable belief about ${topic}]. Then everything changed.

[3–4 lines: set the scene, share the turning point, deliver the payoff that ${audience} will recognise in their own life.]

If you've felt this way too, you're not alone — and this is exactly why ${businessName} exists.

${cta.includes('link') ? 'The next step is in the bio →' : 'Save this for when you need it. 🔖'}

#${topic.replace(/\s/g, '')} #${audience.replace(/\s/g, '')} #${businessName.replace(/\s/g, '')}Community
*~220 characters (excl. hashtags)*

---

### Caption 3 — Educational / value-first *(starts with a tip or insight)*

3 things every ${audience} should know about ${topic}:

1️⃣ [Key insight #1 — concise, actionable, specific]
2️⃣ [Key insight #2 — a common mistake or counterintuitive fact]
3️⃣ [Key insight #3 — the most valuable tip, saved for last]

Which one surprised you most? 👇

[Optional: 1-line bridge to ${businessName} and the CTA]

#${topic.replace(/\s/g, '')}Tips #${audience.replace(/\s/g, '')}Education #${businessName.replace(/\s/g, '')}
*~200 characters (excl. hashtags)*

---

### Caption 4 — Bold/direct *(short, punchy, no fluff)*

${topic} is changing. And ${audience} who adapt now will be ahead of everyone else.

Here's the shortcut: [one powerful insight or action in 1–2 sentences]

Save this. Share it. Act on it. 📌

#${topic.replace(/\s/g, '')} #${audience.replace(/\s/g, '')} #${businessName.replace(/\s/g, '')}
*~120 characters (excl. hashtags)*

---

### Caption 5 — Question-led *(opens with a question that gets comments)*

What's your biggest struggle with ${topic} right now? 🤔

[2–3 lines acknowledging the challenge and positioning ${businessName} as the guide — not the hero. The ${audience} is the hero.]

Drop your answer below — we read every single reply. 👇

${cta.includes('link') ? 'And if you want to go deeper, the link in our bio has everything you need.' : `And if this resonated, share it with a ${audience} friend who needs to hear it.`}

#${topic.replace(/\s/g, '')} #AskThe${audience.replace(/\s/g, '')} #${businessName.replace(/\s/g, '')}Insights
*~180 characters (excl. hashtags)*

---

## Hashtag Bank

**Niche-specific:** #${topic.replace(/\s/g, '')} #${topic.replace(/\s/g, '')}Tips #${audience.replace(/\s/g, '')}Life #${audience.replace(/\s/g, '')}Community

**Mid-size:** #ContentMarketing #${postType.replace(/\s/g, '')}Content #${businessName.replace(/\s/g, '')} #BrandBuilding #GrowthMindset

**Broad (reach):** #Instagram #Marketing #Entrepreneur #SmallBusiness #DigitalMarketing

**Engagement:** #${audience.replace(/\s/g, '')}Goals #${topic.replace(/\s/g, '')}Strategy #${businessName.replace(/\s/g, '')}Community #ContentCreator

---

## CTA Variations

1. "Drop a 🙋 below if this sounds like you →"
2. "Save this for later — you'll want to come back to it 🔖"
3. "Tag a ${audience} friend who needs to see this 👇"
4. "Comment '[keyword]' and we'll send you [freebie/resource] 📩"
5. "Ready to go deeper? Link in bio → [offer or next step]"`;
    }

    case 'generic':
    default: {
      const { toolName = 'Tool', toolDescription = 'help with your task', userInput = '' } = inputs;
      const inputPreview = userInput ? userInput.slice(0, 150) + (userInput.length > 150 ? '...' : '') : '[your input]';
      return `## ${toolName} — Results

Based on your input, here is a comprehensive response tailored specifically to your needs.

**Your Input Summary:** *"${inputPreview}"*

---

## Overview

${toolDescription.charAt(0).toUpperCase() + toolDescription.slice(1)}. Based on what you've shared, here is a structured breakdown to help you move forward.

---

## Key Elements

**1. Core Focus**
The most important aspect of what you've described is [primary theme from your input]. This is the foundation everything else should build from. Without a clear understanding of this element, the remaining work is harder to prioritise.

**2. Immediate Opportunities**
Based on your input, there are clear short-term actions available to you:
- [Quick win #1 — directly derived from the context you provided]
- [Quick win #2 — low-effort, high-impact action]
- [Quick win #3 — foundational step before scaling]

**3. Strategic Considerations**
For longer-term success with ${toolName.toLowerCase()}, consider the following:
- How your [primary goal] aligns with your broader objectives
- The resources (time, budget, attention) required to execute well
- Which metrics will tell you whether you're making progress

---

## Action Steps

1. **Start with [first action]** — This gives you immediate clarity and momentum. Do this before anything else.
2. **Then [second action]** — Build on step 1 by adding [layer or context]. This turns a one-off effort into a repeatable process.
3. **Finally [third action]** — Once steps 1 and 2 are complete, this is how you scale or optimise what's working.

---

## Pro Tips

- **Specificity wins** — The more specific your inputs, the better the output. If results feel generic, add more detail about your audience, goal, or context.
- **Iterate, don't perfect** — A good first version you act on beats a perfect version you never finish. Use this output as a starting point, then refine.
- **Track what works** — Document which versions of [output type] perform best so you can improve over time.

---

*This output was generated using smart templates. For AI-powered, deeply personalised results, connect your AI API key in the project settings.*`;
    }
  }
}

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.json() as { tool: ToolType; inputs: Record<string, string> };
    const { tool, inputs } = body;

    if (!tool || !inputs) {
      return new Response(JSON.stringify({ error: 'Missing tool or inputs' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sanitizedInputs: Record<string, string> = {};
    for (const [key, value] of Object.entries(inputs)) {
      if (typeof value === 'string') {
        sanitizedInputs[key] = value.slice(0, MAX_INPUT_LENGTH);
      }
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    let readableStream: ReadableStream;

    if (!apiKey) {
      const templateOutput = buildTemplateFallback(tool, sanitizedInputs);
      readableStream = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(templateOutput));
          controller.close();
        },
      });
    } else {
      const prompt = buildPrompt(tool, sanitizedInputs);
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
        generationConfig: { maxOutputTokens: 3500 },
      });
      const result = await model.generateContentStream(prompt);

      readableStream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              if (text) controller.enqueue(new TextEncoder().encode(text));
            }
            controller.close();
          } catch (err) {
            controller.error(err);
          }
        },
      });
    }

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Generation error:', error);
    return new Response(JSON.stringify({ error: 'Generation failed. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
