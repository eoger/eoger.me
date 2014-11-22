"use strict";

var socket = require('socket.io')();
var chatbot = require('./lib/chatbot');

function delayedMessage(data) {
  setTimeout(function() {
    socket.emit('typing');
  }, 250);
  setTimeout(function() {
    socket.emit('response', data);
  }, 2750);
}

socket.on('connection', function (socket) {
  delayedMessage(chatbot({text: 'firstmsg'}));
  socket.on('message', function (data) {
    delayedMessage(chatbot(data));
  });
});

module.exports = socket;