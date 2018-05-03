// // capture visitor input
// var visitorName=prompt('What is your name?');

// //combining visitor input with string

// const message ="Hello"+ visitorName+", Welcome to my site";

// alert(message);




//Making a Story board

var q = 3;
var questionsLeft = ' [ '+q+ " questions left to answer " +']'

var visitorAdjective = prompt('Enter a Adjective '+questionsLeft);
q-=1;
var visitorVerb = prompt('Enter a Verb '+questionsLeft);
q-=1;
var visitorNoun =prompt('Enter a Noun '+questionsLeft);
alert('you are done, Ready to see your story?');


var story = "Once upon a time there was a "+visitorAdjective+" programmer named "+visitorNoun+" who loved to do "+visitorVerb;
document.write(story);