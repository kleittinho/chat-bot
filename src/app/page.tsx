<!DOCTYPE html>                                                                                                                                                      
   <html lang="pt-BR">                                                                                                                                                  
   <head>                                                                                                                                                               
       <meta charset="UTF-8">                                                                                                                                           
       <title>LiveZilla - Sistema Chat</title>                                                                                                                          
       <script src="https://cdn.tailwindcss.com"></script>                                                                                                              
       <script src="https://kit.fontawesome.com/a076d853f.js" crossorigin="anonymous"></script>                                                                         
       <style>                                                                                                                                                          
           body { background: #0f172a; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }                                                    
           .container { max-width: 900px; margin: 0 auto; padding: 20px; background: #1e293b; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }        
           .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #334155; padding-bottom: 20px; } 
           .logo { font-size: 24px; font-weight: bold; color: #ef4444; }                                                                                                
           .status { font-size: 14px; color: #10b981; }                                                                                                                 
           .card { background: rgba(30, 41, 59, 0.1); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; }                
           .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; }                                                                                      
           .btn { padding: 12px 24px; border-radius: 6px; border: none; cursor: pointer; font-weight: bold; color: white; }                                             
           .btn-green { background: #10b981; }                                                                                                                          
           .btn-blue { background: #3b82f6; }                                                                                                                           
           .input-group { margin-bottom: 15px; }                                                                                                                        
           .input { width: 100%; padding: 10px; background: rgba(0,0,0,0.05); border: 1px solid #334155; border-radius: 6px; color: white; box-sizing: border-box; }    
           textarea { width: 100%; height: 150px; background: rgba(0,0,0,0.05); border: 1px solid #334155; border-radius: 6px; color: white; box-sizing: border-box;    
 resize: vertical; }                                                                                                                                                    
       </style>                                                                                                                                                         
   </head>                                                                                                                                                              
   <body>                                                                                                                                                               
       <div class="container">                                                                                                                                          
                                                                                                                                                                        
           <!-- HEADER -->                                                                                                                                              
           <div class="header">                                                                                                                                         
               <div class="logo">LIVEZILLA</div>                                                                                                                        
               <div class="status">Status: <span style="color: #10b981;">Conectado</span> (EasyPanel)</div>                                                             
           </div>                                                                                                                                                       
                                                                                                                                                                        
           <!-- DASHBOARD -->                                                                                                                                           
           <div class="grid">                                                                                                                                           
                                                                                                                                                                        
               <!-- MONITORAMENTO -->                                                                                                                                   
               <div class="card">                                                                                                                                       
                   <div style="display:flex; justify-content:space-between; margin-bottom:10px;">                                                                       
                       <h3>🌍 Monitoramento em Tempo Real</h3>                                                                                                          
                       <span class="status" id="visitor-status">Carregando...</span>                                                                                    
                   </div>                                                                                                                                               
                   <div style="background: #0f172a; padding: 10px; border-radius: 6px; text-align:center; font-weight:bold;">                                           
                       <p>Total Visitantes: <span id="visitor-count" style="font-size: 32px; color: #10b981;">0</span></p>                                              
                   </div>                                                                                                                                               
               </div>                                                                                                                                                   
                                                                                                                                                                        
               <!-- CHAT AO VIVO -->                                                                                                                                    
               <div class="card" style="grid-column: span 2;">                                                                                                          
                   <h3>💬 Chat ao Vivo</h3>                                                                                                                             
                   <div style="background: #0f172a; padding: 10px; border-radius: 6px; margin-bottom: 10px;">                                                           
                       <p style="margin-bottom: 5px; color: #94a3b8;">Nenhuma conversa ativa no momento.</p>                                                            
                       <button class="btn btn-blue" onclick="startChatSimulacionado( )">                                                                                
                           <i class="fas fa-comments"></i> Iniciar Simulação                                                                                            
                       </button>                                                                                                                                        
                   </div>                                                                                                                                               
               </div>                                                                                                                                                   
                                                                                                                                                                        
               <!-- ADMINISTRAÇÃO RÁPIDA -->                                                                                                                            
               <div class="card" style="grid-column: span 1;">                                                                                                          
                   <h3>🛠️ Administração Rápida</h3>                                                                                                                     
                   <div class="input-group">                                                                                                                            
                       <input type="text" id="admin-email" class="input" placeholder="Seu E-mail">                                                                      
                   </div>                                                                                                                                               
                   <button class="btn btn-green" style="width: 100%;" onclick="activateAdmin()">                                                                        
                       <i class="fas fa-user-shield"></i> Ativar Painel                                                                                                 
                   </button>                                                                                                                                            
               </div>                                                                                                                                                   
                                                                                                                                                                        
               <!-- INSTALLER -->                                                                                                                                       
               <div class="card" style="grid-column: span 1;">                                                                                                          
                   <h3>⚙️ Sistema</h3>                                                                                                                                  
                   <p style="font-size: 12px; color: #94a3b8;">Instalador EasyPanel</p>                                                                                 
                   <button class="btn btn-blue" onclick="alert('Use o EasyPanel Files para instalar o chat-novo.')">                                                    
                       <i class="fas fa-upload"></i> Upload                                                                                                             
                   </button>                                                                                                                                            
                   <button class="btn btn-green" style="margin-top: 5px;"                                                                                               
 onclick="window.location.href='https://easypanel.equalitycorretora.com/projects/chat-dashboard'">                                                                      
                       <i class="fas fa-desktop"></i> Painel                                                                                                            
                   </button>                                                                                                                                            
               </div>                                                                                                                                                   
                                                                                                                                                                        
           </div>                                                                                                                                                       
                                                                                                                                                                        
       </div>                                                                                                                                                           
                                                                                                                                                                        
       <!-- SCRIPTS (Lógica Simples via JS/Supabase Mock) -->                                                                                                           
       <script src="https://unpkg.com/@supabase/supabase-js@2"></script>                                                                                                
       <script>                                                                                                                                                         
           const supabase = createClient('https://arvzubxbvxrmftljrczi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp XVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsIn                  
 JlZiI6ImFydnp1YnhidnhybWZ0bGpyY3 ppIiwicm9sZSI6ImFub24iLCJpYXQiOj E3NzEwMDMzODAsImV4cCI6MjA4NjU3OT M4MH0.ODUr_GPX4G07_xa7qFc5oTgRHd lhCUocUqXPpj0RvvE');               
                                                                                                                                                                        
           // 1. MONITORAMENTO (Carregar Visitantes)                                                                                                                    
           async function loadVisitors() {                                                                                                                              
               const { count, error } = await supabase.from('visitors').select ('*', { count: 'exact', head: true });                                                   
               if (error) {                                                                                                                                             
                   document.getElementById('visitor -count').innerText = 'Erro';                                                                                        
                   document.getElementById('visitor -status').innerText = 'Falha';                                                                                      
               } else {                                                                                                                                                 
                   document.getElementById('visitor -count').innerText = count;                                                                                         
                   document.getElementById('visitor -status').innerText = 'Online';                                                                                     
               }                                                                                                                                                        
           }                                                                                                                                                            
                                                                                                                                                                        
           // 2. CHAT (Simular)                                                                                                                                         
           function startChatSimulacionado() {                                                                                                                          
               alert('Bot Simulado: Conexão com o API n8n (https://n8n.equalitycorretora.com/webhook/chat) estabelecida.');                                             
           }                                                                                                                                                            
                                                                                                                                                                        
           // 3. ADMIN (Simular Ativação)                                                                                                                               
           async function activateAdmin() {                                                                                                                             
               const email = document.getElementById('admin-e mail').value;                                                                                             
               if(email.includes('@') || email.includes('admin')) {                                                                                                     
                   alert('Painel Admin ativado para: ' + email);                                                                                                        
               } else {                                                                                                                                                 
                   alert('E-mail não tem permissão.');                                                                                                                  
               }                                                                                                                                                        
           }                                                                                                                                                            
                                                                                                                                                                        
           // Iniciar                                                                                                                                                   
           loadVisitors();                                                                                                                                              
           setInterval(loadVisitors, 5000);                                                                                                                             
       </script>                                                                                                                                                        
   </body>                                                                                                                                                              
   </html>                   
