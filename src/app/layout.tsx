import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Fanoble Travels | Travel beyond the itinerary', description: 'Thoughtfully planned travel from Lagos to the world: religious tourism, medical travel and international trade fairs.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
