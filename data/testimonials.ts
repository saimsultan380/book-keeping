export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

/** PLACEHOLDER — sample testimonials only; replace with real client quotes */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Their takeoffs arrived on schedule and matched what we found in the field. We submitted a tighter bid and still protected our margin.",
    name: "Sample Client A",
    role: "General Contractor — Sample",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    quote:
      "Clear line items, clear exclusions, and no surprises when we priced materials. Exactly what our estimating desk needed during a busy bid week.",
    name: "Sample Client B",
    role: "Project Manager — Sample",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    quote:
      "We use them for residential and light commercial. Numbers are consistent, and revisions turn around quickly when addenda hit.",
    name: "Sample Client C",
    role: "Estimator — Sample",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];
