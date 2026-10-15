import { processSteps } from "@/data/process";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function ProcessSteps({
  variant = "default",
}: {
  variant?: "default" | "surface";
}) {
  return (
    <Section variant={variant}>
      <SectionHeading
        eyebrow="Our Process"
        title="A Simple Path from Messy Books to Clear Reports"
        intro="Three steps. No jargon wall. You always know what happens next."
        align="center"
      />
      <div className="relative grid gap-8 md:grid-cols-3">
        <div
          className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-border md:block"
          aria-hidden
        />
        {processSteps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.08}>
            <div className="relative text-center md:text-left">
              <p className="font-heading text-h1 text-accent/30 leading-none">
                {step.number}.
              </p>
              <h3 className="mt-4 font-heading text-h3 text-text">
                {step.title}
              </h3>
              <p className="mt-3 text-body text-text-muted">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
