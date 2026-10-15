import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brand} — how we collect, use, and protect information submitted through doxocollective.com.`,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        path="/privacy-policy/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        intro="How we collect, use, and protect information when you visit our site or engage our team."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-body text-text-muted">
          <p className="text-small text-text">
            Last updated: October 16, 2026
          </p>
          <p>
            {siteConfig.legalName} (&quot;{siteConfig.brand},&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
            {siteConfig.url.replace("https://", "")} and provides bookkeeping,
            tax support, and financial advisory services. This Privacy Policy
            explains what information we collect, how we use it, and the choices
            you have. By using our website or submitting information to us, you
            agree to the practices described here.
          </p>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              1. Information we collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-text">Contact details</span>{" "}
                — name, email address, phone number, company name, and mailing
                address when you fill out forms or email us.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Service inquiry details
                </span>{" "}
                — project descriptions, accounting tools you use, entity type,
                transaction volume notes, and other context you provide so we
                can recommend a package.
              </li>
              <li>
                <span className="font-semibold text-text">Files you upload</span>{" "}
                — documents or attachments shared through our contact form or
                later during an engagement (for example, statements or prior
                reports).
              </li>
              <li>
                <span className="font-semibold text-text">Newsletter data</span>{" "}
                — email address if you subscribe to updates.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Technical data
                </span>{" "}
                — IP address, browser type, device information, pages visited,
                and approximate location collected automatically through standard
                website logs and analytics tools.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              2. How we use information
            </h2>
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule consultations</li>
              <li>
                Prepare proposals, engagement letters, and service recommendations
              </li>
              <li>
                Deliver bookkeeping, tax support, CFO advisory, loan packaging,
                and related services under a signed agreement
              </li>
              <li>
                Send service-related messages, invoices, and—if you opt
                in—occasional educational or promotional emails
              </li>
              <li>
                Improve our website, security, and client experience
              </li>
              <li>Comply with legal, accounting, and regulatory obligations</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              3. Cookies and analytics
            </h2>
            <p>
              Our website may use cookies or similar technologies to remember
              preferences, measure traffic, and understand how visitors use the
              site. You can control cookies through your browser settings. Blocking
              cookies may limit some site features.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              4. Sharing of information
            </h2>
            <p>
              We may share information only as needed to operate our business,
              including with:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Service providers who help us host the website, send email,
                process payments, or store files, under confidentiality
                obligations
              </li>
              <li>
                Your designated CPA, attorney, lender, or other advisor when you
                authorize us to coordinate on your behalf
              </li>
              <li>
                Professional advisors and authorities when required by law,
                regulation, court order, or to protect our rights and safety
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              5. Data retention
            </h2>
            <p>
              We keep personal information for as long as needed to fulfill the
              purposes described in this policy, meet contractual and tax record
              requirements, resolve disputes, and comply with applicable law.
              Website inquiry records that do not become a client engagement may
              be deleted earlier on a periodic review schedule.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">6. Security</h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards appropriate to the nature of the information we handle.
              No method of transmission or storage is completely secure. Please
              use strong passwords for any portals we share and notify us
              promptly if you suspect unauthorized access to your accounts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              7. Your choices and rights
            </h2>
            <p>
              Depending on where you live, you may have rights to access,
              correct, delete, or restrict certain personal information, or to
              opt out of marketing emails. To exercise these rights, contact us
              using the details below. You may unsubscribe from promotional
              emails at any time via the link in those messages. We will still
              send transactional messages related to active services when
              required.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              8. Children’s privacy
            </h2>
            <p>
              Our website and services are directed to businesses and adults. We
              do not knowingly collect personal information from children under
              16. If you believe a child has provided information to us, contact
              us and we will take appropriate steps to delete it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              9. International visitors
            </h2>
            <p>
              We are based in the United States. If you access our site from
              outside the U.S., your information may be processed in the United
              States where privacy laws may differ from those in your country.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">
              10. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;Last updated&quot; date at the top will change when we do.
              Continued use of the website after updates constitutes acceptance
              of the revised policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-h3 text-text">11. Contact us</h2>
            <p>
              For privacy questions or requests, contact:
            </p>
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
