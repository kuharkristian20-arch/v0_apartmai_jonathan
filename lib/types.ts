import type { LucideIcon } from 'lucide-react'

export type Apartment = {
  id: string
  name: string
  summary: string
  sleeps: string
  size?: string
  features: string[]
  image: string
  imageAlt: string
}

export type Amenity = {
  id: string
  label: string
  icon: LucideIcon
}

export type GalleryImage = {
  id: string
  src: string
  alt: string
  caption?: string
}

export type Review = {
  id: string
  quote: string
  author: string
}

export type Distance = {
  id: string
  label: string
  value: string
}

export type NavItem = {
  id: string
  label: string
  href: string
}

export type CtaLocation = 'hero' | 'header' | 'final' | 'sticky' | 'apartments'
