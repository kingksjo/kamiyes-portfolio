import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site builds to plain HTML/CSS/JS in `out/`,
  // which Cloudflare Pages serves directly.
  output: "export",
  images: {
    // The default Image optimizer needs a Node server, which a static
    // export has no access to, so serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
