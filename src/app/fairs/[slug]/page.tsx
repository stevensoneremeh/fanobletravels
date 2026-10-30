import { notFound } from 'next/navigation'
import { fairs } from '@/data/travel'
import { FairPage } from '@/components/RouteTemplates'
export function generateStaticParams(){return fairs.map(x=>({slug:x.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=fairs.find(x=>x.slug===slug);if(!item)notFound();return <FairPage name={item.name}/>} 
