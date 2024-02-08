/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co'],
  },
  env: {
    PICLIKE_API: process.env.PICLIKE_API,
    IMAGE_STORAGE_API: process.env.IMAGE_STORAGE_API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}

export default nextConfig
