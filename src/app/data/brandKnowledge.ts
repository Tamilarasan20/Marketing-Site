// Brand knowledge profile shaped after the Loraloop /v1/brand API response.
// This snapshot powers the Brand DNA review page; swap it for a live fetch
// (GET app.loraloop.com/v1/brand/knowledge/:id) when wiring to the app.

export interface BrandColorSwatch {
  name: string;
  hex: string;
  role: "primary" | "secondary" | "accent";
}

export interface BrandCompetitor {
  id: string;
  handle: string;
  platform: string;
}

export interface BrandKnowledge {
  id: string;
  brandName: string;
  tagline: string;
  industry: string;
  websiteUrl: string;
  logoUrl: string;
  brandArchetype: string;
  enrichmentConfidence: number;
  lastValidatedAt: string;

  elevatorPitch: string;
  valueProposition: string;
  productDescription: string;
  brandValues: string[];
  uniqueSellingPoints: string[];

  tone: string;
  formality: string;
  communicationStyle: string;
  voiceCharacteristics: string[];
  messagingThemes: string[];
  preferredHashtags: string[];
  prohibitedWords: string[];

  targetAudience: string;
  audiencePsychology: {
    motivations: string[];
    aspirations: string[];
    fears: string[];
  };

  positioning: string;
  differentiators: string[];
  competitors: BrandCompetitor[];

  contentPillars: string[];
  socialPlatforms: string[];
  contentMix: string;

  visualStyle: string;
  colorPaletteNote: string;
  colorSwatches: BrandColorSwatch[];
  galleryImages: string[];
  productImages: string[];

  pagesScraped: string[];
}

export const brandKnowledge: BrandKnowledge = {
  id: "d523b004-f05c-4ce4-ab09-d0d1b70af8f1",
  brandName: "OLIPOP",
  tagline: "A new kind of soda™",
  industry: "DTC functional beverage",
  websiteUrl: "https://drinkolipop.com/",
  logoUrl: "https://drinkolipop.com/cdn/shop/files/OlipopLogo_1_560x.png?v=1778767782",
  brandArchetype: "Caregiver",
  enrichmentConfidence: 0.9,
  lastValidatedAt: "2026-06-09T14:55:58.359Z",

  elevatorPitch:
    "OLIPOP is a revolutionary new kind of soda that bridges the gap between classic cravings and modern health needs. By combining nostalgic taste with scientifically backed functional ingredients, we provide a soda you can feel good about drinking.",
  valueProposition:
    "OLIPOP is a functional, fiber-rich soda that offers the classic flavors people crave without the health compromises of traditional soda.",
  productDescription:
    "OLIPOP is a range of health-focused sodas crafted with a proprietary OLISMART blend of prebiotic fibers and botanicals. They offer a wide variety of nostalgic soda flavors designed to support digestive health with significantly less sugar and higher fiber content than standard sodas.",
  brandValues: ["Scientific integrity", "Transparency", "Enjoyment"],
  uniqueSellingPoints: [
    "Proprietary OLISMART fiber blend",
    "Low sugar and calorie content",
    "Nostalgic soda flavor profiles",
  ],

  tone: "Playful",
  formality: "Casual",
  communicationStyle: "Friendly and informative",
  voiceCharacteristics: ["Approachable", "Transparent", "Science-backed"],
  messagingThemes: ["Feeling good vs. great taste", "Gut health science"],
  preferredHashtags: ["#drinkolipop", "#guthealth", "#healthysoda"],
  prohibitedWords: ["soda is bad", "cure-all", "soda industry hate"],

  targetAudience:
    "Health-conscious consumers who love soda but want to avoid the negative health impacts of traditional sugary soft drinks.",
  audiencePsychology: {
    motivations: ["Improving gut health", "Enjoying familiar treats without guilt"],
    aspirations: ["A healthier lifestyle that feels easy and fun"],
    fears: ["Damaging health with sugar", "Sacrificing taste for health"],
  },

  positioning: "Premium, functional, health-conscious alternative to traditional soda",
  differentiators: [
    "Prebiotic-focused formulation",
    "High fiber content",
    "Scientific advisory board involvement",
  ],
  competitors: [
    { id: "923ebbea", handle: "Poppi", platform: "web" },
    { id: "b6c15327", handle: "Culture Pop", platform: "web" },
    { id: "a8a5bf0e", handle: "Health-Ade", platform: "web" },
    { id: "50740cf6", handle: "Zevia", platform: "web" },
    { id: "311e77f4", handle: "United Sodas of America", platform: "web" },
  ],

  contentPillars: ["Digestive health education", "Flavor exploration", "Lifestyle integration"],
  socialPlatforms: ["Instagram", "TikTok"],
  contentMix:
    "Recipe ideas, user testimonials, digestive health education, and fun product launches.",

  visualStyle: "Bright colors, minimalist layout, focus on product texture and ingredients",
  colorPaletteNote:
    "Diverse palette tailored to specific flavor profiles with a consistent clean white or bold background base.",
  colorSwatches: [
    { name: "Ink", hex: "#000000", role: "primary" },
    { name: "Pop Pink", hex: "#FF6B8A", role: "accent" },
    { name: "Pure White", hex: "#FFFFFF", role: "secondary" },
    { name: "Soft Cloud", hex: "#F2F2F2", role: "secondary" },
  ],
  galleryImages: [
    "https://drinkolipop.com/cdn/shop/files/PLP-All-Header-Tablet.jpg?v=1777506795&width=1440",
    "https://cld.accentuate.io/30315220959302/1755694432300/strawberry-vanilla-9g-olipop_12pack-main-image_new_asset.webp?v=1779160900583w_1350",
    "https://drinkolipop.com/cdn/shop/files/subscribe_-_hero_-_photo_2.png?v=1663707800&width=1020",
    "https://drinkolipop.com/cdn/shop/files/b6477147eee89366527c67984acc0b007de0ae24.jpg?v=1776895402&width=1440",
    "https://drinkolipop.com/cdn/shop/files/10_12ozGroupLineUp_Hand-Motion_Still_1.png?v=1776895325&width=1920",
    "https://drinkolipop.com/cdn/shop/files/Our-Foundational_1163x1163_2x_84df30d3-1143-4f61-9463-1a1f0fa8bf85_1163x1163@2x.jpg?v=1614286145",
    "https://drinkolipop.com/cdn/shop/files/D-HP-2up-9g.jpg?v=1778263150&width=1280",
    "https://drinkolipop.com/cdn/shop/files/classic-root-beer-6g-olipop_OLIPOP_SS_12oz_CRB_CANHERO_Full_new_asset.webp?v=1778736430&width=1440",
  ],
  productImages: [
    "https://drinkolipop.com/cdn/shop/files/cherry-cola-9g-olipop_gallery-main-image_new_asset.webp?crop=center&height=362&v=1779163770&width=272",
    "https://drinkolipop.com/cdn/shop/files/vintage-cola-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779161590&width=272",
    "https://drinkolipop.com/cdn/shop/files/classic-root-beer-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779161742&width=272",
    "https://drinkolipop.com/cdn/shop/files/cream-soda-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779163263&width=272",
    "https://drinkolipop.com/cdn/shop/files/orange-cream-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779162789&width=272",
    "https://drinkolipop.com/cdn/shop/files/classic-grape-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779163040&width=272",
    "https://drinkolipop.com/cdn/shop/files/crisp-apple-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779163593&width=272",
    "https://drinkolipop.com/cdn/shop/files/ginger-ale-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779164857&width=272",
    "https://drinkolipop.com/cdn/shop/files/lemon-lime-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779163931&width=272",
    "https://drinkolipop.com/cdn/shop/files/tropical-punch-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779163155&width=272",
    "https://drinkolipop.com/cdn/shop/files/blackberry-vanilla-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779162450&width=272",
    "https://drinkolipop.com/cdn/shop/files/citrus-rush-9g-olipop_gallery-image_single-can_new_asset.webp?crop=center&height=362&v=1779196248&width=272",
  ],

  pagesScraped: [
    "https://drinkolipop.com/",
    "https://drinkolipop.com/pages/our-story",
    "https://drinkolipop.com/collections/drinks",
    "https://drinkolipop.com/pages/subscription",
    "https://drinkolipop.com/products/strawberry-vanilla",
    "https://drinkolipop.com/collections/olipop-product-variants",
  ],
};
