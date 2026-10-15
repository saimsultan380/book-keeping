export type FaqItem = {
  question: string;
  answer: string;
};

export const serviceFaqs: FaqItem[] = [
  {
    question: "What do you need to start bookkeeping?",
    answer:
      "Bank and credit-card access (or statements), prior-year financials if available, and a list of open invoices or bills. We confirm software access before onboarding.",
  },
  {
    question: "How often will I receive reports?",
    answer:
      "Most bookkeeping clients receive monthly profit & loss and balance sheet reports after close. CFO and Virtual CFO clients also receive forecast and KPI packs on an agreed cadence.",
  },
  {
    question: "Do you file taxes for us?",
    answer:
      "We prepare organized packages and planning support. Final signing and filing are handled by your CPA or enrolled tax professional unless a separate engagement is agreed in writing.",
  },
  {
    question: "Can you help with a loan application package?",
    answer:
      "Yes. Our loan consultation service cleans statements, builds supporting schedules, and assembles a lender-ready document index.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Hale",
    role: "Lead Bookkeeper",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Marcus Hale, Lead Bookkeeper",
  },
  {
    name: "Priya Nair",
    role: "Tax Specialist",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Priya Nair, Tax Specialist",
  },
  {
    name: "Daniel Orth",
    role: "CFO Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Daniel Orth, CFO Advisor",
  },
  {
    name: "Elena Vargas",
    role: "Client Coordinator",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Elena Vargas, Client Coordinator",
  },
];

export const partnerLogos = [
  "Partner One",
  "Partner Two",
  "Partner Three",
  "Partner Four",
];
