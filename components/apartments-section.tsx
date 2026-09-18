import { apartments } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ApartmentCard } from '@/components/apartment-card'

export function ApartmentsSection() {
  return (
    <section id="apartments" className="scroll-mt-header bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Apartments"
            title="Choose your space"
            description="A few distinct apartments, each with its own character. All details below are placeholders — replace with the confirmed layouts, sizes, and features before launch."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apartment, index) => (
            <Reveal key={apartment.id} delay={index * 100} className="h-full">
              <ApartmentCard apartment={apartment} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
