const path = require("path");

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    COVID_API_URL: process.env.API_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};
