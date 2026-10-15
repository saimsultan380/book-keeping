import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: `The page you requested could not be found on ${siteConfig.brand}.`,
  path: "/",
  noIndex: true,
  omitCanonical: true,
});

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-eyebrow uppercase text-accent">404</p>
      <h1 className="mt-3 text-h1 text-text">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-body text-text-muted">
        The page you requested does not exist or has moved. Use the links below
        to continue.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/" variant="accent">
          Back to Home
        </Button>
        <Button href="/services/" variant="outline">
          Services
        </Button>
        <Button href="/pricing/" variant="outline">
          Pricing
        </Button>
        <Button href="/contact-us/" variant="outline">
          Contact Us
        </Button>
      </div>
      <ul className="mx-auto mt-10 max-w-sm space-y-2 text-small text-text-muted">
        {siteConfig.nav
          .filter((item) => item.href !== "/")
          .map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-accent hover:text-accent-hover">
                {item.label}
              </a>
            </li>
          ))}
      </ul>
    </Section>
  );
}
