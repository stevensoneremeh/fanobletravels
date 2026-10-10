import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Loader from '@/components/Loader'

export const metadata: Metadata = {
  title: 'FANOBLE TRAVELS AND TOURS NIG. LTD.',
  description: 'A TRAVEL AND TOURISM COMPANY YOU CAN TRUST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link href="/img/favicon.gif" rel="icon" sizes="32x32" type="image/png" />
        
        {/* Bootstrap CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        
        {/* Font Icons CSS */}
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link href="/font-awesome/css/font-awesome.css" rel="stylesheet" />
        
        {/* Date picker CSS */}
        <link href="/css/datepicker.min.css" rel="stylesheet" />
        
        {/* Revolution slider CSS */}
        <link rel="stylesheet" type="text/css" href="/css/fullwidth.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="/rs-plugin/css/settings.css" media="screen" />
        <link rel="stylesheet" href="/css/rev-settings.css" type="text/css" />
        
        {/* Theme CSS */}
        <link href="/css/animated-on3step.css" rel="stylesheet" />
        <link href="/css/owl.carousel.css" rel="stylesheet" />
        <link href="/css/owl.theme.css" rel="stylesheet" />
        <link href="/css/on3step-style.css" rel="stylesheet" />
        <link href="/css/queries-on3step.css" media="all" rel="stylesheet" />
        
        {/* External CDN CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
        <link rel="stylesheet" href="/fanoble-redesign.css" />
        <noscript><style>{`.fanoble-loader{display:none!important}`}</style></noscript>
      </head>
      <body>
        <noscript><style>{`.fanoble-loader { display: none !important; }`}</style></noscript>
        <Loader />
        {/* Content Wrapper */}
        <div className="content-wrapper">
          {children}
        </div>
        
      </body>
    </html>
  )
}