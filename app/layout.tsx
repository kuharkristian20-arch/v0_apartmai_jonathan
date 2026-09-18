import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Seaside Apartments in ${siteConfig.location}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Residence Jonathan',
    'Biograd na Moru',
    'Croatia apartments',
    'Adriatic vacation rental',
    'seaside apartments',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Seaside Apartments in ${siteConfig.location}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} on the Adriatic coast`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Seaside Apartments in ${siteConfig.location}`,
    description: siteConfig.description,
    images: ['/images/hero.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5efe4',
}

// Structured data — only verified, non-invented fields are included.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Biograd na Moru',
    addressCountry: 'HR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
