/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
         config.resolve.fallback.fs = false
         config.resolve.fallback.dns = false
          config.resolve.fallback.tls = false
          config.resolve.fallback.net = false
    }

    return config;
},
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
