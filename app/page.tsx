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
import { BlogCard } from "@/components/BlogCard";
import { NewsletterStrip } from "@/components/NewsletterStrip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ExpertiseBlock />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="What Service We Offer"
          intro="Quantity takeoffs, residential and commercial estimating, bid preparation, and detailed cost analysis."
          action={{ label: "All Services", href: "/services" }}
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
          title="Scalable Estimating Packages"
          intro="Choose a package that matches your project size. Final fees depend on drawing volume and deadline."
          align="center"
        />
        <PricingTabs />
      </Section>

      <CounterBand />

      <Section>
        <SectionHeading
          eyebrow="Our Projects"
          title="Recent Estimating Work"
          intro="Sample project types we support. Replace with your portfolio before launch."
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
            title="Trusted Estimating Support for Contractors"
            intro="We measure carefully, document clearly, and return numbers your team can bid with. Sample testimonials below — replace with verified client quotes."
            className="mb-0 md:mb-0"
          />
          <TestimonialCarousel />
        </div>
      </Section>

      <ProcessSteps />
      <VideoCtaBand />

      <Section>
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          intro="Practical notes on quantity takeoffs, cost analysis, and bid preparation."
          action={{ label: "View All", href: "/blog" }}
        />
        <div className="grid gap-gap md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
        <NewsletterStrip />
      </Section>
    </>
  );
}
