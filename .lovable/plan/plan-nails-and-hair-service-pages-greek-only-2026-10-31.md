# Plan: /nails and /hair service pages (Greek-only)

## What you get
- Two new pages, `/nails` and `/hair`, fully rendered in the server HTML with your exact texts, prices and FAQs.
- Same palette, fonts, nav style and dark footer (map, address, phone, hours) as the homepage. Homepage hero and sections unchanged, except two small link additions.

## Page layout (both pages)
1. Top bar on a dark (ink) background, in the same style as the homepage nav: logo links to `/`, links "Αρχική" (`/`), "Νύχια" (`/nails`), "Μαλλιά" (`/hair`), and a taupe "Κλείσε ραντεβού" pill linking to the Setmore booking page. The homepage nav sits over the hero photo, so it cannot be reused as-is; this is a sibling bar with the same classes.
2. One `<h1>`, the intro paragraph, then the "Κλείσε ραντεβού" button.
3. Price sections: each section gets an `<h2>`, then a list with the service on the left and the price on the right, divided by thin taupe lines.
4. Your note line, with "online σύστημα ραντεβού" linking to booking.
5. FAQ built with native `<details>/<summary>`, so answers are always in the HTML even when collapsed. No JavaScript needed.
6. Final CTA band, then the shared footer.

## EL/EN toggle
The toggle is hidden on these pages and their HTML is `lang="el"`. A visitor who chose English on the homepage still sees Greek here, with no broken half-translated state. The footer is shown in Greek.

## Homepage links (crawlable `<a href>`)
- Nav: add "Νύχια" and "Μαλλιά" links to the existing desktop link row and the mobile menu, styled like the existing links. The hero layout and the BOOK NOW position stay the same. The mobile hero is untouched apart from the menu dropdown items (AGENTS.md).
- Gallery: a small text line under the "Νύχια"/"Μαλλιά" headings: "Δες τιμές νυχιών →" / "Δες τιμές κομμωτηρίου →". Labels follow the EL/EN toggle on the homepage.

## SEO per page
- `head()` holds your title and description, a self-referencing canonical (`https://looksbeautyboutique.gr/nails` and `/hair`), og:title/description/url, og:type "website", twitter card/title/description. There is no og:image because there is no page photo.
- JSON-LD:
  - (a) FAQPage built from the same FAQ data as the visible section.
  - (b) Service with `hasOfferCatalog`. Each service is an Offer with a numeric price and EUR. The provider is the same salon business (name and url) as the homepage.
  - (c) BreadcrumbList: Αρχική > Νύχια / Κομμωτήριο.
  - No ratings, reviews or geo.
- `public/sitemap.xml`: add both URLs with lastmod 2026-10-31.

## Conflicts and decisions to confirm
1. **Prices with two values.** "Χτένισμα με πρέσα 20€ (μακριά 25€)", "Steam pod 25€ (μακριά 30€)" and "Absolut Repair Molecular κοντά 25€ / μεσαία 30€ / μακριά 35€" are shown exactly as written. In the JSON-LD I will split them into separate Offers (e.g. "Χτένισμα με πρέσα, μακριά μαλλιά — 25€") so every Offer has one price. Tell me if you would rather list only the base price.
2. **"Μάσκες (αντιγήρανσης, ενυδάτωσης, κατά του φριζαρίσματος) 12€"** stays as one line and one Offer.
3. **Shared footer and the homepage.** The footer's nav links are `#home`, `#story`, etc. On the new pages they become `/`, `/#story`, `/#booking`, `/#contact`. On the homepage they stay exactly as today. The homepage will look identical.
4. **Booking button target.** The new pages use the Setmore URL directly, because the booking form only exists on the homepage.
5. **FAQPage markup.** You asked for it, so I'll add it. Google no longer shows FAQ rich results for most sites, but the markup is valid and AI search can still read it.
6. **Homepage nav width.** On desktop between about 768px and 1000px, two extra nav items may wrap. If so, I'll tighten the gap at that width only, without changing colors or position.
7. **Hours** come from your FAQ text and match the existing footer. No change there.

## Technical details
- **New `src/lib/site.ts`:** SITE_URL, BOOKING_URL, MAPS_URL, MAPS_EMBED, SOCIAL_URLS, the business identity (name, url) and `hourTimes`, moved out of `index.tsx` unchanged.
- **New `src/data/services.ts`:** typed data for both pages (h1, intro, sections → `{ name, price, jsonLdOffers? }`, faq), using your texts verbatim. Builders for the FAQPage, Service/OfferCatalog and BreadcrumbList JSON-LD live here too.
- **New `src/components/site/Footer.tsx`:** the existing Footer moved verbatim, plus a `linkBase` prop (default `""`, so the homepage gets `#home`; service pages pass `"/"`). It still reads strings via `useI18n`. Service pages wrap the footer in `LanguageProvider` pinned to Greek.
- **i18n change:** `LanguageProvider` gets an optional `forceLang="el"` prop that skips reading/writing `lbb-lang` and keeps `<html lang="el">`. The homepage behaviour is unchanged.
- **New `src/components/site/RoseLine.tsx`:** moved out with the footer, because the footer uses it.
- **New `src/components/site/ServiceNav.tsx`:** the dark top bar for the service pages. HeroNav stays in `index.tsx`, where it only gains the two links.
- **New `src/components/site/ServicePage.tsx`:** shared layout (nav, h1, intro, CTA, price lists, note, FAQ, CTA, footer).
- **New `src/routes/nails.tsx` and `src/routes/hair.tsx`:** each sets `head()` and renders ServicePage with its data. No intro splash on these pages.
- **Edited `src/routes/index.tsx`:** imports the shared constants and Footer, adds the two nav links and the two gallery text links. No other visual change.
- **Edited `src/lib/i18n.tsx`:** `forceLang` prop, plus the gallery link labels in EL/EN.
- **Edited `public/sitemap.xml`:** two new URLs.
- **Edited `AGENTS.md`:**
  - Service pages are Greek-only and draw their data from `src/data/services.ts`.
  - The footer is shared via `components/site`.
- **Verification:**
  - Fetch the SSR HTML of `/nails` and `/hair` and confirm the h1, all prices, the FAQ answers and the JSON-LD are present.
  - Validate that the JSON-LD parses.
  - Take Playwright screenshots on phone and desktop of both new pages and the homepage nav/gallery.
  - Add a small test asserting a few exact prices from the data file (e.g. Balayage μακριά 90€, ημιμόνιμο 23€).
- Nothing is published until you say so.
