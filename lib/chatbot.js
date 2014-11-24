var natural = require('natural')
var classifier = new natural.BayesClassifier();

// learning phase
var questions = [
  {text: 'How old are you?', topic: 'age'},
  {text: 'What\'s your age?', topic: 'age'},
  {text: 'Where were you born?', topic: 'age'},
  {text: 'Where is your birthplace?', topic: 'age'},
  {text: 'Could you show me your some non-professional works?', topic: 'project'},
  {text: 'Could you show me your previous works?', topic: 'project'},
  {text: 'Could you show me some of your projects?', topic: 'project'},
  {text: 'What are you previous jobs?', topic: 'work'},
  {text: 'Where did you work before?', topic: 'work'},
  {text: 'What is your professional experience?', topic: 'work'},
  {text: 'What are your previous work experiences?', topic: 'work'},
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

var multiResponses = {
  work: ['work1', 'work2']
};

// Send text and get a bot response
module.exports = function chatbot(req, cb) {

  var text = req.text;
  var category;

  if(text === 'firstmsg') {
    category = 'firstmsg'
  }
  else {
    var classifications = classifier.getClassifications(text);

     // When nothing if found, the classifier tends to report multiple identical values
    if(classifications.length < 2 || classifications[0].value !== classifications[1].value) {
      category = classifications[0].label;
    }
  }

  if(category) {
    console.log('Question: ' + text + '\n' + 'Category infered: ' + category);
  }
  else {
    console.log('Question unanswered: ' + text);
  }

  var multiResps = multiResponses[category];
  if(multiResps) {
    cb(multiResps);
  }
  else {
    cb([category]);
  }

}