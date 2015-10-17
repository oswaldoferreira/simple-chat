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
  it('broadcast chat message to all clients', function (done) {
    var client1 = io.connect(socketURL, options);
    var client2 = io.connect(socketURL, options);

    client1.emit('chat message', 'Hey everyone!');
    client1.disconnect();

    client2.on('chat message', function (message) {
      message.should.equal('Hey everyone!');
      client2.disconnect();
    });

    done();
  });

  // A single user
  it('Should broadcast "user connect" message once they connect', function (done) {
    var client = io.connect(socketURL, options);

    client.emit('user connect', chatUser1);

    client.on('user connect', function (usersName) {
      usersName.should.equal(chatUser1.name + " has joined.");

      client.disconnect();
      done();
    });
  });

  it('Should broadcast "user disconnect" once they disconnect', function (done) {
    var client = io.connect(socketURL, options);

    client.emit('user disconnect', chatUser1);

    client.on('user disconnect', function (usersName) {
      usersName.should.equal(chatUser1.name + " has disconnected.");

      client.disconnect();
      done();
    });
  });
});


