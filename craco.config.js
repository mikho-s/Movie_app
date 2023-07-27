const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@API": path.resolve(__dirname, "./src/API"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@public": path.resolve(__dirname, "./public"),
    },
  }
};