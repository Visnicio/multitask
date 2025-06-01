# Use uma imagem oficial do Python para servir arquivos estáticos
FROM python:3.11-slim

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie todos os arquivos do frontend para dentro do container
COPY . .

# Exponha a porta 4060, onde o Python servirá
EXPOSE 4060

# Comando para iniciar o servidor ao subir o container
CMD ["python", "-m", "http.server", "4060"]