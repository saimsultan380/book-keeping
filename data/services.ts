export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  includes: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "bookkeeping-services",
    title: "Bookkeeping Services",
    shortDescription:
      "Professional ledger management and clean financial reporting to keep your business finances organized and accurate.",
    overview:
      "We maintain your day-to-day books with disciplined categorizing, reconciliations, and monthly reporting. You get clear records ready for tax prep, cash-flow decisions, and lender reviews.",
    includes: [
      "Transaction categorization",
      "Bank and credit-card reconciliation",
      "Monthly financial statements",
      "Accounts payable and receivable support",
    ],
    deliverables: [
      "Reconciled books each month",
      "Profit & loss and balance sheet",
      "Expense summaries by category",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bookkeeping documents and calculator on a desk",
  },
  {
    slug: "corporate-tax",
    title: "Corporate Tax",
    shortDescription:
      "Year-round tax planning and entity optimization designed to help your business manage tax obligations strategically.",
    overview:
      "Corporate tax work should not wait until filing season. We organize records, review documentation gaps, and prepare clean packages so filing is timely and orderly.",
    includes: [
      "Year-round tax readiness",
      "Entity and filing checklist support",
      "Estimated tax guidance",
      "Coordination with your CPA when needed",
    ],
    deliverables: [
      "Organized tax document package",
      "Filing timeline and checklist",
      "Notes on deductions and documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tax forms and financial paperwork on a desk",
  },
  {
    slug: "cfo-advisory",
    title: "CFO Advisory",
    shortDescription:
      "Executive-level financial insights through forecasting, budgeting, and actionable financial intelligence.",
    overview:
      "Our CFO advisory support helps owners see the numbers behind growth decisions. We build forecasts, review budgets, and translate reports into clear next steps.",
    includes: [
      "Cash-flow forecasting",
      "Budget vs. actual reviews",
      "KPI dashboards",
      "Leadership financial briefings",
    ],
    deliverables: [
      "Monthly advisory summary",
      "Forecast workbook",
      "Priority action list",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business team reviewing financial strategy charts",
  },
  {
    slug: "tax-strategy",
    title: "Tax Strategy",
    shortDescription:
      "Proactive tax planning that supports compliance while using available corporate tax advantages responsibly.",
    overview:
      "We look ahead at timing, documentation, and planning opportunities so tax decisions support growth instead of creating year-end surprises.",
    includes: [
      "Proactive annual tax planning",
      "Deduction and credit documentation",
      "Quarterly strategy check-ins",
      "Compliance calendar support",
    ],
    deliverables: [
      "Written tax strategy outline",
      "Quarterly planning notes",
      "Document checklist for your tax pro",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial planning charts and analytics",
  },
  {
    slug: "loan-consultation",
    title: "Loan Consultation",
    shortDescription:
      "Guidance through documentation, financial structuring, and commercial loan application strategy.",
    overview:
      "Lenders want clean numbers. We help prepare financial packages, clarify debt discussions, and organize the paperwork commercial applications typically require.",
    includes: [
      "Financial package preparation",
      "Statement cleanup for lenders",
      "Application document checklist",
      "Debt schedule support",
    ],
    deliverables: [
      "Lender-ready financial summary",
      "Supporting schedules",
      "Application document index",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business professionals discussing loan documents",
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortDescription:
      "Predictive cash-flow modeling and executive guidance without the overhead of a full-time CFO.",
    overview:
      "A Virtual CFO engagement gives you senior financial oversight on a flexible schedule—forecasting, reporting, and decision support without a full-time hire.",
    includes: [
      "Recurring CFO office hours",
      "Cash-flow and runway modeling",
      "Board or owner reporting packs",
      "Scenario planning for growth decisions",
    ],
    deliverables: [
      "Monthly CFO pack",
      "Rolling cash-flow model",
      "Decision memo for key initiatives",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business leaders collaborating in a financial planning meeting",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
