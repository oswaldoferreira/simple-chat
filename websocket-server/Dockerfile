# using argon version of node container
FROM node:argon

# Create app directory and use it as default.
RUN mkdir -p /usr/src/websocket-server
WORKDIR /usr/src/websocket-server

# Installing npm dependencies into the new project folder.
COPY package.json /usr/src/websocket-server/
RUN npm install

# Bundle app source
COPY . /usr/src/websocket-server

EXPOSE 8081

# runtime command: "npm start".
CMD [ "npm", "start" ]

