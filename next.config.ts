import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cdn.shpy.in",
      },
    ],
  },
};

export default nextConfig;
