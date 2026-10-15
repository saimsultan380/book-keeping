export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  overviewExtra: string[];
  idealFor: string[];
  availability: string;
  includes: string[];
  deliverables: string[];
  howItWorks: ServiceStep[];
  faqs: ServiceFaq[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "bookkeeping-services",
    title: "Bookkeeping Services",
    shortDescription:
      "Monthly reconciliations, clean categorization, and statements that stay ready for tax and lender reviews.",
    overview:
      "We maintain your day-to-day books with disciplined categorizing, reconciliations, and monthly reporting. You get clear records ready for tax prep, cash-flow decisions, and lender reviews.",
    overviewExtra: [
      "Most clients start when transactions become too heavy for a spreadsheet, or when tax season keeps exposing gaps from the year before. We stabilize the ledger first, then keep a predictable close cadence.",
      "You always know who owns the books, when reports arrive, and what still needs your input—so finance stops interrupting the rest of your week.",
    ],
    idealFor: [
      "Owners tired of catching up at month-end",
      "Teams preparing for cleaner tax seasons",
      "Businesses that need lender-ready statements",
    ],
    availability:
      "Open year-round · Onboarding in 5–7 business days · Monthly close on an agreed calendar",
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
    howItWorks: [
      {
        title: "Connect accounts",
        description:
          "We review your software, bank feeds, and chart of accounts, then confirm access and coding rules.",
      },
      {
        title: "Clean and close",
        description:
          "Historical cleanup happens as needed. Then we close each month on a fixed date with reviewed statements.",
      },
      {
        title: "Stay current",
        description:
          "You receive monthly reports and a short note on anything that needs owner attention.",
      },
    ],
    faqs: [
      {
        question: "What do you need to start bookkeeping?",
        answer:
          "Bank and credit-card access (or statements), prior-year financials if available, and a list of open invoices or bills. We confirm software access before onboarding.",
      },
      {
        question: "How often will I receive reports?",
        answer:
          "You receive profit & loss and balance sheet reports after each monthly close, usually by an agreed date such as the 10th business day.",
      },
      {
        question: "Which accounting software do you support?",
        answer:
          "We commonly work in QuickBooks Online and Xero. If you use another system, tell us during onboarding and we will confirm fit.",
      },
      {
        question: "Can you catch up prior months?",
        answer:
          "Yes. Catch-up bookkeeping is scoped separately based on how many months are incomplete and how messy the records are.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bookkeeping documents and calculator on a desk",
  },
  {
    slug: "corporate-tax",
    title: "Corporate Tax",
    shortDescription:
      "Organized records and filing checklists so tax season starts from complete books—not a last-minute scramble.",
    overview:
      "Corporate tax work should not wait until filing season. We organize records, review documentation gaps, and prepare clean packages so filing is timely and orderly.",
    overviewExtra: [
      "This service is available throughout the year, with higher demand from January through April and around extension deadlines. Starting early gives your CPA cleaner inputs and fewer follow-up requests.",
      "We focus on readiness and documentation. Final signing and e-filing remain with your designated tax professional unless a separate engagement says otherwise.",
    ],
    idealFor: [
      "Entities that want a calmer filing season",
      "Owners coordinating with an outside CPA",
      "Teams that need estimated-tax reminders",
    ],
    availability:
      "Open year-round · Peak support Jan–Apr · Packages prepared on a pre-agreed timeline",
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
    howItWorks: [
      {
        title: "Gather records",
        description:
          "We pull from your books and request missing documents such as 1099 inputs, asset purchases, and loan statements.",
      },
      {
        title: "Organize the package",
        description:
          "Everything is indexed so your CPA can work from one complete set instead of scattered folders.",
      },
      {
        title: "Support filing season",
        description:
          "We stay available for clarification requests and estimated-tax follow-ups after the package is delivered.",
      },
    ],
    faqs: [
      {
        question: "Do you file corporate returns directly?",
        answer:
          "We prepare organized packages and planning support. Final signing and filing are handled by your CPA or enrolled tax professional unless agreed otherwise in writing.",
      },
      {
        question: "When should we start?",
        answer:
          "Ideally 60–90 days before your filing deadline. Mid-year starts still help, especially for estimated taxes and documentation cleanup.",
      },
      {
        question: "What if our books are behind?",
        answer:
          "We recommend finishing catch-up bookkeeping first. Tax packages built on incomplete ledgers create avoidable revisions.",
      },
      {
        question: "Can you work with our existing CPA?",
        answer:
          "Yes. Many clients keep their CPA for filing while we handle readiness, document gathering, and bookkeeping continuity.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tax forms and financial paperwork on a desk",
  },
  {
    slug: "cfo-advisory",
    title: "CFO Advisory",
    shortDescription:
      "Budget reviews, forecasts, and KPI packs that help owners decide with confidence—not gut feel alone.",
    overview:
      "Our CFO advisory support helps owners see the numbers behind growth decisions. We build forecasts, review budgets, and translate reports into clear next steps.",
    overviewExtra: [
      "Advisory sessions run on a recurring monthly schedule during business hours, with extra check-ins available around hiring, fundraising, or major purchases.",
      "This is decision support—not day-to-day transaction coding. Clean books make the advisory much more useful, so many clients pair it with bookkeeping.",
    ],
    idealFor: [
      "Owners making hiring or expansion decisions",
      "Teams that need a rolling cash-flow view",
      "Leadership groups that want monthly KPI reviews",
    ],
    availability:
      "Open year-round · Monthly advisory cadence · Extra sessions around major decisions",
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
    howItWorks: [
      {
        title: "Define the questions",
        description:
          "We start with the decisions you need to make—hiring, pricing, runway, or debt—and the metrics that matter.",
      },
      {
        title: "Build the pack",
        description:
          "Forecasts, budget comparisons, and KPIs are prepared from your books before each advisory meeting.",
      },
      {
        title: "Review and act",
        description:
          "We walk through the numbers, document priorities, and update the model as actuals come in.",
      },
    ],
    faqs: [
      {
        question: "How is CFO advisory different from bookkeeping?",
        answer:
          "Bookkeeping records what happened. CFO advisory uses those records to plan what happens next—cash flow, budgets, and decision trade-offs.",
      },
      {
        question: "How often do we meet?",
        answer:
          "Most clients meet monthly. During busy periods we can add short check-ins between formal sessions.",
      },
      {
        question: "Do we need clean books first?",
        answer:
          "Yes for best results. If books are behind, we usually start with catch-up bookkeeping or run both in parallel.",
      },
      {
        question: "Will you join bank or investor meetings?",
        answer:
          "On request and within scope. Many clients ask us to prepare packs and join selected conversations.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business team reviewing financial strategy charts",
  },
  {
    slug: "tax-strategy",
    title: "Tax Strategy",
    shortDescription:
      "Quarterly planning habits that improve documentation and reduce surprises before year-end.",
    overview:
      "We look ahead at timing, documentation, and planning opportunities so tax decisions support growth instead of creating year-end surprises.",
    overviewExtra: [
      "Strategy reviews are scheduled quarterly during normal business hours, with an annual planning session before year-end. The earlier we start, the more options remain open.",
      "We do not replace your tax preparer. We improve the inputs, timing, and documentation habits that make their work smoother and more useful.",
    ],
    idealFor: [
      "Owners who want fewer April surprises",
      "Businesses with growing deductible activity",
      "Teams ready for a quarterly planning habit",
    ],
    availability:
      "Open year-round · Quarterly check-ins · Annual planning before year-end",
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
    howItWorks: [
      {
        title: "Map the year",
        description:
          "We review entity type, expected income, major purchases, and filing deadlines.",
      },
      {
        title: "Set the cadence",
        description:
          "Quarterly sessions keep documentation current and surface decisions while there is still time to act.",
      },
      {
        title: "Hand off cleanly",
        description:
          "Your tax professional receives clearer records and notes instead of a year-end scramble.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as tax filing?",
        answer:
          "No. Tax strategy improves planning and documentation. Filing remains with your CPA or enrolled agent unless separately engaged.",
      },
      {
        question: "When is the best time to begin?",
        answer:
          "Any quarter works, but starting before the second half of the year usually leaves more planning room.",
      },
      {
        question: "How long are the sessions?",
        answer:
          "Most quarterly reviews run 45–60 minutes, plus follow-up notes afterward.",
      },
      {
        question: "Do you advise on personal taxes too?",
        answer:
          "We focus on business records and entity-level planning. Personal return questions are referred to your tax professional.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial planning charts and analytics",
  },
  {
    slug: "loan-consultation",
    title: "Loan Consultation",
    shortDescription:
      "Clean statements, debt schedules, and a document index prepared for commercial funding applications.",
    overview:
      "Lenders want clean numbers. We help prepare financial packages, clarify debt discussions, and organize the paperwork commercial applications typically require.",
    overviewExtra: [
      "This service opens whenever you are preparing a commercial funding request. Turnaround depends on how current your books are and how complete the supporting documents are.",
      "We prepare lender-ready materials. We do not guarantee approval, rates, or underwriting outcomes.",
    ],
    idealFor: [
      "Owners applying for commercial credit",
      "Teams with messy statements before underwriting",
      "Businesses that need a clean debt schedule",
    ],
    availability:
      "Open year-round · Scoped per application · Faster when books are already current",
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
    howItWorks: [
      {
        title: "Review lender needs",
        description:
          "We confirm which statements, schedules, and narratives the application requires.",
      },
      {
        title: "Clean the package",
        description:
          "Books and supporting documents are organized so underwriters see consistency, not gaps.",
      },
      {
        title: "Deliver the index",
        description:
          "You receive a complete package and document index ready to submit or share with your banker.",
      },
    ],
    faqs: [
      {
        question: "Can you help with a loan application package?",
        answer:
          "Yes. We clean statements, build supporting schedules, and assemble a lender-ready document index.",
      },
      {
        question: "How long does packaging usually take?",
        answer:
          "Often 1–3 weeks after books are current. Catch-up bookkeeping, if needed, adds time before packaging starts.",
      },
      {
        question: "Do you contact the lender for us?",
        answer:
          "We can join calls or prepare responses when requested. You remain the applicant of record.",
      },
      {
        question: "What if our financials are outdated?",
        answer:
          "We pause packaging and catch the books up first. Lenders rarely move forward on stale or inconsistent statements.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business professionals discussing loan documents",
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortDescription:
      "Fractional CFO cadence with cash-flow models and owner reporting—without a full-time hire.",
    overview:
      "A Virtual CFO engagement gives you senior financial oversight on a flexible schedule—forecasting, reporting, and decision support without a full-time hire.",
    overviewExtra: [
      "Virtual CFO support is available as a recurring monthly engagement during business hours. It suits companies that need more than bookkeeping but are not ready for a full-time finance leader.",
      "Expect a fixed meeting cadence, a rolling cash-flow model, and owner packs you can reuse in leadership meetings.",
    ],
    idealFor: [
      "Companies past DIY spreadsheets",
      "Founders preparing for growth or funding",
      "Teams that need fractional senior finance help",
    ],
    availability:
      "Open year-round · Monthly retainer · Office hours on an agreed schedule",
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
    howItWorks: [
      {
        title: "Set the operating rhythm",
        description:
          "We agree on meeting cadence, report format, and the decisions your leadership team needs support on.",
      },
      {
        title: "Install the model",
        description:
          "A rolling cash-flow and KPI pack is built from your books and updated as actuals arrive.",
      },
      {
        title: "Advise and adjust",
        description:
          "Monthly reviews turn the model into priorities—hiring, spend, runway, and scenario planning.",
      },
    ],
    faqs: [
      {
        question: "How is Virtual CFO different from CFO Advisory?",
        answer:
          "Virtual CFO is a deeper ongoing retainer with modeling, office hours, and leadership packs. Advisory can be lighter and more meeting-focused.",
      },
      {
        question: "Do you replace our bookkeeper?",
        answer:
          "No. Strong bookkeeping feeds the CFO work. Many clients keep both services active together.",
      },
      {
        question: "What is the typical monthly time commitment?",
        answer:
          "Most retainers include a monthly working session plus async review time. Exact hours are set in the engagement letter.",
      },
      {
        question: "Can this scale into a full-time CFO search later?",
        answer:
          "Yes. Some clients use Virtual CFO while they grow, then transition to an internal hire with cleaner systems already in place.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business leaders collaborating in a financial planning meeting",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
