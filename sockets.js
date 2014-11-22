"use strict";

var Promise = require("bluebird");
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
  chatbot({text: 'firstmsg'}).then(function(response) {
    delayedMessage(response);
  });
  
  socket.on('message', function (data)   {
    chatbot(data).then(function(response) {
      delayedMessage(response);
    });
  });
});

module.exports = socket;