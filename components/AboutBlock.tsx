import Image from "next/image";
import { Check, LineChart, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FadeIn } from "@/components/motion/FadeIn";

const checklist = [
  "Bookkeeping Services",
  "Tax Strategy",
  "CFO Advisory",
  "Loan Consultation",
];

export function AboutBlock() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="Advisors collaborating on financial planning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-md bg-accent px-5 py-4 text-on-accent shadow-card">
              <p className="font-heading text-h3 leading-none">10+ Years</p>
              <p className="mt-1 text-small">Financial advisory experience</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading
            eyebrow="About Our Firm"
            title="Integrity, Precision, and Partnership that Scales"
            className="mb-6 md:mb-6"
          />
          <div className="space-y-4 text-body text-text-muted">
            <p>
              Doxo Collective provides authoritative financial consulting,
              commercial loan strategy, and enterprise accounting services
              designed to support long-term fiscal stability.
            </p>
            <p>
              Whether you need a bookkeeping overhaul, strategic tax planning,
              or help preparing commercial funding documents, our advisors act
              as an extension of your leadership team.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 text-body">
                <Icon icon={Check} size="sm" className="text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 rounded-md border border-border bg-card p-4">
              <Icon icon={LineChart} boxed />
              <div>
                <p className="font-heading font-semibold text-text">
                  Advanced Analytics
                </p>
                <p className="mt-1 text-small text-text-muted">
                  Clear reporting you can act on
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-md border border-border bg-card p-4">
              <Icon icon={ShieldCheck} boxed />
              <div>
                <p className="font-heading font-semibold text-text">
                  Certified Team
                </p>
                <p className="mt-1 text-small text-text-muted">
                  Experienced advisors on every engagement
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/about-us/" variant="primary">
              More About Us
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
