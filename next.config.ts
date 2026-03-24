import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomgarden.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
