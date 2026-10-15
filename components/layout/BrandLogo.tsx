import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
};

export function BrandLogo({
  variant = "light",
  className,
  showWordmark = true,
}: BrandLogoProps) {
  const onDark = variant === "dark";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={siteConfig.brand}
    >
      <Image
        src={siteConfig.logo.mark}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 rounded-sm object-cover"
        priority
      />
      {showWordmark ? (
        <span className="leading-tight">
          <span
            className={cn(
              "block font-heading text-body font-bold tracking-wide",
              onDark ? "text-text-on-dark" : "text-primary"
            )}
          >
            DOXO
          </span>
          <span
            className={cn(
              "block font-heading text-small font-semibold tracking-[0.12em]",
              onDark ? "text-text-on-dark-muted" : "text-text-muted"
            )}
          >
            COLLECTIVE
          </span>
        </span>
      ) : null}
    </Link>
  );
}
