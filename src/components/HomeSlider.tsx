import Link from 'next/link'

export default function HomeSlider() {
  return <section className="hero" aria-label="Discover your next journey"><div className="hero-content">
    <span className="eyebrow">Travel beyond the itinerary</span>
    <h1>Go further.<br /><em>Feel more.</em></h1>
    <p>Personal travel planning for sacred places, restorative care and the world&apos;s most important business gatherings.</p>
    <div><Link className="button" href="/contact">Start planning</Link><Link className="button secondary" href="/about">Meet Fanoble</Link></div>
  </div></section>
}
