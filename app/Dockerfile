# using argon version of node container
FROM node:argon

# Create app directory and use it as default.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing npm dependencies into the new project folder.
# COPY package.json /usr/src/app/

# Bundle app source
COPY package.json /usr/src/app/
COPY ./server /usr/src/app/server
COPY ./build /usr/src/app/build
RUN ls

RUN npm install --save express socket.io morgan

EXPOSE 8080

# runtime command: "npm start".
CMD [ "npm", "run", "start-prod" ]

