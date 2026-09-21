import Image from 'next/image'
import { ShieldCheck, CircleCheck as CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BookButton } from '@/components/book-button'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src="https://images.pexels.com/photos/16514411/pexels-photo-16514411.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="Relaxing Adriatic seaside view with turquoise waters"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1a2234]/65" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Plan your stay by the sea
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg font-light leading-relaxed text-white/85">
            Check dates and availability on Booking.com. We look forward to
            welcoming you to Residence Jonathan in Biograd na Moru.
          </p>

          <div className="mt-9 flex justify-center">
            <BookButton location="final" variant="white" size="lg" label="final" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-light text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-white/60" aria-hidden="true" />
              Best Price Guarantee on Booking.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-white/60" aria-hidden="true" />
              Free Cancellation Options
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-white/60" aria-hidden="true" />
              Instant Confirmation
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
