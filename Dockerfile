# Usar una imagen base de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "index.js" ]
