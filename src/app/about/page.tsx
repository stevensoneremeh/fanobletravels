import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero, { SectionHeading } from '@/components/PageHero'

export default function About() {
  return <><Header /><main>
    <PageHero eyebrow="Our story" title="Travel with meaning" description="Thoughtful journeys, practical expertise, and a human touch from Lagos to the world." image="/img/bg-subheaderfanobleabout.jpg" />
    <section className="content-section"><div className="container-fluid split-layout"><div><SectionHeading eyebrow="About Fanoble" title="A better way to see the world" /></div><div className="prose"><p>At Fanoble Travels and Tours Nigeria Limited, we are committed to providing exceptional and hassle-free travel experiences that are memorable, inspiring and connect you to the world. Our mission is to guide our clients on journeys through our well-tailored travel packages, for individuals, groups and professionals.</p><p>We strive to deliver personalized, seamless, and enriching travel experiences, ensuring every journey with us is a step towards a memorable and fulfilling experience. As an IATA accredited travel agency, we maintain the highest standards of service and reliability.</p><div className="info-card"><strong>Ready to go further?</strong><span>Tell us what a meaningful trip looks like to you.</span><Link href="/contact">Talk to a travel consultant ↗</Link></div></div></div></section>
  </main><Footer /></>
}
