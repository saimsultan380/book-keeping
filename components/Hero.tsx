import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-white/20">
      <Image
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=80"
        alt="Financial advisor presenting reports in a business meeting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-primary/25" />

      <Container className="relative z-10 py-section">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-h1 text-text-on-dark">{siteConfig.tagline}</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-body text-text-on-dark-muted">
              Accurate books, intentional tax planning, and practical CFO
              guidance—so you spend less time in the numbers and more time
              running the business.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
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
          </FadeIn>

          <FadeIn delay={0.26}>
            <p className="mt-12 text-small tracking-wide text-text-on-dark-muted">
              Monthly closes on time
              <span className="mx-3 text-on-dark-line" aria-hidden>
                |
              </span>
              Plain-English reports
              <span className="mx-3 text-on-dark-line" aria-hidden>
                |
              </span>
              Hands-on advisors
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
