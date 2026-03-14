import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/the-butter-duck" : "",
  assetPrefix: isProd ? "/the-butter-duck/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
