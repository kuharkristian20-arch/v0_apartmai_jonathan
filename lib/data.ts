import {
  Waves,
  Wifi,
  Wind,
  UtensilsCrossed,
  Car,
  TreePalm,
  WashingMachine,
  Tv,
  Coffee,
  BedDouble,
} from 'lucide-react'
import type {
  Amenity,
  Apartment,
  Distance,
  GalleryImage,
  NavItem,
  Review,
} from '@/lib/types'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'apartments', label: 'Apartments', href: '#apartments' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'amenities', label: 'Amenities', href: '#amenities' },
  { id: 'location', label: 'Location', href: '#location' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
]

// Placeholder content — none of this is confirmed fact. Replace before launch.
export const apartments: Apartment[] = [
  {
    id: 'sea-breeze',
    name: 'Sea Breeze Studio',
    summary:
      'A bright studio with a calm, uncluttered feel — an easy base for two near the water. (Placeholder description.)',
    sleeps: 'Sleeps up to 2',
    size: 'approx. 30 m² (placeholder)',
    features: ['Kitchenette', 'Balcony', 'Air conditioning', 'Free Wi-Fi'],
    image: '/images/apartment-2.png',
    imageAlt: 'Bright studio apartment with kitchenette and balcony door',
  },
  {
    id: 'olive-terrace',
    name: 'Olive Terrace Apartment',
    summary:
      'A one-bedroom apartment with a private terrace and warm, natural finishes. (Placeholder description.)',
    sleeps: 'Sleeps up to 4',
    size: 'approx. 45 m² (placeholder)',
    features: ['Private terrace', 'Full kitchen', 'Air conditioning', 'Free Wi-Fi'],
    image: '/images/apartment-1.png',
    imageAlt: 'Airy one-bedroom apartment with linen sofa and large sea-view window',
  },
  {
    id: 'adriatic-family',
    name: 'Adriatic Family Suite',
    summary:
      'A spacious two-bedroom suite for families, with a generous terrace for slow mornings. (Placeholder description.)',
    sleeps: 'Sleeps up to 6',
    size: 'approx. 70 m² (placeholder)',
    features: ['Two bedrooms', 'Large terrace', 'Full kitchen', 'Free Wi-Fi'],
    image: '/images/apartment-3.png',
    imageAlt: 'Spacious two-bedroom family apartment with terrace and sea view',
  },
]

export const amenities: Amenity[] = [
  { id: 'wifi', label: 'Free Wi-Fi', icon: Wifi },
  { id: 'ac', label: 'Air conditioning', icon: Wind },
  { id: 'kitchen', label: 'Kitchen', icon: UtensilsCrossed },
  { id: 'parking', label: 'Parking', icon: Car },
  { id: 'terrace', label: 'Terrace', icon: TreePalm },
  { id: 'beach', label: 'Near the beach', icon: Waves },
  { id: 'laundry', label: 'Washing machine', icon: WashingMachine },
  { id: 'tv', label: 'Smart TV', icon: Tv },
  { id: 'coffee', label: 'Coffee & tea', icon: Coffee },
  { id: 'linens', label: 'Fresh linens', icon: BedDouble },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/gallery-1.png',
    alt: 'Mediterranean terrace with a bistro table and potted plants',
    caption: 'Terrace mornings (placeholder)',
  },
  {
    id: 'g2',
    src: '/images/gallery-2.png',
    alt: 'Turquoise Adriatic sea meeting a pebble beach at golden hour',
    caption: 'The Adriatic at golden hour (placeholder)',
  },
  {
    id: 'g3',
    src: '/images/gallery-3.png',
    alt: 'Charming Croatian old town street with warm stone buildings',
    caption: 'Old town streets (placeholder)',
  },
  {
    id: 'g4',
    src: '/images/gallery-4.png',
    alt: 'Bedroom with crisp white linens and a warm wood headboard',
    caption: 'Restful bedrooms (placeholder)',
  },
  {
    id: 'g5',
    src: '/images/gallery-5.png',
    alt: 'Modern coastal bathroom with stone tiles and a walk-in shower',
    caption: 'Modern bathrooms (placeholder)',
  },
  {
    id: 'g6',
    src: '/images/gallery-6.png',
    alt: 'Aerial view of the Biograd na Moru coastline and marina',
    caption: 'Biograd na Moru from above (placeholder)',
  },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    quote:
      'Placeholder review text. Replace with a real, verified guest review before launch. A calm, comfortable stay close to the sea.',
    author: 'Guest review (placeholder)',
  },
  {
    id: 'r2',
    quote:
      'Placeholder review text. Replace with a real, verified guest review before launch. Spotless apartment and an easy walk to town.',
    author: 'Guest review (placeholder)',
  },
  {
    id: 'r3',
    quote:
      'Placeholder review text. Replace with a real, verified guest review before launch. We loved the terrace and the quiet mornings.',
    author: 'Guest review (placeholder)',
  },
]

// Placeholder distances — replace with confirmed figures before launch.
export const distances: Distance[] = [
  { id: 'd1', label: 'Beach', value: 'approx. 5 min walk (placeholder)' },
  { id: 'd2', label: 'Old town & marina', value: 'approx. 10 min walk (placeholder)' },
  { id: 'd3', label: 'Restaurants & cafés', value: 'nearby (placeholder)' },
  { id: 'd4', label: 'Zadar Airport (ZAD)', value: 'approx. 30 min drive (placeholder)' },
]
