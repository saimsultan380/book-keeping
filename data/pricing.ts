export type PricingPackage = {
  id: string;
  name: string;
  forWhom: string;
  price: string;
  description: string;
  includes: string[];
  /** Middle-column highlight in the pricing grid */
  featured?: boolean;
};

/** PLACEHOLDER — confirm price ranges with client before launch */
export const pricingPackages: PricingPackage[] = [
  {
    id: "bookkeeping",
    name: "Bookkeeping Services",
    forWhom: "Growing small businesses",
    price: "$300 – $600 / mo",
    description:
      "Monthly bookkeeping that keeps your ledgers clean, reconciled, and ready for tax season.",
    includes: [
      "Monthly reconciliations",
      "Profit & loss reporting",
      "Expense categorization",
      "Dedicated bookkeeper contact",
    ],
  },
  {
    id: "corporate-tax",
    name: "Corporate Tax",
    forWhom: "Entities preparing for filing",
    price: "$500 – $1,200",
    description:
      "Organized tax preparation support so filings start from complete, well-documented books.",
    includes: [
      "Document organization",
      "Filing checklist",
      "Estimated tax notes",
      "CPA coordination support",
    ],
    featured: true,
  },
  {
    id: "cfo-advisory",
    name: "CFO Advisory",
    forWhom: "Owners needing financial direction",
    price: "$800 – $1,500 / mo",
    description:
      "Advisory sessions focused on forecasting, budgeting, and clear financial decisions.",
    includes: [
      "Monthly forecast review",
      "Budget vs. actual analysis",
      "KPI reporting",
      "Strategy call with leadership",
    ],
  },
  {
    id: "tax-strategy",
    name: "Tax Strategy",
    forWhom: "Businesses planning ahead",
    price: "$400 – $900",
    description:
      "Proactive planning sessions that reduce year-end scramble and improve documentation habits.",
    includes: [
      "Annual planning session",
      "Quarterly check-ins",
      "Documentation checklist",
      "Written strategy summary",
    ],
  },
  {
    id: "loan",
    name: "Loan Consultation",
    forWhom: "Commercial funding applications",
    price: "$450 – $950",
    description:
      "Lender-ready financial packaging and application support for commercial funding requests.",
    includes: [
      "Financial package prep",
      "Statement cleanup",
      "Debt schedule support",
      "Document index for lenders",
    ],
    featured: true,
  },
  {
    id: "virtual-cfo",
    name: "Virtual CFO",
    forWhom: "Teams needing fractional leadership",
    price: "$1,200 – $2,500 / mo",
    description:
      "Ongoing fractional CFO support with cash-flow modeling and executive reporting.",
    includes: [
      "Monthly CFO pack",
      "Cash-flow modeling",
      "Scenario planning",
      "Scheduled office hours",
    ],
  },
];
