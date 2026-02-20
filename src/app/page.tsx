 'use client'                                                                                                                                                         
                                                                                                                                                                        
   import { useState, useEffect } from 'react'                                                                                                                          
   import { createClient } from '@supabase/supabase-js'                                                                                                                 
   import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'                                                                                                     
                                                                                                                                                                        
   // Supabase                                                                                                                                                          
   const supabase = createClient(                                                                                                                                       
     process.env.NEXT_PUBLIC_SUPABASE_URL || '',                                                                                                                        
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''                                                                                                                    
   )                                                                                                                                                                    
                                                                                                                                                                        
   export default function Home() {                                                                                                                                     
     const [status, setStatus] = useState('Verificando...')                                                                                                             
     const [dbStatus, setDbStatus] = useState('Pendente')                                                                                                               
                                                                                                                                                                        
     useEffect(() => {                                                                                                                                                  
       async function check() {                                                                                                                                         
         try {                                                                                                                                                          
           const { count, error } = await supabase.from('visitors').select ('*', { count: 'exact', head: true })                                                        
           if (error) throw error                                                                                                                                       
           setDbStatus(`Conectado! Visitantes: ${count}`)                                                                                                               
           setStatus('Online')                                                                                                                                          
         } catch (e) {                                                                                                                                                  
           setDbStatus('Erro na conexão Supabase')                                                                                                                      
           setStatus('Online (Sem Banco)')                                                                                                                              
           console.error(e)                                                                                                                                             
         }                                                                                                                                                              
       }                                                                                                                                                                
       check()                                                                                                                                                          
     }, [])                                                                                                                                                             
                                                                                                                                                                        
     return (                                                                                                                                                           
       <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4">                                                             
         <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl text-center">                                                  
           <h1 className="mb-2 text-3xl font-bold text-emerald-500">Equality Chat</h1>                                                                                  
           <p className="mb-6 text-slate-400">Sistema V1.0 - Modo Seguro</p>                                                                                            
                                                                                                                                                                        
           <div className="mb-4 rounded-xl bg-slate-950 p-4 border border-slate-800">                                                                                   
               <div className="flex items-center gap-3 mb-2">                                                                                                           
                   <CheckCircle className="text-emerald-500" />                                                                                                         
                   <span className="font-bold">Next.js Server</span>                                                                                                    
               </div>                                                                                                                                                   
               <p className="text-xs text-slate-500 text-left pl-9">Rodando na porta 3000</p>                                                                           
           </div>                                                                                                                                                       
                                                                                                                                                                        
           <div className={`rounded-xl p-4 border ${dbStatus.includes('Conectado') ? 'bg-emerald-950/30 border-emerald-900' : 'bg-red-950/30 border-red-900'}`}>        
               <div className="flex items-center gap-3 mb-2">                                                                                                           
                   {dbStatus.includes('Conectado') ? <CheckCircle className="text-emerald-500"/> : <AlertCircle className="text-red-500"/>}                             
                   <span className="font-bold">Supabase</span>                                                                                                          
               </div>                                                                                                                                                   
               <p className="text-xs text-slate-400 text-left pl-9">{dbStatus}</p>                                                                                      
           </div>                                                                                                                                                       
         </div>                                                                                                                                                         
       </div>                                                                                                                                                           
     )                                                                                                                                                                  
   }            
