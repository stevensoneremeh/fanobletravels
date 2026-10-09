'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchSection() {
  const [submitted, setSubmitted] = useState(false)
  return <section className="booking-section"><div className="container-fluid"><div className="booking-intro"><p className="eyebrow">Start planning</p><h2>Tell us where you want to go.</h2><p>Flights, stays, guided tours and thoughtful details — share a few ideas and our team will shape the route.</p></div><form className="booking-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
    <label>What are you looking for?<select required defaultValue=""><option value="" disabled>Select a service</option><option>Flight ticket booking</option><option>Hotel reservation</option><option>Religious tourism</option><option>International trade fair</option><option>Medical tourism</option></select></label>
    <label>Destination<select required defaultValue=""><option value="" disabled>Choose a region</option><option>Europe</option><option>Middle East</option><option>Asia</option><option>Africa</option><option>America</option></select></label>
    <label>Preferred date<input type="date" required /></label><button className="button button-dark" type="submit">Find your journey <span>↗</span></button>
  </form>{submitted && <p className="form-note" role="status">Thank you — your preferences are ready. <Link href="/contact">Continue with our travel team.</Link></p>}</div></section>
}
