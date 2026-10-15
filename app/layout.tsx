import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/config/site";
import { canonicalUrl } from "@/lib/seo";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import "@/styles/globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-next",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl("/")),
  title: {
    default: `${siteConfig.brand} | Construction Estimating Services`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} | Construction Estimating Services`,
    description: siteConfig.description,
    url: canonicalUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | Construction Estimating Services`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  // Root layout must NOT set a global canonical — each page sets its own.
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand,
  description: siteConfig.description,
  url: canonicalUrl("/"),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>
          <ThemeToggle />
        </Suspense>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
