export const siteConfig = {
  brand: "Doxo Collective",
  legalName: "Doxo Collective LLC", // PLACEHOLDER — confirm legal entity
  tagline: "Clear Books. Smarter Decisions. Steady Growth.",
  description:
    "Doxo Collective helps growing companies keep accurate books, plan taxes with intention, and get practical CFO guidance—without hiring a full in-house finance team.",
  /** Canonical origin — always non-www HTTPS, no trailing slash. */
  url: "https://doxocollective.com",
  phone: "(555) 014-2800", // PLACEHOLDER
  phoneHref: "tel:+15550142800",
  email: "info@doxocollective.com", // PLACEHOLDER
  address: {
    line1: "1840 Trade Center Drive, Suite 210", // PLACEHOLDER
    city: "Austin",
    state: "TX",
    zip: "78744",
    country: "United States",
    full: "1840 Trade Center Drive, Suite 210, Austin, TX 78744",
  },
  hours: {
    weekdays: "Mon – Fri | 9:00 AM – 6:00 PM",
    weekend: "Sat – Sun | Closed",
  },
  social: {
    facebook: "https://facebook.com/", // PLACEHOLDER
    twitter: "https://x.com/", // PLACEHOLDER
    linkedin: "https://linkedin.com/", // PLACEHOLDER
    instagram: "https://instagram.com/", // PLACEHOLDER
  },
  youtubeId: "bJTZbfq7amQ", // Replace with Doxo Collective intro when available
  logo: {
    mark: "/logo-mark.jpg",
    light: "/logo.svg",
    dark: "/logo-light.svg",
  },
  topBarPromo: "Behind on your books?",
  topBarCta: "Schedule a Call",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Services", href: "/services/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "Contact Us", href: "/contact-us/" },
  ],
  footerQuickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Services", href: "/services/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Refund Policy", href: "/refund-policy/" },
    { label: "Terms & Conditions", href: "/terms-conditions/" },
  ],
  paymentMethods: ["Visa", "Mastercard", "Amex", "Discover"],
  countriesServed: 12, // Confirm before launch
} as const;

export type SiteConfig = typeof siteConfig;
