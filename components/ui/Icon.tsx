import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  boxed?: boolean;
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function Icon({
  icon: Lucide,
  className,
  size = "md",
  boxed = false,
}: IconProps) {
  if (boxed) {
    return (
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/20 text-accent",
          className
        )}
      >
        <Lucide className={sizeMap[size]} aria-hidden strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <Lucide
      className={cn(sizeMap[size], className)}
      aria-hidden
      strokeWidth={1.75}
    />
  );
}
