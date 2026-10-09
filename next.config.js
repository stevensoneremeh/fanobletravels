/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  // Enable for Replit proxy environment
  allowedDevOrigins: ['127.0.0.1', 'localhost', '*.replit.dev'],
  async redirects() {
    return [
      { source: '/', destination: '/index.html', permanent: false },
      { source: '/about', destination: '/about.html', permanent: false },
      { source: '/contact', destination: '/contact.html', permanent: false },
      { source: '/medical-tourism', destination: '/medicaltourism.html', permanent: false },
      { source: '/tours/israel', destination: '/israeltours.html', permanent: false },
      { source: '/tours/jordan', destination: '/jordantours.html', permanent: false },
      { source: '/tours/rome', destination: '/rometours.html', permanent: false },
      { source: '/fairs/china', destination: '/chinafairs.html', permanent: false },
      { source: '/tours/egypt', destination: '/egypttours.html', permanent: false },
      { source: '/tours/greece', destination: '/greecetours.html', permanent: false },
      { source: '/tours/turkey', destination: '/turkeytours.html', permanent: false },
      { source: '/fairs/india', destination: '/indiafairs.html', permanent: false },
      { source: '/fairs/turkey', destination: '/turkeyfairs.html', permanent: false },
      { source: '/fairs/professional', destination: '/professionalfairs.html', permanent: false },
      { source: '/medical-tourism/cambodia', destination: '/cambodiamedicaltours.html', permanent: false },
      { source: '/medical-tourism/europe', destination: '/europemedicaltours.html', permanent: false },
      { source: '/destination', destination: '/destination.html', permanent: false },
      { source: '/services/1', destination: '/service-1.html', permanent: false },
      { source: '/projects/detail-2', destination: '/projects-detail-2.html', permanent: false },
      { source: '/works/carousel', destination: '/works-carousel.html', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
