'use client'

import Link from 'next/link'
import { useState } from 'react'

const religious = [['Israel Tours', '/tours/israel'], ['Rome Tours', '/tours/rome'], ['Greece Tours', '/tours/greece'], ['Turkey Tours', '/tours/turkey'], ['Egypt Tours', '/tours/egypt'], ['Jordan Tours', '/tours/jordan']]
const fairs = [['China Fairs', '/fairs/china'], ['Turkey Fairs', '/fairs/turkey'], ['India Fairs', '/fairs/india'], ['Professional Fairs', '/fairs/professional']]

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="utility-bar"><div className="container-fluid"><span>FANOBLE TRAVELS & TOURS NIG. LTD.</span><span className="utility-note">Curating journeys from Lagos to the world</span></div></div>
    <div className="navbar-default-white"><div className="container-fluid nav-inner">
      <Link className="navbar-brand" href="/" aria-label="Fanoble Travels home"><img alt="Fanoble Travels and Tours" src="/img/logo.png" /></Link>
      <button className="navbar-toggle" type="button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}><span className="menu-bars" aria-hidden="true"><i /><i /><i /></span><span>{open ? 'CLOSE' : 'MENU'}</span></button>
      <div className={`menu-init ${open ? 'is-open' : ''}`} id="main-menu"><nav aria-label="Main navigation"><ul>
        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li className="has-menu"><span>Religious tourism</span><ul>{religious.map(([label, href]) => <li key={href}><Link href={href} onClick={() => setOpen(false)}>{label}</Link></li>)}</ul></li>
        <li><Link href="/medical-tourism" onClick={() => setOpen(false)}>Medical tourism</Link></li>
        <li className="has-menu"><span>International fairs</span><ul>{fairs.map(([label, href]) => <li key={href}><Link href={href} onClick={() => setOpen(false)}>{label}</Link></li>)}</ul></li>
        <li><Link href="/about" onClick={() => setOpen(false)}>About us</Link></li><li><Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Plan a journey <b>↗</b></Link></li>
      </ul></nav></div>
    </div></div>
  </header>
}
