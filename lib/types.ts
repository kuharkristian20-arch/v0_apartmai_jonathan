import type { LucideIcon } from 'lucide-react'

export type ApartmentImage = {
  src: string
  alt: string
  caption?: string
}

export type Apartment = {
  id: string
  name: string
  summary: string
  description: string
  sleeps: string
  beds: string
  bedrooms: string
  bathrooms: string
  size: string
  features: string[]
  amenities: string[]
  image: string
  imageAlt: string
  gallery: ApartmentImage[]
  highlight?: string
}

export type Amenity = {
  id: string
  label: string
  icon: LucideIcon
}

export type AmenityCategory = {
  id: string
  title: string
  icon: LucideIcon
  items: string[]
}

export type GalleryImage = {
  id: string
  src: string
  alt: string
  caption?: string
  span?: 'tall' | 'wide' | 'large' | 'normal'
}

export type Distance = {
  id: string
  label: string
  value: string
  type: 'walk' | 'drive'
  icon?: LucideIcon
}

export type NavItem = {
  id: string
  label: string
  href: string
}

export type CtaLocation = 'hero' | 'header' | 'final' | 'sticky' | 'apartments' | 'footer' | 'apartment-detail'

export type Pillar = {
  id: string
  icon: LucideIcon
  title: string
  description: string
}
