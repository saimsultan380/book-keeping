import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.brand} for bookkeeping, tax planning, CFO advisory, and loan consultation support.`,
  path: "/contact-us/",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        path="/contact-us/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        intro="Send your question, books access details, or funding timeline. We respond during business hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Request a Consultation"
              intro="Complete the form and attach plans if ready. Large files can be shared after we reply."
              className="mb-8 md:mb-8"
            />
            <ContactForm variant="full" />
          </div>

          <div className="space-y-8">
            <div className="rounded-md border border-border bg-card p-8 shadow-card">
              <h2 className="font-heading text-h3 text-text">Contact Details</h2>
              <ul className="mt-6 space-y-5 text-body text-text-muted">
                <li className="flex gap-3">
                  <Icon icon={MapPin} className="mt-1 shrink-0 text-accent" />
                  <span>{siteConfig.address.full}</span>
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
                <li className="flex gap-3">
                  <Icon icon={Clock} className="mt-1 shrink-0 text-accent" />
                  <span>
                    {siteConfig.hours.weekdays}
                    <br />
                    {siteConfig.hours.weekend}
                  </span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-md border border-border bg-surface">
              <div className="flex aspect-[4/3] items-center justify-center p-8 text-center">
                <div>
                  <p className="font-heading text-h3 text-text">Map Placeholder</p>
                  <p className="mt-2 text-small text-text-muted">
                    Embed Google Maps or another map provider here once the final
                    address is confirmed.
                  </p>
                  <p className="mt-4 text-small text-text">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
