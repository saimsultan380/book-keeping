export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
};

/** Client reviews — display names and stock portraits; replace with verified quotes when available */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Their takeoffs arrived on schedule and matched what we found in the field. We submitted a tighter bid and still protected our margin.",
    name: "James Whitfield",
    role: "General Contractor, Whitfield Builders",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of James Whitfield",
  },
  {
    id: "2",
    quote:
      "Clear line items, clear exclusions, and no surprises when we priced materials. Exactly what our estimating desk needed during a busy bid week.",
    name: "Sofia Ramirez",
    role: "Project Manager, Northline Construction",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of Sofia Ramirez",
  },
  {
    id: "3",
    quote:
      "We use them for residential and light commercial. Numbers are consistent, and revisions turn around quickly when addenda hit.",
    name: "Kevin Brooks",
    role: "Lead Estimator, Brooks & Co.",
    avatar:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80",
    avatarAlt: "Portrait of Kevin Brooks",
  },
];
