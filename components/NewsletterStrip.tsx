"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function NewsletterStrip() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/newsletter", {
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

  return (
    <div className="mt-14 rounded-md bg-primary p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h3 className="font-heading text-h3 text-text-on-dark">
            Subscribe to Our Newsletter
          </h3>
          <p className="mt-2 text-small text-text-on-dark-muted">
            Get updates, bookkeeping tips, and financial insights from Doxo
            Collective. No spam.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-3 sm:flex-row md:min-w-[360px]"
          noValidate
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email"
            autoComplete="email"
            className="w-full rounded-pill border border-transparent bg-bg px-5 py-3 text-body text-text"
            {...register("email")}
          />
          {/* honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden
            {...register("company")}
          />
          <Button
            type="submit"
            variant="on-dark"
            disabled={isSubmitting}
            className="shrink-0"
          >
            {isSubmitting ? "Subscribing…" : "Subscribe"}
          </Button>
        </form>
      </div>
      {errors.email ? (
        <p className="mt-3 text-small text-error" role="alert">
          {errors.email.message}
        </p>
      ) : null}
      <div aria-live="polite" className="mt-3 text-small">
        {status === "success" ? (
          <p className="text-success">Thanks — you are on the list.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-error">Something went wrong. Please try again.</p>
        ) : null}
      </div>
    </div>
  );
}
