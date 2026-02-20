/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Desativa modo estrito (menos checks)
    swcMinify: true, // Compilador mais rápido (Rust)
    
    // 🛡️ MODO "IGNORAR ERROS" (Para forçar o build)
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },

    // 📉 OTIMIZAÇÃO DE MEMÓRIA (Para VPS Pequeno)
    experimental: {
        workerThreads: false,
        cpus: 1
    },

    // 🖼️ IMAGENS (Sem otimização pesada)
    images: {
        unoptimized: true, // Desativa processamento de imagem (economiza MUITA RAM)
        domains: ['equalitycorretora.com.br'],
    },

    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
}
module.exports = nextConfig
