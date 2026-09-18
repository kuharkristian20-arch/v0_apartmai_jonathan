import { Mail, MapPin, Phone } from 'lucide-react'
import { navItems } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-medium text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {siteConfig.location}
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2 text-sm md:justify-self-end">
            <p className="font-medium text-foreground">Contact</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <p className="pt-1 text-xs text-muted-foreground/70">
              Contact details are placeholders — replace before launch.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
