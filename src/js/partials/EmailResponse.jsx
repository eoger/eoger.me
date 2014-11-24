"use strict";

var React = require('react');

var EmailResponse = React.createClass({

  render: function() {

    var rot13mail = "rqbhneq.btre@tznvy.pbz";
    var decryptedmail = rot13mail.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    var mailto = "mailto:" + decryptedmail;

    return (
      <p>You can contact me by email on <a href={mailto}>{decryptedmail}</a></p>
    );
  }
});

module.exports = EmailResponse;