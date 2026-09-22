import Link from 'next/link'
import Image from 'next/image'
import { Users, BedDouble, ArrowUpRight, Check } from 'lucide-react'
import type { Apartment } from '@/lib/types'

type ApartmentCardProps = {
  apartment: Apartment
  priority?: boolean
}

export function ApartmentCard({ apartment, priority }: ApartmentCardProps) {
  return (
    <Link
      href={`/apartments/${apartment.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A] focus-visible:ring-offset-2"
    >
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden">
        <Image
          src={apartment.image}
          alt={apartment.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {apartment.highlight && (
          <span className="absolute left-4 top-4 rounded-full bg-[#01034A] px-3 py-1 text-xs font-semibold text-white shadow-md">
            {apartment.highlight}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#475569]">
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-4 text-[#01034A]" aria-hidden="true" />
            {apartment.sleeps}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="size-4 text-[#01034A]" aria-hidden="true" />
            {apartment.beds}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold leading-tight text-[#1a2234] sm:text-2xl">
          {apartment.name}
        </h3>

        <p className="mt-3 text-pretty font-light leading-relaxed text-[#475569]">
          {apartment.summary}
        </p>

        <ul className="mt-5 grid gap-2">
          {apartment.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-[#475569]"
            >
              <Check className="size-4 shrink-0 text-[#01034A]" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#01034A] px-6 py-2.5 text-sm font-medium text-[#01034A] transition-all duration-200 group-hover:bg-[#01034A] group-hover:text-white">
            View Apartment
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
