'use client'

import { useEffect, useState } from 'react'

const slides = [
  { src: '/images-slider/img-slide-1.jpg', alt: 'Horse riding travel experience from the Fanoble archive' },
  { src: '/images-slider/img-slide-2.jpg', alt: 'Curated destination photography from the Fanoble archive' },
  { src: '/images-slider/img-slide-3.jpg', alt: 'Pilgrimage travel landscape from the Fanoble archive' },
  { src: '/images-slider/img-slide-11.jpg', alt: 'Thoughtful travel moment from the Fanoble archive' },
  { src: '/img/gallery-home/big/img4.jpg', alt: 'Historic destination travel experience' },
  { src: '/img/bg-commerce.JPG', alt: 'International business travel and commerce' },
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
