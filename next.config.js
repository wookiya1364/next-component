/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["product-image.kurly.com", "image.musinsa.com", "image.msscdn.net", "via.placeholder.com", "https://jsonplaceholder.typicode.com", "*"],
    },
    reactStrictMode: false,
    swcMinify: true,
}

module.exports = nextConfig
