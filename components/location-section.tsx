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
                        <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[#01034A] shadow-sm">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#01034A] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#00022B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A] focus-visible:ring-offset-2"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-[#01034A]/10 bg-[#E8E9F0] p-5">
              <p className="text-sm font-light leading-relaxed text-[#475569]">
                <span className="font-medium text-[#01034A]">Gateway to the national parks:</span>{' '}
                Kornati Islands boat excursions depart directly from Marina Kornati
                (900m away), and Krka National Park&apos;s waterfalls are a 45-minute
                scenic drive inland.
              </p>
            </div>
          </Reveal>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1707.9942422631598!2d15.444375854498963!3d43.949176320753935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761df8635e5044b%3A0x2d2631e45abbfde1!2sJadranska%20ul.%203%2C%2023210%2C%20Biograd%20na%20Moru!5e0!3m2!1shr!2shr!4v1791902724074!5m2!1shr!2shr"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Residence Jonathan — Jadranska ul. 3, Biograd na Moru"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2234]/80 to-transparent p-6">
                <p className="flex items-center gap-2 text-white">
                  <MapPin className="size-5" aria-hidden="true" />
                  <span className="text-sm font-medium">Jadranska 3a, Biograd na Moru</span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
