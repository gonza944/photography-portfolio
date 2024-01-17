/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '4owlxcrlkmcznxj4.public.blob.vercel-storage.com',
          port: '',
          pathname: '/Portfolio/**',
        },
      ],
    },
  }

module.exports = nextConfig
