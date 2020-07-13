/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted
 to input a guess number. If the user input matches with guess number, the program will display a message 
 "Good Work" otherwise display a message "Not matched".*/
const num = prompt("Enter a number between 0 to 9");
if (num < 0 || num > 10)
  alert("INVALID NUMBER! Enter a number between 1 and 10");
/*Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)*/
let a = Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
console.log(a);
if (a == num) alert("GOOD WORK! You guessed the number right");
else alert("You lost! Better luck next time");
