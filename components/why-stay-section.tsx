import { pillars } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function WhyStaySection() {
  return (
    <section id="why-stay" className="scroll-mt-header bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Stay With Us"
            title="The Residence Jonathan difference"
            description="Four reasons guests consistently rate us 9.4 out of 10 — and return year after year."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal
                key={pillar.id}
                as="div"
                delay={index * 80}
                className="flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-[#01034A] text-white shadow-md">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-tight text-[#1a2234]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#475569]">
                  {pillar.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
