import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/lib/utils";
import { trailingPath } from "@/lib/seo";

export function BlogCard({ post }: { post: Post }) {
  const href = trailingPath(`/blog/${post.slug}`);

  return (
    <Card className="group flex h-full flex-col">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-small text-text-muted">
          <span className="rounded-sm bg-surface px-2.5 py-1 font-heading text-eyebrow uppercase text-accent">
            {post.category}
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 font-heading text-h3 text-text">
          <Link href={href} className="transition-colors hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-small text-text-muted line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-heading text-small font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          Read More
          <Icon icon={ArrowRight} size="sm" />
        </Link>
      </div>
    </Card>
  );
}
