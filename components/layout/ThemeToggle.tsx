"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/** Hidden dev toggle: ?theme=alt applies [data-theme="alt"] */
export function ThemeToggle() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const theme = searchParams.get("theme");
    if (theme === "alt") {
      document.documentElement.setAttribute("data-theme", "alt");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [searchParams]);

  return null;
}
