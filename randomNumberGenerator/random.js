//Generate random Number beetweens zero to user range

// var range = prompt('Enter your range:');

// var randomNumber = Math.random()*range+1;

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var minRange = prompt('Enter the minimum range');
var maxRange = prompt('Enter the maximum range');
var randomNumber = getRandomInteger(minRange,maxRange);
console.log(randomNumber);
document.write("Generated Random Number between "+minRange +" and "+maxRange+" is: "+randomNumber);