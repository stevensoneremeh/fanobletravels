import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fanoble Travels & Tours | Journeys worth remembering',
  description: 'Trusted religious tourism, medical travel and international trade fair journeys from Nigeria to the world.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <div className="preloader-white" aria-hidden="true"><div className="mainpreloader"><div className="loader-ring" /><div className="loader-label">Preparing your journey</div></div></div>
    {children}
  </body></html>
}
