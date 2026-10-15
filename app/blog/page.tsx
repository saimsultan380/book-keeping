import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { BlogCard } from "@/components/BlogCard";
import { Section } from "@/components/ui/Section";
import { posts } from "@/data/posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles on bookkeeping, tax readiness, cash-flow forecasting, and preparing financials for business loans.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        path="/blog/"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        intro="Practical reading for business owners and finance teams."
      />
      <Section>
        <div className="grid gap-gap md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
