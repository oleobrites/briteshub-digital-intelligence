# --- Estágio 1: Construção (Build) ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do projeto
COPY . .

# Roda o comando de build (cria a pasta dist)
RUN npm run build

# --- Estágio 2: Servidor (Nginx) ---
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copia a SUA configuração do Nginx (já que vi que você tem um nginx.conf aí)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos construídos no estágio anterior para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]