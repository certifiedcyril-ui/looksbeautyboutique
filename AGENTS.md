# Looks Beauty Boutique

- The mobile hero is intentionally independent from desktop hero controls and positioning, so desktop-only refinements must preserve the mobile composition.
- User-provided salon photography is served through Lovable Assets, kept as the original whole image without crops, and ordered explicitly in page data.
- All photo galleries use the shared PhotoCarousel and carousel Button variant so arrow placement stays consistent across galleries.
- Reviews use a native scroll-snap track with manual previous/next controls so browsing works with touch, keyboard, and buttons.
- Homepage title, description, canonical, social tags and business JSON-LD live only in the index route head(); __root keeps sitewide defaults only, so "/" has one source of truth.
- Service pages (/nails, /hair) are Greek-only (LanguageProvider forceLang) and take texts, prices, FAQ and JSON-LD from src/data/services.ts, so prices are edited in one place.
- Footer, RoseLine and site constants are shared from src/components/site and src/lib/site.ts so the homepage and service pages stay identical.
