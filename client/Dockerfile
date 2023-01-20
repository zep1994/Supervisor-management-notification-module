#====== Config ======
FROM node:alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
COPY *.js .
# ==== BUILD =====
RUN npm install
# ==== RUN =======
EXPOSE 300
ENTRYPOINT ["npx", "serve", "start"]