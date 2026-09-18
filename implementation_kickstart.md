# Residence Jonathan — Implementation Kickstart

A static, single-page marketing website for **Residence Jonathan** in **Biograd na Moru, Croatia**. Booking is handled entirely off-site by Booking.com. This document is the source of truth for the build; it captures scope, decisions, data model, structure, and acceptance criteria agreed before coding.

---

## 1. Scope

- **Type:** Static, single-page front-end marketing site.
- **Out of scope:** No internal booking, pricing, payments, availability, accounts, or CMS. All booking flows to an external Booking.com URL.
- **Deliverable:** A polished, responsive, accessible prototype whose content, images, and links are easy to replace with confirmed data later.

### Guiding rules
- **One CTA everywhere:** the only booking CTA label is **"Check Availability"**, linking to a single centralized Booking.com URL.
- **No invented facts:** unconfirmed property details are clearly editable placeholders.
- **No false claims:** no official Booking.com partnership, no promises of free cancellation, lowest price, or instant pricing.
- **Location wording:** "Biograd na Moru, Croatia" only. Avoid conflicting Kvarner/Dalmatian Riviera terminology.

---

## 2. Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide |
| Animation | Framer Motion (only where it adds value) |
| Components | Custom, semantic HTML. Avoid heavy component libraries. |

Keep dependencies minimal. Prefer native elements and small custom components over pulling in libraries.

---

## 3. Information architecture (single page)

Sections in scroll order, each with an anchor id for smooth-scroll navigation:

1. **Header / Nav** (`#top`) — sticky, transparent over hero then solid on scroll.
2. **Hero** (`#hero`) — headline, subheadline, primary "Check Availability" CTA, prioritized hero image.
3. **Intro / About** (`#about`) — short positioning paragraph, key highlights.
4. **Apartments** (`#apartments`) — cards for each unit (placeholder data).
5. **Gallery** (`#gallery`) — editorial grid opening a fullscreen lightbox.
6. **Amenities** (`#amenities`) — icon + label grid.
7. **Location & Map** (`#location`) — styled static map card, distances list, "Open in Google Maps" link.
8. **Reviews** (`#reviews`) — clearly-marked placeholder testimonials.
9. **Final CTA** (`#book`) — full-width banner with "Check Availability".
10. **Footer** — contact placeholders, Privacy Policy + Legal/Imprint links, copyright.
11. **Sticky mobile CTA** — floating "Check Availability" bar; hidden once the final CTA/footer is in view.

---

## 4. Component breakdown

```
app/
  layout.tsx          # metadata, fonts, structured data
  page.tsx            # composes sections
components/
  site-header.tsx     # sticky nav + mobile drawer
  mobile-nav.tsx      # accessible drawer (focus trap, Esc, backdrop)
  hero.tsx
  about-section.tsx
  apartments-section.tsx
  apartment-card.tsx
  gallery-section.tsx
  lightbox.tsx        # fullscreen dialog, prev/next, counter, swipe
  amenities-section.tsx
  location-section.tsx
  reviews-section.tsx
  final-cta.tsx
  site-footer.tsx
  sticky-cta.tsx      # mobile floating CTA
  book-button.tsx     # single CTA component (analytics-ready wrapper)
  reveal.tsx          # Framer Motion reveal honoring reduced-motion
lib/
  site-config.ts      # centralized URLs + contact
  data.ts             # typed placeholder content
  types.ts            # shared types
```

### CTA component (`book-button.tsx`)
- Renders an `<a>` to the centralized Booking.com URL with `target="_blank"` and `rel="noopener noreferrer"`.
- Accepts a `location` prop (e.g. `"hero"`, `"final"`, `"sticky"`) so outbound clicks can be attributed to analytics later without refactoring.
- Single fixed label: **"Check Availability"**.

---

## 5. Centralized configuration (`lib/site-config.ts`)

All external references live in one place so they are trivial to update:

- `bookingUrl` — the Booking.com property URL (placeholder for now).
- `googleMapsUrl` — "Open in Google Maps" destination.
- `email` — contact email placeholder.
- `phone` — contact phone placeholder.
- `siteName`, `location`, canonical URL, and SEO defaults.

---

## 6. Typed data model (`lib/types.ts` + `lib/data.ts`)

Placeholder content, all clearly editable. Nothing invented as fact.

```ts
type Apartment = {
  id: string
  name: string
  summary: string          // placeholder
  sleeps: string           // placeholder, e.g. "Sleeps up to 4"
  size?: string            // placeholder
  features: string[]       // placeholder amenities
  image: string            // easy-to-replace placeholder path
}

type Amenity = { id: string; label: string; icon: LucideIcon }

type GalleryImage = { id: string; src: string; alt: string; caption?: string }

type Review = {
  id: string
  quote: string            // clearly-marked placeholder text
  author: string           // e.g. "Guest review (placeholder)"
}

type Distance = { id: string; label: string; value: string } // placeholder distances

type NavItem = { id: string; label: string; href: string }   // anchor links
```

Each list (apartments, amenities, gallery, reviews, distances, nav) is exported from `data.ts`.

---

## 7. Images

- Use high-quality placeholder apartment/coastal images.
- Reference every image through a single mapping so real photography can be swapped in later without touching components.
- Hero image uses `priority`; all below-the-fold images lazy-load.
- Use `next/image` with correct `sizes` and meaningful `alt` text (empty alt for purely decorative images).
- Provide a graceful visual if an image fails to load.

---

## 8. Navigation behavior

- Desktop: sticky header, transparent over hero → solid background on scroll.
- Anchor links smooth-scroll with an offset equal to the sticky header height.
- Mobile: hamburger opens an accessible drawer that:
  - traps focus while open and restores focus to the trigger on close,
  - closes on link selection, Escape, and backdrop click,
  - locks body scroll while open,
  - uses correct `aria-expanded` / `aria-controls` / dialog semantics.

---

## 9. Gallery & lightbox

- Editorial grid; clicking an image opens a fullscreen lightbox as an accessible dialog.
- Features: previous/next controls, keyboard arrow navigation, Escape to close, backdrop click to close, image counter (e.g. "3 / 8"), mobile swipe gestures.
- Opens on the clicked image; body scroll locked while open; focus trapped and restored.
- Each image has descriptive alt text; optional captions.

---

## 10. Location & map

- Styled static map/location card (no Google Maps API, no interactive map yet).
- Prominent "Open in Google Maps" link using the centralized `googleMapsUrl`, opening in a new tab with `rel="noopener noreferrer"`.
- Distances list rendered from placeholder `Distance[]` data.

---

## 11. Responsive

- Support desktop, tablet, and mobile down to ~320px.
- Mobile-first Tailwind breakpoints; flexbox for most layouts, grid for the gallery/amenities.
- Sticky mobile "Check Availability" CTA that respects safe-area insets, never overlaps meaningful content, and disappears around the final CTA/footer.

---

## 12. Accessibility (target: WCAG 2.2 AA where practical)

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) and a logical heading hierarchy.
- Skip-to-content link.
- Full keyboard operability and visible focus states.
- Sufficient contrast for text over imagery and for CTA buttons.
- Screen-reader labels for icon-only controls.
- Accessible dialog semantics for the mobile drawer and lightbox.
- `prefers-reduced-motion` respected — reveals and transitions reduce to instant/opacity-only.
- Descriptive alt text; decorative images marked empty.
- External links announced/handled consistently.

---

## 13. Animations

- Subtle, premium: gentle section reveals, soft image hover effects, smooth nav transitions, refined lightbox open/close.
- All wrapped so `prefers-reduced-motion` disables movement.
- Never block content rendering or interactivity on animation.

---

## 14. Performance (Core Web Vitals)

- Prioritize and preload the hero image; lazy-load everything below the fold.
- Optimize image sizes and formats via `next/image`.
- Minimize client JavaScript; keep interactive islands (drawer, lightbox, sticky CTA) as small client components, everything else server-rendered.
- Avoid unnecessary dependencies.

---

## 15. SEO & metadata

Editable placeholders defined in `layout.tsx` / config:

- Title and meta description.
- Canonical URL.
- Open Graph tags + share image placeholder.
- Favicon and theme color.
- Semantic headings.
- Vacation-rental structured data (`LodgingBusiness` / `VacationRental`) **only for fields that are verified**; omit unverified claims and ratings.
- English only for now.

---

## 16. Analytics

- No analytics library added now.
- CTA components accept a `location` identifier so outbound Booking.com clicks can be instrumented later with a single change.

---

## 17. Legal

- Footer includes placeholder **Privacy Policy** and **Legal/Imprint** links.
- No invented company registration, VAT, ownership, or contact details — placeholders only.

---

## 18. Acceptance criteria

- [ ] Every booking CTA reads "Check Availability" and links to the one centralized Booking.com URL with safe external-link attributes.
- [ ] All sections reachable via keyboard-accessible anchor navigation with correct sticky-header offset.
- [ ] Mobile drawer and gallery lightbox have correct dialog semantics, focus trap/restore, Escape, backdrop close, and scroll lock.
- [ ] Layout validated with no overlap or overflow at ~320px, tablet, and desktop.
- [ ] Sticky mobile CTA never covers content and hides at the final CTA/footer.
- [ ] Reduced-motion users receive no forced motion.
- [ ] Hero prioritized; below-the-fold images lazy-load; all images have appropriate alt text and are swap-ready.
- [ ] No invented property facts, reviews, ratings, or Booking.com partnership claims.
- [ ] SEO metadata, Open Graph, favicon, and verified-only structured data present.
- [ ] Privacy Policy and Legal/Imprint placeholder links present in footer.
- [ ] Booking.com URL, Google Maps URL, email, and phone centralized in one config.

---

## 19. Build order

1. Config + types + placeholder data (`lib/`).
2. Layout, metadata, fonts, global styles, design tokens.
3. `book-button` + `reveal` primitives.
4. Header + mobile drawer.
5. Hero → About → Apartments → Gallery (+ lightbox) → Amenities → Location → Reviews → Final CTA → Footer.
6. Sticky mobile CTA.
7. Accessibility, reduced-motion, and responsive pass down to 320px.
8. SEO/structured-data and performance pass.
9. Browser verification across viewports.
