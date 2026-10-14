import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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
            href="/contact-us"
            className="font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            {siteConfig.topBarCta} →
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.social.facebook}
            aria-label="Facebook"
            className="hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Facebook} size="sm" />
          </a>
          <a
            href={siteConfig.social.twitter}
            aria-label="X (Twitter)"
            className="hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Twitter} size="sm" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Linkedin} size="sm" />
          </a>
          <a
            href={siteConfig.social.instagram}
            aria-label="Instagram"
            className="hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Instagram} size="sm" />
          </a>
        </div>
      </Container>
    </div>
  );
}
