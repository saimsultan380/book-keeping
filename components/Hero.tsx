import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
        alt="Finance professionals reviewing business reports"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-overlay" />
      <Container className="relative z-10 py-section">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-text-on-dark">{siteConfig.tagline}</h1>
          <p className="mt-6 max-w-2xl text-body text-text-on-dark-muted">
            We handle day-to-day bookkeeping, tax preparation support, and
            fractional CFO work so owners get reliable numbers—and more time to
            run the business.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact-us/" variant="accent" size="lg">
              Contact Us
            </Button>
            <Button
              href="/services/"
              variant="ghost"
              size="lg"
              className="!border !border-on-dark-line !bg-transparent !text-text-on-dark hover:!bg-text-on-dark hover:!text-primary"
            >
              View Services
            </Button>
          </div>
          <p className="mt-10 text-small uppercase tracking-wide text-text-on-dark-muted">
            Monthly closes on time · Plain-English reports · Hands-on advisors
          </p>
        </div>
      </Container>
    </section>
  );
}
