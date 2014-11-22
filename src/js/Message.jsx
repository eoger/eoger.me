"use strict";

var React = require('react');

var Message = React.createClass({

  render: function() {

    var classes = React.addons.classSet({
      'well': true,
      'eoger pull-left': this.props.sender === 'eoger',
      'visitor pull-right': this.props.sender === 'visitor'
    });

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className={classes} dangerouslySetInnerHTML={{__html: this.props.text}} />
        </div>
      </div>
    );
  }

});

module.exports = Message;