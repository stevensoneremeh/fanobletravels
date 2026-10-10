import React from 'react'
import Header from '@/components/Header'
import HomeSlider from '@/components/HomeSlider'
import MilestoneSection from '@/components/MilestoneSection'
import SearchSection from '@/components/SearchSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import LegacyContent from '@/components/LegacyContent'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Home */}
      <div id="home">
        <HomeSlider />
      </div>
      
      <MilestoneSection />
      <section className="home-intro">
        <div className="container-fluid m-5-hor home-intro-inner">
          <div>
            <span className="eyebrow">TRAVEL WITH CLARITY</span>
            <h2>From a long-held dream to a journey that feels possible.</h2>
            <p>Fanoble Travels and Tours helps pilgrims, medical travellers and trade-fair visitors confidently explore the world. Thoughtful planning, trusted guidance and a human point of contact keep every important detail in view.</p>
            <Link className="fanoble-button" href="/about">ABOUT FANOBLE</Link>
          </div>
          <div className="home-intro-art"><img src="/img/img-top-rated.jpg" alt="A featured travel destination" /></div>
        </div>
      </section>
      <SearchSection />
      <section className="destination-strip">
        <div className="container-fluid m-5-hor">
          <span className="eyebrow">PLACES THAT STAY WITH YOU</span>
          <h2>Find your reason to go.</h2>
          <div className="destination-links">
            <Link href="/tours/israel">ISRAEL</Link><Link href="/tours/rome">ROME</Link><Link href="/tours/greece">GREECE</Link><Link href="/tours/turkey">TURKEY</Link><Link href="/tours/egypt">EGYPT</Link><Link href="/tours/jordan">JORDAN</Link><Link href="/fairs/china">CHINA FAIRS</Link><Link href="/medical-tourism">MEDICAL TOURISM</Link>
          </div>
        </div>
      </section>
      <LegacyContent source="home" mode="home" />
      <Footer />
    </>
  )
}