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
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "http://localhost:6701/images/:path*",
      },
    ]
  },
};

export default nextConfig;
