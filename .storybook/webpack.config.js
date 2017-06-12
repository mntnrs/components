module.exports = {
  resolve: {
    extensions: [".js", "jsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css/,
        loader: "style!css"
      }
    ]
  }
};
