import {
  Briefcase,
  Check,
  ClipboardList,
  Landmark,
  LineChart,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PricingPackage } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const packageIcons: Record<string, LucideIcon> = {
  bookkeeping: Users,
  "corporate-tax": ClipboardList,
  "cfo-advisory": Briefcase,
  "tax-strategy": Users,
  loan: ClipboardList,
  "virtual-cfo": Landmark,
};

export function PricingCard({ pkg }: { pkg: PricingPackage }) {
  const featured = Boolean(pkg.featured);
  const PackageIcon = packageIcons[pkg.id] ?? LineChart;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md border p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover md:p-8",
        featured
          ? "border-primary bg-primary text-text-on-dark"
          : "border-border bg-card text-text"
      )}
    >
      <div className="flex items-start gap-3">
        <Icon
          icon={PackageIcon}
          className="mt-0.5 shrink-0 text-accent"
          size="lg"
        />
        <div className="min-w-0">
          <h3
            className={cn(
              "font-heading text-h3 leading-snug",
              featured ? "text-text-on-dark" : "text-primary"
            )}
          >
            {pkg.name}
          </h3>
          <p className="mt-1 text-eyebrow uppercase tracking-wide text-accent">
            {pkg.forWhom}
          </p>
        </div>
      </div>

      <p
        className={cn(
          "mt-5 text-small leading-relaxed",
          featured ? "text-text-on-dark-muted" : "text-text-muted"
        )}
      >
        {pkg.description}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-2.5 text-small",
              featured ? "text-text-on-dark" : "text-text"
            )}
          >
            <Icon
              icon={Check}
              size="sm"
              className="mt-0.5 shrink-0 text-accent"
            />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-7 font-heading text-[clamp(1.35rem,1.5vw+0.75rem,1.75rem)] font-bold leading-tight whitespace-nowrap text-accent">
        {pkg.price}
      </p>

      <Button href="/contact-us/" variant="accent" className="mt-5 w-full">
        Get Started
      </Button>
    </article>
  );
}
