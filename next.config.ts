import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/ifrps-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;