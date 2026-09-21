import { amenityCategories } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function AmenitiesSection() {
  return (
    <section id="amenities" className="scroll-mt-header bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Amenities & Facilities"
            title="Everything you need for a comfortable stay"
            description="Each apartment is fully equipped with modern conveniences — from complete kitchens to private terraces with sea views."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Reveal
                key={category.id}
                as="div"
                delay={index * 80}
                className="flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#E8E9F0] text-[#01034A]">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a2234]">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-5 grid gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-light text-[#475569]"
                    >
                      <span className="size-1.5 rounded-full bg-[#01034A]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
