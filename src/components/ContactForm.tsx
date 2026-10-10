'use client'
import React, { useEffect, useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const name = query.get('name')
    const email = query.get('email')
    const subject = query.get('subject')
    const message = query.get('message')
    if (name || email || subject || message) setFormData(current => ({...current, name: name || current.name, email: email || current.email, subject: subject || current.subject, message: message || current.message}))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setStatusMessage('Sending your message…')

    try {
      const formDataObj = new FormData()
      formDataObj.append('name', formData.name)
      formDataObj.append('email', formData.email)
      formDataObj.append('subject', formData.subject)
      formDataObj.append('message', formData.message)

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataObj
      })

      const result = await response.json()
      if (response.ok && result.status === 'success') {
        setStatus('success')
        setStatusMessage('Your message has been sent. We’ll be in touch soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setStatusMessage('We couldn’t send your message. Please try again.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('A connection issue stopped your message from sending. Check your connection and try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(current => ({
      ...current,
      [e.target.name]: e.target.value
    }))
    if (status === 'error') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  return (
    <div className="contact-form-panel">
      <h3 id="contact-form-title">Contact Us</h3>
      <p className="contact-form-intro">Tell us where you’re headed. Our team will help with the next step.</p>
      <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title" aria-busy={status === 'sending'}>
        <div className="contact-form-fields">
        <div className="contact-form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form-control"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>
        
        <div className="contact-form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form-control"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        
        <div className="contact-form-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="contact-form-control"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="contact-form-field contact-form-field-wide">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-form-control contact-form-message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <button
          type="submit"
          className="contact-form-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending message…' : 'Send Message'}
        </button>
        {status !== 'idle' && (
          <div className={`contact-form-status is-${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live={status === 'error' ? 'assertive' : 'polite'} aria-atomic="true">
            <span className="contact-form-status-mark" aria-hidden="true">{status === 'success' ? '✓' : status === 'error' ? '!' : '·'}</span>
            <span>{statusMessage}</span>
          </div>
        )}
      </form>
    </div>
  )
}