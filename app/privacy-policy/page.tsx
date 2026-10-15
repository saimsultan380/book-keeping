import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brand} — how we collect and use information submitted through doxocollective.com.`,
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
      />
      <Section>
        <div className="prose-site mx-auto max-w-3xl space-y-5 text-body text-text-muted">
          <p className="rounded-md border border-border bg-surface p-4 text-small text-text">
            LEGAL PLACEHOLDER — Have counsel review and replace this text before
            launch.
          </p>
          <p>
            {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;) respects your
            privacy. This policy describes how we collect and use information
            submitted through this website.
          </p>
          <h2 className="text-h3 text-text">Information we collect</h2>
          <p>
            Contact forms may collect your name, email, phone number, project
            details, and any files you upload. Newsletter signup collects email
            only.
          </p>
          <h2 className="text-h3 text-text">How we use information</h2>
          <p>
            We use submitted information to respond to inquiries, prepare
            estimates, and — if you subscribe — send occasional updates. We do
            not sell personal information.
          </p>
          <h2 className="text-h3 text-text">Contact</h2>
          <p>
            Questions about this policy:{" "}
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
