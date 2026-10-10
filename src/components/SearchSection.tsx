'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'

type BookingKind = 'Flight booking' | 'Hotel reservation' | 'Flight and hotel'
type BookingPayload = {
  name: string
  email: string
  phone: string
  keyword: string
  kind: BookingKind
  destination: string
  duration: string
  date: string
  message: string
  website: string
  idempotencyKey: string
}
type ApiResult = {
  status?: string
  message?: string
  id?: string
  fields?: Record<string, string>
  emailLink?: string
}

const emptyValues = {
  name: '', email: '', phone: '', keyword: '', kind: '' as BookingKind | '',
  destination: '', duration: '', date: '', message: '',
}

function localDateString() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

export default function SearchSection() {
  const [values, setValues] = useState(emptyValues)
  const [website, setWebsite] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ kind: 'success' | 'error'; message: string; emailLink?: string } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [recipient, setRecipient] = useState<string | null>(null)
  const retryKeys = useRef(new Map<string, string>())

  useEffect(() => {
    let active = true
    fetch('/api/booking')
      .then((response) => response.ok ? response.json() : null)
      .then((data: { recipient?: string | null } | null) => {
        if (active && data && typeof data.recipient === 'string') setRecipient(data.recipient)
      })
      .catch(() => undefined)
    return () => { active = false }
  }, [])

  const update = (field: keyof typeof emptyValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setFieldErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending) return
    setSending(true)
    setResult(null)
    setFieldErrors({})
    const base = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      keyword: values.keyword.trim(),
      kind: values.kind as BookingKind,
      destination: values.destination.trim(),
      duration: values.duration.trim(),
      date: values.date,
      message: values.message.trim(),
      website,
    }
    const signature = JSON.stringify(base)
    let idempotencyKey = retryKeys.current.get(signature)
    if (!idempotencyKey) {
      idempotencyKey = crypto.randomUUID()
      retryKeys.current.set(signature, idempotencyKey)
    }
    const payload: BookingPayload = { ...base, idempotencyKey }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json().catch(() => ({})) as ApiResult
      if (response.ok && data.status === 'success') {
        setResult({ kind: 'success', message: data.message || 'Your inquiry has been received and is awaiting confirmation.' })
        setValues(emptyValues)
        setWebsite('')
      } else {
        setFieldErrors(data.fields || {})
        setResult({
          kind: 'error',
          message: data.message || 'We could not send your inquiry just now. Your details are still here—please try again.',
          emailLink: data.emailLink,
        })
      }
    } catch {
      setResult({ kind: 'error', message: 'We could not reach the inquiry service. Your details are still here—please try again.' })
    } finally {
      setSending(false)
    }
  }

  const errorFor = (field: string) => fieldErrors[field]

  return (
    <section className="inquiry" id="travel-inquiry" aria-labelledby="inquiry-title">
      <div className="inquiry__inner">
        <div className="inquiry__aside">
          <span className="journey-kicker">LET’S PLAN YOUR NEXT STEP</span>
          <h2 id="inquiry-title">Tell us where<br />you’re headed.</h2>
          <p>Share the essentials and a Fanoble travel adviser will follow up to discuss your plans. This is an inquiry, not a booking or payment.</p>
          <div className="inquiry__aside-note">
            <span className="inquiry__aside-number">01 / 01</span>
            <span>One conversation<br />at a time.</span>
          </div>
          <div className="inquiry__route" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className="inquiry__panel">
          <div className="inquiry__panel-head">
            <span>TRAVEL INQUIRY</span>
            <span><i aria-hidden="true" /> HUMAN GUIDANCE</span>
          </div>
          <form className="inquiry-form" onSubmit={submit}>
            <div className="inquiry-form__grid">
              <div className="inquiry-field">
                <label htmlFor="inquiry-name">Your name <span>*</span></label>
                <input id="inquiry-name" autoComplete="name" required value={values.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errorFor('name')} aria-describedby={errorFor('name') ? 'error-name' : undefined} />
                {errorFor('name') && <span id="error-name" className="inquiry-field__error">{errorFor('name')}</span>}
              </div>
              <div className="inquiry-field">
                <label htmlFor="inquiry-email">Email address <span>*</span></label>
                <input id="inquiry-email" type="email" autoComplete="email" required value={values.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errorFor('email')} aria-describedby={errorFor('email') ? 'error-email' : undefined} />
                {errorFor('email') && <span id="error-email" className="inquiry-field__error">{errorFor('email')}</span>}
              </div>
              <div className="inquiry-field">
                <label htmlFor="inquiry-phone">Phone number</label>
                <input id="inquiry-phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} />
                {errorFor('phone') && <span id="error-phone" className="inquiry-field__error">{errorFor('phone')}</span>}
              </div>
              <div className="inquiry-field">
                <label htmlFor="inquiry-kind">What do you need? <span>*</span></label>
                <select id="inquiry-kind" required value={values.kind} onChange={(e) => update('kind', e.target.value)} aria-invalid={!!errorFor('kind')} aria-describedby={errorFor('kind') ? 'error-kind' : undefined}>
                  <option value="">Choose a service</option>
                  <option value="Flight booking">Flight booking</option>
                  <option value="Hotel reservation">Hotel reservation</option>
                  <option value="Flight and hotel">Flight and hotel</option>
                </select>
                {errorFor('kind') && <span id="error-kind" className="inquiry-field__error">{errorFor('kind')}</span>}
              </div>
              <div className="inquiry-field">
                <label htmlFor="inquiry-destination">Destination <span>*</span></label>
                <input id="inquiry-destination" required placeholder="City or country" value={values.destination} onChange={(e) => update('destination', e.target.value)} aria-invalid={!!errorFor('destination')} aria-describedby={errorFor('destination') ? 'error-destination' : undefined} />
                {errorFor('destination') && <span id="error-destination" className="inquiry-field__error">{errorFor('destination')}</span>}
              </div>
              <div className="inquiry-field inquiry-field--split">
                <div>
                  <label htmlFor="inquiry-date">Travel date <span>*</span></label>
                  <input id="inquiry-date" type="date" min={localDateString()} required value={values.date} onChange={(e) => update('date', e.target.value)} aria-invalid={!!errorFor('date')} aria-describedby={errorFor('date') ? 'error-date' : undefined} />
                  {errorFor('date') && <span id="error-date" className="inquiry-field__error">{errorFor('date')}</span>}
                </div>
                <div>
                  <label htmlFor="inquiry-duration">Duration</label>
                  <input id="inquiry-duration" placeholder="e.g. 1 week" value={values.duration} onChange={(e) => update('duration', e.target.value)} />
                  {errorFor('duration') && <span id="error-duration" className="inquiry-field__error">{errorFor('duration')}</span>}
                </div>
              </div>
              <div className="inquiry-field">
                <label htmlFor="inquiry-keyword">Journey type</label>
                <input id="inquiry-keyword" placeholder="Pilgrimage, medical, trade fair…" value={values.keyword} onChange={(e) => update('keyword', e.target.value)} />
                {errorFor('keyword') && <span id="error-keyword" className="inquiry-field__error">{errorFor('keyword')}</span>}
              </div>
              <div className="inquiry-field inquiry-field--wide">
                <label htmlFor="inquiry-message">Anything else we should know?</label>
                <textarea id="inquiry-message" rows={3} placeholder="A little context helps us prepare." value={values.message} onChange={(e) => update('message', e.target.value)} />
                {errorFor('message') && <span id="error-message" className="inquiry-field__error">{errorFor('message')}</span>}
              </div>
            </div>
            <div className="inquiry-honeypot" aria-hidden="true">
              <label htmlFor="inquiry-website">Website</label>
              <input id="inquiry-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            <div className="inquiry-form__submit-row">
              <p>Fields marked <span>*</span> are required. No payment is taken here.</p>
              <button className="inquiry-submit" type="submit" disabled={sending}>
                {sending ? <><span className="inquiry-submit__dots" aria-hidden="true">···</span> Sending inquiry</> : <>Send inquiry <span aria-hidden="true">↗</span></>}
              </button>
            </div>
            {result && (
              <div className={`inquiry-status inquiry-status--${result.kind}`} role={result.kind === 'error' ? 'alert' : 'status'} aria-live="polite">
                <span className="inquiry-status__mark" aria-hidden="true">{result.kind === 'success' ? '✓' : '!'}</span>
                <div>
                  <strong>{result.kind === 'success' ? 'Inquiry received' : 'Not sent yet'}</strong>
                  <p>{result.message}</p>
                  {result.kind === 'success' && <p className="inquiry-status__awaiting">Your request is awaiting confirmation from the Fanoble team.</p>}
                  {result.kind === 'error' && result.emailLink && <button className="inquiry-email-link" type="button" onClick={() => window.location.assign(result.emailLink!)}>Open email app <span aria-hidden="true">↗</span></button>}
                </div>
              </div>
            )}
            {recipient && <p className="inquiry-recipient">Inquiries are directed to <span>{recipient}</span>.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
