import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'dhan7.xyz' }],
        destination: 'https://www.dhan7.xyz/:path*',
        permanent: true,
      },
      // FIX 3: Redirect common misspellings and old URLs
      {
        source: '/download',
        destination: '/dhan77-apk-download',
        permanent: true,
      },
      {
        source: '/dhan7-apk-download',
        destination: '/dhan77-apk-download',
        permanent: true,
      },
      {
        source: '/dhan-7-apk-download',
        destination: '/dhan77-apk-download',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
