'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { galleryImages } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Lightbox } from '@/components/lightbox'

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const spanClasses: Record<string, string> = {
    large: 'sm:col-span-2 row-span-2',
    wide: 'sm:col-span-2',
    tall: 'row-span-2',
    normal: '',
  }

  return (
    <section id="gallery" className="scroll-mt-header bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A look around Residence Jonathan"
            description="From sunlit terraces to modern interiors and the pebble shores of Bošana Beach — explore the spaces and surroundings that make a stay here special."
            align="center"
          />
        </Reveal>

        <Reveal>
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
            {galleryImages.map((image, i) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Open image: ${image.alt}`}
                className={cn(
                  'group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                  spanClasses[image.span || 'normal'],
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  className="absolute inset-0 bg-[#1a2234]/0 transition-colors duration-300 group-hover:bg-[#1a2234]/15"
                  aria-hidden="true"
                />
                {image.caption && (
                  <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2234]/70 to-transparent p-4 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {image.caption}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
