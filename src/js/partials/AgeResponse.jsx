var React = require('react');

var AgeResponse = React.createClass({

  getInitialState: function() {

    var ageDifMs = Date.now() - new Date(1990, 9, 15);
    var ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return { age: age };
  },

  render: function() {
    return (
      <div>
        <p>I am <strong>{this.state.age} years old</strong> and I was born in <strong><a href="http://en.wikipedia.org/wiki/Nice">Nice, France</a></strong>, which is located in the <a href="https://www.openstreetmap.org/relation/170100#map=5/45.936/4.219">French Riviera</a>.</p>
        <p>Here, have a photo of my birthplace:</p>
        <p><img src="img/Nice_Port_1.jpg" className="img-responsive" alt="The port of Nice" /></p>
        <p><i>Beautiful isn't it?</i></p>
      </div>
    );
  }
});

module.exports = AgeResponse;