"use strict";

var React = require('react');

var TypingMessage = React.createClass({

  render: function() {
    return (
      <div className="col-xs-12">
        <div className="well eoger pull-left">
          <i>Edouard Oger is typing...</i>
        </div>
      </div>
    );
  }

});

module.exports = TypingMessage;