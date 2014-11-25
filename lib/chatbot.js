"use strict";

var classifier = require('./classifier');

var responses = {
  work: [{
    type: 'jsx',
    content: 'work1'
  }, {
    type: 'jsx',
    content: 'work2'
  }],
  age: [{
    type: 'jsx',
    content: 'age'
  }],
  email: [{
    type: 'jsx',
    content: 'email'
  }],
  undefined: [{
    type: 'jsx',
    content: 'unknown'
  }] 
};

var reponse_unknown = [];

// Send text and get a bot response
module.exports = function chatbot(req, cb) {

  var text = req.text;
  var category = classifier(text);

  cb(responses[category]);
}