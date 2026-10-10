import { createHash } from 'node:crypto'
import { sendEmail } from '@/utils/replitmail'

const deliveries = new Map<string, { signature: string; expires: number; result: Promise<string> }>()

export async function sendBookingEmail(input: {
  to: string
  replyTo: string
  subject: string
  text: string
  idempotencyKey: string
}): Promise<string> {
  const now = Date.now()
  deliveries.forEach((entry, key) => {
    if (entry.expires <= now) deliveries.delete(key)
  })
  const signature = createHash('sha256').update(JSON.stringify(input)).digest('hex')
  const existing = deliveries.get(input.idempotencyKey)
  if (existing) {
    if (existing.signature !== signature) throw new Error('Inquiry identifier was reused for different details')
    return existing.result
  }
  // Keep concurrent submissions and browser retries from sending twice on this
  // server instance. This cache is deliberately bounded and not durable storage.
  if (deliveries.size >= 1000) {
    const oldest = deliveries.keys().next().value
    if (oldest) deliveries.delete(oldest)
  }
  const result = sendEmail({ to: input.to, subject: input.subject, text: input.text })
    .then(response => {
      // The managed mailer can acknowledge its relay envelope rather than the
      // final destination. Require a positive SMTP acknowledgement, not an
      // exact match between the relay address and the supplied recipient.
      const accepted = Array.isArray(response.accepted) && response.accepted.length > 0
      if (!accepted || response.rejected?.length || !response.messageId) {
        throw new Error('Email provider did not accept the inquiry recipient')
      }
      return response.messageId
    })
    .catch(error => {
      deliveries.delete(input.idempotencyKey)
      throw error
    })
  deliveries.set(input.idempotencyKey, { signature, expires: now + 30 * 60 * 1000, result })
  return result
}
