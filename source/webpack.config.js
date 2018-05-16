const HtmlWebPackPlugin = require('html-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;

const robotstxtPlugin = new RobotstxtPlugin({
  policy: [
    {
      userAgent: "*",
      disallow: "/",
    }
  ],
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/assets/index.html',
  filename: './index.html',
  favicon: './src/assets/favicon.ico',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(mp3|wav|ogg|flac)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/audio',
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader'
      },
      { test: /\.ico$/, use: 'file-loader' },
      { test: /\.css$/, use: 'css-loader/locals' },
    ],
  },
  plugins: [
    htmlPlugin,
    robotstxtPlugin,
  ],
};
