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
          loader: 'url-loader',
        },
      });
      return config;
    }
  };
   
  module.exports = nextConfig