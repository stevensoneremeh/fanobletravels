import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero, { SectionHeading } from '@/components/PageHero'

export default function MedicalTourism() {
  return <><Header /><main><PageHero eyebrow="Care beyond borders" title="Medical tourism, made personal" description="Coordinated care, calm logistics, and restorative travel support for every step of your journey." image="/img/medical-tourism.jpg" /><section className="content-section"><div className="container-fluid split-layout"><SectionHeading eyebrow="Our service" title="Healthcare with a softer landing" /><div className="prose"><p>Fanoble Travels and Tours offers comprehensive medical tourism packages combining world-class healthcare with exceptional travel experiences. We partner with accredited medical facilities to provide quality healthcare services at affordable prices.</p><p>Our medical tourism services include specialized treatments, wellness programs, and recovery packages in top-rated international medical destinations.</p><div className="feature-grid"><div><b>01</b><strong>Trusted coordination</strong><span>We help you move from consultation to arrival with clarity.</span></div><div><b>02</b><strong>Recovery-minded travel</strong><span>Comfortable stays and thoughtful support around your care.</span></div></div></div></div></section></main><Footer /></>
}
