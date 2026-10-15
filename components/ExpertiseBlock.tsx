import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProgressBar } from "./ProgressBar";
import { expertiseBars } from "@/data/stats";
import { FadeIn } from "@/components/motion/FadeIn";

const points = [
  "Constant Improvement",
  "Commitment to Customers",
  "Best Quality You Can Get",
];

export function ExpertiseBlock() {
  return (
    <Section variant="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Expertise"
            title="Reliable Estimating Solutions for Your Projects"
            intro="From early budgets to final bid packages, we deliver measured quantities and clear cost reports that help you bid with control."
            className="mb-8 md:mb-8"
          />
          <div className="space-y-6">
            {expertiseBars.map((bar) => (
              <ProgressBar
                key={bar.id}
                label={bar.label}
                value={bar.value}
              />
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-md border border-border bg-card p-4"
              >
                <Icon icon={Check} className="mt-0.5 text-accent shrink-0" />
                <span className="font-heading font-medium text-text">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-md bg-primary p-8 text-text-on-dark">
            <p className="font-heading text-h3">
              You Focus on the Build, We Handle the Numbers
            </p>
            <div className="mt-6">
              <Button href="/services/" variant="on-dark">
                View Services
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
