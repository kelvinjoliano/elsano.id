/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "static.jakmall.id",
      },
    ],
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('src')); // Add src directory to webpack
    return config;
  },
};

export default nextConfig;
