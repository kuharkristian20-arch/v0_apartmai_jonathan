import { apartments } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ApartmentCard } from '@/components/apartment-card'

export function ApartmentsSection() {
  return (
    <section id="apartments" className="scroll-mt-header bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Apartments"
            title="Choose your stay"
            description="Three distinct residences, each thoughtfully designed with modern comfort, private outdoor space, and the warm simplicity of Mediterranean living."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {apartments.map((apartment, index) => (
            <Reveal
              key={apartment.id}
              delay={index * 100}
              className={index === 0 ? 'h-full lg:col-span-2' : 'h-full'}
            >
              <ApartmentCard
                apartment={apartment}
                priority={index === 0}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
