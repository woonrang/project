/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-52-79-240-219.ap-northeast-2.compute.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
