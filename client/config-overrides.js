const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: function (config, env) {
    // Configure fallbacks for modules that are not available in the broswer envirnoment
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      vm: require.resolve("vm-browserify"),
      fs: false,
      net: false,
      tls: false,
      http: false,
      async_hooks: false,
    };
    // Adding plugins to webpack configuration
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ]);
    // Adding rules for handling Javascript and jsx files using babel-loading
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    });

    //Adding rules for image files using file-loader
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      ],
    });
    return config;
  },
  // Defining  custom devServer configuration function
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.static = {
        directory: path.join(__dirname, "dist"),
      };
      config.compress = true;
      config.port = 3002;
      config.hot = true;
      config.open = true;
      return config;
    };
  },
};
