import { z } from 'zod'

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name.').max(120),
  email: z.string().trim().email('Enter a valid email address.').max(254),
  phone: z.string().trim().max(50).optional().default(''),
  keyword: z.string().trim().max(200).optional().default(''),
  kind: z.enum(['Flight booking', 'Hotel reservation', 'Flight and hotel']),
  destination: z.string().trim().min(2, 'Enter a destination.').max(200),
  duration: z.string().trim().max(100).optional().default(''),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Select a valid travel date.')
    .refine(value => {
      const parsed = new Date(`${value}T00:00:00Z`)
      return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value
    }, 'Select a valid travel date.')
    .refine(value => value >= new Date().toISOString().slice(0, 10), 'Choose today or a future date.'),
  message: z.string().trim().max(3000).optional().default(''),
  website: z.string().max(0, 'Unable to accept this request.').optional().default(''),
  idempotencyKey: z.string().uuid('Invalid inquiry identifier.'),
})

export type BookingInquiry = z.infer<typeof bookingSchema>

export function bookingRecipient(): string | null {
  const parsed = z.string().email().safeParse(process.env.BOOKING_RECIPIENT_EMAIL?.trim())
  return parsed.success ? parsed.data : null
}

export function bookingEmail(inquiry: BookingInquiry) {
  const subject = `Fanoble travel inquiry: ${inquiry.kind} — ${inquiry.destination}`
  const text = [
    'New website travel inquiry — not a confirmed reservation.',
    '',
    `Name: ${inquiry.name}`,
    `Reply email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || 'Not provided'}`,
    `Requested service: ${inquiry.kind}`,
    `Destination: ${inquiry.destination}`,
    `Travel date: ${inquiry.date}`,
    `Duration: ${inquiry.duration || 'Not provided'}`,
    `Departure / search details: ${inquiry.keyword || 'Not provided'}`,
    '',
    'Additional details:',
    inquiry.message || 'None provided.',
    '',
    'Please contact the traveller to discuss availability, pricing and arrangements.',
  ].join('\n')
  return { subject, text }
}

export function bookingEmailLink(recipient: string, inquiry: BookingInquiry) {
  const { subject, text } = bookingEmail(inquiry)
  return `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
}
