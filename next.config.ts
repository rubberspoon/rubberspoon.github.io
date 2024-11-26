import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/rubberspoon.github.io",
  output: "export", // required for github pages
  reactStrictMode: true,
};

export default nextConfig;
