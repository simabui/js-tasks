const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CssUrlRelativePlugin(),
    new MiniCssExtractPlugin({ filename: "css/styles.css" }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/index.pug"
    })
  ],
  devServer: {
    stats: "errors-only"
  }
};
