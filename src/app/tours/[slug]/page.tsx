import { notFound } from 'next/navigation'
import { pilgrimage } from '@/data/travel'
import { DetailPage } from '@/components/TravelSections'
export function generateStaticParams(){return pilgrimage.map(x=>({slug:x.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=pilgrimage.find(x=>x.slug===slug);if(!item)notFound();return <DetailPage destination={item}/>}
