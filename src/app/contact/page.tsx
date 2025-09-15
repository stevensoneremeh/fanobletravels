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
      
      <div style={{backgroundColor: 'gray', minHeight: '80vh'}}>
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-8">
              <ContactForm />
            </div>
            <div className="col-md-4">
              <div className="wrap-subfooter" style={{color: 'white', padding: '20px'}}>
                <h4>Contact Information</h4>
                <div className="subfooter-content-right" style={{marginBottom: '15px'}}>
                  89A, Terrace Wing, TBS Complex Race Course, Lagos Island, Lagos.
                </div>
                <div className="subfooter-content-right" style={{marginBottom: '15px'}}>
                  Phone: (+234) 8184414599
                </div>
                <div className="subfooter-content-right">
                  <a href="mailto:info@fanobletravels.com">Email: info@fanobletravels.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}