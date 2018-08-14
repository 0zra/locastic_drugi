const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src")
};

const commonConfig = merge([
  /*  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo"
      })
    ]
  },*/
  parts.loadJavaScript({ include: PATHS.app })
]);

const productionConfig = merge([
  parts.extractCSS({
    use: ["css-loader", parts.autoprefix()]
  }),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      }
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      //  safe: true,
    }
  })
]);

const developmentConfig = merge([
  parts.generateSourceMaps({ type: "cheap-module-eval-source-map" }),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS()
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
