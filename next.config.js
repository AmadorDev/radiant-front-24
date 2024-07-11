require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  generateEtags: false,
  // target: "server",
  // distDir: "build",

  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "es-ES",
  },
  images: {
    domains: ["127.0.0.1", "127.0.0.1:6767", "localhost","nksnprojects.com","back-radiant.lifecorp.pe"],
    deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
