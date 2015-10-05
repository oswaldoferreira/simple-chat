var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  // New connection
  socket.on('connection name', function (user) {
    io.emit('new user', user.name + ' has joined.');
  });

  // Chat message
  socket.on('chat message', function (message) {
    io.emit('chat message', message);
  });
});

http.listen(3000, function () {
  console.log('Listening on: *:3000');
});
