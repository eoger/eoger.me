var natural = require('natural')
var classifier = new natural.BayesClassifier();

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

var responses = {
  age: 'I am 24 years old'
};

// Send text and get a bot response
module.exports = function chatbot(req) {

  var text = req.text;
  console.log("User text : " + text);

  var category = classifier.classify(text);
  console.log("Category infered : " + category);

  var response = responses[category];

  if(!response) {
    response = 'I didn\'t quite get this, can you reformulate your question ?';
  }

  console.log("Bot response : " + response);

  return {text: response};

}