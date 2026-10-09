import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Header />
      
      {/* Subheader */}
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">CONTACT US</h1>
              <p>Get in touch with our travel experts</p>
            </div>
          </div>
        </div>
      </section>
      
      <main className="contact-page">
        <div className="container-fluid">
          <div className="contact-layout">
            <ContactForm />
            <aside className="contact-aside">
              <span className="eyebrow">Fanoble concierge</span>
              <h2>Consider this your first step.</h2>
              <p>From a quiet escape to a meaningful pilgrimage, we make the details feel effortless and the journey deeply personal.</p>
              <div className="contact-detail"><strong>Visit us</strong><span>89A Terrace Wing, TBS Complex<br />Race Course, Lagos Island</span></div>
              <div className="contact-detail"><strong>Call</strong><a href="tel:+2348184414599">(+234) 818 441 4599</a></div>
              <div className="contact-detail"><strong>Email</strong><a href="mailto:info@fanobletravels.com">info@fanobletravels.com</a></div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
