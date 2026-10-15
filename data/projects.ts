export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  clientType: string;
  timeline: string;
  image: string;
  imageAlt: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  servicesUsed: string[];
};

/** Sample case studies — anonymized examples for display */
export const projects: Project[] = [
  {
    slug: "investment-management-cleanup",
    title: "Investment Management Cleanup",
    excerpt:
      "Monthly bookkeeping rebuild and reporting cadence for a growing advisory firm.",
    category: "Bookkeeping",
    clientType: "Regional investment advisory practice",
    timeline: "6-week cleanup · Ongoing monthly close",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial charts on a trading screen",
    challenge:
      "The firm had grown past spreadsheet bookkeeping. Bank feeds were incomplete, advisor draws mixed with operating expenses, and month-end reports arrived too late for partner meetings.",
    approach: [
      "Reconciled eight months of historical activity and separated personal draws from operating costs.",
      "Rebuilt the chart of accounts around fee income, soft-dollar costs, and overhead.",
      "Installed a fixed monthly close calendar with profit & loss and balance sheet delivered before partner reviews.",
    ],
    outcomes: [
      "Month-end close moved from ~25 days to under 10 business days.",
      "Partners received consistent reports ahead of weekly ops meetings.",
      "Tax package prep the following year started from complete, reconciled books.",
    ],
    servicesUsed: ["Bookkeeping Services", "Tax Strategy"],
  },
  {
    slug: "money-calculations-system",
    title: "Money Calculations System",
    excerpt:
      "Standardized expense coding and month-end close process for a multi-location operator.",
    category: "Operations",
    clientType: "Multi-location service business",
    timeline: "4-week systems sprint · 90-day support",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calculator and financial documents",
    challenge:
      "Each location coded expenses differently. Leadership could not compare store performance, and the close kept slipping while staff cleaned coding errors.",
    approach: [
      "Designed a shared expense coding guide and trained location managers on weekly categorization.",
      "Centralized bank reconciliation and created location-level P&L views.",
      "Documented a close checklist with owners for each step so work was repeatable.",
    ],
    outcomes: [
      "Coding errors dropped sharply within the first two close cycles.",
      "Leadership gained comparable location reports for the first time.",
      "Close process became trainable instead of depending on one person.",
    ],
    servicesUsed: ["Bookkeeping Services", "CFO Advisory"],
  },
  {
    slug: "financial-planning-sprint",
    title: "Financial Planning Sprint",
    excerpt:
      "Cash-flow forecast and budget framework delivered for leadership planning meetings.",
    category: "CFO Advisory",
    clientType: "Growing product company",
    timeline: "3-week advisory sprint",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing business analytics dashboard",
    challenge:
      "The company was planning a hiring wave and equipment purchase with only a bank balance view. Leadership needed a 13-week cash forecast and a simple budget they could revisit monthly.",
    approach: [
      "Mapped expected collections, payroll, rent, vendor payments, and tax remittances from current books.",
      "Built a rolling 13-week cash-flow model and a first-pass annual budget by department.",
      "Ran two working sessions with ownership to pressure-test hiring timing and spend priorities.",
    ],
    outcomes: [
      "Hiring plan delayed by one quarter based on forecast runway.",
      "Leadership adopted a monthly budget vs. actual review habit.",
      "Cash decisions moved from gut feel to a shared model.",
    ],
    servicesUsed: ["CFO Advisory", "Virtual CFO"],
  },
  {
    slug: "data-entry-modernization",
    title: "Data Entry Modernization",
    excerpt:
      "Transaction workflow redesign that cut close time and improved statement accuracy.",
    category: "Bookkeeping",
    clientType: "Professional services firm",
    timeline: "5-week workflow redesign",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Data analytics dashboard on a computer screen",
    challenge:
      "Staff entered invoices and bills by hand with inconsistent dates and missing attachments. Reconciliations took too long, and statements often needed rework before they were usable.",
    approach: [
      "Connected bank and credit-card feeds, then set rules for recurring vendors.",
      "Introduced a weekly transaction review instead of a month-end pile-up.",
      "Added a document checklist so invoices and bills were attached before close.",
    ],
    outcomes: [
      "Weekly review replaced end-of-month data entry marathons.",
      "Reconciliation time fell by roughly half after rules were in place.",
      "Statements required fewer revisions before owner review.",
    ],
    servicesUsed: ["Bookkeeping Services"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
