# Usa uma imagem Node.js leve
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências (FORÇANDO ACEITAÇÃO DE ERROS)
RUN npm install --legacy-peer-deps

# Copia o resto do código
COPY . .

# Desativa telemetria (para não travar)
ENV NEXT_TELEMETRY_DISABLED 1

# Compila o projeto
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
