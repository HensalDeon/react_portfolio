import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Models and the Draco decoder are large and change rarely; let browsers
  // keep them so a prefetch is reused as-is and repeat visits skip them.
  async headers() {
    return [
      {
        source: "/(models|draco)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
