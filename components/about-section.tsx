import Image from 'next/image'
import { Star, MapPin, Save as Waves } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-header bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/39590913/pexels-photo-39590913.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                  alt="Beautiful Mediterranean terrace with lush plants and flowers in Croatia"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl mt-8">
                <Image
                  src="https://images.pexels.com/photos/16514411/pexels-photo-16514411.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                  alt="Relaxing seaside view with blue Adriatic waters and boat"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Welcome"
              title="A quiet seaside haven at Jadranska 3a"
              description="Tucked into a peaceful residential neighborhood in Biograd na Moru, Residence Jonathan offers modern, self-catering apartments surrounded by pristine pine trees and the gentle sound of the Adriatic."
            />

            <p className="mt-6 max-w-xl text-pretty font-light leading-relaxed text-[#475569]">
              Each residence is thoughtfully designed with contemporary comfort
              in mind — fully equipped kitchens, private terraces with sea
              views, walk-in rainfall showers, and soundproof interiors. Whether
              you&apos;re a couple seeking a romantic coastal retreat or a family
              exploring Dalmatia, you&apos;ll find a calm, spacious base just
              moments from the water.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                <Star className="size-6 fill-[#4169E1] text-[#4169E1]" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-semibold text-[#1a2234]">{siteConfig.rating}</p>
                  <p className="text-xs text-[#475569]">{siteConfig.ratingLabel} rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                <Waves className="size-6 text-[#4169E1]" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-semibold text-[#1a2234]">200 m</p>
                  <p className="text-xs text-[#475569]">to Bošana Beach</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                <MapPin className="size-6 text-[#4169E1]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1a2234]">Jadranska 3a</p>
                  <p className="text-xs text-[#475569]">Biograd na Moru</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
