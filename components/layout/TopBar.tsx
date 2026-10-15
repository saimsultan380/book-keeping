import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function TopBar() {
  return (
    <div className="bg-primary text-text-on-dark text-small hidden md:block">
      <Container className="flex h-topbar items-center justify-between gap-4">
        <p className="flex items-center gap-2">
          <span>{siteConfig.topBarPromo}</span>
          <Link
            href="/contact-us/"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            {siteConfig.topBarCta} →
          </Link>
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <Icon icon={Mail} size="sm" className="text-accent" />
          <span>{siteConfig.email}</span>
        </a>
      </Container>
    </div>
  );
}
