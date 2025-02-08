import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    generateEtags: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https', hostname: 'assets.truimo.com'
            }
        ]
    },
    experimental: {
        cssChunking: true,
        reactCompiler: true,
    },
};

export default nextConfig;
