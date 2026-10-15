import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Clock3 } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { PageBanner } from "@/components/PageBanner";
import { VideoCtaBand } from "@/components/VideoCtaBand";
import { Button } from "@/components/ui/Button";
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
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md sm:aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Overview"
              title={`${service.title} built for growing businesses`}
              className="mb-6 md:mb-6"
            />
            <div className="space-y-4 text-body text-text-muted">
              <p>{service.overview}</p>
              {service.overviewExtra.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-md border border-border bg-surface p-4">
              <Icon icon={Clock3} className="mt-0.5 shrink-0 text-accent" />
              <div className="min-w-0">
                <p className="font-heading text-small font-semibold text-text">
                  When this service is available
                </p>
                <p className="mt-1 text-small text-text-muted">
                  {service.availability}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Button href="/contact-us/" variant="accent">
                Get Started
              </Button>
            </div>
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

      <Section>
        <SectionHeading
          eyebrow="Best Fit"
          title={`Who ${service.title} is for`}
          intro="A quick check to see if this package matches where your business is right now."
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {service.idealFor.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <Icon
                  icon={Check}
                  size="sm"
                  className="mt-1 shrink-0 text-accent"
                />
                <p className="font-heading text-body font-medium text-text">
                  {item}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="surface">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="How It Works"
            title={`How our ${service.title.toLowerCase()} engagement runs`}
            intro="A clear path from first conversation to ongoing delivery."
            className="mb-0 md:mb-0"
          />
          <ol className="space-y-4">
            {service.howItWorks.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-md border border-border bg-card p-5 shadow-card"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary font-heading text-body font-bold text-on-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-h3 text-text">{step.title}</h3>
                  <p className="mt-2 text-body text-text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          intro={`Answers specific to ${service.title.toLowerCase()}.`}
        />
        <div className="w-full space-y-3">
          {service.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group w-full rounded-md border border-border bg-card px-4 py-3 md:px-5 md:py-4"
            >
              <summary className="cursor-pointer list-none font-heading text-small font-semibold text-text md:text-body [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0 flex-1">{faq.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-accent transition-transform group-open:rotate-90"
                  >
                    ›
                  </span>
                </span>
              </summary>
              <p className="mt-3 border-t border-border pt-3 text-small text-text-muted md:text-body">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <VideoCtaBand
        title={`Ready to start ${service.title}?`}
        description="Tell us about your books, timeline, and goals. We will confirm scope, availability, and next steps."
      />
    </>
  );
}
