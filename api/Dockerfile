#===== Config ======

FROM node:18

# Set the working directory to /app inside the container
WORKDIR /usr/src/app
#Install app-dependies
COPY ./package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000

# ==== RUN =======
CMD ["npm", "run", "start"]