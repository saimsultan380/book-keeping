import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Site origin without trailing slash, always non-www HTTPS. */
export function getSiteOrigin(): string {
  return siteConfig.url.replace(/\/+$/, "");
}

/**
 * Build a canonical absolute URL (non-www + trailing slash).
 * Home → https://doxocollective.com/
 * Path → https://doxocollective.com/about-us/
 */
export function canonicalUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") return `${origin}/`;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutQuery = normalized.split("?")[0].split("#")[0];
  const trimmed = withoutQuery.replace(/\/+$/, "");
  return `${origin}${trimmed}/`;
}

/** Path with leading + trailing slash for internal links (home stays "/"). */
export function trailingPath(path: string): string {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const trimmed = normalized.replace(/\/+$/, "");
  return `${trimmed}/`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  /** Skip self-canonical (e.g. soft 404 UI). Default false. */
  omitCanonical?: boolean;
  ogType?: "website" | "article";
};

/** Unique title, description, self-referencing canonical, and Open Graph URL. */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  omitCanonical = false,
  ogType = "website",
}: PageSeoInput): Metadata {
  const canonical = canonicalUrl(path);
  const isHome = path === "/" || path === "";
  const displayTitle = isHome ? title : `${title} | ${siteConfig.brand}`;

  return {
    // Absolute title avoids layout template doubling the brand on home / special pages.
    title: isHome || noIndex ? { absolute: title } : title,
    description,
    ...(omitCanonical
      ? {}
      : {
          alternates: {
            canonical,
          },
        }),
    openGraph: {
      type: ogType,
      locale: "en_US",
      siteName: siteConfig.brand,
      title: displayTitle,
      description,
      ...(omitCanonical ? {} : { url: canonical }),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/** schema.org/BreadcrumbList JSON-LD from hierarchy paths. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
