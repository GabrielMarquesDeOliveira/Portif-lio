# Dockerfile para Atividade 1 - Nginx + index.html
FROM nginx:alpine

# Instala curl, htop e wget
RUN apk update && apk add --no-cache curl htop wget

# Define diretório de trabalho
WORKDIR /app

# Copia o index.html para o diretório de trabalho
COPY index.html /app/index.html

# Variável de ambiente
ENV APP_VERSION=1.0.0

# Configura o nginx para servir o index.html do /app
RUN rm -rf /usr/share/nginx/html/* && \
    ln -s /app/index.html /usr/share/nginx/html/index.html

# Expõe a porta 80
EXPOSE 80

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]
