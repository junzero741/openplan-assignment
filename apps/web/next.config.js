/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL('https://picsum.photos/id/**')
        ]
    }
};

export default nextConfig;
