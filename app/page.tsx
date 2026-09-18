import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ApartmentsSection } from '@/components/apartments-section'
import { GallerySection } from '@/components/gallery-section'
import { AmenitiesSection } from '@/components/amenities-section'
import { LocationSection } from '@/components/location-section'
import { ReviewsSection } from '@/components/reviews-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ApartmentsSection />
        <GallerySection />
        <AmenitiesSection />
        <LocationSection />
        <ReviewsSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  )
}
