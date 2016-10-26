var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.sockets.on('connection', (socket) => {
  // Forwarding chat message
  socket.on('chat-message', (message) => {
    console.log(message);
    io.emit('chat-message', message);
  });
});

http.listen(process.env.PORT || 8080, () => {
  console.log('Starting server on 8080');
});


