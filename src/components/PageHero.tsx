import Link from 'next/link'
import type { ReactNode } from 'react'

type PageHeroProps = { eyebrow: string; title: string; description: string; image: string }

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(20,37,44,.9), rgba(20,37,44,.28)), url("${image}")` }}>
      <div className="container-fluid page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="button button-light" href="/contact">Plan your journey <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</div>
}
