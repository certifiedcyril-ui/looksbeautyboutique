# Mobile hero as a scaled-down desktop layout

## Goal
Make the mobile hero look like a smaller version of the desktop hero: the full woman stays visible (including her face), all desktop elements fit without overlapping her, and the overall composition scales down cleanly.

## What we will do

1. **Image scaling and positioning**
   - Keep `object-contain` on mobile so the whole woman is shown (no zoom/crop).
   - Anchor the image to the right side of the black hero frame (`object-right`) so the woman appears on the right, matching desktop.
   - Ensure her face sits in the upper-right area and is not cut off by the viewport.

2. **Resize and reposition desktop elements for mobile**
   - Logo: keep top-left, scale down proportionally.
   - Navigation: keep the hamburger menu as-is; no change needed.
   - BOOK NOW / EL·EN controls: keep top-right, shrink padding/font slightly.
   - Main headline: keep centered-left italic two-line block, reduce font size and indentation so it does not cover the woman.
   - 15+ years line: keep upper-center, reduce size, ensure it clears the logo and the woman's head.
   - Bottom buttons (BOOK NOW / ΣΧΕΤΙΚΑ): keep bottom-left, shrink.
   - Tagline: keep bottom-center/right, shrink and align with the bottom row without touching the woman.

3. **Spacing and safety**
   - Add small vertical offsets so text sits in the black empty space on the left.
   - Verify at 390×844 and 375×667 that no text overlaps the woman and the face is clearly visible.

## Files to change
- `src/routes/index.tsx` — hero layout and responsive classes.
- `src/styles.css` — no change expected unless a new spacing token is needed.

## Verification
- Run `bun run build`.
- Capture Playwright screenshots at 390×844 and 1280×800 to confirm the woman is fully visible, her face appears, and all text fits in the black space.