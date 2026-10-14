import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

type PageBannerProps = {
  title: string;
  crumbs: Crumb[];
  intro?: string;
};

export function PageBanner({ title, crumbs, intro }: PageBannerProps) {
  return (
    <section className="bg-surface-dark py-16 md:py-20">
      <Container>
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 text-h1 text-text-on-dark">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-body text-text-on-dark-muted">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
