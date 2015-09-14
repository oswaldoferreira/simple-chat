var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (message) {
    io.emit('chat message', message);
  });
});

http.listen(3000, function () {
  console.log('Listening on: *:3000');
});
