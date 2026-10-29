import { notFound } from 'next/navigation'
import { medicalCountries, medicalSlugs } from '@/data/travel'
import { MedicalCountryPage } from '@/components/RouteTemplates'
export function generateStaticParams(){return medicalSlugs.map(country=>({country}))}
export default async function Page({params}:{params:Promise<{country:string}>}){const {country}=await params;const i=medicalSlugs.indexOf(country);if(i<0)notFound();return <MedicalCountryPage name={medicalCountries[i]}/>} 
