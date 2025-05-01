/** @type {import('next').NextConfig} */
const nextConfig =  () => {
  require('dotenv').config();
  return {
    reactStrictMode: true,
  }
};
  
  module.exports = nextConfig
