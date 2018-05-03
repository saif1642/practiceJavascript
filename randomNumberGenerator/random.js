//Generate random Number beetweens zero to user range

var range = prompt('Enter your range:');

var randomNumber = Math.random()*range+1;

document.write("Generated Random Number is: "+randomNumber);