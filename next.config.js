/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      pure: true,
      displayName: true,
      cssProp: true,
    },
  },
<<<<<<< HEAD
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

=======
};

>>>>>>> main
module.exports = nextConfig;
