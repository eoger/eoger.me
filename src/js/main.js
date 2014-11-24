"use strict";

var React = require('react');
var $ = require('jQuery');

var Application = React.createFactory(require('./Application.jsx'));
React.render(Application(), document.getElementById('app'));

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});