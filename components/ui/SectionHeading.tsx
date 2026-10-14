import { cn } from "@/lib/utils";
import { Button } from "./Button";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  align = "left",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        action && "md:flex md:items-end md:justify-between md:gap-8",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      <div className={cn(action && "md:max-w-2xl")}>
        {eyebrow ? (
          <p
            className={cn(
              "mb-3 text-eyebrow uppercase",
              onDark ? "text-accent" : "text-accent"
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-h2",
            onDark ? "text-text-on-dark" : "text-text"
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-4 text-body",
              onDark ? "text-text-on-dark-muted" : "text-text-muted"
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="mt-6 shrink-0 md:mt-0">
          <Button href={action.href} variant={onDark ? "on-dark" : "outline"}>
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
