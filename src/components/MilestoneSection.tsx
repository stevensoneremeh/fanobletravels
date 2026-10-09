import React from 'react'

export default function MilestoneSection() {
  return (
    <section aria-label="milestone" className="no-top no-bottom color-page">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <div className="col-md-2 col-sm-6 col-xs-12 onStep" data-animation="fadeInUp" data-time="0">
            <div className="box-icon">
              <span className="icon-choose fa fa-plane"></span>
              <div className="text">
                <h3><span>IATA</span></h3>
                <p>ACCREDITED</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 onStep" data-animation="fadeInUp" data-time="150">
            <div className="box-icon">
              <span className="icon-choose fa fa-credit-card"></span>
              <div className="text">
                <h3><span>AFFORDABLE PRICE</span></h3>
                <p>YOU GET EXTRA VALUE FOR YOUR PAYMENT</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 onStep" data-animation="fadeInUp" data-time="300">
            <div className="box-icon">
              <span className="icon-choose fa fa-address-book"></span>
              <div className="text">
                <h3><span>GREAT CUSTOMERS</span></h3>
                <p>WE HAVE SO MUCH TESTIMONIES TO SHOW YOU CAN TRUST US</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 onStep" data-animation="fadeInUp" data-time="450">
            <div className="box-icon">
              <span className="icon-choose fa fa-handshake-o"></span>
              <div className="text">
                <h3><span>TRUSTED & SAFE</span></h3>
                <p>WE VALUE OUR REPUTATION AND AS A RESULT DO ONLY CERTAIN TRAVELS AND TOURS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}