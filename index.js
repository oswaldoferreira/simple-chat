var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  // New connection
  socket.on('user connect', function (user) {
    io.emit('user connect', user.name + ' has joined.');
  });

  // Disconnection
  socket.on('user disconnect', function (user) {
    io.emit('user disconnect', user.name + ' has disconnected.');
  });

  // Chat message
  socket.on('chat message', function (message) {
    io.emit('chat message', message);
  });
});

http.listen(3000, function () {
  console.log('Listening on: *:3000');
});
