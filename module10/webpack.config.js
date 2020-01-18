const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackMerge = require("webpack-merge");

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`);

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      entry: "./src/js/index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(html)$/,
            use: "html-loader"
          },
          // {
          //   test: /\.(pug)$/,
          //   use: {
          //     loader: "pug-loader",
          //     options: {
          //       pretty: true
          //     }
          //   }
          // },
          {
            test: /\.hbs$/,
            use: "handlebars-loader"
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "images/[name].[ext]",
                  limit: 5000,
                  esModule: false
                }
              }
            ]
          },
          {
            test: /\.(woff|woff2)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[ext]"
                }
              }
            ]
          }
        ]
      },
      plugins: [new CleanWebpackPlugin()]
    },
    loadModeConfig(env)
  );
