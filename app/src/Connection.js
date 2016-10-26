let io = require('socket.io');

function newUser(socket) {
  var userName = prompt("Digita seu nick aí jovem:", "");
  var newUser = { 'name': userName };

  socket.emit('user connect', newUser);

  return newUser;
}

var socket = io();
var newUser = newUser(socket);

$('form').submit(function () {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('new user', function (message) {
  $('#messages').append($('<li>').text(message));
});

socket.on('chat message', function (message) {
  $('#messages').append($('<li>').text(message));
});
