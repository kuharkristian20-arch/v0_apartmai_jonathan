'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { ApartmentImage } from '@/lib/types'
import { Lightbox } from '@/components/lightbox'
import type { GalleryImage } from '@/lib/types'

type ApartmentGalleryProps = {
  images: ApartmentImage[]
}

export function ApartmentGallery({ images }: ApartmentGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const galleryImages: GalleryImage[] = images.map((img, i) => ({
    id: `apt-img-${i}`,
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }))

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${image.alt}`}
            className={cn(
              'group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
              i === 0
                ? 'aspect-16/10 sm:col-span-2 lg:col-span-2 lg:row-span-2'
                : 'aspect-4/3',
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 640px) 25vw, 50vw'}
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

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
