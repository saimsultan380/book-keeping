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
      "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=600&q=80&crop=faces",
    imageAlt: "Marcus Hale, Lead Bookkeeper",
  },
  {
    name: "Priya Nair",
    role: "Tax Specialist",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80&crop=faces",
    imageAlt: "Priya Nair, Tax Specialist",
  },
  {
    name: "Daniel Orth",
    role: "CFO Advisor",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=600&q=80&crop=faces",
    imageAlt: "Daniel Orth, CFO Advisor",
  },
  {
    name: "Elena Vargas",
    role: "Client Coordinator",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80&crop=faces",
    imageAlt: "Elena Vargas, Client Coordinator",
  },
];
