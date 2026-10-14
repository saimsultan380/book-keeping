import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPage() {
  return (
    <>
      <PageBanner
        title="Refund Policy"
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
            Estimating fees are typically tied to completed takeoff and report
            work. If work has not started, a full refund may be available. Once
            measuring or costing has begun, fees may be partially refundable
            based on progress.
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
