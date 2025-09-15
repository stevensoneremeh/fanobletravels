import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">ABOUT US</h1>
              <p>Learn more about Fanoble Travels and Tours</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h2 className="big-heading">About Fanoble Travels and Tours</h2>
              <p style={{color: 'white'}}>
                At Fanoble Travels and Tours Nigeria Limited, we are committed to providing exceptional and hassle-free travel experiences that are memorable, inspiring and connect you to the world. Our mission is to guide our clients on journeys through our well-tailored travel packages, for individuals, groups and professionals.
              </p>
              <p style={{color: 'white'}}>
                We strive to deliver personalized, seamless, and enriching travel experiences, ensuring every journey with us is a step towards a memorable and fulfilling experience. As an IATA accredited travel agency, we maintain the highest standards of service and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}