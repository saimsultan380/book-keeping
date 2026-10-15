"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "./BrandLogo";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 border-b border-border bg-bg transition-shadow duration-300",
          scrolled && "shadow-card"
        )}
      >
        <Container className="flex h-header items-center justify-between gap-4">
          <BrandLogo className="shrink-0" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 font-heading text-small font-medium text-text transition-colors hover:text-accent",
                  pathname === item.href && "text-accent"
                )}
              >
                {item.label}
                {pathname === item.href ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 font-heading text-small font-semibold text-primary"
            >
              <Icon icon={Phone} size="sm" className="text-accent" />
              {siteConfig.phone}
            </a>
            <Button href="/contact-us/" variant="accent">
              Get Consultation
            </Button>
          </div>

          <button
            type="button"
            className="rounded-sm p-2 text-text hover:bg-surface lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Icon icon={Menu} />
          </button>
        </Container>
      </header>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
