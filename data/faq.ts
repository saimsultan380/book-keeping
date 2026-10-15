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
