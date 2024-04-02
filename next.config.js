/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // firebase storage url
    domains: [
      "localhost",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
