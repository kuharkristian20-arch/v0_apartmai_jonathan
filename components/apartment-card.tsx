import Image from 'next/image'
import { Check, Users } from 'lucide-react'
import type { Apartment } from '@/lib/types'
import { BookButton } from '@/components/book-button'

type ApartmentCardProps = {
  apartment: Apartment
  priority?: boolean
}

export function ApartmentCard({ apartment, priority }: ApartmentCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-3/2 w-full overflow-hidden">
        <Image
          src={apartment.image || '/placeholder.svg'}
          alt={apartment.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <Users className="size-4" aria-hidden="true" />
          {apartment.sleeps}
        </div>
        <h3 className="mt-2 font-serif text-2xl font-medium text-card-foreground">
          {apartment.name}
        </h3>
        {apartment.size && (
          <p className="mt-1 text-sm text-muted-foreground">{apartment.size}</p>
        )}
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {apartment.summary}
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-2">
          {apartment.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground/80"
            >
              <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-2">
          <BookButton
            location="apartments"
            variant="outline"
            className="w-full"
            showIcon={false}
          />
        </div>
      </div>
    </article>
  )
}
