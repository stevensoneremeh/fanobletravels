import Link from 'next/link'

const pathways = [
  {
    number: '01',
    label: 'PILGRIMAGE',
    title: 'Make room for what matters.',
    copy: 'From sacred sites to the practical details around them, plan a pilgrimage with a real person beside you.',
    link: '/tours/israel',
    linkText: 'Explore pilgrimage tours',
    className: 'journey-card journey-card--pilgrimage',
  },
  {
    number: '02',
    label: 'MEDICAL TRAVEL',
    title: 'Care, with a clear way forward.',
    copy: 'Talk through the journey around your care: where you need to go, when, and what support would help.',
    link: '/medical-tourism',
    linkText: 'Discover medical travel',
    className: 'journey-card journey-card--medical',
  },
  {
    number: '03',
    label: 'TRADE FAIRS',
    title: 'Go where business is happening.',
    copy: 'Prepare for international exhibitions with travel planning that keeps your purpose in focus.',
    link: '/fairs/china',
    linkText: 'Explore China fairs',
    className: 'journey-card journey-card--trade',
  },
]

export default function HomeJourney() {
  return (
    <>
      <section className="journey-intro">
        <div className="journey-intro__inner">
          <div className="journey-intro__index" aria-hidden="true">
            <span>F / T</span>
            <i />
            <span>01—03</span>
          </div>
          <div className="journey-intro__copy">
            <span className="journey-kicker">TRAVEL WITH CLARITY · PLAN WITH PEOPLE</span>
            <h2>A journey begins<br />long before take-off.</h2>
            <p>Some journeys carry a calling. Others carry a hope for better care, or a business ready to meet the world. Fanoble helps Nigerian travellers make the important plans with thoughtful guidance and a human point of contact.</p>
            <Link className="journey-text-link" href="/about">A little more about Fanoble <span aria-hidden="true">↗</span></Link>
          </div>
          <figure className="journey-intro__photo">
            <img src="/img/curated/acropolis-athens.webp" alt="The Acropolis above Athens, Greece" />
            <figcaption><span>GREECE</span><span>A place to begin again</span></figcaption>
          </figure>
          <div className="journey-intro__note">
            <span className="journey-note-mark" aria-hidden="true">“</span>
            <p>Purpose first.<br />The details, together.</p>
            <span className="journey-note-rule" />
          </div>
        </div>
      </section>

      <section className="journey-pathways" aria-labelledby="pathways-heading">
        <div className="journey-pathways__head">
          <div>
            <span className="journey-kicker">THREE REASONS TO GO</span>
            <h2 id="pathways-heading">A different kind<br />of journey needs a<br /><em>different kind of care.</em></h2>
          </div>
          <p>Start with what brings you here. We’ll help you work through the travel details from there.</p>
        </div>
        <div className="journey-pathways__grid">
          {pathways.map((pathway) => (
            <article className={pathway.className} key={pathway.number}>
              <div className="journey-card__top"><span>{pathway.number}</span><span className="journey-card__line" /></div>
              <div className="journey-card__body">
                <span className="journey-card__label">{pathway.label}</span>
                <h3>{pathway.title}</h3>
                <p>{pathway.copy}</p>
                <Link href={pathway.link} className="journey-card__link">{pathway.linkText}<span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="journey-pathways__foot"><span>THE FANOBLE APPROACH</span><span>A thoughtful conversation is a good place to start.</span></div>
      </section>

      <section className="journey-world" aria-labelledby="world-heading">
        <div className="journey-world__visual">
          <img src="/img/curated/flight-sunset.webp" alt="A view of the wing above the clouds at sunset" />
          <div className="journey-world__caption"><span>THE WORLD, AT YOUR PACE</span><span>Begin with a conversation</span></div>
        </div>
        <div className="journey-world__copy">
          <span className="journey-kicker">PLACES THAT STAY WITH YOU</span>
          <h2 id="world-heading">Where would<br />you like to go?</h2>
          <p>Explore a few of the places and purposes we can help you plan for. Every trip starts with your own reason for going.</p>
          <nav className="journey-destinations" aria-label="Explore destinations and travel">
            <Link href="/tours/israel"><span>01</span>Israel<span aria-hidden="true">↗</span></Link>
            <Link href="/tours/rome"><span>02</span>Rome<span aria-hidden="true">↗</span></Link>
            <Link href="/tours/greece"><span>03</span>Greece<span aria-hidden="true">↗</span></Link>
            <Link href="/tours/turkey"><span>04</span>Turkey<span aria-hidden="true">↗</span></Link>
            <Link href="/tours/egypt"><span>05</span>Egypt<span aria-hidden="true">↗</span></Link>
            <Link href="/tours/jordan"><span>06</span>Jordan<span aria-hidden="true">↗</span></Link>
            <Link href="/fairs/china"><span>07</span>China fairs<span aria-hidden="true">↗</span></Link>
            <Link href="/medical-tourism"><span>08</span>Medical travel<span aria-hidden="true">↗</span></Link>
          </nav>
          <Link href="#travel-inquiry" className="journey-world__cta">Tell us what you have in mind <span aria-hidden="true">↓</span></Link>
        </div>
      </section>
    </>
  )
}
