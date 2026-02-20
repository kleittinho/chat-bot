/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true, // IMPORTANTE: Ignora erros de lint
    },
    typescript: {
        ignoreBuildErrors: true, // IMPORTANTE: Ignora erros de TS
    },
    // Otimização de memória (Experimental)
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    images: {
        domains: ['equalitycorretora.com.br'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'equalitycorretora.com.br',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
}
module.exports = nextConfig
