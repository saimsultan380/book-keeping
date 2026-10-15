import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PageBanner } from "@/components/PageBanner";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { robots: { index: false, follow: false } };
  return createPageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageBanner
        title={project.title}
        path={`/projects/${project.slug}/`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: project.title },
        ]}
        intro={`${project.category} · Placeholder project case study`}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-eyebrow uppercase text-accent">{project.category}</p>
            <h2 className="mt-3 text-h2 text-text">{project.title}</h2>
            <p className="mt-4 text-body text-text-muted">{project.excerpt}</p>
            <p className="mt-4 text-body text-text-muted">
              This is a sample case study page. Replace with a full write-up
              covering scope, deliverables, and outcomes once client permissions
              are available.
            </p>
            <div className="mt-8">
              <Button href="/contact-us/" variant="accent">
                Discuss a Similar Engagement
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <VideoCtaBand />
    </>
  );
}
