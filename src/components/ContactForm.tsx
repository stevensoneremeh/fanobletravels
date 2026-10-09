'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (event: React.FormEvent) => { event.preventDefault(); setStatus('Sending your message…'); try { const payload = new FormData(); Object.entries(formData).forEach(([key, value]) => payload.append(key, value)); const response = await fetch('/api/contact', { method: 'POST', body: payload }); const result = await response.json(); if (result.status === 'success') { setStatus('Message sent successfully. We will be in touch shortly.'); setFormData({ name: '', email: '', subject: '', message: '' }) } else setStatus('We could not send your message. Please try again.') } catch { setStatus('We could not send your message. Please try again.') } }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-grid"><label>Full name<input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" /></label><label>Email address<input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@example.com" /></label></div>
    <label>How can we help?<input name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required placeholder="Tell us what you are planning" /></label>
    <label>Your message<textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} placeholder="Dates, destinations, group size or any questions…" /></label>
    <button className="button button-dark" type="submit">Send enquiry <span>↗</span></button>{status && <p className="form-note" role="status">{status}</p>}
  </form>
}
