"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { stats } from "@/data/stats";
import { Section } from "@/components/ui/Section";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduce]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="text-center">
      <p className="font-heading text-h1 text-accent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-body text-text-on-dark-muted">{label}</p>
    </div>
  );
}

export function CounterBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="dark">
      <div
        ref={ref}
        className="grid gap-10 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            active={active}
          />
        ))}
      </div>
    </Section>
  );
}
