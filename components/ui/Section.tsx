import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "surface" | "dark";
  id?: string;
};

const variantClasses = {
  default: "bg-bg text-text",
  surface: "bg-surface text-text",
  dark: "bg-surface-dark text-text-on-dark",
};

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section", variantClasses[variant], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
