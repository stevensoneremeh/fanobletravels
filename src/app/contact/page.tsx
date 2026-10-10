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
      
      <div className="contact-shell">
        <div className="container-fluid m-5-hor">
          <div className="contact-grid">
            <div className="contact-card">
              <ContactForm />
            </div>
            <div className="contact-info">
                <h4>Contact Information</h4>
                <div className="subfooter-content-right">
                  89A, Terrace Wing, TBS Complex Race Course, Lagos Island, Lagos.
                </div>
                <div className="subfooter-content-right">
                  Phone: (+234) 8184414599
                </div>
                <div className="subfooter-content-right">
                  <a href="mailto:info@fanobletravels.com">Email: info@fanobletravels.com</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}