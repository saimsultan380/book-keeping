import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-eyebrow uppercase text-accent">404</p>
      <h1 className="mt-3 text-h1 text-text">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-body text-text-muted">
        The page you requested does not exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="accent">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
