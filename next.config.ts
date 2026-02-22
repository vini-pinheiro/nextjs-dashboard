import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: process.env.CODESPACES
        ? [
            `${process.env.CODESPACE_NAME}-3000.app.github.dev`,
            "localhost:3000",
          ]
        : ["localhost:3000"],
    },
  },
};

export default nextConfig;
