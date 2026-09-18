import { amenities } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function AmenitiesSection() {
  return (
    <section id="amenities" className="scroll-mt-header bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Amenities"
            title="What's included"
            description="A placeholder list of common comforts. Confirm the actual amenities for each apartment before launch."
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <Reveal
                key={amenity.id}
                as="li"
                delay={index * 60}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-card-foreground">
                  {amenity.label}
                </span>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
