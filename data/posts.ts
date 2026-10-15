export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
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
    category: "Bookkeeping",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial documents and calculator on a desk",
    content: [
      "Clean books are the foundation of accurate tax filing. When transactions are categorized and reconciled every month, year-end work becomes a review—not a reconstruction of twelve months of guesswork.",
      "Many owners wait until January to sort receipts and bank feeds. By then, missing invoices, uncleared transfers, and personal expenses mixed into business accounts create delays and higher prep fees.",
      "A steady bookkeeping cadence protects both compliance and decision-making throughout the year. You always know what you earned, what you spent, and what is still outstanding.",
      "Start with three habits: separate business and personal accounts, categorize weekly, and reconcile every statement before month-end close. Those steps alone remove most tax-season surprises.",
      "At Doxo Collective, we keep monthly closes on schedule so tax packages start from numbers you can trust—and so your CPA spends time on strategy instead of cleanup.",
    ],
  },
  {
    slug: "cash-flow-forecasting-for-growing-teams",
    title: "Cash Flow Forecasting for Growing Teams",
    excerpt:
      "A simple rolling forecast helps owners see runway, hiring capacity, and payment timing before problems appear.",
    date: "2026-01-28",
    category: "CFO Advisory",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business analytics charts on a laptop screen",
    content: [
      "Cash-flow forecasting connects what already happened in your books with what is likely to happen next. It is one of the highest-value uses of accurate bookkeeping.",
      "A rolling 13-week forecast is enough for most growing teams. It shows expected collections, payroll, rent, vendor payments, and tax remittances so you can spot short weeks early.",
      "Owners use forecasts to plan hiring, equipment purchases, and loan timing. Without them, growth decisions rely on the current bank balance—which is often a lagging, incomplete signal.",
      "Build the forecast from your reconciled books, then update it weekly with actuals. The goal is not perfection. The goal is fewer surprises.",
      "Our CFO advisory packages include a rolling forecast you can review in plain language during scheduled check-ins.",
    ],
  },
  {
    slug: "preparing-financials-for-a-business-loan",
    title: "Preparing Financials for a Business Loan",
    excerpt:
      "Lenders look for clear statements, consistent categorization, and a complete document package.",
    date: "2026-01-08",
    category: "Loan Support",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professionals reviewing business loan paperwork",
    content: [
      "Commercial lenders review more than a single year of profit and loss. They want consistency, reconciliations, and supporting schedules that explain how the business operates.",
      "A typical package includes recent financial statements, a debt schedule, bank statements, tax returns, and a short narrative of use of funds. Incomplete packages slow underwriting and invite follow-up questions.",
      "Before you apply, clean your books, remove personal expenses from business ledgers, and confirm that month-end closes match your bank activity. Those steps improve credibility more than a polished pitch deck.",
      "Loan consultation at Doxo Collective focuses on lender-ready packaging—organizing statements, building schedules, and assembling a document index—not empty promises about approval.",
    ],
  },
  {
    slug: "monthly-close-checklist-for-small-businesses",
    title: "A Practical Monthly Close Checklist for Small Businesses",
    excerpt:
      "Close the month with a short, repeatable checklist so reports stay useful and tax season stays calm.",
    date: "2025-12-18",
    category: "Bookkeeping",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dashboard showing monthly business performance metrics",
    content: [
      "A monthly close is simply a finish line: confirm every account is reviewed, every balance is explained, and reports are ready for decision-making.",
      "Use this short checklist: reconcile bank and credit cards, clear undeposited funds, review outstanding invoices and bills, confirm payroll and tax liabilities, then publish profit & loss and balance sheet.",
      "Assign a fixed close date—often by the 10th business day. Consistency matters more than speed. Teams that close late usually make decisions on incomplete data.",
      "If you outsource bookkeeping, ask for the close calendar in writing. Knowing when reports arrive helps leadership plan reviews and advisory calls.",
    ],
  },
  {
    slug: "when-to-add-virtual-cfo-support",
    title: "When Growing Companies Should Add Virtual CFO Support",
    excerpt:
      "Fractional CFO support makes sense when reporting needs outgrow basic bookkeeping—but a full-time hire is still premature.",
    date: "2025-12-02",
    category: "Virtual CFO",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Leadership team discussing financial plans in a meeting",
    content: [
      "Many companies outgrow DIY spreadsheets long before they need a full-time CFO. That middle stage is where virtual CFO support is most useful.",
      "Signals you may be ready: cash feels unpredictable, hiring decisions are based on hope, lenders ask for forecasts you cannot produce, or ownership meetings run without clear financial packs.",
      "A virtual CFO builds the operating rhythm—forecasts, KPI reviews, and decision memos—while your bookkeeper keeps the ledger accurate. Both roles matter; they are not the same job.",
      "Start with a defined monthly scope and meeting cadence. Expand only when the reporting system is used by leadership, not filed away unread.",
    ],
  },
  {
    slug: "year-round-tax-readiness-habits",
    title: "Year-Round Tax Readiness Habits That Save Time Later",
    excerpt:
      "Tax strategy works best as a monthly habit, not a March emergency. Here is a practical rhythm owners can keep.",
    date: "2025-11-14",
    category: "Tax Strategy",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Advisor reviewing tax and planning documents with a client",
    content: [
      "Tax readiness is mostly documentation discipline. If your books are clean and your receipts are stored as you go, filing season becomes an assembly task.",
      "Set quarterly reminders for estimated taxes, deductible expense reviews, and payroll tax remittances. Small corrections during the year beat large corrections in April.",
      "Keep a shared folder for W-9s, contracts, asset purchases, and loan statements. Your tax professional will ask for them—having them ready reduces fees and follow-ups.",
      "Doxo Collective pairs bookkeeping with tax-strategy check-ins so planning conversations happen while there is still time to act.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
