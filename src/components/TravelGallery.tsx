import type { Destination } from '@/data/travel'

const galleryBySlug: Record<string, string[]> = {
  israel: ['/img/bg-subheaderisrael.jpg', '/img/gallery-home/big/img1.jpg', '/img/gallery-home/big/img2.jpg'],
  rome: ['/img/bg-subheaderrome.jpg', '/img/projects-color - rome/st-peter-square-Jun-26-2022-03-01-13-84-AM.jpg', '/img/projects-color - rome/arch-of-titus-Jun-26-2022-03-01-15-13-AM.jpg'],
  jordan: ['/img/bg-subheader.jpg', '/img/projects-color -jordan/Main-Dead Sea.jpg', '/img/projects-color -jordan/Mount_Nebo-Religion__Faith-1-1.jpg'],
  greece: ['/img/bg-subheadergreece.jpg', '/img/projects-color - greece/10.jpg', '/img/curated/acropolis-athens.webp'],
  turkey: ['/img/bg-subheaderturkeyreligioustours.jpg', '/img/projects-color -turkey/Hagia-Sophia-Istanbul.jpg', '/img/projects-color -turkey/Cappadocia-region-Turkey.jpg'],
  egypt: ['/img/bg-subheaderegypt.jpg', '/img/projects-color -Egypt/mount sinai.jpg', '/img/projects-color -Egypt/red-sea.jpeg'],
  portugal: ['/img/bg-subheader.jpg', '/img/gallery-home/big/img3.jpg', '/img/gallery-home/big/img4.jpg'],
}

export function TravelGallery({ destination }: { destination: Destination }) {
  const images = galleryBySlug[destination.slug] ?? [destination.image, '/img/gallery-home/big/img5.jpg', '/img/gallery-home/big/img6.jpg']
  return (
    <section className="section gallery-section shell" aria-labelledby="gallery-title">
      <div className="gallery-heading"><div><span className="eyebrow">The visual itinerary</span><h2 id="gallery-title">A sense of place before you go.</h2></div><p>Photography from our travel archive, selected to give your planning a more tangible beginning.</p></div>
      <div className="travel-gallery">{images.map((image, index) => <figure className={index === 0 ? 'gallery-feature' : ''} key={image}><img src={image} alt={`${destination.name} travel view ${index + 1}`} loading={index === 0 ? 'eager' : 'lazy'} /><figcaption>{index === 0 ? destination.name : 'Places worth pausing for'}</figcaption></figure>)}</div>
    </section>
  )
}
