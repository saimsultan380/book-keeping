import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "on-dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover border border-transparent",
  accent:
    "bg-accent text-on-accent hover:bg-accent-hover border border-transparent",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-on-primary",
  ghost: "bg-transparent text-primary border border-transparent hover:bg-surface",
  "on-dark":
    "bg-accent text-on-accent hover:bg-accent-hover border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-2.5 text-small",
  lg: "px-8 py-3.5 text-body",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-heading font-semibold transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
