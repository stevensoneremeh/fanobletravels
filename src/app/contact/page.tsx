import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
export default function Contact(){return <><Header/><main className="page-shell"><PageHero title="Let’s plan something memorable." description="Share a little about your trip and a Fanoble travel expert will be in touch."/><section className="section"><div className="container contact-layout"><div className="contact-card"><ContactForm/></div><aside className="content-panel"><div className="eyebrow">Visit or call</div><h2>We’re here to help.</h2><p className="body-copy">89A, Terrace Wing, TBS Complex<br/>Race Course, Lagos Island, Lagos.</p><p className="body-copy"><a href="tel:+2348184414599">+234 818 441 4599</a><br/><a href="mailto:info@fanobletravels.com">info@fanobletravels.com</a></p><p className="body-copy">Monday – Friday<br/>9:00 am – 5:00 pm</p></aside></div></section></main><Footer/></>}
