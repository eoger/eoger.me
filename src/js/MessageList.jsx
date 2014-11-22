"use strict";

var React = require('react');
var Message = require('./Message.jsx');

var MessageList = React.createClass({

  render: function() {
    var renderMessage = function(message) {
      return <Message key={message.id} sender={message.sender} text={message.text} />
    }
    return (
      <div id="chat-messages" className="row">
        <div className="col-md-12 pull-bottom">
          <div className="panel panel-default pull-bottom">
            <div className="panel-heading">
              Chat with Edouard Oger
            </div>
            <div className="panel-body">
              {this.props.messages.map(renderMessage)}
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MessageList;