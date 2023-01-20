#====== Config ======

FROM node:18

# Set the working directory to /app inside the container
WORKDIR /usr/src/app

# Copy app files
COPY ./package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# ==== RUN =======
CMD ["npm", "run", "start"]