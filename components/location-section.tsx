import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { distances } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-header bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title="On the Croatian coast"
              description="Biograd na Moru is a relaxed Adriatic town with beaches, a marina, and an easygoing old town. All distances below are placeholders — confirm them before launch."
            />

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {distances.map((distance) => (
                <div
                  key={distance.id}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <dt className="flex items-center gap-2 text-foreground">
                    <MapPin className="size-4 text-primary" aria-hidden="true" />
                    {distance.label}
                  </dt>
                  <dd className="text-right text-sm text-muted-foreground">
                    {distance.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open in Google Maps
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-4/3 w-full overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src="/images/location-map.png"
                alt="Illustrated map of Biograd na Moru on the Croatian coast"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
