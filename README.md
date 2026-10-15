# Doxo Collective

Professional corporate website for **Doxo Collective** (`doxocollective.com`) — a construction estimating company (quantity takeoffs, cost estimates, bid preparation). Built with Next.js App Router, TypeScript, Tailwind CSS, and a token-driven theme system.

## Assumptions

- Brand name set to **Doxo Collective** with domain **https://www.doxocollective.com**. Confirm legal entity name in `config/site.ts`.
- Contact details, address, social URLs, and YouTube video ID are **placeholders**.
- Pricing ranges follow the brief as editable placeholders — confirm before launch.
- Stats, testimonials, team members, projects, and partner logos are flagged samples.
- Legal pages contain clearly marked placeholder text for attorney review.
- Forms post to stub API routes (`/api/contact`, `/api/newsletter`). Wire Resend (or similar) via env vars when ready.
- Temporary colour palette and fonts live in `styles/tokens.css` marked `TEMP`.
- Reference site finance/bookkeeping copy was **not** reused; all visible copy is estimating-focused.
- Design rules applied per owner request: **no gradients**, **no sparkle/AI-style icons**, calm corporate look using Lucide line icons only.

## How to re-theme

1. Edit CSS variables in `styles/tokens.css` only.
2. Preview the alternate palette with `?theme=alt`.
3. Check `/styleguide` (noindex) for tokens, type, buttons, cards, and forms.
4. Do not hard-code hex, `rgb()`, or font-family strings in components.

## Placeholder inventory

| Item | Location |
|------|----------|
| Brand, phone, email, address, domain | `config/site.ts` |
| Social URLs, YouTube ID | `config/site.ts` |
| Pricing ranges | `data/pricing.ts` |
| Stats / expertise bars | `data/stats.ts` |
| Testimonials | `data/testimonials.ts` |
| Team / partners | `data/faq.ts` |
| Projects | `data/projects.ts` |
| Blog posts | `data/posts.ts` |
| Legal copy | `app/privacy-policy`, `refund-policy`, `terms-conditions` |
| Map embed | `app/contact-us/page.tsx` |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Vercel is the intended host. Set env vars when connecting a real email provider.
