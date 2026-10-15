"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused]);

  const item = testimonials[index];

  return (
    <div
      className="rounded-md border border-border bg-card p-8 shadow-card md:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="mb-6 h-1 w-12 bg-accent" aria-hidden />
      <blockquote>
        <p className="font-heading text-h3 leading-relaxed text-text">
          “{item.quote}”
        </p>
      </blockquote>
      <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <div className="relative h-14 w-14 overflow-hidden rounded-pill border border-border">
          <Image
            src={item.avatar}
            alt={item.avatarAlt}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-heading font-semibold text-text">{item.name}</p>
          <p className="text-small text-text-muted">{item.role}</p>
        </div>
      </div>
      <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonial slides">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-pill transition-colors",
              i === index ? "bg-accent" : "bg-border hover:bg-text-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}
