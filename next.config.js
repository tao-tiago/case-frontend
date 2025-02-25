/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    API: process.env.API,
  }
}

module.exports = nextConfig
