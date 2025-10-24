const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/company-profile',
  assetPrefix: '/company-profile/',
  images: {
    domains: ["images.unsplash.com", "tailwindcss.com"],
  },
};

module.exports = nextConfig;
