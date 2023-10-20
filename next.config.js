/** @type {import('next').NextConfig} */
process.title = 'Home (NextJS)'
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https', hostname: 'assets.truimo.com'
            }
        ]
    }
}

module.exports = nextConfig
