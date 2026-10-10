import React from 'react'
import Header from '@/components/Header'
import HomeSlider from '@/components/HomeSlider'
import SearchSection from '@/components/SearchSection'
import Footer from '@/components/Footer'
import LegacyContent from '@/components/LegacyContent'
import HomeJourney from '@/components/HomeJourney'
import MilestoneSection from '@/components/MilestoneSection'
import './home-below-hero.css'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Home */}
      <div id="home">
        <HomeSlider />
      </div>
      
      <HomeJourney />
      <div className="journey-benefits">
        <MilestoneSection />
      </div>
      <SearchSection />
      <section className="home-legacy" aria-label="More from Fanoble">
        <LegacyContent source="home" mode="home" />
      </section>
      <Footer />
    </>
  )
}