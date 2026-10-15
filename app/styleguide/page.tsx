import type { Metadata } from "next";
import { Ruler } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Styleguide",
  description: "Internal design system styleguide — not for public indexing.",
  path: "/styleguide/",
  noIndex: true,
});

const colors = [
  { name: "primary", className: "bg-primary" },
  { name: "accent", className: "bg-accent" },
  { name: "bg", className: "bg-bg border border-border" },
  { name: "surface", className: "bg-surface" },
  { name: "surface-dark", className: "bg-surface-dark" },
  { name: "border", className: "bg-border" },
  { name: "success", className: "bg-success" },
  { name: "error", className: "bg-error" },
];

export default function StyleguidePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Internal"
        title="Design System Styleguide"
        intro="Noindex route for checking tokens, type, buttons, cards, and forms. Append ?theme=alt to preview the alternate palette."
      />

      <h3 className="mb-4 font-heading text-h3">Colors</h3>
      <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {colors.map((c) => (
          <div key={c.name}>
            <div className={`h-20 rounded-md ${c.className}`} />
            <p className="mt-2 text-small text-text-muted">{c.name}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-4 font-heading text-h3">Typography</h3>
      <div className="mb-14 space-y-3">
        <p className="text-h1">Heading 1</p>
        <p className="text-h2">Heading 2</p>
        <p className="text-h3">Heading 3</p>
        <p className="text-body">Body text — Source Sans 3</p>
        <p className="text-small text-text-muted">Small muted text</p>
        <p className="text-eyebrow uppercase text-accent">Eyebrow label</p>
      </div>

      <h3 className="mb-4 font-heading text-h3">Buttons</h3>
      <div className="mb-14 flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <span className="rounded-md bg-surface-dark p-3">
          <Button variant="on-dark">On Dark</Button>
        </span>
        <Button size="lg" variant="primary">
          Large
        </Button>
      </div>

      <h3 className="mb-4 font-heading text-h3">Card & Icon</h3>
      <div className="mb-14 max-w-sm">
        <Card className="p-6">
          <Icon icon={Ruler} boxed />
          <h4 className="mt-4 font-heading text-h3">Sample Card</h4>
          <p className="mt-2 text-small text-text-muted">
            Soft shadow, border, hover lift handled by the Card component.
          </p>
        </Card>
      </div>

      <h3 className="mb-4 font-heading text-h3">Form</h3>
      <div className="max-w-xl">
        <ContactForm variant="compact" />
      </div>
    </Section>
  );
}
