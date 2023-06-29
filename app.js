"use strict";
console.log('app.js is working!')

alert('Welcome to The Flower Shop!');

let userName;

function userNameInput() {
    
    userName = prompt('What is your name?');

    confirm('Are you sure thats your name?');

    return document.write(' Hello, ' + userName + '!');
}



function newsLetterInput() {

    let newsLetter = prompt('Would you like to sign up for our newsletter?').trim();
    // console.log(newsLetter);
    let message;
    if (newsLetter === 'yes') {
        message = 'What is your email? ';
    } else if (newsLetter === 'no') {
        message = 'Ok';
    }

    document.write('We are happy you are here, ' + userName + '! ' + message);
}








