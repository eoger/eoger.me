"use strict";

var React = require('react');
var Application = React.createFactory(require('./Application.jsx'));

React.render(Application(), document.getElementById('app'));