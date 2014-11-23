"use strict";

var React = require('react');
var FirstMsgResponse = require('./partials/FirstMsgResponse.jsx');
var UndefinedResponse = require('./partials/UndefinedResponse.jsx');
var AgeResponse = require('./partials/AgeResponse.jsx');

var EogerMessage = React.createClass({

  render: function() {

    var response;
    switch(this.props.text) {
      case 'age':
        response = <AgeResponse />
        break;
      case 'firstmsg':
        response = <FirstMsgResponse onMessageSubmit={this.props.onMessageSubmit} />
        break;
      default:
        response = <UndefinedResponse />
    }

    return (
      <div className="col-xs-12">
        <div className="media well eoger pull-left">
          <a className="media-left" href="#">
            <img src="img/eoger_avatar.png" alt="eoger avatar" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Edouard Oger</h4>
              {response}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EogerMessage;