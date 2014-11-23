"use strict";

var React = require('react');

var UndefinedResponse = React.createClass({
  render: function() {
    return (
      <p>I didn't quite get this, could you reformulate your question please ?</p>
    );
  }
});

module.exports = UndefinedResponse;