import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="init">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <div className="subnav">
            <div className="col-md-8">
              <div className="menu-center">
                <span>FANOBLE TRAVELS AND TOURS NIG. LTD.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-default-white">
        <div className="container-fluid m-5-hor">
          <div className="row">
            <button className="navbar-toggle" type="button" aria-label="Open navigation menu">
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
              <span>MENU</span>
            </button>
            <Link className="navbar-brand white" href="/" aria-label="Fanoble Travels home">
              <img alt="Fanoble Travels and Tours" src="/img/logo.png" />
            </Link>
            <div className="white menu-init" id="main-menu">
              <nav id="menu-center" aria-label="Main navigation">
                <ul>
                  <li><Link className="actived" href="/">HOME</Link></li>
                  <li><a href="#religious-tours">RELIGIOUS TOURISM <i className="fa fa-angle-down" /></a><ul><li><Link href="/tours/israel">ISRAEL TOURS</Link></li><li><Link href="/tours/rome">ROME TOURS</Link></li><li><Link href="/tours/greece">GREECE TOURS</Link></li><li><Link href="/tours/turkey">TURKEY TOURS</Link></li><li><Link href="/tours/egypt">EGYPT TOURS</Link></li><li><Link href="/tours/jordan">JORDAN TOURS</Link></li></ul></li>
                  <li><Link href="/medical-tourism">MEDICAL TOURISM</Link></li>
                  <li><a href="#trade-fairs">INTERNATIONAL TRADE FAIRS <i className="fa fa-angle-down" /></a><ul><li><Link href="/fairs/china">CHINA FAIRS</Link></li><li><Link href="/fairs/turkey">TURKEY FAIRS</Link></li><li><Link href="/fairs/india">INDIA FAIRS</Link></li><li><Link href="/fairs/professional">PROFESSIONAL FAIRS</Link></li></ul></li>
                  <li><Link href="/about">ABOUT US</Link></li><li><Link href="/contact">CONTACT US</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
