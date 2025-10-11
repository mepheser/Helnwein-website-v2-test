import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_STATIC_EXPORT === 'true' ? 'export' : undefined,
  trailingSlash: true,
  images: {
      unoptimized: true,
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
          },
      ]
  }
};

export default nextConfig;
