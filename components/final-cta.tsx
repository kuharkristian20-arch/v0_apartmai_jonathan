import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BookButton } from '@/components/book-button'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/gallery-2.png"
        alt="Turquoise Adriatic sea at golden hour"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 text-center text-background sm:px-6">
        <Reveal>
          <h2 className="text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Plan your stay by the sea
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/90">
            Check dates and availability on Booking.com. We look forward to
            welcoming you to Residence Jonathan.
          </p>
          <div className="mt-9 flex justify-center">
            <BookButton location="final" variant="light" size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
