export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
};

/** PLACEHOLDER projects — sample portfolio only */
export const projects: Project[] = [
  {
    slug: "midtown-office-fitout",
    title: "Midtown Office Fit-Out",
    excerpt: "Full trade takeoff and bid prep for a 28,000 sq ft interior renovation.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern office interior under renovation",
  },
  {
    slug: "lakeside-residence",
    title: "Lakeside Custom Residence",
    excerpt: "Residential estimate covering structure, finishes, and site work.",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Custom residential home exterior",
  },
  {
    slug: "retail-plaza-expansion",
    title: "Retail Plaza Expansion",
    excerpt: "Cost analysis and quantity takeoffs for a phased retail addition.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail plaza exterior",
  },
  {
    slug: "school-wing-addition",
    title: "School Wing Addition",
    excerpt: "Advanced estimating for a multi-trade institutional addition.",
    category: "Institutional",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "School building exterior",
  },
];
