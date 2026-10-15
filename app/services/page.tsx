import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PricingCard } from "@/components/PricingCard";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { pricingPackages } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Bookkeeping & Financial Services",
  description:
    "Bookkeeping, corporate tax, CFO advisory, tax strategy, loan consultation, and virtual CFO services from Doxo Collective.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        path="/services/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        intro="Bookkeeping and financial advisory services built around accurate books and clear reporting."
      />

      <Section>
        <SectionHeading
          eyebrow="What We Offer"
          title="Financial Services for Growing Businesses"
          intro="Six core services covering bookkeeping, tax, CFO advisory, and loan support."
        />
        <div className="grid gap-gap sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              ctaLabel="Get Started"
              ctaHref="/contact-us/"
            />
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Make Appointment"
              title="Want cleaner books this month? Let’s talk."
              className="mb-6 md:mb-6"
            />
            <ul className="space-y-4 text-body text-text-muted">
              <li className="flex gap-3">
                <Icon icon={MapPin} className="mt-1 shrink-0 text-accent" />
                {siteConfig.address.full}
              </li>
              <li className="flex gap-3">
                <Icon icon={Mail} className="mt-1 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon icon={Phone} className="mt-1 shrink-0 text-accent" />
                <a href={siteConfig.phoneHref} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Button href="/contact-us/" variant="accent">
                Schedule Consultation
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-8 shadow-card">
            <p className="text-eyebrow uppercase text-accent">Work Hours</p>
            <p className="mt-3 font-heading text-h3 text-text">
              {siteConfig.hours.weekdays}
            </p>
            <p className="mt-2 text-body text-text-muted">
              {siteConfig.hours.weekend}
            </p>
          </div>
        </div>
      </Section>

      <ProcessSteps variant="surface" />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Testimonials"
            title={`Trusted by businesses across ${siteConfig.countriesServed} countries`}
            intro="Business owners rely on our books, tax packages, and advisory support when decisions cannot wait."
            className="mb-0 md:mb-0"
          />
          <TestimonialCarousel />
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeading
          eyebrow="Pricing"
          title="Popular Packages"
          intro="A selection of our financial packages. See the full list on the pricing page."
          action={{ label: "View Pricing", href: "/pricing/" }}
        />
        <div className="grid gap-gap md:grid-cols-3">
          {pricingPackages.slice(0, 3).map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      <VideoCtaBand
        title="Ready to Get Started With the Right Service?"
        description="Tell us what you need—bookkeeping, tax support, or CFO guidance—and we will recommend a clear next step."
      />
    </>
  );
}
