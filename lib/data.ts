import { Wifi, Wind, Car, Tv, Coffee, UtensilsCrossed, ShowerHead, WashingMachine, Save as Waves, TreePalm, Sun, Moon, Snowflake, Volume2, Users, MapPin, Plane, Sailboat, Mountain, Building2, Clock, Baby, Languages, MessageSquare, ShieldCheck, CircleParking as ParkingCircle } from 'lucide-react'
import type {
  Amenity,
  AmenityCategory,
  Apartment,
  Distance,
  GalleryImage,
  NavItem,
  Pillar,
} from '@/lib/types'

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#top' },
  { id: 'apartments', label: 'Apartments', href: '#apartments' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'amenities', label: 'Amenities', href: '#amenities' },
  { id: 'location', label: 'Location', href: '#location' },
  { id: 'info', label: 'Information', href: '#info' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const apartments: Apartment[] = [
  {
    id: 'one-bedroom-terrace',
    name: 'One-Bedroom Apartment with Terrace & Sea View',
    summary:
      'A spacious one-bedroom apartment with a private terrace overlooking the Adriatic. The perfect retreat for families or couples seeking comfort and sea breeze.',
    sleeps: 'Sleeps up to 4',
    beds: '1 large double bed + 1 sofa bed',
    features: ['Private terrace', 'Sea views', 'Full kitchen', 'Dishwasher', 'Rainfall shower', 'Air conditioning'],
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Bright one-bedroom apartment with modern living area and sea-view terrace',
    highlight: 'Sea View Terrace',
  },
  {
    id: 'studio-balcony',
    name: 'Studio Apartment with Balcony',
    summary:
      'A modern, open-plan studio designed for two. Enjoy a private balcony, contemporary kitchenette, and a restful double bed in one elegant space.',
    sleeps: 'Sleeps 2',
    beds: '1 large double bed',
    features: ['Private balcony', 'Kitchenette', 'Air conditioning', 'Smart TV', 'Free Wi-Fi', 'Soundproof'],
    image: 'https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern studio apartment with open-plan living area and balcony',
    highlight: 'Cozy & Modern',
  },
  {
    id: 'two-bedroom-suite',
    name: 'Two-Bedroom Family Suite',
    summary:
      'An expansive two-bedroom suite ideal for families. Two separate bedrooms, a generous living salon, full kitchen with dishwasher and oven, and a sun-drenched terrace.',
    sleeps: 'Sleeps up to 6',
    beds: '2 bedrooms (double + twin/sofa bed)',
    features: ['Two bedrooms', 'Large sun terrace', 'Full kitchen', 'Dishwasher & oven', 'Living salon', 'Air conditioning'],
    image: 'https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Spacious two-bedroom family apartment with large kitchen and living area',
    highlight: 'Family Suite',
  },
]

export const amenityCategories: AmenityCategory[] = [
  {
    id: 'kitchen',
    title: 'Kitchen & Dining',
    icon: UtensilsCrossed,
    items: ['Refrigerator', 'Dishwasher', 'Oven', 'Stovetop', 'Coffee machine', 'Electric kettle', 'Full kitchenware'],
  },
  {
    id: 'comfort',
    title: 'Comfort & Living',
    icon: Snowflake,
    items: ['Air conditioning', 'Heating', 'Flat-screen Smart TV', 'Satellite channels', 'Soundproofing', 'Ironing facilities'],
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Views',
    icon: TreePalm,
    items: ['Private balcony or terrace', 'Outdoor dining furniture', 'Sun patio', 'Sea & garden views', 'Hot tub access'],
  },
  {
    id: 'connectivity',
    title: 'Connectivity & Parking',
    icon: Wifi,
    items: ['Free high-speed Wi-Fi', 'Free private on-site parking', 'No reservation needed for parking'],
  },
  {
    id: 'bathroom',
    title: 'Bathroom & Linens',
    icon: ShowerHead,
    items: ['Private bathroom', 'Walk-in rainfall shower', 'Hairdryer', 'Complimentary toiletries', 'Fresh towels & linens'],
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/33473011/pexels-photo-33473011.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Coastal terrace overlooking the Adriatic Sea in Croatia',
    caption: 'Terrace with sea views',
    span: 'large',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern living room with minimalist design and open kitchen',
    caption: 'Living spaces',
    span: 'wide',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/10554480/pexels-photo-10554480.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Serene bedroom with white linens and natural light',
    caption: 'Restful bedrooms',
    span: 'tall',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/8134779/pexels-photo-8134779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern bathroom with glass walk-in shower',
    caption: 'Modern bathrooms',
    span: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/8082197/pexels-photo-8082197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylish modern kitchen with elegant accents',
    caption: 'Fully equipped kitchens',
    span: 'normal',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/17555554/pexels-photo-17555554.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Pebble beach with turquoise Adriatic sea in Croatia',
    caption: 'Bošana Beach — 200m away',
    span: 'tall',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/7587311/pexels-photo-7587311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Open-concept living room and kitchen with contemporary decor',
    caption: 'Open-plan comfort',
    span: 'wide',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/9542363/pexels-photo-9542363.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Aerial view of a Croatian marina with yachts and boats',
    caption: 'Marina Kornati — 900m away',
    span: 'large',
  },
]

export const distances: Distance[] = [
  { id: 'd1', label: 'Bošana Beach (Plaža Bošana)', value: '200 m — 2 min walk', type: 'walk', icon: Waves },
  { id: 'd2', label: 'Marina Kornati', value: '900 m — 10 min walk', type: 'walk', icon: Sailboat },
  { id: 'd3', label: 'Biograd Old Town & Waterfront', value: '1.2 km — 15 min walk', type: 'walk', icon: Building2 },
  { id: 'd4', label: 'Dražica / Soline Beach', value: '1.8 km', type: 'walk', icon: Waves },
  { id: 'd5', label: 'Fun Park Biograd (Mirnovec)', value: '4.5 km — short drive', type: 'drive', icon: Sun },
  { id: 'd6', label: 'Lake Vrana Nature Park', value: '7 km — 10 min drive', type: 'drive', icon: Mountain },
  { id: 'd7', label: 'Zadar Airport (ZAD)', value: '23 km — 25 min drive', type: 'drive', icon: Plane },
  { id: 'd8', label: 'Krka National Park', value: '48 km — 45 min drive', type: 'drive', icon: Mountain },
]

export const pillars: Pillar[] = [
  {
    id: 'p1',
    icon: Waves,
    title: 'Unbeatable Beach Proximity',
    description: 'Just 200 meters from Bošana Beach\'s quiet pebble shores — a 2-minute stroll through pine trees to the turquoise Adriatic.',
  },
  {
    id: 'p2',
    icon: ShieldCheck,
    title: '9.4 Exceptional Guest Rating',
    description: 'A proven track record of spotless cleanliness, modern comfort, and attentive hospitality, verified by 66+ guest reviews on Booking.com.',
  },
  {
    id: 'p3',
    icon: ParkingCircle,
    title: 'Hassle-Free Private Parking',
    description: 'Guaranteed free parking on site in a quiet residential street — no reservation needed, no stress finding a spot.',
  },
  {
    id: 'p4',
    icon: UtensilsCrossed,
    title: 'Complete Home Independence',
    description: 'Fully equipped modern kitchens with dishwashers, ovens, and coffee machines. Private terraces, spacious living areas, and all the comforts of home.',
  },
]
