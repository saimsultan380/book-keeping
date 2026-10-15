import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPostBySlug, posts } from "@/data/posts";
import { PageBanner } from "@/components/PageBanner";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/lib/utils";
import { createPageMetadata, trailingPath } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { robots: { index: false, follow: false } };
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageBanner
        title={post.title}
        path={`/blog/${post.slug}/`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title },
        ]}
        intro={`${post.category} · ${formatDate(post.date)} · ${post.readTime}`}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-md shadow-card">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <p className="text-body text-text-muted border-l-4 border-accent pl-5">
            {post.excerpt}
          </p>

          <div className="mt-8 space-y-5 text-body text-text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 font-heading text-small font-semibold text-primary hover:text-accent"
            >
              <Icon icon={ArrowLeft} size="sm" />
              Back to Blog
            </Link>
            <Button href="/contact-us/" variant="accent">
              Talk to an Advisor
              <Icon icon={ArrowRight} size="sm" />
            </Button>
          </div>
        </article>
      </Section>

      {related.length > 0 ? (
        <Section variant="surface">
          <SectionHeading
            eyebrow="Keep Reading"
            title="Related Articles"
            action={{ label: "All Articles", href: trailingPath("/blog/") }}
          />
          <div className="grid gap-gap md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
