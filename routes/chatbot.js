var express = require('express');
var router = express.Router();
var bayes = require('bayes')
var classifier = bayes();

// learning phase
var questions = [
  {text: 'How old are you?', topic: 'age'},
  {text: 'What\'s your age?', topic: 'age'},
  {text: 'How are you today?', topic: 'smalltalk'},
  {text: 'How do you do?', topic: 'smalltalk'},
  {text: 'Could you show me your some non-professional works?', topic: 'project'},
  {text: 'Could you show me your previous works?', topic: 'project'},
  {text: 'Could you show me some of your projects?', topic: 'project'},
  {text: 'What are you previous jobs?', topic: 'work'},
  {text: 'Where did you work before?', topic: 'work'},
  {text: 'What is your professional experience?', topic: 'work'},
  {text: 'Do you have a car?', topic: 'driving-licence'},
  {text: 'Do you have a driving licence?', topic: 'driving-licence'},
  {text: 'Where do you live?', topic: 'localisation'},
  {text: 'Where are you located?', topic: 'localisation'},
  {text: 'What languages do you speak?', topic: 'language'}
];

for(var i = 0; i < questions.length; i++) {
  var question = questions[i];
  classifier.learn(question.text, question.topic);
}

var responses = {
  age: 'I am 24 years old'
};

// Send text and get a bot response
router.post('/', function (req, res) {

	var text = req.body.text;
  console.log("User text : " + text);

  var category = classifier.categorize(text);
  console.log("Category infered : " + category);

  var response = responses[category];
  console.log("Bot response : " + response);

  res.json({text: response});

})

module.exports = router;