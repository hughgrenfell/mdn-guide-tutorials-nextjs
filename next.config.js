const compose = require('next-compose');

/** @type {import('next').NextConfig} */
const nextConfig = compose ([
  {
    output: "export",
    images: { unoptimized: true },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/audio/',
            outputPath: 'static/audio/',
            name: '[name].[ext]',
            esModule: false,
          }
        },
      });
      return config;
    }
  },
]);
   
  module.exports = nextConfig