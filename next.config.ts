import type { NextConfig } from "next";
// import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me","img.freepik.com"],
  },
};
export default nextConfig;

// webpack: config => {
//   config.ignoreWarnings = [
//     { module: /node_modules\/node-fetch\/lib\/index\.js/ },
//     { file: /node_modules\/node-fetch\/lib\/index\.js/ },
//   ];

//   return config;
// }
