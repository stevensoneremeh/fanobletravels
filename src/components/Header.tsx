import Link from 'next/link'

export default function Header() {
  return <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/"><span className="brand-mark"><span>F</span></span><span>FANOBLE<br />TRAVELS</span></Link><nav className="nav-links" aria-label="Primary navigation"><Link href="/">Discover</Link><Link href="/about">Our story</Link><Link href="/medical-tourism">Medical travel</Link><Link href="/tours/israel">Holy Land</Link><Link href="/contact">Contact</Link></nav><Link className="nav-cta" href="/contact">Plan a trip</Link></div></header>
}
