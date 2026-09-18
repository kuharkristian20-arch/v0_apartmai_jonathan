'use client'

import { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/types'

type LightboxProps = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, goPrev, goNext])

  if (index === null) return null
  const current = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${current.alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-background/10 p-2.5 text-background transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={goPrev}
        className="absolute left-3 z-10 rounded-full bg-background/10 p-2.5 text-background transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:left-6"
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={goNext}
        className="absolute right-3 z-10 rounded-full bg-background/10 p-2.5 text-background transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:right-6"
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>

      <figure className="relative flex max-h-[90svh] w-full max-w-5xl flex-col items-center px-4">
        <div className="relative h-[70svh] w-full">
          <Image
            src={current.src || '/placeholder.svg'}
            alt={current.alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-4 text-center text-sm text-background/80">
          {current.caption ? `${current.caption} — ` : ''}
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  )
}
