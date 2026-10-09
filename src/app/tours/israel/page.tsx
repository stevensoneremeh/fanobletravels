import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IsraelTours() {
  return (
    <>
      <Header />
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">ISRAEL RELIGIOUS TOURS</h1>
              <p>Visit the Holy Land - Birthplace of Christianity</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h2 className="big-heading">EXPLORE THE HOLY LAND</h2>
              <p style={{color: 'white'}}>
                Journey through the Holy Land with Fanoble Travels and Tours. Visit Jerusalem, Bethlehem, Nazareth, and other sacred sites where biblical history comes alive. Experience the birthplace of Jesus, walk where He walked, and discover the rich spiritual heritage of Israel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}