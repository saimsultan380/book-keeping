"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fullSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
  website: z.string().optional(), // honeypot
});

const compactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Please add a short message"),
  website: z.string().optional(),
});

type FullValues = z.infer<typeof fullSchema>;
type CompactValues = z.infer<typeof compactSchema>;

type ContactFormProps = {
  variant?: "full" | "compact";
  className?: string;
};

export function ContactForm({
  variant = "full",
  className,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const isFull = variant === "full";

  const form = useForm<FullValues | CompactValues>({
    resolver: zodResolver(isFull ? fullSchema : compactSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: FullValues | CompactValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-md border border-border bg-bg px-4 py-3 text-body text-text placeholder:text-text-muted focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      noValidate
    >
      <div className={cn(isFull && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-small font-medium">
            Name
          </label>
          <input
            id="name"
            className={fieldClass}
            autoComplete="name"
            {...register("name")}
          />
          {"name" in errors && errors.name ? (
            <p className="mt-1 text-small text-error">{errors.name.message}</p>
          ) : null}
        </div>
        <div className={cn(!isFull && "mt-4")}>
          <label htmlFor="email" className="mb-1.5 block text-small font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            {...register("email")}
          />
          {"email" in errors && errors.email ? (
            <p className="mt-1 text-small text-error">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      {isFull ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-small font-medium"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className={fieldClass}
              autoComplete="tel"
              {...register("phone")}
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block text-small font-medium"
            >
              Service
            </label>
            <select id="service" className={fieldClass} {...register("service")}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-small font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClass}
          {...register("message")}
        />
        {"message" in errors && errors.message ? (
          <p className="mt-1 text-small text-error">{errors.message.message}</p>
        ) : null}
      </div>

      {isFull ? (
        <div>
          <label htmlFor="plans" className="mb-1.5 block text-small font-medium">
            Plans upload (optional)
          </label>
          <input
            id="plans"
            type="file"
            accept=".pdf,.dwg,.dxf,.zip"
            className="block w-full text-small text-text-muted file:mr-4 file:rounded-pill file:border-0 file:bg-surface file:px-4 file:py-2 file:font-heading file:text-small file:font-semibold file:text-primary"
          />
          <p className="mt-1 text-small text-text-muted">
            PDF preferred. Large files can be shared after we reply.
          </p>
        </div>
      ) : null}

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
        {...register("website")}
      />

      <Button type="submit" variant="accent" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>

      <div aria-live="polite" className="text-small">
        {status === "success" ? (
          <p className="text-success">
            Message sent. We will respond during business hours.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-error">Unable to send. Please try again or call us.</p>
        ) : null}
      </div>
    </form>
  );
}
