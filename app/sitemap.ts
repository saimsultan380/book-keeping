import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about-us/",
    "/services/",
    "/pricing/",
    "/contact-us/",
    "/blog/",
    "/privacy-policy/",
    "/refund-policy/",
    "/terms-conditions/",
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: canonicalUrl(`/services/${s.slug}/`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: canonicalUrl(`/blog/${p.slug}/`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((p) => ({
    url: canonicalUrl(`/projects/${p.slug}/`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Deduplicate by URL (canonical only, non-www + trailing slash)
  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...postRoutes,
    ...projectRoutes,
  ];
  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
