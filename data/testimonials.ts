export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Our books were finally current within the first month. Month-end reports are clear, and tax season no longer feels like a scramble.",
    name: "James Whitfield",
    role: "Owner, Whitfield Retail Group",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of James Whitfield",
  },
  {
    id: "2",
    quote:
      "The CFO advisory calls helped us understand cash flow before we hired. Practical guidance without a full-time overhead.",
    name: "Sofia Ramirez",
    role: "Founder, Northline Studio",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of Sofia Ramirez",
  },
  {
    id: "3",
    quote:
      "They packaged our financials for a commercial loan request and the lender package was complete the first time.",
    name: "Kevin Brooks",
    role: "Managing Partner, Brooks & Co.",
    avatar:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of Kevin Brooks",
  },
];
