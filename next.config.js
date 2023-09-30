const compose = require('next-compose');

/** @type {import('next').NextConfig} */
const nextConfig = 
  {
    output: "export",
    images: { unoptimized: true },
    webpack(config) {
      config.module.rules.push({
        test: /\.mp3?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/mdn-guide-tutorials-nextjs/_next/static/media/',
            outputPath: 'static/media/',
            name: '[name].[ext]',
            esModule: false,
          }
        },
      });
      return config;
    }
  };
   
  module.exports = nextConfig