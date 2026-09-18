import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-header bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome"
              title="An unhurried home by the Adriatic"
              description="Residence Jonathan is a small collection of thoughtfully kept apartments in Biograd na Moru. Light-filled rooms, natural materials, and a quiet setting make it an easy place to slow down between days by the sea."
            />
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              This introduction is placeholder copy. Replace it with the
              property&apos;s own words — its story, what makes a stay here
              special, and who it&apos;s best suited for — before launch.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery-1.png"
                alt="Mediterranean terrace with a bistro table and potted olive and lavender plants"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
