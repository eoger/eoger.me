var Promise = require("bluebird");
var natural = require('natural')
var classifier = new natural.BayesClassifier();
var fs = require("fs");
Promise.promisifyAll(fs);

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
  {text: 'What languages do you speak?', topic: 'languages'},
  {text: 'Where can i download your resume?', topic: 'resume'}
];

for(var i = 0; i < questions.length; i++) {
  var question = questions[i];
  classifier.addDocument(question.text, question.topic);
}
classifier.train();

// Send text and get a bot response
module.exports = function chatbot(req) {

  var text = req.text;
  var category = (text === "firstmsg") ? "firstmsg" : classifier.classify(text);

  var path = __dirname + '/../partials/' + category + '.html';

  return fs.readFileAsync(path, {encoding: 'utf-8'}).then(function (data) {
    return {text: data};
  });

}