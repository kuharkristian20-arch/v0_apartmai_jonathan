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
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-100 bg-white/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className={cn(
            'text-lg font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] focus-visible:ring-offset-2 rounded-md px-1',
            scrolled ? 'text-[#1a2234]' : 'text-white',
          )}
        >
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#4169E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1] focus-visible:ring-offset-2 rounded-md px-1',
                scrolled ? 'text-[#475569]' : 'text-white/90',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
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
            'rounded-lg p-2 transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4169E1]',
            scrolled ? 'text-[#1a2234]' : 'text-white',
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
