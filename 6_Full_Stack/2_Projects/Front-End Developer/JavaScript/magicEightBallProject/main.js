// sets the name if the user
let userName = '';

// greets the user depending if name is given or not
console.log(userName ? `Hello, ${userName}!` : 'Hello!');

// asked the user what their question is
console.log('What is your question?');

// sets the user's question -- EDIT BELOW TO ASK!
let userQuestion = '';

// logs the user's question
console.log(userQuestion);

// generates a randome number from 0 to 7 rounded down
let randomNumber = Math.floor(Math.random() * 8);

// creats eightBall answer variable
let eightBall = '';

// depending on value of randomNumber will assign new value to eightBall
switch (randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Something went wrong, try again';
    break;
}

// logs the assigned value of eightBall after a randomNumber is given
console.log(eightBall);



