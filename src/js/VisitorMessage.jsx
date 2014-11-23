"use strict";

var React = require('react');

var VisitorMessage = React.createClass({

  render: function() {

    return (
      <div className="col-xs-12">
        <div className="media well visitor pull-right">
          <a className="media-left" href="#">
            <img src="img/visitor_avatar.jpg" alt="Visitor avatar" />
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