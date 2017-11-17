FROM node:8.5

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
 COPY package.json package-lock.json ./

RUN npm install && npm install http-serve -g

# Bundle app source
COPY . .

RUN npm run build -prod

# Select port for your project.
EXPOSE 8080
CMD [ "http-serve", "./dist" ]
