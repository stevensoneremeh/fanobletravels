'use client'
import { useCallback, useEffect, useState } from 'react'

const slides=[
 {image:'/images-slider/img-slide-11.jpg',alt:'Travel destination featured by Fanoble Travels',eyebrow:'YOUR JOURNEY, WELL CONSIDERED',heading:'WELCOME TO FANOBLE TRAVELS AND TOURS',copy:'A TRAVEL AND TOURISM COMPANY YOU CAN TRUST'},
 {image:'/img/projects-color/biblical-archaeological-sites-gettyimages-542387438-promo.jpg',alt:'Ancient biblical archaeological site',eyebrow:'JOURNEYS WITH MEANING',heading:'RELIGIOUS TOURISM',copy:'Do you know there are more Biblical Sites around the World asides ISRAEL? Join us on a spiritual adventure that brings the Bible alive. Experience a deeper understanding of the scriptures and travel through the places in the Bible.'},
 {image:'/images-slider/img-slide-3.jpg',alt:'International trade fair destination',eyebrow:'GLOBAL BUSINESS, MADE CLOSER',heading:'GROUP AND INDIVIDUALS INTERNATIONAL TRADE FAIRS TOURISM',copy:''}
]
export default function HomeSlider(){
 const [current,setCurrent]=useState(0),[paused,setPaused]=useState(false),[interacting,setInteracting]=useState(false),[reduced,setReduced]=useState(false)
 const next=useCallback(()=>setCurrent(n=>(n+1)%slides.length),[])
 const previous=useCallback(()=>setCurrent(n=>(n+slides.length-1)%slides.length),[])
 useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(query.matches);update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[])
 useEffect(()=>{if(paused||interacting||reduced)return;const timer=window.setInterval(next,6500);return()=>window.clearInterval(timer)},[paused,interacting,reduced,next])
 return <section className="fanoble-hero" aria-roledescription="carousel" aria-label="Fanoble travel highlights" onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)} onFocusCapture={()=>setInteracting(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setInteracting(false)}}>
   {slides.map((slide,index)=><div key={slide.image} aria-hidden={index!==current} style={{display:index===current?'block':'none'}}><img className="fanoble-hero-image" src={slide.image} alt={slide.alt}/><div className="fanoble-hero-content"><div className="eyebrow">{slide.eyebrow}</div><h1>{slide.heading}</h1>{slide.copy&&<p>{slide.copy}</p>}</div></div>)}
   <div className="fanoble-hero-controls">
    <button type="button" aria-label="Previous slide" onClick={previous}>‹</button>
    <span className="hero-count" aria-live="polite">0{current+1} / 0{slides.length}</span>
    <button type="button" aria-label="Next slide" onClick={next}>›</button>
    {!reduced&&<button type="button" aria-label={paused?'Play slideshow':'Pause slideshow'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'▶':'Ⅱ'}</button>}
   </div>
 </section>
}
