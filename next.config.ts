import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: ['s3.algogo.co.kr'],
  },
};

export default nextConfig;
