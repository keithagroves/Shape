import type { NextConfig } from "next";

// Static export for GitHub Pages (served at keithagroves.github.io/Shape)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/Shape" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
