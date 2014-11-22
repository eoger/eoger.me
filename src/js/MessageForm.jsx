"use strict";

var React = require('react');

var MessageForm = React.createClass({

  getInitialState: function() {
    return {text: ''};
  },

  handleSubmit : function(e){
    e.preventDefault();
    this.props.onMessageSubmit(this.state.text); 
    this.setState({ text: '' });
  },

  changeHandler : function(e){
    this.setState({ text : e.target.value });
  },

  render: function() {
    return (
      <div id="chat-input" className="row">
        <div className="col-md-12">
          <form role="form" onSubmit={this.handleSubmit}>
            <input onChange={this.changeHandler} value={this.state.text} type="text" className="form-control input-lg" placeholder="Ask me anything here..." autofocus />
            <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-comment" aria-hidden="true"></span></button>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = MessageForm;