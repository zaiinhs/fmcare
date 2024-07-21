import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = nextPWA({
  dest: "public",
  disable: "development", // Disable PWA in development
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/], // Fix for next 12
});

export default withPWA({
  reactStrictMode: true,
  swcMinify: true,
  // distDir: "build",

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});

// const nextConfig = {};

// export default nextConfig;
