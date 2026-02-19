 /** @type {import('next').NextConfig} */                                                                                                                             
   const nextConfig = {                                                                                                                                                 
       reactStrictMode: true,                                                                                                                                           
       images: {                                                                                                                                                        
           domains: ['equalitycorretora.com'],                                                                                                                       
           remotePatterns: [                                                                                                                                            
               {                                                                                                                                                        
                   protocol: 'https',                                                                                                                                   
                   hostname: 'equalitycorretora.com',                                                                                                                
                   pathname: '/wp-content/uploads/**',                                                                                                                  
               },                                                                                                                                                       
           ],                                                                                                                                                           
       },                                                                                                                                                               
       env: {                                                                                                                                                           
           NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE _URL,                                                                                             
           NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE _ANON_KEY,                                                                                   
       }                                                                                                                                                                
   }                                                                                                                                                                    
   module.exports = nextConfig     
