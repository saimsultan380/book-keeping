import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-card shadow-card overflow-hidden border border-border",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
