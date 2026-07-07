# CV-v2

A rewrite of my printable CV — a clean, professional A4 document with brand
accents matching [portfolio-v2](../portfolio-v2) (violet, Space Grotesk).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config)
- **react-icons**
- No print library — "Print / Save as PDF" is `window.print()` over a
  carefully tuned `@media print` stylesheet. The page **is** the PDF: one
  source of truth, no stale `CV.pdf` file to maintain.

## Design

- Document-style sheet centered on a neutral page background
- Header: name, titles, professional summary
- Sidebar: contact, grouped skills, education
- Main column: work-experience timeline with accent dots
- CSS-only entrance animation (snaps to final state in print)
- Print rules: A4 `@page`, `break-inside: avoid` on entries,
  `print-color-adjust: exact` for brand colors, button/tip hidden

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editing content

All CV content lives in [`src/lib/cv-data.ts`](src/lib/cv-data.ts) —
personal info, contact, skill groups, experience and education.

## Updating the portfolio's CV.pdf

The portfolio site (portfolio-v2) serves a static copy at `public/CV.pdf`.
After changing CV content here, regenerate it: open this app, click
"Print / Save as PDF" (or use headless Chrome's print-to-PDF) and save the
result over `../portfolio-v2/public/CV.pdf`.
