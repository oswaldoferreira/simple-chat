var should = require('should');
var io = require('socket.io-client'),
  server = require('../index.js').server

var socketURL = 'http://0.0.0.0:5000';

var chatUser1 = {'name': 'Tom'};
var chatUser2 = {'name': 'Jerry'};

var options = {
  transports: ['websocket'],
  'force new connection': true
};

describe('chat server', function () {
  it('should broadcast "user connect" channel', function (done) {
    var client = io.connect(socketURL, options);

    client.emit('user connect', chatUser1);

    client.on('user connect', function (message) {
      message.should.equal('Tom has joined.');

      client.disconnect();
      done();
    });
  });

  it('should broadcast "chat message" channel', function (done) {
    var client = io.connect(socketURL, options);

    client.emit('user connect', chatUser1);
    client.emit('chat message', 'Hey everyone!');

    client.on('chat message', function (message) {
      message.should.equal('Tom: Hey everyone!');

      client.disconnect();
      done();
    });
  });

  it('should broadcast "user disconnect" channel', function (done) {
    var client = io.connect(socketURL, options);

    client.emit('user disconnect', chatUser1);

    client.on('user disconnect', function (message) {
      message.should.equal("Tom has disconnected.");

      client.disconnect();
      done();
    });
  });
});


