//random Number guessing game 
var visitorGuess = prompt('Guess a Number between Zero to six');
var randomNumber = Math.random()*6+1;
var correctGuess=false;

if(parseInt(randomNumber) == visitorGuess){
    correctGuess=true;
}
else if(parseInt(randomNumber) > visitorGuess){
    var visitorGuess= prompt('Right number is bigger than your guess');
    if(parseInt(randomNumber) == visitorGuess){
        correctGuess=true;
    }
}

else if(parseInt(randomNumber) < visitorGuess){
    var visitorGuess=prompt('Right number is smaller than your guess');
    if(parseInt(randomNumber) == visitorGuess){
        correctGuess=true;
    }
}

if(correctGuess){
    document.write("You Gussed it correctly");
}else{
    document.write("You Gussed it wrong, right number is: " +randomNumber);
}