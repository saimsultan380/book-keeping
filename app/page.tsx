import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutBlock } from "@/components/AboutBlock";
import { ExpertiseBlock } from "@/components/ExpertiseBlock";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingTabs } from "@/components/PricingTabs";
import { CounterBand } from "@/components/CounterBand";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${siteConfig.brand} | Bookkeeping, Tax & CFO Advisory`,
  description: siteConfig.description,
  path: "/",
});

const homeBreadcrumbs = breadcrumbJsonLd([{ name: "Home", path: "/" }]);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbs) }}
      />
      <Hero />
      <AboutBlock />
      <ExpertiseBlock />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Finance Services for Growing Companies"
          intro="Pick the support you need now—bookkeeping, tax packages, advisory, or funding prep—and expand as your team grows."
          action={{ label: "All Services", href: "/services/" }}
        />
        <div className="grid gap-gap sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Packages That Match Your Stage"
          intro="Clear monthly and project ranges. Final fees depend on transaction volume, entity complexity, and meeting cadence."
          align="center"
        />
        <PricingTabs />
      </Section>

      <CounterBand />

      <Section id="selected-work">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent Client Engagements"
          intro="Examples of bookkeeping cleanups, planning sprints, and reporting systems we put in place."
        />
        <div className="grid gap-gap sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Owners Stay in Control. We Keep the Numbers Straight."
            intro="You get on-time closes, readable reports, and advisors who explain trade-offs—so finance stops being a monthly mystery."
            className="mb-0 md:mb-0"
          />
          <TestimonialCarousel />
        </div>
      </Section>

      <ProcessSteps />
      <VideoCtaBand />
    </>
  );
}
