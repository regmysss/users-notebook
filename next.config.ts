import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "api.open-meteo.com",
      },
      {
        protocol: "https",
        hostname: "users-notebook.vercel.app",
      }
    ],
  }
};

export default nextConfig;
