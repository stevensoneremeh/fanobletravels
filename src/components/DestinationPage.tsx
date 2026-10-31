import { pilgrimage } from '@/data/travel'
import { TravelGallery } from './TravelGallery'
import { InquiryCard } from './TravelSections'

export function DestinationPage({ slug }: { slug: string }) {
  const destination = pilgrimage.find((item) => item.slug === slug) ?? pilgrimage[0]
  return <main><section className="detail-hero destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(8,42,49,.9),rgba(8,42,49,.2)),url('${destination.image}')`}}><div className="shell"><span className="eyebrow">Pilgrimage journeys</span><h1>{destination.name}</h1><p>{destination.tagline}</p></div></section><section className="section shell"><div className="two-col"><div><span className="eyebrow">A considered itinerary</span><h2>{destination.name}, with meaning.</h2></div><p className="lead">{destination.description}</p></div></section><TravelGallery destination={destination} /><section className="section tinted"><div className="shell"><span className="eyebrow">Places we visit</span><div className="pill-list">{destination.sites.map((site)=><span key={site}>{site}</span>)}</div></div></section><InquiryCard title={`Plan your ${destination.name} journey`} /></main>
}
