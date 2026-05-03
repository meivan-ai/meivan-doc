import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Parent repo (D:\\Code\\web\\Meivan-doc) also has package-lock.json. Pin Turbopack to this app when you run npm scripts from `my-app`.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
