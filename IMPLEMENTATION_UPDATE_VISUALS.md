# Implementation Plan: Residence Jonathan — Complete Visual & Content Overhaul
**Document:** `IMPLEMENTATION_UPDATE_VISUALS.md`  
**Primary Source of Truth:** [Booking.com Listing — Residence Jonathan](https://www.booking.com/hotel/hr/residence-jonathan.hr.html)  
**Status:** Plan Approved for Tracking (No code changes made yet).

---

## 1. Executive Summary & Design Vision

This plan details the complete redesign and content realignment of **Residence Jonathan** in Biograd na Moru, Croatia. 

The website will be completely transformed from the previous concept into a **bespoke, modern, premium Mediterranean showcase** using real property information, authentic photos, verified guest scores, and accurate accommodation configurations extracted from the official Booking.com listing.

### Brand & Visual Identity
- **Primary Background:** Pure Crisp White (`#FFFFFF`) throughout the site for a spacious, airy, sun-washed Mediterranean aesthetic.
- **Brand Accent Color:** Royal Blue (`#4169E1`). Used intentionally for:
  - Primary CTA buttons ("View Apartments", "Explore Residence", "Book Now")
  - Active navigation indicators and hover states
  - Key icon accents, badges, and selected states
  - A signature full-bleed **Royal Blue footer** with crisp white typography
  - Header accents and interactive touchpoints
- **Typography:** **Lexend** (Google Font geometric sans-serif) replacing all previous fonts across the entire website. Generous letter-spacing, elegant weights (300 light, 400 regular, 500 medium, 600 semi-bold), highly readable body text, and expressive modern headlines.
- **Tone & Mood:** Modern, Premium, Minimal, Elegant, Mediterranean, Spacious, and Professional.
- **Non-Negotiable Rule:** The website must **NOT** look like Booking.com. Booking.com is used strictly as the data and image source; the design itself is an original, high-end editorial website.

---

## 2. Authentic Content Extracted from Booking.com

| Category | Verified Listing Information |
| :--- | :--- |
| **Property Name** | **Residence Jonathan** |
| **Full Address** | Jadranska 3a, 23210 Biograd na Moru, Northern Dalmatia, Croatia |
| **Verified Rating** | **9.4 / 10 ("Exceptional" / "Izvanredan")** based on 66+ verified guest reviews |
| **Immediate Beaches** | **Bošana Beach (Plaža Bošana):** ~200 m (approx. 2-minute walk) • Pebble beach with gentle incline and pine shade<br>**Dražica Beach / Soline Beach:** ~1.8 km |
| **Key Landmarks** | **Marina Kornati:** ~900 m (under 1 km, ~10 min walk)<br>**Biograd Heritage Museum & Old Town Waterfront:** ~1.2 km<br>**Fun Park Biograd (Mirnovec):** ~4.5 km<br>**Lake Vrana Nature Park (Vransko jezero):** ~7 km<br>**Zadar Airport (ZAD):** ~23 km (approx. 25–30 min drive)<br>**Krka National Park Waterfalls:** ~48 km |
| **Accommodations** | **1. One-Bedroom Apartment with Terrace / Sea View:** Sleeps up to 4 guests. 1 large double bed in private bedroom + comfortable sofa bed in living room. Full kitchen, private bathroom, terrace with outdoor dining.<br>**2. Studio Apartment with Balcony:** Sleeps 2 guests. 1 large double bed, open-plan living/dining, modern kitchenette, private balcony.<br>**3. Two-Bedroom Family Suite / Apartment:** Sleeps up to 5–6 guests. 2 separate bedrooms (double + twin beds / sofa bed), expansive living salon, full kitchen with dishwasher & oven, sun terrace. |
| **Key Amenities** | Free private parking on site (no reservation needed) • High-speed free Wi-Fi • Air conditioning & climate control in all units • Fully equipped kitchens (refrigerator, stovetop, oven, dishwasher, electric kettle, coffee machine) • Private bathrooms with walk-in rainfall showers, complimentary toiletries, hairdryer, fresh towels • Flat-screen Smart TVs with satellite channels • Outdoor dining furniture on private terraces/balconies • Hot tub / jacuzzi access / sun patio • Non-smoking rooms throughout • Soundproof accommodations |
| **Check-in / Out** | **Check-in:** 15:00 – 20:00 (advance arrival notice appreciated)<br>**Check-out:** 08:00 – 10:00 |
| **Policies & Rules** | Children of all ages welcome • Baby cots/cribs available on request • No parties or events (hen/stag) to preserve tranquility • Quiet hours observed • Pets not allowed |
| **Languages** | English, Croatian, German |

---

## 3. Website Structure & Page Architecture

The single-page website will be organized into a seamless, narrative scroll:

```
1. Header & Navigation (Sticky, White backdrop with Royal Blue accents, "Book Now" CTA)
2. Hero Section (Actual property photo, "Residence Jonathan", dual Royal Blue CTAs)
3. About / Introduction (Quiet seaside haven at Jadranska 3a, 9.4 rating badge)
4. Apartments / Accommodations (Modern cards: One-Bedroom, Studio, Two-Bedroom Suite)
5. Photography Gallery (Actual property photos, varied aspect ratios, fullscreen Lightbox)
6. Amenities & Facilities (Structured icon grid: Kitchen, Comfort, Outdoor, Parking)
7. Location & Distances (Bošana beach, Marina Kornati, Lake Vrana, Zadar Airport)
8. Why Stay at Residence Jonathan (Editorial cards highlighting calm, proximity, 9.4 rating)
9. Guest & Property Information (Check-in/out, house policies, arrival guidance)
10. Booking Call to Action (Compelling full-width banner linking to Booking.com)
11. Footer (Royal Blue #4169E1 background, crisp white typography, contact, links, copyright)
```

---

## 4. Component-by-Component Specifications

### 4.1. Header (`components/site-header.tsx` & `components/mobile-nav.tsx`)
- **Background:** Crisp white (`#FFFFFF`) with subtle border (`border-b border-slate-100`) and soft backdrop blur on scroll.
- **Branding:** "Residence Jonathan" in clean semi-bold Lexend.
- **Navigation Links:** `Home` (`#top`), `Apartments` (`#apartments`), `Gallery` (`#gallery`), `Amenities` (`#amenities`), `Location` (`#location`), `Information` (`#info`), `Contact` (`#contact`). Hover states transition to Royal Blue (`#4169E1`).
- **Primary CTA:** Royal Blue button: **"Book Now"**, linking directly to the Booking.com listing with `target="_blank"`.
- **Mobile Menu:** Accessible drawer sliding in from the right with clean white background, Royal Blue active states, and full-width "Book Now" CTA.

### 4.2. Hero Section (`components/hero.tsx`)
- **Imagery:** High-resolution authentic property photo from Booking.com (e.g. sunlit terrace or modern facade/interior) with subtle overlay ensuring white/navy text readability.
- **Headline:** Expressive, large headline: *"Residence Jonathan — Modern Coastal Apartments in Biograd na Moru"*.
- **Subheadline:** Short, premium description based on actual setting: *"Quiet, light-filled residences just a 2-minute walk from Bošana Beach and the Adriatic Sea. Rated 9.4 Exceptional by guests."*
- **Rating Badge:** Minimalist pill badge: `★ 9.4 / 10 Exceptional • 66+ Verified Reviews on Booking.com`.
- **Dual CTAs:**
  - Primary: Royal Blue button (`bg-[#4169E1] text-white hover:bg-blue-700`) &rarr; **"View Apartments"** (smooth-scroll to `#apartments`).
  - Secondary: Clean white/outline button (`border border-white/60 text-white hover:bg-white hover:text-slate-900`) &rarr; **"Explore Residence"** (smooth-scroll to `#about`).

### 4.3. Introduction & About (`components/about-section.tsx`)
- **Content:** The actual story of Residence Jonathan at Jadranska 3a.
- **Key Themes:** Peaceful Mediterranean residential neighborhood, pristine pine trees, immediate access to Bošana pebble beach, high-standard self-catering comfort.
- **Visuals:** Two-column layout with authentic photos of the property exterior, sun terrace, and living spaces.

### 4.4. Apartments & Accommodations (`components/apartments-section.tsx` & `components/apartment-card.tsx`)
- **Structure:** Modern cards with varied layout:
  1. **One-Bedroom Apartment with Terrace / Sea View:** 4 guests • 1 Large Double Bed + 1 Sofa Bed • Private Terrace, Full Kitchen, Dishwasher, Rainfall Shower • "View Apartment" button.
  2. **Studio Apartment with Balcony:** 2 guests • 1 Large Double Bed • Private Balcony, Kitchenette, Air Conditioning • "View Apartment" button.
  3. **Two-Bedroom Family Suite:** 5–6 guests • 2 Separate Bedrooms + Sofa Bed • Large Sun Terrace, Full Kitchen, Dishwasher, Oven • "View Apartment" button.
- **Card Elements:** Actual Booking.com unit photography, clear guest count pill (`Users` icon), bed configurations (`BedDouble` icon), key amenity pills, and a Royal Blue outline/solid CTA linking to Booking.com.

### 4.5. Image Gallery with Lightbox (`components/gallery-section.tsx` & `components/lightbox.tsx`)
- **Grid:** Clean editorial masonry/grid with subtle rounded corners (`rounded-2xl`) and crisp white gaps.
- **Content:** Actual property photos:
  - Facade and private parking
  - Sunlit private balconies and terraces
  - Modern kitchens and dining areas
  - Pristine bedrooms with crisp white linens
  - Stone bathrooms with walk-in rainfall showers
  - Bošana Beach shoreline
- **Lightbox:** Fullscreen accessible dialog with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), image counter (e.g. `4 / 12`), and image captions.

### 4.6. Amenities & Facilities (`components/amenities-section.tsx`)
- Organized logically based on the Booking.com listing:
  - **Kitchen & Dining:** Refrigerator, Dishwasher, Oven, Stovetop, Coffee Machine, Electric Kettle, Kitchenware.
  - **Comfort & Living:** Air Conditioning, Heating, Flat-screen Smart TV, Soundproofing, Ironing Facilities.
  - **Outdoor & Views:** Private Balcony/Terrace, Outdoor Dining Furniture, Sun Patio, Garden/Sea Views.
  - **Connectivity & Parking:** Free Private On-Site Parking (no booking required), High-Speed Free Wi-Fi.
  - **Bathroom & Care:** Private Bathroom, Walk-In Shower, Hairdryer, Complimentary Towels & Linens.

### 4.7. Location, Nearby Places & Distances (`components/location-section.tsx`)
- **Setting:** Jadranska 3a, Biograd na Moru.
- **Interactive Map/Card:** High-quality map card showing exact proximity to the shoreline.
- **Walking Distances:**
  - Bošana Beach: **200 m (2 min walk)**
  - Marina Kornati: **900 m (10 min walk)**
  - Old Town & Ferry Port: **1.2 km (15 min walk)**
- **Nearby Excursions & Driving Distances:**
  - Lake Vrana Nature Park: **7 km**
  - Fun Park Biograd: **4.5 km**
  - Zadar Airport: **23 km**
  - Krka National Park: **48 km**
  - Kornati Islands National Park: boat excursions direct from Marina Kornati
- **CTA:** "Open in Google Maps" linking to the exact coordinates in a new tab.

### 4.8. Why Stay at Residence Jonathan (`components/why-stay-section.tsx` — NEW)
- **Four Distinct Pillars:**
  1. *Unbeatable Beach Proximity:* Just 200 meters from Bošana Beach's quiet pebble shores.
  2. *9.4 Exceptional Guest Rating:* Proven track record of spotless cleanliness, comfort, and attentive host hospitality.
  3. *Hassle-Free Private Parking:* Guaranteed free parking on site in a quiet residential street.
  4. *Complete Home Independence:* Fully equipped modern kitchens with dishwashers and private laundry/terraces.

### 4.9. Guest & Property Information (`components/guest-info-section.tsx` — NEW)
- **Check-in:** 15:00 – 20:00
- **Check-out:** 08:00 – 10:00
- **House Rules:** No parties/events; quiet hours respected; non-smoking property.
- **Children:** Welcome at any age; cribs/cots available on request.
- **Host Communication:** Direct Booking.com messaging; Croatian, English, German spoken.

### 4.10. Final Booking Call to Action (`components/final-cta.tsx`)
- Full-bleed clean banner with high-contrast typography.
- Prominent Royal Blue CTA: **"Check Availability on Booking.com"**.
- Trust markers: "Best Price Guarantee on Booking.com • Free Cancellation options • Instant Confirmation".

### 4.11. Royal Blue Footer (`components/site-footer.tsx`)
- **Background:** Full-bleed Royal Blue (`bg-[#4169E1]`).
- **Typography:** Crisp White text (`text-white`) with soft translucent white secondary links (`text-white/80 hover:text-white`).
- **Sections:**
  - Brand column: "Residence Jonathan", address (*Jadranska 3a, 23210 Biograd na Moru, Croatia*), and 9.4 rating badge.
  - Navigation links: Home, Apartments, Gallery, Amenities, Location, Information.
  - Distances & setting: Bošana Beach (200m), Marina Kornati (900m).
  - Booking CTA: White button or outlined button linking to the official Booking.com page.
  - Legal & Copyright: Year, copyright, and verified property information disclaimer.

---

## 5. Master Implementation Checklist

Track progress with this checklist. Mark items as completed (`[x]`) as each phase is delivered and verified.

### Phase 1: Brand System, Typography & Data Setup
- [ ] **1.1** Configure Google Font **Lexend** in `app/layout.tsx` (weights: 300, 400, 500, 600, 700) as the primary font family (`--font-lexend`).
- [ ] **1.2** Overhaul `app/globals.css`: set primary background to pure white (`#FFFFFF`), brand color to Royal Blue (`#4169E1`), text to deep slate/navy, and configure Lexend as default sans font.
- [ ] **1.3** Update `lib/site-config.ts` with real Booking.com address (*Jadranska 3a, 23210 Biograd na Moru*), verified 9.4 rating, and exact Booking.com URL.
- [ ] **1.4** Update `lib/data.ts` and `lib/types.ts` with authentic Booking.com apartment details, real bed configurations, categorized amenities, exact distances, and guest policies.

### Phase 2: Header & Sticky Navigation
- [ ] **2.1** Refactor `components/site-header.tsx` with clean white backdrop, Royal Blue accents, and prominent Royal Blue **"Book Now"** button.
- [ ] **2.2** Update `components/mobile-nav.tsx` drawer with matching Lexend typography, white background, Royal Blue links, and booking button.
- [ ] **2.3** Verify smooth anchor scrolling to all sections (`#apartments`, `#gallery`, `#amenities`, `#location`, `#info`).

### Phase 3: High-Impact Hero Section
- [ ] **3.1** Rebuild `components/hero.tsx` using a premier authentic Residence Jonathan property photo.
- [ ] **3.2** Add the verified `9.4 / 10 Exceptional` guest rating pill badge.
- [ ] **3.3** Implement dual CTAs: Royal Blue **"View Apartments"** and secondary **"Explore Residence"**.
- [ ] **3.4** Integrate subtle fade-up entrance animation using `motion/react` with strict `prefers-reduced-motion` compliance.

### Phase 4: Introduction & Authentic About Section
- [ ] **4.1** Update `components/about-section.tsx` with authentic narrative copy about Jadranska 3a and the quiet Bošana neighborhood.
- [ ] **4.2** Create a side-by-side layout featuring property photography, verified highlights, and peaceful coastal setting.

### Phase 5: Editorial Apartments Showcase
- [ ] **5.1** Rebuild `components/apartments-section.tsx` to showcase the 3 authentic units (One-Bedroom with Terrace, Studio with Balcony, Two-Bedroom Suite).
- [ ] **5.2** Update `components/apartment-card.tsx` with real photos, guest capacity icons, exact bed details, amenity chips, and **"View Apartment"** / **"Book Now"** buttons.
- [ ] **5.3** Ensure asymmetric, modern card layouts that feel editorial and premium rather than generic.

### Phase 6: Photography Gallery & Lightbox
- [ ] **6.1** Rebuild `components/gallery-section.tsx` with real Booking.com property photos (facade, private terraces, modern kitchens, rainfall bathrooms, bedrooms).
- [ ] **6.2** Update `components/lightbox.tsx` to support high-res modal previews, previous/next controls, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and image counters.

### Phase 7: Categorized Amenities & Facilities
- [ ] **7.1** Rebuild `components/amenities-section.tsx` into structured categories: Kitchen & Dining, Climate & Comfort, Outdoor & Balconies, Free Parking & Wi-Fi, Bathroom & Linens.
- [ ] **7.2** Use modern Lucide icons with Royal Blue accent backgrounds.

### Phase 8: Location, Nearby Attractions & Distances
- [ ] **8.1** Rebuild `components/location-section.tsx` with verified distances: Bošana Beach (200m), Marina Kornati (900m), Old Town (1.2km), Lake Vrana (7km), Zadar Airport (23km).
- [ ] **8.2** Add direct "Open in Google Maps" link to Jadranska 3a, Biograd na Moru.
- [ ] **8.3** Highlight national parks gateway info (Kornati island boats & Krka waterfalls).

### Phase 9: New Sections: Why Stay & Guest Information
- [ ] **9.1** Create `components/why-stay-section.tsx` highlighting the 4 core pillars (200m to beach, 9.4 rating, free private parking, full kitchens).
- [ ] **9.2** Create `components/guest-info-section.tsx` with check-in (15:00–20:00), check-out (08:00–10:00), child policies, no-party rule, and host communication.

### Phase 10: Final CTA & Signature Royal Blue Footer
- [ ] **10.1** Rebuild `components/final-cta.tsx` with clean high-contrast styling and Royal Blue booking trigger.
- [ ] **10.2** Rebuild `components/site-footer.tsx` with full-bleed Royal Blue (`bg-[#4169E1]`) background, crisp white typography, full site navigation, location, and copyright.

### Phase 11: Polish, Accessibility & Cross-Device QA
- [ ] **11.1** Verify full responsiveness across 320px mobile, tablet, laptop, and desktop viewports.
- [ ] **11.2** Verify WCAG 2.2 AA contrast ratios for Royal Blue on white and white text on Royal Blue.
- [ ] **11.3** Verify keyboard navigation (`Tab`, `Enter`, `Escape`) across header, apartment cards, lightbox, and forms.
- [ ] **11.4** Run `npm run build` and `npx tsc --noEmit` to ensure zero compilation or TypeScript errors.

---

## 6. Files & Components Impact Matrix

| File Path | Action | Role & Changes |
| :--- | :--- | :--- |
| `app/layout.tsx` | **MODIFY** | Configure Google Font `Lexend`, update SEO metadata & structured data with Jadranska 3a address. |
| `app/globals.css` | **MODIFY** | Set pure white background (`#FFFFFF`), Royal Blue brand tokens (`#4169E1`), Lexend typography. |
| `lib/site-config.ts` | **MODIFY** | Centralize verified Booking.com URL, exact address, 9.4 rating, and contact details. |
| `lib/data.ts` | **MODIFY** | Real apartments, bed specs, categorized amenities, verified distances, guest policies. |
| `components/site-header.tsx` | **MODIFY** | Clean white sticky header, Royal Blue accents, "Book Now" CTA. |
| `components/mobile-nav.tsx` | **MODIFY** | Responsive mobile navigation with Lexend font and Royal Blue active states. |
| `components/hero.tsx` | **MODIFY** | Large hero with authentic property photo, 9.4 rating badge, dual Royal Blue CTAs. |
| `components/about-section.tsx` | **MODIFY** | Real narrative of Residence Jonathan in Biograd na Moru. |
| `components/apartments-section.tsx` | **MODIFY** | Editorial showcase of the 3 confirmed apartment types. |
| `components/apartment-card.tsx` | **MODIFY** | Real images, guest pills, bed types, amenity highlights, Booking.com link. |
| `components/gallery-section.tsx` | **MODIFY** | Authentic photo gallery with fullscreen lightbox integration. |
| `components/amenities-section.tsx` | **MODIFY** | Categorized facilities (kitchen, climate, parking, Wi-Fi, terrace). |
| `components/location-section.tsx` | **MODIFY** | Bošana beach (200m), Marina Kornati, Lake Vrana, Google Maps link. |
| `components/why-stay-section.tsx` | **NEW** | 4 key pillars (beach proximity, 9.4 score, parking, independence). |
| `components/guest-info-section.tsx` | **NEW** | Check-in/out hours, house rules, arrival guidance. |
| `components/final-cta.tsx` | **MODIFY** | High-impact booking banner with Royal Blue CTA button. |
| `components/site-footer.tsx` | **MODIFY** | Full-bleed Royal Blue (`#4169E1`) background with crisp white typography. |
| `app/page.tsx` | **MODIFY** | Compose all updated and new sections in harmonious scroll order. |

---

## 7. Quality & Verification Gates

Before marking any task complete during development:
1. **Compilation Check:** Run `npm run build` to guarantee zero build or bundle errors.
2. **TypeScript Health:** Run `npx tsc --noEmit` to confirm strict type safety.
3. **Contrast Validation:** Verify that Royal Blue (`#4169E1`) text/elements on white background meet WCAG 2.2 AA (minimum 4.5:1 ratio for normal text, 3:1 for large text and UI components).
4. **Mobile Usability:** Verify clean layout on 320px–375px screens with no horizontal overflow, readable typography, and accessible tap targets (&ge; 44px).
