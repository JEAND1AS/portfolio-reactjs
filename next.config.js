/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          pathname: '/u/**',
        },
        { 
          protocol: 'https',
          hostname: 'imgur.com',
          pathname: '**',
        },

      ],
    },
  };
  
  module.exports = nextConfig;
  