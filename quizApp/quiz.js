alert('Starting a new quiz game .. ');
var correct = 0;

var questions = ["Who is Father of Bangladeshi Nation?","What is 5 times 55?","How many bone human have?","Who is Bangladesh T20 Captain?","Who are you?"];
var answer = ["Sheikh Mujibur Rahman","275","206","Shakib Al Hasan","Human"];

var Q1 = prompt(questions[0]);
if(Q1===answer[0]){
   correct+=1;
}
var Q2 = prompt(questions[1]);
if(Q2===answer[1]){
   correct+=1;
}
var Q3 = prompt(questions[2]);
if(Q3===answer[2]){
   correct+=1;
}
var Q4 = prompt(questions[3]);
if(Q4===answer[3]){
   correct+=1;
}

var Q5 = prompt(questions[4]);
if(Q5===answer[4]){
   correct+=1;
}

if(correct==5){
    document.write('You are a Gold player');
}else if(correct==4){
    document.write('you are a silver player');
}else if(correct==3){
    document.write('you are a bronze player');
}else{
    document.write('Get out of Bangladesh');
}

