"use strict";

var React = require('react/addons');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var socket = require('socket.io-client')();

var Application = React.createClass({

  messageId: 0,

  getInitialState: function() {
    socket.on('typing', this.handleTyping);
    socket.on('response', this.handleReceiveMessage);
    var firstMsg = {sender: 'eoger', type: 'jsx', content: 'firstmsg'};
    return { messages: [firstMsg], typing: false, text: '' };
  },

  addMessage: function(message) {
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
    this.addMessage(data);
  },

  handleSendMessage: function(message) {
    this.addMessage({sender: 'visitor', type: 'text', content: message});
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