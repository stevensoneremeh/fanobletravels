'use client'

import { useEffect, useState } from 'react'

const slides = [
  { src: '/images-slider/img-slide-11.jpg', alt: 'Horse sculptures outside a landmark destination' },
  { src: '/images-slider/img-slide-1.jpg', alt: 'Aerial view of a destination coastline' },
  { src: '/images-slider/img-slide-2.jpg', alt: 'Pilgrims travelling through a historic destination' },
  { src: '/images-slider/img-slide-3.jpg', alt: 'Historic architecture and travel discovery' },
]

export default function PhotoCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="photo-carousel" aria-label="Fanoble travel photography">
      <div className="photo-carousel-frame">
        {slides.map((slide, index) => (
          <img key={slide.src} className={index === active ? 'is-active' : ''} src={slide.src} alt={slide.alt} />
        ))}
        <div className="photo-carousel-caption">
          <span className="eyebrow">The Fanoble way</span>
          <strong>Thoughtful journeys, beautifully arranged.</strong>
        </div>
      </div>
      <div className="photo-carousel-controls" aria-label="Choose featured image">
        {slides.map((slide, index) => (
          <button key={slide.src} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} aria-pressed={index === active} />
        ))}
      </div>
    </section>
  )
}
