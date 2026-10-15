import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Icon } from "@/components/ui/Icon";
import { trailingPath } from "@/lib/seo";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={trailingPath(`/projects/${project.slug}`)}
      className="group relative block aspect-[4/3] overflow-hidden rounded-md"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-overlay opacity-70 transition-opacity group-hover:opacity-80" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-eyebrow uppercase text-accent">{project.category}</p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-heading text-h3 text-text-on-dark">
              {project.title}
            </h3>
            <p className="mt-2 text-small text-text-on-dark-muted">
              {project.excerpt}
            </p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-accent text-on-accent">
            <Icon icon={ArrowUpRight} size="sm" />
          </span>
        </div>
      </div>
    </Link>
  );
}
