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

  return (
    <section id="gallery" className="scroll-mt-header bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A look around"
            description="Placeholder photography for layout. Replace with the property's own images before launch."
          />
        </Reveal>

        <Reveal>
          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4">
            {galleryImages.map((image, i) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Open image: ${image.alt}`}
                className={cn(
                  'group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  (i === 0 || i === 3) && 'row-span-2',
                )}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10"
                  aria-hidden="true"
                />
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
