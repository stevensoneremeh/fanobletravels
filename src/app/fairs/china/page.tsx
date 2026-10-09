import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero, { SectionHeading } from '@/components/PageHero'

export default function ChinaFairs() {
  return <><Header /><main><PageHero eyebrow="Business travel" title="Meet opportunity in China" description="Travel confidently to the Canton Fair, Shanghai exhibitions, and the markets shaping tomorrow." image="/img/bg-subheaderchinafairs.jpg" /><section className="content-section"><div className="container-fluid split-layout"><SectionHeading eyebrow="International fairs" title="Turn a trade visit into momentum" /><div className="prose"><p>Join major international trade fairs in China including the Canton Fair, Shanghai exhibitions, and industry-specific trade shows. Network with global businesses and explore new market opportunities.</p><div className="feature-grid"><div><b>01</b><strong>Plan with purpose</strong><span>Flights, accommodation, transfers and fair dates aligned.</span></div><div><b>02</b><strong>Travel prepared</strong><span>Practical guidance for a productive, confident visit.</span></div></div></div></div></section></main><Footer /></>
}
