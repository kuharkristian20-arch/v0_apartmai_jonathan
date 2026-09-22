'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { navItems } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'
import { BookButton } from '@/components/book-button'
import { cn } from '@/lib/utils'

type MobileNavProps = {
  open: boolean
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function MobileNav({ open, onClose, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (open) {
      setMounted(true)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const focusTimer = setTimeout(() => {
      closeRef.current?.focus()
    }, 100)

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      clearTimeout(focusTimer)
      document.body.style.overflow = ''
      const restore = previouslyFocused ?? triggerRef.current
      restore?.focus()
    }
  }, [open, onClose, triggerRef])

  if (!mounted && !open) return null

  return (
    <div className="fixed inset-0 z-[100] h-[100dvh] md:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-[#1a2234]/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'absolute right-0 top-0 flex h-[100dvh] w-[min(20rem,85vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        onTransitionEnd={() => {
          if (!open) setMounted(false)
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <span className="text-lg font-semibold text-[#1a2234]">{siteConfig.name}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#475569] transition-colors hover:bg-slate-100 hover:text-[#1a2234] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A]"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#475569] transition-colors hover:bg-[#E8E9F0] hover:text-[#01034A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01034A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-100 px-6 py-6">
          <BookButton location="header" size="lg" className="w-full" showIcon={false} />
        </div>
      </div>
    </div>
  )
}
