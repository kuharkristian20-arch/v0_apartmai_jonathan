import { Star, MapPin, Save as Waves, Sailboat, ArrowUpRight } from 'lucide-react'
import { navItems } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#4169E1] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="text-2xl font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm font-light text-white/80">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
              <Star className="size-4 fill-current text-white" aria-hidden="true" />
              <span className="text-sm font-medium">
                {siteConfig.rating} / 10 — {siteConfig.ratingLabel}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:justify-self-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Distances */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Nearby
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Waves className="size-4 shrink-0 text-white/60" aria-hidden="true" />
                Bošana Beach — 200 m
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Sailboat className="size-4 shrink-0 text-white/60" aria-hidden="true" />
                Marina Kornati — 900 m
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="size-4 shrink-0 text-white/60" aria-hidden="true" />
                Old Town — 1.2 km
              </li>
            </ul>
          </div>

          {/* Booking CTA */}
          <div className="lg:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Book Your Stay
            </p>
            <p className="mt-4 text-sm font-light text-white/80">
              Reserve directly through Booking.com for the best available rates
              and instant confirmation.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#4169E1] transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Book on Booking.com
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-light text-white/70">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs font-light text-white/50">
              Property information verified from Booking.com. Photos are representative of the property style.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
