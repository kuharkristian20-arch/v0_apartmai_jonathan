import { Clock, Baby, Volume2, Languages, MessageSquare, Ban } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const infoItems = [
  {
    icon: Clock,
    title: 'Check-in & Check-out',
    details: [
      { label: 'Check-in', value: '15:00 – 20:00' },
      { label: 'Check-out', value: '08:00 – 10:00' },
    ],
    note: 'Advance arrival notice appreciated',
  },
  {
    icon: Baby,
    title: 'Children & Family',
    details: [
      { label: 'Children', value: 'All ages welcome' },
      { label: 'Cots/cribs', value: 'Available on request' },
    ],
  },
  {
    icon: Ban,
    title: 'House Rules',
    details: [
      { label: 'Parties/events', value: 'Not allowed' },
      { label: 'Smoking', value: 'Non-smoking property' },
    ],
    note: 'Quiet hours observed to preserve tranquility',
  },
  {
    icon: Languages,
    title: 'Languages Spoken',
    details: [
      { label: 'Spoken', value: 'English, Croatian, German' },
    ],
  },
]

export function GuestInfoSection() {
  return (
    <section id="info" className="scroll-mt-header bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Guest Information"
            title="Everything you need to know before arrival"
            description="Practical details about check-in, house rules, and what to expect during your stay at Residence Jonathan."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.title}
                as="div"
                delay={index * 80}
                className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50 p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#4169E1] shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a2234]">
                    {item.title}
                  </h3>
                </div>
                <dl className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <div key={detail.label} className="flex items-center justify-between gap-4 text-sm">
                      <dt className="font-light text-[#475569]">{detail.label}</dt>
                      <dd className="font-medium text-[#1a2234]">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
                {item.note && (
                  <p className="mt-3 flex items-center gap-2 text-xs font-light text-[#94a3b8]">
                    <MessageSquare className="size-3.5" aria-hidden="true" />
                    {item.note}
                  </p>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-6 flex items-center gap-4 rounded-3xl border border-[#4169E1]/10 bg-[#eef3fc] p-6">
            <Volume2 className="size-8 shrink-0 text-[#4169E1]" aria-hidden="true" />
            <p className="text-sm font-light leading-relaxed text-[#475569]">
              <span className="font-medium text-[#4169E1]">Pets:</span> Pets are not
              allowed at Residence Jonathan. Please contact the host via Booking.com
              messaging for any special accommodation requests.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
