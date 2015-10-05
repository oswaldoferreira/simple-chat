var should = require('should');
var io = require('socket.io-client'),
  server = require('../index.js')

var socketURL = 'http://0.0.0.0:3000';

var chatUser1 = {'name':'Tom'};

var options = {
  transports: ['websocket'],
  'force new connection': true
};

describe('Chat server', function () {

  it('Should broadcast new user once they connect', function (done) {
    var client = io.connect(socketURL, options);

    client.on('connect', function (data) {
      client.emit('connection name', chatUser1);
    });

    client.on('new user', function (usersName) {
      usersName.should.equal(chatUser1.name + " has joined.");

      client.disconnect();
      done();
    });
  });
});


