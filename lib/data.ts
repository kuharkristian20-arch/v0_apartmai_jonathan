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
    description:
      'This bright one-bedroom apartment is designed for relaxed coastal living. The open-plan living area flows onto a private terrace with sweeping views of the Adriatic Sea, perfect for morning coffee or evening wine. The bedroom features a large double bed with premium linens, and the sofa bed in the living room accommodates two additional guests. A fully equipped kitchen with dishwasher, a modern rainfall shower, and air conditioning throughout complete this comfortable retreat.',
    sleeps: 'Sleeps up to 4',
    beds: '1 large double bed + 1 sofa bed',
    bedrooms: '1 bedroom',
    bathrooms: '1 bathroom',
    size: '45 m²',
    features: ['Private terrace', 'Sea views', 'Full kitchen', 'Dishwasher', 'Rainfall shower', 'Air conditioning'],
    amenities: ['Private terrace with sea views', 'Full kitchen with dishwasher', 'Rainfall shower', 'Air conditioning', 'Free high-speed Wi-Fi', 'Flat-screen Smart TV', 'Free private parking', 'Hairdryer & toiletries', 'Fresh towels & linens'],
    image: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Bright one-bedroom apartment with modern living area and sea-view terrace',
    highlight: 'Sea View Terrace',
    gallery: [
      { src: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Bright living area with modern furnishings and sea-view terrace access', caption: 'Living area with terrace access' },
      { src: 'https://images.pexels.com/photos/20260779/pexels-photo-20260779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cozy bedroom with ocean view terrace and natural light', caption: 'Bedroom with ocean view' },
      { src: 'https://images.pexels.com/photos/18946698/pexels-photo-18946698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Private balcony overlooking the sea at sunset with chairs and table', caption: 'Sea-view terrace at sunset' },
      { src: 'https://images.pexels.com/photos/19966764/pexels-photo-19966764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Sleek white kitchen with modern appliances and minimalist decor', caption: 'Fully equipped kitchen' },
      { src: 'https://images.pexels.com/photos/27359993/pexels-photo-27359993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Contemporary bathroom with glass shower and sleek fixtures', caption: 'Modern bathroom with rainfall shower' },
      { src: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Spacious living room with comfortable sofa and dining area', caption: 'Open-plan living and dining' },
    ],
  },
  {
    id: 'studio-balcony',
    name: 'Studio Apartment with Balcony',
    summary:
      'A modern, open-plan studio designed for two. Enjoy a private balcony, contemporary kitchenette, and a restful double bed in one elegant space.',
    description:
      'This elegantly designed studio apartment brings together sleeping, living, and dining in one seamless open-plan space. A contemporary kitchenette with a coffee machine and electric kettle lets you start your day at your own pace. The private balcony is perfect for enjoying the Mediterranean breeze. Soundproofing throughout ensures a peaceful night\'s rest, while the Smart TV and free Wi-Fi keep you connected and entertained.',
    sleeps: 'Sleeps 2',
    beds: '1 large double bed',
    bedrooms: 'Studio (open-plan)',
    bathrooms: '1 bathroom',
    size: '28 m²',
    features: ['Private balcony', 'Kitchenette', 'Air conditioning', 'Smart TV', 'Free Wi-Fi', 'Soundproof'],
    amenities: ['Private balcony', 'Kitchenette with coffee machine', 'Air conditioning', 'Flat-screen Smart TV', 'Free high-speed Wi-Fi', 'Soundproofing', 'Free private parking', 'Hairdryer & toiletries', 'Fresh towels & linens'],
    image: 'https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern studio apartment with open-plan living area and balcony',
    highlight: 'Cozy & Modern',
    gallery: [
      { src: 'https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Modern open-plan studio apartment with living area and balcony', caption: 'Open-plan studio living' },
      { src: 'https://images.pexels.com/photos/6782749/pexels-photo-6782749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Stylish balcony with seating and views', caption: 'Private balcony' },
      { src: 'https://images.pexels.com/photos/19685797/pexels-photo-19685797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Compact modern kitchenette with white cabinets and plant decor', caption: 'Contemporary kitchenette' },
      { src: 'https://images.pexels.com/photos/7005275/pexels-photo-7005275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Soft bed with cushions and modern TV in minimalist bedroom', caption: 'Restful double bed' },
      { src: 'https://images.pexels.com/photos/19866441/pexels-photo-19866441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Stylish minimalist bathroom with glass shower and white fixtures', caption: 'Modern bathroom' },
      { src: 'https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant modern living space with corner sofa and minimalist decor', caption: 'Comfortable living space' },
    ],
  },
  {
    id: 'two-bedroom-suite',
    name: 'Two-Bedroom Family Suite',
    summary:
      'An expansive two-bedroom suite ideal for families. Two separate bedrooms, a generous living salon, full kitchen with dishwasher and oven, and a sun-drenched terrace.',
    description:
      'Designed for families and groups, this expansive two-bedroom suite offers generous space and privacy. Two separate bedrooms — one with a double bed, one with twin beds and a sofa bed — accommodate up to six guests comfortably. The large living salon is perfect for gathering, while the fully equipped kitchen with dishwasher and oven makes self-catering a pleasure. A sun-drenched terrace provides the ideal spot for al fresco dining with sea and garden views.',
    sleeps: 'Sleeps up to 6',
    beds: '2 bedrooms (double + twin/sofa bed)',
    bedrooms: '2 bedrooms',
    bathrooms: '1 bathroom',
    size: '65 m²',
    features: ['Two bedrooms', 'Large sun terrace', 'Full kitchen', 'Dishwasher & oven', 'Living salon', 'Air conditioning'],
    amenities: ['Two separate bedrooms', 'Large sun terrace', 'Full kitchen with dishwasher & oven', 'Living salon', 'Air conditioning', 'Free high-speed Wi-Fi', 'Flat-screen Smart TV', 'Free private parking', 'Hairdryer & toiletries', 'Fresh towels & linens'],
    image: 'https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Spacious two-bedroom family apartment with large kitchen and living area',
    highlight: 'Family Suite',
    gallery: [
      { src: 'https://images.pexels.com/photos/7214456/pexels-photo-7214456.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Spacious two-bedroom family apartment with large kitchen and living area', caption: 'Spacious living salon' },
      { src: 'https://images.pexels.com/photos/7587828/pexels-photo-7587828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Spacious modern living room with comfortable seating and dining zone', caption: 'Family living area' },
      { src: 'https://images.pexels.com/photos/6436788/pexels-photo-6436788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Contemporary kitchen with modern oven and wooden cabinets', caption: 'Full kitchen with oven' },
      { src: 'https://images.pexels.com/photos/10554480/pexels-photo-10554480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Serene bedroom with white linens and natural light', caption: 'Master bedroom' },
      { src: 'https://images.pexels.com/photos/14286287/pexels-photo-14286287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Outdoor seating area on a terrace with scenic views', caption: 'Sun-drenched terrace' },
      { src: 'https://images.pexels.com/photos/7005268/pexels-photo-7005268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern bathroom with glass shower cabin and tiled walls', caption: 'Modern bathroom' },
    ],
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
