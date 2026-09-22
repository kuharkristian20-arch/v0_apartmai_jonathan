'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Users, BedDouble, DoorClosed, Bath, Maximize, Check, Star } from 'lucide-react'
import type { Apartment } from '@/lib/types'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ApartmentGallery } from '@/components/apartment-gallery'
import { ApartmentCard } from '@/components/apartment-card'
import { apartments } from '@/lib/data'

type ApartmentDetailProps = {
  apartment: Apartment
}

export function ApartmentDetail({ apartment }: ApartmentDetailProps) {
  const otherApartments = apartments.filter((a) => a.id !== apartment.id)

  const quickInfo = [
    { icon: Users, label: 'Guests', value: apartment.sleeps },
    { icon: BedDouble, label: 'Beds', value: apartment.beds },
    { icon: DoorClosed, label: 'Bedrooms', value: apartment.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: apartment.bathrooms },
    { icon: Maximize, label: 'Size', value: apartment.size },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] w-full items-end overflow-hidden">
        <Image
          src={apartment.image}
          alt={apartment.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1a2234]/50 via-[#1a2234]/25 to-[#1a2234]/75"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16">
          <Link
            href="/#apartments"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Apartments
          </Link>

          <div className="mt-6 max-w-3xl text-white">
            {apartment.highlight && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur-md">
                <Star className="size-4 fill-current" aria-hidden="true" />
                {apartment.highlight}
              </span>
            )}
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              {apartment.name}
            </h1>
            <p className="mt-4 text-lg font-light text-white/90 sm:text-xl">
              {apartment.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6">
            {quickInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <info.icon className="size-5 text-[#01034A]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-[#1a2234]">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Photo gallery"
              description="Take a closer look at the spaces, details, and views that make this apartment special."
              align="center"
            />
          </Reveal>

          <Reveal>
            <div className="mt-14">
              <ApartmentGallery images={apartment.gallery} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apartment information */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <SectionHeading
                eyebrow="About this apartment"
                title="Apartment details"
              />
              <p className="mt-6 max-w-2xl text-pretty font-light leading-relaxed text-[#475569]">
                {apartment.description}
              </p>

              <h3 className="mt-10 text-lg font-semibold text-[#1a2234]">
                What this apartment offers
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {apartment.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-4 text-sm text-[#475569]"
                  >
                    <Check className="size-4 shrink-0 text-[#01034A]" aria-hidden="true" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Booking sidebar */}
            <Reveal delay={80}>
              <div className="sticky top-24 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Star className="size-5 fill-[#01034A] text-[#01034A]" aria-hidden="true" />
                  <span className="text-sm font-medium text-[#1a2234]">
                    {siteConfig.rating} / 10 — {siteConfig.ratingLabel}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#475569]">
                  {siteConfig.reviewCount} verified reviews on Booking.com
                </p>

                <div className="my-6 border-t border-slate-100" />

                <p className="text-2xl font-semibold text-[#1a2234]">{apartment.name}</p>
                <p className="mt-2 text-sm font-light text-[#475569]">
                  {apartment.sleeps} &middot; {apartment.bedrooms} &middot; {apartment.size}
                </p>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#01034A] px-8 py-4 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#00022B] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A] focus-visible:ring-offset-2"
                >
                  Check Availability
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-3 text-center text-xs text-[#475569]">
                  Best rates on Booking.com with instant confirmation
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#01034A] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
              Ready to book your stay?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty font-light text-white/80">
              Reserve {apartment.name} directly through Booking.com for the best available rates and instant confirmation.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-[#01034A] shadow-sm transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Book on Booking.com
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Other apartments */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Continue exploring"
              title="Explore our other apartments"
              description="Each residence at Residence Jonathan offers its own character and charm. Discover the perfect space for your stay."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {otherApartments.map((apt, index) => (
              <Reveal
                key={apt.id}
                delay={index * 100}
                className="h-full"
              >
                <ApartmentCard apartment={apt} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
