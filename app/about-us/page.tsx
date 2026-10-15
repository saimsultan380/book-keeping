import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/PageBanner";
import { CounterBand } from "@/components/CounterBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/data/faq";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.brand} — construction estimating specialists focused on accurate takeoffs and clear cost reports.`,
  path: "/about-us/",
});

const values = [
  {
    title: "Precision",
    text: "Every quantity is measured from the drawings, not assumed from similar jobs.",
  },
  {
    title: "Clarity",
    text: "Assumptions, exclusions, and unit costs are documented so your team can review quickly.",
  },
  {
    title: "Reliability",
    text: "Deadlines matter. We confirm timing before work starts and communicate early if scope grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        path="/about-us/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        intro="A construction estimating firm built for contractors who need dependable numbers."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Team reviewing construction plans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built Around Bid Accuracy"
              className="mb-6 md:mb-6"
            />
            <div className="space-y-4 text-body text-text-muted">
              <p>
                {siteConfig.brand} was founded to give contractors a steady
                estimating partner—especially during busy bid weeks when in-house
                capacity is stretched.
              </p>
              <p>
                Our mission is simple: deliver measured takeoffs and transparent
                cost reports that protect your margin and support competitive
                bids.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeading
          eyebrow="Our Values"
          title="How We Work"
          align="center"
        />
        <div className="grid gap-gap md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-md border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-heading text-h3 text-text">{v.title}</h3>
              <p className="mt-3 text-body text-text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CounterBand />

      <Section>
        <SectionHeading
          eyebrow="Our Team"
          title="Estimators Behind the Numbers"
          intro="Experienced estimators, surveyors, and coordinators focused on clear takeoffs and on-time delivery."
          align="center"
        />
        <div className="grid gap-gap sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square overflow-hidden rounded-md">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-heading text-body font-semibold text-text">
                {member.name}
              </h3>
              <p className="mt-1 text-small text-text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <ProcessSteps variant="surface" />

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Contractors Say"
            intro="Feedback from contractors who use our takeoffs and cost reports on live bids."
            align="center"
          />
          <TestimonialCarousel />
        </div>
      </Section>

      <VideoCtaBand />
    </>
  );
}
