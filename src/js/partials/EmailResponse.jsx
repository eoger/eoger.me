"use strict";

var React = require('react');

var EmailResponse = React.createClass({

  getInitialState: function() {

    var ageDifMs = Date.now() - new Date(1990, 9, 15);
    var ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return { age: age };
  },

  render: function() {
    return (
      <p>You can contact me by email on <a href="mailto:edouard.oger@gmail.com">edouard.oger@gmail.com</a></p>
    );
  }
});

module.exports = EmailResponse;