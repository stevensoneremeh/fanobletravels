'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menus: {label:string;href?:string;items:[string,string][]}[] = [
  {label:'RELIGIOUS TOURISM', items:[['ISRAEL TOURS','/tours/israel'],['ROME TOURS','/tours/rome'],['GREECE TOURS','/tours/greece'],['TURKEY TOURS','/tours/turkey'],['EGYPT TOURS','/tours/egypt'],['JORDAN TOURS','/tours/jordan']]},
  {label:'MEDICAL TOURISM', href:'/medical-tourism', items:[['CAMBODIA MEDICAL TOURS','/medical-tourism/cambodia'],['EUROPE MEDICAL TOURS','/medical-tourism/europe']]},
  {label:'INTERNATIONAL TRADE FAIRS', items:[['CHINA FAIRS','/fairs/china'],['TURKEY FAIRS','/fairs/turkey'],['INDIA FAIRS','/fairs/india'],['PROFESSIONAL FAIRS','/fairs/professional']]},
]
export default function Header() {
  const [open,setOpen]=useState(false)
  const [expanded,setExpanded]=useState('')
  const pathname=usePathname()
  useEffect(()=>{setOpen(false);setExpanded('')},[pathname])
  useEffect(()=>{
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);setExpanded('')}}
    window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)
  },[])
  const active=(href:string)=>pathname===href
  return <header className="init fanoble-header">
    <div className="navbar-default-white navbar-fixed-top">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <Link className="navbar-brand white" href="/" aria-label="Fanoble Travels and Tours home"><span className="brand-mark"><img className="brand-color" alt="Fanoble Travels and Tours" src="/img/logo.png"/><img className="brand-light" alt="" src="/img/logo-white.png"/></span><span className="brand-name">FANOBLE TRAVELS AND TOURS NIG. LTD.</span></Link>
          <button className="navbar-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(!open)}>
            <span className="icon icon-bar"></span><span className="icon icon-bar"></span><span className="icon icon-bar"></span><span className="sr-only">{open?'Close menu':'Menu'}</span>
          </button>
          <div className={`white menu-init ${open?'is-open':''}`} id="main-menu">
            <nav aria-label="Main navigation"><ul>
              <li><Link className={active('/')?'actived':''} href="/">HOME</Link></li>
              {menus.map(menu=><li key={menu.label} className={expanded===menu.label?'menu-open':''} onMouseEnter={()=>{if(window.matchMedia('(min-width: 901px)').matches)setExpanded(menu.label)}} onMouseLeave={()=>{if(window.matchMedia('(min-width: 901px)').matches)setExpanded('')}}>
                {menu.href ? <><Link href={menu.href} className={active(menu.href)?'actived':''}>{menu.label}</Link><button className="nav-menu-trigger nav-menu-caret" type="button" aria-label={`Show ${menu.label} destinations`} aria-expanded={expanded===menu.label} onClick={()=>setExpanded(expanded===menu.label?'':menu.label)}>⌄</button></> : <button className="nav-menu-trigger" type="button" aria-expanded={expanded===menu.label} onClick={()=>setExpanded(expanded===menu.label?'':menu.label)}>{menu.label}<span aria-hidden="true">⌄</span></button>}
                <ul>{menu.items.map(([label,href])=><li key={href}><Link href={href} className={active(href)?'actived':''}>{label}</Link></li>)}</ul>
              </li>)}
              <li><Link className={active('/about')?'actived':''} href="/about">ABOUT US</Link></li>
              <li><Link className={active('/contact')?'actived':''} href="/contact">CONTACT US</Link></li>
            </ul></nav>
          </div>
        </div>
      </div>
    </div>
  </header>
}
