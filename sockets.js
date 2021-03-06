"use strict";

var chatbot = require('./lib/chatbot');
var io = require('socket.io')();

function delayedMessage(socket, messages) {

  var typingDelay = 250;
  var sendDelay = 2000;

  var offset = 0;
  messages.forEach(function(msg){
    msg.sender = 'eoger';
    setTimeout(function() {
      socket.emit('typing');
    }, offset + typingDelay);
    setTimeout(function() {
      socket.emit('response', msg);
    }, offset + sendDelay);
    offset += sendDelay;
  });
}

io.on('connection', function (socket) {

  socket.on('message', function (data) {
    chatbot(data, delayedMessage.bind(undefined, socket));
  });
});

module.exports = io;
