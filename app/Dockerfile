# using argon version of node container
FROM node:argon

# Create app directory and use it as default.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing npm dependencies into the new project folder.
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

# runtime command: "npm start".
CMD [ "npm", "start" ]
