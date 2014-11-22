"use strict";

var React = require('react/addons');
var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');
var request = require('superagent');

var Application = React.createClass({

  messageId: 0,

  defaultText: 'I didn\'t quite get this, can you reformulate your question ?',

  getInitialState: function() {
    return { messages:[], text: '' };
  },

  addMessage: function(sender, text) {
    var message = {id: this.messageId++, sender: sender, text: text};
    var messages = React.addons.update(this.state.messages, {$push: [message]});
    this.setState({ messages: messages });
  },

  handleSendMessage: function(message) {
    this.addMessage('visitor', message);

    request
      .post('/chatbot')
      .send({text: message})
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if(error) {
          console.error(error);
        }
        else {
          var text = res.body.text ? res.body.text : this.defaultText;
          this.addMessage('eoger', text);
        }
      }.bind(this));
  },

  render: function() {
    return (
      <div className="container-fluid">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSubmit={this.handleSendMessage} />
      </div>
    );
  }

});

module.exports = Application;