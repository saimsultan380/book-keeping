"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { pricingPackages } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PricingTabs() {
  const [active, setActive] = useState(pricingPackages[0].id);
  const selected =
    pricingPackages.find((p) => p.id === active) ?? pricingPackages[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Pricing packages"
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {pricingPackages.map((pkg) => (
          <button
            key={pkg.id}
            role="tab"
            type="button"
            aria-selected={active === pkg.id}
            id={`tab-${pkg.id}`}
            aria-controls={`panel-${pkg.id}`}
            onClick={() => setActive(pkg.id)}
            className={cn(
              "shrink-0 rounded-pill border px-4 py-2 font-heading text-small font-semibold transition-colors whitespace-nowrap",
              active === pkg.id
                ? "border-primary bg-primary text-on-primary"
                : "border-border bg-card text-text hover:border-primary"
            )}
          >
            {pkg.name}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${selected.id}`}
        aria-labelledby={`tab-${selected.id}`}
        className="mt-8 rounded-md border border-border bg-card p-8 shadow-card"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-accent">{selected.forWhom}</p>
            <h3 className="mt-2 font-heading text-h3 text-text">
              {selected.name}
            </h3>
            <p className="mt-4 text-body text-text-muted">
              {selected.description}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {selected.includes.map((item) => (
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
          </div>
          <div className="rounded-md bg-surface p-6 text-center lg:min-w-[220px]">
            <p className="text-small text-text-muted">Starting range</p>
            <p className="mt-2 font-heading text-h2 text-primary">
              {selected.price}
            </p>
            <Button href="/contact-us/" variant="accent" className="mt-6 w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
