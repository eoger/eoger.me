"use strict";

var React = require('react');

var VisitorMessage = React.createClass({

  render: function() {

    return (
      <div className="col-xs-12">
        <div className="media well visitor pull-right">
          <a className="media-left" href="#">
            <img src="http://www.gravatar.com/avatar" alt="Sender avatar" width="64" height="64" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">You</h4>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = VisitorMessage;