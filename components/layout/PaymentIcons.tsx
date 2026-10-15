import { cn } from "@/lib/utils";

const methods = [
  {
    id: "visa",
    label: "Visa",
    src: "/payments/visa.svg",
  },
  {
    id: "mastercard",
    label: "Mastercard",
    src: "/payments/mastercard.svg",
  },
  {
    id: "amex",
    label: "American Express",
    src: "/payments/amex.svg",
  },
  {
    id: "discover",
    label: "Discover",
    src: "/payments/discover.svg",
  },
] as const;

type PaymentIconsProps = {
  className?: string;
};

/** Real payment acceptance badges (Visa, Mastercard, Amex, Discover). */
export function PaymentIcons({ className }: PaymentIconsProps) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2.5", className)}
      aria-label="Accepted payment methods"
    >
      {methods.map((method) => (
        <li key={method.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={method.src}
            alt={method.label}
            title={method.label}
            width={48}
            height={30}
            className="h-7 w-auto rounded-sm shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}
