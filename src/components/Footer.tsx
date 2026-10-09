import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Subfooter */}
      <section aria-label="subfooter" className="subfooter no-bottom">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-4">
              <div className="wrap-subfooter">
                <h4>Mission Statement</h4>
                <div className="subfooter-content-left">
                  At Fanoble Travels and Tours Nigeria Limited, we are committed to providing exceptional and hassle free travel experience that is memorable, inspiring and connects you to the world. Our mission is to guide our clients on journeys through our well-tailored travel packages, for individuals, groups and professionals. We strive to deliver personalized, seamless, and enriching travel experiences, ensuring every journey with us is a step towards a memorable and fulfilling experience.
                </div>
                <span className="logo">
                  <img alt="logo" src="/img/logo-white.png" />
                </span>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="wrap-subfooter">
                <h4 style={{whiteSpace: 'nowrap', color: '#f19305', fontSize: 'xx-large'}}>
                  <p>KEY PLACES YOU WOULD VISIT IN ISRAEL</p>
                </h4>
                <div className="tag-country">
                  <a href="#" className="list-country">BIRTH PLACE OF JESUS</a>
                  <a href="#" className="list-country">JERUSALEM:THE HOLY CITY</a>
                  <a href="#" className="list-country">BAPTISMAL PLACE OF JESUS</a>
                  <a href="#" className="list-country">THE SYNAGOGUE</a>
                </div>
              </div>  
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="wrap-subfooter">
                <h4>Contact Info</h4>
                <div className="subfooter-content-right">89A, Terrace Wing, TBS Complex Race Course, Lagos Island, Lagos.</div>
                <div className="subfooter-content-right">Phone: (+234) 8184414599</div>
                <div className="subfooter-content-right"><a href="#">Email: info@fanobletravels.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="alt">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <div className="col-md-6 text-left">
              <span>Copyright - EREMEH 2024</span>
            </div>
            <div className="col-md-6 text-right">
              <div className="social-icons-subnav">
                <a href="#"><span className="ti-facebook"></span></a>
                <a href="#"><span className="ti-dribbble"></span></a>
                <a href="#"><span className="ti-twitter"></span></a>
                <a href="#"><span className="ti-instagram"></span></a>
                <a href="#"><span className="ti-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ScrolltoTop */}
      <div id="totop" className="init">
        <span className="ti-angle-up"></span>
      </div>
    </>
  )
}