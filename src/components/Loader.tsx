'use client'
import {useEffect, useState} from 'react'

export default function Loader(){
  const [visible,setVisible]=useState(true)
  useEffect(()=>{
    let fallback: number | undefined
    const finish=()=>{setVisible(false);if(fallback!==undefined)window.clearTimeout(fallback)}
    if(document.readyState==='complete')finish()
    else window.addEventListener('load',finish,{once:true})
    fallback=window.setTimeout(finish,12000)
    return()=>{window.removeEventListener('load',finish);if(fallback!==undefined)window.clearTimeout(fallback)}
  },[])
  return <div className={`fanoble-loader${visible?' is-visible':''}`} aria-hidden="true">
    <div className="fanoble-loader-mark"><span className="fanoble-loader-orbit"/><img src="/img/logo.png" alt="" /></div>
    <span className="fanoble-loader-line"/>
  </div>
}
