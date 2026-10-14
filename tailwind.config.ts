import type { Config } from "tailwindcss";

const withAlpha = (cssVar: string) =>
  `rgb(var(${cssVar}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: withAlpha("--color-primary-rgb"),
          hover: "var(--color-primary-hover)",
        },
        accent: {
          DEFAULT: withAlpha("--color-accent-rgb"),
          hover: "var(--color-accent-hover)",
        },
        bg: "var(--color-bg)",
        surface: {
          DEFAULT: "var(--color-surface)",
          dark: withAlpha("--color-surface-dark-rgb"),
        },
        card: "var(--color-card)",
        text: {
          DEFAULT: withAlpha("--color-text-rgb"),
          muted: "var(--color-text-muted)",
          "on-dark": "var(--color-text-on-dark)",
          "on-dark-muted": "var(--color-text-on-dark-muted)",
        },
        "on-primary": "var(--color-on-primary)",
        "on-accent": "var(--color-on-accent)",
        "on-dark-line": "var(--color-on-dark-line)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        focus: "var(--color-focus)",
        overlay: "var(--color-overlay)",
      },
      fontFamily: {
        heading: ["var(--font-heading-next)", "var(--font-heading)"],
        body: ["var(--font-body-next)", "var(--font-body)"],
      },
      fontSize: {
        h1: ["var(--fs-h1)", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["var(--fs-h2)", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["var(--fs-h3)", { lineHeight: "1.35", fontWeight: "600" }],
        body: ["var(--fs-body)", { lineHeight: "1.65" }],
        small: ["var(--fs-small)", { lineHeight: "1.5" }],
        eyebrow: [
          "var(--fs-eyebrow)",
          { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.08em" },
        ],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
      maxWidth: {
        container: "var(--container)",
      },
      spacing: {
        section: "var(--section-y)",
        gap: "var(--gap)",
        header: "var(--header-h)",
        topbar: "var(--topbar-h)",
      },
    },
  },
  plugins: [],
};

export default config;
