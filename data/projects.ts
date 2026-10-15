export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
};

/** Sample case studies — replace with real client work when available */
export const projects: Project[] = [
  {
    slug: "investment-management-cleanup",
    title: "Investment Management Cleanup",
    excerpt:
      "Monthly bookkeeping rebuild and reporting cadence for a growing advisory firm.",
    category: "Bookkeeping",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial charts on a trading screen",
  },
  {
    slug: "money-calculations-system",
    title: "Money Calculations System",
    excerpt:
      "Standardized expense coding and month-end close process for a multi-location operator.",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calculator and financial documents",
  },
  {
    slug: "financial-planning-sprint",
    title: "Financial Planning Sprint",
    excerpt:
      "Cash-flow forecast and budget framework delivered for leadership planning meetings.",
    category: "CFO Advisory",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing business analytics dashboard",
  },
  {
    slug: "data-entry-modernization",
    title: "Data Entry Modernization",
    excerpt:
      "Transaction workflow redesign that cut close time and improved statement accuracy.",
    category: "Bookkeeping",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Data analytics dashboard on a computer screen",
  },
];
