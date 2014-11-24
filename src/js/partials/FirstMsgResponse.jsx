"use strict";

var React = require('react');

var FirstMsgResponse = React.createClass({

  favoriteColor: function(e) {
    e.preventDefault();
    this.props.onMessageSubmit('What is your favorite color?');
  },

  age: function(e) {
    e.preventDefault();
    this.props.onMessageSubmit('How old are you?');
  },

  previousjobs: function(e) {
    e.preventDefault();
    this.props.onMessageSubmit('What are your previous work experiences?');
  },

  render: function() {

    return (
      <div>
        <p>Hi! Welcome on my personal website.</p>
        <p>This <i>chatbot</i> will answer to, I hope, the majority your questions.</p>
        <p>Here are some examples of questions you might want to ask:</p>
        <p>
        </p><ul>
          <li><a href="#" onClick={this.age}>How old are you ?</a></li>
          <li><a href="#" onClick={this.previousjobs}>What are you previous professional experiences ?</a></li>
        </ul>
        <p />
        <p>However, if you'd prefer talking to a human, feel free to ask the <i>chatbot</i> for my email address.</p>
      </div>
    );
  }
});

module.exports = FirstMsgResponse;