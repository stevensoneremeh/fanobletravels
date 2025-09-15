import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function JordanTours() {
  return (
    <>
      <Header />
      
      {/* Subheader */}
      <section id="subheader">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-heading">JORDAN RELIGIOUS TOUR</h1>
              <p>VISIT BIBLICAL SITES IN JORDAN</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="dark-page">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-12 onStep" data-animation="fadeInLeft" data-time="0">
              <h2 className="big-heading">RELIGIOUS TOURISM TO JORDAN</h2>
              <span className="sub-heading-content">VISIT JORDAN WITH FANOBLE TRAVELS AND TOURS</span>
              <span className="devider-left"></span>
              
              <p style={{color: 'white'}}>
                Welcome to Fanoble Travels and Tours, where we invite you to embark on a spiritual and historical journey through the heart of the Holy Land with our exclusive tourism package to Jordan. This tour offers a unique opportunity to explore the ancient sites that have shaped religious history, including Mount Nebo, the Jordan River, Madaba, Petra, and the Dead Sea.
              </p>
              
              <p style={{color: 'white'}}>
                Begin your journey at Mount Nebo, where Moses was granted a view of the Promised Land, as described in Deuteronomy 34:1-4. Experience the spiritual resonance at the Jordan River, where Jesus was baptized by John the Baptist, as recorded in Matthew 3:13-17, Mark 1:9-11, and Luke 3:21-22. Explore Madaba, the city of mosaics, and see the Madaba Map, a 6th-century mosaic depicting the Holy Land, with biblical roots mentioned in Numbers 21:30. Venture into Petra, a UNESCO World Heritage site and one of the New Seven Wonders of the World, known for its rock-cut architecture and biblical reference as Sela in 2 Kings 14:7. Conclude your journey with a visit to the Dead Sea, the lowest point on Earth, known for its healing properties and unique buoyancy, as referenced in Genesis 14:3.
              </p>
              
              <p style={{color: 'white'}}>
                At Fanoble Travels and Tours, we provide an enriching and unforgettable travel experience with knowledgeable guides, comfortable accommodations, and carefully planned itineraries. Join us on this remarkable journey through Jordan and let the stories of the Bible come to life before your eyes. Discover the land of prophets, miracles, and timeless beauty with Fanoble Travels and Tours. For more information and to book your tour, please visit our website or contact our dedicated travel consultants.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="onStep" data-animation="fadeInUp" data-time="0">
              <div id="owl-gal" className="owl-carousel">
                <div className="item">
                  <div className="gal-home">
                    <div className="projects-grid">
                      <div className="hovereffect-color">
                        <img src="/img/projects-color -jordan/Jordan_River_by_Bethany_beyond_Jordan,_tb060303268 leprosy.jpg" alt="" className="w-gallery-image" />
                        <div className="overlay">
                          <div className="v-align wrap">
                            <p>RIVER JORDAN</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="item">
                  <div className="gal-home">
                    <div className="projects-grid">
                      <div className="hovereffect-color">
                        <img src="/img/projects-color -jordan/Lots-Cave-01_credit-Shutterstock.jpg" alt="" className="w-gallery-image" />
                        <div className="overlay">
                          <div className="v-align wrap">
                            <p>LOTS CAVE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="item">
                  <div className="gal-home">
                    <div className="projects-grid">
                      <div className="hovereffect-color">
                        <img src="/img/projects-color -jordan/Main-Dead Sea.jpg" alt="" className="w-gallery-image" />
                        <div className="overlay">
                          <div className="v-align wrap">
                            <p>EXPERIENCE THE WONDERS OF THE DEAD SEA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="item">
                  <div className="gal-home">
                    <div className="projects-grid">
                      <div className="hovereffect-color">
                        <img src="/img/projects-color -jordan/Mount_Nebo-Religion__Faith-1-1.jpg" alt="" className="w-gallery-image" />
                        <div className="overlay">
                          <div className="v-align wrap">
                            <p>MOUNT NEBO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="no-top">
        <div className="container-fluid m-5-hor">
          <div className="row goldpage">
            <div className="col-lg-9 col-md-12 text-center">
              <h3>Looking for a quality and unforgettable Travel Destination for your next vacation?</h3>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="btn-content">
                <span className="shine"></span>
                <a href="/contact">Let us know</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}