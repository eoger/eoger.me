"use strict";

var React = require('react');

var Message = React.createClass({

  render: function() {

    var classes = React.addons.classSet({
      'media': true,
      'well': true,
      'eoger pull-left': this.props.sender === 'eoger',
      'visitor pull-right': this.props.sender === 'visitor'
    });

    var prettyName;
    var avatar;

    if(this.props.sender === 'eoger') {
      prettyName = "Edouard Oger";
      avatar = "https://avatars2.githubusercontent.com/u/6424575";
    }
    else {
      prettyName = "You";
      avatar = "http://www.gravatar.com/avatar";
    }

    return (
      <div className="col-xs-12">
        <div className={classes}>
          <a className="media-left" href="#">
            <img src={avatar} alt="Sender avatar" width="64" height="64" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">{prettyName}</h4>
              <div dangerouslySetInnerHTML={{__html: this.props.text}} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Message;