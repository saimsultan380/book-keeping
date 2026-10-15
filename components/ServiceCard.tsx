import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/data/services";
import { trailingPath } from "@/lib/seo";

type ServiceCardProps = {
  service: Service;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ServiceCard({
  service,
  ctaLabel = "Read More",
  ctaHref,
}: ServiceCardProps) {
  const href = trailingPath(ctaHref ?? `/services/${service.slug}`);

  return (
    <Card>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-h3 text-text">{service.title}</h3>
        <p className="mt-3 line-clamp-2 text-small text-text-muted">
          {service.shortDescription}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-heading text-small font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          {ctaLabel}
          <Icon icon={ArrowRight} size="sm" />
        </Link>
      </div>
    </Card>
  );
}
