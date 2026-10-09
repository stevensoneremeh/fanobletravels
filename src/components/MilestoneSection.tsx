import React from 'react'

const trustPoints = [
  {
    number: '01',
    icon: 'fa-plane',
    title: 'IATA accredited',
    copy: 'A globally recognised standard for reliable travel expertise and ticketing.',
    original: 'ACCREDITED',
  },
  {
    number: '02',
    icon: 'fa-credit-card',
    title: 'Affordable value',
    copy: 'You get extra value for every payment, with considered options for every budget.',
    original: 'YOU GET EXTRA VALUE FOR YOUR PAYMENT',
  },
  {
    number: '03',
    icon: 'fa-address-book',
    title: 'Great customers',
    copy: 'Our clients return because thoughtful service is part of every journey we plan.',
    original: 'WE HAVE SO MUCH TESTIMONIES TO SHOW YOU CAN TRUST US',
  },
  {
    number: '04',
    icon: 'fa-handshake-o',
    title: 'Trusted & safe',
    copy: 'We protect our reputation by selecting journeys, partners, and details with care.',
    original: 'WE VALUE OUR REPUTATION AND AS A RESULT DO ONLY CERTAIN TRAVELS AND TOURS',
  },
]

export default function MilestoneSection() {
  return (
    <section aria-labelledby="why-fanoble" className="no-top no-bottom color-page milestone-section">
      <div className="container-fluid m-5-hor">
        <div className="milestone-intro" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '32px', padding: 'clamp(48px, 8vw, 96px) 0 40px', flexWrap: 'wrap' }}>
          <div>
            <p className="eyebrow">The Fanoble standard</p>
            <h2 id="why-fanoble">Go further with a team that knows the way.</h2>
          </div>
          <p className="milestone-lede">From the first conversation to the moment you return home, we make international travel feel clear, considered, and wonderfully personal.</p>
        </div>
        <div className="row milestone-grid">
          {trustPoints.map((point) => (
            <div key={point.number} className="col-md-3 col-sm-6 col-xs-12 onStep" data-animation="fadeInUp">
              <article className="box-icon milestone-card">
                <div className="milestone-card-top"><span className="milestone-number">{point.number}</span><span aria-hidden="true" className={`icon-choose fa ${point.icon}`} /></div>
                <div className="text"><h3>{point.title}</h3><p>{point.copy}</p><span className="sr-only">Original detail: {point.original}</span></div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
