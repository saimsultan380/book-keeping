"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary/50 transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg shadow-hover transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="font-heading text-h3 text-primary">
            {siteConfig.brand}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-sm p-2 text-text hover:bg-surface"
          >
            <Icon icon={X} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "rounded-md px-4 py-3 font-heading text-body font-medium transition-colors",
                pathname === item.href
                  ? "bg-surface text-accent"
                  : "text-text hover:bg-surface"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 border-t border-border px-6 py-6">
          <a
            href={siteConfig.phoneHref}
            className="block font-heading font-semibold text-primary"
          >
            {siteConfig.phone}
          </a>
          <div onClick={onClose}>
            <Button href="/contact-us" variant="accent" className="w-full">
              Get Consultation
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
