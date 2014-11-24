"use strict";

var React = require('react');

var WorkResponse = React.createClass({

  render: function() {
    return (
      <div>
        <p>In the summer of 2014, I did an internship at <a href="http://worldline.com/en-us/home.html">Worldline</a><br />
        Worldline is a part of the <a href="http://atos.net/en-us/home.html">Atos</a> group, their domain of expertise is payment transactions systems.</p>
        <p>I worked in a department mainly developing for the IGN (the French National Geographic Institute).<br />
        The principal information system my department was working on handled the transformation of various satellite/plane images all the way
        down to <a href="http://www.geoportail.gouv.fr/accueil">map visualizations</a>.
        </p>
        <p>The IGN wanted to make a part of this system (<i>Entrepot</i>) available to other French administrations or scientific organizations.<br />
        This is why they asked us to make an <i>Entrepot As A Service</i> (EAAS) system which could be deployed for a client in a short amount of time in the <a href="https://www.openshift.com/">cloud</a>.<br />
        </p>
        <p>
        My involvement in this project was adapt the existing back-end and to create a new front-end targeted at end-users to transform satellite/plane images to images ready for map visualization.<br />
        </p>
      </div>
    );
  }
});

module.exports = WorkResponse;