import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.brand} website and engaging our bookkeeping and financial services.`,
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
        intro="Rules for using our website and engaging Doxo Collective for bookkeeping and advisory work."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-body text-text-muted">
          <p className="text-small text-text">
            Last updated: October 16, 2026
          </p>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access
            to {siteConfig.url.replace("https://", "")} and your use of services
            offered by {siteConfig.legalName} (&quot;{siteConfig.brand},&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By browsing this
            website or engaging our services, you agree to these Terms. If you do
            not agree, please do not use the site or request services.
          </p>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              1. About our services
            </h2>
            <p>
              {siteConfig.brand} provides bookkeeping, corporate tax support, tax
              strategy assistance, CFO advisory, loan consultation packaging, and
              virtual CFO services for businesses. Website descriptions,
              package ranges, and sample case studies are informational. Final
              scope, fees, and deliverables are set in a written engagement
              letter or statement of work signed by both parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              2. Website use
            </h2>
            <p>When using this website, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Attempt to disrupt, scrape, or reverse engineer the site or its
                systems
              </li>
              <li>
                Submit false, misleading, or unlawful information through forms
              </li>
              <li>
                Upload malware, copyrighted material you do not have rights to,
                or confidential data belonging to others without authorization
              </li>
              <li>
                Use the site for any purpose that violates applicable law
              </li>
            </ul>
            <p>
              We may suspend or limit access to the website at any time for
              maintenance, security, or misuse.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              3. Client responsibilities
            </h2>
            <p>
              Accurate bookkeeping and advisory work depends on complete and
              timely information from you. You are responsible for:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Providing bank feeds, login access (or secure file shares),
                invoices, receipts, entity documents, and prior financials as
                requested
              </li>
              <li>
                Reviewing draft reports and notifying us promptly of errors or
                missing items
              </li>
              <li>
                Keeping us informed of material business changes that affect
                books, taxes, or forecasts
              </li>
              <li>
                Obtaining your own licensed CPA, attorney, or tax preparer when
                filings, legal opinions, or representation before tax
                authorities are required, unless a separate engagement expressly
                covers those services
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              4. Professional limitations
            </h2>
            <p>
              Unless stated otherwise in a signed engagement, we provide
              bookkeeping and financial advisory support. We are not a law firm
              and do not provide legal advice. Tax preparation or filing
              authority remains with your designated tax professional when that
              work is outside our agreed scope. Forecasts and advisory
              recommendations are based on information available at the time and
              are not guarantees of future results, funding approval, or tax
              outcomes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              5. Fees and payment
            </h2>
            <p>
              Published website prices are starting ranges only. Fees, billing
              frequency (monthly or project-based), and payment methods are
              confirmed in your engagement documents. Invoices are due as stated
              on each invoice. Late or unpaid balances may result in pause of
              work until accounts are current. Refund eligibility is described in
              our{" "}
              <a
                href="/refund-policy/"
                className="text-accent hover:text-accent-hover"
              >
                Refund Policy
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              6. Intellectual property
            </h2>
            <p>
              Website content, branding, templates, and process materials owned
              by {siteConfig.brand} remain our property. Client-specific
              deliverables (such as reports prepared for your business) are
              licensed for your internal business use. You may not resell,
              republish, or redistribute our proprietary workbooks, templates, or
              marketing content without written permission. You retain ownership
              of your source data and documents.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              7. Confidentiality
            </h2>
            <p>
              We treat non-public client financial information as confidential
              and use it only to perform agreed services or as required by law.
              You agree not to share login credentials we provide to third
              parties without need-to-know authorization.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              8. Disclaimers
            </h2>
            <p>
              The website and its content are provided on an &quot;as is&quot;
              and &quot;as available&quot; basis. To the fullest extent
              permitted by law, we disclaim warranties of merchantability,
              fitness for a particular purpose, and non-infringement regarding
              website content. Service warranties, if any, are limited to those
              stated in your signed engagement letter.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              9. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, {siteConfig.brand} and its
              owners, employees, and contractors shall not be liable for
              indirect, incidental, special, consequential, or punitive damages,
              or for lost profits, arising from website use or services, even if
              advised of the possibility. Our aggregate liability for any claim
              related to a service engagement shall not exceed the fees you paid
              us for the specific services giving rise to the claim during the
              three (3) months preceding the claim, except where prohibited by
              law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless {siteConfig.brand} from
              claims, losses, and expenses (including reasonable attorneys’
              fees) arising from your misuse of the website, inaccurate
              information you provide, or your breach of these Terms or an
              engagement agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              11. Termination
            </h2>
            <p>
              Either party may end a service engagement according to the notice
              and wind-down terms in the engagement letter. We may refuse or end
              services if information is incomplete, payment is overdue, or
              continued work would violate law or professional standards. Website
              Terms remain in effect for as long as you use the site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              12. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of{" "}
              {siteConfig.address.state}, United States, without regard to
              conflict-of-law rules. Courts located in {siteConfig.address.state}{" "}
              shall have exclusive jurisdiction over disputes arising from these
              Terms or the website, except where mandatory consumer protections
              require otherwise.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              13. Changes to these Terms
            </h2>
            <p>
              We may update these Terms periodically. The &quot;Last
              updated&quot; date will reflect changes. Continued use of the
              website after updates means you accept the revised Terms. Material
              changes to active service engagements will be handled through
              written agreement updates.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">14. Contact</h2>
            <p>Questions about these Terms:</p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                <span className="font-semibold text-text">{siteConfig.brand}</span>
              </li>
              <li>{siteConfig.address.full}</li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:text-accent-hover"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-accent hover:text-accent-hover"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
