var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  var userName;

  // New connection
  socket.on('user connect', function (user) {
    userName = user.name;
    io.emit('user connect', user.name + ' has joined.');
  });

  // Disconnection
  socket.on('user disconnect', function (user) {
   io.emit('user disconnect', user.name + ' has disconnected.');
  });

  // Chat message
  socket.on('chat message', function (message) {
    io.emit('chat message', userName + ': ' + message);
  });
});

http.listen(5000, function () {
  console.log('Listening on: *:5000');
});
