import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ApartmentsSection } from '@/components/apartments-section'
import { GallerySection } from '@/components/gallery-section'
import { AmenitiesSection } from '@/components/amenities-section'
import { LocationSection } from '@/components/location-section'
import { WhyStaySection } from '@/components/why-stay-section'
import { GuestInfoSection } from '@/components/guest-info-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'
import { WaveTransition } from '@/components/wave-transition'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero → white About */}
        <Hero />
        <AboutSection />

        {/* white About → sea-blue Apartments */}
        <WaveTransition from="white" />
        <ApartmentsSection />

        {/* sea-blue Apartments → white Gallery */}
        <WaveTransition from="sea" />
        <GallerySection />

        {/* white Gallery → sea-blue Amenities */}
        <WaveTransition from="white" />
        <AmenitiesSection />

        {/* sea-blue Amenities → white Location */}
        <WaveTransition from="sea" />
        <LocationSection />

        {/* white Location → sea-blue WhyStay */}
        <WaveTransition from="white" />
        <WhyStaySection />

        {/* sea-blue WhyStay → white GuestInfo */}
        <WaveTransition from="sea" />
        <GuestInfoSection />

        {/* white GuestInfo → image CTA (no wave needed — image covers transition) */}
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  )
}
