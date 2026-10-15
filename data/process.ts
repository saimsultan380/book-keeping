export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Current Setup",
    description:
      "Tell us about your software, bank accounts, pain points, and what reports you need each month.",
  },
  {
    number: "02",
    title: "We Build Your Rhythm",
    description:
      "We set the close calendar, clean the ledger as needed, and agree on bookkeeping, tax, or advisory scope.",
  },
  {
    number: "03",
    title: "Run on Clear Numbers",
    description:
      "You receive on-time reports and practical notes so hiring, spending, and funding decisions rest on facts.",
  },
];
