import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RomeTours() {
  return (
    <>
      <Header />
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">ROME RELIGIOUS TOURS</h1>
              <p>Discover Vatican City and Early Christian Sites</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h2 className="big-heading">SPIRITUAL ROME EXPERIENCE</h2>
              <p style={{color: 'white'}}>
                Experience the heart of Christianity in Rome with visits to Vatican City, St. Peter's Basilica, the Sistine Chapel, and ancient Christian catacombs. Walk in the footsteps of early Christians and apostles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}