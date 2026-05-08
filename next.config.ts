import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/rayhannaufal.github.io', // Replace with your repository name
  images: {
    unoptimized: true, // Required because Next.js Image Optimization needs a server
  },
};

export default nextConfig;
