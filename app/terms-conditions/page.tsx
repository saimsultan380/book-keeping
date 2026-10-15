import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.brand} website and construction estimating services.`,
  path: "/terms-conditions/",
});

export default function TermsPage() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        path="/terms-conditions/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-body text-text-muted">
          <p className="rounded-md border border-border bg-surface p-4 text-small text-text">
            LEGAL PLACEHOLDER — Replace with attorney-reviewed terms before
            launch.
          </p>
          <p>
            By using this website and engaging {siteConfig.legalName} for
            estimating services, you agree to these terms.
          </p>
          <h2 className="text-h3 text-text">Services</h2>
          <p>
            Estimates and takeoffs are prepared from the documents you provide.
            Accuracy depends on the completeness of those documents. We are not
            responsible for bid outcomes or construction means and methods.
          </p>
          <h2 className="text-h3 text-text">Intellectual property</h2>
          <p>
            Deliverables are licensed for your project use. Redistribution or
            resale of our workbooks without written permission is not allowed.
          </p>
          <h2 className="text-h3 text-text">Contact</h2>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent hover:text-accent-hover"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
