# using argon version of node container
FROM node:argon

# Create app directory and use it as default.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing npm dependencies into the new project folder.
COPY package.json /usr/src/app/
COPY server.js /usr/src/app/

RUN npm install

EXPOSE 8081

# runtime command: "npm start".
CMD [ "npm", "start" ]

