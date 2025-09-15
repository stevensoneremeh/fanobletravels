import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ChinaFairs() {
  return (
    <>
      <Header />
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">CHINA INTERNATIONAL TRADE FAIRS</h1>
              <p>Business opportunities in the world's largest market</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h2 className="big-heading">CHINA TRADE FAIR PACKAGES</h2>
              <p style={{color: 'white'}}>
                Join major international trade fairs in China including the Canton Fair, Shanghai exhibitions, and industry-specific trade shows. Network with global businesses and explore new market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}