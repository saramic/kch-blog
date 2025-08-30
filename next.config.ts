// @ts-check

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kch-au-site.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/**", // Allows all paths within the bucket
      },
    ],
  },
};

export default nextConfig;
