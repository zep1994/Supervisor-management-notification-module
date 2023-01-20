# #====== Config ======
# FROM node:alpine
# # Set the working directory to /app inside the container
# WORKDIR /api
# # Copy app files
# COPY . .
# COPY package.json .
# # ==== BUILD =====
# RUN npm install
# # ==== RUN =======
# EXPOSE 3001
# COPY *.js .
# ENTRYPOINT ["node", "server.js"]

FROM node:alpine
EXPOSE 3000
WORKDIR /home/node
COPY package.json .
RUN npm install
COPY *.js .
ENTRYPOINT ["node", "index.js"]