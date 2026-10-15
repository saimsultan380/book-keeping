import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { processSteps } from "@/data/process";
import { serviceFaqs } from "@/data/faq";
import { PageBanner } from "@/components/PageBanner";
import { ProcessSteps } from "@/components/ProcessSteps";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { robots: { index: false, follow: false } };
  return createPageMetadata({
    title: `${service.title} Services`,
    description: service.shortDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        path={`/services/${service.slug}/`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: service.title },
        ]}
        intro={service.shortDescription}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={`Professional ${service.title.toLowerCase()} for growing businesses`}
              className="mb-6 md:mb-6"
            />
            <p className="text-body text-text-muted">{service.overview}</p>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-h2 text-text">What&apos;s Included</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body">
                  <Icon
                    icon={Check}
                    size="sm"
                    className="mt-1 shrink-0 text-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h2 text-text">Deliverables</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-body">
                  <Icon
                    icon={Check}
                    size="sm"
                    className="mt-1 shrink-0 text-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ProcessSteps />

      <Section variant="surface">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          intro="Answers that apply across our financial service packages."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {serviceFaqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-md border border-border bg-card p-5"
            >
              <summary className="cursor-pointer font-heading font-semibold text-text">
                {faq.question}
              </summary>
              <p className="mt-3 text-body text-text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="sr-only">
          Process overview: {processSteps.map((s) => s.title).join(", ")}
        </p>
      </Section>

      <VideoCtaBand
        title={`Ready for ${service.title}?`}
        description="Share your plans and deadline. We will confirm scope and pricing before work begins."
      />
    </>
  );
}
