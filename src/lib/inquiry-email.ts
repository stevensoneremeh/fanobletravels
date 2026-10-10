import { ReplitConnectors } from '@replit/connectors-sdk'
import { z } from 'zod'

export async function sendBookingEmail(input: {
  to: string
  replyTo: string
  subject: string
  text: string
  idempotencyKey: string
}): Promise<string> {
  // Resend's demonstration sender is restricted; configure a verified domain
  // through BOOKING_FROM_EMAIL for general recipients.
  const from = process.env.BOOKING_FROM_EMAIL?.trim() || 'Fanoble Travel Inquiries <onboarding@resend.dev>'
  const address = from.match(/<([^>]+)>/)?.[1] || from
  if (!z.string().email().safeParse(address).success) throw new Error('Invalid booking sender configuration')
  const connectors = new ReplitConnectors()
  const proxyFetch = connectors.createProxyFetch('resend')
  const response = await proxyFetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotency-Key': `fanoble-booking/${input.idempotencyKey}`,
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      reply_to: input.replyTo,
      subject: input.subject,
      text: input.text,
    }),
    signal: AbortSignal.timeout(15000),
  })
  if (!response.ok) {
    console.error('Booking email provider rejected the request:', response.status)
    throw new Error('Email provider rejected the request')
  }
  const data: unknown = await response.json()
  const result = z.object({ id: z.string().min(1) }).safeParse(data)
  if (!result.success) throw new Error('Email provider did not acknowledge the inquiry')
  return result.data.id
}
