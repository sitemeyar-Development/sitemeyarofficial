export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  cover: { from: string; to: string; emoji: string };
  content: string[];
  keywords: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "semantic-seo-2026-guide",
    title: "Semantic SEO in 2026: How to Rank When Google Reads Meaning, Not Keywords",
    excerpt: "A practical playbook for building topical authority with entity-driven content clusters that compound traffic month after month.",
    category: "SEO",
    author: "Sitemeyar Editorial",
    date: "2026-04-22",
    readTime: "9 min",
    cover: { from: "oklch(0.85 0.12 220)", to: "oklch(0.7 0.18 240)", emoji: "🔎" },
    keywords: ["semantic SEO", "topical authority", "entity SEO", "content clusters"],
    content: [
      "Search engines no longer match keywords. They match meaning. The brands that win in 2026 are the ones that build topical authority around entities, not isolated phrases.",
      "Start with an entity map of your business. List every product, service, location, and audience as a node. Each node becomes a hub page surrounded by intent-specific spoke pages.",
      "Write for the question, the follow-up, and the objection. Cover the topic so completely that a reader never has to open a second tab. Google rewards completeness with featured snippets and stable rankings.",
      "Internal linking is the architecture that makes the cluster legible to crawlers. Link siblings to siblings, spokes to hubs, and hubs to commercial pages. Use descriptive anchors that name the entity.",
      "Measure topic share of voice, not just keyword rank. The goal is to own the conversation, not a single SERP.",
    ],
  },
  {
    slug: "google-business-profile-top-3",
    title: "Google Business Profile: How to Land in the Top 3 Map Pack in 6 Weeks",
    excerpt: "The exact GBP optimization checklist we used to put a dental clinic, a tour operator, and a law firm into the local 3-pack.",
    category: "Local SEO",
    author: "Sitemeyar Editorial",
    date: "2026-04-08",
    readTime: "7 min",
    cover: { from: "oklch(0.88 0.1 60)", to: "oklch(0.72 0.16 30)", emoji: "📍" },
    keywords: ["Google Business Profile", "local SEO", "map pack", "GBP optimization"],
    content: [
      "The map pack is the most valuable real estate in local search. Three slots, infinite intent, and the buyer is already holding their wallet.",
      "Categories drive everything. Choose the most specific primary category that matches your money service, then add every relevant secondary category.",
      "Photos are a ranking factor. Upload 10 fresh, geo-tagged photos every week for the first 90 days. Mix interior, exterior, team, and product shots.",
      "Reviews compound. Aim for one new review per business day with the target keyword in the response. Reply within 24 hours, every time.",
      "Local content on your website signals relevance. Build city pages, neighbourhood pages, and service-area pages with embedded GBP, schema, and unique copy.",
    ],
  },
  {
    slug: "high-roas-meta-ads-funnel",
    title: "The 4-Layer Meta Ads Funnel That Hits 4x ROAS Without Burning Budget",
    excerpt: "How we structure cold, warm, hot, and retention layers so every dollar finds its highest-intent buyer.",
    category: "Paid Ads",
    author: "Sitemeyar Editorial",
    date: "2026-03-19",
    readTime: "8 min",
    cover: { from: "oklch(0.86 0.12 300)", to: "oklch(0.65 0.2 280)", emoji: "📈" },
    keywords: ["Meta ads", "ROAS", "Facebook ads funnel", "performance marketing"],
    content: [
      "Most accounts fail because they collapse the funnel into one campaign. Cold buyers do not behave like warm buyers, and treating them the same wastes spend.",
      "Layer 1 — Cold prospecting with broad creative testing. Run 6 to 8 hooks per week with a single CBO budget and let the algorithm find the winner.",
      "Layer 2 — Warm engagement retargeting. Show case studies and proof to anyone who watched 50% of a video or visited the site without converting.",
      "Layer 3 — Hot intent retargeting. Time-bound offers for cart abandoners, pricing-page visitors, and high-intent searchers from Google.",
      "Layer 4 — Retention and LTV. Reactivation campaigns for past customers with new offers and bundles. This is the cheapest acquisition channel you have.",
    ],
  },
  {
    slug: "shopify-vs-wordpress-2026",
    title: "Shopify vs WordPress in 2026: Which Stack Actually Converts Better?",
    excerpt: "A founder's guide to picking the right CMS based on margin, catalog size, content depth, and SEO ambition.",
    category: "Web Development",
    author: "Sitemeyar Editorial",
    date: "2026-03-02",
    readTime: "6 min",
    cover: { from: "oklch(0.88 0.08 160)", to: "oklch(0.7 0.14 180)", emoji: "🧱" },
    keywords: ["Shopify", "WordPress", "ecommerce CMS", "website development"],
    content: [
      "There is no universal answer. There is only the answer that matches your business model, margin, and team.",
      "Choose Shopify if you have a transactional catalog with under 5,000 SKUs, you sell direct-to-consumer, and you want zero infrastructure overhead.",
      "Choose WordPress when content depth is your moat. Long-form SEO, knowledge bases, course funnels, and editorial-led commerce all live better on WordPress.",
      "For headless or custom stacks, only invest if your traffic justifies the engineering. Below 500K monthly visits, the ROI almost always favours a managed platform.",
      "Whatever you choose, ship Core Web Vitals in the green at launch. Speed is a conversion lever, not just an SEO checkbox.",
    ],
  },
  {
    slug: "ai-product-photography-conversion",
    title: "AI Product Photography: What Actually Converts vs What Just Looks Cool",
    excerpt: "Five rules from running A/B tests on AI-generated visuals across food, beauty, and lifestyle brands.",
    category: "Visual Content",
    author: "Sitemeyar Editorial",
    date: "2026-02-14",
    readTime: "5 min",
    cover: { from: "oklch(0.9 0.06 120)", to: "oklch(0.7 0.14 150)", emoji: "📸" },
    keywords: ["AI photography", "product photography", "ecommerce visuals", "creative testing"],
    content: [
      "AI visuals are not a shortcut. They are a tool. Used badly they look generic and tank trust. Used well they outperform studio shoots at 1/10th the cost.",
      "Rule one — anchor the AI in real product photos. Always feed the model a clean reference image of the actual product, not just a prompt.",
      "Rule two — match the lifestyle to the buyer, not the brand fantasy. Test scenes that mirror the customer's home, kitchen, or routine.",
      "Rule three — keep the hero shot photographic, use AI for context. Pack shots stay real. Lifestyle, hands, and environment can be generated.",
      "Rule four — A/B every variant. Hero image is the single highest-impact PDP element. Treat it like an ad creative.",
    ],
  },
  {
    slug: "core-web-vitals-conversion-rate",
    title: "Core Web Vitals Are a Conversion Lever, Not Just an SEO Score",
    excerpt: "How a 1.2s improvement in LCP added 18% to checkout completion on a Shopify store we audited.",
    category: "Web Performance",
    author: "Sitemeyar Editorial",
    date: "2026-01-30",
    readTime: "6 min",
    cover: { from: "oklch(0.86 0.1 180)", to: "oklch(0.65 0.16 220)", emoji: "⚡" },
    keywords: ["Core Web Vitals", "page speed", "LCP", "conversion rate optimization"],
    content: [
      "Speed is not a vanity metric. Every 100ms of latency on mobile checkout costs measurable revenue at scale.",
      "Largest Contentful Paint under 2.5 seconds is the single biggest unlock. Compress hero images, preload critical fonts, and serve from a real CDN.",
      "Interaction to Next Paint replaced FID. Trim third-party scripts, defer analytics, and split heavy bundles per route.",
      "Cumulative Layout Shift kills trust. Reserve dimensions for every image, ad, and embed. Ship skeletons, not jumps.",
      "Audit on real devices, not lab tools. The CrUX dataset is the truth Google ranks on.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
