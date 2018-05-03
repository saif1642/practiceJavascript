//Generate random Number beetweens zero to user range

// var range = prompt('Enter your range:');

// var randomNumber = Math.random()*range+1;

function getRandom(max,min){
   var Number = Math.floor(Math.random() * (max - min + 1)) + min;
   return Number;
}

var minRange = prompt('Enter the minimum range');
var maxRange = prompt('Enter the maximum range');
var randomNumber = getRandom(maxRange,minRange);
console.log(randomNumber);
document.write("Generated Random Number between "+minRange +" and "+maxRange+" is: "+randomNumber);