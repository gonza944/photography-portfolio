/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'gonzaloariza-975314016.imgix.net',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
