import type { BlogPost } from './blogData';

// Jev (TypeSafe AI) for AI marketing. Published September 24, 2026.
export const jevBlogPosts: BlogPost[] = [
  {
    id: 121,
    slug: 'jev-for-ai-marketing',
    title: "Jev for Marketing Teams: 9 Decisions Loraloop's AI Agents Can Hand Off",
    seoTitle: 'Jev for AI Marketing (2026): Where a Pennies-per-Thousand Decision Model Fits',
    description: "Jev, TypeSafe's new decision model, can't write a word. It can decide in under half a second, for fractions of a cent. Here's where it fits across ads, SEO/GEO and email, and where it doesn't.",
    category: 'Advertising',
    date: 'September 24, 2026',
    imageIndex: 121,
    tableOfContents: [
      'Jev in 30 Seconds',
      'Video: 724 Live Ads Tagged in 40 Seconds',
      'Numbers, Decisions, Words',
      '9 Decisions Across the Loraloop Team',
      'What It Costs at List Price',
      "Where Jev Doesn't Fit",
      'How to Start Before You Have Access',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Jev is a decision model from TypeSafe AI that opened in early access on September 15, 2026. It doesn't write. You give it text and a bounded question, and it gives back a typed answer with a probability, in 70–500 ms, at $0.042 per million input tokens with free output. That makes it a good fit for the thousands of small yes/no, pick-one and score calls a marketing team makes every week. It's the wrong tool for anything a person has to read." },
      { type: 'callout', text: "Quick answer: Use Jev for high-volume marketing decisions with a fixed set of answers, like search-term triage, creative tagging, keyword intent and reply sorting. Put it behind a confidence threshold with an approval queue for the middle band. Keep an LLM for anything a person reads and a human on budgets. Loraloop publishes this blog and does not run Jev in production as of September 24, 2026. Cost figures are arithmetic at list price, not measured runs." },

      { type: 'heading', text: 'Jev in 30 Seconds' },
      { type: 'paragraph', text: "Ask an LLM whether a search term is worth paying for, and it writes you a paragraph. Ask Jev the same thing with four options (buyer, researcher, job seeker, junk) and it returns a probability for each one in a fraction of a second. You get no paragraph and no reasoning, only the pick. TypeSafe calls this a System One model: fast, instinctive calls, as opposed to the slow, deliberate reasoning a frontier LLM does." },
      { type: 'table', headers: ['Property', 'What TypeSafe reports'], rows: [
        ['Input', 'Unstructured text (the "state") plus typed questions'],
        ['Output', 'Typed decisions with probabilities: pick-one, score, yes/no'],
        ['Price', '$0.042 per 1M input tokens. Output is free'],
        ['Latency', '70–500 ms end to end'],
        ['Schema errors', '0%. Output is constrained to your schema'],
        ['Limits', 'Up to 255 options per choice. No image input yet'],
        ['Access', 'Early access, waitlist'],
      ]},
      { type: 'paragraph', text: `A caveat: all of these are TypeSafe's own numbers, and nobody has independently reproduced them yet. "Can't hallucinate" means it can't break your schema. It can still choose the wrong option.` },

      { type: 'heading', text: 'Video: 724 Live Ads Tagged in 40 Seconds' },
      { type: 'video', src: '/videos/berman-jev-724-ads.mp4', poster: '/videos/berman-jev-724-ads-poster.jpg', title: 'Jev tagging 724 live ads in 40 seconds', caption: 'Recording by Matthew Berman (@TheMattBerman), September 17, 2026.', captionLink: 'https://x.com/TheMattBerman/status/2100654891756589230' },
      { type: 'paragraph', text: "Matthew Berman ran Jev on 724 live ads from 37 brands. It labeled the hook, format and awareness stage of every ad, and it checked each ad against the landing page it links to. The run took 40 seconds and cost about 9 cents, at a median of 216 ms per ad. The results: 35% of the ads led with a bold claim, 34% used a problem-solution format, and 51% were written for a solution-aware buyer. Of the 381 landing pages fetched, 71% broke the promise their ad made. Most teams do this audit by hand once a quarter, if they do it at all." },

      { type: 'heading', text: 'Numbers, Decisions, Words' },
      { type: 'paragraph', text: 'Angie, our ads manager, already follows a strict rule: LLMs write words around numbers that code has computed. They never do the math themselves. A decision model fits between those two steps.' },
      { type: 'numbered-list', items: [
        'Code computes. It pulls rows from Google Ads, Meta, GA4 and Search Console, then calculates CPA, spend and deltas.',
        'Rules shortlist. Filters and embeddings narrow each item to the few options that matter.',
        'Jev decides. It asks one bounded question per row and gets back an answer with a confidence score.',
        'A threshold routes. High confidence is applied automatically. The middle band goes to an approval queue. Low confidence is dropped.',
        'An LLM writes, but only for the rows that passed: the new ad, the fix, the one-line reason a client will read.',
        'Jev checks again before anything ships.',
      ]},
      { type: 'paragraph', text: 'The confidence threshold sits on top of the same approval model Loraloop already uses. Cheap decisions let the agents handle more of the routine work on their own. The rules for budgets, bids and anything hard to undo stay the same.' },

      { type: 'heading', text: '9 Decisions Across the Loraloop Team' },
      { type: 'paragraph', text: 'Each of these has a fixed set of answers, and that is the test. If the answer has to be written, it belongs to an LLM.' },
      { type: 'table', headers: ['#', 'Agent', 'Decision', 'Answer', 'What happens next'], rows: [
        ['1', 'Angie (Ads)', 'Is this search term a buyer, researcher, job seeker, competitor or junk?', 'Pick one', 'Junk above the threshold becomes a negative keyword. The rest go to the queue'],
        ['2', 'Angie (Ads)', "What are this ad's hook, format, offer and awareness stage?", 'Pick one ×4', 'Performance is grouped by tag, so you can see which styles actually win'],
        ['3', 'Angie (Ads)', 'Is this proposed change reversible and within the account limits?', 'Yes / no', 'Yes is applied. No waits for your approval'],
        ['4', 'Angie (Ads)', 'Does the landing page deliver what the ad promised?', 'Score 0–100', 'Low scores get fixed before more money is spent'],
        ['5', 'Sophie (SEO/GEO)', 'Is this keyword informational, commercial, transactional or navigational?', 'Pick one', 'Keywords are grouped into content briefs by intent'],
        ['6', 'Sophie (SEO/GEO)', 'Does this AI answer mention or cite the brand?', 'Yes / no', 'Gaps become GEO tasks'],
        ['7', 'Sophie (SEO/GEO)', 'Do these two pages target the same intent?', 'Yes / no', 'Cannibalization pairs get merged or re-targeted'],
        ['8', 'Clara (Email)', 'Is this reply interested, not now, wrong person, out of office or unsubscribe?', 'Pick one', 'Hot replies go to you. Unsubscribes are honored right away'],
        ['9', 'Lora (Lead)', 'Which agent owns this request?', 'Pick one', 'Work is routed to Angie, Sophie or Clara without a planning call'],
      ]},
      { type: 'subheading', text: 'Angie: Ads' },
      { type: 'paragraph', text: "Search-term triage is the biggest job by volume in paid search, and it's also the most tedious. Creative tagging is what the video above shows. The safety gate is a second opinion on every change Angie proposes, and at this price it can run on all of them. Landing-page match asks the same question on every channel, so one check covers Google, Meta and LinkedIn. The 71% mismatch rate in the demo shows why that check matters." },
      { type: 'subheading', text: 'Sophie: SEO and GEO' },
      { type: 'paragraph', text: 'Intent classification across thousands of keywords used to be either a spreadsheet afternoon or an expensive LLM batch job. Checking AI answers from ChatGPT, Perplexity and Gemini is the GEO version of rank tracking: at a fraction of a cent per answer, Sophie can check every tracked prompt every day instead of once a month.' },
      { type: 'subheading', text: 'Clara: Email' },
      { type: 'paragraph', text: 'Reply triage is a pick-one question with five options. Only the replies marked "interested" need a human, and only those need a drafted response.' },
      { type: 'subheading', text: 'Lora: Orchestration' },
      { type: 'paragraph', text: 'Routing a request to the right specialist is itself a decision. Making it in under half a second, without a slow planning call, keeps the whole team responsive.' },

      { type: 'heading', text: 'What It Costs at List Price' },
      { type: 'paragraph', text: 'This is arithmetic at $0.042 per 1M input tokens, with output free. Token counts are estimates and depend on how much context you pack into each row.' },
      { type: 'table', headers: ['Job', 'Rows', 'Est. tokens per row', 'Input tokens', 'Cost'], rows: [
        ['Search-term triage', '10,000 terms', '~150', '1.5M', '~$0.06'],
        ['Ad creative tagging', '5,000 ads', '~600', '3.0M', '~$0.13'],
        ['Keyword intent', '20,000 keywords', '~60', '1.2M', '~$0.05'],
        ['AI-answer brand check', '1,000 answers', '~800', '0.8M', '~$0.03'],
        ['Email reply triage', '2,000 replies', '~400', '0.8M', '~$0.03'],
      ]},
      { type: 'paragraph', text: 'The exact figures matter less than the scale. A job that costs dollars per run on a frontier model, and so runs monthly, costs cents on Jev and can run every night.' },

      { type: 'heading', text: "Where Jev Doesn't Fit" },
      { type: 'list', items: [
        'It gives no reasons. You get 0.91, never a sentence. Anything a client or finance team reads still needs an LLM to write the explanation.',
        'Answers must be known in advance. Strategy, copy and diagnosis are open-ended. Leave them to an LLM.',
        "Accuracy is good enough for triage. That's fine behind a threshold. It's not good enough to move budgets on its own.",
        "It only reads text. It doesn't take image input yet, so creative tagging works on ad copy, transcripts or a text description of the visual.",
        "Access and price may change. It's waitlist-only, with no general availability date, and the launch price could move.",
      ]},
      { type: 'paragraph', text: 'Keep a human on budget changes, new campaigns and conversion tracking. Keep an LLM on everything that gets read.' },

      { type: 'heading', text: 'How to Start Before You Have Access' },
      { type: 'numbered-list', items: [
        'Join the waitlist at typesafe.ai.',
        "Label 500 rows by hand for the job you care about most. You'll use that set to pick thresholds, and it works with any model.",
        'Build the loop now on a small model with structured outputs. The code stays the same when you swap Jev in.',
        'Connect your accounts to Loraloop. Angie, Sophie and Clara already handle the collect, act and write steps around the decision.',
      ]},

      { type: 'heading', text: 'Frequently Asked Questions' },
      { type: 'faq', items: [
        { q: 'What is Jev?', a: "Jev is a System One decision model from TypeSafe AI, launched in early access on September 15, 2026. It returns typed decisions with probabilities, and it doesn't generate text." },
        { q: 'How much does Jev cost?', a: "$0.042 per 1M input tokens, and output is free, per TypeSafe's launch pricing. Most marketing decisions cost a small fraction of a cent." },
        { q: 'Does Jev replace an AI marketing agent?', a: "No. Jev only sorts. Something still has to pull the data, act on the decision and write the output. That's the agent's job." },
        { q: 'Does Loraloop use Jev?', a: 'Not in production as of September 24, 2026. The decide-then-act loop in this article runs on any model with structured outputs.' },
        { q: 'Is Jev accurate enough to run unattended?', a: 'It depends on your threshold and your data. Measure it against your own hand labels before you let anything apply automatically.' },
      ]},

      { type: 'cta', text: "Your marketing team, on autopilot. Loraloop's AI agents run your ads, SEO/GEO and email, and changes that matter wait for your approval." },
    ],
  },
];
