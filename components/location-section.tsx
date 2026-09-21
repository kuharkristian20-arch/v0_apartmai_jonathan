import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { distances } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-header bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title="In the heart of the Adriatic coast"
              description="Biograd na Moru is a relaxed Dalmatian town surrounded by beaches, a lively marina, and easy access to national parks. Residence Jonathan sits in a quiet residential street just steps from the sea."
            />

            <div className="mt-8 space-y-3">
              {distances.map((distance) => {
                const Icon = distance.icon
                return (
                  <div
                    key={distance.id}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[#4169E1] shadow-sm">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                      )}
                      <span className="text-sm font-medium text-[#1a2234]">
                        {distance.label}
                      </span>
                    </div>
                    <span className="text-right text-sm font-light text-[#475569]">
                      {distance.value}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#4169E1] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#2d4fc7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] focus-visible:ring-offset-2"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-[#4169E1]/10 bg-[#eef3fc] p-5">
              <p className="text-sm font-light leading-relaxed text-[#475569]">
                <span className="font-medium text-[#4169E1]">Gateway to the national parks:</span>{' '}
                Kornati Islands boat excursions depart directly from Marina Kornati
                (900m away), and Krka National Park&apos;s waterfalls are a 45-minute
                scenic drive inland.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] focus-visible:ring-offset-2"
            >
              <Image
                src="https://images.pexels.com/photos/4799353/pexels-photo-4799353.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
                alt="Aerial view of the Croatian Adriatic coastline near Biograd na Moru"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2234]/80 to-transparent p-6">
                <p className="flex items-center gap-2 text-white">
                  <MapPin className="size-5" aria-hidden="true" />
                  <span className="text-sm font-medium">Jadranska 3a, Biograd na Moru</span>
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
