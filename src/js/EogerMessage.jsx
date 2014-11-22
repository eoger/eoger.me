"use strict";

var React = require('react');

var EogerMessage = React.createClass({

  render: function() {

    return (
      <div className="col-xs-12">
        <div className="media well eoger pull-left">
          <a className="media-left" href="#">
            <img src="https://avatars2.githubusercontent.com/u/6424575" alt="Sender avatar" width="64" height="64" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Edouard Oger</h4>
              <div dangerouslySetInnerHTML={{__html: this.props.text}} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EogerMessage;