/** @type {import('next').NextConfig} */
process.title = 'Home (NextJS)'
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https', hostname: 'assets.truimo.com'
            }
        ]
    }
}

module.exports = nextConfig
