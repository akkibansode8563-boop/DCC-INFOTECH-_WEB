import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  // No source maps in production
  productionBrowserSourceMaps: false,
  images: {
    // Serve WebP/AVIF instead of original PNG/JPEG — 40-80% smaller files
    formats: ["image/avif", "image/webp"],
    // Aggressive caching: 60 days (hero & logo images change rarely)
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Device sizes tuned for mobile-first layout
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Compress HTML output for faster transfer
  compress: true,
  // Power pack: enable experimental react compiler for better memo/re-render perf
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@radix-ui/react-icons"],
  },
};

export default nextConfig;
