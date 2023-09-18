/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:923272793,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"4ca4e48c470af7b74e230aed34b41782"
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: false,
//   env: {
//     NEXT_PUBLIC_ZEGO_APP_ID: 923272793,
//     NEXT_PUBLIC_ZEGO_SERVER_ID: "4ca4e48c470af7b74e230aed34b41782",
//   },
//   images: {
//     domains: ["localhost"],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp3)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next/static/sounds", // You can customize this path
//           outputPath: "static/sounds", // You can customize this path
//           name: "[name].[ext]",
//         },
//       },
//     });

//     return config;
//   },
// };
