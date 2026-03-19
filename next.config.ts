import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
      },
    ],
  },
  // Ensure Prisma is treated as an external package
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
