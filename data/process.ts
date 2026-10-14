export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Plans",
    description:
      "Send drawings, specs, and addenda. Tell us the trades you need measured and your bid deadline.",
  },
  {
    number: "02",
    title: "We Prepare the Estimate",
    description:
      "Our estimators complete the takeoff, apply current costing, and document assumptions and exclusions.",
  },
  {
    number: "03",
    title: "Review and Bid with Confidence",
    description:
      "You receive a clear report you can price, adjust, and submit. Revisions are available when documents change.",
  },
];
