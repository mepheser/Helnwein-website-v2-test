import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
      unoptimized: false,
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
          },
      ]
  }
};

export default nextConfig;
