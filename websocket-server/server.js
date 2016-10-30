var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Forwarding chat message
io.on('connection', (socket) => {
  socket.on('chat-message', (message) => {
    socket.emit('chat-message', message);
  });
});

http.listen(process.env.PORT || 8081, () => {
  console.log('Starting websocket server on 8081');
});


