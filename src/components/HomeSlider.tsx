import React from 'react'

export default function HomeSlider() {
  return (
    <section className="no-top no-bottom" aria-label="section-slider">
      <div className="fullwidthbanner-container">
        <div id="revolution-slider-half">
          <ul>
            <li data-transition="parallaxtobottom" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
              <img src="/images-slider/img-slide-11.jpg" alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="120" data-bgfitend="100" data-bgpositionend="center center"/>
              <div className="tp-caption slide-big-heading sft"
                  data-x="center"
                  data-y="300"
                  data-speed="800"
                  data-start="400"
                  data-easing="easeInOutExpo"
                  data-endspeed="450" style={{color: 'rgb(5, 0, 0)'}}>
                  WELCOME TO FANOBLE TRAVELS AND TOURS
              </div>

              <div className="tp-caption slide-sub-heading sft"
                  data-x="center"
                  data-y="370"
                  data-speed="1000"
                  data-start="800"
                  data-easing="easeOutExpo"
                  data-endspeed="400" style={{color: 'black'}}>
                  A TRAVEL AND TOURISM COMPANY YOU CAN TRUST
              </div>
            </li>
            
            <li data-transition="parallaxtobottom" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
              <img src="/img/projects-color/biblical-archaeological-sites-gettyimages-542387438-promo.jpg" alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="120" data-bgfitend="100" data-bgpositionend="center center" />
              <div className="tp-caption slide-big-heading sft"
                  data-x="center"
                  data-y="300"
                  data-speed="800"
                  data-start="400"
                  data-easing="easeInOutExpo"
                  data-endspeed="450" style={{color: '#fc9f1c'}}>
                  RELIGIOUS TOURISM
              </div>

              <div className="tp-caption slide-sub-heading sft"
                  data-x="center"
                  data-y="370"
                  data-speed="1000"
                  data-start="800"
                  data-easing="easeOutExpo"
                  data-endspeed="400" style={{color: 'rgb(7, 1, 12)', fontWeight: 'bolder'}}>
                  <q style={{color: 'rgb(248, 238, 238)', fontSize:'large'}}>
                    Do you know there are more Biblical Sites around the World asides ISRAEL? Join us on a spiritual adventure that brings the Bible alive. Experience a deeper understanding of the scriptures and travel through the places in the Bible.
                  </q>
              </div>
            </li>
            
            <li data-transition="parallaxtobottom" data-slotamount="10" data-masterspeed="1200" data-delay="5000">
              <img src="/images-slider/img-slide-3.jpg" alt="" data-start="0" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-bgfit="120" data-bgfitend="100" data-bgpositionend="center center" />
              <div className="tp-caption slide-big-heading sft"
                  data-x="center"
                  data-y="300"
                  data-speed="800"
                  data-start="400"
                  data-easing="easeInOutExpo"
                  data-endspeed="450" style={{color: 'rgb(7, 0, 0)', fontSize: '30px'}}>
                GROUP AND INDIVIDUALS INTERNATIONAL TRADE FAIRS TOURISM
              </div>
            
              <div className="tp-caption slide-sub-heading sft"
                  data-x="center"
                  data-y="370"
                  data-speed="1000"
                  data-start="800"
                  data-easing="easeOutExpo"
                  data-endspeed="400" style={{color: 'rgb(229, 245, 3)'}}>
              </div>
            </li>
          </ul>
          <div className="tp-bannertimer hide"></div>
        </div>
      </div>
    </section>
  )
}