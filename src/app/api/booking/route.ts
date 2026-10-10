import { NextRequest, NextResponse } from 'next/server'
import { bookingEmail, bookingEmailLink, bookingRecipient, bookingSchema } from '@/lib/booking'
import { sendBookingEmail } from '@/lib/inquiry-email'

export const runtime = 'nodejs'

// Lightweight instance-local abuse protection; provider quotas still apply.
const requests = new Map<string, { count: number; reset: number }>()
function rateLimited(request: NextRequest) {
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  const now = Date.now()
  requests.forEach((value, key) => { if (value.reset <= now) requests.delete(key) })
  const bucket = requests.get(ip) || { count: 0, reset: now + 10 * 60 * 1000 }
  bucket.count += 1
  requests.set(ip, bucket)
  return bucket.count > 5
}

export async function GET() {
  return NextResponse.json({ recipient: bookingRecipient() }, {
    headers: { 'Cache-Control': 'no-store' },
  })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin) {
    let originHost: string
    try { originHost = new URL(origin).host } catch {
      return NextResponse.json({ status: 'error', message: 'Invalid request origin.' }, { status: 403 })
    }
    const requestHost = request.headers.get('x-forwarded-host') || request.headers.get('host') || new URL(request.url).host
    if (originHost !== requestHost) {
      return NextResponse.json({ status: 'error', message: 'Please send your inquiry from this website.' }, { status: 403 })
    }
  }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ status: 'error', message: 'Send a JSON inquiry.' }, { status: 415 })
  }
  let body: unknown
  try {
    const text = await request.text()
    if (Buffer.byteLength(text) > 16000) {
      return NextResponse.json({ status: 'error', message: 'Your inquiry is too long.' }, { status: 413 })
    }
    body = JSON.parse(text)
  } catch {
    return NextResponse.json({ status: 'error', message: 'Unable to read your inquiry. Please try again.' }, { status: 400 })
  }
  const parsed = bookingSchema.safeParse(body)
  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message
    return NextResponse.json({ status: 'error', message: 'Please check the highlighted details.', fields }, { status: 400 })
  }
  const recipient = bookingRecipient()
  if (!recipient) {
    return NextResponse.json({
      status: 'error',
      message: 'The inquiry inbox is not configured. Please contact our team using the contact page.',
    }, { status: 503 })
  }
  if (rateLimited(request)) {
    return NextResponse.json({
      status: 'error',
      message: 'Too many inquiries. Please wait a few minutes or open your email app to contact us.',
      emailLink: bookingEmailLink(recipient, parsed.data),
    }, { status: 429, headers: { 'Retry-After': '600' } })
  }
  try {
    const email = bookingEmail(parsed.data)
    const id = await sendBookingEmail({
      to: recipient,
      replyTo: parsed.data.email,
      ...email,
      idempotencyKey: parsed.data.idempotencyKey,
    })
    return NextResponse.json({
      status: 'success',
      message: 'Your inquiry has been sent. Our team will contact you to confirm availability and pricing.',
      id,
    })
  } catch {
    return NextResponse.json({
      status: 'error',
      message: 'We could not send your inquiry. Your details are still here. Please try again or open your email app to send them directly.',
      emailLink: bookingEmailLink(recipient, parsed.data),
    }, { status: 503 })
  }
}
