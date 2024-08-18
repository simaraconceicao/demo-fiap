# Use a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para dentro do contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do contêiner
COPY . .

# Expõe a porta que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]
