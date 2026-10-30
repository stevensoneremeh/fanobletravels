export type NavGroup = { label: string; href: string; items: { label: string; href: string }[] }
export type Destination = { slug:string; name:string; region:string; tagline:string; image:string; sites:string[]; description:string }
export const contact = { phone:'+234 818 441 4599', whatsapp:'2348184414599', email:'info@fanobletravels.com', address:'89A, Terrace Wing, TBS Complex Race Course, Lagos Island, Lagos.' }
export const pilgrimage: Destination[] = [
 {slug:'israel',name:'Israel',region:'Pilgrimage',tagline:'Walk through the living pages of Scripture.',image:'/img/bg-subheaderisrael.jpg',sites:['Jerusalem and the Church of the Holy Sepulchre','The Tomb of Jesus','The Dead Sea','Bethlehem and the birthplace of Jesus'],description:'A purposeful journey through sacred places, shaped around your group, faith tradition and pace.'},
 {slug:'rome',name:'Rome',region:'Pilgrimage',tagline:'History, faith and living tradition.',image:'/img/bg-subheaderrome.jpg',sites:['The ancient city','Catacombs','Basilicas and sacred art'],description:'Explore layers of Christian history with thoughtful planning from Lagos to Rome.'},
 {slug:'greece',name:'Greece',region:'Pilgrimage',tagline:'Ancient faith in an unforgettable landscape.',image:'/img/bg-subheadergreece.jpg',sites:['Athens','Biblical Greece','Historic churches'],description:'A considered itinerary connecting culture, history and faith.'},
 {slug:'turkey',name:'Turkey',region:'Pilgrimage',tagline:'Where early Christian history meets wonder.',image:'/img/bg-subheaderturkeyreligioustours.jpg',sites:['Istanbul','Cappadocia','Early Christian sites'],description:'Travel with context, care and a clear plan.'},
 {slug:'egypt',name:'Egypt',region:'Pilgrimage',tagline:'Desert horizons and stories that endure.',image:'/img/bg-subheaderegypt.jpg',sites:['Cairo','Mount Sinai','St. Catherine’s Monastery'],description:'A calm, well-organised route through Egypt’s sacred landscape.'},
 {slug:'jordan',name:'Jordan',region:'Pilgrimage',tagline:'Prophetic landscapes and welcoming shores.',image:'/img/bg-subheader.jpg',sites:['The Dead Sea','Jordan River','Mount Nebo'],description:'Pair Jordan’s historic sites with practical travel support.'},
 {slug:'portugal',name:'Fatima, Portugal',region:'Pilgrimage',tagline:'A gentle journey to the Sanctuary of Our Lady of Fatima.',image:'/img/fatima-sanctuary.jpg',sites:['Sanctuary of Our Lady of Fatima','Fatima village','Lisbon extension'],description:'Plan a reflective pilgrimage to Fatima with guidance at every step.'},
]
export const medicalCountries = ['India','Israel','Turkey','Dubai','United Kingdom','United States','Cambodia','Europe']
export const medicalSlugs = ['india','israel','turkey','dubai','uk','usa','cambodia','europe']
export const specialties = ['Cardiology','Orthopaedics','Oncology','Neurology','Fertility care','Wellness and diagnostics']
export const fairs = [{slug:'china',name:'China',image:'/img/bg-subheaderchinafairs.jpg'},{slug:'turkey',name:'Turkey',image:'/img/bg-subheaderturkey.jpg'},{slug:'india',name:'India',image:'/img/bg-subheaderindiafairs.jpg'},{slug:'professional',name:'Professional fairs',image:'/img/bg-subheaderprofessionalfairs.jpg'}]
export const navGroups: NavGroup[] = [
 {label:'Pilgrimage',href:'/tours/israel',items:pilgrimage.map(d=>({label:d.name,href:`/tours/${d.slug}`}))},
 {label:'Medical',href:'/medical-tourism',items:medicalCountries.map((name,i)=>({label:name,href:`/medical-tourism/${medicalSlugs[i]}`}))},
 {label:'Fairs',href:'/fairs/china',items:fairs.map(f=>({label:f.name,href:`/fairs/${f.slug}`}))},
]
export const faqs = ['How early should we start planning?','Can you help with visas and flights?','Is an inquiry a booking or payment?']
