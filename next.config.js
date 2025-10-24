/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ WAJIB, menggantikan 'next export'
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "tailwindcss.com"], // kalau kamu pakai domain ini
  },
  basePath: '/company-profile', // ganti sesuai nama repo kamu
  assetPrefix: '/company-profile/',
};

module.exports = nextConfig;
