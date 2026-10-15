export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "why-clean-books-matter-before-tax-season",
    title: "Why Clean Books Matter Before Tax Season",
    excerpt:
      "Reconciled ledgers and organized receipts turn filing season into a checklist—not a crisis.",
    date: "2026-02-12",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial documents and calculator",
    content: [
      "Clean books are the foundation of accurate tax filing. When transactions are categorized and reconciled monthly, year-end work becomes a review—not a reconstruction.",
      "Gaps in documentation create delays and missed opportunities. A steady bookkeeping cadence protects both compliance and decision-making throughout the year.",
      "At Doxo Collective, we keep monthly closes on schedule so tax packages start from numbers you can trust.",
    ],
  },
  {
    slug: "cash-flow-forecasting-for-growing-teams",
    title: "Cash Flow Forecasting for Growing Teams",
    excerpt:
      "A simple rolling forecast helps owners see runway, hiring capacity, and payment timing before problems appear.",
    date: "2026-01-28",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business analytics charts on a screen",
    content: [
      "Cash-flow forecasting connects what already happened in your books with what is likely to happen next. It is one of the highest-value uses of accurate bookkeeping.",
      "Owners use forecasts to plan hiring, equipment purchases, and loan timing. Without them, growth decisions rely on bank-balance guesswork.",
      "Our CFO advisory packages include a rolling forecast you can update as sales and expenses change.",
    ],
  },
  {
    slug: "preparing-financials-for-a-business-loan",
    title: "Preparing Financials for a Business Loan",
    excerpt:
      "Lenders look for clear statements, consistent categorization, and a complete document package.",
    date: "2026-01-08",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professionals reviewing business loan paperwork",
    content: [
      "Commercial lenders review more than a single year of profit and loss. They want consistency, reconciliations, and supporting schedules that explain how the business operates.",
      "Incomplete packages slow underwriting. Cleaning statements and assembling a document index before you apply saves weeks.",
      "Loan consultation at Doxo Collective focuses on lender-ready packaging—not empty promises about approval.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
