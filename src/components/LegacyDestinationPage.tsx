import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero, { SectionHeading } from '@/components/PageHero'

type Props = { eyebrow: string; title: string; description: string; image: string; intro: string; highlights: readonly string[] }

export default function LegacyDestinationPage({ eyebrow, title, description, image, intro, highlights }: Props) {
  return <><Header /><main><PageHero eyebrow={eyebrow} title={title} description={description} image={image} /><section className="content-section"><div className="container-fluid split-layout"><SectionHeading eyebrow="Designed around you" title={intro} /><div className="prose"><p>Fanoble Travels and Tours connects you with meaningful places through thoughtful planning, reliable support and itineraries that respect your time and purpose.</p><div className="legacy-highlights">{highlights.map((item) => <div className="info-card" key={item}><strong>{item}</strong><span>Carefully coordinated arrangements, clear guidance and a warm local welcome.</span></div>)}</div></div></div></section></main><Footer /></>
}

export const destinationData = {
  turkey: { eyebrow: 'Religious tourism', title: 'Turkey, where history and faith meet', description: 'Walk through ancient cities, sacred landmarks and the living heritage of the early church.', image: '/img/bg-subheaderturkeyreligioustours.jpg', intro: 'A pilgrimage through remarkable biblical landscapes', highlights: ['Ephesus and Antioch', 'Cappadocia and Tarsus', 'Hagia Sophia and Istanbul'] },
  greece: { eyebrow: 'Religious tourism', title: 'Greece, stories across the Aegean', description: 'Discover the places where classical history, early Christianity and island beauty come together.', image: '/img/bg-subheadergreece.jpg', intro: 'Travel deeper into Greece', highlights: ['Athens and Corinth', 'Patmos and the Aegean', 'Guided cultural discovery'] },
  egypt: { eyebrow: 'Religious tourism', title: 'Egypt, an ancient story renewed', description: 'Experience monasteries, desert landscapes and the remarkable heritage of a timeless civilization.', image: '/img/bg-subheaderegypt.jpg', intro: 'A considered journey through Egypt', highlights: ['Cairo and the Nile', 'Sinai and St. Catherine', 'Ancient Christian heritage'] },
} as const
