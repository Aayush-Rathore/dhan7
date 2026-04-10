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
    ]
  },
}

export default nextConfig
