import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // No source maps in production — saves ~30s on webpack build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
