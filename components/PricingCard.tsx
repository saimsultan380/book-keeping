import { Check } from "lucide-react";
import type { PricingPackage } from "@/data/pricing";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <Card className="flex h-full flex-col p-6" hover>
      <p className="text-eyebrow uppercase text-accent">{pkg.forWhom}</p>
      <h3 className="mt-2 font-heading text-h3 text-text">{pkg.name}</h3>
      <p className="mt-4 font-heading text-h3 whitespace-nowrap text-primary">
        {pkg.price}
      </p>
      <p className="mt-4 text-small text-text-muted">{pkg.description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-small">
            <Icon
              icon={Check}
              size="sm"
              className="mt-0.5 shrink-0 text-accent"
            />
            {item}
          </li>
        ))}
      </ul>
      <Button href="/contact-us/" variant="primary" className="mt-8 w-full">
        Get Started
      </Button>
    </Card>
  );
}
