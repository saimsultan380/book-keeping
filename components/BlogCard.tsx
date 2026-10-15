import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/lib/utils";
import { trailingPath } from "@/lib/seo";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Card>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <time className="text-small text-text-muted" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <h3 className="mt-2 font-heading text-h3 text-text">
          <Link
            href={trailingPath(`/blog/${post.slug}`)}
            className="hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-small text-text-muted">
          {post.excerpt}
        </p>
        <Link
          href={trailingPath(`/blog/${post.slug}`)}
          className="mt-5 inline-flex items-center gap-2 font-heading text-small font-semibold text-accent hover:text-accent-hover"
        >
          Read More
          <Icon icon={ArrowRight} size="sm" />
        </Link>
      </div>
    </Card>
  );
}
