import { Quote } from 'lucide-react'
import { reviews } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-header bg-secondary py-20 text-secondary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What guests say"
            description="These quotes are placeholders. Replace them with real, verified guest reviews — and their true attribution — before launch."
            className="[&_p:first-child]:text-background/70 [&_h2]:text-background [&_p:last-child]:text-background/80"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={review.id}
              delay={index * 100}
              className="flex h-full flex-col rounded-2xl bg-background/10 p-8 backdrop-blur-sm"
            >
              <Quote className="size-8 text-background/50" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-background/95">
                {review.quote}
              </blockquote>
              <footer className="mt-6 text-sm font-medium text-background/70">
                {review.author}
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
