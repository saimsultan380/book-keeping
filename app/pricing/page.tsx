import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { PricingCard } from "@/components/PricingCard";
import { ContactForm } from "@/components/ContactForm";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { pricingPackages } from "@/data/pricing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for construction estimating packages — from basic takeoffs to advanced multi-trade estimates.",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
        intro="Simple, transparent pricing for every project"
      />

      <Section>
        <SectionHeading
          eyebrow="Packages"
          title="Choose the Right Estimating Package"
          intro="Ranges are placeholders pending confirmation. Final pricing depends on drawing set size, trades covered, and turnaround."
          align="center"
        />
        <div className="grid gap-gap md:grid-cols-2 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Ask About a Package"
              intro="Tell us about your project and we will recommend the right fit."
              className="mb-6 md:mb-6"
            />
            <ContactForm variant="compact" />
          </div>
          <div className="rounded-md border border-border bg-card p-8 shadow-card h-fit">
            <h3 className="font-heading text-h3 text-text">Contact Details</h3>
            <ul className="mt-6 space-y-4 text-body text-text-muted">
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
              <li>{siteConfig.hours.weekdays}</li>
            </ul>
          </div>
        </div>
      </Section>

      <VideoCtaBand />
    </>
  );
}
