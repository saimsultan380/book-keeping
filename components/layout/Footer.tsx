import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "./BrandLogo";
import { PaymentIcons } from "./PaymentIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-surface-dark text-text-on-dark">
      <Container className="py-section">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-4 text-small text-text-on-dark-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={Facebook} size="sm" />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="X (Twitter)"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={Twitter} size="sm" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={Linkedin} size="sm" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={Instagram} size="sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-body font-semibold text-text-on-dark">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-on-dark-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-body font-semibold text-text-on-dark">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-small text-text-on-dark-muted hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-body font-semibold text-text-on-dark">
              Contact / Work Hours
            </h3>
            <ul className="mt-4 space-y-3 text-small text-text-on-dark-muted">
              <li>{siteConfig.hours.weekdays}</li>
              <li className="flex gap-2">
                <Icon icon={MapPin} size="sm" className="mt-0.5 shrink-0 text-accent" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-2">
                <Icon icon={Mail} size="sm" className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Icon icon={Phone} size="sm" className="mt-0.5 shrink-0 text-accent" />
                <a href={siteConfig.phoneHref} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-on-dark-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-text-on-dark-muted">
            © 2026 {siteConfig.brand}. All rights reserved.
          </p>
          <PaymentIcons />
        </div>
      </Container>
    </footer>
  );
}
