export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  content: string[];
};

/** PLACEHOLDER articles — replace or expand before launch */
export const posts: Post[] = [
  {
    slug: "how-accurate-takeoffs-protect-your-bid",
    title: "How Accurate Takeoffs Protect Your Bid",
    excerpt:
      "A clean quantity takeoff reduces rework, change-order risk, and last-minute pricing mistakes.",
    date: "2026-02-12",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction worker reviewing blueprints",
    content: [
      "An accurate quantity takeoff is the foundation of every competitive bid. When quantities are measured from the plans—and checked against specs and addenda—your pricing starts from known scope instead of assumptions.",
      "Missed items show up later as change orders or lost margin. Over-counting pushes your number too high and can cost you the award. A disciplined takeoff process protects both outcomes.",
      "At Doxo Collective, we organize quantities by trade, note exclusions, and deliver workbooks your team can price quickly during bid week.",
    ],
  },
  {
    slug: "unit-costs-overhead-and-profit-explained",
    title: "Unit Costs, Overhead, and Profit Explained",
    excerpt:
      "Understand how unit costs, markups, and contingency work together in a construction estimate.",
    date: "2026-01-28",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business analytics charts on a desk",
    content: [
      "Unit costs convert measured quantities into dollars. Labor productivity, material prices, and equipment rates all feed into those numbers.",
      "Overhead recovers the cost of running the business. Profit is the return for taking the work. Contingency covers known unknowns that are not yet in the drawings.",
      "A transparent estimate shows each layer clearly so owners and contractors can discuss scope—not just argue about the bottom line.",
    ],
  },
  {
    slug: "preparing-plans-for-a-faster-estimate",
    title: "Preparing Plans for a Faster Estimate",
    excerpt:
      "Complete drawings, current addenda, and clear specs help estimators deliver faster and with fewer clarifications.",
    date: "2026-01-08",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Architectural drawings spread on a table",
    content: [
      "The quality of your estimate depends on the quality of the documents you send. Incomplete sets force assumptions, and assumptions create risk.",
      "Send the latest drawings, specifications, and addenda in one package. Note preferred file formats and any known scope gaps before work begins.",
      "When documents are complete, turnaround improves and your final report needs fewer revision cycles.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
