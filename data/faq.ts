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

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

/** Team profiles — stock photos for display; swap for real headshots when available */
export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Hale",
    role: "Senior Estimator",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Marcus Hale, Senior Estimator",
  },
  {
    name: "Priya Nair",
    role: "Quantity Surveyor",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Priya Nair, Quantity Surveyor",
  },
  {
    name: "Daniel Orth",
    role: "Cost Analyst",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Daniel Orth, Cost Analyst",
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
]; // PLACEHOLDER names
