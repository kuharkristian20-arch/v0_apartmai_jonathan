import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, BOOKING_CTA_LABEL } from '@/lib/site-config'
import type { CtaLocation } from '@/lib/types'

type BookButtonProps = {
  /** Where this CTA lives, so outbound clicks can be attributed to analytics later. */
  location: CtaLocation
  variant?: 'solid' | 'outline' | 'light'
  size?: 'md' | 'lg'
  showIcon?: boolean
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const variants = {
  solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline:
    'border border-foreground/25 text-foreground hover:bg-foreground hover:text-background',
  light: 'bg-background text-foreground hover:bg-background/90',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function BookButton({
  location,
  variant = 'solid',
  size = 'md',
  showIcon = true,
  className,
}: BookButtonProps) {
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location={location}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {BOOKING_CTA_LABEL}
      {showIcon && <ArrowUpRight className="size-4" aria-hidden="true" />}
      <span className="sr-only">(opens Booking.com in a new tab)</span>
    </a>
  )
}
