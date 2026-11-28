import type { BlogPost } from './blogData';

// Demand batch (ids 207-213), written November 28, 2026.
// Each post targets a search with measured demand (Treg -> DataForSEO Google Ads volume, Oct 2026)
// next to a topic whose own posts had little demand, and lists those weaker posts in relatedSlugs so
// they gain internal links. US/UK/CA monthly searches are noted per post. No invented statistics:
// platform facts are attributed to Meta or Google, everything else is method, not numbers.
const publishDate = 'November 28, 2026';

export const demandBlogPosts: BlogPost[] = [
  {
    id: 211,
    slug: 'facebook-ad-examples',
    title: 'Facebook Ad Examples: 12 Ad Types That Work, With Templates',
    seoTitle: 'Facebook Ad Examples: 12 Ad Types That Work (With Templates)',
    description: 'Twelve Facebook and Instagram ad types with a template for each: problem and solution, before and after, customer review, founder story, demo, comparison and more, plus how to find real examples in the Meta Ad Library.',
    category: 'Advertising',
    date: publishDate,
    imageIndex: 211,
    tableOfContents: [
      'The Short Answer',
      '12 Facebook Ad Types With Templates',
      'How to Find Real Examples in Your Market',
      'How to Test Which Ad Type Works for You',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Good Facebook ads are rarely original from scratch. They follow a small number of proven structures, filled with your product, your customers and your proof. Below are twelve ad types with a template for each. The examples use a made-up coffee brand, Morning Roast, so you can see the structure; swap in your own product and claims you can support." },
      { type: 'callout', text: "Quick answer: The Facebook ad types that most often work are problem and solution, before and after, customer review, user-generated video, founder story, product demo, comparison, offer, \"X reasons\" carousel, objection answer, how-to and seasonal. Find live examples in your market in the Meta Ad Library, then test two or three types at a time." },

      { type: 'heading', text: '12 Facebook Ad Types With Templates' },
      { type: 'table', headers: ['Ad type', 'Template', 'Example (fictional brand)'], rows: [
        ['Problem and solution', 'Tired of [problem]? [Product] [result] in [time].', 'Tired of bitter office coffee? Morning Roast brews smooth in 2 minutes.'],
        ['Before and after', 'Show the starting point, then the result.', 'Split image: instant coffee jar vs a fresh pour-over.'],
        ['Customer review', 'Quote a real review word for word, with the reviewer\'s first name.', '"Finally coffee I don\'t need sugar in." - Dana'],
        ['User-generated video', 'A customer films themselves using the product, in their words.', 'Phone video of a customer\'s morning routine.'],
        ['Founder story', 'Why I started [brand]: the problem I had.', 'Founder explains sourcing from one farm.'],
        ['Product demo', 'Show the product working in the first three seconds.', 'Hands making a cup, start to finish, in 15 seconds.'],
        ['Comparison', 'Us vs the usual option, on the points buyers care about.', 'Morning Roast vs café coffee: price per cup, taste, time.'],
        ['Offer', 'A clear offer with a real end date.', 'Free grinder with your first subscription, ends Sunday.'],
        ['X reasons carousel', 'One reason per card.', '5 reasons customers switch to Morning Roast.'],
        ['Objection answer', 'Name the doubt, then answer it.', '"Is subscription hard to cancel?" Cancel in two clicks.'],
        ['How-to', 'Teach something useful; the product is one step.', '3 ways to make cold brew at home.'],
        ['Seasonal', 'Tie the product to a date or moment.', 'The gift for the coffee lover who has everything.'],
      ]},
      { type: 'paragraph', text: "Whatever the type, the first second of a video or the first line of copy does most of the work. Lead with a person, a problem or a result, not your logo." },

      { type: 'heading', text: 'How to Find Real Examples in Your Market' },
      { type: 'numbered-list', items: [
        'Open the Meta Ad Library and search for competitors and brands your customers also buy from.',
        'Filter to active ads in your country.',
        'Note ads that have been running for a long time; advertisers rarely keep paying for ads that do not work.',
        'Write down the ad type, the hook and the offer for each, then look for patterns.',
      ]},
      { type: 'paragraph', text: "Our step-by-step guide to the Meta Ad Library shows how to do this research in under an hour." },

      { type: 'heading', text: 'How to Test Which Ad Type Works for You' },
      { type: 'list', items: [
        'Pick two or three ad types, not twelve, and make two versions of each.',
        'Keep the audience and offer the same so the ad type is what you are testing.',
        'Judge on cost per purchase or lead, not likes or clicks.',
        'Give each test enough budget and time to get results before deciding.',
        'When a type works, make new versions of it with different hooks and angles.',
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Angie, Loraloop's ads specialist, drafts new ad variations from your brand knowledge and your best performers, tracks which angles competitors are scaling and spots fatigued ads early. Every new ad and budget change waits for your approval before it runs." },

      { type: 'faq', items: [
        { q: 'What makes a good Facebook ad?', a: 'A strong first line or first second, one clear message, proof the claim is true and a single next step.' },
        { q: 'Where can I see examples of Facebook ads?', a: 'The Meta Ad Library shows active ads from any advertiser on Facebook and Instagram, searchable by brand or keyword.' },
        { q: 'Do video ads work better than images?', a: 'It depends on the product and audience. Test both: some products sell best on a clear image, others need a demo.' },
        { q: 'How many ads should I test at once?', a: 'Two or three ad types with two versions each is enough for most small budgets.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts new ad variations from your best performers, and nothing runs until you approve it.' },
    ],
    relatedSlugs: ['find-new-ad-angles-when-winners-stop-working', 'meta-ads-creative-testing-framework-2026', 'ugc-vs-static-vs-video-ads-meta', 'competitor-ad-research-meta-ad-library'],
  },

  // "small business marketing ideas" US 720 / UK 110 / CA 50
  {
    id: 212,
    slug: 'small-business-marketing-ideas',
    title: 'Small Business Marketing Ideas for 2027: 25 Ideas You Can Start This Month',
    seoTitle: 'Small Business Marketing Ideas for 2027: 25 Practical Ideas',
    description: 'Twenty-five practical small business marketing ideas for 2027, grouped by local search, reviews, email, social, partnerships, ads and content, with how to pick the three that fit your business.',
    category: 'Business',
    date: publishDate,
    imageIndex: 212,
    tableOfContents: [
      'The Short Answer',
      'Local Search and Reviews',
      'Email and Text',
      'Social Media and Content',
      'Partnerships and Community',
      'Paid Ads',
      'How to Choose Your First Three',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Most small businesses do not need more marketing ideas. They need three that fit, done every week. Here are twenty-five practical ones, grouped by channel, followed by a simple way to choose where to start." },
      { type: 'callout', text: "Quick answer: The small business marketing ideas that pay off most reliably are keeping your Google Business Profile current, asking every happy customer for a review, emailing your customer list monthly, posting real work on one social channel, partnering with neighboring businesses and running a small search ad campaign for your main service." },

      { type: 'heading', text: 'Local Search and Reviews' },
      { type: 'numbered-list', items: [
        'Complete your Google Business Profile: hours, services, photos and booking link.',
        'Post a weekly update or offer on your profile.',
        'Ask every happy customer for a review, with a direct link.',
        'Reply to every review within a day or two.',
        'Keep your name, address and phone number identical across your site and directories.',
      ]},

      { type: 'heading', text: 'Email and Text' },
      { type: 'numbered-list', items: [
        'Collect emails at checkout or booking, with permission.',
        'Send one useful monthly email: news, a tip, an offer.',
        'Set up a welcome email for every new customer.',
        'Send a win-back message to customers you have not seen in a while.',
        'Set an automatic text reply for missed calls with your booking link.',
      ]},

      { type: 'heading', text: 'Social Media and Content' },
      { type: 'numbered-list', items: [
        'Pick one social channel where your customers are and post twice a week.',
        'Show real work: before and after, behind the scenes, your team.',
        'Answer the three questions customers ask most, in posts or short videos.',
        'Share customer stories, with their permission.',
        'Write one helpful article a month that answers a common question.',
      ]},

      { type: 'heading', text: 'Partnerships and Community' },
      { type: 'numbered-list', items: [
        'Partner with a nearby business that serves the same customers.',
        'Run a joint offer or event each quarter.',
        'Join one local business group and be genuinely helpful.',
        'Sponsor or take part in a local event your customers attend.',
        'Start a simple referral reward for existing customers, where local rules allow.',
      ]},

      { type: 'heading', text: 'Paid Ads' },
      { type: 'numbered-list', items: [
        'Run a small Google Search campaign for your main service in your area.',
        'Retarget website visitors with a reminder ad.',
        'Promote your best-performing social post to people nearby.',
        'Use location targeting tightly to avoid paying for people you cannot serve.',
        'Check results weekly and stop what does not bring customers.',
      ]},

      { type: 'heading', text: 'How to Choose Your First Three' },
      { type: 'table', headers: ['If your business...', 'Start with'], rows: [
        ['Gets found mainly through search', 'Google Business Profile, reviews, one search campaign'],
        ['Has many repeat customers', 'Email list, monthly email, win-back message'],
        ['Sells something visual', 'One social channel, before and after posts, customer stories'],
        ['Shares customers with nearby businesses', 'One partnership, a joint offer, local group'],
      ]},
      { type: 'paragraph', text: "Run your three ideas for a full month, track the customers each brings and replace the weakest one with a new idea next month." },

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans your month from these ideas, drafts posts, profile updates, emails and review replies in your brand voice, and reports which channels bring customers. Every post, email and reply waits for your approval before it goes out." },

      { type: 'faq', items: [
        { q: 'What is the best marketing for a small business?', a: 'Usually the cheapest channels first: a complete Google Business Profile, steady reviews and email to existing customers. Add paid ads once you know what a customer is worth.' },
        { q: 'How much should a small business spend on marketing?', a: 'It depends on margins and goals. Start with a fixed monthly amount you can sustain, track customers per channel and move money toward what works.' },
        { q: 'How can I market my business for free?', a: 'Google Business Profile, reviews, social posts, email to your list, referrals and partnerships cost time rather than money.' },
        { q: 'How many marketing channels should a small business use?', a: 'Two or three done consistently beat many done occasionally.' },
      ]},
      { type: 'cta', text: 'Loraloop turns your marketing plan into weekly posts, emails and updates, and you approve everything before it goes live.' },
    ],
    relatedSlugs: ['get-more-customers-local-business', 'which-marketing-channels-small-business-prioritize', 'ai-marketing-for-local-service-businesses', 'turn-leads-into-booked-appointments'],
  },

  // "valentines day marketing ideas" US 210 (seasonal peak Jan-Feb), UK 20, CA 10
  {
    id: 213,
    slug: 'valentines-day-marketing-ideas',
    title: 'Valentine\'s Day Marketing Ideas for Small Businesses and DTC Brands (2027)',
    seoTitle: 'Valentine\'s Day Marketing Ideas for Small Businesses and DTC Brands 2027',
    description: 'Valentine\'s Day 2027 falls on a Sunday. Practical marketing ideas for online stores and local businesses: gift guides, bundles, shipping deadlines, gift cards, self-gifting and a planning timeline starting in January.',
    category: 'Business',
    date: publishDate,
    imageIndex: 213,
    tableOfContents: [
      'The Short Answer',
      'Valentine\'s Day 2027 Timeline',
      'Ideas for Online Stores and DTC Brands',
      'Ideas for Local Businesses',
      'Email, Social and Ads Plan',
      'How Loraloop Fits',
      'Frequently Asked Questions',
    ],
    content: [
      { type: 'paragraph', text: "Valentine's Day is one of the first selling moments of the year, and in 2027 it falls on a Sunday. That changes the plan: shipping deadlines arrive earlier in the week, and weekend experiences matter more for local businesses. The brands that do well plan in January and make choosing easy for rushed buyers." },
      { type: 'callout', text: "Quick answer: Plan Valentine's Day 2027 marketing in January: build a gift guide and two or three bundles, announce your last order date for delivery before Sunday, February 14, offer digital gift cards for late shoppers, include a self-gifting or friends angle, and schedule email, social and ads in three waves." },

      { type: 'heading', text: 'Valentine\'s Day 2027 Timeline' },
      { type: 'table', headers: ['When', 'What to do'], rows: [
        ['Early to mid January', 'Choose products and bundles; plan offers; brief creators and design'],
        ['Late January', 'Publish the gift guide; start teaser emails and posts'],
        ['First week of February', 'Main email and ad push; announce your last order date'],
        ['Days before your shipping cutoff', 'Shipping deadline reminders'],
        ['After the cutoff to February 14', 'Switch to gift cards, local pickup or experiences'],
        ['February 15 onward', 'Thank-you email; note what sold for next year'],
      ]},

      { type: 'heading', text: 'Ideas for Online Stores and DTC Brands' },
      { type: 'list', items: [
        'Gift guide by budget and by person: for partners, friends, yourself.',
        'Two or three ready-made bundles with gift wrap or a note.',
        'A clear last order date for delivery before Sunday, February 14, shown on every page.',
        'Digital gift cards promoted to late shoppers once shipping closes.',
        'A self-gifting or "Galentine\'s" angle for buyers who are not shopping for a partner.',
        'Creator content showing the product as a gift, not just the product.',
      ]},

      { type: 'heading', text: 'Ideas for Local Businesses' },
      { type: 'list', items: [
        'Bookable experiences for the weekend: a set menu, a class, a treatment for two.',
        'A joint offer with a neighboring business, such as dinner plus flowers.',
        'Gift certificates sold online for last-minute buyers.',
        'Updated holiday hours and a Valentine\'s post on Google Business Profile.',
        'A short reminder to past customers a week before.',
      ]},

      { type: 'heading', text: 'Email, Social and Ads Plan' },
      { type: 'table', headers: ['Wave', 'Email', 'Social and ads'], rows: [
        ['Inspire (late January)', 'Gift guide', 'Gift ideas posts; creator content'],
        ['Convert (early February)', 'Bundles and offer', 'Ads to the gift guide and bundles'],
        ['Last chance (before cutoff)', 'Shipping deadline', 'Deadline reminders; retargeting'],
        ['Late shoppers (after cutoff)', 'Gift cards and local options', 'Gift card ads; local pickup posts'],
      ]},

      { type: 'heading', text: 'How Loraloop Fits' },
      { type: 'paragraph', text: "Loraloop plans the Valentine's campaign around your key dates and products, drafts the gift guide, emails, posts and ads in your brand voice, and reminds you of shipping deadlines. Every email, post and ad waits for your approval before it goes live." },

      { type: 'faq', items: [
        { q: 'What day is Valentine\'s Day 2027?', a: 'Sunday, February 14, 2027.' },
        { q: 'When should I start Valentine\'s Day marketing?', a: 'Plan in early January and start promoting in late January, with the main push in the first week of February.' },
        { q: 'What sells well for Valentine\'s Day?', a: 'Ready-made gifts and bundles, experiences for two, gift cards for late shoppers and self-gifting products.' },
        { q: 'How do I reach last-minute Valentine\'s shoppers?', a: 'Promote digital gift cards, local pickup and bookable experiences once delivery deadlines have passed.' },
      ]},
      { type: 'cta', text: 'Loraloop drafts your Valentine\'s gift guide, emails and ads from your products, and nothing goes out until you approve it.' },
    ],
    relatedSlugs: ['q1-marketing-plan-dtc-brands-after-holidays', 'get-new-customers-shopify-without-discounts', 'creator-ugc-partnerships-dtc-brands', 'small-business-marketing-ideas'],
  },
];
