import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { BookButton } from '@/components/book-button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Sunlit Adriatic seafront in Biograd na Moru with a stone waterfront and turquoise sea"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/25 to-foreground/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl text-background">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-background/85">
            <MapPin className="size-4" aria-hidden="true" />
            {siteConfig.location}
          </p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/90">
            Calm, sunlit apartments a short stroll from the Adriatic. A refined,
            unhurried base for your stay on the Croatian coast.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookButton location="hero" size="lg" />
            <a
              href="#apartments"
              className="inline-flex items-center justify-center rounded-full border border-background/40 px-7 py-3.5 text-base font-medium text-background transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Explore apartments
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
