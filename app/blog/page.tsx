import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterStrip } from "@/components/NewsletterStrip";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles on bookkeeping, tax readiness, cash-flow forecasting, virtual CFO support, and preparing financials for business loans.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog & Articles"
        path="/blog/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        intro="Practical guidance on bookkeeping, tax readiness, cash flow, and financial decision-making."
      />

      <Section>
        <SectionHeading
          eyebrow="From the Blog"
          title="Latest Insights"
          intro="Clear, practical articles for owners who want cleaner books and better financial decisions."
        />

        <div className="grid gap-gap md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <NewsletterStrip />
      </Section>
    </>
  );
}
