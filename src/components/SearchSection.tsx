'use client'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
export default function SearchSection(){
 const router=useRouter(),[keyword,setKeyword]=useState(''),[kind,setKind]=useState(''),[destination,setDestination]=useState(''),[duration,setDuration]=useState(''),[date,setDate]=useState('')
 const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();const params=new URLSearchParams({subject:'Travel inquiry',message:`Travel inquiry details:\nKeyword: ${keyword}\nBooking: ${kind}\nDestination: ${destination}\nDuration: ${duration}\nDate: ${date}`});router.push(`/contact?${params.toString()}`)}
 return <section className="frm-search">
  <div className="container-fluid m-5-hor m-5-hor-dev">
   <h2 className="big-heading">FLIGHT TICKET BOOKING AND HOTEL RESERVATION</h2>
   <form className="form-inline" id="sform" onSubmit={submit}>
    <div className="form-group search-icn"><label htmlFor="key">Keyword</label><input type="text" className="form-control" required id="key" value={keyword} onChange={e=>setKeyword(e.target.value)}/></div>
    <div className="form-group"><label htmlFor="booking-kind">Select your Booking</label><select id="booking-kind" required value={kind} onChange={e=>setKind(e.target.value)}><option value="">Other</option><option>Hotel Reservation</option><option>flight Booking</option></select></div>
    <div className="form-group"><label htmlFor="destination">Destination</label><select id="destination" required value={destination} onChange={e=>setDestination(e.target.value)}><option value="">Other</option>{['Asia','Africa','America','Australia','Europe','Rusia'].map(x=><option key={x}>{x}</option>)}</select></div>
    <div className="form-group"><label htmlFor="duration">Duration</label><select id="duration" required value={duration} onChange={e=>setDuration(e.target.value)}><option value="">Other</option>{['1 Day Travel','2 Days Travel','3 Days Travel','4 Days Travel','5 Days Travel','1 week Travel'].map(x=><option key={x}>{x}</option>)}</select></div>
    <div className="form-group"><label htmlFor="travel-date">Date</label><input id="travel-date" type="date" required value={date} onChange={e=>setDate(e.target.value)}/></div>
    <button className="btn-frm-search" type="submit">FIND NOW</button>
   </form>
  </div>
 </section>
}
