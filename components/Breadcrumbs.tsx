import Link from "next/link";
import {
  breadcrumbJsonLd,
  trailingPath,
  type BreadcrumbItem,
} from "@/lib/seo";

export type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  /** Canonical path of the current page, e.g. "/about-us/" or "/services/quantity-takeoff/" */
  currentPath: string;
};

export function Breadcrumbs({ items, currentPath }: BreadcrumbsProps) {
  const schemaItems: BreadcrumbItem[] = items.map((item, index) => {
    const isLast = index === items.length - 1;
    if (isLast) {
      return { name: item.label, path: currentPath };
    }
    return {
      name: item.label,
      path: item.href ? trailingPath(item.href) : currentPath,
    };
  });

  const jsonLd = breadcrumbJsonLd(schemaItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-small">
        <ol
          className="flex flex-wrap items-center gap-2 text-text-on-dark-muted"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            const href =
              !isLast && item.href ? trailingPath(item.href) : undefined;

            return (
              <li
                key={`${item.label}-${i}`}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {i > 0 ? <span aria-hidden>/</span> : null}
                {href ? (
                  <Link href={href} className="hover:text-accent" itemProp="item">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span className="text-text-on-dark" itemProp="name">
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
