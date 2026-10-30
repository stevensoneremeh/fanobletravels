import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata: Metadata={title:{default:'Fanoble Travels | Journeys, well considered.',template:'%s | Fanoble Travels'},description:'IATA accredited travel support for pilgrimage, medical travel and international trade fairs.',metadataBase:new URL('https://fanobletravels.com')}
export const viewport: Viewport={width:'device-width',initialScale:1,maximumScale:1,viewportFit:'cover',themeColor:'#10292f'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
