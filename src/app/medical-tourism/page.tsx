import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MedicalTourism() {
  return (
    <>
      <Header />
      
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">MEDICAL TOURISM</h1>
              <p>World-class healthcare with travel packages</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h2 className="big-heading">Medical Tourism Services</h2>
              <p style={{color: 'white'}}>
                Fanoble Travels and Tours offers comprehensive medical tourism packages combining world-class healthcare with exceptional travel experiences. We partner with accredited medical facilities to provide quality healthcare services at affordable prices.
              </p>
              <p style={{color: 'white'}}>
                Our medical tourism services include specialized treatments, wellness programs, and recovery packages in top-rated international medical destinations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}