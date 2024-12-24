import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
