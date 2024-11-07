import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],

    domains: ["picsum.photos", "source.unsplash.com"],

  },
};

export default nextConfig;
