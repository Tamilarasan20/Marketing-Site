/**
 * Blog authors. E-E-A-T: Google and AI engines weigh named people with verifiable bios far
 * more than a generic "Team" byline. Add one entry per real author below (type 'Person'),
 * then set `author: '<slug>'` on their posts. Do not invent people.
 *
 * Each author gets a page at /authors/<slug> with Person (or Organization) schema.
 */
export interface Author {
  slug: string;
  name: string;
  /** 'Person' for a real human, 'Organization' for the team byline. */
  type: 'Person' | 'Organization';
  role: string;
  /** 2-4 sentences, first person is fine. Mention real experience and credentials. */
  bio: string;
  /** Public profiles that corroborate the author (LinkedIn, X, personal site). */
  sameAs?: string[];
  /** Absolute URL of a headshot (square, at least 400px). */
  image?: string;
}

export const DEFAULT_AUTHOR = 'loraloop-team';

export const authors: Author[] = [
  {
    slug: 'loraloop-team',
    name: 'Loraloop Team',
    type: 'Organization',
    role: 'Marketing, product and growth team at Loraloop',
    bio: 'Articles by the people who build and run Loraloop, an autonomous AI marketing team for founders, e-commerce brands and agencies. We write from what we see across the Meta, Google, SEO/GEO and email accounts the platform operates every day, and every piece is reviewed by a human before it publishes.',
    sameAs: ['https://www.linkedin.com/company/loraloop', 'https://x.com/loraloop_ai'],
  },
  // Example of a real-person entry (replace with real team members and remove this comment):
  // {
  //   slug: 'jane-doe',
  //   name: 'Jane Doe',
  //   type: 'Person',
  //   role: 'Head of Growth, Loraloop',
  //   bio: 'Jane has managed over $20M in Meta ad spend across DTC brands and agencies since 2017. ...',
  //   sameAs: ['https://www.linkedin.com/in/janedoe', 'https://x.com/janedoe'],
  //   image: 'https://loraloop.com/authors/jane-doe.jpg',
  // },
];

export function getAuthor(slug?: string): Author {
  return authors.find((a) => a.slug === (slug ?? DEFAULT_AUTHOR)) ?? authors[0];
}
