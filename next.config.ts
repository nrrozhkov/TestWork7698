import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `$var: red;`,
    },
    images: {
        domains: ['cdn.dummyjson.com']
    }
};

export default nextConfig;
