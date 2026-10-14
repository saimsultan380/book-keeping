# ESTIMATING SERVICES WEBSITE — MASTER PROMPT (Layout clone + global theming)

Paste everything below this line into your AI builder (Claude Code, Cursor, Lovable, v0, etc.). Attach 3 to 5 full-page screenshots of the reference site (home, services, pricing, contact) if you can; the prompt works without them but matches better with them.

---

## 0. ROLE & GOAL

You are a senior front-end engineer and UI designer. Rebuild a **professional corporate services website** that follows the **section structure, layout rhythm and component style** of the reference site `perfectoestimatingservices.us`, for a **construction estimating company** (quantity takeoffs, cost estimates, bid preparation).

Two hard requirements:

1. **Faithful layout.** Same pages, same section order, same component patterns (top bar, sticky header, hero, about, expertise with progress bars, service cards, tabbed pricing, counters, project cards, testimonials, 3-step process, video CTA band, blog, newsletter, four-column footer).
2. **Global styling system.** Colours, fonts, radii, spacing and shadows live **only** in a token file. I will change the colour scheme later by editing that file alone. No component may contain a hard-coded hex value, font name or one-off spacing number.

Do not ask me questions. Make decisions, list assumptions in `README.md`, and keep building.

**Tone of copy:** professional, precise, trustworthy, plain English. Short sentences. No jargon without explanation.

---

## 1. WHAT THE REFERENCE SITE ACTUALLY IS (read before copying)

The reference is a WordPress + Elementor site built from a finance-agency template. It has problems you must **not** reproduce:

- The home and services pages still carry **bookkeeping / tax / CFO / loan** copy, while the pricing page is about **construction estimating**. Use the estimating content in this prompt everywhere. Do not build any bookkeeping, tax, CFO or loan content.
- The brand name is inconsistent ("Perfecto Estimating" and "Perfect Oestimating"). Use one name from `siteConfig`.
- Leftover placeholders exist (lorem ipsum, a "Hello world!" blog post, a malformed email, mismatched phone numbers, "United State"). Never ship any of that: every visible string comes from real or clearly flagged placeholder content in `siteConfig` and `/data`.
- Do not copy the reference's text, images, logo, phone number or address. Copy **structure and style only**.

---

## 2. TECH STACK

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- Tailwind colours, fonts, radii and shadows are mapped to **CSS variables** (see section 3), never to raw values
- `next/font` for the two font families (loaded from tokens)
- `framer-motion` for light reveal animations (Elementor-style fade-up), `lucide-react` for icons, `react-hook-form` + `zod` for forms
- Content in typed files: `/config/site.ts` (brand, contact, nav, social, hours) and `/data/*.ts` (services, pricing, projects, testimonials, posts, process, stats, faq)
- Blog posts as MDX or typed data; no CMS in this version
- Forms post to `/api/contact` and `/api/newsletter` (Resend or a safe stub), with validation and success/error states
- Deploy target: Vercel
- _If I build this in WordPress instead:_ see Appendix A.

---

## 3. GLOBAL STYLING SYSTEM (the most important part)

### 3.1 Step 0: colour and font extraction (do this first)

The exact palette and fonts of the reference are **not given in this prompt**. Derive them in this order:

1. If screenshots are attached, sample the dominant colours and identify the typefaces from them.
2. Otherwise use the **temporary defaults below** and mark them clearly in `tokens.css` with `/* TEMP — replace with reference palette */`.

(To extract the real values from the reference, run this in the browser console on the live site and paste the output into the tokens file:)

```js
const cs = getComputedStyle(document.body);
[...document.styleSheets].forEach((ss) => {
  try {
    [...ss.cssRules].forEach((r) => {
      if (r.style)
        [...r.style].forEach((p) => {
          if (
            p.startsWith("--e-global-color") ||
            p.startsWith("--e-global-typography")
          )
            console.log(p, cs.getPropertyValue(p));
        });
    });
  } catch (e) {}
});
```

### 3.2 Token file — `/styles/tokens.css`

Single source of truth. Semantic names only (never "blue" or "orange"):

```css
:root {
  /* Brand */
  --color-primary: #0f2a4a; /* TEMP */
  --color-primary-hover: #0b2038; /* TEMP */
  --color-accent: #f2a900; /* TEMP — highlights, icons, progress bars, key numbers */
  --color-accent-hover: #d99600; /* TEMP */

  /* Surfaces */
  --color-bg: #ffffff;
  --color-surface: #f5f7fa; /* alternating section background */
  --color-surface-dark: #0f2a4a; /* dark bands, footer, CTA band */
  --color-card: #ffffff;

  /* Text */
  --color-text: #1b2430;
  --color-text-muted: #5b6675;
  --color-text-on-dark: #ffffff;
  --color-text-on-dark-muted: rgba(255, 255, 255, 0.72);
  --color-on-primary: #ffffff;
  --color-on-accent: #111111;

  /* Lines & states */
  --color-border: #e3e8ef;
  --color-success: #1f9d55;
  --color-error: #d64545;
  --color-focus: var(--color-accent);

  /* Typography (TEMP — replace with reference fonts) */
  --font-heading: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --fs-h1: clamp(2.25rem, 4.5vw + 1rem, 4rem);
  --fs-h2: clamp(1.75rem, 2.5vw + 1rem, 2.75rem);
  --fs-h3: 1.375rem;
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-eyebrow: 0.8125rem;

  /* Shape & depth */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --shadow-card: 0 8px 30px rgba(15, 42, 74, 0.08);
  --shadow-hover: 0 14px 40px rgba(15, 42, 74, 0.16);

  /* Layout & spacing */
  --container: 1200px;
  --section-y: clamp(64px, 8vw, 112px);
  --gap: 24px;
}
```

Add a second block `[data-theme="alt"] { … }` with a different palette (for example a green/charcoal scheme) to prove the whole site re-themes by changing variables only. Include a hidden dev toggle (`?theme=alt`) to demonstrate it.

### 3.3 Rules that keep it swappable

1. Tailwind config maps every colour to `var(--color-*)` (use `rgb(var(--…-rgb) / <alpha-value>)` channels where opacity utilities are needed). No hex, `rgb()` or font-family strings in any component, page or CSS module.
2. Components consume **roles**, not colours: `bg-primary`, `text-muted`, `bg-surface-dark`, `border-border`.
3. One shared `Button` (variants: `primary`, `accent`, `outline`, `ghost`, `on-dark`; sizes: `md`, `lg`), one `SectionHeading` (eyebrow + H2 + intro + optional action), one `Section` wrapper (handles background variant and vertical padding), one `Card`, one `Icon` wrapper, one `Container`.
4. Typography classes come from the token scale (`text-h1`, `text-h2`…). Headings use `--font-heading`, everything else `--font-body`.
5. Contrast: every text/background pair from the tokens must pass 4.5:1. If a future palette fails, `README.md` explains which tokens to adjust.
6. A `/styleguide` route (noindex) shows every token, type style, button variant, card, form field and section heading so the theme can be checked at a glance.

---

## 4. LAYOUT & COMPONENT STYLE (clone these patterns)

- **Corporate and clean.** Wide containers, generous white space, alternating section backgrounds (`bg` / `surface`), one dark band near the end.
- **Section heading pattern (used everywhere):** small uppercase **eyebrow** (e.g. "About Our Firm") → large **H2** → short intro paragraph → optional action button aligned right on desktop.
- **Cards:** image on top, title, two-line description, "Read More" text link with arrow. Radius `--radius-md`, soft shadow, hover lifts 4px and deepens shadow, image zooms 1.05.
- **Buttons:** pill or softly rounded, solid primary with on-primary text; accent button for the key action ("Get Consultation", "Schedule Consultation"); outline for secondary.
- **Checklists:** accent-coloured check icon + text.
- **Icons:** simple line icons in a circle or rounded square tinted with accent.
- **Motion:** subtle only. Fade-up on scroll (16px, 500ms), card hover, counters counting up once in view, progress bars filling once in view. Respect `prefers-reduced-motion`.
- **Breakpoints:** 360 / 768 / 1024 / 1280. Mobile-first; grids collapse 3 → 2 → 1.

---

## 5. GLOBAL ELEMENTS

### Top bar (thin, dark or primary)

Left: short promo line ("Need a professional estimator?") + a text link **Book a Schedule Now →** to the contact page. Right: social icons (Facebook, X/Twitter, LinkedIn, Instagram). Hidden on mobile except the link.

### Header (sticky)

Logo left. Nav: **Home · About Us · Services · Pricing · Contact Us** (active item highlighted with accent underline). Right: a **Get Consultation** button with the phone number beside it (click-to-call). Shrinks slightly and gains a shadow on scroll. Mobile: hamburger opening a full-height drawer with the same links, phone, and the button.

### Footer (dark band, 4 columns)

1. Logo + one-line description + social icons.
2. **Quick Links:** Home, About Us, Services, Pricing, Contact Us, Privacy Policy, Refund Policy, Terms & Conditions.
3. **Useful Links:** the service pages.
4. **Contact / Work Hours:** hours (Mon – Fri, 9:00 AM – 6:00 PM), address, email, phone.
   Bottom row: accepted payment-method logos (generic card icons), copyright `© 2026 {brand}. All rights reserved.` Everything comes from `siteConfig`.

---

## 6. HOME PAGE — sections in exact order

1. **Hero.** Large H1 stating the value (e.g. _"Accurate Construction Estimates You Can Bid On with Confidence"_), supporting paragraph, primary **Contact Us** button, secondary **▶ Watch Video** (opens a YouTube lightbox using `youtube-nocookie.com`, placeholder video ID in config). Full-width background image with an overlay that keeps text legible. A short commitment line beneath: _absolute accuracy, transparent reporting, dedicated support_.

2. **About Our Firm.** Two columns: image (with a floating small badge such as "10+ Years") and text. Eyebrow `About Our Firm`, H2 (e.g. _Integrity, Precision, and Partnership that Scales_), two paragraphs, a 4-item checklist (Quantity Takeoffs, Material & Labor Costing, Bid Preparation, Detailed Reports), two small feature blocks with icons (**Advanced Tools**, **Certified Team**) and a **More About Us** button.

3. **Our Expertise.** Eyebrow `Our Expertise`, H2 (e.g. _Reliable Estimating Solutions for Your Projects_), paragraph. Two **animated progress bars** (e.g. _Time Saved on Bids 90%_, _Client Satisfaction 94%_, both editable placeholders), a 3-item checklist (Constant Improvement, Commitment to Customers, Best Quality You Can Get), and a highlighted line _"You Focus on the Build, We Handle the Numbers"_ with a **View Services** button.

4. **Our Services.** Section heading with **All Services** button on the right. **6 image cards** in a 3×2 grid: Quantity Takeoff, Residential Estimating, Commercial Estimating, Bid Preparation, Detailed Cost Analysis, Advanced Estimating. Each: image, title, 2-line description, Read More.

5. **Transparent Pricing.** Eyebrow, H2 (_Scalable Estimating Packages_), intro. A **tabbed pricing component** (tabs = package names). Selecting a tab swaps a card showing description, 4 inclusions, the price range and a **Get Started** button. On mobile tabs become a horizontal scroller.

6. **Counters band** (dark or primary background): three count-up stats with large numbers and labels: `Projects Completed`, `Years of Experience`, `Professional Team`. Values are editable placeholders.

7. **Our Projects.** Eyebrow, H2, intro. 4 project cards (image, overlay title and short text, arrow button) as a grid or carousel with arrows. Link each to a project page or modal (stub allowed).

8. **Why Choose Us + Testimonials.** Eyebrow, H2, paragraph on the left; on the right a **testimonial carousel** (quote, avatar, name, role) with dots, autoplay paused on hover. Three placeholder testimonials flagged as samples.

9. **Our Process.** Eyebrow, H2, intro. **3 numbered steps** with large `01.` `02.` `03.` numerals, a title and a sentence each: _Share Your Plans → We Prepare the Estimate → Review and Bid with Confidence_. Connected by a thin line.

10. **CTA band with video background.** Background looping muted video or image with overlay (YouTube/MP4 placeholder). H2 _"Ready to Get an Accurate Estimate?"_, one paragraph, accent button **Schedule Consultation**.

11. **Blog + Newsletter.** Eyebrow, H2 (_Latest Articles_), 3 post cards (image, date, title, excerpt, Read More). Below, a **newsletter** strip: heading, one line, email field, **Subscribe** button, success and error states. Use 3 flagged placeholder articles about estimating topics.

(Footer follows.)

---

## 7. INNER PAGES

- **About Us:** page banner with breadcrumb (Home / About Us), story and mission, values, counters, team grid (4, placeholders), process, testimonials, CTA band.
- **Services:** banner + breadcrumb, the 6 service cards (each with **Get Started** linking to Contact), **Make Appointment** block (headline _"Need an estimate? Make an appointment now"_, location, email, phone), partner/client logo row (4 placeholders), process section, testimonials (heading style _"Trusted by contractors across {N} countries"_, placeholder), pricing teaser (first 3 packages), and a compact contact form.
- **Pricing:** banner + breadcrumb, intro _"Simple, transparent pricing for every project"_, **6 pricing cards** (see 8), a compact contact form (Name, Email, Message, Send), CTA band, contact details.
- **Contact Us:** banner + breadcrumb, two columns: form (Name, Email, Phone, Service dropdown, Message, file upload for plans optional) and contact details with hours, plus an embedded map placeholder.
- **Service detail pages (`/services/[slug]`):** one template used by all six services (overview, what's included, process, deliverables, FAQ, CTA).
- **Blog index + `/blog/[slug]`**, **Privacy Policy, Refund Policy, Terms & Conditions** (placeholder legal text clearly flagged for review), **404**.

---

## 8. DEFAULT CONTENT (editable placeholders in `/data`)

**Pricing packages** (ranges taken from the reference as placeholders; flag in `README.md` for confirmation):
| Package | For | Price | Includes |
|---|---|---|---|
| Basic Estimating | Small residential projects | $100 – $250 | Basic quantity takeoff · Material cost estimation · Labor cost calculation · Detailed estimate report |
| Detailed Estimating | Budget planning | $250 – $500 | Detailed quantity takeoffs · Material & labor pricing · Project cost breakdown · Professional estimate report |
| Residential Estimating | Construction and renovation | $300 – $600 | Residential quantity takeoffs · Material cost analysis · Labor cost estimation · Complete project estimate |
| Commercial Estimating | Commercial projects | $500 – $1,000 | Commercial quantity takeoffs · Detailed material pricing · Labor & equipment costs · Comprehensive cost analysis |
| Bid Preparation | Competitive bids | $400 – $800 | Accurate bid calculations · Detailed quantity takeoffs · Material & labor pricing · Competitive bid preparation |
| Advanced Estimating | Complex projects | $1,000 – $1,500 | Complex project takeoffs · Detailed cost analysis · Material & labor estimates · Complete estimating support |

Write original descriptions for every service and article. Use industry words correctly (quantity takeoff, scope of work, bid, unit cost, overhead and profit, contingency, change order).

**`siteConfig` fields:** brand name, tagline, logo paths, phone, email, address, hours, social URLs, YouTube ID, legal entity name, payment-method icons. Everything shown in the header, top bar, footer, contact page and schema comes from here.

---

## 9. FORMS, INTEGRATIONS & SEO

- Forms: Name, Email, Message (compact) and full contact form. `zod` validation, honeypot spam field, loading, success and error states, disabled submit while sending. Newsletter has its own endpoint.
- Click-to-call and mailto links everywhere contact details appear.
- SEO: unique title and meta description per page, Open Graph image, canonical URLs, `LocalBusiness`/`ProfessionalService` JSON-LD from `siteConfig`, sitemap, robots, descriptive alt text, breadcrumb schema on inner pages, service-page copy targeting "construction estimating services", "quantity takeoff services", "bid preparation services".
- Performance: `next/image` with correct `sizes`, lazy-load below the fold, video lightbox loads the iframe only on click, Lighthouse 90+ mobile.
- Accessibility: landmarks, skip link, visible focus ring (`--color-focus`), keyboard-operable tabs and carousel, labelled form fields, `aria-live` on form results, WCAG AA contrast.

---

## 10. FILE STRUCTURE

```
/app          layout.tsx, page.tsx, about-us/, services/(index,[slug]), pricing/, contact-us/,
              blog/(index,[slug]), privacy-policy/, refund-policy/, terms-conditions/,
              styleguide/, api/(contact,newsletter)/route.ts, not-found.tsx
/components   TopBar, Header, MobileDrawer, Footer, Section, SectionHeading, Container, Button, Card, Icon,
              Hero, AboutBlock, ExpertiseBlock, ProgressBar, ServiceCard, PricingTabs, PricingCard,
              CounterBand, ProjectCard, TestimonialCarousel, ProcessSteps, VideoCtaBand,
              BlogCard, NewsletterStrip, ContactForm, PageBanner, Breadcrumbs, VideoLightbox
/config       site.ts
/data         services.ts, pricing.ts, projects.ts, testimonials.ts, posts.ts, process.ts, stats.ts, faq.ts
/styles       tokens.css, globals.css
README.md     assumptions, placeholder inventory, how to re-theme
```

---

## 11. ACCEPTANCE CHECKLIST

1. Pages and section order match sections 5 to 7.
2. **Search the codebase: zero hex codes, `rgb(`, font-family strings or magic spacing values outside `tokens.css`.**
3. Switching to `[data-theme="alt"]` re-themes the entire site correctly with no component edits.
4. `/styleguide` shows all tokens and components.
5. No bookkeeping, tax, CFO, loan or finance copy anywhere; no lorem ipsum; no inconsistent brand name, phone or email.
6. Pricing tabs, progress bars, counters, testimonial carousel, mobile drawer and video lightbox all work with keyboard and touch.
7. Forms validate and show success and error states.
8. Responsive from 360px up; Lighthouse mobile 90+; WCAG AA contrast.
9. All placeholders (prices, stats, testimonials, team, projects, legal text, video IDs, logos) are flagged in code and listed in `README.md`.
10. Nothing copied from the reference: no text, images, logo or contact data.

---

## 12. DO NOT

- Hard-code colours or fonts in components.
- Reproduce the reference's template leftovers or mismatched finance content.
- Add heavy effects (glass, 3D, parallax gimmicks). The look is calm, corporate and trustworthy.
- Invent real-looking client names, awards or statistics without a placeholder flag.
- Add pages or features beyond this brief.

---

## Appendix A — If building in WordPress + Elementor Pro instead

- Map the token file to **Elementor Site Settings**: Global Colors (Primary, Secondary, Text, Accent plus custom: Surface, Surface Dark, Border) and Global Fonts (Heading, Body). Every widget must use Global Colors and Global Fonts, never a custom colour.
- Add `/* tokens */` custom CSS in Site Settings with the `:root` variables so custom code can use `var(--color-primary)`.
- Build reusable templates: Header, Footer, Top Bar (Theme Builder); a saved **Section Heading** and **Card** component; **Loop Grid** for services, projects and posts via custom post types (ACF); **Tabs** widget for pricing; **Counter** and **Progress Bar** widgets for stats; **Testimonial Carousel** widget.
- Forms with Elementor Forms or Contact Form 7; SEO with a standard SEO plugin; keep plugin count minimal for speed.

these are the pages pick relevent content from this site not excat this same one

URL Last Modified
https://perfectoestimatingservices.us/
https://perfectoestimatingservices.us/services/
https://perfectoestimatingservices.us/cases/
https://perfectoestimatingservices.us/about-us/
https://perfectoestimatingservices.us/contact-us/
https://perfectoestimatingservices.us/pricing/
https://perfectoestimatingservices.us/terms-conditions/
https://perfectoestimatingservices.us/privacy-policy/
