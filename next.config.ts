import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8005", // Porta do backend
        pathname: "/**", // Permite todas as rotas
      },
    ],
  },
};

export default nextConfig;