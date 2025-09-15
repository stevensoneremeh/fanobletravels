import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

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
        
        {/* Drift Chat Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            "use strict";
            !function() {
              var t = window.driftt = window.drift = window.driftt || [];
              if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                t.factory = function(e) {
                  return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                  };
                }, t.methods.forEach(function(e) {
                  t[e] = t.factory(e);
                }), t.load = function(t) {
                  var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                  var i = document.getElementsByTagName("script")[0];
                  i.parentNode.insertBefore(o, i);
                };
              }
            }();
            if (typeof window !== 'undefined') {
              window.drift && (window.drift.SNIPPET_VERSION = '0.3.1', window.drift.load('2nnwahmt5ezt'));
            }
          `
        }} />
      </head>
      <body>
        {/* Preloader */}
        <div className="bg-preloader-white"></div>
        <div className="preloader-white">
          <div className="mainpreloader">
            <img style={{width: '20vw'}} src="/img/logo.png" alt="Logo" />
          </div>
        </div>
        
        {/* Content Wrapper */}
        <div className="content-wrapper">
          {children}
        </div>
        
        {/* JavaScript Libraries - Load in correct order */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="/plugin/pluginson3step.js"></script>
        <script src="/plugin/bootstrap.min.js"></script>
        <script src="/plugin/bootstrap-datepicker.min.js"></script>
        <script src="/js/on3step.js"></script>
        <script src="/plugin/sticky.js"></script>
        <script src="/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
        <script src="/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
        <script src="/js/plugin-set.js"></script>
      </body>
    </html>
  )
}