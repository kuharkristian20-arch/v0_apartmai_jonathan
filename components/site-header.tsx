'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import { BookButton } from '@/components/book-button'
import { MobileNav } from '@/components/mobile-nav'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className={cn(
            'font-serif text-xl font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          {siteConfig.name}
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'text-sm transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                scrolled
                  ? 'text-foreground/80 focus-visible:ring-offset-background'
                  : 'text-background/90 focus-visible:ring-offset-transparent',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookButton
            location="header"
            variant={scrolled ? 'solid' : 'light'}
            showIcon={false}
          />
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Open menu"
          className={cn(
            'rounded-full p-2 transition-colors md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-nav">
        <MobileNav
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          triggerRef={triggerRef}
        />
      </div>
    </header>
  )
}
