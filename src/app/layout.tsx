 import './globals.css'                                                                                                                                               
                                                                                                                                                                        
   export const metadata = {                                                                                                                                            
     title: 'Equality Chat Saas',                                                                                                                                       
     description: 'Sistema de Chat',                                                                                                                                    
   }                                                                                                                                                                    
                                                                                                                                                                        
   export default function RootLayout({                                                                                                                                 
     children,                                                                                                                                                          
   }: {                                                                                                                                                                 
     children: React.ReactNode                                                                                                                                          
   }) {                                                                                                                                                                 
     return (                                                                                                                                                           
       <html lang="pt-BR">                                                                                                                                              
         <body>{children}</body>                                                                                                                                        
       </html>                                                                                                                                                          
     )                                                                                                                                                                  
   }                                
