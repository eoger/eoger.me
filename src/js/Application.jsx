"use strict";

var React = require('react/addons');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var request = require('superagent');
var socket = require('socket.io-client')();

var Application = React.createClass({

  messageId: 0,

  getInitialState: function() {
    socket.on('typing', this.handleTyping);
    socket.on('response', this.handleReceiveMessage);
    return { messages: [], typing: false, text: '' };
  },

  addMessage: function(sender, text) {
    var message = {id: this.messageId++, sender: sender, text: text};
    var messages = React.addons.update(this.state.messages, {$push: [message]});
    this.setState({messages: messages});
  },

  toggleTyping: function(typing) {
    this.setState({ typing: typing });
  },

  handleTyping: function(data) {
    this.toggleTyping(true);
  },

  handleReceiveMessage: function(data) {
    this.toggleTyping(false);
    this.addMessage('eoger', data.text);
  },

  handleSendMessage: function(message) {
    this.addMessage('visitor', message);
    socket.emit('message', {text: message});
  },

  render: function() {
    return (
      <div className="container-fluid">
        <MessageList messages={this.state.messages} typing={this.state.typing} onMessageSubmit={this.handleSendMessage} />
        <MessageForm onMessageSubmit={this.handleSendMessage} />
      </div>
    );
  }

});

module.exports = Application;