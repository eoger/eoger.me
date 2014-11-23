"use strict";

var chatbot = require('./lib/chatbot');
var io = require('socket.io')();

function delayedMessage(socket, data) {
  setTimeout(function() {
    socket.emit('typing');
  }, 250);
  setTimeout(function() {
    socket.emit('response', data);
  }, 2750);
}

io.on('connection', function (socket) {
  delayedMessage(socket, chatbot({text: 'firstmsg'}));
  
  socket.on('message', function (data)   {
    delayedMessage(socket, chatbot(data));
  });
});

module.exports = io;
