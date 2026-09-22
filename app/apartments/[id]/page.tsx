import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { apartments } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StickyCta } from '@/components/sticky-cta'
import { ApartmentDetail } from '@/components/apartment-detail'

export function generateStaticParams() {
  return apartments.map((apartment) => ({
    id: apartment.id,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const apartment = apartments.find((a) => a.id === id)
    if (!apartment) return { title: 'Apartment Not Found' }

    return {
      title: apartment.name,
      description: apartment.summary,
      alternates: {
        canonical: `${siteConfig.url}/apartments/${apartment.id}`,
      },
      openGraph: {
        title: `${apartment.name} — ${siteConfig.name}`,
        description: apartment.summary,
        images: [
          {
            url: apartment.image,
            width: 940,
            height: 650,
            alt: apartment.imageAlt,
          },
        ],
      },
    }
  })
}

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const apartment = apartments.find((a) => a.id === id)

  if (!apartment) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ApartmentDetail apartment={apartment} />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  )
}
