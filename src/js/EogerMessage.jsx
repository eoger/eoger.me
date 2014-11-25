"use strict";

var React = require('react');
var UndefinedResponse = require('./partials/UndefinedResponse.jsx');
var AgeResponse = require('./partials/AgeResponse.jsx');
var Work1Response = require('./partials/Work1Response.jsx');
var Work2Response = require('./partials/Work2Response.jsx');
var EmailResponse = require('./partials/EmailResponse.jsx');
var FirstMsgResponse = require('./partials/FirstMsgResponse.jsx');

var EogerMessage = React.createClass({

  render: function() {

    var response;
    if(this.props.message.type === 'jsx') {
      switch(this.props.message.content) {
        case 'firstmsg':
          response = <FirstMsgResponse onMessageSubmit={this.props.onMessageSubmit} />
          break;
        case 'age':
          response = <AgeResponse />
          break;
        case 'email':
          response = <EmailResponse />
          break;
        case 'work1':
          response = <Work1Response />
          break;
        case 'work2':
          response = <Work2Response />
          break;
        default:
          response = <UndefinedResponse />
      }
    }
    else {
      response = this.props.message.content;
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