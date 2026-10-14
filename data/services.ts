export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  includes: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "quantity-takeoff",
    title: "Quantity Takeoff",
    shortDescription:
      "Detailed material quantities from your plans so bids start from measured scope, not guesswork.",
    overview:
      "We measure every trade from your drawings and specs, producing clear quantity sheets you can price with confidence. Our takeoffs support residential, commercial, and light industrial work.",
    includes: [
      "CSI-aligned quantity sheets",
      "Plan and addendum review",
      "Trade-by-trade material counts",
      "Clarifications for missing scope",
    ],
    deliverables: [
      "Excel or PDF takeoff workbook",
      "Marked-up plan references",
      "Scope notes and exclusions",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction plans and measuring tools on a desk",
  },
  {
    slug: "residential-estimating",
    title: "Residential Estimating",
    shortDescription:
      "Cost estimates for homes, renovations, and multi-family builds with local labor and material pricing.",
    overview:
      "From single-family remodels to multi-unit residential, we prepare estimates that reflect current material prices and labor productivity so you can bid competitively without undercutting margins.",
    includes: [
      "Full residential takeoff",
      "Material and labor costing",
      "Allowance recommendations",
      "Owner-ready summary report",
    ],
    deliverables: [
      "Itemized residential estimate",
      "Unit-cost backup",
      "Optional bid form package",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern residential home exterior",
  },
  {
    slug: "commercial-estimating",
    title: "Commercial Estimating",
    shortDescription:
      "Structured estimates for offices, retail, hospitality, and institutional projects.",
    overview:
      "Commercial bids demand disciplined scope control. We break work into trade packages, apply current unit costs, and flag risk areas that often become change orders.",
    includes: [
      "Commercial quantity takeoffs",
      "Trade package breakdowns",
      "Equipment and labor costing",
      "Contingency guidance",
    ],
    deliverables: [
      "Comprehensive cost analysis",
      "Division summaries",
      "Risk and assumption notes",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Commercial building exterior",
  },
  {
    slug: "bid-preparation",
    title: "Bid Preparation",
    shortDescription:
      "Competitive bid packages with clear inclusions, exclusions, and pricing ready for submission.",
    overview:
      "We assemble bid documents that present your numbers cleanly. That includes takeoff support, unit pricing, and bid form preparation so your team can focus on strategy and relationships.",
    includes: [
      "Bid form completion support",
      "Accurate bid calculations",
      "Material and labor pricing",
      "Inclusion and exclusion lists",
    ],
    deliverables: [
      "Submission-ready bid package",
      "Support worksheets",
      "Clarification log",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Estimator reviewing bid documents",
  },
  {
    slug: "detailed-cost-analysis",
    title: "Detailed Cost Analysis",
    shortDescription:
      "Line-item cost breakdowns covering materials, labor, overhead, profit, and contingency.",
    overview:
      "When you need more than a lump sum, we provide transparent cost analysis across every major cost center so owners, GCs, and lenders can see how the number was built.",
    includes: [
      "Line-item cost breakdown",
      "Overhead and profit modeling",
      "Contingency recommendations",
      "Value-engineering options",
    ],
    deliverables: [
      "Detailed cost report",
      "Summary dashboards",
      "Optional presentation PDF",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cost analysis spreadsheet and calculator",
  },
  {
    slug: "advanced-estimating",
    title: "Advanced Estimating",
    shortDescription:
      "Complex project support for multi-phase, multi-trade, and high-spec scopes.",
    overview:
      "Large or unusual projects need deeper review. Our advanced estimating service covers complex assemblies, phased work, and coordination across design packages.",
    includes: [
      "Complex project takeoffs",
      "Multi-phase cost planning",
      "Specialty trade coordination",
      "Ongoing estimate revisions",
    ],
    deliverables: [
      "Full estimating workbook",
      "Revision history",
      "Dedicated estimator contact",
    ],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Large construction site with cranes",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
