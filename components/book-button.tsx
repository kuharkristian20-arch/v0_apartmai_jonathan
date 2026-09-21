import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, BOOKING_CTA_LABEL, BOOKING_CTA_LABEL_FINAL } from '@/lib/site-config'
import type { CtaLocation } from '@/lib/types'

type BookButtonProps = {
  location: CtaLocation
  variant?: 'solid' | 'outline' | 'light' | 'white'
  size?: 'md' | 'lg'
  showIcon?: boolean
  className?: string
  label?: 'default' | 'final'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const variants = {
  solid: 'bg-[#4169E1] text-white hover:bg-[#2d4fc7] shadow-sm hover:shadow-md',
  outline: 'border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1] hover:text-white',
  light: 'bg-white text-[#1a2234] hover:bg-white/90 shadow-sm',
  white: 'bg-white text-[#4169E1] hover:bg-white/90 shadow-sm',
}

const sizes = {
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function BookButton({
  location,
  variant = 'solid',
  size = 'md',
  showIcon = true,
  className,
  label = 'default',
}: BookButtonProps) {
  const text = label === 'final' ? BOOKING_CTA_LABEL_FINAL : BOOKING_CTA_LABEL

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location={location}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {text}
      {showIcon && <ArrowUpRight className="size-4" aria-hidden="true" />}
      <span className="sr-only">(opens Booking.com in a new tab)</span>
    </a>
  )
}
