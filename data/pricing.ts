export type PricingPackage = {
  id: string;
  name: string;
  forWhom: string;
  price: string;
  description: string;
  includes: string[];
};

/** PLACEHOLDER — confirm price ranges with client before launch */
export const pricingPackages: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic Estimating",
    forWhom: "Small residential projects",
    price: "$100 – $250",
    description:
      "A focused estimate for smaller residential scopes where you need a clear takeoff and cost summary without excess paperwork.",
    includes: [
      "Basic quantity takeoff",
      "Material cost estimation",
      "Labor cost calculation",
      "Detailed estimate report",
    ],
  },
  {
    id: "detailed",
    name: "Detailed Estimating",
    forWhom: "Budget planning",
    price: "$250 – $500",
    description:
      "Deeper quantity and cost detail for owners and contractors who need a reliable budget before committing to bid.",
    includes: [
      "Detailed quantity takeoffs",
      "Material & labor pricing",
      "Project cost breakdown",
      "Professional estimate report",
    ],
  },
  {
    id: "residential",
    name: "Residential Estimating",
    forWhom: "Construction and renovation",
    price: "$300 – $600",
    description:
      "Full residential estimating support for new builds, additions, and renovation packages.",
    includes: [
      "Residential quantity takeoffs",
      "Material cost analysis",
      "Labor cost estimation",
      "Complete project estimate",
    ],
  },
  {
    id: "commercial",
    name: "Commercial Estimating",
    forWhom: "Commercial projects",
    price: "$500 – $1,000",
    description:
      "Structured commercial estimates with trade-level detail suited to GC and subcontractor bidding.",
    includes: [
      "Commercial quantity takeoffs",
      "Detailed material pricing",
      "Labor & equipment costs",
      "Comprehensive cost analysis",
    ],
  },
  {
    id: "bid",
    name: "Bid Preparation",
    forWhom: "Competitive bids",
    price: "$400 – $800",
    description:
      "Bid-ready numbers and supporting worksheets so your team can submit clean, competitive proposals.",
    includes: [
      "Accurate bid calculations",
      "Detailed quantity takeoffs",
      "Material & labor pricing",
      "Competitive bid preparation",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Estimating",
    forWhom: "Complex projects",
    price: "$1,000 – $1,500",
    description:
      "Extended support for complex, multi-trade, or multi-phase projects that need more than a standard package.",
    includes: [
      "Complex project takeoffs",
      "Detailed cost analysis",
      "Material & labor estimates",
      "Complete estimating support",
    ],
  },
];
