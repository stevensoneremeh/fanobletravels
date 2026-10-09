'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const slides = [
  { image: '/images-slider/img-slide-11.jpg', eyebrow: 'Travel with intention', title: 'Journeys worth remembering.', text: 'From meaningful pilgrimages to well-planned international experiences, we make the world feel closer.', link: '/about' },
  { image: '/img/projects-color/biblical-archaeological-sites-gettyimages-542387438-promo.jpg', eyebrow: 'Religious tourism', title: 'Walk through living history.', text: 'Join us on a spiritual adventure that brings the Bible alive across the places and stories that shaped it.', link: '/tours/israel' },
  { image: '/images-slider/img-slide-3.jpg', eyebrow: 'Trade fair travel', title: 'Go further for business.', text: 'Travel with a trusted partner for international exhibitions, sourcing trips, and professional discovery.', link: '/fairs/china' },
]

export default function HomeSlider() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000); return () => window.clearInterval(timer) }, [])
  const slide = slides[active]
  return <section className="hero" aria-label="Featured travel experiences">
    <div className="hero-image" style={{ backgroundImage: `url(${slide.image})` }} />
    <div className="hero-shade" />
    <div className="container-fluid hero-content"><div className="hero-copy">
      <p className="eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p className="hero-text">{slide.text}</p><Link className="button button-light" href={slide.link}>Explore the experience <span>↗</span></Link>
    </div><div className="hero-meta"><span>0{active + 1} / 0{slides.length}</span><div className="hero-dots">{slides.map((item, index) => <button key={item.title} aria-label={`Show slide ${index + 1}`} className={index === active ? 'active' : ''} onClick={() => setActive(index)} />)}</div></div></div>
  </section>
}
