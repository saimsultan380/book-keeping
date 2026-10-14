export type FaqItem = {
  question: string;
  answer: string;
};

export const serviceFaqs: FaqItem[] = [
  {
    question: "What files do you need to start?",
    answer:
      "PDF or CAD drawings, specifications, and any addenda. If you have a preferred bid form or cost codes, include those as well.",
  },
  {
    question: "How long does a typical estimate take?",
    answer:
      "Most residential packages turn around in 2–4 business days. Commercial and advanced scopes depend on drawing volume and deadline. We confirm timing before work begins.",
  },
  {
    question: "Do you provide unit costs for my local market?",
    answer:
      "Yes. We price using current material and labor data appropriate to your region, and we note any allowances where market pricing is volatile.",
  },
  {
    question: "Can you revise the estimate after an addendum?",
    answer:
      "Yes. Revision support is available on every package. Complex multi-phase projects may include scheduled revision rounds.",
  },
];

export const teamMembers = [
  {
    name: "Sample Lead Estimator",
    role: "Senior Estimator — PLACEHOLDER",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sample Takeoff Specialist",
    role: "Quantity Surveyor — PLACEHOLDER",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sample Cost Analyst",
    role: "Cost Analyst — PLACEHOLDER",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sample Project Coordinator",
    role: "Client Coordinator — PLACEHOLDER",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

export const partnerLogos = [
  "Partner One",
  "Partner Two",
  "Partner Three",
  "Partner Four",
]; // PLACEHOLDER names
