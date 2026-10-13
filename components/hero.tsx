'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const heroImages = [
  { src: '/images/508355078.jpg', alt: 'Residence Jonathan exterior with sea view in Biograd na Moru, Croatia' },
  { src: '/images/507456428.jpg', alt: 'Coastal view of the Adriatic Sea near Residence Jonathan' },
  { src: '/images/706579500.jpg', alt: 'Modern apartment interior at Residence Jonathan' },
  { src: '/images/706586147.jpg', alt: 'Terrace with sea views at Residence Jonathan' },
  { src: '/images/507457148.jpg', alt: 'Scenic coastline of Biograd na Moru, Croatia' },
]

const SLIDE_DURATION = 5000

export function Hero() {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goNext, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [goNext])

  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      {heroImages.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1a2234]/60 via-[#1a2234]/25 to-[#1a2234]/65"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl text-white">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/85">
            <MapPin className="size-4" aria-hidden="true" />
            {siteConfig.location}
          </p>

          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Residence Jonathan
          </h1>

          <p className="mt-4 text-xl font-light text-white/90 sm:text-2xl">
            Modern Coastal Apartments in Biograd na Moru
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg font-light leading-relaxed text-white/85">
            Quiet, light-filled residences just a 2-minute walk from Bošana Beach
            and the Adriatic Sea. Rated 9.4 Exceptional by verified guests.
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
            <Star className="size-5 fill-current text-white" aria-hidden="true" />
            <span className="text-sm font-medium text-white">
              {siteConfig.rating} / 10 — {siteConfig.ratingLabel}
            </span>
            <span className="text-sm font-light text-white/70">
              · {siteConfig.reviewCount} Verified Reviews on Booking.com
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#apartments"
              className="inline-flex items-center justify-center rounded-full bg-[#01034A] px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#00022B] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              View Apartments
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1a2234] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Explore Residence
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                  i === current
                    ? 'w-8 bg-white'
                    : 'w-4 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
