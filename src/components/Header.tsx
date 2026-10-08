'use client'

import Link from 'next/link'

export default function Header() {
  return <header className="site-header">
    <div className="utility-bar"><div className="container-fluid utility-inner"><span>LAGOS · NIGERIA</span><span>Tailored journeys, thoughtfully arranged</span></div></div>
    <div className="navbar-default-white"><div className="container-fluid nav-inner">
      <Link className="navbar-brand" href="/"><img src="/img/logo-white.png" alt="Fanoble Travels and Tours" /></Link>
      <button className="navbar-toggle" aria-label="Open navigation" onClick={() => { const el = document.getElementById('main-menu'); el?.classList.toggle('is-open') }}>MENU</button>
      <div className="menu-init" id="main-menu"><nav aria-label="Main navigation"><ul>
        <li><Link className="actived" href="/">HOME</Link></li>
        <li><Link href="/tours/israel">HOLY LAND</Link></li>
        <li><Link href="/medical-tourism">MEDICAL TRAVEL</Link></li>
        <li><Link href="/fairs/china">TRADE FAIRS</Link></li>
        <li><Link href="/about">OUR STORY</Link></li>
        <li><Link className="nav-cta" href="/contact">PLAN A JOURNEY</Link></li>
      </ul></nav></div>
    </div></div>
  </header>
}
