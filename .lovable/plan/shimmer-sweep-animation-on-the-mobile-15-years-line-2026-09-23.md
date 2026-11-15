# Shimmer sweep animation on the mobile "15+ years" line

## What
Add a shimmer sweep to the mobile-only sentence "15 χρόνια εμπιστοσύνης / Syntagma-Athens" (the two italic Times lines under the EL/EN toggle). A light highlight will repeatedly pass across the text, like a shine gliding over it. The desktop version of the 15+ line stays untouched.

## How
1. `src/styles.css` — add a `shimmer-sweep` keyframe (background-position travels left→right) and a `.shimmer-text` class: white-to-pearl gradient with `background-clip: text`, white fallback color. Placed after the theme/rules section, with existing `@import` rules untouched at the top.
2. `src/routes/index.tsx` — add `shimmer-text` to the mobile 15+ paragraph (the one already marked `sm:hidden`, around line 220). No layout, size, or position changes.

## Behavior
- Loop: one sweep every ~3.5s with a brief pause, `ease-in-out`, infinite.
- Mobile only — the element is already hidden on desktop, so nothing else is affected.
- Verified at 390, 455 and 536px widths: no layout shift, logo/tagline/buttons untouched.

## Files
- `src/styles.css`
- `src/routes/index.tsx`
