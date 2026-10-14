"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type ProgressBarProps = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setWidth(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduce]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <span className="font-heading text-small font-semibold text-text">
          {label}
        </span>
        <span className="font-heading text-small font-semibold text-accent">
          {value}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-pill bg-border">
        <div
          className="h-full rounded-pill bg-accent transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={width}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        />
      </div>
    </div>
  );
}
