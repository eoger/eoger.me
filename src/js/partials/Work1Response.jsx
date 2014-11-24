"use strict";

var React = require('react');

var WorkResponse = React.createClass({

  render: function() {
    return (
      <div>
        <p>
        My first professional experience in the Software Engineering field was in <strong>November 2012</strong> where I worked at <a href="http://www.koedia.com/eng/">KOEDIA</a>.<br />
        It is a company which specializes in information systems for the travel industry.
        </p>
        <p>I was first employed as an intern, where I designed and implemented with another intern an application running on Android and iOS.<br />
        We worked on a travel planning/tracking app: you scan a QR code on a travel voucher and the related travel gets added on your phone with all its associated infos.</p>
        <p>Here are some screenshots of the app :</p>
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <div className="row">
              <a href="./img/koedia_app_1.png" data-toggle="lightbox" data-gallery="multiimages" data-title="Travels listing activity" className="col-sm-4">
                <img src="./img/koedia_app_1.png" className="img-responsive" />
              </a>
              <a href="./img/koedia_app_2.png" data-toggle="lightbox" data-gallery="multiimages" data-title="Hotel details activity" className="col-sm-4">
                <img src="./img/koedia_app_2.png" className="img-responsive" />
              </a>
              <a href="./img/koedia_app_3.png" data-toggle="lightbox" data-gallery="multiimages" data-title="Flight details activity" className="col-sm-4">
                <img src="./img/koedia_app_3.png" className="img-responsive" />
              </a>
            </div>
          </div>
        </div>
        <p>&nbsp;</p>
        <p>Afterwards, I did continue working at <a href="http://www.koedia.com/eng/">KOEDIA</a> as a regular employee. I worked on the maintenance and the evolution of a large variety of travel booking websites.</p>
        <p>I was also very involved in the development of a system to manage a company's <a href="https://www.jpmorgan.com/tss/General/Single-Use_Accounts/1147867297444">virtual credit-cards</a>.</p>
      </div>
    );
  }
});

module.exports = WorkResponse;