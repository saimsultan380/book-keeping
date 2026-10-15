import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type VideoCtaBandProps = {
  title?: string;
  description?: string;
};

export function VideoCtaBand({
  title = "Ready to Optimize Your Financial Architecture?",
  description = "Contact us today to schedule a review of your accounting setup, compliance status, and growth objectives.",
}: VideoCtaBandProps) {
  return (
    <section className="relative overflow-hidden py-section">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />
      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-h2 text-text-on-dark">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body text-text-on-dark-muted">
          {description}
        </p>
        <div className="mt-8">
          <Button href="/contact-us/" variant="on-dark" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
