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


function guessANumber(){
    //declare a variable to store some information or values
    let answer;
  
    while(answer != 3){
      answer = prompt('Guess a number between 1 and 15');
      if(answer != 3 ){
        alert('Try again');
      } else {
        alert('You are Correct!!!! Nice Job.');
      }
    }
}
        guessANumber();



// function displayRating(){
    
//     let output = '';
    
//     let pacMans =  prompt('Scale of 1 to 5, how many stars would you give our site?');
    
//         for(let i = 0; i < stars; i++){
//           console.log(i);
//           output += '<img src="images/star.jpeg" height="250px" width="250px"  />';
//         }
 
//         return document.write(output);
//     }
    
//     displayRating();

    





