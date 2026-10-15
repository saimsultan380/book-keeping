import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock3, Briefcase } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { PageBanner } from "@/components/PageBanner";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { robots: { index: false, follow: false } };
  return createPageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageBanner
        title={project.title}
        path={`/projects/${project.slug}/`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Selected Work", href: "/#selected-work" },
          { label: project.title },
        ]}
        intro={`${project.category} · ${project.clientType}`}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
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
            <p className="text-eyebrow uppercase text-accent">
              {project.category}
            </p>
            <h2 className="mt-3 text-h2 text-text">{project.title}</h2>
            <p className="mt-4 text-body text-text-muted">{project.excerpt}</p>

            <div className="mt-6 space-y-3">
              <div className="flex gap-3 rounded-md border border-border bg-surface p-4">
                <Icon icon={Briefcase} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-small font-semibold text-text">
                    Client type
                  </p>
                  <p className="mt-1 text-small text-text-muted">
                    {project.clientType}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-md border border-border bg-surface p-4">
                <Icon icon={Clock3} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-small font-semibold text-text">
                    Timeline
                  </p>
                  <p className="mt-1 text-small text-text-muted">
                    {project.timeline}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/contact-us/" variant="accent">
                Discuss a Similar Engagement
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeading
          eyebrow="The Challenge"
          title="What was getting in the way"
          intro="The starting point before we rebuilt process, reporting, or both."
        />
        <p className="max-w-3xl text-body text-text-muted">{project.challenge}</p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Approach"
          title="What we put in place"
          intro="Practical steps that created a repeatable finance rhythm."
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {project.approach.map((step, index) => (
            <li
              key={step.slice(0, 32)}
              className="rounded-md border border-border bg-card p-6 shadow-card"
            >
              <p className="font-heading text-h1 text-accent/30 leading-none">
                {String(index + 1).padStart(2, "0")}.
              </p>
              <p className="mt-4 text-body text-text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section variant="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Results"
              title="What changed"
              className="mb-6 md:mb-6"
            />
            <ul className="space-y-3">
              {project.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body">
                  <Icon
                    icon={Check}
                    size="sm"
                    className="mt-1 shrink-0 text-accent"
                  />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Services Used"
              title="Related capabilities"
              className="mb-6 md:mb-6"
            />
            <ul className="space-y-3">
              {project.servicesUsed.map((item) => (
                <li key={item}>
                  <Link
                    href="/services/"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 font-heading text-small font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon icon={Check} size="sm" className="text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="More Work"
            title="Related engagements"
            action={{ label: "Back to Home", href: "/#selected-work" }}
          />
          <div className="grid gap-gap sm:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <VideoCtaBand
        title="Want results like these for your books?"
        description="Tell us where your finance process is stuck. We will recommend a practical next step."
      />
    </>
  );
}
