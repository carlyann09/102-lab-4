"use strict";


alert('Welcome to The Flower Shop!');

let userName;

userName = prompt('What is your name?');

confirm('Are you sure thats your name?');

let newsLetter = prompt('Would you like to sign up for our newsletter?').trim();
// console.log(hourNow);
let message;
if(newsLetter === 'yes') {
  message = 'What is your email? ';
} else if (newsLetter === 'no'){
  message = 'Ok';
}

console.log(message);

document.write ('Hello ' + userName + '! ' + message);








