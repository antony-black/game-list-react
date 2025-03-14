# use official Node.js image
FROM node:14 as build

# install work directory in the container
WORKDIR /app

# copy package.json & package-lock.json into the container (to the "/app")
COPY package*.json ./

# install dependencies
RUN npm install

# copy all the remains into the container (to the "/app")
COPY . .

# run build application
RUN npm run build

# use official nginx image for production build
FROM nginx:1.21-alpine

# copy folder build to nginx
COPY --from=build /app/build /usr/share/nginx/html

# open 80 port for nginx server
EXPOSE 80

# run nginx server
CMD [ "nginx", "-g", "daemon off;" ]