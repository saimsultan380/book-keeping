import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Refund Policy",
  description: `Refund policy for ${siteConfig.brand} bookkeeping and financial services — terms for cancellations and partial refunds.`,
  path: "/refund-policy/",
});

export default function RefundPage() {
  return (
    <>
      <PageBanner
        title="Refund Policy"
        path="/refund-policy/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Refund Policy" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-body text-text-muted">
          <p className="rounded-md border border-border bg-surface p-4 text-small text-text">
            LEGAL PLACEHOLDER — Confirm refund terms with the business owner and
            counsel before launch.
          </p>
          <p>
            Service fees are typically tied to completed bookkeeping periods or
            advisory work. If work has not started, a full refund may be
            available. Once monthly close or advisory deliverables have begun,
            fees may be partially refundable based on progress.
          </p>
          <p>
            Contact{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent hover:text-accent-hover"
            >
              {siteConfig.email}
            </a>{" "}
            to discuss a refund request.
          </p>
        </div>
      </Section>
    </>
  );
}
