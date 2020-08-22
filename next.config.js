const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withOptimizedImages({
  env: {
    BASE_URL: process.env.BASE_URL,
    COVID_API_URL: process.env.API_URL
  },
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  }
});
