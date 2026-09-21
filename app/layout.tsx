import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Modern Coastal Apartments in Biograd na Moru`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Residence Jonathan',
    'Biograd na Moru',
    'Croatia apartments',
    'Adriatic coast rental',
    'seaside apartments',
    'Bosana Beach',
    'Marina Kornati',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Modern Coastal Apartments in Biograd na Moru`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} in Biograd na Moru, Croatia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Modern Coastal Apartments in Biograd na Moru`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4169E1',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jadranska 3a',
    addressLocality: 'Biograd na Moru',
    postalCode: '23210',
    addressCountry: 'HR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.4',
    reviewCount: '66',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
