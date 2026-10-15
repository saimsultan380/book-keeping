import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProgressBar } from "./ProgressBar";
import { expertiseBars } from "@/data/stats";
import { FadeIn } from "@/components/motion/FadeIn";

const points = [
  "Disciplined monthly closes",
  "Direct access to your advisor",
  "Reports owners actually use",
];

export function ExpertiseBlock() {
  return (
    <Section variant="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="How We Help"
            title="Accounting Work That Supports Real Decisions"
            intro="From reconciled books to cash-flow planning, we give you a steady finance rhythm so surprises show up early—not at tax time."
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
              Focus on customers and product. We will keep the books current.
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
