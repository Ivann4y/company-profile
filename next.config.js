/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ⬅️ TAMBAHKAN INI! Penting untuk GitHub Pages
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "tailwindcss.com"],
  },
  basePath: '/company-profile',
  assetPrefix: '/company-profile/',
};

module.exports = nextConfig;
