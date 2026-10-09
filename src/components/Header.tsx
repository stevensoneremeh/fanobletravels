'use client'

import Link from 'next/link'
import { useState } from 'react'

const religious = [['Israel Tours', '/tours/israel'], ['Rome Tours', '/tours/rome'], ['Jordan Tours', '/tours/jordan']]
const fairs = [['China Fairs', '/fairs/china']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [submenu, setSubmenu] = useState<string | null>(null)
  const closeMenu = () => { setOpen(false); setSubmenu(null) }
  const toggleSubmenu = (name: string) => setSubmenu((current) => current === name ? null : name)
  return <header className="site-header">
    <div className="utility-bar"><div className="container-fluid"><span>FANOBLE TRAVELS &amp; TOURS NIG. LTD.</span><span className="utility-note">Curating journeys from Lagos to the world</span></div></div>
    <div className="navbar-default-white"><div className="container-fluid nav-inner">
      <Link className="navbar-brand" href="/" aria-label="Fanoble Travels home" onClick={closeMenu}><img alt="Fanoble Travels and Tours" src="/img/logo.png" /></Link>
      <button className="navbar-toggle" type="button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}><span className="menu-bars" aria-hidden="true"><i /><i /><i /></span><span>{open ? 'CLOSE' : 'MENU'}</span></button>
      <div className={`menu-init ${open ? 'is-open' : ''}`} id="main-menu"><nav aria-label="Main navigation"><ul>
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li className="has-menu"><button className="submenu-trigger" type="button" aria-expanded={submenu === 'religious'} onClick={() => toggleSubmenu('religious')}>Religious tourism <span aria-hidden="true">⌄</span></button><ul className={submenu === 'religious' ? 'is-open' : ''}>{religious.map(([label, href]) => <li key={href}><Link href={href} onClick={closeMenu}>{label}</Link></li>)}</ul></li>
        <li><Link href="/medical-tourism" onClick={closeMenu}>Medical tourism</Link></li>
        <li className="has-menu"><button className="submenu-trigger" type="button" aria-expanded={submenu === 'fairs'} onClick={() => toggleSubmenu('fairs')}>International fairs <span aria-hidden="true">⌄</span></button><ul className={submenu === 'fairs' ? 'is-open' : ''}>{fairs.map(([label, href]) => <li key={href}><Link href={href} onClick={closeMenu}>{label}</Link></li>)}</ul></li>
        <li><Link href="/about" onClick={closeMenu}>About us</Link></li><li><Link className="nav-cta" href="/contact" onClick={closeMenu}>Plan a journey <b aria-hidden="true">↗</b></Link></li>
      </ul></nav></div>
    </div></div>
  </header>
}

