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
};

module.exports = nextConfig;
