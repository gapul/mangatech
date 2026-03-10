import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/mangatech' : '',
  assetPrefix: isProd ? '/mangatech/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
