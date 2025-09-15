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
      <SearchSection />
      
      <Footer />
    </>
  )
}