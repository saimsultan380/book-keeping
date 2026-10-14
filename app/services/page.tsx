import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { pricingPackages } from "@/data/pricing";
import { partnerLogos } from "@/data/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Construction Estimating Services",
  description:
    "Quantity takeoff services, residential and commercial estimating, bid preparation, and detailed cost analysis.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        intro="Construction estimating services built around accurate takeoffs and clear cost reports."
      />

      <Section>
        <SectionHeading
          eyebrow="What We Offer"
          title="Estimating Services for Every Bid"
          intro="Six core services covering takeoffs, costing, and bid preparation."
        />
        <div className="grid gap-gap sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              ctaLabel="Get Started"
              ctaHref="/contact-us"
            />
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Make Appointment"
              title="Need an estimate? Make an appointment now"
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
              <Button href="/contact-us" variant="accent">
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

      <Section>
        <SectionHeading
          eyebrow="Partners"
          title="Trusted Across Projects"
          intro="Placeholder partner names — replace with real client or partner logos."
          align="center"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {partnerLogos.map((name) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center rounded-md border border-border bg-surface text-small font-heading font-semibold text-text-muted"
            >
              {name}
            </div>
          ))}
        </div>
      </Section>

      <ProcessSteps variant="surface" />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Testimonials"
            title={`Trusted by contractors across ${siteConfig.countriesServed} countries`}
            intro="Placeholder figure and sample quotes — confirm before launch."
            className="mb-0 md:mb-0"
          />
          <TestimonialCarousel />
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeading
          eyebrow="Pricing"
          title="Popular Packages"
          intro="A selection of our estimating packages. See the full list on the pricing page."
          action={{ label: "View Pricing", href: "/pricing" }}
        />
        <div className="grid gap-gap md:grid-cols-3">
          {pricingPackages.slice(0, 3).map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Contact"
            title="Request a Service Quote"
            align="center"
          />
          <ContactForm variant="compact" />
        </div>
      </Section>
    </>
  );
}
