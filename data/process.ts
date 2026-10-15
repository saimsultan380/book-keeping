export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Review Your Finances",
    description:
      "We assess your accounting needs, financial position, and business objectives.",
  },
  {
    number: "02",
    title: "Build Your Strategy",
    description:
      "We develop the right approach across bookkeeping, tax, CFO advisory, or commercial financing.",
  },
  {
    number: "03",
    title: "Grow With Confidence",
    description:
      "Use accurate reporting and practical financial guidance to make stronger business decisions.",
  },
];
