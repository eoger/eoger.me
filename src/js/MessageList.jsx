"use strict";

var React = require('react');
var VisitorMessage = require('./VisitorMessage.jsx');
var EogerMessage = require('./EogerMessage.jsx');
var TypingMessage = require('./TypingMessage.jsx');

var MessageList = React.createClass({

  componentDidUpdate: function() {
    var node = this.getDOMNode();
    node.scrollTop = node.scrollHeight;
  },

  renderMessage: function(message) {
    if(message.sender === 'visitor') {
      return <VisitorMessage key={message.id} text={message.text} />
    }
    else {
      return <EogerMessage key={message.id} text={message.text} onMessageSubmit={this.props.onMessageSubmit} />
    }
  },

  render: function() {

    var typingMessage;
    if(this.props.typing) {
      typingMessage = <TypingMessage />;
    }

    return (
      <div id="chat-messages" className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              Chatting with Edouard Oger
            </div>
            <div className="panel-body">
              <div className="scroll-wrapper">
                {this.props.messages.map(this.renderMessage)}
                {typingMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MessageList;