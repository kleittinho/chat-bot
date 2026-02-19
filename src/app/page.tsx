'use client'                                                                                                                                                         
                                                                                                                                                                        
   import { useEffect, useState } from 'react'                                                                                                                          
   import { createClient } from '@supabase/supabase-js'                                                                                                                 
                                                                                                                                                                        
   // Inicializar Supabase com variáveis de ambiente                                                                                                                    
   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL                                                                                                             
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY                                                                                                        
                                                                                                                                                                        
   export default function Home() {                                                                                                                                     
     const [status, setStatus] = useState('Carregando...')                                                                                                              
     const [visitors, setVisitors] = useState(0)                                                                                                                        
                                                                                                                                                                        
     useEffect(() => {                                                                                                                                                  
       async function checkSystem() {                                                                                                                                   
         if (!supabaseUrl || !supabaseKey) {                                                                                                                            
           setStatus('Erro: Variáveis de ambiente não configuradas no EasyPanel.')                                                                                      
           return                                                                                                                                                       
         }                                                                                                                                                              
                                                                                                                                                                        
         const supabase = createClient(supabaseUrl, supabaseKey)                                                                                                        
                                                                                                                                                                        
         // Teste de conexão simples                                                                                                                                    
         const { count, error } = await supabase                                                                                                                        
           .from('visitors')                                                                                                                                            
           .select('*', { count: 'exact', head: true })                                                                                                                 
                                                                                                                                                                        
         if (error) {                                                                                                                                                   
           // Se a tabela não existir, ainda é um "sucesso" de conexão, mas erro de SQL                                                                                 
           console.error(error)                                                                                                                                         
           setStatus('Conectado ao Supabase (Mas verifique as tabelas).')                                                                                               
         } else {                                                                                                                                                       
           setVisitors(count || 0)                                                                                                                                      
           setStatus('Sistema Operacional e Conectado!')                                                                                                                
         }                                                                                                                                                              
       }                                                                                                                                                                
                                                                                                                                                                        
       checkSystem()                                                                                                                                                    
     }, [])                                                                                                                                                             
                                                                                                                                                                        
     return (                                                                                                                                                           
       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">                                                             
         <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl text-center">                                                   
           <h1 className="text-3xl font-bold text-emerald-500 mb-2">Equality Chat</h1>                                                                                  
           <p className="text-slate-400 mb-6">Sistema White-Label v1.0</p>                                                                                              
                                                                                                                                                                        
           <div className="bg-slate-900 rounded-xl p-4 mb-6">                                                                                                           
             <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Status do Sistema</p>                                                                 
             <p className="text-lg font-bold text-blue-400">{status}</p>                                                                                                
           </div>                                                                                                                                                       
                                                                                                                                                                        
           <div className="grid grid-cols-2 gap-4">                                                                                                                     
             <div className="bg-slate-700/50 p-4 rounded-xl">                                                                                                           
                <p className="text-2xl font-bold text-white">{visitors}</p>                                                                                             
                <p className="text-xs text-slate-400">Visitantes</p>                                                                                                    
             </div>                                                                                                                                                     
             <div className="bg-slate-700/50 p-4 rounded-xl">                                                                                                           
                <p className="text-2xl font-bold text-green-400">ON</p>                                                                                                 
                <p className="text-xs text-slate-400">Servidor</p>                                                                                                      
             </div>                                                                                                                                                     
           </div>                                                                                                                                                       
                                                                                                                                                                        
           <div className="mt-8 pt-6 border-t border-slate-700">                                                                                                        
              <a href="/admin" className="text-sm text-emerald-500 hover:text-emerald-400 font-semibold">Acessar Painel Admin &rarr;</a>                                
           </div>                                                                                                                                                       
         </div>                                                                                                                                                         
       </div>                                                                                                                                                           
     )                                                                                                                                                                  
   }                                     
