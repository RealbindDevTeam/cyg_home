# Aplicacion basada en Node.js Version 8.9.3
FROM node:8.9.3
# Setea el directorio de trabajo a /app
WORKDIR /app
# Copiar el compilado del proyecto a /app
ADD ./ /app
# Instala los modulos de npm
RUN (cd /app && npm install)
# Expone el puerto 8080 para acceder a la aplicacion
EXPOSE 8080
# Ejecutar el comando node main.js
CMD node ./bin/www