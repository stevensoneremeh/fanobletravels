'use client'
import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

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
      if (result.status === 'success') {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{padding: '20px', backgroundColor: 'white', borderRadius: '8px', margin: '20px'}}>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{marginBottom: '15px'}}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
          />
        </div>
        
        <div className="form-group" style={{marginBottom: '15px'}}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
          />
        </div>
        
        <div className="form-group" style={{marginBottom: '15px'}}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
          />
        </div>
        
        <div className="form-group" style={{marginBottom: '15px'}}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical'}}
          />
        </div>
        
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: '#fc9f1c',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
        
        {status && (
          <div style={{marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px'}}>
            {status}
          </div>
        )}
      </form>
    </div>
  )
}