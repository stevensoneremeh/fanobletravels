import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export default function Contact() { return <><Header /><main><PageHero eyebrow="Start a conversation" title="Let’s plan something unforgettable" description="Share your destination, dates, and travel dreams. Our consultants will shape the next step with you." image="/img/bg-subheader.jpg" /><section className="content-section contact-section"><div className="container-fluid contact-grid"><div><p className="eyebrow">Contact information</p><h2>Travel plans start with a hello.</h2><p>89A, Terrace Wing, TBS Complex Race Course, Lagos Island, Lagos.</p><p><a href="tel:+2348184414599">(+234) 818 441 4599</a><br /><a href="mailto:info@fanobletravels.com">info@fanobletravels.com</a></p><div className="contact-note">Monday – Friday<br />8:00 AM – 5:00 PM WAT</div></div><div className="contact-form-card"><ContactForm /></div></div></section></main><Footer /></> }
