# Doxo Collective

Professional corporate website for **Doxo Collective** (`doxocollective.com`) — bookkeeping, tax, CFO advisory, and loan strategy services. Built with Next.js App Router, TypeScript, Tailwind CSS, and a token-driven theme system.

Layout and section rhythm follow the reference structure of [perfectoestimatingservices.us](https://perfectoestimatingservices.us/). Visible copy is original bookkeeping/finance content aligned to that homepage service mix — not construction estimating.

## Assumptions

- Brand name set to **Doxo Collective** with domain **https://doxocollective.com**. Confirm legal entity name in `config/site.ts`.
- Contact details, address, social URLs, and YouTube video ID are **placeholders**.
- Pricing ranges are editable placeholders — confirm before launch.
- Stats, testimonials, team members, projects, and partner logos use display profiles — swap for verified client assets when ready.
- Legal pages contain clearly marked placeholder text for attorney review.
- Forms post to stub API routes (`/api/contact`, `/api/newsletter`). Wire Resend (or similar) via env vars when ready.
- Temporary colour palette and fonts live in `styles/tokens.css` marked `TEMP`.
- Design rules: **no gradients**, **no sparkle/AI-style icons**, calm corporate look using Lucide line icons only.

## Services (aligned to reference homepage)

1. Bookkeeping Services  
2. Corporate Tax  
3. CFO Advisory  
4. Tax Strategy  
5. Loan Consultation  
6. Virtual CFO  

## How to re-theme

1. Edit CSS variables in `styles/tokens.css` only.
2. Preview the alternate palette with `?theme=alt`.
3. Check `/styleguide/` (noindex) for tokens, type, buttons, cards, and forms.
4. Do not hard-code hex, `rgb()`, or font-family strings in components.

## Canonical URL rules

- Non-www only: `https://doxocollective.com`
- Trailing slash on all routes
- Self-referencing canonicals per page via `lib/seo.ts`

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

Vercel is the intended host. Set the primary domain to non-www and keep www as a redirect.
