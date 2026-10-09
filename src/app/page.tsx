import React from 'react'
import Header from '@/components/Header'
import HomeSlider from '@/components/HomeSlider'
import MilestoneSection from '@/components/MilestoneSection'
import SearchSection from '@/components/SearchSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Home */}
      <div id="home">
        <HomeSlider />
      </div>
      
      <MilestoneSection />

      <section className="section destination-showcase" aria-labelledby="journeys-heading">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Curated with intention</span>
            <h2 id="journeys-heading">Journeys that stay with you.</h2>
            <p>From sacred landscapes to restorative escapes, every Fanoble itinerary is shaped around the reason you are travelling.</p>
          </div>
          <div className="destination-grid">
            <article className="destination-card destination-card-sacred">
              <div className="destination-card-copy"><span>01 / Pilgrimage</span><h3>Walk through wonder.</h3><a href="/tours/israel">Explore sacred journeys</a></div>
            </article>
            <article className="destination-card destination-card-wellness">
              <div className="destination-card-copy"><span>02 / Wellness</span><h3>Make room to heal.</h3><a href="/medical-tourism">Discover restorative travel</a></div>
            </article>
          </div>
        </div>
      </section>

      <SearchSection />
      
      <Footer />
    </>
  )
}
