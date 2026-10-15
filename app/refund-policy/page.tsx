import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${siteConfig.brand} bookkeeping, tax support, and financial advisory services.`,
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
        intro="How cancellations, unused periods, and refund requests are handled for our services."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-body text-text-muted">
          <p className="text-small text-text">
            Last updated: October 16, 2026
          </p>
          <p>
            This Refund Policy explains when fees paid to {siteConfig.legalName}{" "}
            (&quot;{siteConfig.brand},&quot; &quot;we,&quot; &quot;us&quot;) may
            be refunded or credited. It applies to website package purchases and
            services described in a signed engagement letter. If this policy and
            your engagement letter conflict, the engagement letter controls.
          </p>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              1. General principle
            </h2>
            <p>
              Our fees cover professional time, systems setup, and deliverables.
              Because bookkeeping and advisory work begins as soon as we receive
              access and start cleanup or reporting, refunds depend on whether
              work has started and how much progress has been made.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              2. Work not yet started
            </h2>
            <p>
              If you cancel in writing before we have begun any billable work
              (including account access review, historical cleanup, or kickoff
              calls beyond an initial complimentary consultation), you may
              request a full refund of prepaid fees for that unused engagement.
              We aim to confirm eligibility within five (5) business days of
              receiving your written request.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              3. Monthly bookkeeping and ongoing advisory retainers
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Monthly fees generally cover a defined close period or advisory
                cadence stated in your engagement.
              </li>
              <li>
                If you cancel mid-cycle after work for that period has begun,
                fees for the current period are typically non-refundable. Unused
                future prepaid months may be refunded or credited on a
                pro-rata basis after deducting work already performed.
              </li>
              <li>
                Cancellation notice requirements (for example, 15 or 30 days)
                are defined in your engagement letter. Missing notice may result
                in billing for the next scheduled period.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              4. Project-based services
            </h2>
            <p>
              Project fees (such as historical cleanup, tax packages, loan
              documentation support, or fixed advisory sprints) are handled as
              follows:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-text">
                  Before kickoff:
                </span>{" "}
                Full refund of prepaid project fees, less any non-refundable
                third-party costs already incurred with your approval.
              </li>
              <li>
                <span className="font-semibold text-text">
                  After kickoff:
                </span>{" "}
                Partial refund or credit based on percentage of scope completed
                (for example, cleanup hours used, draft packages delivered, or
                milestone reached). Completed milestones are non-refundable.
              </li>
              <li>
                <span className="font-semibold text-text">
                  After final delivery:
                </span>{" "}
                Project fees are non-refundable once final deliverables have
                been provided and the review window in your engagement has
                closed.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              5. Non-refundable items
            </h2>
            <p>The following are generally not refundable:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Completed monthly closes, reports, forecasts, or packages already
                delivered
              </li>
              <li>
                Third-party software, filing, or lender fees paid on your behalf
                with prior approval
              </li>
              <li>
                Rush or expedited fees once rush work has started
              </li>
              <li>
                Deposits clearly marked as non-refundable in an engagement letter
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              6. How to request a refund
            </h2>
            <p>
              Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {siteConfig.email}
              </a>{" "}
              with:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your business name and contact person</li>
              <li>Invoice number(s) and payment date(s)</li>
              <li>Service type and reason for the request</li>
              <li>Preferred outcome (refund or account credit)</li>
            </ul>
            <p>
              We will review the request, confirm work status, and reply with an
              approval, partial offer, or explanation of denial, typically within
              ten (10) business days.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              7. Processing approved refunds
            </h2>
            <p>
              Approved refunds are issued to the original payment method when
              possible. Processing may take five to fifteen (5–15) business days
              after approval, depending on your bank or card issuer. Credits
              toward future services may be offered as an alternative when both
              parties agree.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              8. Quality concerns
            </h2>
            <p>
              If you believe a deliverable does not match the agreed scope,
              contact us within the review window stated in your engagement (or
              within fourteen (14) days of delivery if no window is stated). We
              will work in good faith to correct scope gaps at no extra charge
              when the issue is our error. Refunds for quality disputes are
              evaluated case by case after we have had a reasonable opportunity
              to cure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              9. Chargebacks
            </h2>
            <p>
              Please contact us before filing a payment dispute with your bank
              or card issuer so we can resolve the matter directly. Unfounded
              chargebacks for completed work may result in suspension of
              services and collection of amounts still owed under your
              engagement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              10. Changes to this policy
            </h2>
            <p>
              We may update this Refund Policy from time to time. The &quot;Last
              updated&quot; date will change when we do. Updates apply to new
              purchases and renewals; existing engagements follow the refund
              terms in effect when those engagements were signed, unless both
              parties agree otherwise in writing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">11. Contact</h2>
            <p>Refund and cancellation requests:</p>
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
