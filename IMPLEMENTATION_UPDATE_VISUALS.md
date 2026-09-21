# Residence Jonathan — Visual & Interactive Overhaul Plan
**File:** `IMPLEMENTATION_UPDATE_VISUALS.md`  
**Target:** Visual upgrade, contemporary editorial layout, cinematic motion, and modern interactive polish.  
**Companion Doc:** `implementation_kickstart.md` (Core functional scope, rules, and booking architecture).  
**Status:** Ready for Execution (Planning Complete — No code changes applied yet).

---

## 1. Executive Summary & Vision

This document outlines the end-to-end implementation plan for elevating **Residence Jonathan** into a world-class, editorial hospitality experience.

While `implementation_kickstart.md` established the foundational single-page marketing architecture (centralized Booking.com CTA, verified-only claims, responsive layout, accessible primitives), this plan transforms the front-end presentation into an evocative, immersive showcase of Adriatic coastal living.

### Guiding Principles
1. **Editorial Over Templated:** Replace uniform 3-column card grids with asymmetric bento layouts, horizontal room previews, and pinned scroll storytelling.
2. **Atmospheric & Alive:** Introduce a subtle Ken Burns breathing zoom, ambient desktop coast video, image mask wipe reveals, and soft grain/gradient depths.
3. **Tactile Interaction:** Magnetic button physics, interactive dark mode toggle, smooth review marquee, and live seasonal availability teaser.
4. **Zero Performance & Accessibility Regress:** Honor `prefers-reduced-motion` everywhere, lazy-load heavy media, keep LCP fast, and ensure full keyboard navigation.

---

## 2. Technical Stack & Architecture Decisions

| Area | Current Setup | Visual Overhaul Decision | Rationale |
| :--- | :--- | :--- | :--- |
| **Animation Library** | Custom CSS + lightweight IntersectionObserver | `motion` (Framer Motion for React 19 / App Router) | React 19 compatible (`motion/react` or `framer-motion@latest`). Provides spring physics, gesture handling, and layout animations while preserving small bundle size. |
| **Dark Mode** | OKLCH tokens defined in `.dark` in `globals.css` (no switch) | Client-side theme provider (`next-themes` or zero-flash inline script + custom hook) | Leverages the existing OKLCH color system without rewrites; provides immediate evening browsing mode. |
| **Hero Background** | Single static Next.js `<Image>` | Dual-layer: HTML5 muted looping `<video>` (desktop) + Ken Burns animated fallback `<Image>` (mobile & reduced motion) | Cinematic movement on desktop; zero data/battery waste on mobile. |
| **Apartments Layout** | 3 identical vertical cards | Asymmetric Bento Grid + Horizontal Scroll Gallery Moments | Creates visual rhythm, highlights the signature unit, and provides an editorial magazine feel. |
| **Scroll Transitions** | Simple opacity/translate fade | CSS/Motion clip-path mask reveals + subtle parallax depth | High-end visual wipe transitions without heavy JS re-renders. |
| **Interactive Elements** | Standard hover color shifts | Magnetic cursor-pull on CTAs, active spring presses, infinite review marquee | Makes the interface feel responsive, alive, and rewarding to touch. |

---

## 3. Detailed Scope of Changes

### 3.1. Cinematic Hero (`components/hero.tsx`)
- **Slow "Breathing" Zoom (Ken Burns):**
  - Subtle CSS animation (`scale-100` to `scale-108` over 16–20 seconds with soft ease-in-out alternate) applied to the hero imagery.
  - Automatically disabled when `prefers-reduced-motion` is active.
- **Muted Ambient Video Layer:**
  - Background HTML5 `<video>` element (`autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"`).
  - Media query check / hidden on mobile (`hidden md:block`) with instant poster fallback.
  - Graceful degradation: if video fails to load or user has data-saver enabled, displays the high-res hero photography.
- **Glassy Floating "Quick Facts" Card:**
  - Modern frosted glass card (`backdrop-blur-md bg-background/30 border border-white/20 dark:border-white/10 text-background`).
  - Key scannable highlights: Location (*Biograd na Moru, Croatia*), Capacity (*Studios & Suites for 2–6 guests*), Distance (*5 min walk to Adriatic beach*).
  - Positioned strategically over the hero without obscuring the main focal photography.
- **Expressive Headline & Entrance Motion:**
  - Larger typography using Fraunces display font with refined letter-spacing and italic accents.
  - Staggered entrance animation for eyebrow, headline, subheadline, and CTAs.
- **Seasonal Availability Teaser Strip:**
  - Subtle top ambient bar announcing upcoming booking window (e.g., *"Summer 2026 dates now open • Reserve early via Booking.com"*).

### 3.2. Bolder Contemporary Layouts (`components/apartments-section.tsx`, `components/about-section.tsx`, `components/location-section.tsx`)
- **Asymmetric "Bento" Grid for Apartments:**
  - Replace the 3 identical cards with varied tile spans:
    - *Featured Tile (Span 2 cols / Large Showcase):* Highlight flagship unit (e.g. Adriatic Family Suite or Olive Terrace) with expansive photography, badging, and amenity pills.
    - *Secondary Tiles (Compact Editorial):* Clean, striking cards for remaining units with hover reveals.
- **Horizontal-Scroll Room Tour Moment:**
  - Introduce an interactive touch-friendly horizontal swipe scroller for space previews.
  - Snap-scrolling (`scroll-snap-type: x mandatory`), pagination indicator dots, and subtle navigation arrow buttons.
- **Sticky Pinned Split Sections (About & Location):**
  - **About Section:** Left side pins with story copy, quotes, and badges; right side scrolls through an editorial collage of architecture and terrace details.
  - **Location Section:** Left side pins with town guide, distances dl, and Google Maps CTA; right side showcases the illustrated map card and nearby coastal scene collages.
- **Offset Overlapping Image Collages:**
  - Break rigid container boundaries with subtle overlapping photo frames, layered z-indexes, and delicate drop shadows.

### 3.3. Richer Scroll-Driven Motion (`components/reveal.tsx`, `components/scroll-progress.tsx`)
- **Image Mask Wipe Reveals:**
  - Upgrade standard fade-ups to smooth image mask reveals (`clip-path: inset(100% 0 0 0)` to `clip-path: inset(0 0 0 0)` or directional wipes).
- **Subtle Parallax Depth:**
  - Background imagery drifts at a 0.1–0.15 factor relative to page scroll for grounded 3D depth.
- **Thin Scroll Progress Indicator & Animated Section Numbers:**
  - Ultra-thin top fixed accent bar showing page scroll completion.
  - Section numbers (e.g., `01`, `02`, `03`) with subtle animated counters or slide-in markers.
- **Reduced Motion Guardian:**
  - Strict global bypass: all parallax, mask wipes, zoom, and transform transitions revert to simple instant opacity or native layout if `prefers-reduced-motion` is detected.

### 3.4. Modern Interactive Touches
- **Magnetic CTA Physics:**
  - Primary "Check Availability" buttons calculate cursor proximity on hover, applying a subtle magnetic pull and smooth release.
  - Satisfying scale-down on `:active` tap.
- **Single-Tap Dark Mode Toggle:**
  - Sun/Moon icon toggle button integrated into `SiteHeader` (desktop) and `MobileNav` (mobile drawer).
  - Smooth color transitions on background, borders, and cards using the existing OKLCH tokens in `globals.css`.
- **Auto-Advancing / Infinite Marquee Reviews (`components/reviews-section.tsx`):**
  - Replace static cards with a gentle continuous marquee or auto-advancing carousel.
  - Pauses immediately on mouse hover or touch focus for comfortable reading and accessibility.
- **Top "Available Dates" Teaser Strip:**
  - Integrated into the header or top banner, linking smoothly to the booking trigger.

### 3.5. Refined Typography, Color & Texture (`app/globals.css`, `app/layout.tsx`)
- **Display Font Variable Weights:**
  - Leverage Fraunces variable font features: contrast between delicate italic weights and bold headings.
- **Atmospheric Background Grain & Gradients:**
  - Subtle noise texture SVG overlay (`data:image/svg+xml,...`) applied to large canvas areas.
  - Soft radial Mediterranean gradient accents (terracotta warmth + deep Adriatic sapphire tones) to break up flat backgrounds.
- **Expanded Whitespace:**
  - Increased section padding (`py-28 lg:py-36`) for an airy, luxurious, unhurried cadence.

---

## 4. Step-by-Step Implementation Roadmap

```
Phase 1: Foundation, Libraries & Dark Mode
   ├── 1.1 Install & configure animation library (`motion` / React 19)
   ├── 1.2 Implement Dark Mode Theme Provider & Toggle
   └── 1.3 Add Background Grain & Gradient Tokens in `globals.css`

Phase 2: Cinematic Hero & Quick Facts
   ├── 2.1 Video + Fallback Image Ken Burns Zoom
   ├── 2.2 Glassmorphism "Quick Facts" Card
   ├── 2.3 Expressive Typographic Entrance Animations
   └── 2.4 Available Dates Ambient Teaser Strip

Phase 3: Bento Grid & Horizontal Room Tour
   ├── 3.1 Asymmetric Bento Grid Layout for Apartments
   ├── 3.2 Horizontal-Scroll Gallery Moment with Swipe Snap
   └── 3.3 Enhanced Apartment Card Details & Micro-interactions

Phase 4: Sticky Pinned Sections & Collages
   ├── 4.1 Pinned Narrative Layout for About Section
   ├── 4.2 Pinned Layout & Layered Collages for Location Section
   └── 4.3 Image Depth & Overlapping Frames

Phase 5: Scroll-Driven Motion & Mask Reveals
   ├── 5.1 Scroll Progress Bar & Section Number Indicators
   ├── 5.2 Image Mask Reveal Primitive Component
   └── 5.3 Gentle Scroll Parallax & Reduced-Motion Wrappers

Phase 6: Interactive Polish & Dynamic Components
   ├── 6.1 Magnetic CTA Hover Physics on BookButton
   ├── 6.2 Infinite Marquee / Auto Carousel for Reviews
   └── 6.3 Header Dark Mode Switch & Mobile Drawer Sync

Phase 7: Performance, Accessibility & Cross-Device Verification
   ├── 7.1 LCP & Media Optimization (Video compression, poster preload)
   ├── 7.2 Accessibility Audit (Focus traps, ARIA, screen readers, contrast)
   └── 7.3 Responsive Multi-Viewport Testing (320px mobile to 4K ultrawide)
```

---

## 5. Master Implementation Checklist

Use this checklist to track execution progress across chats and agents. Mark items as completed (`[x]`) once built and verified.

### Phase 1: Foundation, Dependencies & Theme System
- [ ] **1.1** Verify and install React 19 compatible animation library (`motion` or `framer-motion@latest`).
- [ ] **1.2** Create `components/theme-toggle.tsx` and theme provider/hook to toggle `.dark` class on `<html>` with `localStorage` persistence.
- [ ] **1.3** Update `app/globals.css` with fine-tuned noise texture utilities, subtle radial gradient tokens, and Ken Burns keyframes.
- [ ] **1.4** Verify Fraunces font configuration in `app/layout.tsx` to ensure variable weights, optical sizes, and italic axes are loaded cleanly.

### Phase 2: Cinematic Hero Experience
- [ ] **2.1** Update `components/hero.tsx` with Ken Burns subtle breathing zoom on image layer (`transform: scale(1.0) -> scale(1.08)`).
- [ ] **2.2** Add desktop background `<video>` support with `hidden md:block`, graceful fallback to `/images/hero2.jpg`, and mobile performance guard.
- [ ] **2.3** Build and embed the floating glassy "Quick Facts" card (Location, Capacity, Beach Distance) with backdrop blur and border glow.
- [ ] **2.4** Re-style hero typography: larger Fraunces display headline with expressive italic contrast and staggered entrance reveal.
- [ ] **2.5** Add the "Available Dates" teaser strip near the top/hero announcing booking availability.

### Phase 3: Bento Grid & Horizontal Room Tour
- [ ] **3.1** Refactor `components/apartments-section.tsx` into an asymmetric Bento grid (prominent showcase card + complementary units).
- [ ] **3.2** Create a horizontal-scroll space tour moment allowing guests to swipe or drag through rooms and features.
- [ ] **3.3** Update `components/apartment-card.tsx` with editorial badges, amenity chips, and smooth image scale transitions on hover.
- [ ] **3.4** Maintain complete type safety with `lib/types.ts` and `lib/data.ts`.

### Phase 4: Sticky Pinned Sections & Narrative Collages
- [ ] **4.1** Refactor `components/about-section.tsx` with desktop sticky pinned text on left and scrolling editorial image collage on right.
- [ ] **4.2** Refactor `components/location-section.tsx` with pinned distance breakdown and layered map/coastal photo collage.
- [ ] **4.3** Introduce offset, overlapping photo frames with soft ambient shadows to break rectangular container monotony.

### Phase 5: Scroll-Driven Motion & Mask Reveals
- [ ] **5.1** Create a thin sticky `ScrollProgress` bar at the top of the viewport.
- [ ] **5.2** Create an `ImageMaskReveal` component or upgrade `components/reveal.tsx` to support curtain/wipe mask animations.
- [ ] **5.3** Add animated section numbers (`01 / 06`, `02 / 06`) that slide or highlight as users reach each anchor.
- [ ] **5.4** Implement gentle parallax drift for section imagery.
- [ ] **5.5** Ensure 100% compliance with `prefers-reduced-motion` (zero motion forced on users who disable it).

### Phase 6: Interactive Polish & Delight
- [ ] **6.1** Upgrade `components/book-button.tsx` with subtle magnetic hover physics (desktop) and active tap feedback.
- [ ] **6.2** Add dark mode toggle button to `components/site-header.tsx` and inside `components/mobile-nav.tsx`.
- [ ] **6.3** Refactor `components/reviews-section.tsx` into a smooth, infinite auto-advancing marquee with hover-pause functionality.
- [ ] **6.4** Verify all "Check Availability" CTAs retain their single destination URL (`siteConfig.bookingUrl`) and telemetry tags.

### Phase 7: Polish, Accessibility & Performance Guardrails
- [ ] **7.1** Verify Lighthouse / Core Web Vitals: ensure hero LCP is under 2.0s and hero video does not block critical rendering path.
- [ ] **7.2** Test mobile responsiveness down to 320px with zero horizontal scroll overflow.
- [ ] **7.3** Test keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Escape`) across new interactive cards, marquee, and dark mode toggle.
- [ ] **7.4** Validate color contrast ratios in both light and dark modes against WCAG 2.2 AA standards.
- [ ] **7.5** Final browser verification across Chromium, Firefox, and Safari (desktop + mobile emulation).

---

## 6. Files & Components Impact Matrix

| File Path | Action | Role & Changes |
| :--- | :--- | :--- |
| `package.json` | **MODIFY** | Add `motion` (or `framer-motion@latest`) for React 19 animations. |
| `app/globals.css` | **MODIFY** | Add Ken Burns keyframes, noise texture utilities, mask reveal classes, and dark mode transitions. |
| `app/layout.tsx` | **MODIFY** | Integrate theme provider/script to prevent FOUC (flash of unstyled content) and fine-tune fonts. |
| `components/hero.tsx` | **MODIFY** | Implement Ken Burns zoom, video player layer, glassy quick facts card, larger headline. |
| `components/apartments-section.tsx` | **MODIFY** | Convert into asymmetric Bento grid and add horizontal room swipe preview. |
| `components/apartment-card.tsx` | **MODIFY** | Support asymmetric sizes, hover elevation, and tag highlights. |
| `components/about-section.tsx` | **MODIFY** | Implement sticky pinned text + offset image collage. |
| `components/location-section.tsx` | **MODIFY** | Implement sticky pinned details + interactive map card collage. |
| `components/reviews-section.tsx` | **MODIFY** | Convert static cards to infinite auto-advancing review marquee. |
| `components/site-header.tsx` | **MODIFY** | Add dark mode toggle, scroll-progress bar, and available dates strip. |
| `components/mobile-nav.tsx` | **MODIFY** | Add mobile dark mode toggle and refine styling. |
| `components/book-button.tsx` | **MODIFY** | Add subtle magnetic cursor effect and press physics. |
| `components/reveal.tsx` | **MODIFY** | Upgrade with mask wipe options, parallax hooks, and reduced-motion fallback. |
| `components/theme-toggle.tsx` | **NEW** | Accessible sun/moon switch with smooth rotation animation. |
| `components/scroll-progress.tsx` | **NEW** | Lightweight scroll depth indicator bar for top of viewport. |
| `components/availability-teaser.tsx` | **NEW** | Ambient live dates strip linking to availability. |

---

## 7. Quality & Verification Gates

Before considering any phase complete during development:
1. **Compilation Check:** Run `npm run build` or inspect Next.js dev server output to ensure zero TypeScript errors or React 19 hydration mismatches.
2. **Reduced Motion Test:** Emulate `prefers-reduced-motion: reduce` in browser DevTools to verify that animations smoothly freeze or default to clean fades.
3. **Dark Mode Inspection:** Switch between light and dark modes across every section to ensure high contrast, no inverted text colors, and pristine readability.
4. **Mobile Usability:** Verify touch drag on horizontal scrollers, mobile drawer opening/closing, and ensure sticky bottom CTA does not collide with floating elements.
