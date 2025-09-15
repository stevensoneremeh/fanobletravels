import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="init">
      {/* Subnav */}
      <div className="container-fluid m-5-hor">
        <div className="row">
          <div className="subnav">
            <div className="col-md-8">
              <div className="menu-center">
                <div style={{display: 'flex', alignContent: 'center'}}>
                  <span style={{color: '#fc9f1c', marginLeft: '10vw', fontSize: '2vw'}}>
                    FANOBLE TRAVELS AND TOURS NIG. LTD.
                  </span>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nav */}
      <div className="navbar-default-white navbar-fixed-top">
        <div className="container-fluid m-5-hor">
          <div className="row">
            {/* Menu mobile display */}
            <button className="navbar-toggle" data-target="main-menu" data-toggle="collapse">
              <span className="icon icon-bar" style={{backgroundColor:'#fc9f1c'}}></span> 
              <span className="icon icon-bar" style={{backgroundColor:'#f19305'}}></span> 
              <span className="icon icon-bar" style={{backgroundColor:'#f0e006'}}></span> 
              <span className="icon icon-bar" style={{color:'aliceblue', backgroundColor: '#fc9f1c'}}>MENU</span>
            </button> 
          
            {/* Logo */}
            <Link className="navbar-brand white" href="/">
              <img className="white" alt="logo" src="/img/logo.png" />
              <img className="black" style={{display: 'inline', marginTop: '3vmax'}} alt="logo" src="/img/logo-white.png" />
            </Link> 
          
            {/* Main menu */}
            <div className="white menu-init" id="main-menu">
              <nav id="menu-center">
                <ul>
                  <li>
                    <Link className="actived" href="/">HOME</Link>
                  </li>
                  
                  <li>
                    <a href="#"> RELIGIOUS TOURISM <i className="fa fa-angle-down"></i></a>
                    <ul>
                      <li><Link href="/tours/israel">ISRAEL TOURS</Link></li>
                      <li><Link href="/tours/rome">ROME TOURS</Link></li>
                      <li><Link href="/tours/greece">GREECE TOURS</Link></li>
                      <li><Link href="/tours/turkey">TURKEY TOURS</Link></li>
                      <li><Link href="/tours/egypt">EGYPT TOURS</Link></li>
                      <li><Link href="/tours/jordan">JORDAN TOURS</Link></li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/medical-tourism">MEDICAL TOURISM</Link>
                  </li>

                  <li>
                    <a href="#"> INTERNATIONAL TRADE FAIRS <i className="fa fa-angle-down"></i></a>
                    <ul>
                      <li><Link href="/fairs/china">CHINA FAIRS</Link></li>
                      <li><Link href="/fairs/turkey">TURKEY FAIRS</Link></li>
                      <li><Link href="/fairs/india">INDIA FAIRS</Link></li>
                      <li><Link href="/fairs/professional">PROFESSIONAL FAIRS</Link></li>
                    </ul>
                  </li>
                  
                  <li><Link href="/about">ABOUT US</Link></li>
                  <li><Link href="/contact">CONTACT US</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}