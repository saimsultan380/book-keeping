"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { VideoLightbox } from "./VideoLightbox";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
        alt="Active construction site with steel framework"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />
      <Container className="relative z-10 py-section">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-text-on-dark">{siteConfig.tagline}</h1>
          <p className="mt-6 max-w-2xl text-body text-text-on-dark-muted">
            Professional quantity takeoffs, cost estimates, and bid preparation
            for contractors who need numbers they can trust before the bid due
            date.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact-us/" variant="accent" size="lg">
              Contact Us
            </Button>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 font-heading font-semibold text-text-on-dark hover:text-accent transition-colors"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-on-dark-line">
                <Icon icon={Play} size="sm" />
              </span>
              Watch Video
            </button>
          </div>
          <p className="mt-10 text-small uppercase tracking-wide text-text-on-dark-muted">
            Absolute accuracy · Transparent reporting · Dedicated support
          </p>
        </div>
      </Container>
      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        youtubeId={siteConfig.youtubeId}
        title="Construction estimating overview video"
      />
    </section>
  );
}
