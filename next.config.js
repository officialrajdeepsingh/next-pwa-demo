
const withPWA = require("next-pwa")({
  dest: "public"
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    unoptimized : true 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
})
