/**
 * Centralized external references and contact details.
 * Replace every PLACEHOLDER value with confirmed data before launch.
 * These are the only places any of these values should live.
 */
export const siteConfig = {
  name: 'Residence Jonathan',
  location: 'Biograd na Moru, Croatia',
  description:
    'Residence Jonathan offers calm, sunlit apartments moments from the Adriatic in Biograd na Moru, Croatia. A refined base for your coastal stay.',

  // Canonical site URL — replace with the real domain when available.
  url: 'https://residence-jonathan.example.com',

  // The single Booking.com property URL used by every "Check Availability" CTA.
  // PLACEHOLDER — replace with the real Booking.com property link.
  bookingUrl: 'https://www.booking.com/',

  // "Open in Google Maps" destination.
  // PLACEHOLDER — replace with the confirmed Google Maps location URL.
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Biograd+na+Moru+Croatia',

  // Contact details — PLACEHOLDERS, replace with confirmed details.
  email: 'hello@residence-jonathan.example.com',
  phone: '+385 00 000 0000',
} as const

export const BOOKING_CTA_LABEL = 'Check Availability'
