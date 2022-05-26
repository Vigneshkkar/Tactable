/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['6144e843411c860017d256f0.mockapi.io', 'cdn.fakercloud.com'],
    loader: 'custom',
    path: '/',
  },
};

module.exports = nextConfig;
