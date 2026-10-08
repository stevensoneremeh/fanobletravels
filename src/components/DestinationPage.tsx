'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

type DestinationPageProps = {
  eyebrow: string
  title: string
  intro: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
}

export default function DestinationPage({ eyebrow, title, intro, description, highlights, image, imageAlt }: DestinationPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="destination-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,28,44,.9), rgba(8,28,44,.42)), url('${image}')` }}>
          <div className="container destination-hero-content">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>
        <section className="section destination-story">
          <div className="container destination-grid">
            <div>
              <span className="eyebrow eyebrow-dark">Curated journeys</span>
              <h2>Travel with meaning, comfort and confidence.</h2>
              <p>{description}</p>
              <a className="button" href="/contact">Plan this journey</a>
            </div>
            <div className="highlight-card">
              <span className="card-kicker">Your experience includes</span>
              <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="destination-image-section">
          <div className="container destination-image-wrap">
            <img src={image} alt={imageAlt} />
            <div className="image-caption"><span>Fanoble Travels & Tours</span><strong>Make room for the extraordinary.</strong></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const destinationContent = {
  jordan: { eyebrow: 'Jordan · Sacred landscapes', title: 'A deeper way to discover Jordan.', intro: 'Walk through biblical landscapes, ancient cities and restorative shores on a thoughtfully paced spiritual journey.', description: 'From Mount Nebo and the Jordan River to Madaba, Petra and the Dead Sea, this itinerary connects living history with warm local hospitality. Our team takes care of the details so you can stay present for the places that matter.', highlights: ['Mount Nebo and the Promised Land viewpoint', 'Jordan River baptism site and Madaba mosaics', 'Petra, the Rose City, with expert local guidance', 'Dead Sea wellness and comfortable accommodation'], image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=85', imageAlt: 'Ancient sandstone architecture in Jordan' },
  rome: { eyebrow: 'Rome · Faith and history', title: 'Meet the stories that shaped Rome.', intro: 'A considered journey through Vatican City, early Christian landmarks and the timeless streets of the Eternal City.', description: 'Explore Rome through its sacred art, architecture and living traditions. From St. Peter's Basilica and the Sistine Chapel to the quiet catacombs beyond the crowds, every day is designed to feel enriching rather than rushed.', highlights: ['Vatican Museums and the Sistine Chapel', 'St. Peter's Basilica and key Christian landmarks', 'Early Christian catacombs with a specialist guide', 'Handpicked stays and seamless transfers'], image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1800&q=85', imageAlt: 'The Colosseum in Rome at golden hour' },
  china: { eyebrow: 'China · Global opportunity', title: 'Turn a trade visit into momentum.', intro: 'Travel smarter for the Canton Fair and China's leading exhibitions with a reliable business travel partner.', description: 'We combine exhibition access support, visa guidance, airport transfers and carefully selected hotels so your team can focus on conversations that move business forward. Extend the trip with cultural experiences that make the journey memorable.', highlights: ['Canton Fair and major Shanghai exhibitions', 'Business visa and invitation letter guidance', 'Hotel, airport transfer and interpreter support', 'Optional city experiences for your team'], image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=85', imageAlt: 'Shanghai skyline at dusk' },
  medical: { eyebrow: 'Medical travel · Care without borders', title: 'A calmer path to specialist care.', intro: 'Coordinate treatment, travel and recovery with a human team that keeps your wellbeing at the centre.', description: 'Our medical travel service helps patients and families navigate trusted international care with clarity. We coordinate consultations, accommodation, airport assistance and recovery planning around your clinical needs.', highlights: ['Pre-travel consultation and care coordination', 'Connections to accredited medical facilities', 'Comfortable accommodation for patients and companions', 'Wellness-focused recovery and local support'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85', imageAlt: 'Doctor speaking with a patient in a bright clinic' }
}

export type DestinationKey = keyof typeof destinationContent

export function DestinationRoute({ page }: { page: DestinationKey }) {
  return <DestinationPage {...destinationContent[page]} />
}

export function LoadingScreen() {
  return <div className="site-loader" role="status" aria-label="Loading Fanoble Travels"><span className="loader-mark">F</span><span className="loader-line" /></div>
}

export function destinationImageFor(page: DestinationKey) {
  return destinationContent[page].image
}
