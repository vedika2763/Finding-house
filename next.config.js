/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["localhost", "images.unsplash.com", "tiimg.tistatic.com", "cpimg.tistatic.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  assetPrefix: "/tradeshow",
  rewrites() {
    return [{ source: "/tradeshow/_next/:path*", destination: "/_next/:path*" }];
  },
};

module.exports = nextConfig;
